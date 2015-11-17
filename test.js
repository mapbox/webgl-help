var test = require('tap').test,
  webglHelp = require('./');

test('webglHelp', function(t) {
  t.deepEqual(webglHelp('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.58 Safari/537.36'), {
    upgrade: 'http://www.google.com/support/chrome/bin/answer.py?answer=95346',
    troubleshooting: 'http://www.google.com/support/chrome/bin/answer.py?answer=1220892'
  });

  t.deepEqual(webglHelp('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0'), {
    upgrade: 'http://www.mozilla.com/en-US/firefox/new/',
    troubleshooting: 'https://support.mozilla.com/en-US/kb/how-do-i-upgrade-my-graphics-drivers'
  });
  t.end();
});
