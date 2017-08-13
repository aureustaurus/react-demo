var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  babel = require('gulp-babel'),
  gutil = require("gulp-util"),
  Cache = require('gulp-file-cache'),
  plumber = require("gulp-plumber"),
  webpack = require("webpack"),
  exec = require("child_process").exec,
  WebpackDevServer = require("webpack-dev-server")
  ;

gulp.task('start', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: { NODE_ENV: "development" }
  })
});

gulp.task("jsx", function() {
    return gulp.src("./client/views/*.jsx").pipe(plumber()).pipe(babel({
      presets: ["es2015", "stage-0", "react"]}
    )).pipe(gulp.dest("./client/build"))
});

gulp.task("jsx:watch", function() {
    gulp.watch("./client/views/*.jsx", ["jsx"])
});

gulp.task("watch", function() {
    gulp.watch("./client/*.js")
});

gulp.task("webpack", function(callback) {
    var webpackConfig = require("./webpack.config.js")

    webpack(webpackConfig, function(err, stats) {
        if (err) {
          console.log('ERROR');
          throw new gutil.PluginError("webpack", err)
        }

        callback()
    })
})

gulp.task("webpack-dev-server", function(callback) {
    var webpackConfig = require("./webpack.config.js")
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig)

    new WebpackDevServer(compiler, {
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: "/assets/",
        headers: { "Access-Control-Allow-Origin": "*" }
    }).listen(8080, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err)
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html")
    })
})

gulp.task('default', ['start', 'jsx', 'jsx:watch', 'watch', 'webpack', 'webpack-dev-server']);