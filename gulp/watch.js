var Gulp = require('gulp');


Gulp.task('watch', function () {

    global.isWatching = true;
    Gulp.watch('./client/**/*.scss', ['sass']);
    Gulp.watch('./client/**/*.ts', ['typescript']);
});
