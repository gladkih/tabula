const gutil = require('gulp-util');

export default function(error) {
  gutil.log(
    [
      '\n',
      gutil.colors.red.underline(`${error.name} in ${error.plugin}`), '',
      error.message,
      ''
    ]
      .join('\n')
  );

  gutil.beep();

  this.emit('end');
};
