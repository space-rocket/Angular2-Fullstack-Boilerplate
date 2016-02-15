var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('media', function () {

    var metas = Gulp.src('./client/media/*')
        .pipe(Gulp.dest(Path.join('./public/')));

    var fontAwewsome = Gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(Gulp.dest(Path.join('./public/assets', 'fonts', 'font-awesome', 'fonts')));

    var glyphicons = Gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(Gulp.dest(Path.join('./public/assets', 'fonts', 'bootstrap')));

		var img = Gulp.src('./client/img/*')
		        .pipe(Gulp.dest(Path.join('./public/assets', 'img')));

    return Merge(metas, fontAwewsome, glyphicons, img);
});
