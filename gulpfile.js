var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./css/source/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/compiled'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/source/*.scss', ['sass']);
});