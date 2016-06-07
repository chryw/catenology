var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('default', function(){
  gulp.src('sass/catfw.scss')
  .pipe(sass())
  .pipe(minifycss())
  .pipe(gulp.dest('dist'));
});
