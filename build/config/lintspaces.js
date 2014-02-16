module.exports = {
  all: {
    src: [
      'build/**/*.js',
      'Gruntfile.js',
      'test/**/*.js',
      'src/**/*.js',
    ],
    options: {
      newline: true,
      trailingspaces: true,
      indentation: 'spaces',
      spaces: 2,
      ignores: ['js-comments']
    }
  }
};
