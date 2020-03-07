const gulp = require("gulp");
const image = require("gulp-image");
const postcss = require("postcss");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();

function images() {
  return gulp
    .src("src/images/*")
    .pipe(image())
    .pipe(gulp.dest("public/images"));
}

function videos() {
  return gulp.src("src/videos/*").pipe(gulp.dest("public/images"));
}

function public() {
  return gulp.src("src/public/*").pipe(gulp.dest("public"));
}

function styles() {
  return gulp.src("src/styles.css").pipe(gulp.dest("public"));
}

function html() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("public"));
}

gulp.task("build", gulp.parallel(images, html, styles, public, videos));

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch("src/*.html", function(done) {
    browserSync.reload();
    done();
  });

  gulp.watch("src/*.css", function(done) {
    browserSync.reload();
    done();
  });
});
