const gulp = require('gulp');

require('require-dir')('./', {recurse: false});

gulp.task('default', gulp.series(
  gulp.parallel(
    gulp.series('styles:comb', 'styles'),
    'jade'
  ),
  gulp.parallel('server', 'watch', 'scripts')
));

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('jade', 'styles', 'scripts'),
  'assets'
));
