import config from '../config';
import { browser } from '../../package.json';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const copy = require('postcss-copy');
const cssnext = require('postcss-cssnext');
const messages = require('postcss-browser-reporter');
const nested = require('postcss-nested');
const colorFunction = require('postcss-color-function');
const units = require('postcss-units');
const media = require('gulp-group-css-media-queries');
const csso = require('gulp-csso');
const csscomb = require('gulp-csscomb');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const combiner = require('stream-combiner2').obj;

const isDevelop = (process.env.NODE_ENV === 'develop');
const processor = [
  require('postcss-partial-import'),
  copy({
    src: config.components,
    dest: config.dist,
    template: 'static/i/[path]/[name].[ext]',
    keepRelativePath: false
  }),
  units(),
  cssnext(),
  nested(),
  colorFunction(),
  autoprefixer({
    browsers: browser
  }),
  messages({
    selector: 'body:before'
  })
];

gulp.task('styles', () => {
  return combiner(
    gulp
      .src(`${config.components}*.css`, {
        nonull: true
      }),
    gulpif(isDevelop, sourcemaps.init()),
    postcss(processor, {to: `${config.styleDist}*.css`}),
    gulpif(!isDevelop, media()),
    gulpif(!isDevelop, csso()),
    gulpif(gutil.env.csscomb, csscomb()),
    gulpif(isDevelop, sourcemaps.write()),
    gulp.dest(config.styleDist)
  ).on('error', notify.onError(error => {
    return {
      title: 'Style',
      message: error.message
    };
  }));
});

gulp.task('styles:comb', () => {
  return combiner(
    gulp
      .src('*.css', {
        cwd: config.style,
        nonull: true
      }),
    csscomb(),
    gulp.dest(config.components)
  ).on('error', notify.onError(error => {
    errorLog(error);
    return {
      title: 'Style',
      message: error.message
    };
  }));
});