var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('bundlejs', function() {
  compile();
});

function compile() {
  var b = watchify(browserify('js/game.js', { debug: true }).transform(babelify, {presets: ['es2015']}));

  function bundleJS() {
    b.bundle()
      .on('error', function(err) { console.log('Error: ' + err.message); })
      .pipe(source('js/game.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist'));
  }

  b.on('update', function() {
    bundleJS();
  });

  bundleJS();
}

gulp.task('watch', ['browserSync', 'bundlejs'], function() {
  //gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('dist/js/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  });
});