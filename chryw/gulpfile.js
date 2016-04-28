var sassJson = require('gulp-sass-json');
var gulp = require('gulp');

gulp.task('sass-json', function () {
    return gulp
        .src('chryw/_sass/partials/_variables.scss')
        .pipe(sassJson())
        .pipe(gulp.dest('.'));
});
