var Path = require('path');
var Gulp = require('gulp');
var Newer = require('gulp-newer');
var Concat = require('gulp-concat');
var Sass = require('gulp-sass');

Gulp.task('sass', function () {

    var bundleConfigs = [{
        entries: [
            './client/sass/variables.scss',
            './client/sass/bootstrap.scss',
            './client/sass/font-awesome.scss',
            './client/sass/custom.scss'
        ],
        dest: './public/assets/css',
        outputName: 'main.min.css'
    }];

    return bundleConfigs.map(function (bundleConfig) {

        return Gulp.src(bundleConfig.entries)
            .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(Concat(bundleConfig.outputName))
            .pipe(Sass({outputStyle: 'compressed'}))
            .pipe(Gulp.dest(bundleConfig.dest));
    });
});
