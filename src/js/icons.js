(function (window, document) {
  'use strict';

  var version = 18;

  var scripts = document.getElementsByTagName('script');
  var iconFile;
  if (scripts) {
    for (var i = 0; i < scripts.length; i++) {
      iconFile = scripts[i].getAttribute('data-load-icons');
      if (iconFile) {
        loadIcons(iconFile);
      }
    }
  }

  function loadIcons (iconFile) {
    if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
      return true;
    }

    var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
    var request;
    var data;
    var insertSvg = function () {
      var wrappedData = '<div style="display:none;" aria-hidden="true">' + data + '</div>';
      document.body.insertAdjacentHTML('afterbegin', wrappedData);
    }
    var insert = function () {
      if (document.body) {
        insertSvg();
      } else {
        document.addEventListener('DOMContentLoaded', insertSvg);
      }
    }

    if (isLocalStorage && localStorage.getItem('svgIconVersion') == version) {
      data = localStorage.getItem('svgIconData');
      if (data) {
        insert();
        return true;
      }
    }

    try {
      request = new XMLHttpRequest();
      request.open('GET', iconFile, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          data = request.responseText;
          insert();
          if (isLocalStorage) {
            localStorage.setItem('svgIconData', data);
            localStorage.setItem('svgIconVersion', version);
          }
        }
      }
      request.send();
    }
    catch (e) {}
  }
}(window, document));
