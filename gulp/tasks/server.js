import config from '../config';
const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', () => {
  return browserSync({
    server: {
      baseDir: config.dist
    },
    injectChanges: true,
    debugInfo: true,
    notify: false,
    host: '127.0.0.1',
    ports: {
      min: 3000,
      max: 3003
    },
    ghostMode: false,
    open: false,
    fileTimeout: 1000
  });
});
