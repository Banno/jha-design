'use strict';

var gulp            = require('gulp');
var merge           = require('merge-stream');
var header          = require('gulp-header');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');
var cssmin          = require('gulp-cssmin')
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
var connect         = require('gulp-connect');
var imagemin        = require('gulp-imagemin');
var stylestats      = require('gulp-stylestats');
var phantomcss      = require('gulp-phantomcss');
var del             = require('del');
var pkg             = require('./package.json');

var allSrc          = ['src/**'];

gulp.task('clean', function (cb) {
  return del(['dist/**'], cb);
});

gulp.task('copy', function() {
  var html = gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
  var favicon = gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'));
  var fonts = gulp.src('src/fonts/*', { base: 'src' })
    .pipe(gulp.dest('dist'));
  var js = gulp.src('src/js/*', { base: 'src' })
    .pipe(gulp.dest('dist'));

  return merge(html, favicon, fonts, js);
});

gulp.task('styles', function() {
  var banner = ['/*!',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    '*/',
    ''].join('\n');

  return gulp.src('src/css/core.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('symitar-theme', ['styles'], function() {
  var banner = ['/*!',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @theme Symitar',
    '*/',
    ''].join('\n');

  return gulp.src('src/css/themes/symitar.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename('style-symitar.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('stylestats', function() {
  gulp.src('dist/css/*.css')
    .pipe(stylestats());
});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('icons', function() {
  return gulp.src('src/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('file-icons', function() {
  return gulp.src('src/img/file-types/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/img/file-types'));
})

gulp.task('connect', function() {
  return connect.server({
    root: 'dist',
    port: 7777,
    livereload: true
  });
});

// Tests
gulp.task('test-server', function() {
  return connect.server({
    root: 'dist',
    port: 7777
  });
})

gulp.task('phantomcss', ['test-server'], function() {
  return gulp.src('testsuite.js')
    .pipe(phantomcss({
      screenshots: 'tests/screenshots',
      results: 'test/results',
      viewportSize: [1280, 800]
    }));
});

gulp.task('stop-test-server', ['phantomcss'], function() {
  connect.serverClose();
})

gulp.task('watch', function() {
  return gulp.watch(allSrc, ['copy', 'styles', 'icons', 'images']);
});

gulp.task('default', ['copy', 'styles', 'icons', 'file-icons', 'images', 'symitar-theme']);
gulp.task('dev', ['default', 'connect', 'watch']);
gulp.task('profile', ['stylestats']);
gulp.task('test', ['stop-test-server']);
