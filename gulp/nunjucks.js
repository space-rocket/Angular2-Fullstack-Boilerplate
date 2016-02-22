var Gulp = require('gulp');
var Nunjucks = require('gulp-nunjucks-html');
var Prettify = require('gulp-html-prettify');
 
Gulp.task('nunjucks', function() {


  return Gulp.src('./server/views/pages/**/*.+(html|nunjucks)')

    .pipe(Nunjucks({
      searchPaths: ['./server/views/templates/']
    }))
		.pipe(Prettify({
			indent_char: ' ', 
			indent_size: 2,
			remove_intertag_spaces: true
		}))
    .on('error', function(err) {
      console.log('something went wrong') 
    })
    .pipe(Gulp.dest('public'));
});