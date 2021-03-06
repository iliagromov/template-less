const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const pugData = require('../../data.json');

const { config } = require('../config');

function views() {
  return gulp.src(config.src.pug)
    .pipe($.plumber({ errorHandler: config.errorHandler }))

    //only pass unchanged *main* files and *all* the partials
    .pipe($.changed(config.dest.templates, { extension: '.html' }))

    //filter out unchanged partials, but it only works when watching
    .pipe($.if(browserSync.active, $.cached('pug')))

    //find files that depend on the files that have changed
    .pipe($.pugInheritance({ basedir: config.src.templates, extension: '.pug', skip: 'node_modules' }))

    //filter out partials (folders and files starting with "_" )
    .pipe($.filter(function(file) {
      return !/\_/.test(file.path) && !/^_/.test(file.relative);
    }))

    .pipe($.pug({
      locals: pugData,
      pretty: true,
    }))
    .pipe($.beml({
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '-'
    }))
    .pipe($.fileInclude({ basepath: config.dest.templates }))
    .pipe(gulp.dest(config.dest.templates))
    .pipe(reload({ stream: true }));
}

module.exports = { views }
