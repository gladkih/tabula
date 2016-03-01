import config from '../config';
const gulp = require('gulp');
const newer = require('gulp-newer');
const debug = require('gulp-debug');

gulp.task('assets', done => {
  if (!config.assets.length) {
    done();
    return null;
  }
  return gulp.src(config.assets, {since: gulp.lastRun('assets')})
    .pipe(newer(config.assetsDest))
    .pipe(debug({title: 'assets'}))
    .pipe(gulp.dest(config.assetsDest));
});
