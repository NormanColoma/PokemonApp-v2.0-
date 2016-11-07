var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('minify', function() {
    return gulp.src(['!src/app/app.module.js','src/app/*.js', 'src/app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('src/scripts'));
});