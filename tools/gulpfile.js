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
    plumber = require('gulp-plumber'),
    del = require('del');

var distribution = {
        destination: "../assets/distribution/";
    },
    styles = {
        destination: "../assets/distribution/styles/",
        source: "../assets/source/styles/**/*.scss",
        output: "min.css";
    },
    scripts = {
        destination: "../assets/distribution/scripts/",
        source: "../assets/source/scripts/**/*.js",
        output: "min.js";
    },
    markup = {
        destination: "../assets/distribution/markup/",
        source: "../assets/source/markup/**/*.kit";
    },
    index = {
        destination: "../../assets/",
        source: "../../assets/source/markup/index.kit";
    },
    images = {
        destination: "../assets/distribution/images/",
        source: "../assets/source/images/**/*";
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
        // .pipe(cleancss())
        .pipe(concat(styles.output))
        .pipe(gulp.dest(styles.destination));
});

gulp.task('markup', function() {
    return gulp.src(markup.source)
        .pipe(plumber())
        .pipe(kit())
        .pipe(gulp.dest(markup.destination));
});

gulp.task('index', function() {
    return gulp.src(index.source)
        .pipe(plumber())
        .pipe(kit())
        .pipe(gulp.dest(index.destination));
});

gulp.task('images', function() {
    return gulp.src(images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(images.destination));
});

gulp.task('clean', function() {
    console.log('deleting distribution folder');
    return del(gulp.dest(distribution.destination));
});

gulp.task('watch', function () {
    gulp.watch(scripts.source, ['scripts']);
    gulp.watch(styles.source, ['styles']);
    gulp.watch(markup.source, ['markup']);
    gulp.watch(index.source, ['index']);
});

gulp.task('default', ['watch']);
