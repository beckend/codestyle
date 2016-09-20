const assert = require('assert');
const path = require('path');
const eslint = require('eslint');
const fs = require('fs');


describe('Base config no deprecations', () => {
  it('should return empty messages', () => {
    fs.readFile(path.join(__dirname, '../.eslintrc'), (err, data) => {
      const config = JSON.parse(data);
      const messages = eslint.linter.verify('', config, { filename : 'foo.js' });

      assert.equal(err, null);
      assert.deepEqual(messages, []);
    });
  });
});
