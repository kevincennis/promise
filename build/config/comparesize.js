module.exports = {
  files: [
    'dist/promise.js',
    'dist/promise.min.js'
  ],
  options: {
    cache: 'build/.sizecache.json',
    compress: {
      gz: function( fileContents ) {
        return require('gzip-js').zip( fileContents, {} ).length;
      }
    }
  }
};
