var urls = require('./urls.json'),
  UAParser = require('ua-parser-js');

/**
 * @param {string} userAgentString the contents of navigator.userAgent
 * @returns {Object=} upgrade & troubleshooting urls
 */
function webglHelp(userAgentString) {
  var info = UAParser(userAgentString);
  if (!info || !info.browser) return;
  return urls[info.browser.name];
}

module.exports = webglHelp;
