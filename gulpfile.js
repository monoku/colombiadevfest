var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create()

gulp.task('dist-sass', function(cb){
  return gulp.src('content/sass/**/*.sass')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 40 versions'],
    cascade: false
  }))
  // .pipe(cssMin())
  .pipe(gulp.dest('./public/css/'))
  .pipe(browserSync.stream())
})

gulp.task('watch', function (cb) {
  gulp.watch('content/sass/**/*.sass', ['dist-sass'])
  gulp.watch('public/*.html').on('change', browserSync.reload)
})

gulp.task('browser-sync', function(cb) {
  browserSync.init({
    server: {
      baseDir: './',
      proxy: 'localhost:6000'
    }
  })
})

gulp.task('dist', ['dist-sass'], function(){
  console.log('dist ready')
})

gulp.task('default', ['browser-sync', 'dist', 'watch'] , function () {})
