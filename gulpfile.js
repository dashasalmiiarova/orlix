let gulp = require('gulp'),
    browserSync = require('browser-sync');
    gulpCssmin = require('gulp-cssmin'),
    gulpRename = require('gulp-rename'),
    gulpUglify = require('gulp-uglify');
  
gulp.task('mincss', function(){
    return gulp.src('app/css/style.css')
        .pipe(gulpCssmin())
        .pipe(gulpRename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('html', function(){
    return gulp.src('app/index.html')
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('watch', function(){
    gulp.watch('app/css/style.css', gulp.parallel('mincss'))
    gulp.watch('app/index.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});
gulp.task('default', gulp.parallel('mincss', 'js', 'browser-sync', 'watch'))