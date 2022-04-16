const SRC = "src";
const DEST = "dist";

const config = {
  src: {
    root: `${SRC}`,
    templates: `${SRC}/templates`,
    pug: `${SRC}/**/*.pug`,
    styles: `${SRC}/styles`,
    scss: `${SRC}/styles/**/*.{sass,scss}`,
    js: `${SRC}/js/**/*.js`,
    svgSprite: `${SRC}/svg-sprite`,
    static: `${SRC}/static`
  },
  dest: {
    root: `${DEST}`,
    templates: `${DEST}`,
    styles: `${DEST}/css`,
    js: `${DEST}/js`,
    images: `${DEST}/img`
  },
  browserSync: {
    reloadOnRestart: true,
    notify: false,
    startPath: "/",
    server: {
      baseDir: [`${SRC}/static`, `${SRC}`, `${DEST}`]
    }
  },
  errorHandler: require("./utils/errorHandler")
};

module.exports = { config };
