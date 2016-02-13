var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('scripts', function () {

		var js = Gulp.src('./client/js/*')
		        .pipe(Gulp.dest(Path.join('./public/assets', 'js')));

		var vendor = Gulp.src('./client/js/vendor/*')
		        .pipe(Gulp.dest(Path.join('./public/assets/js', 'vendor')));

		var angular2Jwt = Gulp.src('./node_modules/angular2-jwt/angular2-jwt.js')
		        .pipe(Gulp.dest(Path.join('./public/assets/js', 'angular2-jwt')));

		var jwtDecode = Gulp.src('./node_modules/jwt-decode/build/jwt-decode.js')
		        .pipe(Gulp.dest(Path.join('./public/assets/js', 'jwt-decode')));

    return Merge(js, vendor, angular2Jwt, jwtDecode);
});
