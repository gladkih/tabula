export default {
  dist: 'build',
  templates: ['app/templates/**/*.jade', '!app/templates/**/_*'],
  assets: ['app/assets/'],
  assetsDest: 'build/static/assets/',
  page: 'app/templates/**/*.jade',
  particles: 'app/templates/**/_*.jade',
  components: 'app/components/',
  style: 'app/components/**/*',
  styleDist: 'build/static/style/',
  jsDist: 'build/static/js/',
  imgDist: 'build/static/i/',
  cleanDir: ['build'],
  scripts: {
    index: './app/js/index'
  }
};
