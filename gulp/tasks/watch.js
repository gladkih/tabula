import config from '../config';
import {reload} from 'browser-sync';
const gulp = require('gulp');
const watch = require('gulp-watch');

require('require-dir')('./', {recurse: false});

gulp.task('watch', () => {
  console.log(`task watch`);
  watch(config.templates, gulp.series('jade:single', reload));
  watch(config.particles, gulp.series('jade', reload));
  watch(`${config.components}**/*.jade`, gulp.series('jade', reload));
  watch(`${config.style}*.css`, gulp.series('styles', reload));
  watch(config.assets, gulp.series('assets'));
});
