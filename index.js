var urls = require('./urls.json');
/* Do not copy this file. Instead, do something like this in your
   own code.

  if (!window.WebGLRenderingContext) {
     // Browser has no idea what WebGL is. Suggest they
     // get a new browser by presenting the user with link to
     // http://get.webgl.org
     return;
  }

  gl = canvas.getContext("webgl");
  if (!gl) {
    // Browser could not initialize WebGL. User probably needs to
    // update their drivers or get a new browser. Present a link to
    // http://get.webgl.org/troubleshooting
    return;
  }

*/

var BrowserDetect = {
  init: function () {
    var info = this.searchString(this.dataBrowser) || {identity:"unknown"}
    this.browser = info.identity;
    this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || "an unknown version";
    this.platformInfo = this.searchString(this.dataPlatform) || this.dataPlatform["unknown"];
    this.platform = this.platformInfo.identity;
    var browserInfo = this.urls[this.browser];
    if (!browserInfo) {
      browserInfo = this.urls["unknown"];
    } else if (browserInfo.platforms) {
      var info = browserInfo.platforms[this.platform];
      if (info) {
        browserInfo = info;
      }
    }
    this.urls = browserInfo;
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++){
      var info = data[i];
      var dataString = info.string;
      var dataProp = info.prop;
      this.versionSearchString = info.versionSearch || info.identity;
      if (dataString) {
        if (dataString.indexOf(info.subString) != -1) {
          var shouldExclude = false;
          if (info.excludeSubstrings) {
            for (var ii = 0; ii < info.excludeSubstrings.length; ++ii) {
              if (dataString.indexOf(info.excludeSubstrings[ii]) != -1) {
                shouldExclude = true;
                break;
              }
            }
          }
          if (!shouldExclude)
            return info;
        }
      } else if (dataProp) {
        return info;
      }
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) {
      return;
    }
    return parseFloat(dataString.substring(
        index + this.versionSearchString.length + 1));
  },
  dataBrowser: [
  { string: navigator.userAgent,
    subString: "Chrome",
    excludeSubstrings: ["OPR/", "Edge/"],
    identity: "Chrome"
  },
  { string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
  },
  { string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
  },
  { string: navigator.vendor,
    subString: "Opera",
    identity: "Opera"
  },
  { string: navigator.userAgent,
    subString: "Android",
    identity: "Android"
  },
  { string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
  },
  { string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
  },
  { string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
  },
  { string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
  },
  {// for newer Netscapes (6+)
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
  },
  { string: navigator.userAgent,
    subString: "Edge/",
    identity: "Edge"
  },
  { string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer",
    versionSearch: "MSIE"
  },
  { // for IE11+
    string: navigator.userAgent,
    subString: "Trident",
    identity: "Explorer",
    versionSearch: "rv"
  },
  { string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
  },
  { // for older Netscapes (4-)
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
  }
  ],
  dataPlatform: [
  { string: navigator.platform,
    subString: "Win",
    identity: "Windows",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
      {url: "http://www.opera.com/", name: "Opera"},
      {url: "http://www.google.com/chrome/", name: "Google Chrome"},
      {url: "http://www.microsoft.com/en-us/windows/windows-10-upgrade ", name: "Edge"},
      {url: "http://www.microsoft.com/ie", name: "Internet Explorer"}
    ]
  },
  { string: navigator.platform,
    subString: "Mac",
    identity: "Mac",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
      {url: "http://www.google.com/chrome/", name: "Google Chrome"},
      {url: "http://www.opera.com/", name: "Opera"},
      {url: "http://www.webkit.org/", name: "WebKit Developer Builds"}
    ]
  },
  { string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"}
    ]
  },
  { string: navigator.platform,
    subString: "iPad",
    identity: "iPad",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"}
    ]
  },
  { string: navigator.userAgent,
    subString: "Android",
    identity: "Android",
    browsers: [
      {url: "https://market.android.com/details?id=org.mozilla.firefox", name: "Mozilla Firefox"},
      {url: "https://market.android.com/details?id=com.opera.browser", name: "Opera Mobile"}
    ]
  },
  { string: navigator.platform,
    subString: "Linux",
    identity: "Linux",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
      {url: "http://www.google.com/chrome/", name: "Google Chrome"},
      {url: "http://www.opera.com/", name: "Opera"}
    ]
  },
  { string: "unknown",
    subString: "unknown",
    identity: "unknown",
    browsers: [
      {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
      {url: "http://www.google.com/chrome/", name: "Google Chrome"},
      {url: "http://www.opera.com/", name: "Opera"},
      {url: "http://www.webkit.org/", name: "WebKit Developer Builds"}
    ]
  }
  ],
  /*
  upgradeUrl:         Tell the user how to upgrade their browser.
  troubleshootingUrl: Help the user.
  platforms:          Urls by platform. See dataPlatform.identity for valid platform names.
  */
  urls: urls
};
