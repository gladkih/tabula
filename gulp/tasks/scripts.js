import {reload} from 'browser-sync';
import config from '../config';
const gutil = require('gulp-util');
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config');
const notify = require('gulp-notify');
const combiner = require('stream-combiner2').obj;

gulp.task('scripts', done => {
  return combiner(
    webpackStream(webpackConfig, null, (err, stats) => {
      const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
      const durations = (stats.endTime - stats.startTime);
      const formatedDurations = durations > 1000 ? `${durations / 1000} s` : `${durations} ms`;
      const prompt = `[${gutil.colors.gray(time)}] [${gutil.colors.yellow('webpack')}]`;
      const message = `Complited in ${gutil.colors.magenta(formatedDurations)}`;
      console.log(`${prompt} ${message}`);
      if (webpackConfig.watch) {
        reload();
      } else {
        done();
      }
    }),
    gulp.dest(config.jsDist)
  ).on('error', notify.onError(error => {
    return {
      title: 'JS',
      message: error.message
    };
  }));
});
