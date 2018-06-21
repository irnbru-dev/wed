'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 20 versions"]});

var path = {
    dest: {
        css:        'dist/css/',
        js:         'dist/js/'
    },
    src: {
        less:       'src/less/style.less',
        js:         'src/js/*.js'
    },
    watch: {
        less:       'src/less/style.less',
        js:         'src/js/*.js'
    }
};

gulp.task('js', function() {
    return gulp.src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dest.js))
});

gulp.task('less', function () {
    return gulp.src(path.src.less)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(uglifycss({
            "maxLineLen": 500,
            "uglyComments": true
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(path.dest.css))
});

gulp.task('watch', function() {
    gulp.watch(path.watch.less);
    gulp.watch(path.watch.js);
});

gulp.task('default', ['watch']);