var urls = require('./urls.json'),
  UAParser = require('ua-parser-js');

/**
 * @param {string} userAgentString the contents of navigator.userAgent
 * @returns {Object} upgrade & troubleshooting urls (or null if not found)
 * @example
 * var webglHelp = require('webgl-help');
 * // get link for troubleshooting
 * var links = webglHelp(navigator.userAgent);
 * if (links) {
 *   // add links.troubleshooting url
 * }
 */
function webglHelp(userAgentString) {
  var info = UAParser(userAgentString);
  return info && info.browser && urls[info.browser.name];
}

module.exports = webglHelp;
