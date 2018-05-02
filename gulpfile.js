const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

/**
 * -- Top level functions --
 * gulp.task - define tasks
 * gulp.src -  point to files to use
 * gulp.dest - point to folder to output
 * gulp.watch - watch files and folders for changes
 * 
 */


//logs message
gulp.task('message', function() {
  return console.log('Gulp is running...');
});

gulp.task('default', function() {
  return console.log('Gulp is running...');
});

// copy all html files.
gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})


gulp.task('imageMin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('minifyJs', () =>
gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
);