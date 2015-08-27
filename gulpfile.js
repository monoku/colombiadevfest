var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('dist-sass', function(cb){
  return gulp.src('content/sass/**/*.sass')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 40 versions'],
    cascade: false
  }))
  .pipe(cssMin())
  .pipe(gulp.dest('./dist/css/'))
})

gulp.task('watch', function () {
  gulp.watch('content/sass/**/*.sass', ['dist-sass'])
  gulp.watch('./*.html')
})

gulp.task('dist', ['dist-sass'], function(){
  console.log('dist ready')
})

gulp.task('default', ['dist', 'watch'] , function () {})
