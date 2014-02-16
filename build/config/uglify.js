module.exports = {
  options: {
    banner: '<%= banner %>',
    sourceMap: 'dist/<%= pkg.name %>.min.map',
    sourceMappingURL: '<%= pkg.name %>.min.map',
    sourceMapPrefix: 1
  },
  dist: {
    src: 'src/<%= pkg.name %>.js',
    dest: 'dist/<%= pkg.name %>.min.js'
  }
};
