const crypto = require('crypto');

const start = Date.new();
crypto.pbk2df('a', 'b', 10000, 512, 'sha1',() => {
  console.log('1: ', Date.now() - start);
});
crypto.pbk2df('a', 'b', 10000, 512, 'sha1',() => {
  console.log('2: ', Date.now() - start);
});
