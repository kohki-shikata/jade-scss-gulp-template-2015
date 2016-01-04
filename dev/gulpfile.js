var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
  gulp.src(["scss/**/*.scss","!scss/**/_*.scss"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("../common/css"));
});

gulp.task('jade', function () {
  gulp.src(['jade/**/*.jade','!jade/**/_*.jade'])
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('../'));
});

var copy_js = [
/*
  'bower_components/swipebox/src/js/jquery.swipebox.min.js',
  'bower_components/slick-carousel/slick/slick.min.js',
  'bower_components/lightbox2/dist/js/lightbox.min.js',
*/
];

var copy_css = [
/*
  'bower_components/slick-carousel/slick/slick.css',
  'bower_components/slick-carousel/slick/slick-theme.css',
  'bower_components/lightbox2/dist/css/lightbox.css'
*/
];

gulp.task('copy', function () {
  gulp.src(copy_js)
   .pipe(gulp.dest('../common/js'));
  gulp.src(copy_css)
   .pipe(gulp.dest('../common/css'));
});

gulp.task('webserver', function() {
  gulp.src('../') // set site root
    .pipe(webserver({
      host: 'localhost',
      port: 7001,
      livereload: true
    }));
});

gulp.task('watch', function(){
  gulp.watch(['scss/**/*.scss','jade/**/*.jade'],['sass','jade']);
});

gulp.task('default', ['webserver','watch']);
