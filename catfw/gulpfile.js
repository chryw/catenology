var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('default', function(){
  gulp.src('sass/catfw.scss')
  .pipe(sass())
  .pipe(minifycss())
  .pipe(gulp.dest('dist'));
  //concat a sass file for codepen
  gulp.src(['sass/_variables.scss','sass/mixins/*.scss','sass/_typography.scss','sass/_code.scss','sass/_grid.scss','sass/_buttons.scss','sass/_links.scss','sass/_labels.scss','sass/_images.scss','sass/_dialog.scss','sass/_carousel.scss','sass/_navbar.scss','sass/_modal.scss','sass/_pagination.scss','sass/_animation.scss','sass/_icons.scss','sass/_utilities.scss'])
  .pipe(concat('catfw.scss'))
  .pipe(gulp.dest('dist'));
});
