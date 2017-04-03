'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function() {
  rimraf.sync('temp');
});

it('should convert to markdown', function() {
  assert.equal(
    fs.readFileSync('temp/fixture.md', 'utf8'),
    fs.readFileSync('fixture/expected.md', 'utf8').trim()
  );
});
