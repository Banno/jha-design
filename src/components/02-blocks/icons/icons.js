!(function(window, document) {
  'use strict';
  function loadIcons(iconFile) {
    if (
      !document.createElementNS ||
      !document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        .createSVGRect
    )
      return !0;
    var request,
      data,
      isLocalStorage = 'localStorage' in window && null !== window.localStorage,
      insertSvg = function() {
        var wrappedData =
          '<div style="display:none;" aria-hidden="true">' + data + '</div>';
        document.body.insertAdjacentHTML('afterbegin', wrappedData);
      },
      insert = function() {
        document.body
          ? insertSvg()
          : document.addEventListener('DOMContentLoaded', insertSvg);
      };
    if (
      isLocalStorage &&
      localStorage.getItem('svgIconVersion') == version &&
      (data = localStorage.getItem('svgIconData'))
    )
      return insert(), !0;
    try {
      (request = new XMLHttpRequest()),
        request.open('GET', iconFile, !0),
        (request.onload = function() {
          request.status >= 200 &&
            request.status < 400 &&
            ((data = request.responseText),
            insert(),
            isLocalStorage &&
              (localStorage.setItem('svgIconData', data),
              localStorage.setItem('svgIconVersion', version)));
        }),
        request.send();
    } catch (e) {}
  }
  var iconFile,
    version = 26,
    scripts = document.getElementsByTagName('script');
  if (scripts)
    for (var i = 0; i < scripts.length; i++)
      (iconFile = scripts[i].getAttribute('data-load-icons')),
        iconFile && loadIcons(iconFile);
})(window, document);