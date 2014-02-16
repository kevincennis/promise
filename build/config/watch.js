module.exports = {
  build: {
    files: '<%= jshint.build.files.src %>',
    tasts: [
      'lintspaces',
      'jshint:build'
    ]
  },
  gruntfile: {
    files: '<%= jshint.gruntfile.files.src %>',
    tasks: [
      'lintspaces',
      'jshint:gruntfile'
    ]
  },
  src: {
    files: '<%= jshint.src.files.src %>',
    tasks: [
      'copy',
      'lintspaces',
      'jshint:src',
      'uglify'
    ]
  }
};
