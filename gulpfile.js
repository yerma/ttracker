var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var nodemon = require("nodemon");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ["build:dev", "start", "watch"]);

gulp.task("start", function(cb) {
  var options = {
    watch: ["./src/server/"],
    script: "./index.js",
  }
  nodemon(options);
  nodemon.on("start", cb);
});

gulp.task("watch", ["start"], function() {
  browserSync.init({
    proxy: "http://127.0.0.1:8080",
    port: 3000,
    files: ['public']
  });
	gulp.watch(["src/client/*", "src/client/**/*"], ["build:dev"]).on('change', reload);
});

gulp.task("build:prod", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";

var devCompiler = webpack(myDevConfig);
gulp.task("build:dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		// gutil.log("[webpack:build-dev]", stats.toString({
		// 	colors: true
		// }));
		callback();
	});
});
