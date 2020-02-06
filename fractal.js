'use strict';

const pkg = require('./package.json');
const fractal = (module.exports = require('@frctl/fractal').create());
const d = new Date();
const currDate = d.getDate();
const options = {month: 'long'};
const currMonth = new Intl.DateTimeFormat('en-US', options).format();
const currYear = d.getFullYear();

fractal.set('project.title', 'Jack Henry Design System');
fractal.set('project.version', pkg.version);
fractal.set('currentDate', currMonth + ' ' + currDate + ', ' + currYear);

fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@jha-content');

fractal.components.set('statuses', {
  wip: {
    label: 'Work in progress',
    description:
      'The pattern is in an experimental, active development phase. The pattern should not be implemented into production code.',
    color: '#eb002b',
  },
  review: {
    label: 'Under review',
    description:
      "The pattern's design, code or usage is being re-examined or further tested. The pattern is likely to either have changes or be deprecated in the near future.",
    color: '#cfb500',
  },
  ready: {
    label: 'Ready',
    description: 'The pattern is ready to be implemented into production code.',
    color: '#a4d65e',
  },
  new: {
    label: 'Ready, new',
    description:
      'The pattern is brand new to the library and ready to be implemented.',
    color: '#0093b2',
  },
  updated: {
    label: 'Ready, updated',
    description:
      'The existing pattern has undergone review, refinement and re-release and is ready to be implemented.',
    color: '#af1685',
  },
  deprecated: {
    label: 'Deprecated',
    description:
      'The pattern has either been replaced by a new pattern or is no longer supported.',
    color: '#666666',
  },
});

/* fractal.docs.set('path', __dirname + '/src/docs'); */

fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  open: true,
  notify: false,
});
fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('builder.dest', __dirname + '/build');

const customMandelbrot = require('@frctl/mandelbrot')({
  styles: ['default', '/themes/custom-mandelbrot/assets/styles/theme.css'],
  panels: ['notes', 'info', 'html', 'view', 'context', 'resources'],
  favicon: '/themes/custom-mandelbrot/assets/favicon.ico',
});
customMandelbrot.addLoadPath(
  __dirname + '/dist/themes/custom-mandelbrot/views'
);
fractal.web.theme(customMandelbrot);
