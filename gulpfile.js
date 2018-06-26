'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    svgSprite = require('gulp-svg-sprite'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 20 versions"]});

var path = {
    dest: {
        css:        'dist/css/',
        js:         'dist/js/',
        svg:        'dist/svg'
    },
    src: {
        less:       'src/less/style.less',
        js:         'src/js/*.js',
        svg:        'src/svg/*.svg'
    },
    watch: {
        less:       'src/less/style.less',
        js:         'src/js/*.js',
        svg:        'src/svg/*.svg'
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

gulp.task('svg', function () {
    return gulp.src(path.src.svg)
        .pipe(svgSprite({
            selector: "icon-%f",
            mode: {
                css: { // Activate the «css» mode
                    render: {
                        css: true // Activate CSS output (with default options)
                    }
                }
            }
        }))
        .pipe(gulp.dest(path.dest.svg));
});

gulp.task('watch', function() {
    gulp.watch(path.watch.less);
    gulp.watch(path.watch.js);
    gulp.watch(path.watch.svg);
});

gulp.task('default', ['watch']);