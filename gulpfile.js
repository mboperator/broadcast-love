const gulp = require("gulp");
const image = require("gulp-image");
const htmlmin = require("gulp-htmlmin");

function images() {
  return gulp
    .src("src/images/*")
    .pipe(image())
    .pipe(gulp.dest("public/images"));
}

function public() {
  return gulp.src("src/public/*").pipe(gulp.dest("public"));
}

function styles() {
  return gulp.src("src/*.css").pipe(gulp.dest("public"));
}

function html() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("public"));
}

gulp.task("build", gulp.parallel(images, html, styles, public));
