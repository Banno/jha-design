'use strict';

var gulp            = require('gulp');
var merge           = require('merge-stream');
var header          = require('gulp-header');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');
var csso            = require('gulp-csso');
var cmq             = require('gulp-combine-media-queries');
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
var connect         = require('gulp-connect');
var imagemin        = require('gulp-imagemin');
var stylestats      = require('gulp-stylestats');
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

  return merge(html, favicon, fonts);
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
    .pipe(cmq())
    .pipe(csso())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename('style.min.css'))
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

gulp.task('watch', function() {
  return gulp.watch(allSrc, ['copy', 'styles', 'icons', 'images']);
});

gulp.task('default', ['copy', 'styles', 'icons', 'file-icons', 'images']);
gulp.task('dev', ['default', 'connect', 'watch']);
gulp.task('profile', ['stylestats']);
