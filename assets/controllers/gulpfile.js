/*
    FILE STRUCTURE ------------------------------------------------------------

    assets
    -- distribution
    ---- images
    ---- markup
    ---- scripts
    ---- styles
    -- source
    ---- images
    ---- markup
    ---- scripts
    ---- styles
    -- controllers
    ---- node_modules
*/


var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    kit = require('gulp-kit'),
    plumber = require('gulp-plumber');

var root = {
        destination: "../distribution/"
    },
    styles = {
        destination: "../distribution/styles/",
        source: "../source/styles/**/*.scss",
        output: "min.css"
    },
    scripts = {
        destination: "../distribution/scripts/",
        source: "../source/scripts/**/*.js",
        output: "min.js"
    },
    markup = {
        destination: "../distribution/markup/",
        source: "../source/markup/**/*.kit"
    },
    images = {
        destination: "../distribution/images/",
        source: "../source/images/**/*"
    };

gulp.task('scripts', function () {
    return gulp.src(scripts.source)
        .pipe(plumber())
        .pipe(concat(scripts.output))
        .pipe(uglify())
        .pipe(gulp.dest(scripts.destination));
});

gulp.task('styles', function () {
    return gulp.src(styles.source)
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(concat(styles.output))
        .pipe(gulp.dest(styles.destination));
});

gulp.task('markup', function() {
    return gulp.src(markup.source)
        .pipe(plumber())
        .pipe(kit())
        .pipe(gulp.dest(markup.destination));
});

gulp.task('images', function() {
    return gulp.src(images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(images.destination));
});

gulp.task('watch', function () {
    gulp.watch(scripts.source, ['scripts']);
    gulp.watch(styles.source, ['styles']);
    gulp.watch(markup.source, ['markup']);
});

gulp.task('default', ['watch']);
