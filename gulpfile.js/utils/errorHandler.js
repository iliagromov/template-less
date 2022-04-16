const $ = require('gulp-load-plugins')();

const errorHandler = $.notify.onError('<%= error.message %>');

module.exports = errorHandler
