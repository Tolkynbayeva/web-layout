const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const paths = {
  scss: './src/scss/**/*.scss',
  css: './dist/css',
  html: './src/*.html',
  js: './src/js/**/*.js',
};

function styles() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './src',
    },
  });
  gulp.watch(paths.scss, styles);
  gulp.watch(paths.html).on('change', browserSync.reload);
  gulp.watch(paths.js).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
