'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./src/css/core.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('css/style.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/css/**/*.scss', ['sass']);
});

gulp.task('connect', () => {
  connect.server({
    root: 'dist',
    livereload: true
  });
})

gulp.task('default', gulp.parallel('connect', 'sass'))
