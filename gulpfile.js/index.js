'use strict';
const { series, parallel } = require('gulp');

const { styles } = require('./tasks/styles');
const { views } = require('./tasks/views');
const { jsServe, jsBuild } = require('./tasks/scripts');
const { prettifyHTML } = require('./tasks/prettifyHTML');
const { clean } = require('./tasks/clean');
const { copyStatic } = require('./tasks/copyStatic');
const { svgSprite } = require('./tasks/svgSprite');
const { watch } = require('./tasks/watch');

exports.clean = clean;

exports.default = exports.serve = series(
  // clean,
  // views,
  parallel(svgSprite, styles, jsServe),
  watch
);

exports.build = series(
  clean,
  copyStatic,
  parallel(svgSprite, styles, jsBuild, series(views, prettifyHTML))
);

exports['build:fast'] = parallel(
  copyStatic,
  prettifyHTML,
  svgSprite,
  styles,
  jsBuild
);
