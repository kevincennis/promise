module.exports = function( grunt ) {

  grunt.initConfig({
    // read package.json
    pkg: grunt.file.readJSON('package.json'),
    // copy source
    copy: require('./build/config/copy'),
    // JS banner
    banner: require('./build/config/banner'),
    // whitespace rules
    lintspaces: require('./build/config/lintspaces'),
    // minify
    uglify: require('./build/config/uglify'),
    // linting
    jshint: require('./build/config/jshint'),
    // file watching
    watch: require('./build/config/watch'),
    // compare size of generated files
    'compare_size': require('./build/config/comparesize'),
    // mocha test runner
    mochaTest: require('./build/config/mocha')
  });

  // load plugins (all dependencies that match /^grunt/)
  require('load-grunt-tasks')(grunt);

  // default task
  grunt.registerTask('default', require('./build/tasks/default'));

};
