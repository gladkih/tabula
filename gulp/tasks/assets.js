import config from '../config';
const gulp = require('gulp');

gulp.task('assets', done => {
  if (!config.assets.length) {
    done();
    return null;
  }
  return gulp.src(`${config.assets}**/*.*`, {since: gulp.lastRun('assets')})
    .pipe(gulp.dest(config.assetsDest));
});
