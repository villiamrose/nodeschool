const test = require('tape');

const repeatCallback = require(process.argv[2]);

test('repeatCallback', (t) => {
  t.plan(3);
  repeatCallback(3, () => {
    t.pass('callback called');
  });
});
