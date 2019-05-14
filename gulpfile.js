'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
 
sass.compiler = require('node-sass');

gulp.task('clean:css', () => {
  return del([
      'dist/css/*',
  ]);
});

gulp.task('clean:html', () => {
    return del([
        'dist/*.html',
    ]);
});

<<<<<<< HEAD
=======
gulp.task('clean:images', () => {
    return del([
        'dist/images/*',
    ]);
});

>>>>>>> 0de23440822fa6572896dbeba008861527a08357
gulp.task('sass', function () {
  return gulp.src('source/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function(){
    return gulp.src('source/*.html')
      .pipe(gulp.dest('dist/'));
});

<<<<<<< HEAD
=======
gulp.task('images', function() {
    return gulp.src('source/images/**/*.*')
        .pipe(gulp.dest('dist/images/'));
});

>>>>>>> 0de23440822fa6572896dbeba008861527a08357
gulp.task('watch', function() {
    gulp.watch('source/*.html', (done) => {
        gulp.series(['clean:html', 'html'])(done);
    });
<<<<<<< HEAD
    gulp.watch('source/styles/*.scss', (done) => {
        gulp.series(['clean:css', 'sass'])(done);
    });
});

const init = ['clean:css', 'sass', 'clean:html', 'html']
=======
    gulp.watch('source/styles/**/*.scss', (done) => {
        gulp.series(['clean:css', 'sass'])(done);
    });
    gulp.watch('source/images/**/*.*', (done) => {
        gulp.series(['clean:images', 'images'])(done);
    });
});

const init = [
    'clean:css',
    'sass',
    'clean:html',
    'html',
    'clean:images',
    'images'
];
>>>>>>> 0de23440822fa6572896dbeba008861527a08357

gulp.task('default', gulp.series([...init,'watch']));