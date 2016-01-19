var Gulp = require('gulp');
var Webserver = require('gulp-webserver');
 
Gulp.task('webserver', function() {
  Gulp.src('public/')
    .pipe(Webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      directoryListing: false
    }));
});