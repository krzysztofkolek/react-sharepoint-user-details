var gulp = require('gulp');
var browserfy = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserfy('./Scripts/HelloAddIn.jsx')
        .transform(babelify)
        .bundle()
        .pipe(source('HelloAddIn.js'))
        .pipe(gulp.dest('./Scripts/build/'));
});