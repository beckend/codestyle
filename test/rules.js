/* eslint func-names: 1, prefer-arrow-callback: 0, no-path-concat: 1 */
/* globals describe:true, it:true */
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var eslint = require('eslint');


describe('Base config no deprecations', function testSuite() {
  it('should return empty messages', function testCase() {
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, '/../.eslintrc')));
    var messages = eslint.linter.verify('', config, { filename : 'foo.js' });

    assert.deepEqual(messages, []);
  });
});
