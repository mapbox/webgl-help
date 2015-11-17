# webgl-help

[![build status](https://secure.travis-ci.org/mapbox/webgl-support-help.png)](http://travis-ci.org/mapbox/webgl-support-help)

Provide useful upgrading & debugging information to users with WebGL
disabled or unavailable.

## API

### webglHelp

**Parameters**

-   `userAgentString` **string** the contents of navigator.userAgent

**Examples**

```javascript
var webglHelp = require('webgl-help');
// get link for troubleshooting
var links = webglHelp(navigator.userAgent);
if (links) {
  // add links.troubleshooting url
}
```

Returns **Object** upgrade & troubleshooting urls (or null if not found)
