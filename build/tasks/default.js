module.exports = [
  'copy:build',
  'lintspaces',
  'jshint',
  'uglify',
  'mochaTest',
  'compare_size',
  'copy:main'
];
