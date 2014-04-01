module.exports = {
  options: {
    banner: '<%= banner %>',
    sourceMap: 'dist/promise.min.map',
    sourceMappingURL: 'promise.min.map',
    sourceMapPrefix: 1
  },
  dist: {
    src: 'src/promise.js',
    dest: 'dist/promise.min.js'
  }
};
