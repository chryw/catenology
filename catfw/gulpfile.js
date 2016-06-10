var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var iconfont = require('gulp-iconfont');
var svgmin = require('gulp-svgmin');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var exec = require('child_process').exec;

gulp.task('default', ['iconfont', 'styles', 'doc']);

//generate icon font from svg files
gulp.task('iconfont', function() {
    gulp.src('fonts/svg/*.svg')
        //minify svg source files
        .pipe(foreach(function(stream, file) {
            return stream
                .pipe(svgmin())
                .pipe(concat(file.path))
        }))
        // generate icon font
        .pipe(gulp.dest('fonts/svg'))
        .pipe(iconfont({
            normalize: true,
            fontHeight: 1000,
            descent: 64,
            fontName: 'catif',
            metadata: 'Catenology Icon Font',
            version: 'v1.0',
            appendCodepoints: true,
            fontPath: 'fonts',
            formats: ['ttf', 'eot', 'woff', 'svg'],
            timestamp: Math.round(Date.now() / 1000)
        }))
        //generate _icons.scss
        .on('glyphs', function(glyphs) {
            var options = {
                fontName: 'catif',
                fontPath: 'fonts/',
                className: 'catif',
                glyphs: glyphs.map(function(glyph) {
                    return {
                        codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase(),
                        name: glyph.name
                    }
                })
            };
            glyphs.forEach(function(glyph, idx, arr) {
                arr[idx].glyph = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
            });
            gulp.src('fonts/_template.scss')
                .pipe(consolidate('lodash', options))
                .pipe(rename('_icons.scss'))
                .pipe(gulp.dest('sass/'));
        })
        .pipe(gulp.dest('dist/fonts/'));
});

//compile stylesheet
gulp.task('styles', function() {
    gulp.src('sass/catfw.scss')
        //compile sass
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        //minify
        .pipe(minifycss())
        .pipe(rename('catfw.min.css'))
        .pipe(gulp.dest('dist'));
});

//just concat a sass file
gulp.task('justsass', function() {
    gulp.src(['sass/_variables.scss', 'sass/mixins/*.scss', 'sass/_typography.scss', 'sass/_code.scss', 'sass/_grid.scss', 'sass/_buttons.scss', 'sass/_links.scss', 'sass/_labels.scss', 'sass/_images.scss', 'sass/_dialog.scss', 'sass/_carousel.scss', 'sass/_navbar.scss', 'sass/_modal.scss', 'sass/_pagination.scss', 'sass/_animation.scss', 'sass/_icons.scss', 'sass/_utilities.scss'])
        .pipe(concat('catfw.scss'))
        .pipe(gulp.dest('dist'));
});

//generate documentation site and build it with jekyll
gulp.task('doc', function(cb) {
    //grab assets
    gulp.src('dist/catfw.min.css')
        .pipe(gulp.dest('doc/css/'));
    gulp.src('dist/fonts/*')
        .pipe(gulp.dest('doc/css/fonts/'));
    //jekyll build the site
    exec(['jekyll b --source doc --destination doc/_site'], function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    })
});
