var hosts = 'cdn.mathjax.org';

chrome.webRequest.onHeadersReceived.addListener(function(details) {
  for (var i = 0; i < details.responseHeaders.length; i++) {
    var isCSPHeader = /content-security-policy/i.test(details.responseHeaders[i].name);
    if (isCSPHeader) {
      var csp = details.responseHeaders[i].value;
     // csp = csp.replace('script-src', 'script-src \'unsafe-eval\'');
      //csp = csp.replace('font-src', 'font-src ' + hosts);
      details.responseHeaders[i].value = csp;
    }
  }

  return {
    responseHeaders: details.responseHeaders
  };
}, {
  urls: ['*://github.com/*'],
  types: ['main_frame']
}, ['blocking', 'responseHeaders']);

//Look for Intimation from Content Script for rerun of Injection
chrome.extension.onMessage.addListener(function (message, sender, callback) {

});