var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(done) {
    runSequence('nunjucks', 'sass', 'angular', 'typescript', 'media', 'scripts', function() {
			    runSequence('webserver', function() {});
        done();
    });
});