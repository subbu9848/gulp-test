const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
// // const sass = require("sass");
const concat = require("gulp-concat");

/*
  -- TOP LEVEL FUNCTIONS 
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task("message", function () {
  return console.log("Gulp is running...");
});

// Copy All HTML files
gulp.task("copyHtml", function () {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// Optimize Images
gulp.task("imageMin", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"))
);

// Minify JS
gulp.task("minify", function () {
  gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

// Compile Sass
// gulp.task("sass", function () {
//   gulp
//     .src("src/sass/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("dist/css"));
// });

// Scripts
gulp.task("scripts", function () {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("default", gulp.parallel("message", "copyHtml", "imageMin", "scripts"));

// gulp.task("watch", function () {
//   gulp.watch("src/js/*.js", gulp.parallel["scripts"]);
//   gulp.watch("src/images/*", gulp.parallel["imageMin"]);
//   // gulp.watch("src/sass/*.scss", gulp.parallel["sass"]);
//   gulp.watch("src/*.html", gulp.parallel["copyHtml"]);
// });

// gulp.task("watch", function () {
//   gulp.watch("src/*.html", gulp.series(["copyHtml", "scripts"]));
// });



// Working fine with current code removed sass.  worked watch copyHtml
