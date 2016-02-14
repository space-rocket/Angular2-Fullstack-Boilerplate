var gulp = require('gulp');

gulp.task('build', ['nunjucks', 'sass', 'angular', 'typescript', 'media', 'scripts', 'html']);
