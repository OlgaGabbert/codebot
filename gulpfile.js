const gulp = require('gulp');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');

function bundleHtml() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

function bundleJs() {
  return gulp.src('src/main.js')
    .pipe(terser())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
}

function bundleCss() {
  return gulp.src('src/styles.css')
    .pipe(cleanCSS())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist'));
}

function bundleAll() {
  return gulp.src(['src/index.html', 'src/main.js', 'src/styles.css'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(terser())
    .pipe(cleanCSS())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('dist'));
}

exports.default = gulp.series(bundleAll);
