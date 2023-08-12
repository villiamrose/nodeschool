const test = require('tape');

const fancify = require(process.argv[2]);

test('fancify prettifies the input string', (t) => {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'fancify(\'Hello\') should equal \'~*~Hello~*~\'');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'fancify(\'Hello\', true) should equal \'~*~HELLO~*~\'');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'fancify(\'Hello\', false, \'!\') should equal \'~!~Hello~!~\'');
  t.end();
});
