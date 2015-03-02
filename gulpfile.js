var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var path = require('path');
var connect = require("gulp-connect");
var shell = require("gulp-shell");

var paths = {
  scripts: ["src/js/**/*"],
  vendor: ["src/vendor/**/*"],
  statics: ["src/*.html", "src/img/**/*", "src/css/**/*"]
};

gulp.task("vendor", function() {
  gulp.src(paths.vendor)
    .pipe(plugins.concat("vendor.js"))
    .pipe(gulp.dest("www/vendor"));
});

gulp.task("statics", function() {
  gulp.src(paths.statics, {
    base: "src"
  })
    .pipe(gulp.dest("www"));
});

gulp.task("browserify", function() {
  var bundleStream = browserify()
    .add("./src/js/index.js")
    .bundle();

  bundleStream.on("error", function(error) {
    plugins.util.log(plugins.util.colors.red(error));
    this.end();
  });

  bundleStream.pipe(source("index.js"))
    .pipe(gulp.dest("www/js"))
    .pipe(connect.reload());
});

gulp.task("android", ["vendor", "statics", "browserify"], shell.task([
  "cordova build android"
]));

gulp.task("default", ["vendor", "statics", "browserify"], function() {
  connect.server({
    root: "www",
    livereload: true,
    port: 9000
  });
  gulp.watch(paths.scripts, ["vendor", "statics", "browserify"]);
  gulp.watch(paths.vendor, ["vendor", "statics", "browserify"]);
  gulp.watch(paths.statics, ["vendor", "statics", "browserify"]);
});