function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask
  'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./style'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };
// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./style'));
// };
// var sourcemaps = require('gulp-sourcemaps');

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./style'));
// }

// exports.buildStyles = buildStyles;
// var sourcemaps = require('gulp-sourcemaps');

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('./style'));
// };

// exports.buildStyles = buildStyles;
// - var sass = require('gulp-sass');
// - var compiler = require('sass');
// - sass.compiler = compiler;
// + var sass = require('gulp-sass')(require('sass'));
