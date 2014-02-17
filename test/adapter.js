// Promises/A+ test adapter
// https://github.com/promises-aplus/promises-tests

var Promise = require('../dist/promise.min');

exports.resolved = Promise.resolve.bind(Promise);
exports.rejected = Promise.reject.bind(Promise);
exports.deferred = function() {
  var result = {};
  result.promise = new Promise(function( resolve, reject ) {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};
