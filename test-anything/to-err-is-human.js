const test = require('tape');

const feedCat = require(process.argv[2]);

test('feedCat', (t) => {
  t.ok(feedCat('food'));
  t.throws(() => feedCat('chocolate'));
  t.end();
});
