'use strict';

const gulp = require('gulp');
const merge = require('merge-stream');
const prepend = require('gulp-prepend');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const del = require('del');
const pkg = require('./package.json');

const allSrc = ['src/**'];

const clean = (cb) => {
  del.sync(['dist/**']);
  cb();
};

const copy = () => {
  const html = gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
  const manifest = gulp.src('src/manifest.json')
    .pipe(gulp.dest('dist/'));
  const favicon = gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'));
  const fonts = gulp.src('src/fonts/*', { base: 'src' })
    .pipe(gulp.dest('dist'));

  return merge(html, manifest, favicon, fonts);
};

const styles = () => {
  const banner = ['/*!',
    ` * ${pkg.name} - ${pkg.description}`,
    ` * @version v${pkg.version}`,
    ` * @link ${pkg.homepage}`,
    '*/',
    ''].join('\n');

  return gulp.src('src/css/core.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(prepend(banner))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
};

const compress = () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist/js'));
};

const images = () => {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'));
};

const appIcons = () => {
  return gulp.src('src/img/icons/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img/icons'));
};

const icons = () => {
  return gulp.src('src/icons/*.svg')
    .pipe(svgmin({
      plugins: [
        {
          removePrefixedAttributes: {
            type: 'perItem',
            fn: (item) => {
              item.eachAttr((attr) => {
                if (attr.prefix && attr.local) {
                  item.removeAttr(attr.name);
                }
              });
            }
          }
        },
        {
          removeAttrs: {
            attrs: '(xmlns)'
          }
        }
      ]
    }))
    .pipe(gulp.dest('dist/icons'))
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img'));
};


const svgs = () => {
  return gulp.src('src/img/**/*.svg')
    .pipe(svgmin({
      plugins: [
        {
          removePrefixedAttributes: {
            type: 'perItem',
            fn: (item) => {
              item.eachAttr((attr) => {
                if (attr.prefix && attr.local) {
                  item.removeAttr(attr.name);
                }
              });
            }
          }
        },
        {
          removeAttrs: {
            attrs: '(xmlns)'
          }
        }
      ]
    }))
    .pipe(gulp.dest('dist/img'));
};

const serverConnect = () => {
  return connect.server({
    root: 'dist',
    port: 7777,
    livereload: true
  });
};

const watch = () => {
  return gulp.watch(allSrc, ['copy', 'styles', 'icons', 'appIcons', 'images', 'compress']);
};

module.exports.dev = gulp.series(clean, copy, styles, icons, appIcons, svgs, images, compress, serverConnect, watch);

const defaultTasks = gulp.series(clean, copy, styles, icons, appIcons, svgs, images, compress);

module.exports.default = defaultTasks;
