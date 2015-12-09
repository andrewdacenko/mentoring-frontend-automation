var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var browserSync = require('browser-sync').create();

gulp.task('html', function() {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('public'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream());
});

gulp.task('vendors', function() {
  return gulp.src('vendors/angular/angular.js')
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('public'));
})

// process JS files and return the stream.
gulp.task('js', ['vendors'], function() {
  return gulp.src([
      'src/js/app.js',
      'src/js/!(*.spec).js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('public'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['default'], function() {

  browserSync.init({
    server: './public'
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('public/*.js', ['js-watch']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['html', 'sass', 'js']);