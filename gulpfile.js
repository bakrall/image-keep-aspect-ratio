const gulp = require('gulp'),
  sass = require('gulp-sass');

function compileScss() {
  return (
    gulp
      .src('public/scss/*.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('public/css'))
  )
}

function watchFiles() {
  gulp.watch('public/scss/*.scss', compileScss);
}

exports.default = watchFiles;