import errorLog from '../error';
import config from '../config';
const gulp = require('gulp');
const jade = require('gulp-jade');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const duration = require('gulp-duration');
const notify = require('gulp-notify');
const combiner = require('stream-combiner2').obj;

const arg = {
  pretty: true,
  dev: (process.env.NODE_ENV === 'develop')
};

function build(path, change) {
  return combiner(
    gulp.src(path),
    gulpif(change, changed(config.dist, {extension: '.html'})),
    jade({
      pretty: arg.pretty,
      local: arg
    }),
    duration('rebuilding files'),
    gulp.dest(config.dist)
  ).on('error', notify.onError(error => {
    return {
      title: 'Jade',
      message: error.message
    };
  }));
}

gulp.task('jade:single', () => {
  return build(config.templates, true);
});
gulp.task('jade', () => {
  return build(config.templates);
});
