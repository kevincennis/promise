module.exports = {
  build: {
    src: 'src/<%= pkg.name %>.js',
    dest: 'dist/<%= pkg.name %>.js'
  },
  main: {
    src: 'dist/<%= pkg.name %>.js',
    dest: '<%= pkg.name %>.js'
  }
};
