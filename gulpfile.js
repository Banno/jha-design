'use strict';

var gulp            = require('gulp');
var merge           = require('merge-stream');
var header          = require('gulp-header');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');
var cssmin          = require('gulp-cssmin');
var svgstore        = require('gulp-svgstore');
var svgmin          = require('gulp-svgmin');
var connect         = require('gulp-connect');
var imagemin        = require('gulp-imagemin');
var uglify          = require('gulp-uglify');
var del             = require('del');
var pkg             = require('./package.json');

var allSrc          = ['src/**'];

gulp.task('clean', function (cb) {
  return del(['dist/**'], cb);
});

gulp.task('copy', function() {
  var html = gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
  var manifest = gulp.src('src/manifest.json')
    .pipe(gulp.dest('dist/'));
  var favicon = gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist'));
  var fonts = gulp.src('src/fonts/*', { base: 'src' })
    .pipe(gulp.dest('dist'));

  return merge(html, manifest, favicon, fonts);
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

gulp.task('compress', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('app-icons', function() {
  return gulp.src('src/img/icons/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img/icons'));
});

gulp.task('icons', function() {
  return gulp.src('src/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('dist/img'));
});


gulp.task('svgs', function() {
  return gulp.src('src/img/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('connect', function() {
  return connect.server({
    root: 'dist',
    port: 7777,
    livereload: true
  });
});

gulp.task('watch', function() {
  return gulp.watch(allSrc, ['copy', 'styles', 'icons', 'app-icons', 'images', 'compress']);
});

gulp.task('default', ['copy', 'styles', 'icons', 'app-icons', 'svgs', 'images', 'compress']);
gulp.task('dev', ['default', 'connect', 'watch']);
