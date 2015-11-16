var test = require('tap').test,
  webglHelp = require('./');

test('webglHelp', function(t) {
  t.deepEqual(webglHelp('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.58 Safari/537.36'), {
    upgrade: 'http://www.google.com/support/chrome/bin/answer.py?answer=95346',
    troubleshooting: 'http://www.google.com/support/chrome/bin/answer.py?answer=1220892'
  });
  t.end();
});
