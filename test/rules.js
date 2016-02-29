/* globals describe:true, it:true */
'use strict';

var assert = require('assert');
var fs     = require('fs');
var eslint = require('eslint');


describe('Base config no deprecations', function () {
  it('should return empty messages', function () {
    var config = JSON.parse(fs.readFileSync(__dirname + '/../.eslintrc'));
    var messages = eslint.linter.verify('', config, { filename: 'foo.js' });

    assert.deepEqual(messages, []);
  });
});
