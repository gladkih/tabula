import config from '../config';
const gulp = require('gulp');
const newer = require('gulp-newer');

gulp.task('assets', done => {
  if (!config.assets.length) {
    done();
    return null;
  }
  return gulp.src(config.assets, {since: gulp.lastRun('assets')})
    .pipe(newer(config.assetsDest))
    .pipe(gulp.dest(config.assetsDest));
});
