const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config.js');
const { config } = require('../config');

const indexJs = `${config.src.root}/js/index.js`

// view and check scripts
const jsServe = function () {
  webpackConfig.mode = 'development';
  webpackConfig.devtool = 'eval-source-map';

  return (
    gulp
      .src(indexJs)
      .pipe(webpackStream(webpackConfig))
      // .pipe($.rename({ suffix: '.min' }))
      .pipe(gulp.dest(config.dest.js))
  );
};

const jsBuild = function () {
  return (
    gulp
      .src(indexJs)
      .pipe(webpackStream(webpackConfig))
      // .pipe($.rename({ suffix: '.min' }))
      .pipe(gulp.dest(config.dest.js))
  );
};

module.exports = { jsServe, jsBuild };
