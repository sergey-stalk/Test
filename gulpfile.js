var gulp = require('gulp'), 
	scss = require('gulp-sass'),
	server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false,
      defaultFile: 'index.html'
    }));
});

gulp.task("scss", function () {
        gulp.src(
            "..scss/**/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest("../css"));
    });

gulp.task('watch', function () {
	gulp.watch(['sass/**/*.scss', 'sass/**/*.sass'],['scss']);
});

gulp.task('default', ['watch', 'webserver']);

 


