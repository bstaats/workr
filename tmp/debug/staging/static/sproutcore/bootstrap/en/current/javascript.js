/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


/* >>>>>>>>>> BEGIN __sc_chance.js */

/* >>>>>>>>>> BEGIN source/system/browser.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

window.SC = window.SC || { MODULE_INFO: {}, LAZY_INSTANTIATION: {} };

SC._detectBrowser = function(userAgent, language) {
  var version, webkitVersion, browser = {};

  userAgent = (userAgent || navigator.userAgent).toLowerCase();
  language = language || navigator.language || navigator.browserLanguage;

  // Gibberish at the end is to determine when the browser version is done
  version = browser.version = (userAgent.match( /.*(?:rv|chrome|webkit|opera|ie)[\/: ](.+?)([ \);]|$)/ ) || [])[1];
  webkitVersion = (userAgent.match( /webkit\/(.+?) / ) || [])[1];

  // Platforms -- these should probably be moved to another object
  // We test for these first because it is helpful when determining browsers below
  browser.windows = !!/windows/.test(userAgent);
  browser.mac = !!/macintosh/.test(userAgent) || (/mac os x/.test(userAgent) && !/like mac os x/.test(userAgent));
  browser.iOS = !!/iphone|ipod|ipad/.test(userAgent);
  browser.android = !!/android/.test(userAgent);

  // IE-based browsers
  browser.opera = /opera/.test(userAgent) ? version : 0;
  browser.msie = /msie/.test(userAgent) && !browser.opera ? version : 0;

  // Mozilla browsers
  browser.mozilla = /mozilla/.test(userAgent) && !/(compatible|webkit|msie)/.test(userAgent) ? version : 0;

  // Webkit-based browsers
  browser.webkit = /webkit/.test(userAgent) ? webkitVersion : 0;
  browser.chrome = /chrome/.test(userAgent) ? version: 0;
  browser.mobileSafari = /apple.*mobile.*safari/.test(userAgent) && browser.iOS ? webkitVersion : 0;
  browser.iPadSafari = /iPad/.test(userAgent) && browser.iOS ? webkitVersion : 0;
  browser.iPhoneSafari = /iPhone/.test(userAgent) && browser.iOS ? webkitVersion : 0;
  
  // this is a stupid test -- anything that aren't the following doesn't necessarily mean Safari
  browser.safari = browser.webkit && !browser.chrome && !browser.iOS && !browser.android ? webkitVersion : 0;

  // Language
  browser.language = language.split('-', 1)[0];
  
  
  browser.isIE8OrLower = !!(browser.msie && parseInt(browser.msie,10) <= 8);
  
  browser.current = browser.msie ? 'msie' : browser.mozilla ? 'mozilla' : browser.chrome ? 'chrome' : browser.safari ? 'safari' : browser.opera ? 'opera' : browser.mobileSafari ? 'mobile-safari' : 'unknown' ;
  return browser ;
};

SC.browser = SC._detectBrowser();

/* >>>>>>>>>> BEGIN source/system/bench.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*global SC_benchmarkPreloadEvents*/
// sc_require("system/browser")
if (typeof SC_benchmarkPreloadEvents !== "undefined") {
  SC.benchmarkPreloadEvents = SC_benchmarkPreloadEvents;
  SC_benchmarkPreloadEvents = undefined;
} else {
  SC.benchmarkPreloadEvents = { headStart: new Date().getTime() };
}
/* >>>>>>>>>> BEGIN source/system/loader.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

// sc_require("system/browser");

SC.setupBodyClassNames = function() {
  var el = document.body ;
  if (!el) return ;
  var browser, platform, shadows, borderRad, classNames, style;
  browser = SC.browser.current ;
  platform = SC.browser.windows ? 'windows' : SC.browser.mac ? 'mac' : 'other-platform' ;
  style = document.documentElement.style;
  shadows = (style.MozBoxShadow !== undefined) || 
                (style.webkitBoxShadow !== undefined) ||
                (style.oBoxShadow !== undefined) ||
                (style.boxShadow !== undefined);
  
  borderRad = (style.MozBorderRadius !== undefined) || 
              (style.webkitBorderRadius !== undefined) ||
              (style.oBorderRadius !== undefined) ||
              (style.borderRadius !== undefined);
  
  classNames = el.className ? el.className.split(' ') : [] ;
  if(shadows) classNames.push('box-shadow');
  if(borderRad) classNames.push('border-rad');
  classNames.push(browser) ;
  if (browser === 'chrome') classNames.push('safari');
  classNames.push(platform) ;
  
  var ieVersion = parseInt(SC.browser.msie,10);
  if (ieVersion) {
    if (ieVersion === 7) {
      classNames.push('ie7');
    } 
    else if (ieVersion === 8) {
      classNames.push('ie8');
    }
    else if (ieVersion === 9) {
      classNames.push('ie9');
    }
  }
  
  if (SC.browser.mobileSafari) classNames.push('mobile-safari') ;
  if ('createTouch' in document) classNames.push('touch');
  el.className = classNames.join(' ') ;
} ;

