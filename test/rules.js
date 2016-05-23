/* eslint func-names: 1, prefer-arrow-callback: 1, no-path-concat: 1 */
/* globals describe:true, it:true */
var assert = require('assert');
var fs = require('fs');
var eslint = require('eslint');


describe('Base config no deprecations', function () {
  it('should return empty messages', function () {
    var config = JSON.parse(fs.readFileSync(__dirname + '/../.eslintrc'));
    var messages = eslint.linter.verify('', config, { filename: 'foo.js' });

    assert.deepEqual(messages, []);
  });
});
