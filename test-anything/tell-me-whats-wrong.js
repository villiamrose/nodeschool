const assert = require('assert');

const isCoolNumber = require(process.argv[2]);

assert.equal(isCoolNumber(42), true, 'isCoolNumber(42) should be true');
