var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');
var NunjucksRender = require('gulp-nunjucks-render');


Gulp.task('html', function () {

		var mvHtml = Gulp.src('./client/html/*')
		        .pipe(Gulp.dest(Path.join('./public/')));

    return Merge(mvHtml);
});
