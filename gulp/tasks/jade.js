import errorLog from '../error';
import config from '../config';
const gulp = require('gulp');
const jade = require('gulp-jade');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const duration = require('gulp-duration');
const notify = require('gulp-notify');
const debug = require('gulp-debug');
const newer = require('gulp-newer');
const combiner = require('stream-combiner2').obj;

const arg = {
  pretty: true,
  dev: (process.env.NODE_ENV === 'develop')
};

/**
 * Показываем ошибку при компиляции
 * @returns {*} — ошибка
 */
function showError() {
  return notify.onError(error => {
    return {
      title: 'Jade',
      message: error.message
    };
  });
}

gulp.task('jade', () => {
  console.log(`all`);
  return combiner(
    gulp.src(config.templates),
    jade({
      pretty: arg.pretty,
      local: arg
    }),
    debug({title: '*jade*'}),
    duration('rebuilding files'),
    gulp.dest(config.dist)
  ).on('error', showError());
});

gulp.task('jade:single', () => {
  return combiner(
    gulp.src(config.templates),
    jade({
      pretty: arg.pretty,
      local: arg
    }),
    newer(config.dist),
    debug({title: '*jade*'}),
    duration('rebuilding files'),
    gulp.dest(config.dist)
  ).on('error', showError());
});
