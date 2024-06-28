/* prebid.js v4.11.0
Updated : 2020-10-07 */
!function(u){var s=window.pbjsChunk;window.pbjsChunk=function(e,t,n){for(var r,i,o,a=0,c=[];a<e.length;a++)i=e[a],d[i]&&c.push(d[i][0]),d[i]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(u[r]=t[r]);for(s&&s(e,t,n);c.length;)c.shift()();if(n)for(a=0;a<n.length;a++)o=f(f.s=n[a]);return o};var n={},d={350:0};function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=u,f.c=n,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.oe=function(e){throw console.error(e),e},f(f.s=882)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"internal",function(){return k}),n.d(t,"bind",function(){return N}),t.getUniqueIdentifierStr=q,t.generateUUID=function e(t){return t?(t^M()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t.getBidIdParameter=function(e,t){if(t&&t[e])return t[e];return""},t.tryAppendQueryString=function(e,t,n){if(n)return e+t+"="+encodeURIComponent(n)+"&";return e},t.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t=t.replace(/&$/,"")},t.transformAdServerTargetingObj=function(t){return t&&0<Object.getOwnPropertyNames(t).length?pe(t).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))}).join("&"):""},t.getAdUnitSizes=function(e){if(!e)return;var t=[];{var n;e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)?(n=e.mediaTypes.banner.sizes,Array.isArray(n[0])?t=n:t.push(n)):Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes))}return t},t.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)oe(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===h(e)){var o=e.length;if(0<o)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(G(e));else for(var a=0;a<o;a++)t.push(G(e[a]))}return t},t.parseGPTSingleSizeArray=G,t.parseGPTSingleSizeArrayToRtbSize=function(e){if(W(e))return{w:e[0],h:e[1]}},t.getWindowTop=L,t.getWindowSelf=F,t.getWindowLocation=z,t.logMessage=V,t.logInfo=H,t.logWarn=K,t.logError=J,t.hasConsoleLogger=function(){return _},t.debugTurnedOn=Q,t.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=q(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e},t.getParameterByName=function(e){return Ie(z().search)[e]||""},t.isA=$,t.isFn=X,t.isStr=Z,t.isArray=ee,t.isNumber=te,t.isPlainObject=ne,t.isBoolean=function(e){return $(e,C)},t.isEmpty=re,t.isEmptyStr=function(e){return Z(e)&&(!e||0===e.length)},t._each=ie,t.contains=function(e,t){if(re(e))return!1;if(X(e.indexOf))return-1!==e.indexOf(t);var n=e.length;for(;n--;)if(e[n]===t)return!0;return!1},t._map=function(n,r){if(re(n))return[];if(X(n.map))return n.map(r);var i=[];return ie(n,function(e,t){i.push(r(e,t,n))}),i},t.hasOwn=oe,t.insertElement=ae,t.triggerPixel=ce,t.callBurl=function(e){var t=e.source,n=e.burl;t===S.S2S.SRC&&n&&k.triggerPixel(n)},t.insertHtmlIntoIframe=function(e){if(!e)return;var t=document.createElement("iframe");t.id=q(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",k.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()},t.insertUserSyncIframe=ue,t.createTrackPixelHtml=function(e){if(!e)return"";var t=encodeURI(e),n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+t+'"></div>'},t.createTrackPixelIframeHtml=se,t.getValueString=de,t.uniques=fe,t.flatten=le,t.getBidRequest=function(n,e){return n?(e.some(function(e){var t=c()(e.bids,function(t){return["bidId","adId","bid_id"].some(function(e){return t[e]===n})});return t&&(r=t),t}),r):void 0;var r},t.getKeys=pe,t.getValue=ge,t.getKeyByValue=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return n},t.getBidderCodes=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits).map(function(e){return e.bids.map(function(e){return e.bidder}).reduce(le,[])}).reduce(le).filter(fe)},t.isGptPubadsDefined=be,n.d(t,"getHighestCpm",function(){return ve}),n.d(t,"getOldestHighestCpmBid",function(){return ye}),n.d(t,"getLatestHighestCpmBid",function(){return he}),t.shuffle=function(e){var t=e.length;for(;0<t;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},t.adUnitsFilter=function(e,t){return s()(e,t&&t.adUnitCode)},t.deepClone=Se,t.inIframe=function(){try{return k.getWindowSelf()!==k.getWindowTop()}catch(e){return!0}},t.isSafariBrowser=function(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)},t.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},t.replaceClickThrough=function(e,t){if(!e||!t||"string"!=typeof t)return;return e.replace(/\${CLICKTHROUGH}/g,t)},t.timestamp=function(){return(new Date).getTime()},t.hasDeviceAccess=function(){return!1!==r.b.getConfig("deviceAccess")},t.checkCookieSupport=Ae,t.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));var n=0;return function(){++n===t&&e.apply(this,arguments)}},t.groupBy=function(e,n){return e.reduce(function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e},{})},t.getDefinedParams=function(n,e){return e.filter(function(e){return n[e]}).reduce(function(e,t){return y(e,v({},t,n[t]))},{})},t.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every(function(e){return s()(t,e)}))return!1;if(e.video&&e.video.context)return s()(["instream","outstream","adpod"],e.video.context);return!0},t.getBidderRequest=function(e,t,n){return c()(e,function(e){return 0<e.bids.filter(function(e){return e.bidder===t&&e.adUnitCode===n}).length})||{start:null,auctionId:null}},t.getUserConfiguredParams=function(e,t,n){return e.filter(function(e){return e.code===t}).map(function(e){return e.bids}).reduce(le,[]).filter(function(e){return e.bidder===n}).map(function(e){return e.params||{}})},t.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},t.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},t.isAdUnitCodeMatchingSlot=function(t){return function(e){return Ee(t,e)}},t.isSlotMatchingAdUnitCode=Oe,t.getGptSlotInfoForAdUnitCode=function(e){var t;be()&&(t=c()(window.googletag.pubads().getSlots(),Oe(e)));if(t)return{gptSlot:t.getAdUnitPath(),divId:t.getSlotElementId()};return{}},t.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(n," ad unit\n    containing bidders that don't support ").concat(n,": ").concat(t,".\n    This bidder won't fetch demand.\n  ")},t.isInteger=Te,t.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,function(e,t){return"_"+t.toLowerCase()}).replace(/^_/,"")},t.cleanObj=function(n){return Object.keys(n).reduce(function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e},{})},t.pick=function(a,c){return"object"===h(a)?c.reduce(function(e,t,n){if("function"==typeof t)return e;var r=t,i=t.match(/^(.+?)\sas\s(.+?)$/i);i&&(t=i[1],r=i[2]);var o=a[t];return"function"==typeof c[n+1]&&(o=c[n+1](o,e)),void 0!==o&&(e[r]=o),e},{}):{}},t.transformBidderParamKeywords=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"keywords",i=[];return ie(e,function(e,t){if(ee(e)){var n=[];ie(e,function(e){!(e=de(r+"."+t,e))&&""!==e||n.push(e)}),e=n}else{if(!Z(e=de(r+"."+t,e)))return;e=[e]}i.push({key:t,value:e})}),i},t.convertTypes=function(r,i){return Object.keys(r).forEach(function(e){var t,n;i[e]&&(X(r[e])?i[e]=r[e](i[e]):i[e]=(t=r[e],n=i[e],"string"===t?n&&n.toString():"number"===t?Number(n):n),isNaN(i[e])&&delete i.key)}),i},t.isArrayOfNums=function(e,t){return ee(e)&&(!t||e.length===t)&&e.every(Te)},t.fill=function(e,t){for(var n=[],r=0;r<t;r++){var i=ne(e)?Se(e):e;n.push(i)}return n},t.chunk=function(e,t){for(var n=[],r=0;r<Math.ceil(e.length/t);r++){var i=r*t,o=i+t;n.push(e.slice(i,o))}return n},t.getMinValueFromArray=function(e){return Math.min.apply(Math,p(e))},t.getMaxValueFromArray=function(e){return Math.max.apply(Math,p(e))},t.compareOn=function(n){return function(e,t){return e[n]<t[n]?1:e[n]>t[n]?-1:0}},t.parseQS=Ie,t.formatQS=Ce,t.parseUrl=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:k.parseQS(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.buildUrl=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(k.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")},t.deepEqual=je,t.mergeDeep=we,t.cyrb53Hash=function(e){for(var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=function(e,t){if(X(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},i=3735928559^n,o=1103547991^n,a=0;a<e.length;a++)t=e.charCodeAt(a),i=r(i^t,2654435761),o=r(o^t,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()};var r=n(3),i=n(158),o=n.n(i),a=n(10),c=n.n(a),u=n(12),s=n.n(u),d=n(159);n.d(t,"deepAccess",function(){return d.a});var f=n(160);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"deepSetValue",function(){return f.a});var m,S=n(5),A="Array",E="String",O="Function",T="Number",I="Object",C="Boolean",j=Object.prototype.toString,w=Boolean(window.console),_=Boolean(w&&window.console.log),B=Boolean(w&&window.console.info),x=Boolean(w&&window.console.warn),U=Boolean(w&&window.console.error),R=n(8),k={checkCookieSupport:Ae,createTrackPixelIframeHtml:se,getWindowSelf:F,getWindowTop:L,getWindowLocation:z,insertUserSyncIframe:ue,insertElement:ae,isFn:X,triggerPixel:ce,logError:J,logWarn:K,logMessage:V,logInfo:H,parseQS:Ie,formatQS:Ce,deepEqual:je},D={},N=function(e,t){return t}.bind(null,1,D)()===D?Function.prototype.bind:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}},P=(m=0,function(){return++m});function q(){return P()+Math.random().toString(16).substr(2)}function M(){return window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random()}function G(e){if(W(e))return e[0]+"x"+e[1]}function W(e){return ee(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function L(){return window.top}function F(){return window.self}function z(){return window.location}function V(){Q()&&_&&console.log.apply(console,Y(arguments,"MESSAGE:"))}function H(){Q()&&B&&console.info.apply(console,Y(arguments,"INFO:"))}function K(){Q()&&x&&console.warn.apply(console,Y(arguments,"WARNING:"))}function J(){Q()&&U&&console.error.apply(console,Y(arguments,"ERROR:")),R.emit(S.EVENTS.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function Y(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cPrebid"),e}function Q(){return!!r.b.getConfig("debug")}function $(e,t){return j.call(e)==="[object "+t+"]"}function X(e){return $(e,O)}function Z(e){return $(e,E)}function ee(e){return $(e,A)}function te(e){return $(e,T)}function ne(e){return $(e,I)}function re(e){if(!e)return!0;if(ee(e)||Z(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t){if(!re(e)){if(X(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(0<r)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}function oe(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]}function ae(e,t,n,r){var i;t=t||document,i=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{if((i=i.length?i:t.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function ce(e,t){var n=new Image;t&&k.isFn(t)&&(n.addEventListener("load",t),n.addEventListener("error",t)),n.src=e}function ue(e,t){var n=k.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=n;var i=r.firstChild;t&&k.isFn(t)&&(i.addEventListener("load",t),i.addEventListener("error",t)),k.insertElement(i,document,"html",!0)}function se(e){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e?((!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&(e=encodeURI(e)),t=t&&'sandbox="'.concat(t,'"'),"<iframe ".concat(t,' id="').concat(q(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function de(e,t,n){return null==t?n:Z(t)?t:te(t)?t.toString():void k.logWarn("Unsuported type for param: "+e+" required type: String")}function fe(e,t,n){return n.indexOf(e)===t}function le(e,t){return e.concat(t)}function pe(e){return Object.keys(e)}function ge(e,t){return e[t]}function be(){if(window.googletag&&X(window.googletag.pubads)&&X(window.googletag.pubads().getSlots))return!0}var ve=me("timeToRespond",function(e,t){return t<e}),ye=me("responseTimestamp",function(e,t){return t<e}),he=me("responseTimestamp",function(e,t){return e<t});function me(n,r){return function(e,t){return e.cpm===t.cpm?r(e[n],t[n])?t:e:e.cpm<t.cpm?t:e}}function Se(e){return o()(e)}function Ae(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}var Ee=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t};function Oe(t){return function(e){return Ee(e,t)}}function Te(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function Ie(e){return e?e.replace(/^\?/,"").split("&").reduce(function(e,t){var n=l(t.split("="),2),r=n[0],i=n[1];return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(i)):e[r]=i||"",e},{}):{}}function Ce(e){return Object.keys(e).map(function(t){return Array.isArray(e[t])?e[t].map(function(e){return"".concat(t,"[]=").concat(e)}).join("&"):"".concat(t,"=").concat(e[t])}).join("&")}function je(e,t){if(e===t)return!0;if("object"!==h(e)||null===e||"object"!==h(t)||null===t)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!je(e[n],t[n]))return!1}return!0}function we(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var i=n.shift();if(ne(e)&&ne(i))for(var o in i)ne(i[o])?(e[o]||y(e,v({},o,{})),we(e[o],i[o])):ee(i[o])&&e[o]?ee(e[o])&&(e[o]=e[o].concat(i[o])):y(e,v({},o,i[o]));return we.apply(void 0,[e].concat(n))}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"storage",function(){return I}),t.registerBidder=function(r){var n=Array.isArray(r.supportedMediaTypes)?{supportedMediaTypes:r.supportedMediaTypes}:void 0;function i(e){var t=w(e);c.default.registerBidAdapter(t,e.code,n)}i(r),Array.isArray(r.aliases)&&r.aliases.forEach(function(e){var t,n=e;Object(m.isPlainObject)(e)&&(n=e.code,t=e.gvlid),c.default.aliasRegistry[n]=r.code,i(T({},r,{code:n,gvlid:t}))})},t.newBidder=w,n.d(t,"registerSyncInner",function(){return _}),t.preloadBidderMappingFile=B,t.getIabSubCategory=function(t,e){var n=c.default.getBidAdapter(t);if(n.getSpec().getMappingFileInfo){var r=n.getSpec().getMappingFileInfo(),i=r.localStorageKey?r.localStorageKey:n.getBidderCode(),o=I.getDataFromLocalStorage(i);if(o){try{o=JSON.parse(o)}catch(e){Object(m.logError)("Failed to parse ".concat(t," mapping data stored in local storage"))}return o.mapping[e]?o.mapping[e]:null}}},t.isValid=x;var r=n(90),c=n(9),u=n(3),v=n(33),s=n(44),o=n(36),a=n(28),i=n(5),y=n.n(i),d=n(8),h=n.n(d),f=n(12),l=n.n(f),p=n(4),m=n(0),g=n(2),b=n(13),S=n(7);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=Object(S.a)("bidderFactory"),C=["requestId","cpm","ttl","creativeId","netRevenue","currency"],j=1;function w(p){return T(new r.a(p.code),{getSpec:function(){return Object.freeze(p)},registerSyncs:g,callBids:function(o,a,e,n,c,r){var u,s,t,d,i,f;function l(){e(),h.a.emit(y.a.EVENTS.BIDDER_DONE,o),g(s,o.gdprConsent,o.uspConsent)}Array.isArray(o.bids)&&(u={},s=[],0!==(t=o.bids.filter(b)).length?(d={},t.forEach(function(e){(d[e.bidId]=e).adUnitCode||(e.adUnitCode=e.placementCode)}),(i=p.buildRequests(t,o))&&0!==i.length?(Array.isArray(i)||(i=[i]),f=Object(m.delayExecution)(r(l),i.length),i.forEach(function(i){switch(i.method){case"GET":n("".concat(i.url).concat(function(e){if(e)return"?".concat("object"===O(e)?Object(m.parseQueryStringParameters)(e):e);return""}(i.data)),{success:r(e),error:t},void 0,T({method:"GET",withCredentials:!0},i.options));break;case"POST":n(i.url,{success:r(e),error:t},"string"==typeof i.data?i.data:JSON.stringify(i.data),T({method:"POST",contentType:"text/plain",withCredentials:!0},i.options));break;default:Object(m.logWarn)("Skipping invalid request from ".concat(p.code,". Request type ").concat(i.type," must be GET or POST")),f()}function e(e,t){c(p.code);try{e=JSON.parse(e)}catch(e){}var n;e={body:e,headers:{get:t.getResponseHeader.bind(t)}},s.push(e);try{n=p.interpretResponse(e,i)}catch(e){return Object(m.logError)("Bidder ".concat(p.code," failed to interpret the server's response. Continuing without bids"),null,e),void f()}function r(e){var t,n,r,i=d[e.requestId];i?(e.originalCpm=e.cpm,e.originalCurrency=e.currency,e.meta=e.meta||T({},e[i.bidder]),t=T(Object(v.a)(y.a.STATUS.GOOD,i),e),n=i.adUnitCode,r=t,u[n]=!0,x(n,r,[o])&&a(n,r)):Object(m.logWarn)("Bidder ".concat(p.code," made bid for unknown request ID: ").concat(e.requestId,". Ignoring."))}n&&(Object(m.isArray)(n)?n.forEach(r):r(n)),f(n)}function t(e){c(p.code),Object(m.logError)("Server call for ".concat(p.code," failed: ").concat(e,". Continuing without bids.")),f()}})):l()):l())}});function g(e,t,n){_(p,e,t,n)}function b(e){return!!p.isBidRequestValid(e)||(Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code,": ").concat(JSON.stringify(e))),!1)}}var _=Object(b.b)("async",function(t,e,n,r){var i,o,a=u.b.getConfig("userSync.aliasSyncEnabled");!t.getUserSyncs||!a&&c.default.aliasRegistry[t.code]||(i=u.b.getConfig("userSync.filterSettings"),(o=t.getUserSyncs({iframeEnabled:!(!i||!i.iframe&&!i.all),pixelEnabled:!(!i||!i.image&&!i.all)},e,n,r))&&(Array.isArray(o)||(o=[o]),o.forEach(function(e){s.a.registerSync(e.type,t.code,e.url)})))},"registerSyncs");function B(e,t){if(!u.b.getConfig("adpod.brandCategoryExclusion"))return e.call(this,t);t.filter(function(e){return Object(m.deepAccess)(e,"mediaTypes.video.context")===g.a}).map(function(e){return e.bids.map(function(e){return e.bidder})}).reduce(m.flatten,[]).filter(m.uniques).forEach(function(n){var e=c.default.getBidAdapter(n);if(e.getSpec().getMappingFileInfo){var t=e.getSpec().getMappingFileInfo(),r=t.refreshInDays?t.refreshInDays:j,i=t.localStorageKey?t.localStorageKey:e.getSpec().code,o=I.getDataFromLocalStorage(i);try{(!(o=o?JSON.parse(o):void 0)||Object(m.timestamp)()>o.lastUpdated+24*r*60*60*1e3)&&Object(p.a)(t.url,{success:function(e){try{e=JSON.parse(e);var t={lastUpdated:Object(m.timestamp)(),mapping:e.mapping};I.setDataInLocalStorage(i,JSON.stringify(t))}catch(e){Object(m.logError)("Failed to parse ".concat(n," bidder translation mapping file"))}},error:function(){Object(m.logError)("Failed to load ".concat(n," bidder translation file"))}})}catch(e){Object(m.logError)("Failed to parse ".concat(n," bidder translation mapping file"))}}}),e.call(this,t)}function x(e,t,n){function r(e){return"Invalid bid from ".concat(t.bidderCode,". Ignoring bid: ").concat(e)}return e?t?(i=Object.keys(t),C.every(function(e){return l()(i,e)&&!l()([void 0,null],t[e])})?"native"!==t.mediaType||Object(o.f)(t,n)?"video"!==t.mediaType||Object(a.d)(t,n)?!("banner"===t.mediaType&&!function(e,t,n){if((t.width||0===parseInt(t.width,10))&&(t.height||0===parseInt(t.height,10)))return t.width=parseInt(t.width,10),t.height=parseInt(t.height,10),1;var r=Object(m.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=Object(m.parseSizesInput)(i);if(1===o.length){var a=A(o[0].split("x"),2),c=a[0],u=a[1];return t.width=parseInt(c,10),t.height=parseInt(u,10),1}}(e,t,n))||(Object(m.logError)(r("Banner bids require a width and height")),!1):(Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):(Object(m.logError)(r("Native bid missing some required properties.")),!1):(Object(m.logError)(r("Bidder ".concat(t.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1)):(Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):(Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}Object(b.a)("checkAdUnitSetup").before(B)},10:function(e,t,n){var r=n(96);e.exports=r},100:function(e,t,n){function r(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?i(t):!!t)}var i=n(30),o=/#|\.prototype\./,a=r.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";e.exports=r},101:function(e,t,n){var r=n(25),i=n(102),o=n(19)("species");e.exports=function(e,t){var n;return i(e)&&("function"==typeof(n=e.constructor)&&(n===Array||i(n.prototype))||r(n)&&null===(n=n[o]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},102:function(e,t,n){var r=n(48);e.exports=Array.isArray||function(e){return"Array"==r(e)}},103:function(e,t,n){var r=n(24),i=n(31);e.exports=function(t,n){try{i(r,t,n)}catch(e){r[t]=n}return n}},104:function(e,t,n){var r=n(75);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},105:function(e,t,n){n(106);var r=n(52);e.exports=r("Array","includes")},106:function(e,t,n){"use strict";var r=n(14),i=n(76).includes,o=n(51);r({target:"Array",proto:!0,forced:!n(60)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o("includes")},107:function(e,t,n){var r=n(58),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},108:function(e,t,n){n(109),n(126),n(87),n(128);var r=n(43);e.exports=r.Set},109:function(e,t,n){"use strict";var r=n(110),i=n(115);e.exports=r("Set",function(t){return function(e){return t(this,arguments.length?e:void 0)}},i)},11:function(e,t,n){"use strict";t.a=i,t.c=function(e){return!(!e||!e.url)},t.b=function(e,t){e.render(t)};var u=n(40),s=n(0),r=n(10),d=n.n(r),f="outstream";function i(e){var t=this,r=e.url,n=e.config,i=e.id,o=e.callback,a=e.loaded,c=e.adUnitCode;this.url=r,this.config=n,this.handlers={},this.id=i,this.loaded=a,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):s.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=o||function(){t.loaded=!0,t.process()},this.render=function(){var t,e,n;t=c,e=pbjs.adUnits,!((n=d()(e,function(e){return e.code===t}))&&n.renderer&&n.renderer.url&&n.renderer.render)||s.isBoolean(n.renderer.backupOnly)&&n.renderer.backupOnly?Object(u.a)(r,f,this.callback):s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)),this._render?this._render.apply(this,arguments):s.logWarn("No render function was provided, please use .setRender on the renderer")}.bind(this)}i.install=function(e){return new i({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},i.prototype.getConfig=function(){return this.config},i.prototype.setRender=function(e){this._render=e},i.prototype.setEventHandlers=function(e){this.handlers=e},i.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),s.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},i.prototype.process=function(){for(;0<this.cmd.length;)try{this.cmd.shift().call()}catch(e){s.logError("Error processing Renderer command: ",e)}}},110:function(e,t,n){"use strict";var f=n(14),l=n(24),p=n(78),g=n(30),b=n(31),v=n(17),y=n(81),h=n(25),m=n(64),S=n(32).f,A=n(56).forEach,E=n(29),r=n(54),O=r.set,T=r.getterFor;e.exports=function(n,e,t){var r,a,i=-1!==n.indexOf("Map"),c=-1!==n.indexOf("Weak"),o=i?"set":"add",u=l[n],s=u&&u.prototype,d={};return E&&"function"==typeof u&&(c||s.forEach&&!g(function(){(new u).entries().next()}))?(r=e(function(e,t){O(y(e,r,n),{type:n,collection:new u}),null!=t&&v(t,e[o],e,i)}),a=T(n),A(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(i){var o="add"==i||"set"==i;i in s&&(!c||"clear"!=i)&&b(r.prototype,i,function(e,t){var n=a(this).collection;if(!o&&c&&!h(e))return"get"==i&&void 0;var r=n[i](0===e?0:e,t);return o?this:r})}),c||S(r.prototype,"size",{configurable:!0,get:function(){return a(this).collection.size}})):(r=t.getConstructor(e,n,i,o),p.REQUIRED=!0),m(r,n,!1,!0),d[n]=r,f({global:!0,forced:!0},d),c||t.setStrong(r,n,i),r}},111:function(e,t,n){var r=n(30);e.exports=!r(function(){return Object.isExtensible(Object.preventExtensions({}))})},112:function(e,t,n){"use strict";var r=n(63),i=n(62);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},113:function(e,t,n){var r=n(24),i=n(114),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},114:function(e,t,n){var r=n(74),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},115:function(e,t,n){"use strict";var s=n(32).f,d=n(82),f=n(120),l=n(22),p=n(81),g=n(17),a=n(66),c=n(125),b=n(29),v=n(78).fastKey,r=n(54),y=r.set,h=r.getterFor;e.exports={getConstructor:function(e,n,r,i){function o(e,t,n){var r,i,o=c(e),a=u(e,t);return a?a.value=n:(o.last=a={index:i=v(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),b?o.size++:e.size++,"F"!==i&&(o.index[i]=a)),e}var a=e(function(e,t){p(e,a,n),y(e,{type:n,index:d(null),first:void 0,last:void 0,size:0}),b||(e.size=0),null!=t&&g(t,e[i],e,r)}),c=h(n),u=function(e,t){var n,r=c(e),i=v(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return f(a.prototype,{clear:function(){for(var e=c(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,b?e.size=0:this.size=0},delete:function(e){var t,n,r=c(this),i=u(this,e);return i&&(t=i.next,n=i.previous,delete r.index[i.index],i.removed=!0,n&&(n.next=t),t&&(t.previous=n),r.first==i&&(r.first=t),r.last==i&&(r.last=n),b?r.size--:this.size--),!!i},forEach:function(e,t){for(var n,r=c(this),i=l(e,1<arguments.length?t:void 0,3);n=n?n.next:r.first;)for(i(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(e){return!!u(this,e)}}),f(a.prototype,r?{get:function(e){var t=u(this,e);return t&&t.value},set:function(e,t){return o(this,0===e?0:e,t)}}:{add:function(e){return o(this,e=0===e?0:e,e)}}),b&&s(a.prototype,"size",{get:function(){return c(this).size}}),a},setStrong:function(e,t,n){var r=t+" Iterator",i=h(t),o=h(r);a(e,t,function(e,t){y(this,{type:r,target:e,state:i(e),kind:t,last:void 0})},function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:{value:e.target=void 0,done:!0}},n?"entries":"values",!n,!0),c(t)}}},116:function(e,t,n){var r=n(29),a=n(32),c=n(15),u=n(117);e.exports=r?Object.defineProperties:function(e,t){c(e);for(var n,r=u(t),i=r.length,o=0;o<i;)a.f(e,n=r[o++],t[n]);return e}},117:function(e,t,n){var r=n(118),i=n(83);e.exports=Object.keys||function(e){return r(e,i)}},118:function(e,t,n){var a=n(26),c=n(47),u=n(76).indexOf,s=n(53);e.exports=function(e,t){var n,r=c(e),i=0,o=[];for(n in r)!a(s,n)&&a(r,n)&&o.push(n);for(;t.length>i;)a(r,n=t[i++])&&(~u(o,n)||o.push(n));return o}},119:function(e,t,n){var r=n(27);e.exports=r("document","documentElement")},12:function(e,t,n){var r=n(105);e.exports=r},120:function(e,t,n){var i=n(84);e.exports=function(e,t,n){for(var r in t)n&&n.unsafe&&e[r]?e[r]=t[r]:i(e,r,t[r],n);return e}},121:function(e,t,n){"use strict";function i(){return this}var o=n(85).IteratorPrototype,a=n(82),c=n(46),u=n(64),s=n(38);e.exports=function(e,t,n){var r=t+" Iterator";return e.prototype=a(o,{next:c(1,n)}),u(e,r,!1,!0),s[r]=i,e}},122:function(e,t,n){var r=n(30);e.exports=!r(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},123:function(e,t,n){var i=n(15),o=n(124);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(e){}return function(e,t){return i(e),o(t),r?n.call(e,t):e.__proto__=t,e}}():void 0)},124:function(e,t,n){var r=n(25);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},125:function(e,t,n){"use strict";var r=n(27),i=n(32),o=n(19),a=n(29),c=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},126:function(e,t){},127:function(e,t,n){function r(c){return function(e,t){var n,r,i=String(s(e)),o=u(t),a=i.length;return o<0||a<=o?c?"":void 0:(n=i.charCodeAt(o))<55296||56319<n||o+1===a||(r=i.charCodeAt(o+1))<56320||57343<r?c?i.charAt(o):n:c?i.slice(o,o+2):r-56320+(n-55296<<10)+65536}}var u=n(58),s=n(49);e.exports={codeAt:r(!1),charAt:r(!0)}},128:function(e,t,n){n(129);var r=n(130),i=n(24),o=n(62),a=n(31),c=n(38),u=n(19)("toStringTag");for(var s in r){var d=i[s],f=d&&d.prototype;f&&o(f)!==u&&a(f,u,s),c[s]=c.Array}},129:function(e,t,n){"use strict";var r=n(47),i=n(51),o=n(38),a=n(54),c=n(66),u="Array Iterator",s=a.set,d=a.getterFor(u);e.exports=c(Array,"Array",function(e,t){s(this,{type:u,target:r(e),index:0,kind:t})},function(){var e=d(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?{value:e.target=void 0,done:!0}:"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},13:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),t.d=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:15;0===e.getHooks({hook:t}).length&&e.before(t,n)},t.c=function(e,n){a("async",function(e){e.forEach(function(e){return n.apply(void 0,function(e){if(Array.isArray(e))return o(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t})},e)([])},t.e=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];c(e).before(function(e,t){t.push(n),e(t)})};var r=n(161),i=n.n(r);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=i()({ready:i.a.SYNC|i.a.ASYNC|i.a.QUEUE}),c=a.get},130:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},131:function(e,t,n){n(14)({target:"Set",stat:!0},{from:n(132)})},132:function(e,t,n){"use strict";var s=n(18),d=n(22),f=n(17);e.exports=function(e,t,n){var r,i,o,a,c=arguments.length,u=1<c?t:void 0;return s(this),(r=void 0!==u)&&s(u),null==e?new this:(i=[],r?(o=0,a=d(u,2<c?n:void 0,2),f(e,function(e){i.push(a(e,o++))})):f(e,i.push,i),new this(i))}},133:function(e,t,n){n(14)({target:"Set",stat:!0},{of:n(134)})},134:function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},135:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(136);r({target:"Set",proto:!0,real:!0,forced:i},{addAll:function(){return o.apply(this,arguments)}})},136:function(e,t,n){"use strict";var i=n(15),o=n(18);e.exports=function(){for(var e=i(this),t=o(e.add),n=0,r=arguments.length;n<r;n++)t.call(e,arguments[n]);return e}},137:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(138);r({target:"Set",proto:!0,real:!0,forced:i},{deleteAll:function(){return o.apply(this,arguments)}})},138:function(e,t,n){"use strict";var a=n(15),c=n(18);e.exports=function(){for(var e,t=a(this),n=c(t.delete),r=!0,i=0,o=arguments.length;i<o;i++)e=n.call(t,arguments[i]),r=r&&e;return!!r}},139:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(22),c=n(35),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{every:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return!u(r,function(e){if(!i(e,e,n))return u.stop()},void 0,!1,!0).stopped}})},14:function(e,t,n){"use strict";function y(r){function e(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)}return e.prototype=r.prototype,e}var h=n(24),m=n(98).f,S=n(100),A=n(43),E=n(22),O=n(31),T=n(26);e.exports=function(e,t){var n,r,i,o,a,c,u,s,d=e.target,f=e.global,l=e.stat,p=e.proto,g=f?h:l?h[d]:(h[d]||{}).prototype,b=f?A:A[d]||(A[d]={}),v=b.prototype;for(i in t)n=!S(f?i:d+(l?".":"#")+i,e.forced)&&g&&T(g,i),a=b[i],n&&(c=e.noTargetGet?(s=m(g,i))&&s.value:g[i]),o=n&&c?c:t[i],n&&typeof a==typeof o||(u=e.bind&&n?E(o,h):e.wrap&&n?y(o):p&&"function"==typeof o?E(Function.call,o):o,(e.sham||o&&o.sham||a&&a.sham)&&O(u,"sham",!0),b[i]=u,p&&(T(A,r=d+"Prototype")||O(A,r,{}),A[r][i]=o,e.real&&v&&!v[i]&&O(v,i,o)))}},140:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(27),a=n(15),c=n(18),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{difference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete);return s(e,function(e){r.call(n,e)}),n}})},141:function(e,t,n){"use strict";var r=n(14),i=n(16),c=n(27),u=n(15),s=n(18),d=n(22),f=n(39),l=n(35),p=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{filter:function(e,t){var n=u(this),r=l(n),i=d(e,1<arguments.length?t:void 0,3),o=new(f(n,c("Set"))),a=s(o.add);return p(r,function(e){i(e,e,n)&&a.call(o,e)},void 0,!1,!0),o}})},142:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(22),c=n(35),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{find:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return u(r,function(e){if(i(e,e,n))return u.stop(e)},void 0,!1,!0).result}})},143:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(27),a=n(15),c=n(18),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{intersection:function(e){var t=a(this),n=new(u(t,o("Set"))),r=c(t.has),i=c(n.add);return s(e,function(e){r.call(t,e)&&i.call(n,e)}),n}})},144:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(18),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isDisjointFrom:function(e){var t=o(this),n=a(t.has);return!c(e,function(e){if(!0===n.call(t,e))return c.stop()}).stopped}})},145:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(27),a=n(15),c=n(18),u=n(88),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isSubsetOf:function(e){var t=u(this),n=a(e),r=n.has;return"function"!=typeof r&&(n=new(o("Set"))(e),r=c(n.has)),!s(t,function(e){if(!1===r.call(n,e))return s.stop()},void 0,!1,!0).stopped}})},146:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(18),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isSupersetOf:function(e){var t=o(this),n=a(t.has);return!c(e,function(e){if(!1===n.call(t,e))return c.stop()}).stopped}})},147:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(35),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{join:function(e){var t=o(this),n=a(t),r=void 0===e?",":String(e),i=[];return c(n,i.push,i,!1,!0),i.join(r)}})},148:function(e,t,n){"use strict";var r=n(14),i=n(16),c=n(27),u=n(15),s=n(18),d=n(22),f=n(39),l=n(35),p=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{map:function(e,t){var n=u(this),r=l(n),i=d(e,1<arguments.length?t:void 0,3),o=new(f(n,c("Set"))),a=s(o.add);return p(r,function(e){a.call(o,i(e,e,n))},void 0,!1,!0),o}})},149:function(e,t,n){"use strict";var r=n(14),i=n(16),a=n(15),c=n(18),u=n(35),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{reduce:function(t,e){var n=a(this),r=u(n),i=arguments.length<2,o=i?void 0:e;if(c(t),s(r,function(e){o=i?(i=!1,e):t(o,e,e,n)},void 0,!1,!0),i)throw TypeError("Reduce of empty set with no initial value");return o}})},15:function(e,t,n){var r=n(25);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},150:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(22),c=n(35),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{some:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return u(r,function(e){if(i(e,e,n))return u.stop()},void 0,!1,!0).stopped}})},151:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(27),a=n(15),c=n(18),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete),i=c(n.add);return s(e,function(e){r.call(n,e)||i.call(n,e)}),n}})},152:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(27),a=n(15),c=n(18),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{union:function(e){var t=a(this),n=new(u(t,o("Set")))(t);return s(e,c(n.add),n),n}})},153:function(e,t,n){n(87),n(154);var r=n(43);e.exports=r.Array.from},154:function(e,t,n){var r=n(14),i=n(155);r({target:"Array",stat:!0,forced:!n(157)(function(e){Array.from(e)})},{from:i})},155:function(e,t,n){"use strict";var v=n(22),y=n(57),h=n(80),m=n(79),S=n(50),A=n(156),E=n(61);e.exports=function(e,t,n){var r,i,o,a,c,u,s=y(e),d="function"==typeof this?this:Array,f=arguments.length,l=1<f?t:void 0,p=void 0!==l,g=E(s),b=0;if(p&&(l=v(l,2<f?n:void 0,2)),null==g||d==Array&&m(g))for(i=new d(r=S(s.length));b<r;b++)u=p?l(s[b],b):s[b],A(i,b,u);else for(c=(a=g.call(s)).next,i=new d;!(o=c.call(a)).done;b++)u=p?h(a,l,[o.value,b],!0):o.value,A(i,b,u);return i.length=b,i}},156:function(e,t,n){"use strict";var i=n(55),o=n(32),a=n(46);e.exports=function(e,t,n){var r=i(t);r in e?o.f(e,r,a(0,n)):e[r]=n}},157:function(e,t,n){var i=n(19)("iterator"),o=!1;try{var r=0,a={next:function(){return{done:!!r++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}},158:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},159:function(e,t,n){"use strict";t.a=function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}},16:function(e,t){e.exports=!0},160:function(e,t,n){"use strict";t.a=function(e,t,n){t.split&&(t=t.split("."));for(var r,i=0,o=t.length,a=e;i<o;++i)r=a[t[i]],a=a[t[i]]=i===o-1?n:null!=r?r:!~t[i+1].indexOf(".")&&-1<+t[i+1]?[]:{}}},161:function(e,t){h.SYNC=1,h.ASYNC=2,h.QUEUE=4;var g="fun-hooks";var n=Object.freeze({useProxy:!0,ready:0}),b=new WeakMap,r="2,1,0"===[1].reduce(function(e,t,n){return[e,t,n]},2).toString()?Array.prototype.reduce:function(e,t){var n,r=Object(this),i=r.length>>>0,o=0;if(t)n=t;else{for(;o<i&&!(o in r);)o++;n=r[o++]}for(;o<i;)o in r&&(n=e(n,r[o],o,r)),o++;return n};function v(e,t){return Array.prototype.slice.call(e,t)}var y=Object.assign||function(e){return r.call(v(arguments,1),function(t,n){return n&&Object.keys(n).forEach(function(e){t[e]=n[e]}),t},e)};function h(u){var s,e={},d=[];function t(e,t){return"function"==typeof e?f.call(null,"sync",e,t):"string"==typeof e&&"function"==typeof t?f.apply(null,arguments):"object"==typeof e?function(o,e,a){var t=!0;void 0===e&&(e=Object.getOwnPropertyNames(o),t=!1);var c={},n=["constructor"];for(;(e=e.filter(function(e){return!("function"!=typeof o[e]||-1!==n.indexOf(e)||e.match(/^_/))})).forEach(function(e){var t,n=e.split(":"),r=n[0],i=n[1]||"sync";c[r]||(t=o[r],c[r]=o[r]=f(i,t,a?[a,r]:void 0))}),o=Object.getPrototypeOf(o),t&&o;);return c}.apply(null,arguments):void 0}function l(o){var a=Array.isArray(o)?o:o.split(".");return r.call(a,function(t,n,e){var r=t[n],i=!1;return r||(e===a.length-1?(s||d.push(function(){i||console.warn(g+": referenced '"+o+"' but it was never created")}),t[n]=p(function(e){t[n]=e,i=!0})):t[n]={})},e)}function p(r){var o=[],a=[],c=function(){},e={before:function(e,t){return n.call(this,o,"before",e,t)},after:function(e,t){return n.call(this,a,"after",e,t)},getHooks:function(n){var e=o.concat(a);"object"==typeof n&&(e=e.filter(function(t){return Object.keys(n).every(function(e){return t[e]===n[e]})}));try{y(e,{remove:function(){return e.forEach(function(e){e.remove()}),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return e},removeAll:function(){return this.getHooks().remove()}},t={install:function(e,t,n){this.type=e,(c=n)(o,a),r&&r(t)}};return b.set(e.after,t),e;function n(t,e,n,r){var i={hook:n,type:e,priority:r||10,remove:function(){var e=t.indexOf(i);-1!==e&&(t.splice(e,1),c(o,a))}};return t.push(i),t.sort(function(e,t){return t.priority-e.priority}),c(o,a),this}}function f(f,e,t){var n=e.after&&b.get(e.after);if(n){if(n.type!==f)throw g+": recreated hookable with different type";return e}var r,i,o=t?l(t):p(),a={get:function(e,t){return o[t]||Reflect.get.apply(Reflect,arguments)}};return s||d.push(c),u.useProxy&&"function"==typeof Proxy&&Proxy.revocable?i=new Proxy(e,a):y(i=function(){return a.apply?a.apply(e,this,v(arguments)):e.apply(this,arguments)},o),b.get(i.after).install(f,i,function(e,t){var s,d=[];r=e.length||t.length?(e.forEach(n),s=d.push(void 0)-1,t.forEach(n),function(n,r,e){var i,o=0,a="async"===f&&"function"==typeof e[e.length-1]&&e.pop();function c(e){"sync"===f?i=e:a&&a.apply(null,arguments)}function u(e){if(d[o]){var t=v(arguments);return u.bail=c,t.unshift(u),d[o++].apply(r,t)}"sync"===f?i=e:a&&a.apply(null,arguments)}return d[s]=function(){var e=v(arguments,1);"async"===f&&a&&(delete u.bail,e.push(u));var t=n.apply(r,e);"sync"===f&&u(t)},u.apply(null,e),i}):void 0;function n(e){d.push(e.hook)}c()}),i;function c(){!s&&("sync"!==f||u.ready&h.SYNC)&&("async"!==f||u.ready&h.ASYNC)?"sync"!==f&&u.ready&h.QUEUE?a.apply=function(){var e=arguments;d.push(function(){i.apply(e[1],e[2])})}:a.apply=function(){throw g+": hooked function not ready"}:a.apply=r}}return(u=y({},n,u)).ready?t.ready=function(){s=!0,function(e){for(var t;t=e.shift();)t()}(d)}:s=!0,t.get=l,t}e.exports=h},17:function(e,t,n){function p(e,t){this.stopped=e,this.result=t}var g=n(15),b=n(79),v=n(50),y=n(22),h=n(61),m=n(80);(e.exports=function(e,t,n,r,i){var o,a,c,u,s,d,f,l=y(t,n,r?2:1);if(i)o=e;else{if("function"!=typeof(a=h(e)))throw TypeError("Target is not iterable");if(b(a)){for(c=0,u=v(e.length);c<u;c++)if((s=r?l(g(f=e[c])[0],f[1]):l(e[c]))&&s instanceof p)return s;return new p(!1)}o=a.call(e)}for(d=o.next;!(f=d.call(o)).done;)if("object"==typeof(s=m(o,l,f.value,r))&&s&&s instanceof p)return s;return new p(!1)}).stop=function(e){return new p(!0,e)}},18:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},19:function(e,t,n){var r=n(24),i=n(73),o=n(26),a=n(59),c=n(75),u=n(104),s=i("wks"),d=r.Symbol,f=u?d:d&&d.withoutSetter||a;e.exports=function(e){return o(s,e)||(c&&o(d,e)?s[e]=d[e]:s[e]=f("Symbol."+e)),s[e]}},2:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r="native",i="video",o="banner",a="adpod"},20:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var y=n(0);var h,r=(h=window,function(){var e,t=[],n=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(h),r=!1,i=0,o=!1,a=!1;do{var c,u,s=g,d=a,f=void 0,l=!1,p=null,a=!1,g=g?g.parent:h;try{f=g.location.href||null}catch(e){l=!0}if(l)if(d){var b=s.context;try{u=p=b.sourceUrl,o=!0,g===h.top&&(r=!0),b.canonicalUrl&&(e=b.canonicalUrl)}catch(e){}}else{Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var v=s.document.referrer;v&&(p=v,g===h.top&&(r=!0))}catch(e){}!p&&n&&n[i-1]&&(p=n[i-1]),p&&!o&&(u=p)}else f&&(u=p=f,o=!1,g===h.top&&(r=!0,(c=function(e){try{var t=e.querySelector("link[rel='canonical']");if(null!==t)return t.href}catch(e){}return null}(g.document))&&(e=c))),g.context&&g.context.sourceUrl&&(a=!0);t.push(p),i++}while(g!==h.top);return t.reverse(),{referer:u||null,reachedTop:r,isAmp:o,numIframes:i-1,stack:t,canonicalUrl:e||null}})},21:function(e,t,n){"use strict";t.a=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},219:function(e,t,n){n(220);var r=n(52);e.exports=r("Array","findIndex")},22:function(e,t,n){var o=n(18);e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 0:return function(){return r.call(i)};case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}},220:function(e,t,n){"use strict";var r=n(14),i=n(56).findIndex,o=n(51),a=n(60),c="findIndex",u=!0,s=a(c);c in[]&&Array(1)[c](function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{findIndex:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o(c)},227:function(e,t,n){"use strict";t.a=function(){window.addEventListener("message",c,!1)};var r=n(8),g=n.n(r),b=n(36),i=n(5),v=(n.n(i),n(0)),y=n(23),o=n(10),h=n.n(o),m=n(11),a=n(12),S=n.n(a),A=i.EVENTS.BID_WON;function c(e){var t,n,r,i,o,a,c,u,s,d=e.message?"message":"data",f={};try{f=JSON.parse(e[d])}catch(e){return}if(f&&f.adId){var l=h()(y.a.getBidsReceived(),function(e){return e.adId===f.adId});if(l&&"Prebid Request"===f.message&&(n=e,r=(t=l).adId,i=t.ad,o=t.adUrl,a=t.width,c=t.height,u=t.renderer,s=t.cpm,Object(m.c)(u)?Object(m.b)(u,t):r&&(function(e){var o=e.adId,a=e.adUnitCode,r=e.width,i=e.height;function c(e){var t,n,r=(t=o,n=a,window.googletag?function(n){return h()(window.googletag.pubads().getSlots(),function(t){return h()(t.getTargetingKeys(),function(e){return S()(t.getTargeting(e),n)})}).getSlotElementId()}(t):window.apntag?function(e){var t=window.apntag.getTag(e);return t&&t.targetId}(n):n),i=document.getElementById(r);return i&&i.querySelector(e)}["div","iframe"].forEach(function(e){var t,n=c(e+':not([style*="display: none"])');n?((t=n.style).width=r+"px",t.height=i+"px"):Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a,".  Can't resize it to ad's dimensions.  Please review setup."))})}(t),n.source.postMessage(JSON.stringify({message:"Prebid Response",ad:Object(v.replaceAuctionPrice)(i,s),adUrl:Object(v.replaceAuctionPrice)(o,s),adId:r,width:a,height:c}),n.origin)),y.a.addWinningBid(l),g.a.emit(A,l)),l&&"Prebid Native"===f.message){if("assetRequest"===f.action){var p=Object(b.c)(f,l);return void e.source.postMessage(JSON.stringify(p),e.origin)}if("click"===Object(b.b)(f,l))return;y.a.addWinningBid(l),g.a.emit(A,l)}}}},228:function(e,t,n){"use strict";t.a=function(e){var t;try{e=e||window.sessionStorage,t=JSON.parse(e.getItem(u))}catch(e){}t&&p(t,!0)};var r,i,o=n(3),a=n(0),c=n(41),u="pbjs:debugging";function s(e){Object(a.logMessage)("DEBUG: "+e)}function d(e){Object(a.logWarn)("DEBUG: "+e)}function f(e){r=function(e,t,n){if(b(this.bidders,n.bidderCode))return void d("bidder '".concat(n.bidderCode,"' excluded from auction by bidder overrides"));Array.isArray(this.bids)&&this.bids.forEach(function(e){g(e,n.bidderCode,t)||v(e,n,"bidder")});e(t,n)}.bind(e),c.c.before(r,5),i=function(e,t){var r=this,n=t.filter(function(e){return!b(r.bidders,e.bidderCode)||(d("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)});Array.isArray(r.bidRequests)&&n.forEach(function(n){r.bidRequests.forEach(function(t){n.bids.forEach(function(e){g(t,n.bidderCode,e.adUnitCode)||v(t,e,"bidRequest")})})});e(n)}.bind(e),c.e.before(i,5)}function l(){c.c.getHooks({hook:r}).remove(),c.e.getHooks({hook:i}).remove()}function p(e,t){var n=1<arguments.length&&void 0!==t&&t;o.b.setConfig({debug:!0}),l(),f(e),s("bidder overrides enabled".concat(n?" from session":""))}function g(e,t,n){return e.bidder&&e.bidder!==t||!(!e.adUnitCode||e.adUnitCode===n)}function b(e,t){return Array.isArray(e)&&-1===e.indexOf(t)}function v(n,e,r){return Object.keys(n).filter(function(e){return-1===["adUnitCode","bidder"].indexOf(e)}).reduce(function(e,t){return s("bidder overrides changed '".concat(e.adUnitCode,"/").concat(e.bidderCode,"' ").concat(r,".").concat(t," from '").concat(e[t],".js' to '").concat(n[t],"'")),e[t]=n[t],e},e)}function y(e){if(e.enabled){try{window.sessionStorage.setItem(u,JSON.stringify(e))}catch(e){}p(e)}else{l(),s("bidder overrides disabled");try{window.sessionStorage.removeItem(u)}catch(e){}}}o.b.getConfig("debugging",function(e){return y(e.debugging)})},23:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),s=n(41),i=n(10),o=n.n(i),a=n(5);var d,c,u=(d=[],(c={}).addWinningBid=function(t){var e=o()(d,function(e){return e.getAuctionId()===t.auctionId});e?(t.status=a.BID_STATUS.RENDERED,e.addWinningBid(t)):Object(r.logWarn)("Auction not found when adding winning bid")},c.getAllWinningBids=function(){return d.map(function(e){return e.getWinningBids()}).reduce(r.flatten,[])},c.getBidsRequested=function(){return d.map(function(e){return e.getBidRequests()}).reduce(r.flatten,[])},c.getNoBids=function(){return d.map(function(e){return e.getNoBids()}).reduce(r.flatten,[])},c.getBidsReceived=function(){return d.map(function(e){if(e.getAuctionStatus()===s.a)return e.getBidsReceived()}).reduce(r.flatten,[]).filter(function(e){return e})},c.getAdUnits=function(){return d.map(function(e){return e.getAdUnits()}).reduce(r.flatten,[])},c.getAdUnitCodes=function(){return d.map(function(e){return e.getAdUnitCodes()}).reduce(r.flatten,[]).filter(r.uniques)},c.createAuction=function(e){var t,n=e.adUnits,r=e.adUnitCodes,i=e.callback,o=e.cbTimeout,a=e.labels,c=e.auctionId,u=Object(s.k)({adUnits:n,adUnitCodes:r,callback:i,cbTimeout:o,labels:a,auctionId:c});return t=u,d.push(t),u},c.findBidByAdId=function(t){return o()(d.map(function(e){return e.getBidsReceived()}).reduce(r.flatten,[]),function(e){return e.adId===t})},c.getStandardBidderAdServerTargeting=function(){return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]},c.setStatusForBids=function(e,t){var n,r=c.findBidByAdId(e);r&&(r.status=t),!r||t!==a.BID_STATUS.BID_TARGETING_SET||(n=o()(d,function(e){return e.getAuctionId()===r.auctionId}))&&n.setBidTargeting(r)},c.getLastAuctionId=function(){return d.length&&d[d.length-1].getAuctionId()},c)},24:function(n,e,t){(function(e){function t(e){return e&&e.Math==Math&&e}n.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(e,t(34))},25:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},26:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},27:function(e,t,n){function r(e){return"function"==typeof e?e:void 0}var i=n(43),o=n(24);e.exports=function(e,t){return arguments.length<2?r(i[e])||r(o[e]):i[e]&&i[e][t]||o[e]&&o[e][t]}},28:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),t.d=function(e,t){var n=Object(o.getBidRequest)(e.requestId,t),r=n&&Object(o.deepAccess)(n,"mediaTypes.video"),i=r&&Object(o.deepAccess)(r,"context");return s(e,n,r,i)},n.d(t,"c",function(){return s});n(9);var o=n(0),i=n(3),r=n(12),a=(n.n(r),n(13)),c="outstream",u="instream";var s=Object(a.b)("sync",function(e,t,n,r){return!t||n&&r!==c?i.b.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):(Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):r!==c||!(!e.renderer&&!t.renderer)},"checkVideoBidSetup")},29:function(e,t,n){var r=n(30);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},3:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return C});var r=n(45),i=n(10),a=n.n(i),o=n(12),c=n.n(o),u=n(77),s=n.n(u),d=n(0);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=n(89),p=n(0),g=n(5),b="TRUE"===p.getParameterByName(g.DEBUG_MODE).toUpperCase(),v=window.location.origin,y="random",h={};h[y]=!0,h.fixed=!0;var m=y,S={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"};var A,E,O,T,I,C=(T=[],I=null,j(),{getCurrentBidder:function(){return I},getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?p.deepAccess(w(),e):w()}return function(e,t){var n=t;if("string"!=typeof e&&(n=e,e="*"),"function"==typeof n){var r={topic:e,callback:n};return T.push(r),function(){T.splice(T.indexOf(r),1)}}p.logError("listener must be a function")}.apply(void 0,arguments)},setConfig:function(n){var e,r;p.isPlainObject(n)?(e=Object.keys(n),r={},e.forEach(function(e){var t=n[e];p.isPlainObject(A[e])&&p.isPlainObject(t)&&(t=f({},A[e],t)),r[e]=E[e]=t}),_(r)):p.logError("setConfig options must be an object")},setDefaults:function(e){p.isPlainObject(A)?(f(A,e),f(E,e)):p.logError("defaults must be an object")},resetConfig:j,runWithBidder:B,callbackWithBidder:function(o){return function(i){return function(){if("function"==typeof i){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return B(o,(e=p.bind).call.apply(e,[i,this].concat(n)))}p.logWarn("config.callbackWithBidder callback is not a function")}}},setBidderConfig:function(r){try{!function(e){if(!p.isPlainObject(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!p.isPlainObject(e.config))throw"setBidderConfig bidder options must contain a config object"}(r),r.bidders.forEach(function(n){O[n]||(O[n]={}),Object.keys(r.config).forEach(function(e){var t=r.config[e];p.isPlainObject(t)?O[n][e]=f({},O[n][e]||{},t):O[n][e]=t})})}catch(e){p.logError(e)}},getBidderConfig:function(){return O}});function j(){A={};var n={_debug:b,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:v,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_priceGranularity:S.MEDIUM,set priceGranularity(e){o(e)&&("string"==typeof e?this._priceGranularity=i(e)?e:S.MEDIUM:p.isPlainObject(e)&&(this._customPriceBucket=e,this._priceGranularity=S.CUSTOM,p.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(n){var r=this;this._mediaTypePriceGranularity=Object.keys(n).reduce(function(e,t){return o(n[t])?"string"==typeof n?e[t]=i(n[t])?n[t]:r._priceGranularity:p.isPlainObject(n)&&(e[t]=n[t],p.logMessage("Using custom price granularity for ".concat(t))):p.logWarn("Invalid price granularity for media type: ".concat(t)),e},{})},_sendAllBids:!0,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:!1,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:!0,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:m,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){h[e]?this._bidderSequence=e:p.logWarn("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:!1,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e}};function i(t){return a()(Object.keys(S),function(e){return t===S[e]})}function o(e){if(e){if("string"==typeof e)i(e)||p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(p.isPlainObject(e)&&!Object(r.b)(e))return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");return 1}p.logError("Prebid Error: no value passed to `setPriceGranularity()`")}E&&_(Object.keys(E).reduce(function(e,t){return E[t]!==n[t]&&(e[t]=n[t]||{}),e},{})),E=n,O={}}function w(){if(I&&O&&p.isPlainObject(O[I])){var n=O[I],e=new s.a(Object.keys(E).concat(Object.keys(n)));return l(e).reduce(function(e,t){return void 0===n[t]?e[t]=E[t]:void 0!==E[t]&&p.isPlainObject(n[t])?e[t]=Object(d.mergeDeep)({},E[t],n[t]):e[t]=n[t],e},{})}return f({},E)}function _(i){var t=Object.keys(i);T.filter(function(e){return c()(t,e.topic)}).forEach(function(e){var t,n,r;e.callback((t={},n=e.topic,r=i[e.topic],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}),T.filter(function(e){return"*"===e.topic}).forEach(function(e){return e.callback(i)})}function B(e,t){I=e;try{return t()}finally{I=null}}},30:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},31:function(e,t,n){var r=n(29),i=n(32),o=n(46);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},32:function(e,t,n){var r=n(29),i=n(71),o=n(15),a=n(55),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},33:function(e,t,n){"use strict";t.a=function(e,t){return new r(e,t)};var i=n(0);function r(e,t){var n=t&&t.src||"client",r=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=function(){switch(r){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}(),this.adId=i.getUniqueIdentifierStr(),this.requestId=t&&t.bidId,this.mediaType="banner",this.source=n,this.getStatusCode=function(){return r},this.getSize=function(){return this.width+"x"+this.height}}},34:function(e,t){var n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},35:function(e,t,n){var r=n(16),i=n(88);e.exports=r?i:function(e){return Set.prototype.values.call(e)}},353:function(e,t,n){var r=n(354);e.exports=r},354:function(e,t,n){n(355);var r=n(52);e.exports=r("String","includes")},355:function(e,t,n){"use strict";var r=n(14),i=n(356),o=n(49);r({target:"String",proto:!0,forced:!n(358)("includes")},{includes:function(e,t){return!!~String(o(this)).indexOf(i(e),1<arguments.length?t:void 0)}})},356:function(e,t,n){var r=n(357);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},357:function(e,t,n){var r=n(25),i=n(48),o=n(19)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},358:function(e,t,n){var r=n(19)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(e){}}return!1}},36:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return s}),t.g=function(e){if(e&&e.type&&function(e){return!(!e||!c()(Object.keys(d),e))||(Object(a.logError)("".concat(e," nativeParam is not supported")),!1)}(e.type))return d[e.type];return e},t.f=function(t,e){var n=Object(a.getBidRequest)(t.requestId,e);if(!n)return!1;if(!Object(a.deepAccess)(t,"native.clickUrl"))return!1;if(Object(a.deepAccess)(t,"native.image")&&(!Object(a.deepAccess)(t,"native.image.height")||!Object(a.deepAccess)(t,"native.image.width")))return!1;if(Object(a.deepAccess)(t,"native.icon")&&(!Object(a.deepAccess)(t,"native.icon.height")||!Object(a.deepAccess)(t,"native.icon.width")))return!1;var r=n.nativeParams;if(!r)return!0;var i=Object.keys(r).filter(function(e){return r[e].required}),o=Object.keys(t.native).filter(function(e){return t.native[e]});return i.every(function(e){return c()(o,e)})},t.b=function(e,t){var n;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));return(n||[]).forEach(a.triggerPixel),e.action},t.d=function(r,i){var o={};return Object.keys(r.native).forEach(function(e){var t=u.NATIVE_KEYS[e],n=f(r.native[e]);Object(a.deepAccess)(i,"mediaTypes.native.".concat(e,".sendId"))&&(n="".concat(t,":").concat(r.adId)),t&&n&&(o[t]=n)}),o},t.c=function(e,r){var i={message:"assetResponse",adId:e.adId,assets:[]};return e.assets.forEach(function(e){var t=Object(a.getKeyByValue)(u.NATIVE_KEYS,e),n=f(r.native[t]);i.assets.push({key:t,value:n})}),i};var a=n(0),r=n(12),c=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=n(5),o=[],s=Object.keys(u.NATIVE_KEYS).map(function(e){return u.NATIVE_KEYS[e]}),d={image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}};function f(e){return"object"===i(e)&&e.url?e.url:e}},38:function(e,t){e.exports={}},39:function(e,t,n){var i=n(15),o=n(18),a=n(19)("species");e.exports=function(e,t){var n,r=i(e).constructor;return void 0===r||null==(n=i(r)[a])?t:o(n)}},4:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),t.b=i;var l=n(3);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=n(0),v=4,r=i();function i(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:3e3,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=e.request,f=e.done;return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i,o=r.method||(n?"POST":"GET"),a=document.createElement("a");a.href=e;var c,u="object"===g(t)&&null!==t?t:{success:function(){b.logMessage("xhr success")},error:function(e){b.logError("xhr error",null,e)}};"function"==typeof t&&(u.success=t),(i=new window.XMLHttpRequest).onreadystatechange=function(){var e;i.readyState===v&&("function"==typeof f&&f(a.origin),200<=(e=i.status)&&e<300||304===e?u.success(i.responseText,i):u.error(i.statusText,i))},l.b.getConfig("disableAjaxTimeout")||(i.ontimeout=function(){b.logError("  xhr timeout after ",i.timeout,"ms")}),"GET"===o&&n&&(p((c=b.parseUrl(e,r)).search,n),e=b.buildUrl(c)),i.open(o,e,!0),l.b.getConfig("disableAjaxTimeout")||(i.timeout=s),r.withCredentials&&(i.withCredentials=!0),b._each(r.customHeaders,function(e,t){i.setRequestHeader(t,e)}),r.preflight&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type",r.contentType||"text/plain"),"function"==typeof d&&d(a.origin),"POST"===o&&n?i.send(n):i.send()}catch(e){b.logError("xhr construction",e)}}}},40:function(e,t,n){"use strict";t.a=function(r,e,t){if(!e||!r)return void o.logError("cannot load external script without url and moduleCode");if(!i()(c,e))return void o.logError("".concat(e," not whitelisted for loading external JavaScript"));if(a[r])return t&&"function"==typeof t&&(a[r].loaded?t():a[r].callbacks.push(t)),a[r].tag;a[r]={loaded:!1,tag:null,callbacks:[]},t&&"function"==typeof t&&a[r].callbacks.push(t);return o.logWarn("module ".concat(e," is loading external JavaScript")),function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,(a[r].tag=n).readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()};return n.src=e,o.insertElement(n),n}(r,function(){a[r].loaded=!0;try{for(var e=0;e<a[r].callbacks.length;e++)a[r].callbacks[e]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})};var r=n(12),i=n.n(r),o=n(0),a={},c=["criteo","outstream","adagio","browsi"]},41:function(e,t,n){"use strict";n.d(t,"b",function(){return W}),n.d(t,"a",function(){return L}),t.k=function(e){var t,i,b,v,o=e.adUnits,n=e.adUnitCodes,r=e.callback,a=e.cbTimeout,c=e.labels,u=e.auctionId,y=o,s=c,d=n,h=[],f=[],l=[],p=u||N.generateUUID(),g=r,m=a,S=[],A=new Set;function E(){return{auctionId:p,timestamp:t,auctionEnd:i,auctionStatus:b,adUnits:y,adUnitCodes:d,labels:s,bidderRequests:h,noBids:l,bidsReceived:f,winningBids:S,timeout:m}}function O(n,e){var r,t;e&&clearTimeout(v),void 0===i&&(r=[],n&&(N.logMessage("Auction ".concat(p," timedOut")),t=A,(r=h.map(function(e){return(e.bids||[]).filter(function(e){return!t.has(e.bidder)})}).reduce(j.flatten,[]).map(function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}})).length&&q.emit(M.EVENTS.BID_TIMEOUT,r)),b=L,i=Date.now(),q.emit(M.EVENTS.AUCTION_END,E()),Y(y,function(){try{var e;null!=g&&(e=f.filter(N.bind.call(j.adUnitsFilter,this,d)).reduce(Z,{}),g.apply(pbjs,[e,n,p]),g=null)}catch(e){N.logError("Error executing bidsBackHandler",null,e)}finally{r.length&&P.callTimedOutBidders(o,r,m);var t=B.b.getConfig("userSync")||{};t.enableOverride||D(t.syncDelay)}}))}function T(){N.logInfo("Bids Received for Auction with id: ".concat(p),f),b=L,O(!1,!0)}function I(e){A.add(e)}function C(d){var f=this;d.forEach(function(e){var t;t=e,h=h.concat(t)});var l={},e={bidRequests:d,run:function(){var e,t;e=O.bind(null,!0),t=setTimeout(e,m),v=t,b=W,q.emit(M.EVENTS.AUCTION_INIT,E());var n,r,i,o,a,c,u=(n=T,r=f,i=0,o=!1,a=new Set,c={},{addBidResponse:function(e,t){c[t.requestId]=!0,i++;var n=function(e){var t=e.adUnitCode,n=e.bid,r=e.bidderRequest,i=e.auctionId,o=r.start,a=k({},n,{auctionId:i,responseTimestamp:Object(j.timestamp)(),requestTimestamp:o,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});a.timeToRespond=a.responseTimestamp-a.requestTimestamp,q.emit(M.EVENTS.BID_ADJUSTMENT,a);var c=r.bids&&x()(r.bids,function(e){return e.adUnitCode==t}),u=c&&c.renderer;!u||!u.url||u.backupOnly&&Object(j.isBoolean)(u.backupOnly)&&n.renderer||(a.renderer=_.a.install({url:u.url}),a.renderer.setRender(u.render));var s=X(n.mediaType,c,B.b.getConfig("mediaTypePriceGranularity")),d=Object(w.a)(a.cpm,"object"===R(s)?s:B.b.getConfig("customPriceBucket"),B.b.getConfig("currency.granularityMultiplier"));return a.pbLg=d.low,a.pbMg=d.med,a.pbHg=d.high,a.pbAg=d.auto,a.pbDg=d.dense,a.pbCg=d.custom,a}({adUnitCode:e,bid:t,bidderRequest:this,auctionId:r.getAuctionId()});"video"===n.mediaType?function(e,t,n,r){var i=!0,o=Object(j.getBidRequest)(t.requestId,[n]),a=o&&Object(j.deepAccess)(o,"mediaTypes.video"),c=a&&Object(j.deepAccess)(a,"context");B.b.getConfig("cache.url")&&c!==U.b&&(t.videoCacheKey?t.vastUrl||(N.logError("videoCacheKey specified but not required vastUrl for video bid"),i=!1):(i=!1,$(e,t,r,o))),i&&(Q(e,t),r())}(r,n,this,s):(Q(r,n),s())},adapterDone:function(){a.add(this),o=r.getBidRequests().every(function(e){return a.has(e)}),this.bids.forEach(function(e){c[e.bidId]||(r.addNoBid(e),q.emit(M.EVENTS.NO_BID,e))}),o&&0===i&&n()}});function s(){i--,o&&0===i&&n()}P.callBids(y,d,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];K.apply({dispatch:u.addBidResponse,bidderRequest:this},t)},u.adapterDone,{request:function(e,t){g(z,t),g(l,e),V[e]||(V[e]={SRA:!0,origin:t}),1<l[e]&&(V[e].SRA=!1)},done:function(e){z[e]--,H[0]&&p(H[0])&&H.shift()}},m,I)}};function p(e){var r=!0,i=B.b.getConfig("maxRequestsPerOrigin")||F;return e.bidRequests.some(function(e){var t=1,n=void 0!==e.src&&e.src===M.S2S.SRC?"s2s":e.bidderCode;return V[n]&&(!1===V[n].SRA&&(t=Math.min(e.bids.length,i)),z[V[n].origin]+t>i&&(r=!1)),!r}),r&&e.run(),r}function g(e,t){void 0===e[t]?e[t]=1:e[t]++}p(e)||(N.logWarn("queueing auction due to limited endpoint capacity"),H.push(e))}return{addBidReceived:function(e){f=f.concat(e)},addNoBid:function(e){l=l.concat(e)},executeCallback:O,callBids:function(){b=G,t=Date.now();var e=P.makeBidRequests(y,t,p,m,s);N.logInfo("Bids Requested for Auction with id: ".concat(p),e),e.length<1?(N.logWarn("No valid bid requests returned for auction"),T()):J.call({dispatch:C,context:this},e)},addWinningBid:function(e){S=S.concat(e),P.callBidWonBidder(e.bidder,e,o)},setBidTargeting:function(e){P.callSetTargetingBidder(e.bidder,e)},getWinningBids:function(){return S},getTimeout:function(){return m},getAuctionId:function(){return p},getAuctionStatus:function(){return b},getAdUnits:function(){return y},getAdUnitCodes:function(){return d},getBidRequests:function(){return h},getBidsReceived:function(){return f},getNoBids:function(){return l}}},n.d(t,"c",function(){return K}),n.d(t,"e",function(){return J}),t.g=s,t.d=Q,n.d(t,"f",function(){return $}),n.d(t,"i",function(){return d}),n.d(t,"h",function(){return f}),t.j=l;var j=n(0),w=n(45),a=n(36),o=n(93),_=n(11),B=n(3),r=n(44),i=n(13),c=n(10),x=n.n(c),U=n(28),u=n(2);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=r.a.syncUsers,N=n(0),P=n(9).default,q=n(8),M=n(5),G="started",W="inProgress",L="completed";q.on(M.EVENTS.BID_ADJUSTMENT,function(e){!function(e){var t,n=e.bidderCode,r=e.cpm;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?t=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(t=pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),t))try{r=t(e.cpm,k({},e))}catch(e){N.logError("Error during bid adjustment","bidmanager.js",e)}0<=r&&(e.cpm=r)}(e)});var F=4,z={},V={},H=[];var K=Object(i.b)("async",function(e,t){this.dispatch.call(this.bidderRequest,e,t)},"addBidResponse"),J=Object(i.b)("sync",function(e){this.dispatch.call(this.context,e)},"addBidderRequests"),Y=Object(i.b)("async",function(e,t){t&&t()},"bidsBackCallback");function s(e,t){t.timeToRespond>e.getTimeout()+B.b.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function Q(e,t){var n=e.getBidRequests(),r=x()(n,function(e){return e.bidderCode===t.bidderCode});!function(t,e){var n;{var r;t.bidderCode&&(0<t.cpm||t.dealId)&&(r=x()(e.bids,function(e){return e.adUnitCode===t.adUnitCode}),n=function(e,t,n){if(!t)return{};var r={},i=pbjs.bidderSettings;{var o;i&&(o=l(t.mediaType,e,n),p(r,o,t),e&&i[e]&&i[e][M.JSON_MAPPING.ADSERVER_TARGETING]&&(p(r,i[e],t),t.sendStandardTargeting=i[e].sendStandardTargeting))}t.native&&(r=k({},r,Object(a.d)(t,n)));return r}(t.bidderCode,t,r))}t.adserverTargeting=k(t.adserverTargeting||{},n)}(t,r),q.emit(M.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),s(e,t)}var $=Object(i.b)("async",function(n,r,i,e){Object(o.b)([r],function(e,t){e?(N.logWarn("Failed to save to the video cache: ".concat(e,". Video bid must be discarded.")),s(n,r)):""===t[0].uuid?(N.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),s(n,r)):(r.videoCacheKey=t[0].uuid,r.vastUrl||(r.vastUrl=Object(o.a)(r.videoCacheKey)),Q(n,r),i())},e)},"callPrebidCache");function X(e,t,n){if(e&&n){if(e===u.d){var r=Object(j.deepAccess)(t,"mediaTypes.".concat(u.d,".context"),"instream");if(n["".concat(u.d,"-").concat(r)])return n["".concat(u.d,"-").concat(r)]}return n[e]}}var d=function(e,t){var n=X(e,t,B.b.getConfig("mediaTypePriceGranularity"));return"string"==typeof e&&n?"string"==typeof n?n:"custom":B.b.getConfig("priceGranularity")},f=function(t){return function(e){return t===M.GRANULARITY_OPTIONS.AUTO?e.pbAg:t===M.GRANULARITY_OPTIONS.DENSE?e.pbDg:t===M.GRANULARITY_OPTIONS.LOW?e.pbLg:t===M.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:t===M.GRANULARITY_OPTIONS.HIGH?e.pbHg:t===M.GRANULARITY_OPTIONS.CUSTOM?e.pbCg:void 0}};function l(e,t,n){function r(e,t){return{key:e,val:"function"==typeof t?function(e){return t(e)}:function(e){return Object(j.getValue)(e,t)}}}var i,o,a=M.TARGETING_KEYS,c=d(e,n),u=pbjs.bidderSettings;return u[M.JSON_MAPPING.BD_SETTING_STANDARD]||(u[M.JSON_MAPPING.BD_SETTING_STANDARD]={}),u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING]||(u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING]=[r(a.BIDDER,"bidderCode"),r(a.AD_ID,"adId"),r(a.PRICE_BUCKET,f(c)),r(a.SIZE,"size"),r(a.DEAL,"dealId"),r(a.SOURCE,"source"),r(a.FORMAT,"mediaType")]),"video"===e&&(i=u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING],[a.UUID,a.CACHE_ID].forEach(function(t){void 0===x()(i,function(e){return e.key===t})&&i.push(r(t,"videoCacheKey"))}),!B.b.getConfig("cache.url")||t&&!1===N.deepAccess(u,"".concat(t,".sendStandardTargeting"))||(o=Object(j.parseUrl)(B.b.getConfig("cache.url")),void 0===x()(i,function(e){return e.key===a.CACHE_HOST})&&i.push(r(a.CACHE_HOST,function(e){return N.deepAccess(e,"adserverTargeting.".concat(a.CACHE_HOST))?e.adserverTargeting[a.CACHE_HOST]:o.hostname})))),u[M.JSON_MAPPING.BD_SETTING_STANDARD]}function p(r,i,o){var e=i[M.JSON_MAPPING.ADSERVER_TARGETING];return o.size=o.getSize(),N._each(e,function(e){var t=e.key,n=e.val;if(r[t]&&N.logWarn("The key: "+t+" is getting ovewritten"),N.isFn(n))try{n=n(o)}catch(e){N.logError("bidmanager","ERROR",e)}(void 0===i.suppressEmptyKeys||!0!==i.suppressEmptyKeys)&&t!==M.TARGETING_KEYS.DEAL||!N.isEmptyStr(n)&&null!=n?r[t]=n:N.logInfo("suppressing empty key '"+t+"' from adserver targeting")}),r}function Z(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},42:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var h=n(0),m=n(3),S=n(36),r=n(23),i=n(91),o=n(2),a=n(12),A=n.n(a);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=n(0),I=n(5),C=[],j=Object.keys(I.TARGETING_KEYS).map(function(e){return I.TARGETING_KEYS[e]}),s=function(e){return e.responseTimestamp+1e3*e.ttl+1e3>Object(h.timestamp)()},d=function(e){return e&&(e.status&&!A()([I.BID_STATUS.RENDERED],e.status)||!e.status)};function w(e,r,t){var i=2<arguments.length&&void 0!==t?t:0,o=[],a=m.b.getConfig("sendBidsControl.dealPrioritization"),c=Object(h.groupBy)(e,"adUnitCode");return Object.keys(c).forEach(function(e){var t=[],n=Object(h.groupBy)(c[e],"bidderCode");Object.keys(n).forEach(function(e){return t.push(n[e].reduce(r))}),0<i?(t=a?t.sort(_(!0)):t.sort(function(e,t){return t.cpm-e.cpm}),o.push.apply(o,T(t.slice(0,i)))):o.push.apply(o,T(t))}),o}function _(e){var n=0<arguments.length&&void 0!==e&&e;return function(e,t){return void 0!==e.adserverTargeting.hb_deal&&void 0===t.adserverTargeting.hb_deal?-1:void 0===e.adserverTargeting.hb_deal&&void 0!==t.adserverTargeting.hb_deal?1:n?t.cpm-e.cpm:t.adserverTargeting.hb_pb-e.adserverTargeting.hb_pb}}var f,B,l,p=(f=r.a,l={},(B={}).setLatestAuctionForAdUnit=function(e,t){l[e]=t},B.resetPresetTargeting=function(e,t){var n,i;Object(h.isGptPubadsDefined)()&&(n=U(e),i=f.getAdUnits().filter(function(e){return A()(n,e.code)}),window.googletag.pubads().getSlots().forEach(function(n){var r=u.isFn(t)&&t(n);C.forEach(function(t){i.forEach(function(e){(e.code===n.getAdUnitPath()||e.code===n.getSlotElementId()||u.isFn(r)&&r(e.code))&&n.setTargeting(t,null)})})}))},B.resetPresetTargetingAST=function(e){U(e).forEach(function(e){var t,n,r=window.apntag.getTag(e);r&&r.keywords&&(t=Object.keys(r.keywords),n={},t.forEach(function(e){A()(C,e.toLowerCase())||(n[e]=r.keywords[e])}),window.apntag.modifyTag(e,{keywords:n}))})},B.getAllTargeting=function(e){var n,t,r,i,o,a,c,u,s,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R(),f=U(e),l=(a=f,c=d,u=B.getWinningBids(a,c),s=k(),(u=u.map(function(o){return O({},o.adUnitCode,Object.keys(o.adserverTargeting).filter(function(e){return void 0===o.sendStandardTargeting||o.sendStandardTargeting||-1===s.indexOf(e)}).reduce(function(e,t){var n=[o.adserverTargeting[t]],r=O({},t.substring(0,20),n);if(t!==I.TARGETING_KEYS.DEAL)return[].concat(T(e),[r]);var i=O({},"".concat(t,"_").concat(o.bidderCode).substring(0,20),n);return[].concat(T(e),[r,i])},[]))})).concat((o=f,d.filter(function(e){return A()(o,e.adUnitCode)}).map(function(e){return E({},e)}).reduce(D,[]).map(N).filter(function(e){return e}))).concat(m.b.getConfig("enableSendAllBids")?(n=f,t=d,r=j.concat(S.a),i=m.b.getConfig("sendBidsControl.bidLimit"),w(t,h.getHighestCpm,i).map(function(t){if(x(t,n))return O({},t.adUnitCode,P(t,r.filter(function(e){return void 0!==t.adserverTargeting[e]})))}).filter(function(e){return e})):function(e,t){if(!0!==m.b.getConfig("targetingControls.alwaysIncludeDeals"))return[];var n=j.concat(S.a);return w(t,h.getHighestCpm).map(function(t){if(t.dealId&&x(t,e))return O({},t.adUnitCode,P(t,n.filter(function(e){return void 0!==t.adserverTargeting[e]})))}).filter(function(e){return e})}(f,d)));l.map(function(t){Object.keys(t).map(function(e){t[e].map(function(e){-1===C.indexOf(Object.keys(e)[0])&&(C=Object.keys(e).concat(C))})})});var p=m.b.getConfig("targetingControls.allowTargetingKeys");Array.isArray(p)&&0<p.length&&(l=function(e,r){var i=E({},I.TARGETING_KEYS,I.NATIVE_KEYS),o=Object.keys(i),a={};Object(h.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function(e){return i[e]}).join(", ")," ]")),e.map(function(e){var t=Object.keys(e)[0],n=e[t].filter(function(e){var n=Object.keys(e)[0],t=0===o.filter(function(e){return 0===n.indexOf(i[e])}).length||r.find(function(e){var t=i[e];return 0===n.indexOf(t)});return a[n]=!t,t});e[t]=n});var t=Object.keys(a).filter(function(e){return a[e]});return Object(h.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", ")," ]")),e.filter(function(e){return 0<e[Object.keys(e)[0]].length})}(l,p)),l=l.map(function(e){return O({},Object.keys(e)[0],e[Object.keys(e)[0]].map(function(e){return O({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))}).reduce(function(e,t){return E(t,e)},{}))}).reduce(function(e,t){var n=Object.keys(t)[0];return e[n]=E({},e[n],t[n]),e},{});var g,b,v,y=m.b.getConfig("targetingControls.auctionKeyMaxChars");return y&&(Object(h.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(y," characters.  Running checks on auction keys...")),g=l,b=y,v=Object(h.deepClone)(g),l=Object.keys(v).map(function(e){return{adUnitCode:e,adserverTargeting:v[e]}}).sort(_()).reduce(function(e,t,n,r){var i,o=(i=t.adserverTargeting,Object.keys(i).reduce(function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(i[t]),"%26")},""));n+1===r.length&&(o=o.slice(0,-3));var a=t.adUnitCode,c=o.length;return c<=b?(b-=c,Object(h.logInfo)("AdUnit '".concat(a,"' auction keys comprised of ").concat(c," characters.  Deducted from running threshold; new limit is ").concat(b),v[a]),e[a]=v[a]):Object(h.logWarn)("The following keys for adUnitCode '".concat(a,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c,", the current allotted amount was ").concat(b,".\n"),v[a]),n+1===r.length&&0===Object.keys(e).length&&Object(h.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e},{})),f.forEach(function(e){l[e]||(l[e]={})}),l},B.setTargetingForGPT=function(i,e){window.googletag.pubads().getSlots().forEach(function(r){Object.keys(i).filter((e||Object(h.isAdUnitCodeMatchingSlot))(r)).forEach(function(n){return Object.keys(i[n]).forEach(function(t){var e=i[n][t];"string"==typeof e&&(e=e.split(",")),(e=1<e.length?[e]:e).map(function(e){return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId()," key: ").concat(t," value: ").concat(e)),e}).forEach(function(e){r.setTargeting(t,e)})})})})},B.getWinningBids=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R(),t=U(e);return n.filter(function(e){return A()(t,e.adUnitCode)}).filter(function(e){return 0<e.cpm}).map(function(e){return e.adUnitCode}).filter(h.uniques).map(function(t){return n.filter(function(e){return e.adUnitCode===t?e:null}).reduce(h.getHighestCpm)})},B.setTargetingForAst=function(e){var r=B.getAllTargeting(e);try{B.resetPresetTargetingAST(e)}catch(e){u.logError("unable to reset targeting for AST"+e)}Object.keys(r).forEach(function(n){return Object.keys(r[n]).forEach(function(e){var t;u.logMessage("Attempting to set targeting for targetId: ".concat(n," key: ").concat(e," value: ").concat(r[n][e])),(u.isStr(r[n][e])||u.isArray(r[n][e]))&&(t={},e.search(/pt[0-9]/)<0?t[e.toUpperCase()]=r[n][e]:t[e]=r[n][e],window.apntag.setKeywords(n,t,{overrideKeyValue:!0}))})})},B.isApntagDefined=function(){if(window.apntag&&u.isFn(window.apntag.setKeywords))return!0},B);function x(e,t){return e.adserverTargeting&&t&&(u.isArray(t)&&A()(t,e.adUnitCode)||"string"==typeof t&&e.adUnitCode===t)}function U(e){return"string"==typeof e?[e]:u.isArray(e)?e:f.getAdUnitCodes()||[]}function R(){var e=f.getBidsReceived();return m.b.getConfig("useBidCache")||(e=e.filter(function(e){return l[e.adUnitCode]===e.auctionId})),w(e=e.filter(function(e){return Object(h.deepAccess)(e,"video.context")!==o.a}).filter(function(e){return"banner"!==e.mediaType||Object(i.c)([e.width,e.height])}).filter(d).filter(s),h.getOldestHighestCpmBid)}function k(){return f.getStandardBidderAdServerTargeting().map(function(e){return e.key}).concat(j).filter(h.uniques)}function D(r,i,e,t){return Object.keys(i.adserverTargeting).filter(g()).forEach(function(e){var t,n;r.length&&r.filter((n=e,function(e){return e.adUnitCode===i.adUnitCode&&e.adserverTargeting[n]})).forEach((t=e,function(e){u.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]]),e.adserverTargeting[t]=e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(h.uniques),delete i.adserverTargeting[t]}))}),r.push(i),r}function g(){var t=k().concat(S.a);return function(e){return-1===t.indexOf(e)}}function N(t){return O({},t.adUnitCode,Object.keys(t.adserverTargeting).filter(g()).map(function(e){return O({},e.substring(0,20),[t.adserverTargeting[e]])}))}function P(t,e){return e.map(function(e){return O({},"".concat(e,"_").concat(t.bidderCode).substring(0,20),[t.adserverTargeting[e]])})}},43:function(e,t){e.exports={}},44:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var a=n(0),r=n(3),i=n(12),o=n.n(i),c=n(7);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}r.b.setDefaults({userSync:a.deepClone({syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0})});var f=Object(c.a)("usersync");var l,p,g,b,v,y,h,m=!a.isSafariBrowser()&&f.cookiesAreEnabled(),S=(l={config:r.b.getConfig("userSync"),browserSupportsCookies:m},p={},g=A(),b=new Set,y={image:!0,iframe:!(v={})},h=l.config,r.b.getConfig("userSync",function(e){var t;e.userSync&&(t=e.userSync.filterSettings,a.isPlainObject(t)&&(t.image||t.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))),h=d(h,e.userSync)}),p.registerSync=function(e,t,n){return b.has(t)?a.logMessage('already fired syncs for "'.concat(t,'", ignoring registerSync call')):h.syncEnabled&&a.isArray(g[e])?t?0!==h.syncsPerBidder&&Number(v[t])>=h.syncsPerBidder?a.logWarn('Number of user syncs exceeded for "'.concat(t,'"')):p.canBidderRegisterSync(e,t)?(g[e].push([t,n]),(r=v)[i=t]?r[i]+=1:r[i]=1,void(v=r)):a.logWarn('Bidder "'.concat(t,'" not permitted to register their "').concat(e,'" userSync pixels.')):a.logWarn("Bidder is required for registering sync"):a.logWarn('User sync type "'.concat(e,'" not supported'));var r,i},p.syncUsers=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(E,Number(e));E()},p.triggerUserSyncs=function(){h.enableOverride&&p.syncUsers()},p.canBidderRegisterSync=function(e,t){return!h.filterSettings||!T(e,t)},p);function A(){return{image:[],iframe:[]}}function E(){if(h.syncEnabled&&l.browserSupportsCookies){try{!function(){if(!y.image)return;O(g.image,function(e){var t=u(e,2),n=t[0],r=t[1];a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),a.triggerPixel(r)})}(),function(){if(!y.iframe)return;O(g.iframe,function(e){var t=u(e,2),n=t[0],r=t[1];a.logMessage("Invoking iframe user sync for bidder: ".concat(n)),a.insertUserSyncIframe(r)})}()}catch(e){return a.logError("Error firing user syncs",e)}g=A()}}function O(e,t){a.shuffle(e).forEach(function(e){t(e),b.add(e[0])})}function T(e,t){var n=h.filterSettings;if(function(e,t){if(e.all&&e[t])return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var n=e.all?e.all:e[t],r=e.all?"all":t;if(!n)return!1;var i=n.filter,o=n.bidders;if(i&&"include"!==i&&"exclude"!==i)return a.logWarn('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(i,"' is not a valid option; use either 'include' or 'exclude'.")),!1;return!!("*"===o||Array.isArray(o)&&0<o.length&&o.every(function(e){return a.isStr(e)&&"*"!==e}))||(a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1)}(n,e)){y[e]=!0;var r=n.all?n.all:n[e],i="*"===r.bidders?[t]:r.bidders;return{include:function(e,t){return!o()(e,t)},exclude:function(e,t){return o()(e,t)}}[r.filter||"include"](i,t)}}},45:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h});var r=n(10),v=n.n(r),i=n(0),y=2,o={buckets:[{max:5,increment:.5}]},a={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},u={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},s={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function d(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":f(e,o,n),med:""===r?"":f(e,a,n),high:""===r?"":f(e,c,n),auto:""===r?"":f(e,s,n),dense:""===r?"":f(e,u,n),custom:""===r?"":f(e,t,n)}}function f(n,e,r){var i="";if(!h(e))return i;var t,o,a,c,u,s,d,f,l,p=e.buckets.reduce(function(e,t){return e.max>t.max?e:t},{max:0}),g=0,b=v()(e.buckets,function(e){if(n>p.max*r){var t=e.precision;void 0===t&&(t=y),i=(e.max*r).toFixed(t)}else{if(n<=e.max*r&&g*r<=n)return e.min=g,e;g=e.max}});return b&&(t=n,a=r,c=void 0!==(o=b).precision?o.precision:y,u=o.increment*a,s=o.min*a,d=Math.pow(10,c+2),f=(t*d-s*d)/(u*d),l=Math.floor(f)*u+s,i=(l=Number(l.toFixed(10))).toFixed(c)),i}function h(e){if(i.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach(function(e){e.max&&e.increment||(t=!1)}),t}},46:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},47:function(e,t,n){var r=n(70),i=n(49);e.exports=function(e){return r(i(e))}},48:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},49:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},494:function(e,t,n){var r=n(495);e.exports=r},495:function(e,t,n){n(496);var r=n(43);e.exports=r.Number.isInteger},496:function(e,t,n){n(14)({target:"Number",stat:!0},{isInteger:n(497)})},497:function(e,t,n){var r=n(25),i=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&i(e)===e}},5:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",NO_BID:"noBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocuemnt",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host"},NATIVE_KEYS:{title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice"},S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},BID_STATUS:{BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"}}},50:function(e,t,n){var r=n(58),i=Math.min;e.exports=function(e){return 0<e?i(r(e),9007199254740991):0}},51:function(e,t){e.exports=function(){}},52:function(e,t,n){var r=n(27);e.exports=r},53:function(e,t){e.exports={}},54:function(e,t,n){var r,i,o,a,c,u,s,d,f=n(113),l=n(24),p=n(25),g=n(31),b=n(26),v=n(65),y=n(53),h=l.WeakMap;s=f?(r=new h,i=r.get,o=r.has,a=r.set,c=function(e,t){return a.call(r,e,t),t},u=function(e){return i.call(r,e)||{}},function(e){return o.call(r,e)}):(y[d=v("state")]=!0,c=function(e,t){return g(e,d,t),t},u=function(e){return b(e,d)?e[d]:{}},function(e){return b(e,d)}),e.exports={set:c,get:u,has:s,enforce:function(e){return s(e)?u(e):c(e,{})},getterFor:function(n){return function(e){var t;if(!p(e)||(t=u(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},55:function(e,t,n){var i=n(25);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},56:function(e,t,n){function r(p){var g=1==p,b=2==p,v=3==p,y=4==p,h=6==p,m=5==p||h;return function(e,t,n,r){for(var i,o,a=E(e),c=A(a),u=S(t,n,3),s=O(c.length),d=0,f=r||T,l=g?f(e,s):b?f(e,0):void 0;d<s;d++)if((m||d in c)&&(o=u(i=c[d],d,a),p))if(g)l[d]=o;else if(o)switch(p){case 3:return!0;case 5:return i;case 6:return d;case 2:I.call(l,i)}else if(y)return!1;return h?-1:v||y?y:l}}var S=n(22),A=n(70),E=n(57),O=n(50),T=n(101),I=[].push;e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},57:function(e,t,n){var r=n(49);e.exports=function(e){return Object(r(e))}},58:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},59:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},60:function(e,t,n){function a(e){throw e}var c=n(29),u=n(30),s=n(26),d=Object.defineProperty,f={};e.exports=function(e,t){if(s(f,e))return f[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,i=s(t,0)?t[0]:a,o=s(t,1)?t[1]:void 0;return f[e]=!!n&&!u(function(){if(r&&!c)return!0;var e={length:-1};r?d(e,1,{enumerable:!0,get:a}):e[1]=1,n.call(e,i,o)})}},61:function(e,t,n){var r=n(62),i=n(38),o=n(19)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},62:function(e,t,n){var r=n(63),i=n(48),o=n(19)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},63:function(e,t,n){var r={};r[n(19)("toStringTag")]="z",e.exports="[object z]"===String(r)},64:function(e,t,n){var o=n(63),a=n(32).f,c=n(31),u=n(26),s=n(112),d=n(19)("toStringTag");e.exports=function(e,t,n,r){var i;e&&(i=n?e:e.prototype,u(i,d)||a(i,d,{configurable:!0,value:t}),r&&!o&&c(i,"toString",s))}},65:function(e,t,n){var r=n(73),i=n(59),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},66:function(e,t,n){"use strict";function y(){return this}var h=n(14),m=n(121),S=n(86),A=n(123),E=n(64),O=n(31),T=n(84),r=n(19),I=n(16),C=n(38),i=n(85),j=i.IteratorPrototype,w=i.BUGGY_SAFARI_ITERATORS,_=r("iterator"),B="values",x="entries";e.exports=function(e,t,n,r,i,o,a){m(n,t,r);function c(e){if(e===i&&b)return b;if(!w&&e in p)return p[e];switch(e){case"keys":case B:case x:return function(){return new n(this,e)}}return function(){return new n(this)}}var u,s,d,f=t+" Iterator",l=!1,p=e.prototype,g=p[_]||p["@@iterator"]||i&&p[i],b=!w&&g||c(i),v="Array"==t&&p.entries||g;if(v&&(u=S(v.call(new e)),j!==Object.prototype&&u.next&&(I||S(u)===j||(A?A(u,j):"function"!=typeof u[_]&&O(u,_,y)),E(u,f,!0,!0),I&&(C[f]=y))),i==B&&g&&g.name!==B&&(l=!0,b=function(){return g.call(this)}),I&&!a||p[_]===b||O(p,_,b),C[t]=b,i)if(s={values:c(B),keys:o?b:c("keys"),entries:c(x)},a)for(d in s)!w&&!l&&d in p||T(p,d,s[d]);else h({target:t,proto:!0,forced:w||l},s);return s}},67:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),c={};function i(e,t,n){var r,i,o,a=(i=n,o=c[r=e]=c[r]||{bidders:{}},i?o.bidders[i]=o.bidders[i]||{}:o);return a[t]=(a[t]||0)+1,a[t]}var o={incrementRequestsCounter:function(e){return i(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,t){return i(e,"requestsCounter",t)},incrementBidderWinsCounter:function(e,t){return i(e,"winsCounter",t)},getRequestsCounter:function(e){return Object(r.deepAccess)(c,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,t){return Object(r.deepAccess)(c,"".concat(e,".bidders.").concat(t,".requestsCounter"))||0},getBidderWinsCounter:function(e,t){return Object(r.deepAccess)(c,"".concat(e,".bidders.").concat(t,".winsCounter"))||0}}},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"adUnitSetupChecks",function(){return z}),n.d(t,"checkAdUnitSetup",function(){return V}),t.executeCallbacks=J;var r=n(21),i=n(0),o=n(227),a=n(44),d=n(3),m=n(23),f=n(42),c=n(13),u=n(228),s=n(12),l=n.n(s),p=n(67),S=n(11),g=n(33),b=n(7);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=Object(r.a)(),A=n(5),E=n(0),O=n(9).default,T=n(8),I=a.a.triggerUserSyncs,C=A.EVENTS,j=C.ADD_AD_UNITS,w=C.BID_WON,_=C.REQUEST_BIDS,B=C.SET_TARGETING,x=C.AD_RENDER_FAILED,U=A.AD_RENDER_FAILED_REASON,R=U.PREVENT_WRITING_ON_MAIN_DOCUMENT,k=U.NO_AD,D=U.EXCEPTION,N=U.CANNOT_FIND_AD,P=U.MISSING_DOC_OR_ADID,q={bidWon:function(e){var t=m.a.getBidsRequested().map(function(e){return e.bids.map(function(e){return e.adUnitCode})}).reduce(i.flatten).filter(i.uniques);return!!E.contains(t,e)||void E.logError('The "'+e+'" placement is not defined.')}};function M(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function G(e,t){var n=[];return E.isArray(e)&&(t?e.length===t:0<e.length)&&(e.every(function(e){return Object(i.isArrayOfNums)(e,2)})?n=e:Object(i.isArrayOfNums)(e,2)&&n.push(e)),n}function W(e){var t=E.deepClone(e),n=t.mediaTypes.banner,r=G(n.sizes);return 0<r.length?(n.sizes=r,t.sizes=r):(E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete t.mediaTypes.banner),t}function L(e){var t,n,r=E.deepClone(e),i=r.mediaTypes.video;return i.playerSize&&(t="number"==typeof i.playerSize[0]?2:1,0<(n=G(i.playerSize,t)).length?(2==t&&E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),i.playerSize=n,r.sizes=n):(E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete r.mediaTypes.video.playerSize)),r}function F(e){var t=E.deepClone(e),n=t.mediaTypes.native;return n.image&&n.image.sizes&&!Array.isArray(n.image.sizes)&&(E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete t.mediaTypes.native.image.sizes),n.image&&n.image.aspect_ratios&&!Array.isArray(n.image.aspect_ratios)&&(E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete t.mediaTypes.native.image.aspect_ratios),n.icon&&n.icon.sizes&&!Array.isArray(n.icon.sizes)&&(E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete t.mediaTypes.native.icon.sizes),t}Object(u.a)(),h.bidderSettings=h.bidderSettings||{},h.libLoaded=!0,h.version="v4.11.0",E.logInfo("Prebid.js v4.11.0 loaded"),h.adUnits=h.adUnits||[],h.triggerUserSyncs=I;var z={validateBannerMediaType:W,validateVideoMediaType:L,validateNativeMediaType:F,validateSizes:G},V=Object(c.b)("sync",function(e){var a=[];return e.forEach(function(e){var t,n,r,i,o=e.mediaTypes;o&&0!==Object.keys(o).length?(o.banner&&(t=W(e)),o.video&&(n=L(t||e)),o.native&&(r=F(n||(t||e))),i=y({},t,n,r),a.push(i)):E.logError("Detected adUnit.code '".concat(e.code,"' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."))}),a},"checkAdUnitSetup");function H(e){var n=m.a[e]().filter(E.bind.call(i.adUnitsFilter,this,m.a.getAdUnitCodes())),r=m.a.getLastAuctionId();return n.map(function(e){return e.adUnitCode}).filter(i.uniques).map(function(t){return n.filter(function(e){return e.auctionId===r&&e.adUnitCode===t})}).filter(function(e){return e&&e[0]&&e[0].adUnitCode}).map(function(e){return t={},n=e[0].adUnitCode,r={bids:e},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r}).reduce(function(e,t){return y(e,t)},{})}function K(e){var t=e.reason,n=e.message,r=e.bid,i=e.id,o={reason:t,message:n};r&&(o.bid=r),i&&(o.adId=i),E.logError(n),T.emit(x,o)}function J(e,t){function n(e){for(var t;t=e.shift();)t()}n(b.c),n(Y),e.call(this,t)}h.getAdserverTargetingForAdUnitCodeStr=function(e){if(E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=h.getAdserverTargetingForAdUnitCode(e);return E.transformAdServerTargetingObj(t)}E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},h.getAdserverTargetingForAdUnitCode=function(e){return h.getAdserverTargeting(e)[e]},h.getAdserverTargeting=function(e){return E.logInfo("Invoking pbjs.getAdserverTargeting",arguments),f.a.getAllTargeting(e)},h.getNoBids=function(){return E.logInfo("Invoking pbjs.getNoBids",arguments),H("getNoBids")},h.getBidResponses=function(){return E.logInfo("Invoking pbjs.getBidResponses",arguments),H("getBidsReceived")},h.getBidResponsesForAdUnitCode=function(t){return{bids:m.a.getBidsReceived().filter(function(e){return e.adUnitCode===t})}},h.setTargetingForGPTAsync=function(e,t){var n;E.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),Object(i.isGptPubadsDefined)()?(n=f.a.getAllTargeting(e),f.a.resetPresetTargeting(e,t),f.a.setTargetingForGPT(n,t),Object.keys(n).forEach(function(t){Object.keys(n[t]).forEach(function(e){"hb_adid"===e&&m.a.setStatusForBids(n[t][e],A.BID_STATUS.BID_TARGETING_SET)})}),T.emit(B,n)):E.logError("window.googletag is not defined on the page")},h.setTargetingForAst=function(e){E.logInfo("Invoking pbjs.setTargetingForAn",arguments),f.a.isApntagDefined()?(f.a.setTargetingForAst(e),T.emit(B,f.a.getAllTargeting())):E.logError("window.apntag is not defined on the page")},h.renderAd=function(e,t,n){if(E.logInfo("Invoking pbjs.renderAd",arguments),E.logMessage("Calling renderAd with adId :"+t),e&&t)try{var r,i,o,a,c,u,s,d,f,l,p,g,b,v=m.a.findBidByAdId(t);v?(v.ad=E.replaceAuctionPrice(v.ad,v.cpm),v.adUrl=E.replaceAuctionPrice(v.adUrl,v.cpm),n&&n.clickThrough&&(r=n.clickThrough,v.ad=E.replaceClickThrough(v.ad,r),v.adUrl=E.replaceClickThrough(v.adUrl,r)),m.a.addWinningBid(v),T.emit(w,v),i=v.height,o=v.width,a=v.ad,c=v.mediaType,u=v.adUrl,s=v.renderer,d=document.createComment("Creative ".concat(v.creativeId," served by ").concat(v.bidder," Prebid.js Header Bidding")),E.insertElement(d,e,"body"),Object(S.c)(s)?Object(S.b)(s,v):e===document&&!E.inIframe()||"video"===c?(f="Error trying to write ad. Ad render call ad id ".concat(t," was prevented from writing to the main document."),K({reason:R,message:f,bid:v,id:t})):a?(navigator.userAgent&&-1<navigator.userAgent.toLowerCase().indexOf("firefox/")&&((l=navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1])&&parseInt(l,10)<67&&e.open("text/html","replace")),e.write(a),e.close(),M(e,o,i),E.callBurl(v)):u?((p=E.createInvisibleIframe()).height=i,p.width=o,p.style.display="inline",p.style.overflow="hidden",p.src=u,E.insertElement(p,e,"body"),M(e,o,i),E.callBurl(v)):(g="Error trying to write ad. No ad for bid response id: ".concat(t),K({reason:k,message:g,bid:v,id:t}))):(b="Error trying to write ad. Cannot find ad by given id : ".concat(t),K({reason:N,message:b,id:t}))}catch(e){var y="Error trying to write ad Id :".concat(t," to the page:").concat(e.message);K({reason:D,message:y,id:t})}else{var h="Error trying to write ad Id :".concat(t," to the page. Missing document or adId");K({reason:P,message:h,id:t})}},h.removeAdUnit=function(e){E.logInfo("Invoking pbjs.removeAdUnit",arguments),e?(E.isArray(e)?e:[e]).forEach(function(e){for(var t=h.adUnits.length-1;0<=t;t--)h.adUnits[t].code===e&&h.adUnits.splice(t,1)}):h.adUnits=[]},h.requestBids=Object(c.b)("async",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels,a=e.auctionId;T.emit(_);var c=n||d.b.getConfig("bidderTimeout"),r=r||h.adUnits;if(E.logInfo("Invoking pbjs.requestBids",arguments),r=V(r),i&&i.length?r=r.filter(function(e){return l()(i,e.code)}):i=r&&r.map(function(e){return e.code}),r.forEach(function(i){var o=Object.keys(i.mediaTypes||{banner:"banner"}),e=i.bids.map(function(e){return e.bidder}),a=O.bidderRegistry,t=d.b.getConfig("s2sConfig"),n=t&&t.bidders,r=n?e.filter(function(e){return!l()(n,e)}):e;i.transactionId=E.generateUUID(),r.forEach(function(t){var e=a[t],n=e&&e.getSpec&&e.getSpec(),r=n&&n.supportedMediaTypes||["banner"];o.some(function(e){return l()(r,e)})?p.a.incrementBidderRequestsCounter(i.code,t):(E.logWarn(E.unsupportedBidderMessage(i,t)),i.bids=i.bids.filter(function(e){return e.bidder!==t}))}),p.a.incrementRequestsCounter(i.code)}),r&&0!==r.length){var u=m.a.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:c,labels:o,auctionId:a}),s=r.length;15<s&&E.logInfo("Current auction ".concat(u.getAuctionId()," contains ").concat(s," adUnits."),r),i.forEach(function(e){return f.a.setLatestAuctionForAdUnit(e,u.getAuctionId())}),u.callBids()}else if(E.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){E.logError("Error executing bidsBackHandler",null,e)}}),h.requestBids.before(J,49),h.addAdUnits=function(e){E.logInfo("Invoking pbjs.addAdUnits",arguments),E.isArray(e)?h.adUnits.push.apply(h.adUnits,e):"object"===v(e)&&h.adUnits.push(e),T.emit(j)},h.onEvent=function(e,t,n){E.logInfo("Invoking pbjs.onEvent",arguments),E.isFn(t)?!n||q[e].call(null,n)?T.on(e,t,n):E.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):E.logError('The event handler provided is not a function and was not set on event "'+e+'".')},h.offEvent=function(e,t,n){E.logInfo("Invoking pbjs.offEvent",arguments),n&&!q[e].call(null,n)||T.off(e,t,n)},h.getEvents=function(){return E.logInfo("Invoking pbjs.getEvents"),T.getEvents()},h.registerBidAdapter=function(e,t){E.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{O.registerBidAdapter(e(),t)}catch(e){E.logError("Error registering bidder adapter : "+e.message)}},h.registerAnalyticsAdapter=function(e){E.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{O.registerAnalyticsAdapter(e)}catch(e){E.logError("Error registering analytics adapter : "+e.message)}},h.createBid=function(e){return E.logInfo("Invoking pbjs.createBid",arguments),Object(g.a)(e)};var Y=[],Q=Object(c.b)("async",function(e){e&&!E.isEmpty(e)?(E.logInfo("Invoking pbjs.enableAnalytics for: ",e),O.enableAnalytics(e)):E.logError("pbjs.enableAnalytics should be called with option {}")},"enableAnalyticsCb");function $(e){e.forEach(function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){E.logError("Error processing command :","prebid.js",e)}})}h.enableAnalytics=function(e){Y.push(Q.bind(this,e))},h.aliasBidder=function(e,t,n){E.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?O.aliasBidAdapter(e,t,n):E.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},h.getAllWinningBids=function(){return m.a.getAllWinningBids()},h.getAllPrebidWinningBids=function(){return m.a.getBidsReceived().filter(function(e){return e.status===A.BID_STATUS.BID_TARGETING_SET})},h.getHighestCpmBids=function(e){return f.a.getWinningBids(e)},h.markWinningBidAsUsed=function(t){var e=[];t.adUnitCode&&t.adId?e=m.a.getBidsReceived().filter(function(e){return e.adId===t.adId&&e.adUnitCode===t.adUnitCode}):t.adUnitCode?e=f.a.getWinningBids(t.adUnitCode):t.adId?e=m.a.getBidsReceived().filter(function(e){return e.adId===t.adId}):E.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),0<e.length&&(e[0].status=A.BID_STATUS.RENDERED)},h.getConfig=d.b.getConfig,h.setConfig=d.b.setConfig,h.setBidderConfig=d.b.setBidderConfig,h.que.push(function(){return Object(o.a)()}),h.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){E.logError("Error processing command :",e.message,e.stack)}else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},h.que.push=h.cmd.push,h.processQueue=function(){c.b.ready(),$(h.que),$(h.cmd)},t.default=h},69:function(e,t,n){"use strict";t.a=function(t,n){o.adServers=o.adServers||{},o.adServers[t]=o.adServers[t]||{},Object.keys(n).forEach(function(e){o.adServers[t][e]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(e," for AdServer ").concat(t,".")):o.adServers[t][e]=n[e]})};var r=n(21),i=n(0),o=Object(r.a)()},7:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"d",function(){return p}),t.a=function(e){return o({moduleName:e,moduleType:"core"})},t.b=function(e,t){return o({gvlid:e,moduleName:t})};var r=n(13),u=n(0),i=n(12),d=n.n(i),f=["core","prebid-module"],l=[];function o(e){var t=0<arguments.length&&void 0!==e?e:{},i=t.gvlid,o=t.moduleName,a=t.moduleType;function s(n){if(d()(f,a)){return n({valid:!0})}var r;return p(i,o,{hasEnforcementHook:!1},function(e){var t;r=e&&e.hasEnforcementHook?n(e):(t={hasEnforcementHook:!1,valid:u.hasDeviceAccess()},n(t))}),r}var c=function(t){function n(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){u.logError("Local storage api disabled")}return!1}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})};return{setCookie:function(i,o,a,c,u,t){function n(e){var t,n,r;e&&e.valid&&(t=u&&""!==u?" ;domain=".concat(encodeURIComponent(u)):"",n=a&&""!==a?" ;expires=".concat(a):"",r=null!=c&&"none"==c.toLowerCase()?"; Secure":"",document.cookie="".concat(i,"=").concat(encodeURIComponent(o)).concat(n,"; path=/").concat(t).concat(c?"; SameSite=".concat(c):"").concat(r))}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},getCookie:function(n,t){function r(e){if(e&&e.valid){var t=window.document.cookie.match("(^|;)\\s*"+n+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}if(!t||"function"!=typeof t)return s(r);l.push(function(){var e=s(r);t(e)})},localStorageIsEnabled:function(t){function n(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}return!1}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},cookiesAreEnabled:function(t){function n(e){return!(!e||!e.valid)&&(!!u.checkCookieSupport()||(window.document.cookie="prebid.cookieTest",-1!==window.document.cookie.indexOf("prebid.cookieTest")))}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},setDataInLocalStorage:function(t,n,r){function i(e){e&&e.valid&&c()&&window.localStorage.setItem(t,n)}if(!r||"function"!=typeof r)return s(i);l.push(function(){var e=s(i);r(e)})},getDataFromLocalStorage:function(t,n){function r(e){return e&&e.valid&&c()?window.localStorage.getItem(t):null}if(!n||"function"!=typeof n)return s(r);l.push(function(){var e=s(r);n(e)})},removeDataFromLocalStorage:function(t,n){function r(e){e&&e.valid&&c()&&window.localStorage.removeItem(t)}if(!n||"function"!=typeof n)return s(r);l.push(function(){var e=s(r);n(e)})},hasLocalStorage:c,findSimilarCookies:function(o,t){function n(e){if(e&&e.valid){var t=[];if(u.hasDeviceAccess())for(var n=document.cookie.split(";");n.length;){var r=n.pop(),i=(i=r.indexOf("="))<0?r.length:i;0<=decodeURIComponent(r.slice(0,i).replace(/^\s+/,"")).indexOf(o)&&t.push(decodeURIComponent(r.slice(i+1)))}return t}}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})}}}var p=Object(r.b)("async",function(e,t,n,r){r(n)},"validateStorageEnforcement")},70:function(e,t,n){var r=n(30),i=n(48),o="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},71:function(e,t,n){var r=n(29),i=n(30),o=n(72);e.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},72:function(e,t,n){var r=n(24),i=n(25),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},73:function(e,t,n){var r=n(16),i=n(74);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},74:function(e,t,n){var r=n(24),i=n(103),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},75:function(e,t,n){var r=n(30);e.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},76:function(e,t,n){function r(c){return function(e,t,n){var r,i=u(e),o=s(i.length),a=d(n,o);if(c&&t!=t){for(;a<o;)if((r=i[a++])!=r)return!0}else for(;a<o;a++)if((c||a in i)&&i[a]===t)return c||a||0;return!c&&-1}}var u=n(47),s=n(50),d=n(107);e.exports={includes:r(!0),indexOf:r(!1)}},77:function(e,t,n){var r=n(108);n(131),n(133),n(135),n(137),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),e.exports=r},78:function(e,t,n){function r(e){c(e,d,{value:{objectID:"O"+ ++f,weakData:{}}})}var i=n(53),o=n(25),a=n(26),c=n(32).f,u=n(59),s=n(111),d=u("meta"),f=0,l=Object.isExtensible||function(){return!0},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,d)){if(!l(e))return"F";if(!t)return"E";r(e)}return e[d].objectID},getWeakData:function(e,t){if(!a(e,d)){if(!l(e))return!0;if(!t)return!1;r(e)}return e[d].weakData},onFreeze:function(e){return s&&p.REQUIRED&&l(e)&&!a(e,d)&&r(e),e}};i[d]=!0},79:function(e,t,n){var r=n(19),i=n(38),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},8:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c,i,u=n(0),o=n(5),a=Array.prototype.slice,s=Array.prototype.push,d=u._map(o.EVENTS,function(e){return e}),f=o.EVENT_ID_PATHS,l=[];e.exports=(c={},(i={}).on=function(e,t,n){var r,i;i=e,u.contains(d,i)?(r=c[e]||{que:[]},n?(r[n]=r[n]||{que:[]},r[n].que.push(t)):r.que.push(t),c[e]=r):u.logError("Wrong event name : "+e+" Valid event names :"+d)},i.emit=function(e){!function(e,t){u.logMessage("Emitting event for: "+e);var n=t[0]||{},r=n[f[e]],i=c[e]||{que:[]},o=u._map(i,function(e,t){return t}),a=[];l.push({eventType:e,args:n,id:r}),r&&u.contains(o,r)&&s.apply(a,i[r].que),s.apply(a,i.que),u._each(a,function(e){if(e)try{e.apply(null,t)}catch(e){u.logError("Error executing handler:","events.js",e)}})}(e,a.call(arguments,1))},i.off=function(e,n,r){var i=c[e];u.isEmpty(i)||u.isEmpty(i.que)&&u.isEmpty(i[r])||r&&(u.isEmpty(i[r])||u.isEmpty(i[r].que))||(r?u._each(i[r].que,function(e){var t=i[r].que;e===n&&t.splice(t.indexOf(e),1)}):u._each(i.que,function(e){var t=i.que;e===n&&t.splice(t.indexOf(e),1)}),c[e]=i)},i.get=function(){return c},i.getEvents=function(){var n=[];return u._each(l,function(e){var t=r({},e);n.push(t)}),n},i)},80:function(e,t,n){var o=n(15);e.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},81:function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},82:function(e,t,n){function r(){}function i(e){return"<script>"+e+"</"+g+">"}var o,a=n(15),c=n(116),u=n(83),s=n(53),d=n(119),f=n(72),l=n(65),p="prototype",g="script",b=l("IE_PROTO"),v=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;v=o?function(e){e.write(i("")),e.close();var t=e.parentWindow.Object;return e=null,t}(o):((t=f("iframe")).style.display="none",d.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(i("document.F=Object")),e.close(),e.F);for(var n=u.length;n--;)delete v[p][u[n]];return v()};s[b]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(r[p]=a(e),n=new r,r[p]=null,n[b]=e):n=v(),void 0===t?n:c(n,t)}},83:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},84:function(e,t,n){var i=n(31);e.exports=function(e,t,n,r){r&&r.enumerable?e[t]=n:i(e,t,n)}},85:function(e,t,n){"use strict";var r,i,o,a=n(86),c=n(31),u=n(26),s=n(19),d=n(16),f=s("iterator"),l=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(r=i):l=!0),null==r&&(r={}),d||u(r,f)||c(r,f,function(){return this}),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},86:function(e,t,n){var r=n(26),i=n(57),o=n(65),a=n(122),c=o("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=i(e),r(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},87:function(e,t,n){"use strict";var i=n(127).charAt,r=n(54),o=n(66),a="String Iterator",c=r.set,u=r.getterFor(a);o(String,"String",function(e){c(this,{type:a,string:String(e),index:0})},function(){var e,t=u(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})})},88:function(e,t,n){var r=n(15),i=n(61);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},882:function(e,t,n){e.exports=n(68)},89:function(e,t,n){var r=n(153);e.exports=r},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"gdprDataHandler",function(){return R}),n.d(t,"uspDataHandler",function(){return k}),t.setS2STestingModule=function(e){I=e};var S=n(0),p=n(91),g=n(36),l=n(1),h=n(4),A=n(3),r=n(13),i=n(12),E=n.n(i),o=n(10),O=n.n(o),b=n(67),T=n(20);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I,C=n(0),j=n(5),w=n(8),y={},_=y.bidderRegistry={},B=y.aliasRegistry={},x={};A.b.getConfig("s2sConfig",function(e){x=e.s2sConfig});var c={};var U=Object(r.b)("sync",function(e){var i=e.bidderCode,s=e.auctionId,d=e.bidderRequestId,t=e.adUnits,f=e.labels,l=e.src;return t.reduce(function(e,c){var t=Object(p.b)(Object(p.a)(c,f),c.mediaTypes,c.sizes),n=t.active,u=t.mediaTypes,r=t.filterResults;return n?r&&C.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" banner sizes from '),r.before,"to ",r.after):C.logInfo('Size mapping disabled adUnit "'.concat(c.code,'"')),n&&e.push(c.bids.filter(function(e){return e.bidder===i}).reduce(function(e,t){var n=c.nativeParams||C.deepAccess(c,"mediaTypes.native");n&&(t=v({},t,{nativeParams:Object(g.g)(n)})),t=v({},t,Object(S.getDefinedParams)(c,["fpd","mediaType","renderer","storedAuctionResponse"]));var r=Object(p.b)(Object(p.a)(t,f),u),i=r.active,o=r.mediaTypes,a=r.filterResults;return i?a&&C.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'" banner sizes from '),a.before,"to ",a.after):C.logInfo('Size mapping deactivated adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'"')),C.isValidMediaTypes(o)?t=v({},t,{mediaTypes:o}):C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),i&&e.push(v({},t,{adUnitCode:c.code,transactionId:c.transactionId,sizes:C.deepAccess(o,"banner.sizes")||C.deepAccess(o,"video.playerSize")||[],bidId:t.bid_id||C.getUniqueIdentifierStr(),bidderRequestId:d,auctionId:s,src:l,bidRequestsCount:b.a.getRequestsCounter(c.code),bidderRequestsCount:b.a.getBidderRequestsCounter(c.code,t.bidder),bidderWinsCount:b.a.getBidderWinsCounter(c.code,t.bidder)})),e},[])),e},[]).reduce(S.flatten,[]).filter(function(e){return""!==e})},"getBids");var R={consentData:null,setConsentData:function(e){R.consentData=e},getConsentData:function(){return R.consentData}},k={consentData:null,setConsentData:function(e){k.consentData=e},getConsentData:function(){return k.consentData}};function D(){return x&&x.enabled&&x.testing&&I}function u(t,n,e){try{var r=_[t].getSpec();r&&r[n]&&"function"==typeof r[n]&&(C.logInfo("Invoking ".concat(t,".").concat(n)),A.b.runWithBidder(t,S.bind.call(r[n],r,e)))}catch(e){C.logWarn("Error calling ".concat(n," of ").concat(t))}}y.makeBidRequests=Object(r.b)("sync",function(e,i,o,a,c){w.emit(j.EVENTS.BEFORE_REQUEST_BIDS,e);var u=[],t=Object(S.getBidderCodes)(e);A.b.getConfig("bidderSequence")===A.a&&(t=Object(S.shuffle)(t));var n,r,s,d,f,l,p,g=Object(T.a)(),b=t,v=[];x.enabled&&(D()&&(v=I.getSourceBidderMap(e)[I.CLIENT]),n=x.bidders,b=t.filter(function(e){return!E()(n,e)||E()(v,e)}),Boolean(D()&&x.testServerOnly)&&(p=e,Boolean(O()(p,function(e){return O()(e.bids,function(e){return(e.bidSource||x.bidderControl&&x.bidderControl[e.bidder])&&e.finalSource===I.SERVER})})))&&(b.length=0),d=e,f=x.bidders,(l=C.deepClone(d)).forEach(function(e){e.bids=e.bids.filter(function(e){return E()(f,e.bidder)&&(!D()||e.finalSource!==I.CLIENT)}).map(function(e){return e.bid_id=C.getUniqueIdentifierStr(),e})}),r=l=l.filter(function(e){return 0!==e.bids.length}),s=C.generateUUID(),n.forEach(function(e){var t=C.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:o,bidderRequestId:t,tid:s,bids:U({bidderCode:e,auctionId:o,bidderRequestId:t,adUnits:C.deepClone(r),labels:c,src:j.S2S.SRC}),auctionStart:i,timeout:x.timeout,src:j.S2S.SRC,refererInfo:g};0!==n.bids.length&&u.push(n)}),r.forEach(function(e){var t=e.bids.filter(function(t){return O()(u,function(e){return O()(e.bids,function(e){return e.bidId===t.bid_id})})});e.bids=t}),u.forEach(function(e){e.adUnitsS2SCopy=r.filter(function(e){return 0<e.bids.length})}));var y,h,m=(y=e,(h=C.deepClone(y)).forEach(function(e){e.bids=e.bids.filter(function(e){return!D()||e.finalSource!==I.SERVER})}),h=h.filter(function(e){return 0!==e.bids.length}));return b.forEach(function(e){var t=C.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:o,bidderRequestId:t,bids:U({bidderCode:e,auctionId:o,bidderRequestId:t,adUnits:C.deepClone(m),labels:c,src:"client"}),auctionStart:i,timeout:a,refererInfo:g},r=_[e];r||C.logError("Trying to make a request for bidder that does not exist: ".concat(e)),r&&n.bids&&0!==n.bids.length&&u.push(n)}),R.getConsentData()&&u.forEach(function(e){e.gdprConsent=R.getConsentData()}),k.getConsentData()&&u.forEach(function(e){e.uspConsent=k.getConsentData()}),u},"makeBidRequests"),y.callBids=function(e,t,i,o,a,c,u){var n,r,s,d,f,l,p,g,b,v,y;t.length?(r=(n=m(t.reduce(function(e,t){return e[Number(void 0!==t.src&&t.src===j.S2S.SRC)].push(t),e},[[],[]]),2))[0],(s=n[1]).length&&(d=Object(h.b)(c,a?{request:a.request.bind(null,"s2s"),done:a.done}:void 0),f=x.bidders,l=_[x.adapter],p=s[0].tid,g=s[0].adUnitsS2SCopy,l?(b={tid:p,ad_units:g}).ad_units.length&&(v=s.map(function(e){return e.start=Object(S.timestamp)(),o.bind(e)}),y=b.ad_units.reduce(function(e,t){return e.concat((t.bids||[]).reduce(function(e,t){return e.concat(t.bidder)},[]))},[]),C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e){return E()(y,e)}).join(","))),s.forEach(function(e){w.emit(j.EVENTS.BID_REQUESTED,e)}),l.callBids(b,s,function(e,t){var n=Object(S.getBidderRequest)(s,t.bidderCode,e);n&&i.call(n,e,t)},function(){return v.forEach(function(e){return e()})},d)):C.logError("missing "+x.adapter)),r.forEach(function(t){t.start=Object(S.timestamp)();var e=_[t.bidderCode];C.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)),w.emit(j.EVENTS.BID_REQUESTED,t);var n=Object(h.b)(c,a?{request:a.request.bind(null,t.bidderCode),done:a.done}:void 0),r=o.bind(t);try{A.b.runWithBidder(t.bidderCode,S.bind.call(e.callBids,e,t,i.bind(t),r,n,u,A.b.callbackWithBidder(t.bidderCode)))}catch(e){C.logError("".concat(t.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:e,bidRequest:t}),r()}})):C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},y.videoAdapters=[],y.registerBidAdapter=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).supportedMediaTypes,r=void 0===n?[]:n;e&&t?"function"==typeof e.callBids?(_[t]=e,E()(r,"video")&&y.videoAdapters.push(t),E()(r,"native")&&g.e.push(t)):C.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):C.logError("bidAdaptor or bidderCode not specified")},y.aliasBidAdapter=function(t,e,n){var r,i;if(void 0===_[e]){var o=_[t];if(void 0===o){var a=A.b.getConfig("s2sConfig"),c=a&&a.bidders;c&&E()(c,e)?B[e]=t:C.logError('bidderCode "'+t+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}else try{var u,s,d,f=(r=t,i=[],E()(y.videoAdapters,r)&&i.push("video"),E()(g.e,r)&&i.push("native"),i);o.constructor.prototype!=Object.prototype?(d=new o.constructor).setBidderCode(e):(u=o.getSpec(),s=n&&n.gvlid,d=Object(l.newBidder)(v({},u,{code:e,gvlid:s})),B[e]=t),y.registerBidAdapter(d,e,{supportedMediaTypes:f})}catch(e){C.logError(t+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else C.logMessage('alias name "'+e+'" has been already specified.')},y.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code,r=e.gvlid;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,c[n]={adapter:t,gvlid:r}):C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n,'"\n        analytics adapter must implement an enableAnalytics() function')):C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},y.enableAnalytics=function(e){C.isArray(e)||(e=[e]),C._each(e,function(e){var t=c[e.provider].adapter;t?t.enableAnalytics(e):C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider,"."))})},y.getBidAdapter=function(e){return _[e]},y.getAnalyticsAdapter=function(e){return c[e]},y.callTimedOutBidders=function(t,n,r){n=n.map(function(e){return e.params=C.getUserConfiguredParams(t,e.adUnitCode,e.bidder),e.timeout=r,e}),n=C.groupBy(n,"bidder"),Object.keys(n).forEach(function(e){u(e,"onTimeout",n[e])})},y.callBidWonBidder=function(e,t,n){t.params=C.getUserConfiguredParams(n,t.adUnitCode,t.bidder),b.a.incrementBidderWinsCounter(t.adUnitCode,t.bidder),u(e,"onBidWon",t)},y.callSetTargetingBidder=function(e,t){u(e,"onSetTargeting",t)},t.default=y},90:function(e,t,n){"use strict";t.a=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},91:function(e,t,n){"use strict";t.a=function(e,t){if(e.labelAll)return{labelAll:!0,labels:e.labelAll,activeLabels:t};return{labelAll:!1,labels:e.labelAny,activeLabels:t}},t.c=function(e){var t=v(1<arguments.length&&void 0!==arguments[1]?arguments[1]:b);return!t.shouldFilter||!!t.sizesSupported[e]},t.b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,a=void 0===o?[]:o,c=1<arguments.length?arguments[1]:void 0,u=2<arguments.length?arguments[2]:void 0,s=v(3<arguments.length&&void 0!==arguments[3]?arguments[3]:b);c=Object(p.isPlainObject)(c)?Object(p.deepClone)(c):u?{banner:{sizes:u}}:{};var d=Object(p.deepAccess)(c,"banner.sizes");s.shouldFilter&&d&&(c.banner.sizes=d.filter(function(e){return s.sizesSupported[e]}));var f=Object.keys(c),l={active:f.every(function(e){return"banner"!==e})||f.some(function(e){return"banner"===e})&&0<Object(p.deepAccess)(c,"banner.sizes.length")&&(0===n.length||!i&&(n.some(function(e){return s.labels[e]})||n.some(function(e){return g()(a,e)}))||i&&n.reduce(function(e,t){return e?s.labels[t]||g()(a,t):e},!0)),mediaTypes:c};d&&d.length!==c.banner.sizes.length&&(l.filterResults={before:d,after:c.banner.sizes});return l};var r=n(3),p=n(0),i=n(12),g=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=[];function v(e){return e.reduce(function(n,r){if("object"===o(r)&&"string"==typeof r.mediaQuery){var t=!1;if(""===r.mediaQuery)t=!0;else try{t=Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches}catch(e){Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),t=matchMedia(r.mediaQuery).matches}t&&(Array.isArray(r.sizesSupported)&&(n.shouldFilter=!0),["labels","sizesSupported"].forEach(function(t){return(r[t]||[]).forEach(function(e){return n[t][e]=!0})}))}else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');return n},{labels:{},sizesSupported:{},shouldFilter:!1})}r.b.getConfig("sizeConfig",function(e){return t=e.sizeConfig,void(b=t);var t})},92:function(e,t,n){var r=n(219);e.exports=r},93:function(e,t,n){"use strict";t.b=function(e,t,n){var r={puts:e.map(c,n)};Object(i.a)(o.b.getConfig("cache.url"),function(n){return{success:function(e){var t;try{t=JSON.parse(e).responses}catch(e){return void n(e,[])}t?n(null,t):n(new Error("The cache server didn't respond with a responses property."),[])},error:function(e,t){n(new Error("Error storing video ad in the cache: ".concat(e,": ").concat(JSON.stringify(t))),[])}}}(t),JSON.stringify(r),{contentType:"text/plain",withCredentials:!0})},t.a=function(e){return"".concat(o.b.getConfig("cache.url"),"?uuid=").concat(e)};var i=n(4),o=n(3),a=n(0);function c(e){var t,n,r,i={type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,r=n?"<![CDATA[".concat(n,"]]>"):"",'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t,"]]></VASTAdTagURI>\n        <Impression>").concat(r,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),ttlseconds:Number(e.ttl)};return o.b.getConfig("cache.vasttrack")&&(i.bidder=e.bidder,i.bidid=e.requestId,a.isPlainObject(this)&&this.hasOwnProperty("auctionStart")&&(i.timestamp=this.auctionStart)),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(i.key=e.customCacheKey),i}},96:function(e,t,n){n(97);var r=n(52);e.exports=r("Array","find")},97:function(e,t,n){"use strict";var r=n(14),i=n(56).find,o=n(51),a=n(60),c="find",u=!0,s=a(c);c in[]&&Array(1).find(function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{find:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o(c)},98:function(e,t,n){var r=n(29),i=n(99),o=n(46),a=n(47),c=n(55),u=n(26),s=n(71),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t,!0),s)try{return d(e,t)}catch(e){}if(u(e,t))return o(!i.f.call(e,t),e[t])}},99:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r}});
pbjsChunk([341],{185:function(e,r,n){e.exports=n(186)},186:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return d});var t=n(1),I=n(3),g=n(2),h=n(11),_=n(0),C="adform",d={code:C,gvlid:50,supportedMediaTypes:[g.b,g.d],isBidRequestValid:function(e){return!!e.params.mid},buildRequests:function(e,r){for(var n,t,d,s,i,o,u,a,p=I.b.getConfig("currency.adServerCurrency"),c=function(e){if(_.isArray(e)&&0<e.length){var r=function(e){return e.reduce(function(n,e){var t=e.source;return n[t]=n[t]||{},e.uids.forEach(function(e){var r=e.id+"";n[t][r]=n[t][r]||[],n[t][r].push(e.atype)}),n},{})}(e);return encodeURIComponent(btoa(JSON.stringify(r)))}}(_.deepAccess(e,"0.userIdAsEids")),g=[],h=[["adxDomain","adx.adform.net"],["fd",1],["url",null],["tid",null]],f=JSON.parse(JSON.stringify(e)),l=f[0]&&f[0].bidder||C,v=0,b=f.length;v<b;v++){for("net"!==(d=f[v]).params.priceType&&"net"!==d.params.pt||(u="net"),n=0,t=h.length;n<t;n++)(i=d[s=h[n][0]]||d.params[s])&&(d[s]=d.params[s]=null,h[n][1]=i);(o=d.params).transactionId=d.transactionId,o.rcur=o.rcur||p,g.push(function(e){var r,n=[];for(r in e)e.hasOwnProperty(r)&&e[r]&&n.push(r,"=",e[r],"&");return encodeURIComponent(btoa(n.join("").slice(0,-1)))}(o))}g.unshift("https://"+h[0][1]+"/adx/?rp=4"),u=u||"gross",g.push("pt="+u),g.push("stid="+e[0].auctionId);var m=_.deepAccess(r,"gdprConsent.gdprApplies"),y=_.deepAccess(r,"gdprConsent.consentString");for(void 0!==m&&(a={gdpr:m,gdpr_consent:y},g.push("gdpr="+(1&m)),g.push("gdpr_consent="+y)),r&&r.uspConsent&&g.push("us_privacy="+r.uspConsent),c&&g.push("eids="+c),v=1,b=h.length;v<b;v++)s=h[v][0],(i=h[v][1])&&g.push(s+"="+encodeURIComponent(i));return{method:"GET",url:g.join("&"),bids:e,netRevenue:u,bidder:l,gdpr:a}},interpretResponse:function(e,r){for(var n,t,d,s,i={banner:1,vast_content:1,vast_url:1},o=[],u=r.bids,a=e.body,p=0;p<a.length;p++)s="banner"===(t=a[p]).response?g.b:g.d,d=u[p],i[t.response]&&(function(e,r){for(var n=0,t=r.length;n<t;n++)if(e.width==r[n][0]&&e.height==r[n][1])return!0;return!1}(t,_.getAdUnitSizes(d))||s===g.d)&&(n={requestId:d.bidId,cpm:t.win_bid,width:t.width,height:t.height,creativeId:d.bidId,dealId:t.deal_id,currency:t.win_cur,netRevenue:"gross"!==r.netRevenue,ttl:360,ad:t.banner,bidderCode:r.bidder,transactionId:d.transactionId,vastUrl:t.vast_url,vastXml:t.vast_content,mediaType:s},d.renderer||s!==g.d||"outstream"!==_.deepAccess(d,"mediaTypes.video.context")||(n.renderer=h.a.install({id:d.bidId,url:"https://s2.adform.net/banners/scripts/video/outstream/render.js"}),n.renderer.setRender(c)),r.gdpr&&(n.gdpr=r.gdpr.gdpr,n.gdpr_consent=r.gdpr.gdpr_consent),o.push(n));return o;function c(e){e.renderer.push(function(){window.Adform.renderOutstream(e)})}}};Object(t.registerBidder)(d)}},[185]);
pbjsChunk([337],{193:function(e,r,t){e.exports=t(194)},194:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return i});var n=t(1),s=t(2);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function u(i){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){var r,t,n;r=i,n=a[t=e],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(a,e))})}return i}var i={code:"adhese",gvlid:553,supportedMediaTypes:[s.b,s.d],isBidRequestValid:function(e){return!(!e.params.account||!e.params.location||!e.params.format&&!e.mediaTypes.banner.sizes)},buildRequests:function(e,r){if(0===e.length)return null;var t,n=r.gdprConsent,i=r.refererInfo,a=e.map(function(e){return e.params.data}).reduce(p,{}),o=n&&n.consentString?{xt:[n.consentString]}:{},s=i&&i.referer?{xf:[(t=i.referer,btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))]}:{},d=m(e)?{x5:[m(e)]}:{},c={slots:e.map(function(e){return{slotname:l(e)}}),parameters:u(u(u(u({},a),o),s),d)};return{method:"POST",url:"https://ads-"+f(e)+".adhese.com/json",data:JSON.stringify(c),bids:e,options:{contentType:"application/json"}}},interpretResponse:function(e,r){var t=e.body.reduce(function(e,r){return e[r.slotName]=r,e},{});return e.account=f(r.bids),r.bids.map(function(e){return{bid:e,ad:t[l(e)]}}).filter(function(e){return e.ad}).map(function(e){return function(e,r){var t=function(e){if(e.extension&&e.extension.prebid&&e.extension.prebid.cpm)return e.extension.prebid.cpm;return{amount:0,currency:"USD"}}(r),n=function(e){var r="",t="",n={},i="",a="";{var o,s;c(e)?(r=e.id,t=e.orderId,n={priority:e.priority,orderProperty:e.orderProperty,adFormat:e.adFormat,adType:e.adType,libId:e.libId,adspaceId:e.adspaceId,viewableImpressionCounter:e.viewableImpressionCounter,slotId:e.slotID,slotName:e.slotName,advertiserId:e.advertiserId,adId:e.id}):(r=e.origin+(e.originInstance?"-"+e.originInstance:""),e.originData&&((n=e.originData).slotId=e.slotID,n.slotName=e.slotName,n.adType=e.adType,e.adFormat&&(n.adFormat=e.adFormat),e.originData.seatbid&&e.originData.seatbid.length&&((o=e.originData.seatbid[0]).bid&&o.bid.length&&(s=o.bid[0],r=String(s.crid||""),t=String(s.dealid||"")))),e.originInstance&&(a=e.originInstance),e.origin&&(i=e.origin))}return{creativeId:r,dealId:t,originData:n,origin:i,originInstance:a}}(r),i=function(e){return!c(e)||"js"===e.ext&&void 0!==e.body&&""!==e.body&&e.body.match(/<script|<SCRIPT|<html|<HTML|<\?xml/)?e.body:e.tag}(r),a=function(e){return d({netRevenue:!0,ttl:360},e)}({requestId:e.bidId,mediaType:function(e){return e.trim().toLowerCase().match(/<\?xml|<vast/)?s.d:s.b}(i),cpm:Number(t.amount),currency:t.currency,width:Number(r.width),height:Number(r.height),creativeId:n.creativeId,dealId:n.dealId,adhese:{originData:n.originData,origin:n.origin,originInstance:n.originInstance}});{var o;a.mediaType===s.d?a.vastXml=i:(o=r.impressionCounter?"<img src='"+r.impressionCounter+"' style='height:1px; width:1px; margin: -1px -1px; display:none;'/>":"",a.ad=i+o)}return a}(e.bid,e.ad)})},getUserSyncs:function(e,r,t){if(e.iframeEnabled&&0<r.length){var n=r[0].account;if(n){var i="https://user-sync.adhese.com/iframe/user_sync.html?account="+n;return t&&(i+="&gdpr="+(t.gdprApplies?1:0),i+="&consentString="+encodeURIComponent(t.consentString||"")),[{type:"iframe",url:i}]}}return[]}};function p(i,a){return a&&Object.keys(a).forEach(function(r){var e,t=a[r],n=(Array.isArray(t)?t:[t]).filter(function(e){return 0===e||e});0<n.length&&(i[r]?(e=n.filter(function(e){return i[r].indexOf(e)<0}),i[r].push.apply(i[r],e)):i[r]=n)}),i}function l(e){if(e.params.format)return e.params.location+"-"+e.params.format;var r=e.mediaTypes.banner.sizes;r.sort();var t=r.map(function(e){return e[0]+"x"+e[1]}).join("_");return 0<t.length?e.params.location+"-"+t:e.params.location}function f(e){return e[0].params.account}function m(e){if(e[0]&&e[0].userId&&e[0].userId.id5id&&e[0].userId.id5id.uid)return e[0].userId.id5id.uid}function c(e){return!e.origin||"JERLICIA"===e.origin}Object(n.registerBidder)(i)}},[193]);
pbjsChunk([270],{351:function(n,t,e){n.exports=e(352)},352:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",function(){return y}),e.d(t,"userCMP",function(){return d}),e.d(t,"consentTimeout",function(){return u}),e.d(t,"gdprScope",function(){return p}),e.d(t,"staticConsentData",function(){return g}),t.requestBidsHook=h,t.resetConsentData=function(){C=void 0,d=void 0,w=0,a.gdprDataHandler.setConsentData(null)},t.setConsentConfig=_;var l=e(0),o=e(3),a=e(9),i=e(12),r=e.n(i),s=e(353),f=e.n(s);function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var d,u,p,g,C,m="iab",v=1e4,b=!0,y={value:b,definedInConfig:!1},w=0,D=!1,k={iab:function(o,e,r){function n(n,t){l.logInfo("Received a response from CMP",n),t?!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||o(n,r):e("CMP unable to register callback function.  Please check CMP setup.",r)}var t=function(){var t={};function e(){t.getConsentData&&t.getVendorConsents&&(l.logInfo("Received all requested responses from CMP",t),o(t,r))}return{consentDataCallback:function(n){t.getConsentData=n,e()},vendorConsentsCallback:function(n){t.getVendorConsents=n,e()}}}(),u={},a=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){t="function"==typeof e.__tcfapi?(w=2,e.__tcfapi):(w=1,e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){w=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){w=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),i=a.cmpFrame,s=a.cmpFunction;if(!i)return e("CMP not found.",r);l.isFn(s)?(l.logInfo("Detected CMP API is directly accessible, calling it now..."),1===w?(s("getConsentData",null,t.consentDataCallback),s("getVendorConsents",null,t.vendorConsentsCallback)):2===w&&s("addEventListener",w,n)):1===w&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(l.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),c("getConsentData",t.consentDataCallback),c("getVendorConsents",t.vendorConsentsCallback)):(l.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===w?(d("getConsentData",i,t.consentDataCallback),d("getVendorConsents",i,t.vendorConsentsCallback)):2===w&&d("addEventListener",i,n));function c(o,a){var n,t=r.adUnits,e=1,i=1;Array.isArray(t)&&0<t.length&&(e=(n=l.getAdUnitSizes(t[0]))[0][0],i=n[0][1]),window.$sf.ext.register(e,i,function(n,t){var e;"cmpReturn"===n&&(e="getConsentData"===o?t.vendorConsentData:t.vendorConsents,a(e))}),window.$sf.ext.cmp(o)}function d(n,d,t){var l=2===w?"__tcfapi":"__cmp";window[l]=function(n,t,e){var o,a,i,r=Math.random()+"",s="".concat(l,"Call"),c=(i={command:n,parameter:t,callId:r},(a=s)in(o={})?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i,o);1!==w&&(c[s].version=w),u[r]=e,d.postMessage(c,"*")},window.addEventListener("message",function(n){var t="".concat(l,"Return"),e="string"==typeof n.data&&f()(n.data,t)?JSON.parse(n.data):n.data;{var o;e[t]&&e[t].callId&&(o=e[t],void 0!==u[o.callId]&&u[o.callId](o.returnValue,o.success))}},!1),window[l](n,void 0,t)}},static:function(n,t,e){n(g,e)}};function h(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return C?(l.logInfo("User consent information already known.  Pulling internally stored information..."),S(null,e)):r()(Object.keys(k),d)?(k[d].call(this,M,A,e),void(e.haveExited||(0===u?M(void 0,e):e.timer=setTimeout(function(n){A("CMP workflow exceeded timeout threshold.",n)}.bind(null,e),u)))):(l.logWarn("CMP framework (".concat(d,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function M(e,n){"static"===d&&2===(w=e.getConsentData?1:e.getTCData?2:0)&&(e=e.getTCData);var t=1===w?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||l.isStr(n.getConsentData.consentData)&&l.isPlainObject(n.getVendorConsents)&&1<Object.keys(n.getVendorConsents).length))}:2===w?function(){var n=e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:p,t=e&&e.tcString;return!("boolean"==typeof n&&(!0!==n||l.isStr(t)))}:null;y.definedInConfig&&2===w?l.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2"):y.definedInConfig||1!==w||l.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(b,").")),l.isFn(t)?t(e)?A("CMP returned unexpected value during lookup process.",n,e):(clearTimeout(n.timer),P(e),S(null,n)):A("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",n,e)}function A(n,t,e){clearTimeout(t.timer),y.value&&1===w&&P(void 0),S(n,t,e)}function P(n){1===w?C={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:p}:(C={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:p},n&&n.addtlConsent&&l.isStr(n.addtlConsent)&&(C.addtlConsent=n.addtlConsent)),C.apiVersion=w,a.gdprDataHandler.setConsentData(C)}function S(n,t,e){var o,a,i;!1===t.haveExited&&(t.haveExited=!0,o=t.context,a=t.args,i=t.nextFn,n?y.value&&1===w?(l.logWarn(n+" 'allowAuctionWithoutConsent' activated.",e),i.apply(o,a)):(l.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():l.logError("Error executing bidsBackHandler")):i.apply(o,a))}function _(n){(n=n.gdpr||n.usp?n.gdpr:n)&&"object"===c(n)?(l.isStr(n.cmpApi)?d=n.cmpApi:(d=m,l.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m,")."))),l.isNumber(n.timeout)?u=n.timeout:(u=v,l.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(v,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(y.value=n.allowAuctionWithoutConsent,y.definedInConfig=!0),p=!0===n.defaultGdprScope,l.logInfo("consentManagement module has been activated..."),"static"===d&&(l.isPlainObject(n.consentData)?(g=n.consentData,u=0):l.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),D||pbjs.requestBids.before(h,50),D=!0):l.logWarn("consentManagement config not defined, exiting consent manager")}o.b.getConfig("consentManagement",function(n){return _(n.consentManagement)})}},[351]);
pbjsChunk([261],{380:function(e,n,r){e.exports=r(381)},381:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"currencySupportEnabled",function(){return R}),r.d(n,"currencyRates",function(){return D}),n.setConfig=c,n.addBidResponseHook=j;var s=r(21),u=r(33),a=r(5),f=(r.n(a),r(4)),d=r(0),o=r(3),l=r(13);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g,v="https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",p=4,b=[],h={},C=!1,S=!0,m="USD",R=!1,D={},I={};function c(e){var n,r,o,c,t,i=v;"object"===y(e.rates)&&(D.conversions=e.rates,S=!(C=!0)),"object"===y(e.defaultRates)&&(g=e.defaultRates,D.conversions=g,C=!0),"string"==typeof e.adServerCurrency?(d.logInfo("enabling currency support",arguments),m=e.adServerCurrency,e.conversionRateFile&&(d.logInfo("currency using override conversionRateFile:",e.conversionRateFile),i=e.conversionRateFile),-1!==(n=i.indexOf("$$TODAY$$"))&&(r=new Date,o="".concat(r.getMonth()+1),c="".concat(r.getDate()),o.length<2&&(o="0".concat(o)),c.length<2&&(c="0".concat(c)),t="".concat(r.getFullYear()).concat(o).concat(c),i="".concat(i.substring(0,n)).concat(t).concat(i.substring(n+9,i.length))),function(e){h={},R=!0,d.logInfo("Installing addBidResponse decorator for currency module",arguments),Object(s.a)().convertCurrency=function(e,n,r){return parseFloat(e)*F(n,r)},Object(l.a)("addBidResponse").before(j,100),S&&(S=!1,Object(f.a)(e,{success:function(n){try{D=JSON.parse(n),d.logInfo("currencyRates set to "+JSON.stringify(D)),C=!0,w()}catch(e){O("Failed to parse currencyRates response: "+n)}},error:O}))}(i)):(d.logInfo("disabling currency support"),function(){d.logInfo("Uninstalling addBidResponse decorator for currency module",arguments),Object(l.a)("addBidResponse").getHooks({hook:j}).remove(),delete Object(s.a)().convertCurrency,m="USD",h={},C=R=!1,S=!0,D={},I={}}()),"object"===y(e.bidderCurrencyDefault)&&(I=e.bidderCurrencyDefault)}function O(e){g?(d.logWarn(e),d.logWarn("Currency failed loading rates, falling back to currency.defaultRates")):d.logError(e)}function j(e,n,r){if(!r)return e.call(this,n);var o,c,t,i,s=r.bidderCode||r.bidder;if(I[s]&&(o=I[s],r.currency&&o!==r.currency?d.logWarn("Currency default '".concat(s,": ").concat(o,"' ignored. adapter specified '").concat(r.currency,"'")):r.currency=o),r.currency||(d.logWarn('Currency not specified on bid.  Defaulted to "USD"'),r.currency="USD"),r.getCpmInNewCurrency=function(e){return(parseFloat(this.cpm)*F(this.currency,e)).toFixed(3)},r.currency===m)return e.call(this,n,r);b.push((c=e,t=this,i=[n,r],function(){var n=i[1];if(void 0!==n&&"currency"in n&&"cpm"in n){var e=n.currency;try{var r=F(e);1!==r&&(n.cpm=(parseFloat(n.cpm)*r).toFixed(4),n.currency=m)}catch(e){d.logWarn("Returning NO_BID, getCurrencyConversion threw error: ",e),i[1]=Object(u.a)(a.STATUS.NO_BID,{bidder:n.bidderCode||n.bidder,bidId:n.requestId})}}return c.apply(t,i)})),R&&!C||w()}function w(){for(;0<b.length;)b.shift()()}function F(e,n){var r,o=1<arguments.length&&void 0!==n?n:m,c=null,t="".concat(e,"->").concat(o);if(t in h)c=h[t],d.logMessage("Using conversionCache value "+c+" for "+t);else if(!1===R){if("USD"!==e)throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");c=1}else if(e===o)c=1;else if(e in D.conversions){if(!(o in(r=D.conversions[e])))throw new Error("Specified adServerCurrency in config '"+o+"' not found in the currency rates file");c=r[o],d.logInfo("getCurrencyConversion using direct "+e+" to "+o+" conversionRate "+c)}else if(o in D.conversions){if(!(e in(r=D.conversions[o])))throw new Error("Specified fromCurrency '"+e+"' not found in the currency rates file");c=U(1/r[e],p),d.logInfo("getCurrencyConversion using reciprocal "+e+" to "+o+" conversionRate "+c)}else{var i=Object.keys(D.conversions)[0];if(!(e in D.conversions[i]))throw new Error("Specified fromCurrency '"+e+"' not found in the currency rates file");var s=1/D.conversions[i][e];if(!(o in D.conversions[i]))throw new Error("Specified adServerCurrency in config '"+o+"' not found in the currency rates file");c=U(s*D.conversions[i][o],p);d.logInfo("getCurrencyConversion using intermediate "+e+" thru "+i+" to "+o+" conversionRate "+c)}return t in h||(d.logMessage("Adding conversionCache value "+c+" for "+t),h[t]=c),c}function U(e,n){for(var r=1,o=0;o<n;o++)r+="0";return Math.round(e*r)/r}o.b.getConfig("currency",function(e){return c(e.currency)})}},[380]);
pbjsChunk([220],{468:function(e,r,n){e.exports=n(469)},469:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"id5IdSubmodule",function(){return u});var p=n(0),f=n(4),t=n(13),l=n(20),o=n(7),i="id5id.1st",a=2592e6,c=Object(o.b)(131,"id5Id"),u={name:"id5Id",gvlid:131,decode:function(e){var r,n=0;if(e&&"string"==typeof e.ID5ID)r=e.ID5ID;else{if(!e||"string"!=typeof e.universal_uid)return;r=e.universal_uid,n=e.link_type||n}return{id5id:{uid:r,ext:{linkType:n}}}},getId:function(e,r,n){var t=e&&e.params||{};if(g(t)){var o=r&&"boolean"==typeof r.gdprApplies&&r.gdprApplies?1:0,i=o?r.consentString:"",a="https://id5-sync.com/g/v2/".concat(t.partner,".json?gdpr_consent=").concat(i,"&gdpr=").concat(o),c=Object(l.a)(),u=n&&n.signature?n.signature:"",d=n&&n.ID5ID?n.ID5ID:"",s={partner:t.partner,"1puid":d,nbPage:b(t),o:"pbjs",pd:t.pd||"",rf:c.referer,s:u,top:c.reachedTop?1:0,u:c.stack[0]||window.location.href,v:"4.11.0"};return{callback:function(n){var e={success:function(e){var r;if(e)try{r=JSON.parse(e),I(t,0)}catch(e){p.logError(e)}n(r)},error:function(e){p.logError("id5Id: ID fetch encountered an error",e),n()}};Object(f.a)(a,e,JSON.stringify(s),{method:"POST",withCredentials:!0})}}}},extendId:function(e,r){return b(e&&e.params||{}),r}};function g(e){if(e&&"number"==typeof e.partner)return 1;p.logError("User ID - ID5 submodule requires partner to be defined as a number")}function d(e){return g(e)?"".concat(i,"_").concat(e.partner,"_nb"):void 0}function I(e,r){var n;c.setCookie(d(e),r,(n=a,new Date(Date.now()+n).toUTCString()),"Lax")}function b(e){var r,n,t=(r=e,((n=c.getCookie(d(r)))?parseInt(n):0)+1);return I(e,t),t}Object(t.e)("userId",u)}},[468]);
pbjsChunk([4],{37:function(e,t,n){"use strict";t.a=function(e){var t=[];for(var n in e){var o;e.hasOwnProperty(n)&&("pubProvidedId"===n?t=t.concat(e.pubProvidedId):(o=function(e,t){var n=s[t];if(n&&e){var o={};o.source=n.source;var r=u.isFn(n.getValue)?n.getValue(e):e;if(u.isStr(r)){var a,i,c={id:r,atype:n.atype};return!u.isFn(n.getUidExt)||(a=n.getUidExt(e))&&(c.ext=a),o.uids=[c],!u.isFn(n.getEidExt)||(i=n.getEidExt(e))&&(o.ext=i),o}}return null}(e[n],n))&&t.push(o))}return t};var u=n(0),s={intentIqId:{source:"intentiq.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getEidExt:function(e){if(e.ext)return e.ext}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var t=u.pick(e,["ibaOptout","ccpaOptout"]);if(Object.keys(t).length)return t}},idl_env:{source:"liveramp.com",atype:1},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:1,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:1},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{source:"merkleinc.com",atype:1},netId:{source:"netid.de",atype:1},sharedid:{source:"sharedid.org",atype:1,getValue:function(e){return e.id},getUidExt:function(e){return e&&e.third?{third:e.third}:void 0}},IDP:{source:"zeotap.com",atype:1},haloId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1}}},828:function(e,t,n){e.exports=n(829)},829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"coreStorage",function(){return x}),n.d(t,"syncDelay",function(){return c}),n.d(t,"auctionDelay",function(){return u}),t.setSubmoduleRegistry=function(e){U=e},t.setStoredValue=V,t.setStoredConsentData=P,t.requestBidsHook=q,n.d(t,"validateGdprEnforcement",function(){return M}),t.attachIdSystem=B,t.init=G;var i,a,c,u,o=n(10),r=n.n(o),s=n(3),d=n(8),l=n.n(d),f=n(0),g=n(21),p=n(9),m=n(5),b=n.n(m),y=n(13),v=n(37),h=n(7),I="User ID",O="cookie",E="html5",S=500,D=0,j={name:"_pbjs_userid_consent_data",expires:30},x=Object(h.a)("userid"),k=[],_=!1,A=[],C=[],U=[];function V(e,t){var n=e.config.storage,o="function"==typeof e.submodule.domainOverride?e.submodule.domainOverride():null;try{var r=f.isPlainObject(t)?JSON.stringify(t):t,a=new Date(Date.now()+864e5*n.expires).toUTCString();n.type===O?(x.setCookie(n.name,r,a,"Lax",o),"number"==typeof n.refreshInSeconds&&x.setCookie("".concat(n.name,"_last"),(new Date).toUTCString(),a,"Lax",o)):n.type===E&&(x.setDataInLocalStorage("".concat(n.name,"_exp"),a),x.setDataInLocalStorage(n.name,encodeURIComponent(r)),"number"==typeof n.refreshInSeconds&&x.setDataInLocalStorage("".concat(n.name,"_last"),(new Date).toUTCString()))}catch(e){f.logError(e)}}function T(e,t){var n,o,r=1<arguments.length&&void 0!==t?t:void 0,a=r?"".concat(e.name,"_").concat(r):e.name;try{e.type===O?n=x.getCookie(a):e.type===E&&(""===(o=x.getDataFromLocalStorage("".concat(e.name,"_exp")))?n=x.getDataFromLocalStorage(a):o&&0<new Date(o).getTime()-Date.now()&&(n=decodeURIComponent(x.getDataFromLocalStorage(a)))),"string"==typeof n&&"{"===n.charAt(0)&&(n=JSON.parse(n))}catch(e){f.logError(e)}return n}function w(e){var t={consentString:"",gdprApplies:!1,apiVersion:0};return e&&(t.consentString=e.consentString,t.gdprApplies=e.gdprApplies,t.apiVersion=e.apiVersion),f.cyrb53Hash(JSON.stringify(t))}function P(e){try{var t=new Date(Date.now()+864e5*j.expires).toUTCString();x.setCookie(j.name,w(e),t,"Lax")}catch(e){f.logError(e)}}function L(e,t){var n=t?f.delayExecution(t,e.length):function(){};e.forEach(function(t){t.callback(function(e){e?(t.config.storage&&V(t,e),t.idObj=t.submodule.decode(e,t.config)):f.logInfo("".concat(I,": ").concat(t.submodule.name," - request id responded with an empty value")),n()}),t.callback=void 0}),clearTimeout(a)}function N(e){return Array.isArray(e)&&e.length?e.filter(function(e){return f.isPlainObject(e.idObj)&&Object.keys(e.idObj).length}).reduce(function(t,n){return Object.keys(n.idObj).forEach(function(e){t[e]=n.idObj[e]}),t},{}):{}}function F(e){var t,n,o,r=!1;void 0===i&&(!(i=function(e,s){var d=function(){try{return x.getCookie(j.name)}catch(e){f.logError(e)}}();P(s);var t=M(e,s),n=t.userIdModules;return t.hasValidated||function(e){if(e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies){if(!e.consentString)return;if(1===e.apiVersion&&!1===f.deepAccess(e,"vendorData.purposeConsents.1"))return;if(2===e.apiVersion&&!1===f.deepAccess(e,"vendorData.purpose.consents.1"))return}return 1}(s)?n.reduce(function(e,t){var n,o,r,a,i,c,u;return t.config.storage?(n=T(t.config.storage),a=!1,"number"==typeof t.config.storage.refreshInSeconds&&(a=(r=new Date(T(t.config.storage,"last")))&&Date.now()-r.getTime()>1e3*t.config.storage.refreshInSeconds),!n||a||(u=s,null!=(c=d)&&c!==w(u))?o=t.submodule.getId(t.config,s,n):"function"==typeof t.submodule.extendId&&(o=t.submodule.extendId(t.config,n)),f.isPlainObject(o)&&(o.id&&(V(t,o.id),n=o.id),"function"==typeof o.callback&&(t.callback=o.callback)),n&&(t.idObj=t.submodule.decode(n,t.config))):t.config.value?t.idObj=t.config.value:(i=t.submodule.getId(t.config,s,void 0),f.isPlainObject(i)&&("function"==typeof i.callback&&(t.callback=i.callback),i.id&&(t.idObj=t.submodule.decode(i.id,t.config)))),e.push(t),e},[]):(f.logWarn("".concat(I," - gdpr permission not valid for local storage or cookies, exit module")),[])}(A,p.gdprDataHandler.getConsentData())).length||(t=i.filter(function(e){return f.isFn(e.callback)})).length&&(e&&0<u?(n=!(r=!0),o=function(){n||(n=!0,e())},f.logInfo("".concat(I," - auction delayed by ").concat(u," at most to fetch ids")),a=setTimeout(o,u),L(t,o)):l.a.on(b.a.EVENTS.AUCTION_END,function e(){l.a.off(b.a.EVENTS.AUCTION_END,e),0<c?setTimeout(function(){L(t)},c):L(t)}))),e&&!r&&e()}function q(r,a){F(function(){var e,t,n,o;e=a.adUnits||Object(g.a)().adUnits,t=i,[e].some(function(e){return!Array.isArray(e)||!e.length})||(n=N(t),o=Object(v.a)(n),Object.keys(n).length&&e.forEach(function(e){e.bids.forEach(function(e){e.userId=n,e.userIdAsEids=o})})),r.call(this,a)})}function H(){return F(),N(i)}function J(){return F(),Object(v.a)(N(i))}var M=Object(y.b)("sync",function(e,t){return{userIdModules:e,hasValidated:t&&t.hasValidated}},"validateGdprEnforcement");function R(){var e,n,t,o=(e=C,n=k,Array.isArray(e)?e.reduce(function(e,t){return!t||f.isEmptyStr(t.name)||(!t.storage||f.isEmptyStr(t.storage.type)||f.isEmptyStr(t.storage.name)||-1===n.indexOf(t.storage.type))&&!f.isPlainObject(t.value)&&(t.storage||t.value)||e.push(t),e},[]):[]);o.length&&(t=U.filter(function(t){return!r()(A,function(e){return e.name===t.name})}),A=t.map(function(t){var e=r()(o,function(e){return e.name===t.name});return e?{submodule:t,config:e,callback:void 0,idObj:void 0}:null}).filter(function(e){return null!==e}),!_&&A.length&&(Object(g.a)().requestBids.before(q,40),f.logInfo("".concat(I," - usersync config updated for ").concat(A.length," submodules")),_=!0))}function B(t){r()(U,function(e){return e.name===t.name})||(U.push(t),R())}function G(e){A=[],_=!(C=[]),i=void 0,-1===(k=[x.localStorageIsEnabled()?E:null,x.cookiesAreEnabled()?O:null].filter(function(e){return null!==e})).indexOf(O)||!x.getCookie("_pbjs_id_optout")&&!x.getCookie("_pubcid_optout")?-1===k.indexOf(E)||!x.getDataFromLocalStorage("_pbjs_id_optout")&&!x.getDataFromLocalStorage("_pubcid_optout")?(e.getConfig(function(e){var t=e.userSync;t&&t.userIds&&(C=t.userIds,c=f.isNumber(t.syncDelay)?t.syncDelay:S,u=f.isNumber(t.auctionDelay)?t.auctionDelay:D,R())}),Object(g.a)().getUserIds=H,Object(g.a)().getUserIdsAsEids=J):f.logInfo("".concat(I," - opt-out localStorage found, exit module")):f.logInfo("".concat(I," - opt-out cookie found, exit module"))}G(s.b),Object(y.c)("userId",B)}},[828]);
pbjs.processQueue();

/*Adhese SDK*/
function Adhese(){return this.config={debug:!1},this.request={},this.requestExtra=[],this.ads=[],this.that=this,this.helper=new this.Helper,this.detection=new this.Detection,this}Adhese.prototype.Ad=function(e,t,n){return this.format=n&&n.format?n.format:t,this.options=e.helper.merge({write:!1},n),this.uid=t,this.safeframe=!(!n||!n.safeframe)&&n.safeframe,null!=this.options.position&&(this.uid=this.options.position+this.format),null!=this.options.containerId?this.containerId=this.options.containerId:this.containerId="",this.options.slotName=this.getSlotName(e),this.containingElementId=this.getContainingElementId(),this},Adhese.prototype.Ad.prototype.getContainingElementId=function(){return this.options.slotName&&""!=this.containerId?this.options.slotName+"_"+this.containerId:this.options.slotName?this.options.slotName:""!=this.containerId?this.uid+"_"+this.containerId:this.uid},Adhese.prototype.Ad.prototype.getSlotName=function(e){return(this.options.position&&this.options.location?this.options.location+this.options.position:this.options.position?e.config.location+this.options.position:this.options.location?this.options.location:e.config.location)+"-"+this.format},Adhese.prototype.init=function(e){if(this.config.debug=e.debug,this.helper.log("Adhese: initializing..."),this.config.jquery="undefined"!=typeof jQuery,e.account){this.config.account=e.account;var t="http:";"file:"!=window.location.protocol&&(t=window.location.protocol),!e.prefixVersion||e.prefixVersion&&1==e.prefixVersion?(this.config.host=t+"//ads-"+e.account+".adhese.com/",this.config.poolHost=t+"//pool-"+e.account+".adhese.com/",this.config.clickHost=t+"//click-"+e.account+".adhese.com/"):e.prefixVersion&&2==e.prefixVersion&&(this.config.host=t+"//ads-"+e.account+".adhese.com/",this.config.poolHost=t+"//pool-"+e.account+".adhese.com/",this.config.clickHost=t+"//ads-"+e.account+".adhese.com/"),this.config.previewHost="https://"+e.account+"-preview.adhese.org/",this.config.hostname=void 0}else if(e.host){this.config.host=e.host;var n=document.createElement("a");n.href=this.config.host,this.config.hostname=n.hostname}for(var i in e.previewHost&&(this.config.previewHost=e.previewHost),e.location&&"function"==typeof e.location?(this.config.location=e.location(),this.helper.log('options.location=="function"')):e.location&&"string"==typeof e.location?(this.config.location=e.location,this.helper.log('options.location=="string"')):this.config.location="testlocation",~window.location.href.indexOf("test_location")&&(this.config.location="_test_",this.adhese_debug=!0),void 0===e.safeframe||0==e.safeframe?this.config.safeframe=!1:(this.config.safeframe=e.safeframe,this.initSafeFrame(e.safeframeContainerID)),this.config.logSafeframeMessages=e.safeframeMsg||this.logSafeframeMessages,this.registerRequestParameter("rn",Math.round(1e4*Math.random())),"function"==typeof Fingerprint&&this.registerRequestParameter("fp",new Fingerprint({canvas:!0}).get()),this.registerRequestParameter("pr",window.devicePixelRatio||1),void 0!==e.referrer&&1!=e.referrer||this.registerRequestParameter("re",this.helper.base64.urlencode(document.referrer.substr(0,200))),void 0!==e.url&&1!=e.url||this.registerRequestParameter("ur",this.helper.base64.urlencode(window.location.href)),this.userAgent=this.helper.getUserAgent(),this.userAgent)this.registerRequestParameter("br",this.userAgent[i]);"function"==typeof this.Detection&&(this.registerRequestParameter("dt",this.detection.device()),this.registerRequestParameter("br",this.detection.device())),this.config.previewExclusive=!1,e.previewExclusive&&(this.config.previewExclusive=e.previewExclusive),this.checkPreview(),this.checkAdheseInfo(),this.checkVisible&&(addEventListener("load",this.checkVisible.bind(this),!1),addEventListener("scroll",this.checkVisible.bind(this),!1)),this.helper.log("Adhese: initialized with config:",JSON.stringify(this.config))},Adhese.prototype.initSafeFrame=function(e){this.safeframe||(this.safeframe=e?new this.SafeFrame(this.config.poolHost,e,this.config.logSafeframeMessages):new this.SafeFrame(this.config.poolHost,this.config.logSafeframeMessages))},Adhese.prototype.registerRequestParameter=function(e,t){var n=this.request[e];n||(n=new Array),n.push(t),this.request[e]=n},Adhese.prototype.removeRequestParameter=function(e,t){var n=this.request[e];if(n){var i=n.indexOf(t);-1!=i&&n.splice(i,1)}},Adhese.prototype.addRequestString=function(e){this.requestExtra.push(e)},Adhese.prototype.tag=function(e,t){this.helper.log(e,JSON.stringify(t)),t&&t.safeframe&&(t.safeframeContainerID?this.initSafeFrame(t.safeframeContainerID):this.initSafeFrame());var n=new this.Ad(this,e,t);if(this.previewActive){var i=this.previewFormats;for(var o in i)if(o==e){var r=i[e],s=new this.Ad(this,e,t);s.adType=e,s.ext="js";var a="";s.options.write||(a="json/"),s.swfSrc=this.config.previewHost+"/creatives/preview/"+a+"tag.do?id="+r.creative+"&slotId="+r.slot,s.width=r.width,s.height=r.height,n=s,"complete"===document.readyState?this.showPreviewSign():addEventListener("load",this.showPreviewSign.bind(this))}}return this.ads.push([e,n]),n.options.write&&(0==this.config.previewExclusive||1==this.config.previewExclusive&&n.swfSrc)&&this.write(n),n},Adhese.prototype.write=function(e){if(this.config.safeframe||e.safeframe){var t="";t=this.previewActive&&e.swfSrc?e.swfSrc:this.getRequestUri(e,{type:"json"}),this.helper.log("Adhese.write: request uri: "+t+", safeframe enabled");var n=this.safeframe.containerID;AdheseAjax.request({url:t,method:"get",json:!0}).done((function(e){adhese.safeframe.addPositions(e);for(var t=e.length-1;t>=0;t--)adhese.safeframe.render(e[t][n])}))}else{t="";t=this.previewActive&&e.swfSrc?e.swfSrc:this.getRequestUri(e,{type:"js"}),this.helper.log("Adhese.write: request uri: "+t),document.write('<script type="text/javascript" src="'+t+'"><\/script>')}},Adhese.prototype.track=function(e){this.helper.addTrackingPixel(e)},Adhese.prototype.trackByUrl=function(e){this.helper.addTrackingPixel(e)},Adhese.prototype.renderAndTrackAd=function(e){this.safeframe.render(e.containingElementId),AdheseAjax.request({url:e.tracker,method:"get"})},Adhese.prototype.getMultipleRequestUri=function(e,t){var n=this.config.host;switch(t||(t={type:"js"}),t.type){case"json":n+="json/";break;case"jsonp":t.callbackFunctionName||(t.callbackFunctionName="callback"),n+="jsonp/"+t.callbackFunctionName+"/";break;default:n+="ad/"}for(var i=e.length-1;i>=0;i--){var o=e[i];(!o.swfSrc||o.swfSrc&&-1==o.swfSrc.indexOf("preview"))&&(n+="sl"+this.getSlotName(o)+"/")}for(var r in this.request){for(var s=r,a=0;a<this.request[r].length;a++)s+=this.request[r][a]+(this.request[r].length-1>a?";":"");n+=s+"/"}for(i=0,r=this.requestExtra;i<r.length;i++)r[i]&&(n+=r[i]+"/");return n+="?t="+(new Date).getTime()},Adhese.prototype.getSlotName=function(e){return~window.location.href.indexOf("adhese_debug")?u="_test_":e.options.position&&e.options.location?u=e.options.location+e.options.position:e.options.position?u=this.config.location+e.options.position:e.options.location?u=e.options.location:u=this.config.location,u+"-"+e.format},Adhese.prototype.getRequestUri=function(e,t){if(t.preview&&1==t.preview)return e.swfSrc;var n=[e];return this.getMultipleRequestUri(n,t)},Adhese.prototype.syncUser=function(e,t){"rubicon"==e?this.rubiconUserSync(t):"improvedigital"==e?this.improvedigitalUserSync(t):"pubmatic"==e?this.pubmaticUserSync(t):"spotx"==e?this.spotxUserSync(t):"appnexus"==e?this.appnexusUserSync(t):"smartadserver"==e?this.smartadserverUserSync(t):"multi"==e&&this.multiUserSync(t)},Adhese.prototype.getSfPreview=function(e){for(var t=this,n=e.length-1;n>=0;n--){var i=e[n];i.swfSrc&&i.swfSrc.indexOf("tag.do")>-1&&AdheseAjax.request({url:t.getRequestUri(i,{type:"json",preview:!0}),method:"get",json:!0}).done((function(e){t.safeframe.addPositions(e);for(var n=e.length-1;n>=0;n--)t.safeframe.render(e[n].adType)}))}},Adhese.prototype.getSfAds=function(e){var t=this;AdheseAjax.request({url:t.getMultipleRequestUri(e,{type:"json"}),method:"get",json:!0}).done((function(e){t.safeframe.addPositions(e);for(var n=e.length-1;n>=0;n--)t.safeframe.render(e[n].adType)})),t.getSfPreview(e)},Adhese.prototype.registerResponse=function(e,t){adhese.responses||(adhese.responses=new Object),adhese.responses[e]=t},Adhese.prototype.logSafeframeMessages=function(e,t,n){this.helper.log(e,t,n)},Adhese.prototype.Helper=function(){this.oslist=[{string:navigator.userAgent,subString:"Windows Phone",identity:"WindowsPhone"},{string:navigator.userAgent,subString:"Windows NT 10.0",identity:"Windows10"},{string:navigator.userAgent,subString:"Windows NT 6.3",identity:"Windows8.1"},{string:navigator.userAgent,subString:"Windows NT 6.2",identity:"Windows8"},{string:navigator.userAgent,subString:"Windows NT 6.1",identity:"Windows7"},{string:navigator.userAgent,subString:"Windows NT 6.0",identity:"WindowsVista"},{string:navigator.userAgent,subString:"Windows NT 5.1",identity:"WindowsXP"},{string:navigator.userAgent,subString:"Windows 98",identity:"Windows98"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.userAgent,subString:"iPhone",identity:"iOS"},{string:navigator.userAgent,subString:"iPad",identity:"iOS"},{string:navigator.platform,subString:"Mac",identity:"OSX"},{string:navigator.platform,subString:"Linux",identity:"Linux"}],this.browserlist=[{string:navigator.userAgent,subString:"Trident/7",identity:"Explorer",versionSearch:"rv"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"}]},Adhese.prototype.Helper.prototype.log=function(){this.logObjs=this.logObjs||{},this.logs=this.logs||[];for(var e="",t=(new Date).getTime(),n=0,i=arguments;n<i.length;n++)i[n]&&(e+=i[n]+" ");this.logObjs[t]=logObj={msg:e},this.logs.push([t,arguments]),window.location.search.match("debug")&&console.log(t,arguments)},Adhese.prototype.Helper.prototype.debug=function(){for(var e in this.logs){var t=this.logs[e];console.log(t[0],t[1])}},Adhese.prototype.Helper.prototype.debugTable=function(){"function"==typeof console.table&&console.table(this.logObjs)},Adhese.prototype.Helper.prototype.getMetaTagContent=function(e,t){},Adhese.prototype.Helper.prototype.getQueryStringParameter=function(e){var t=RegExp("[?&]"+key+"=([^&]*)").exec(window.location.search);return t?decodeURIComponent(t[1].replace(/\+/g," ")):default_},Adhese.prototype.Helper.prototype.addTrackingPixel=function(e){var t=document.createElement("img");t.src=e,t.style.height="1px",t.style.width="1px",t.style.margin="-1px",t.style.border="0",t.style.position="absolute",t.style.top="0",document.body.appendChild(t)},Adhese.prototype.Helper.prototype.getScreenProperties=function(){var e=new Object;return e.width=window.innerWidth?window.innerWidth:document.body.offsetWidth,e.height=window.innerHeight?window.innerHeight:document.body.offsetHeight,e},Adhese.prototype.Helper.prototype.addEvent=function(e,t,n,i){void 0===i&&(i=window),i.addEventListener?i.addEventListener(e,(function(){t(n)}),!1):i.attachEvent&&i.attachEvent("on"+e,(function(){t(n)}))},Adhese.prototype.Helper.prototype.removeEvent=function(e,t,n){window.removeEventListener?window.removeEventListener(e,t,!1):window.detachEvent&&window.detachEvent("on"+e,t)},Adhese.prototype.Helper.prototype.getAbsoluteOffset=function(e){var t={top:0,left:0};if(void 0!==e)for(t.left=0,t.top=0;e;e=e.offsetParent)t.left+=e.offsetLeft,t.top+=e.offsetTop;return t},Adhese.prototype.Helper.prototype.getUserAgent=function(){var e={};return e.browser=this.searchString(this.browserlist)||"unknownBrowser",e.browserVersion=e.browser+this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"unknownVersion",e.os=this.searchString(this.oslist)||"unknownOS",e},Adhese.prototype.Helper.prototype.searchString=function(e){for(var t=0;t<e.length;t++){var n=e[t].string,i=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,n){if(-1!=n.indexOf(e[t].subString))return e[t].identity}else if(i)return e[t].identity}},Adhese.prototype.Helper.prototype.searchVersion=function(e){var t=e.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(e.substring(t+this.versionSearchString.length+1))},Adhese.prototype.Helper.prototype.merge=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},Adhese.prototype.Helper.prototype.stringToHex=function(e,t){try{t=unescape(encodeURIComponent(e)).split("").map((function(e){return e.charCodeAt(0).toString(16)})).join("")}catch(n){t=e,console.log("invalid text input: ",n,e)}return t},Adhese.prototype.Helper.prototype.hexToString=function(e,t){try{t=decodeURIComponent(e.replace(/(..)/g,"%$1"))}catch(n){t=e,console.log("invalid hex input: ",n,e)}return t},Adhese.prototype.Helper.prototype.base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){if("function"==typeof btoab)return btoa(e);var t,n,i,o,r,s,a,c="",l=0;for(e=this._utf8_encode(e);l<e.length;)o=(t=e.charCodeAt(l++))>>2,r=(3&t)<<4|(n=e.charCodeAt(l++))>>4,s=(15&n)<<2|(i=e.charCodeAt(l++))>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),c=c+this._keyStr.charAt(o)+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(a);return c},urlencode:function(e){if("function"==typeof btoa)return btoa(e).replace(/\+/g,"-").replace(/\//g,"_");var t,n,i,o,r,s,a,c="",l=0;for(e=this._utf8_encode(e);l<e.length;)o=(t=e.charCodeAt(l++))>>2,r=(3&t)<<4|(n=e.charCodeAt(l++))>>4,s=(15&n)<<2|(i=e.charCodeAt(l++))>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),c=c+this._keyStr.charAt(o)+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(a);return c.replace(/\+/g,"-").replace(/\//g,"_")},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t+=String.fromCharCode(i):i>127&&i<2048?(t+=String.fromCharCode(i>>6|192),t+=String.fromCharCode(63&i|128)):(t+=String.fromCharCode(i>>12|224),t+=String.fromCharCode(i>>6&63|128),t+=String.fromCharCode(63&i|128))}return t}},Adhese.prototype.Helper.prototype.createCookie=function(e,t,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3-60*o.getTimezoneOffset()*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+t+i+"; path=/; SameSite=None; Secure"},Adhese.prototype.Helper.prototype.readCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null},Adhese.prototype.Helper.prototype.eraseCookie=function(e){this.createCookie(e,"",-1)},Adhese.prototype.Helper.prototype.eatsCookie=function(){return this.createCookie("adheseTestCookie","",1),null!=this.readCookie("adheseTestCookie")&&(this.eraseCookie("adheseTestCookie"),!0)},Adhese.prototype.Helper.prototype.getMetaContent=function(e){for(var t=document.getElementsByTagName("META"),n=[],i=t.length-1;i>=0;i--){var o=t[i];o&&(o.name===e||o.getAttribute("property")===e)&&o.content&&n.push(o.content)}return n},Adhese.prototype.Helper.prototype.adhElementInViewport=function(e){return this.adhElementInViewportWithPercentage(e,1)},Adhese.prototype.Helper.prototype.adhElementInViewportWithPercentage=function(e,t,n,i){if("string"==typeof e&&(e=document.getElementById(e)),e){var o=e.getBoundingClientRect(),r=o.top+n*i,s=o.left+t*i;return o.top>=0&&o.left>=0&&r<=(window.innerHeight||document.documentElement.clientHeight)&&s<=(window.innerWidth||document.documentElement.clientWidth)}return!1},Adhese.prototype.checkPreview=function(){if(this.previewFormats={},!this.config.previewHost)return!1;if(-1!=window.location.search.indexOf("adhesePreview")){this.helper.log("checking for preview");var e=window.location.search.substring(1),t=e.match(/adhesePreviewCreativeId/g).length,n=e.split("&"),o="",r="",s="",a="",c=0,l=0,d=[];-1!=e.indexOf("adhesePreviewExclusive=true")&&(this.config.previewExclusive=!0),-1!=e.indexOf("adhesePreviewExclusive=false")&&(this.config.previewExclusive=!1);for(var h=0;h<n.length;h++)if("adhesePreviewCreativeId"==n[h].split("=")[0]&&(o=unescape(n[h].split("=")[1])),"adhesePreviewSlotId"==n[h].split("=")[0]&&(r=n[h].split("=")[1]),"adhesePreviewCreativeTemplate"==n[h].split("=")[0]&&(s=n[h].split("=")[1],d.push(s)),"adhesePreviewTemplateFile"==n[h].split("=")[0]&&(a=n[h].split("=")[1]),"adhesePreviewWidth"==n[h].split("=")[0]&&(c=n[h].split("=")[1]),"adhesePreviewHeight"==n[h].split("=")[0]&&(l=n[h].split("=")[1]),"adhesePreviewCreativeKey"==n[h].split("=")[0]&&t>1){if(""!=r&&""!=d[0])for(i in d){s=d[i];this.previewFormats[s]={slot:r,creative:o,templateFile:a,width:c,height:l}}d=[]}if(1==t)for(var u=0;u<d.length;u++)this.previewFormats[d[u]]={slot:r,creative:o,templateFile:a,width:c,height:l};o=[];for(k in this.previewFormats)o.push(k+","+this.previewFormats[k].creative+","+this.previewFormats[k].slot+","+this.previewFormats[k].template+","+this.previewFormats[k].width+","+this.previewFormats[k].height);this.helper.createCookie("adhese_preview",o.join("|"),0),this.previewActive=!0}else if(this.helper.readCookie("adhese_preview")){var f=this.helper.readCookie("adhese_preview").split("|");for(h=0;h<f.length;h++){o=f[h].split(",");this.previewFormats[o[0]]={creative:o[1],slot:o[2],template:o[3],width:o[4],height:o[5]}}this.previewActive=!0}},Adhese.prototype.showPreviewSign=function(){if(!document.getElementById("adhPreviewMessage")){var e=document.createElement("DIV");e.innerHTML='<div id="adhPreviewMessage" style="cursor:pointer;font-family:Helvetica,Verdana; font-size:12px; text-align:center; background-color: #000000; color: #FFFFFF; position:fixed; top:10px;left:10px;padding:10px;z-index:9999;width: 100px;"><b>Adhese preview active.</br> Click to disable</div>',document.body.appendChild(e),this.helper.addEvent("click",this.closePreviewSign.bind(this),e,e)}},Adhese.prototype.closePreviewSign=function(){this.helper.eraseCookie("adhese_preview"),-1!=location.search.indexOf("adhesePreviewCreativeId")?location.href=location.href.split("?")[0]:location.reload()},Adhese.prototype.checkAdheseInfo=function(){if(-1==window.location.search.indexOf("adheseInfo=true"))return!1;addEventListener("load",this.showInfoSign.bind(this))},Adhese.prototype.showInfoSign=function(){var e=document.createElement("DIV"),t='<div id="adhInfoMessage" style="cursor:pointer;font-family:Helvetica,Verdana; font-size:12px; text-align:center; background-color: lightgrey; color: black; position:fixed; top:10px;right:10px;padding:10px;z-index:9999;width:auto; max-width:300px; opacity:0.9; border:2px #9e9e9e solid">';for(x in t+="<b>Adhese Request Info</b></br>- Click to disable -</br>",t+="</br><b>Location code:</b></br>",t+=this.config.location+"</br>",t+="</br><b>Format code(s):</b></br>",adhese.ads)t+=adhese.ads[x][0]+"</br>";for(x in t+="</br><b>Targeting:</b></br>",adhese.request)"ur"!=x&&"rn"!=x&&"re"!=x&&"pr"!=x&&"fp"!=x&&(t+="<b>"+x+": </b>"+adhese.request[x]+"</br>");t+="</div>",e.innerHTML=t,document.body.appendChild(e),this.helper.addEvent("click",this.closeInfoSign.bind(this),e,e)},Adhese.prototype.closeInfoSign=function(){document.getElementById("adhInfoMessage").style.display="none"},Adhese.prototype.Detection=function(){return this},Adhese.prototype.Detection.prototype.device=function(e){return(e=e||window.navigator.userAgent).match(/webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|SymbianOS/i)&&!e.match(/Android/i)||e.match(/Mobile/i)&&e.match(/Android/i)?this.deviceType="phone":e.match(/iPad|Android|Tablet|Silk/i)?this.deviceType="tablet":this.deviceType="desktop",this.deviceType};var AdheseAjax={request:function(e){"string"==typeof e&&(e={url:e}),e.url=e.url||"",e.method=e.method||"get",e.data=e.data||{},void 0===e.encodeData&&(e.encodeData=!0);var t=function(e,t){var n,i=[];for(var o in e)i.push(o+"="+encodeURIComponent(e[o]));return""!=(n=i.join("&"))?t?t.indexOf("?")<0?"?"+n:"&"+n:n:""};return{host:{},process:function(e){var n=this;if(this.xhr=null,document.all&&!window.atob)try{this.xhr=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{this.xhr=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){this.xhr=!1}}else try{this.xhr=new XMLHttpRequest}catch(e){this.xhr=!1}return this.xhr&&("withCredentials"in this.xhr&&(this.xhr.withCredentials=!0),this.xhr.onreadystatechange=function(){if(4==n.xhr.readyState&&200==n.xhr.status){var t=n.xhr.responseText;if(!0===e.json&&"undefined"!=typeof JSON)if(t)try{t=JSON.parse(t),n.doneCallback&&n.doneCallback.apply(n.host,[t,n.xhr])}catch(e){console.error("Ad response parsing error: \n",e),n.errorCallback&&n.errorCallback.apply(n.host,["Adhese Ajax: "+e])}else n.errorCallback&&n.errorCallback.apply(n.host,["Adhese Ajax: Response is empty string"])}else 4==n.xhr.readyState&&n.failCallback&&n.failCallback.apply(n.host,[n.xhr]);n.alwaysCallback&&n.alwaysCallback.apply(n.host,[n.xhr])}),"get"==e.method?this.xhr.open("GET",e.url+t(e.data,e.url),!0):(this.xhr.open(e.method,e.url,!0),this.setHeaders({"X-Requested-With":"XMLHttpRequest","Content-type":"application/x-www-form-urlencoded"})),e.headers&&"object"==typeof e.headers&&this.setHeaders(e.headers),setTimeout((function(){var i;"get"==e.method?n.xhr.send():(i=e.encodeData?t(e.data):e.data,n.xhr.send(i))}),20),this},done:function(e){return this.doneCallback=e,this},fail:function(e){return this.failCallback=e,this},always:function(e){return this.alwaysCallback=e,this},error:function(e){return this.errorCallback=e,this},setHeaders:function(e){for(var t in e)this.xhr&&this.xhr.setRequestHeader(t,e[t])}}.process(e)}};if(Adhese.prototype.Events=function(){},Adhese.prototype.Events.prototype.add=function(e,t,n){n||(n=window),window.addEventListener?n.addEventListener(e,t,!1):window.attachEvent&&n.attachEvent("on"+e,t)},Adhese.prototype.Events.prototype.remove=function(e,t,n){n||(n=window),window.removeEventListener?n.removeEventListener(e,t,!1):window.attachEvent&&n.detachEvent("on"+e,t)},Adhese.prototype.SafeFrame=function(e,t,n){return this.poolHost=e,this.containerID="adType",t&&(this.containerID=t),this.adhesePositions=new Array,this.ads=[],this.logMessages=n||"",this.init()},Adhese.prototype.SafeFrame.prototype.init=function(){if(this.adhesePositionConfig=new Object,this.ads&&this.ads.length>0)for(index in this.ads){var e=this.ads[index];this.adhesePositionConfig[e[this.containerID]]={w:e.width,h:e.height,size:e.width+"x"+e.height,dest:e[this.containerID],tgt:"_blank"}}new $sf.host.Config({auto:!1,debug:!0,renderFile:this.poolHost+"sf/r.html",positions:this.adhesePositionConfig,onBeforePosMsg:this.logMessages});return this},Adhese.prototype.SafeFrame.prototype.addPositions=function(e){for(var t in e){var n=e[t];n.sfHtml=n.tag,"js"==n.ext&&(n.sfHtml=n.body);var i="_blank";n.sfHtml&&n.sfHtml.indexOf("TARGET='_self'")>0&&(i="_self");var o=new $sf.host.PosConfig({id:n[this.containerID],w:n.width,h:n.height,size:n.width+"x"+n.height,dest:n[this.containerID],tgt:i});this.adhesePositions.push(new $sf.host.Position({id:n[this.containerID],html:n.sfHtml,src:n.sfSrc,conf:o}))}},Adhese.prototype.SafeFrame.prototype.render=function(e){for(var t in this.adhesePositions)this.adhesePositions[t].id==e&&$sf.host.render(this.adhesePositions[t])},Adhese.prototype.SafeFrame.prototype.addPositions=function(e){for(var t in e){var n=e[t];if(n.tag&&n.tag.trim().toLowerCase().match(/<\?xml|<vast/)||n.body&&n.body.trim().toLowerCase().match(/<\?xml|<vast/))this.renderOustreamAd(n);else{n.sfHtml=n.tag,"js"==n.ext&&(n.sfHtml=n.body);var i="_blank";n.sfHtml&&n.sfHtml.indexOf("TARGET='_self'")>0&&(i="_self");var o=new $sf.host.PosConfig({id:n[this.containerID],w:n.width,h:n.height,size:n.width+"x"+n.height,dest:n[this.containerID],tgt:i});this.adhesePositions.push(new $sf.host.Position({id:n[this.containerID],html:n.sfHtml,src:n.sfSrc,conf:o}))}}},Adhese.prototype.SafeFrame.prototype.renderOustreamAd=function(e){var t=document.createElement("script");t.type="text/javascript",t.src="https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",document.getElementsByTagName("head")[0].appendChild(t);var n={playerTechnology:["html5","flash"],audioOnMouseover:!0,playVideoVisibleThreshold:50,showMute:!0,showVolume:!0,nonViewableBehavior:"pause",showProgressBar:!0,autoInitialSize:!0,allowFullscreen:!0,disableTopBar:!1,disableCollapse:!0,skippable:{enabled:!1},adText:"Advertentie",content:this.getAdMarkup(e),frameworks:["vpaid_1_0","vpaid_2_0"],playback_methods:["auto_play_sound_off"],player_height:e.height,player_width:e.width},i=function(t){try{window.ANOutstreamVideo.renderAd({targetId:e.containingElementId,rendererOptions:n})}catch(e){setTimeout((function(){++t<20?(~window.location.href.indexOf("adhese_debug")&&console.log("Adhese - rendering outstream ad, attempt "+t),i(t)):~window.location.href.indexOf("adhese_debug")&&console.error("Adhese - failed to render oustream ad")}),200)}};i(0)},Adhese.prototype.SafeFrame.prototype.getAdMarkup=function(e){return!this.isAdheseAd(e)||"js"===e.ext&&void 0!==e.body&&""!==e.body&&e.body.match(/<script|<SCRIPT|<html|<HTML|<\?xml/)?e.body:e.tag},Adhese.prototype.SafeFrame.prototype.isAdheseAd=function(e){return!e.origin||"JERLICIA"===e.origin||"DALE"===e.origin},window.$sf)try{$sf.ver="1-1-0",$sf.specVersion="1.1"}catch(e){}else window.$sf={ver:"1-1-0",specVersion:"1.1"};!function(e){var t,n,i,o,r,s="?",a="object",c="function",l="replace",d="length",h=e&&e.Number,u=e&&e.Math,f=e&&e.document,p=e&&e.navigator,g=p&&p.userAgent||"",m="toLowerCase",v="getAttribute",y="setAttribute",w="removeAttribute",b="getElementsByTagName",x=e&&e.String,A=x.fromCharCode(92),k=A+A,S=x.fromCharCode(34),_=A+S,T=x.fromCharCode(43),C="scr"+S+T+S+"ipt",E="CollectGarbage",P="",I=H,H=!1,O={preventDefault:0,stopImmediatePropagation:0,stopPropagation:0,preventBubble:0},F=h&&h.MAX_VALUE,M=-1*F,j=e&&e.escape,N=e&&e.unescape,L=!(!window.ActiveXObject&&"ActiveXObject"in window)&&e&&"ActiveXObject"in e,R=0,D=H,W=0,q=null,V=0,$=null,z=0,B=0,U=0,X={},G="",J="",Y=null,K=null;!function(){var o;function r(e){var t=typeof e;return"string"==t?e:"number"!=t||e?t==a&&e&&e.join?e.join(""):!1===e?"false":!0===e?"true":e?x(e):"":"0"}function f(e,t,n,i){if("number"!=typeof e)try{e=e?parseFloat(e):h.NaN}catch(t){e=h.NaN}return null==i&&(i=F),null==n&&(n=M),(isNaN(e)||e<n||e>i)&&null!=t?t:e}function p(e){try{e=e&&typeof e==c&&e.toString()&&new e.constructor?e:null}catch(t){e=null}return!!e}function g(e,t,n,i,o){var r,s,l;if(!t||!e)return e;for(s in t)l=typeof(r=t[s]),n&&!t.hasOwnProperty(s)||o&&s in e||i&&l==c||(l==a&&r&&(r=r.slice?g([],r):g({},r)),e[s]=r);return e}function m(){return(new Date).getTime()}function v(){return u.round(100*u.random())}function y(e){var t=r(e);return t&&t[l](/^\s\s*/,"")[l](/\s\s*$/,"")}function w(t,n,i,o){var s,c,l=i&&typeof i==a?i:e,h=0,u=null;if(t)if(t=r(t),n=n&&typeof n==a?n:null,t.indexOf("."))for(s=t.split(".");c=s[h++];)c=y(c),u=h==s[d]?l[c]&&n?l[c]=g(l[c],n,H,null,o):o&&c in l?l[c]:l[c]=l[c]||n||{}:o&&c in l?l[c]:l[c]=l[c]||{},l=l[c];else u=l[t]&&n?l[t]=g(l[t],n,H,null,o):l[t]=l[t]||n||{};return u}function b(){return k}function A(){return _}function T(){return"\\r"}function E(){return"\\n"}function P(e,t,n){return r(["<",t,C,n,">"])}function I(e,t,n,i,o){var c,l,h,u,f,p,m,v,y,w,b,x,A,k,S=this,_="indexOf",T="substring",C=H;if(!(S instanceof I))return new I(e,t,n,i,o);if(!arguments[d])return S;if(e&&typeof e==a)return g(new I("",t,n,i,o),e);if(e=r(e),t=r(t)||"&",n=r(n)||"=",!e)return S;if(t!=s&&n!=s&&e.charAt(0)==s&&(e=e[T](1)),c=e[_](s),l=e[_](n),-1!=c&&-1!=l&&c>l)u=j(e[T](l+1)),f=e.substr(0,l+1),e=f+u;else if(-1!=c)return new I(e=e[T](c+1),t,n,i);for(e.charAt(0)==t&&(e=e[T](1)),b=(m=e.split(t))[d],c=0;b--;)if(u=m[c++],w=H,C=H,u){if((A=(v=u.split(n))[d])>2){if(y=N(v[0]),v.shift(),o)if(f=y+n,l=e[_](f),A=f[d],p=e[T](l+A),k=(f=t+t)[d],-1!=(h=p[_](f))){for(p in x=new I(p=e.substr(l+A,h+k),t,n,i,o),p="",A=0,x)A++;A>0&&(c+=A-1),u=x}else u=N(v.join(n));else u=N(v.join(n));C=!0}else 2==A&&(y=N(v[0]),u=N(v[1]),C=!0);C&&(i&&y in S||(S[y]=u,w=!0),o&&w&&y&&u&&typeof u!=a&&(u[_](t)>=0||u[_](n)>=0)&&(S[y]=new I(u,t,n,i,o)))}}(o=I.prototype).toString=o.valueOf=function e(t,n,i,o){var s,l,d,h=[];for(s in t=t||"&",n=n||"=",this)l=typeof(d=this[s]),d&&l==c||(d&&l==a&&(d=e.apply(d,[t,n,i,o])),i&&(s=j(s)),o||(d=j(d)),h.push(s,n,d,t));return r(h)},i=w("$sf.lib.lang",{ParamHash:I,cstr:r,cnum:f,cbool:function(e){return!(!e||"0"==e||"false"==e||"no"==e||"undefined"==e||"null"==e)||H},noop:function(){},trim:y,callable:p,guid:function(e){return r([e||"","_",m(),"_",v(),"_",R++])},mix:g,time:m,rand:v,def:w,ns:function(t,n){var i,o,s,a=/\[(('|")?)((\s|.)*?)(('|")?)\]/gm,c=/\./gm,d=0,h="",u=!0;if(i=n=n||e,t)if(t=r(t))if(o=(t=y(t)).match(/(\[(.{1,})\])|(\.\w+)/gm))for(h=t[l](/(\[.*)|(\..*)/g,""),o.unshift(h);s=o[d++];){if(!i[s=s[l](a,"$3")[l](c,"")]){u=H;break}i=i[s]}else i=i[s=t];else u=H;else u=H;return u&&i||H},jssafe_html:function(e){var t=r(e);return t&&(t=(t=(t=(t=(t=(t=(t=t.replace(/(<noscript[^>]*>)(\s*?|.*?)(<\/noscript>)/gim,"")).replace(/\\/g,b)).replace(/\"/g,A)).replace(/\n/g,E)).replace(/\r/g,T)).replace(/<(\/)*script([^>]*)>/gi,P)).replace(/\t/gi," "),t=r([S,t,S]),t=S+t+S),t},isArray:function(e){return null!=e&&("string"!=typeof e&&(null!=e.length&&e.constructor==Array))}}),w("$sf.env",{isIE:L}),t=r,f,n=p}(),function(){function e(e){var t=0;return parseFloat(e.replace(/\./g,(function(){return 1==t++?"":"."})))}function t(e,t,n){var i=e&&e.match(t);return null==n?i:i&&i[n]||null}function n(e,t){return e.test(t)}function o(i){var o,r={},s=new Date;if(!i&&K)return K;r.ie=r.opera=r.gecko=r.webkit=r.safari=r.chrome=r.air=r.ipod=r.ipad=r.iphone=r.android=r.webos=r.silk=r.nodejs=r.phantomjs=0,r.mobile=r.ios=r.os=null,r.accel=!1,r.caja=p&&p.cajaVersion,r.cks=H,(i=i||g||"")&&(n(/windows|win32/i,i)?r.os="windows":n(/macintosh|mac_powerpc/i,i)?r.os="macintosh":n(/android/i,i)?r.os="android":n(/symbos/i,i)?r.os="symbos":n(/linux/i,i)?r.os="linux":n(/rhino/i,i)&&(r.os="rhino"),n(/KHTML/,i)&&(r.webkit=1),n(/IEMobile|XBLWP7/,i)&&(r.mobile="windows"),n(/Fennec/,i)&&(r.mobile="gecko"),(o=t(i,/AppleWebKit\/([^\s]*)/,1))&&(r.webkit=e(o),r.safari=r.webkit,n(/PhantomJS/,i)&&(o=t(i,/PhantomJS\/([^\s]*)/,1))&&(r.phantomjs=e(o)),n(/ Mobile\//,i)||n(/iPad|iPod|iPhone/,i)?(r.mobile="Apple",o=(o=t(i,/OS ([^\s]*)/,1))&&e(o.replace("_",".")),r.ios=o,r.ipad=r.ipod=r.iphone=0,(o=t(i,/iPad|iPod|iPhone/,0))&&(r[o[m]()]=r.ios)):((o=t(i,/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/,0))&&(r.mobile=o),n(/webOS/,i)&&(r.mobile="WebOS",(o=t(i,/webOS\/([^\s]*);/,1))&&(r.webos=e(o))),n(/ Android/,i)&&(r.mobile="Android",(o=t(i,/Android ([^\s]*);/,1))&&(r.android=e(o))),n(/Silk/,i)&&((o=t(i,/Silk\/([^\s]*)\)/,1))&&(r.silk=e(o)),r.android||(r.android=2.34,r.os="Android"),n(/Accelerated=true/,i)&&(r.accel=!0))),(o=i.match(/(Chrome|CrMo)\/([^\s]*)/))&&o[1]&&o[2]?(r.chrome=e(o[2]),r.safari=0,"CrMo"===o[1]&&(r.mobile="chrome")):(o=t(i,/AdobeAIR\/([^\s]*)/))&&(r.air=o[0])),r.webkit||((o=t(i,/Opera[\s\/]([^\s]*)/,1))?(r.opera=e(o),(o=t(i,/Opera Mini[^;]*/,0))&&(r.mobile=o)):(o=t(i,/MSIE\s([^;]*)/,1))?r.ie=e(o):(o=t(i,/Gecko\/([^\s]*)/))&&(r.gecko=1,(o=t(i,/rv:([^\s\)]*)/,1))&&(r.gecko=e(o)))));try{s.setTime(s.getTime()+1e3),f.cookie=cstr(["sf_ck_tst=test; expires=",s.toGMTString(),"; path=/"]),-1!=f.cookie.indexOf("sf_ck_tst")&&(r.cks=!0)}catch(e){r.cks=H}try{typeof process==a&&process.versions&&process.versions.node&&(r.os=process.platform,r.nodejs=numberify(process.versions.node))}catch(e){r.nodejs=0}return r}(K=o()).parse=o,i.def("$sf.env.ua",K,null,!0)}(),function(){function s(){B&&(clearTimeout(B),B=0)}function a(t){R(e,"load",a),R(e,"DOMContentLoaded",a),q=!0}function c(){var e,t,n,i;if(s(),z>=300&&($=null,q=!0),null===q){try{n=(t=(e=f&&f.body)&&S("*",e))&&t[d],i=e&&e.lastChild}catch(e){V=0,$=null}V&&n==V&&i==$?($=null,q=!0):(V=n,$=i,z+=1,B=setTimeout(c,50))}else $=null}function l(e){var t,n=T(e,"id");(t=n&&X[n])&&(R(e,"load",t),X[n]=null,delete X[n])}function h(e){return e&&"string"==typeof e&&A(e)||e}function u(t,n,i,r){try{Y||(Y=o.msghost)}catch(e){Y=null}if(e==top)return t&&Y&&Y[t]&&Y[t](n,i,r)}function p(e){var t=null;try{e&&(t=9==e.nodeType?e:e.document||e.ownerDocument||null)}catch(e){t=null}return t}function g(e){var t,n=null;try{e&&((n=e.parentWindow||e.defaultView||null)||(n=(t=p(e))&&(t.parentWindow||t.defaultView)||null))}catch(e){n=null}return n}function A(e){var t,n=arguments,i=n[d];return(t=i>1?p(n[1]):f)&&t.getElementById(e)||null}function k(e){return e&&1==e.nodeType&&e.tagName[m]()||""}function S(e,t){var n=[];try{n=t&&t[b]?t[b](e)||n:f[b](e)||n}catch(e){n=[]}return n}function _(e){return e&&(e.parentNode||e.parentElement)}function T(e,n,i){try{arguments[d]>2?null===i?D?e[w](n,0):e[w](n):(i=t(i),"class"==n[m]()?e.className=i:D?e[y](n,i,0):e[y](n,i)):i=t(D?e[v](n,0):e[v](n))}catch(e){i=""}return i}function C(e,n){var i;try{i=e.style,arguments[d]>1?i.cssText=t(n):n=i.cssText}catch(e){n=""}return n}function F(e,t){return(arguments[d]>1&&p(t)||f).createElement(e)}function M(e,t){var n=H;try{e&&(n=e.appendChild(t))}catch(e){n=H}return n}function j(e){var t,n=H,i="iframe"==k(e);i&&(u("detach",e),l(e),L||T(e,"src","about:blank"));try{(t=_(e))&&(t.removeChild(e),n=!0,L&&i&&r())}catch(e){}return e=t=null,n}function N(e,t,n){try{I?e[P]("on"+t,n):e[P](t,n,H)}catch(e){}e=n=null}function R(e,t,n){try{I?e.detachEvent("on"+t,n):e.removeEventListener(t,n,H)}catch(e){}e=n=null}function K(){var e;return s(),q?($=null,!0):((e=f.readyState)&&($=null,q="loaded"==e||"complete"==e||H),$=null,z=V=0,c(),!!q)}function Q(e){var t;if(K())try{i.callable(e)&&e()}catch(t){t=null}else setTimeout((function(){Q(e),e=null}),51)}function Z(t){var n="";if(t=t||e.event){try{t.returnValue=H}catch(e){}try{t.cancelBubble=!0}catch(e){}try{t.stopped=!0}catch(e){}for(n in O)if(O[n])try{t[n]()}catch(e){}}return H}function ee(t){var n=null;try{n=(t=t||e.event)?t[G]||t[J]:null}catch(e){n=null}return n}function te(e,t,n,i,o){return ne(e,t,n,i,o)}function ne(e,i,o,r,s,a){var c,f,p,g,m,v=["<","iframe"," "],y="";if(a)p=e;else{if("iframe"!=k(e=h(e)))return null;p=e.cloneNode(H)}for(c in"src"in(i=i||{})?T(p,"src",null):i.src=T(e,"src")||"about:blank","name"in i?T(p,"name",null):i.name=T(e,"name"),i.src||(i.src="about:blank"),y=s&&u("prep",i),a||(T(p,"width",null),T(p,"height",null)),o&&((f=C(p))&&";"!=f.charAt(f[d]-1)&&(f+=";"),C(p,[f,t(o)])),M(f=F("div"),p),m=f.innerHTML.replace(/<iframe(.*?)>(.*?)<\/iframe>/gim,"$1"),v.push('name="',i.name,'" ',m,"></","iframe",">"),delete i.name,f.innerHTML=t(v),g=f.firstChild,i)T(g,c,i[c]);return T(g,"id")||(T(g,"id","sf_iframe_"+U),U++),T(g,"FRAMEBORDER","no"),T(g,"SCROLLING","no"),T(g,"ALLOWTRANSPARENCY",!0),T(g,"HIDEFOCUS",!0),T(g,"TABINDEX",-1),T(g,"MARGINWIDTH",0),T(g,"MARGINHEIGHT",0),function(e,t){var i,o;n(t)&&(i=function(n){var r=ee(n);if(l(r),r&&t)try{t.call(r,n)}catch(e){}r=e=t=i=o=null},o=T(e,"id"),l(e),o&&(X[o]=i),N(e,"load",i)),i=null}(g,r),y&&u("attach",g,y,s),y=s=p=r=e=f=null,g}function ie(e,t,n,i){return ne(F("iframe"),e,t,n,i,!0)}!function(){var t,n;L?(G="srcElement",J="target",T(t=F("iframe"),"SCROLLING","no"),D="no"!=T(t,"SCROLLING"),r=E in e?function(){W&&clearTimeout(W),W=setTimeout((function(){try{e[E]()}catch(e){}}),3e3)}:_lang.noop):(G="target",J="currentTarget"),e.addEventListener&&!L?(P="addEventListener","removeEventListener"):L&&(I=!0,P="attachEvent","detachEvent"),t=null;try{t=f.createEvent("UIEvent")}catch(e){t=null}if(!t)try{t=f.createEvent("UIEvents")}catch(e){t=null}if(t)for(n in O)t[n]&&(O[n]=1);t=null,N(e,"load",a),N(e,"DOMContentLoaded",a),o=i.def("$sf.lib.dom",{doc:p,view:g,elt:A,tagName:k,tags:S,par:_,make:F,css:C,attr:T,gc:r,append:M,purge:j,attach:N,detach:R,ready:K,wait:Q,evtCncl:Z,evtTgt:ee},null,!0)}(),iframes=i.def("$sf.lib.dom.iframes",{make:ie,clone:te,replace:function(e,n,i,o,r){var s,a,c,d,p,g;a=(p=k(a=(d=(e=e||{}).id)&&h(d)))?a:null,(c="iframe"==p?a:null)?(u("detach",c),l(c),g=_(c),T(s=te(c,e,n,o,r),"onload",null),T(s,"onreadystatechange",null)):(i&&k(i=h(i))&&(g=i),!g&&a&&(g=_(a)),s=ie(e,n=t(n)||C(a)||"",o,r));try{g?c?g.replaceChild(s,c):a?g.replaceChild(s,a):M(g,s):M(f.body,s)}catch(e){}return s=a=e=c=g=o=null,A(d)},view:function(e){var t,n,i,o,r,s,a=0;try{if(!(t=e.contentWindow||null))for(o=(n=(i=p(e))&&g(i))&&n.frames||[];r=o[a++];){try{s=r.frameElement}catch(e){s=null}if(s&&s==e){t=r;break}}}catch(e){t=null}return t}},null,!0),logger=i.def("$sf.lib.logger",{log:function(t){e.console&&console.log&&console.log(t)},error:function(t){e.console&&console.error?console.error(t):e.console&&console.log&&console.log(t)}},null,!0),info=i.def("$sf.info",{errs:[],list:[]},null,!0),x.prototype.trim||(x.prototype.trim=i.trim)}()}(window),function(e){var t="onPosMsg",n={"exp-ovr":1,"exp-push":0,bg:0,pin:0,"read-cookie":0,"write-cookie":0},i="object",o="string",r="style",s="length",a="width",c="PX",l="scroll",d="documentElement",h="overflow",u="toFixed",f="message",p="guid",g="application/x-shockwave-flash",m=e&&e.$sf,v=m&&m.ver,y=m&&m.env,w=y&&y.ua,b=m&&m.lib,x=b&&b.lang,A=b&&b.dom,k=A&&A.iframes,S=x&&x.cbool,_=x&&x.cnum,T=x&&x.cstr,C=x&&x.callable,E=x&&x.noop,P=x&&x.guid,I=x&&x.mix,H=A&&A.elt,O=A&&A.par,F=(A&&A.tags,A&&A.attr),M=A&&A.doc,j=A&&A.tagName,N=A&&A.view,L=k&&k.view,R=(A&&A.purge,A&&A.ready,e&&e.escape),D=e&&e.Math,W=D&&D.max,q=D&&D.min,V=D&&D.round,$=null,z=x&&x.ParamHash,B=e&&e.document,U=y&&y.isIE,X=w&&w.ie||0,G=w&&w.webkit||0,J=w&&w.gecko||0,Y=w&&w.opera||0,K=e&&e.location,Q=K&&(K.protocol+"//"+(K.host||K.hostname)||""),Z={},ee={},te={},ne={},ie={},oe=!1,re=!1,se=!1,ae=!1,ce=0,le=0,de=null,he=null,ue=null,fe=null,pe=["ShockwaveFlash.ShockwaveFlash.11","ShockwaveFlash.ShockwaveFlash.8","ShockwaveFlash.ShockwaveFlash.7","ShockwaveFlash.ShockwaveFlash.6","ShockwaveFlash.ShockwaveFlash"];function ge(e){var t,n,o,r,s,a=this;if(!arguments.length)return fe?I({},fe):null;if(!(a instanceof ge))return new ge(e);if(!e)return fe=null,null;if(s=!!fe,a.auto=!("auto"in e)||S(e.auto),a.cdn=T(e.cdn),a.debug=S(e.debug),a.root=T(e.root),a.renderFile=T(e.renderFile),a.msgFile=T(e.msgFile),a.to=_(e.to,6e4),a.ver=T(e.ver)||v,a.onBeforePosMsg=C(e.onBeforePosMsg)?e.onBeforePosMsg:E,a.onPosMsg=C(e.onPosMsg)?e.onPosMsg:E,a.onStartPosRender=C(e.onStartPosRender)?e.onStartPosRender:E,a.onEndPosRender=C(e.onEndPosRender)?e.onEndPosRender:E,a.onFailure=C(e.onFailure)?e.onFailure3:E,n=e.positions,a.positions=t={},n)for(o in n)(r=n[o])&&typeof r==i&&(t[o||r.id||P("sf_pos")]=new me(r));fe=a,s=!!(s&&a.auto&&x&&x.ns("$sf.host.boot"));try{s&&m.host.boot()}catch(e){}return I({},fe)}function me(e,t,o){var r,s,a=this,c=e&&typeof e||"";return a instanceof me?(c==i?(a.id=T(e.id),a.dest=T(e.dest||t),a.bg=T(e.bg)||"transparent",a.tgt=T(e.tgt)||"_top",a.css=T(e.css),a.w=_(e.w,0),a.h=_(e.h,0),a.z=_(e.z,0),a.supports=I({},e.supports||n,!0,!0,!0),a.w&&a.h?a.size=a.w+"x"+a.h:(r=T(e.size))?(s=r.split(/x/gi),a.w=_(s[0],0),a.h=_(s[1],0),a.size=r):a.size=""):"string"==c?(a.id=T(e),a.dest=T(e.dest)):(a.dest="",a.bg="transparent",a.tgt="_top",a.css="",a.w=0,a.h=0,a.size="",a.z=0,a.supports={}),a.id=a.id||P("sf_pos"),!fe&&o&&ge(o),fe&&(fe.positions[a.id]=a),I({},a)):new me(e,t,o)}function ve(e){if(e){if(e.indexOf("${sf_ver}")>-1&&(e=e.replace(/\${sf_ver}/gi,$sf.ver)),e.indexOf("${ck_on}")>-1){var t=function(){var e=!!navigator.cookieEnabled;void 0!==navigator.cookieEnabled||e||(document.cookie="testcookie",e=-1!=document.cookie.indexOf("testcookie"),navigator&&(navigator.cookieEnabled=e));return e}()?"1":"0";e=e.replace(/\${ck_on}/gi,t)}if(e.indexOf("${flash_ver}")>-1){var n=function(){if(null!==ue)return ue;if(navigator.plugins&&navigator.plugins.length>0){var e=navigator.mimeTypes;e&&e[g]&&e[g].enabledPlugin&&e[g].enabledPlugin.description&&(ue=e[g].enabledPlugin.version)}else if(m.env.isIE){var t,n,i,o;for(t=0;t<pe.length;t++)try{n=new ActiveXObject(pe[t]),i=n.GetVariable("$version"),o=i.indexOf(" "),ue=o>-1?i.substr(o+1).replace(/,/gi,"."):i.replace(/,/gi,".");break}catch(e){n=null,ue=0;continue}}else ue=0;return ue}();e=e.replace(/\${flash_ver}/gi,n)}}return T(["<scr","ipt type='text/javascript', src='",e,"'></scr","ipt>"])}function ye(e){var t=e&&M(e)||B,n=t.compatMode,i=t[d];return n&&!Y&&"CSS1Compat"!=n&&(i=t.body),i}function we(e){return!(!(e=T(e))||-1!=e.search(/\D+/g))||(!(!e||-1==e.search(/px/gi))||void 0)}function be(e){var t,n,i,o,r=[-1,-1,-1,-1],a=["clipTop","clipRight","clipBottom","clipLeft"],c=0;if(!e)return r;if(X)for(;n=a[c];)we(t=e[n])&&(t=_(t,-1))>=0&&(r[c]=t),c++;else if((t=e.clip)&&-1!=t.search(/\d+/g))for(o=(r=(r=(t=t.replace(/\w+\(([^\)]*?)\)/g,"$1")).split(" "))[s]<=1?r.split(","):r)[s],c=0;o--;)we(i=r[c])?r[c]=_(i,-1):r[c]=-1,c++;return r}function xe(e,t){var n,i=0,o=0;return(n=Te(e))&&(i=n.borderTopWidth,o=n.borderLeftWidth,i=we(i)?_(i,0):0,o=we(o)?_(o,0):0,J&&/^t(?:able|d|h|r|head|foot)$/i.test(j(e))&&(i=o=0)),(t=t||{t:0,l:0}).t+=i,t.l+=o,t}function Ae(e){var t,n,i,o,r={x:0,y:0,w:0,h:0},s={scrollLeft:0,scrollTop:0,scrollWidth:0,scrollHeight:0},a=0,c=0;return n=(t=M(e)||B)[d]||s,o=t.body||s,(i=t.defaultView)&&(a=_(i.pageXOffset,0),c=_(i.pageYOffset,0)),r.x=W(n.scrollLeft,o.scrollLeft,a),r.y=W(n.scrollTop,o.scrollTop,c),r.w=W(n.scrollWidth,o.scrollWidth,0),r.h=W(n.scrollHeight,o.scrollHeight,0),r}function ke(e){var t,n,i,o={t:0,l:0,r:0,b:0,w:0,h:0,z:0},r=0,s=0,a=!1,c=ye(e),l=Ae(e);if(e&&1==e.nodeType)try{for(o.l=e.offsetLeft||0,o.t=e.offsetTop||0,t=e,a=J||G>519;(t=t.offsetParent)&&(o.t+=t.offsetTop||0,o.l+=t.offsetLeft||0,a&&xe(t,o),t!=c););if("fixed"!=Te(t=e,"position")){for(t=e;(t=O(t))&&(1==t.nodeType&&(r=t.scrollTop||0,s=t.scrollLeft||0,J&&"visible"!=Te(t,h)&&xe(t,o),o.l-=s,o.t-=r),t!=c););o.t+=l.y,o.l+=l.x}else o.t+=l.y,o.l+=l.x;X||e!=ye(e)?(i=e.offsetHeight,n=e.offsetWidth):(i=e.clientHeight,n=e.clientWidth),o.b=o.t+i,o.r=o.l+n,o.w=W(o.r-o.l,0),o.h=W(o.b-o.t,0),o.z=Te(e,"zIndex")}catch(e){o={t:0,l:0,r:0,b:0,w:0,h:0,z:0}}return o}function Se(e){var t=ye(e),n=0,i=0;return t&&(n=t.scrollWidth||0,i=t.scrollHeight||0),{t:0,l:0,b:i,r:n,w:n,h:i}}function _e(e,t){var n=!1,i=e&&e.nodeType||-1,o=t&&t.nodeType||-1;if(1==i&&-1!=o)if(e.contains)if(Y||1==o)n=e.contains(t);else for(;t;){if(e===t){n=!0;break}t=t.parentNode}else e.compareDocumentPosition&&(n=e===t||!!(16&e.compareDocumentPosition(t)));return n}function Te(e,t){var n="",i=!(!arguments[s]||!t),o="getComputedStyle";if(i)if(X)try{n=e.currentStyle[t]}catch(e){n=""}else try{n=N(e)[o](e,null)[t]}catch(e){n=""}else if(X)try{n=e.currentStyle}catch(e){n=null}else try{n=N(e)[o](e,null)}catch(e){n=null}return n}function Ce(t,n,o){var r,a,c,d,h,f,p,g,m,v,y,w,b,x,A,k,S,T,C,E,P=t&&O(t),I=ye(t),H=$(t),M=$(I),N=Ae(I),L=Se(t),R={t:0,l:0,r:0,b:0,w:0,h:0},D={t:0,l:0,r:0,b:0,xs:0,ys:0,xiv:0,yiv:0,iv:0,w:0,h:0},V=0,z=0,U=!1,G=!1,J=!1;U=!1;if(n=n&&typeof n==i?n:{},P)for(;(r=Te(P))&&("block"!=r.display&&"absolute"!=r.position&&"none"==r.float&&"none"==r.clear||(x=r.overflowX,A=r.overflowY,k=be(r),P==I?(g=N.w,y=N.h):(g=P.scrollWidth,y=P.scrollHeight),m=P.offsetWidth,w=P.offsetHeight,v=P.clientWidth,b=P.clientHeight,("hidden"==x||k[1]>0||k[3]>0)&&(C||(S=1,C=P)),("hidden"==A||k[0]>0||k[2]>0)&&(C||(T=1,C=P)),x==l&&(C=P,V=w-b,U=!0),A==l&&(C||(C=P),z=m-v,U=!0),"auto"==x&&(C||(C=P),g>v&&(V=w-b),U=!0),"auto"==A&&(C||(C=P),y>b&&(z=m-v),U=!0),!C))&&(P==I&&(g>v&&(V=(c=e.innerHeight||w)-b),y>b&&(z=(a=e.innerWidth||m)-v),U=!0),(P=O(P))&&1==P.nodeType););return H.w&&H.h&&(C&&C!=I?(r=Te(C),"body"==j(C)?(C=I,d=H.t,h=H.l):d=h=0,R=$(C),k[1]>0&&(R.w=k[1],R.r=R.l+R.w),k[3]>0&&(R.l=R.l+k[3],R.w=R.w-k[3]),k[2]>0&&(R.h=k[2],R.b=R.t+R.h),k[0]>0&&(R.t=R.t+k[0],R.h=R.h-k[0]),H.t>R.t&&R.t>0&&(d=H.t-R.t),H.l>R.l&&R.l>0&&(h=H.l-R.l),C.scrollTop,C.scrollLeft,y=C.scrollHeight,g=C.scrollWidth,D.t=W(d,0),D.l=W(h,0),r&&(S="hidden"==r.overflowX||k[1]>0||k[3]>0,T="hidden"==r.overflowY||k[0]>0||k[2]>0),H.t>=R.b?D.b=0:(!T&&H.t>=R.b&&(T=1),y>C.clientHeight?D.b=T?0:W(y-H.h-V-d,0):D.b=W(R.h-H.h-V-d,0)),H.l>=R.r?D.r=0:(!S&&H.l>=R.r&&(S=1),g>C.clientWidth?D.r=S?0:W(g-H.w-z-h,0):D.r=W(R.w-H.w-z-h,0))):(D.t=W(H.t,0),D.l=W(H.l,0),X&&"BackCompat"==B.compatMode&&"no"==F(I,l)?T=S=1:(r=Te(I))&&(S="hidden"==r.overflowX,T="hidden"==r.overflowY),N.h>I.clientHeight?T?D.b=0:(J=!0,D.b=W(L.h-H.h-V-H.t,0)):D.b=W(M.h-H.h-V-H.t,0),N.w>I.clientWidth?S?D.r=0:(G=!0,D.r=W(L.w-H.w-z-H.l,0)):D.r=W(M.r-H.w-z-H.l,0)),D.xs=V?1:0,D.ys=z?1:0,D.w=D.r+D.l,D.h=D.t+D.b,C&&C!=I?E=R:(E=M,C=I),h=W(H.l,E.l),f=q(H.r,G?q(L.r,E.r):E.r),a=W(f-h,0),d=W(H.t,E.t),p=q(H.b,J?q(L.b,E.b):E.b),c=W(p-d,0),D.xiv=_((a/H.w)[u](2)),D.yiv=_((c/H.h)[u](2)),D.iv=_((a*c/(H.w*H.h))[u](2))),n.refNode=C||I,n.isRoot=C==I,n.canScroll=U,n.refRect=C&&C!=I?R:M,n.expRect=D,n.rect=H,o&&function(){var e,i,r,a,c,l,d,h,f,p,g,m,v,y,w,b=0,x=0;if(D.iv>.5&&(oe=n,e=Ee(t,_(o,1,1)),oe=null,x=e[s],a=(i=H.w)*(r=H.h),x))for(;c=e[b++];)l=$(c),h=W(H.l,l.l),f=q(H.r,l.r),d=W(H.t,l.t),m=(g=f-h)*(p=q(H.b,l.b)-d),y=(1-g/i)[u](2),w=(1-p/r)[u](2),v=(1-m/a)[u](2),(y>0&&y<D.xiv||w>0&&w<D.yiv)&&(D.xiv=y,D.yiv=w,D.iv=v)}(),D}function Ee(e,t){var n,i,o,r,a,c,l,d,h,u=$(e),f=M(e),p=ye(f),g=u.t,m=u.l,v=u.r-u.l,y=u.b-u.t,w=[],b=V(v/10),A=V(y/10),k=b,S=A,T={},C={},E=[],P=0;if(oe?C=oe:Ce(e,C,!0),c=C.refNode,(l=C.refRect)&&c&&c!=p?(d=l.r,h=l.b):(d=m+v,h=g+y),f&&p&&f.elementFromPoint){for(;k<v;){for(S=A;S<y;)i=g+S,(n=m+k)<d&&i<h&&E.push([n,i]),S+=A;k+=b}for(t=_(t,E[s]);o=E[P++];){a=f.elementFromPoint(o[0],o[1]);try{a&&1==a.nodeType&&a!==p&&a!==e&&!_e(e,a)&&((r=F(a,"id"))||(r=x.guid("geom_inter"),F(a,"id",r)),!T[r]&&w[s]<t&&(T[r]=1,w.push(a)))}catch(e){}}}for(r in r="",T)0==r.indexOf("geom_inter")&&(a=H(r))&&F(a,"id",null);return w}function Pe(e,t,n,i){return he||(he=A.msghost_fb),e&&he&&he[e]&&he[e](t,n,i)}function Ie(t){!re&&t&&t.data==initID&&(re=!0,A.evtCncl(t),A.detach(e,f,Ie))}function He(e){var t=e&&e.data,n=e&&e.source,i=t&&"string"==typeof t&&-1!=t.indexOf(p)&&z(t),o=i&&i.id,r=o&&H(o),s=r&&L(r),a=o&&ee[o],c=i&&i.guid,l=a&&a.guid,d=a&&a._xmsgcb,h=!1;if(l&&c&&c==l&&n&&s&&s==n)try{h=d(i.msg)}catch(e){h=!1}return h&&A.evtCncl(e),h}function Oe(e,t){var n,i,o,r=e&&ee[e],s=!1;if(r){if(r)if((n=z()).msg=t,n.guid=r.guid,Fe()){o=H(e),i=L(o);try{i.postMessage(T(n),r.srcHost||"*"),s=!0}catch(e){s=!1}}else s=Pe("send",e,t)}else s=Pe("send",e,t);return n=i=o=null,s}function Fe(){return re}function Me(e){var t,n,i,o,r,s=null,a=function(){var e,t=K.href.indexOf("#");return(t=(e=t>-1?K.href.substr(0,t):K.href).indexOf("?"))>-1&&(e=e.substr(0,t)),escape(e)}();return e&&(t=e.name,n=z(t),o=0!=(o=(i=T(e.src))&&i.substring(0,i.indexOf("/",9))).search(/http/gi)?"":o,(s=z(n)).id=e.id||"iframe_"+P(),s.src=i,s.srcHost=o,s.guid=s.guid||P(),s.host=Q,s.loc=a,s.proxyID="",Fe()?(s.html5=1,s.proxyPath=""):(r=Pe("prep",s))&&(s=r),e.name=s),s}function je(t,n,i){var o;"iframe"==j(t)&&(o=F(t,"id"))&&n&&n instanceof z&&o==n.id&&(Fe()?(ee[o]=n,n._xmsgcb=i,se||(A.attach(e,f,He),se=!0)):Pe("attach",t,n,i))}function Ne(t){var n=F(t,"id"),i=n&&ee[n],o=!0;if(i){for(n in i&&(i._xmsgcb=ee[n]=null,i=null,delete ee[n]),n="",ee)if((i=ee[n])&&i.guid){o=!1;break}o&&Fe()&&se&&(se=!1,A.detach(e,f,He)),t=i=null}else Pe("detach",t)}function Le(e){var t,n,i=[],o=arguments,r=o[s],a=0,c=!1;if(fe&&(t=fe[e])){for(;r--;)(n=o[a++])!=e&&i.push(n);try{c=t.apply(null,i)}catch(e){c=!1}}return c}function Re(e){var n=e&&te[e];n&&(clearTimeout(n),ot(e),Le(t,"render-timeout",e)),Qe()||(de="")}function De(){ce&&(clearTimeout(ce),ce=0)}function We(){le&&(clearTimeout(le),le=0)}function qe(e){We(),le=setTimeout((function(){!function(e){var n,i,o,r;for(n in Z)i=Z[n],r=i&&i.dest,r&&H(r)&&i&&(o=z(),data=z(),o.pos=n,o.cmd=data.cmd="focus-change",o.value=e,Le(t,n,"focus-change",e),Ze(i,o));We()}(e)}),2)}function Ve(e){De(),ce=e?setTimeout(Be,750):setTimeout(ze,750)}function $e(e){var n,i,o,r,s,a;for(n in Z)e&&n in ie||(s=(r=(i=Z[n])&&i.dest)&&H(r))&&i&&(a=nt(n,s,!0),(o=z()).pos=n,o.cmd="geom-update",o.geom=R(a),Le(t,n,"geom-update",a),Ze(i,o));De()}function ze(){$e()}function Be(){$e(!0)}function Ue(e){qe(!0)}function Xe(t){qe(e.document.hasFocus())}function Ge(e){Ve(1)}function Je(e){Ve()}function Ye(t){var n,i;De();try{for(n in A.detach(e,l,Ge),A.detach(e,"resize",Je),A.detach(e,"unload",Ye),A.detach(e,"focus",Ue),A.detach(e,"blur",Xe),ie)(i=ie[n])&&(i.tID&&clearTimeout(i.tID),A.detach(ie[n],l,i.onscroll),i.onscroll=i.node=null),ie[n]=null,delete ie[n];ae=!1}catch(e){}}function Ke(e){var n,i,o=!1;if((n=z(e,null,null,!0,!0))&&n.pos&&(i=Z[n.pos]))switch(n.cmd){case"exp-push":it(n,!0),o=!0;break;case"exp-ovr":it(n),o=!0;break;case"collapse":!function(e,n,i){var o,s=e&&e.pos,a=s&&Z[s],l=a&&a.conf,d=l&&l.dest,h=d&&H(d),u=h&&H("sf_pos_rel_el_"+s),f=h&&h[r],p=u&&u[r];if(!(s&&a&&h&&u))return;if(!a.expanded)return;(o=ie[s])&&o.tID&&clearTimeout(o.tID);if(De(),!i&&Le("onBeforePosMsg",s,"collapse",0,0))return;f.left=f.top="0px",p.width=f.width=l.w+c,p.height=f.height=l.h+c,f.zIndex=a.dx=a.dy=0,tt(d),i||(Le(t,s,"collapse",0,0),e.cmd=n?"collapsed":"collapse",e.geom=R(nt(s,h,!0)),Ze(a,e));h=f=u=p=a=e=null}(n),o=!0;break;case"msg":Le(t,n.pos,"msg",n.msg),o=!0;break;case"error":!function(e){var n=e&&e.pos,i=n&&Z[n],o=i&&i.conf,s=o&&o.dest,a=s&&H(s),c=a&&H("sf_pos_rel_el_"+n);a&&a[r],c&&c[r];m&&m.info&&m.info.errs&&m.info.errs.push(e);Le(t,n,"error",e)}(n),o=!0;break;case"geom-update":m.lib.logger.log("Geom update complete: "+n.pos),o=!0;break;case"read-cookie":i.conf&&i.conf.supports&&i.conf.supports[n.cmd]&&"0"!=i.conf.supports[n.cmd]?(!function(e,n){var i,o,r=e&&e.pos,s=r&&Z[r],a=s&&s.conf,c=a&&a.dest,l=c&&H(c),d="read-cookie";if(!a.supports||!a.supports[d]||"0"==a.supports[d])return;if(!r||!s||!l)return;if(!(i=e.cookie))return;o=function(){var e,t,n,i={};for(e=document.cookie.split("; "),t=e.length-1;t>=0;t--)n=e[t].split("="),i[n[0]]=n[1];return i}(),Le(t,d,r,0,0),e.cmd=d,e.geom=R(nt(r,l,!0)),e.value=o[i],Ze(s,e),l=s=e=null}(n),o=!0):o=!1;break;case"write-cookie":i.conf&&i.conf.supports&&i.conf.supports[n.cmd]&&"0"!=i.conf.supports[n.cmd]?(!function(e,n){var i,o,r=e&&e.pos,s=r&&Z[r],a=s&&s.conf,c=a&&a.dest,l=c&&H(c),d="write-cookie";if(!a.supports||!a.supports[d]||"0"==a.supports[d])return;if(!r||!s||!l)return;if(!(i=e.cookie))return;o=escape(e.value);var h=new Date;h.setDate(h.getDate()+1);var u=o+"; expires="+h.toUTCString()+"; SameSite=None; Secure";document.cookie=i+"="+u,Le(t,d,r,0,0),e.cmd=d,e.geom=R(nt(r,l,!0)),e.info=o,e.value="",Ze(s,e),l=s=e=null}(n),o=!0):o=!1}return o}function Qe(){var e,t=!0;for(e in te){t=!1;break}return t}function Ze(e,t){de="sending-msg-down-"+t.cmd,setTimeout((function(){var n=e&&e.dest;n&&t&&Oe(n,t.toString()),de="",t=n=e=null}),1)}function et(){var e=this,t=A.attr(e,"_pos_id");te[t]&&(clearTimeout(te[t]),delete te[t],ne[t]=t,A.attr(e,"_pos_id",null),A.attr(e,"name",null),e[r].visibility="inherit",e[r].display="block",Le("onEndPosRender",t)),Qe()||(de="")}function tt(e,t,n,i,o){if(U){var s=H(e),l="shm_"+e,d=H(l);if(t){if(d)return void(d[r].visibility="visible");d=k.clone(s,{id:l,src:"",name:l},[a,":",n,c,";position:absolute;","height",":",i,c,";z-index:",o-1,";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)"]),A.append(O(s),d)}else!t&&d&&(d[r].visibility="hidden")}}function nt(e,n,i){var o,r,s,a,c=z(),d={};try{A.bounds(n,d,!0),i||d.isRoot||!d.canScroll||((s=d.expRect).xs||s.ys)&&(o=ie[e],r=d.refNode,o&&o.node!=r&&(o.tID&&clearTimeout(o.tID),A.detach(void 0,l,o.onscroll),o.node=o.onscroll=null,ie[e]=null,delete ie[e]),ie[e]||((o={}).node=r,o.onscroll=function(n){!function(e,n,i){var o=ie[n];o&&(o.tID&&(clearTimeout(o.tID),delete o.tID),o.tID=setTimeout((function(){var e,i,r=Z[n],s=r&&r.dest,a=s&&H(s);a&&r&&(e=nt(n,a,!0),(i=z()).pos=n,i.cmd="geom-update",i.geom=R(e),Le(t,n,"geom-update",e),Ze(r,i)),delete o.tID}),750))}(0,e)},ie[e]=o,A.attach(r,l,o.onscroll)))}catch(e){c=null}try{c&&(c.win=z(A.winRect()),c.par=z(d.refRect),s=z(d.expRect),(a=z(d.rect)).iv=s.iv,a.xiv=s.xiv,a.yiv=s.yiv,delete s.iv,delete s.xiv,delete s.yiv,c.exp=s,c.self=a)}catch(e){c=null}return c}function it(e,n){var i,o,s,a,l,d,h,u,f,p,g,m,v,y,w,b,x,A,k,S,T=!1,C=!1,E=e&&e.pos;E&&(o=(i=Z[E])&&i.conf,i&&o&&(v=i.dest,s=H(v),a=H("sf_pos_rel_el_"+E),s&&a&&(l=s[r],d=a[r],l&&((S=ie[E])&&S.tID&&clearTimeout(S.tID),De(),A=e.exp_obj,h=o.w,u=o.h,A?(y=_(A.t,0,0),w=_(A.l,0,0),b=_(A.r,0,0),x=_(A.b,0,0),g=_(h+w+b,0,0),m=_(u+y+x,0,0),y?(p=-1*y,C=!0):p=0,w?(f=-1*w,T=!0):f=0):(g=(T=(f=i.dx=_(e.dx))<0)?h+-1*f:h+f,m=(C=(p=i.dy=_(e.dy))<0)?u+-1*p:u+p),g<=h&&m<=u||Le("onBeforePosMsg",E,"exp-ovr",f,p)||(l.width=g+c,l.height=m+c,T&&(l.left=f+c),C&&(l.top=p+c),(k=_(i.z,0))||(k=3e3),l.zIndex=k,tt(v,!0,g,m,k-1),n?(d.width=g+c,d.height=m+c):(d.width=h+c,d.height=u+c),i.expanded=!0,e.dx=f,e.dy=p,e.w=g,e.h=m,e.cmd="expand",e.geom=R(nt(E,s,!0)),Le(t,E,"exp-ovr",f,p),Ze(i,e),l=a=s=i=e=null)))))}function ot(){var e,t,n,i,o,r,a=0,c=!0,l=arguments;if(!l[s]||"*"==l[a])for(e in l=[],Z)l.push(e);for(;e=l[a++];)(t=Z[e])&&(e in te&&(clearTimeout(te[e]),delete te[e]),e in ne&&delete ne[e],r=(i=(n=t.dest)&&H(n))&&O(i),-1!=A.attr(r,"id").indexOf("sf_pos_rel_el")&&(r=O(o=r)),A.purge(i),o&&A.purge(o),Z[e]=null,delete Z[e],i=A.make("div"),A.attr(i,"id",n),A.append(r,i));for(e in e="",Z){c=!1;break}c&&(de="",Ye())}x&&e==top&&($=X?function(e){var t,n,i,o,r,s,a,c,l,h={t:0,l:0,r:0,b:0,w:0,h:0,z:0};if(e&&1==e.nodeType)try{if(i=M(e)||B,!A.ready())return ke(e);t=Ae(e),n=e.getBoundingClientRect(),h.t=n.top,h.l=n.left,s=a=2,o=i.compatMode,c=(r=Te(i[d])).borderLeftWidth,l=r.borderTopWidth,6===X&&"BackCompat"!=o&&(s=a=0),"BackCompat"==o&&(s=c=we(c)?_(c,0):0,a=l=we(l)?_(l,0):0,h.t-=s,h.l-=a),h.t+=t.y,h.l+=t.x,h.b=h.t+e.offsetHeight,h.r=h.l+e.offsetWidth,h.w=W(h.r-h.l,0),h.h=W(h.b-h.t,0),h.z=Te(e,"zIndex")}catch(e){h={t:0,l:0,r:0,b:0,w:0,h:0,z:0}}return h}:ke,x.def("dom",{rect:$,currentStyle:Te,contains:_e,docRect:Se,winRect:function(t){var n=t&&N(t)||e,i=n.innerHeight||0,o=n.innerWidth||0,r=n.screenY||n.screenTop||0,s=i+r,a=n.screenX||n.screenLeft||0,c=o+a,l=ye(t);return i||o||!l||(i=l.clientHeight||0,c=a+(o=l.clientWidth||0),s=r+i),{t:r,l:a,b:s,r:c,w:o,h:i}},bounds:Ce,overlaps:Ee},b,!0),function(){if(x){x.def("msghost",{prep:Me,attach:je,detach:Ne,usingHTML5:Fe,send:Oe},A,!0),A.attach(e,f,Ie),initID="xdm-html5-init-"+P(),Q=0==Q.indexOf("file")?Q="file":Q;try{e.postMessage(initID,"file"==Q?"*":Q)}catch(t){A.detach(e,f,Ie)}}}(),x.def("$sf.host",{Config:ge,PosConfig:me,PosMeta:function e(t,n,r){var s,a;if(!(this instanceof e))return new e(key,r,pos,t);if(s={},a={},!n||typeof n!=o)return this;t&&typeof t==i&&(s=I(s,t)),r&&typeof r==i&&(a[n]=r),this.toString=function(){var e=new z;return e.shared=s,e.non_shared=a,e.toString()},this.value=function(e,t){var n="";return e&&typeof e==o?(t&&typeof t==o||(t="shared"),n="shared"==t?s[e]||"":e in a&&a[prop_key]||""):n}},Position:function e(t,n,o,r){var s,a=this,c=t&&typeof t;if(!(a instanceof e))return new e(t,n,o,r);if(null==fe){var l="Publisher Config not initialized - abort";return logger.error(l),void info.errs.push(l)}c==i?I(a,t):s=a.id=T(t)||P("sf_pos"),n?(a.html=n,a.src=""):a.src?a.html=ve(a.src):(a.html=a.html||"",a.src=""),a.html||(a.html=""),a.meta=o||a.meta||{},a.conf=r||a.conf||{},s&&(fe&&fe.positions[s]?a.conf=fe.positions[s]:r&&(r.id=s,a.conf=new me(r)))},nuke:ot,get:function(e){var t=Z[e];return t?I({},t):null},render:function t(){var n,i,o,d,h,u,f,p,g,m,v,y,w,b,S,_=0,T=arguments,C="relative",E="absolute",P="top:0px;left:0px;visibility:hidden;display:none;";if(!fe)return!1;if(!A.ready())return A.wait((function(){t.apply(null,T),T=null})),null;for(T[0]instanceof Array&&1==T[s]&&(T=T[0]);n=T[_++];)if((o=(i=n.id)?fe.positions[i]:null)&&(d=(g=o.dest)&&H(g))){if(y=o.w,w=o.h,!y){try{y=d.offsetWidth}catch(e){y=0}y&&(o.w=y)}if(!w){try{w=d.offsetHeight}catch(e){w=0}w&&(o.h=w)}y&&w&&(p=new z,u=H(m="sf_pos_rel_el_"+i),f=O(d),u&&f==u&&(f=O(u)),tt(g),(S=te[i])&&clearTimeout(S),(S=ne[i])&&delete ne[i],te[i]=setTimeout((function(){Re(i)}),fe.to),de="rendering",Le("onStartPosRender",i,o,n),v=["position:","",";z-index:0;",a,":",y,c,";","height",":",w,c,";","visibility:inherit;","margin:auto"],u?((b=u[r]).width=y+c,b.height=w+c,(b=d&&d[r]).width=y+c,b.height=w+c):(v[1]=C,(u=A.make("div")).id=m,u.className="iab_sf",h=d.cloneNode(!1),A.css(h,v),u.appendChild(h),A.css(u,v),f.replaceChild(u,d),d=H(g)),p.id=i,p.dest=g,p.conf=z(o),p.meta=n.meta.toString(),p.html=R(n.html),p.geom=R(nt(i,d)),p.src=fe.renderFile,p.has_focus=x.cstr(document.hasFocus()),v[1]=E,v[13]=P,ae||(A.attach(e,l,Ge),A.attach(e,"resize",Je),A.attach(e,"unload",Ye),A.attach(e,"focus",Ue),A.attach(e,"blur",Xe),ae=!0),k.replace({id:g,name:p,src:fe.renderFile,_pos_id:i},v,u,et,Ke),Z[i]=p)}},status:function(){return de}},null,!0))}(window),function(e){var t=e&&e.document,n=e&&e.$sf,i=n&&n.lib,o=i&&i.lang,r=i&&i.dom,s=o&&o.cstr,a=o&&o.guid,c=r&&r.elt,l=r&&r.par,d=r&&r.tags,h=r&&r.attr,u=r&&r.purge,f=r&&r.ready,p={},g=0,m=!1,v=!1;function y(o,r){var s,a;try{i||(i=n&&n.lib),i&&i.logger&&e==top?r?i.logger.error(o):i.logger.log(o):(s=t.getElementsByTagName("head")[0],(a=t.createElement("script")).type="text/plain",a.text="\x3c!-- SafeFrame "+(r?"error":"log")+": "+(o||"unknown")+" --\x3e",s.appendChild(s,a))}catch(e){}}function w(){var e,t;if(r)for(e in p)(t=c(e))&&(u(t),delete p[e])}function b(){var u,g,b,x,A,k,S,_,T,C,E,P,I,H,O,F,M,j=d&&d("script")||[],N=[],L=0,R=n&&n.host,D=R&&R.conf;if(!n||!o||!r)return y("SafeFrame base library not found",!0),!1;if(i||(i=n&&n.lib),v&&m)return y("Automatic boot already invoked"),!1;if(e==top){try{sf_conf=R.Config()}catch(F){sf_conf=null}if(D&&!sf_conf)try{sf_conf=R.Config(D)}catch(e){sf_conf=null}if(!sf_conf)return y("No configuration found"),!1}for(;u=j[L++];)if("sf_data"==u.className||"text/x-safeframe"==h(u,"type")){if(m=!0,(b=h(u,"id"))||(b=a("sf_data_element"),h(u,"id",b)),p[b])continue;x=u.text||u.innerHTML||u.innerText;try{x=o.trim(x),x=(x=new Function("return "+x))()}catch(F){x=null,y("Error parsing tag configuration "+(F&&F.message||""),!0);continue}if(x&&x.id&&(x.html||x.src))if(e!=top)A=(A=x.html||"")||(M=x.src,s(["<scr","ipt type='text/javascript', src='",M,"'></scr","ipt>"])),f()?y("cannot write html content into already loaded document"):t.write(A);else{if(!(g=l(u))){y("can't find parent element for script tag",!0);continue}if((S=sf_conf&&sf_conf.positions[x.id])||((S=x.conf).id=x.id,S&&(S=new R.PosConfig(S))),!S){y("no position conf found pre-defined or inline for position "+x.id,!0);continue}if(S.dest||(S=new R.PosConfig(S,a("sf_position"))),x.meta){for(O in O="",P={},T=x.meta)E=typeof(C=T[O]),!I&&"object"==E&&C&&(I=C,H=O),"object"!=E&&"function"!=E&&(P[O]=C);T=new R.PosMeta(P,H||"",H&&I?I:null)}if(k=new R.Position(x,null,T,S),p[b]=b,!(_=c(S.dest)))if(f()){_=r.make("div"),h(_,"id",S.dest);try{g.insertBefore(_)}catch(F){y("failed auto-adding destination element "+F.message,!0);continue}}else t.write("<div id='",S.dest,"'></div>");N.push(k)}else y("no content or id property found in the inline position object",!0)}if(N.length)try{R.render(N)}catch(e){y("failed during rendering "+e.message)}else y("no positions to boot");r.wait(w)}setTimeout((function t(){var i,o,s,a,c,l=!0;if(!m)if(o=n&&n.host,e==top){o&&!o.boot&&(o.boot=b);try{i=o&&o.Config()}catch(e){i=null}if(!i)try{i=o&&o.conf}catch(e){i=null}if(i&&("auto"in i&&!1===i.auto&&(l=!1),(!o.render||!o.Config)&&(s=i.hostFile)))return a=d("head")[0],(c=r.make("script")).id="sf_host_lib",c.type="text/javascript",c.className="sf_lib",c.src=s,e.ActiveXObject?c.onreadystatechange=function(){var e=c.readyState;"loaded"!=e&&"complete"!=e||(v=!1,l&&b(),c.onreadystatechange=null,c=a=o=i=null)}:c.onload=function(){v=!1,l&&b(),c.onload=null,c=a=o=i=null},v=!0,void a.appendChild(c);l&&(i?(v=!0,b(),v=!1):g++<=100&&setTimeout(t,50))}else b()}),50)}(window),function(e){var t,n,i,o,r,s,a="message",c="on"+a,l="__defineGetter__",d="__defineSetter__",h="__defineProperty__",u="object",f=e&&e.document,p=e&&e.parent,g=e&&e.$sf,m=g&&g.lib,v=g&&g.env,y=m&&m.lang,w=y&&y.ParamHash,b=m&&m.dom,x=(b&&b.iframes,b&&b.msgclient_fb),A=v&&v.isIE,k=e&&e.unescape,S=y&&y.cstr,_=y&&y.cnum,T=b&&b.append,C=b&&b.tags,E=b&&b.elt,P=b&&b.purge,I=b&&b.attach,H=b&&b.detach,O=b&&b.attr,F=!1,M=!1,j=!1,N=!1,L=null,R=null,D=null,W=null,q=!1,V="",$="",z=!1,B="",U=0,X=0,G=0,J=[],Y=[];function K(e,t){var n,i,o;try{n=C("head")[0],-1==e.search(/\{[^\}]*}/g)?((i=b.make("link")).type="text/css",i.rel="stylesheet",i.href=e):((i=b.make("style")).type="text/css",A?i.styleSheet.cssText=e:(o=f.createTextNode(e),T(i,o))),t&&(i.id=t),T(n,i)}catch(e){}}function Q(e){var t,n=window;try{e=e||n.event||{}}catch(t){e={type:"unload"}}for(;t=Y.shift();)try{t(e)}catch(e){}try{i&&(n.attachEvent=i,n.detachEvent=r)}catch(e){}try{o&&(n.addEventListener=o,n.removeEventListener=s)}catch(e){}F||H(n,"load",ie),H(n,"unload",ne);try{n.onerror=null}catch(e){}try{U&&(clearTimeout(U),U=0)}catch(e){}try{X&&(clearTimeout(X),X=0)}catch(e){}try{G&&(clearTimeout(G),G=0)}catch(e){}return n=i=o=r=s=f=k=p=t=grand_par=null,1}function Z(){try{G&&(clearTimeout(G),G=0)}catch(e){}try{A&&e.onmessage&&(e.onmessage=null)}catch(e){}try{e.onerror=le}catch(e){}G=setTimeout(Z,3e3)}function ee(){try{document.open("text/html","replace"),document.write(""),document.close()}catch(e){}}function te(){var t=!1;if(function(){var e,t=C("iframe"),n=0,i="";if($)for(;e=t[n++];)if((i=(i=O(e,"src"))&&i.length>=9?i.substring(0,i.indexOf("/",9)).toLowerCase():"")&&i==$&&"sf"!=e.className)try{P(e)}catch(e){}}(),A){try{X&&-1!=X&&(clearTimeout(X),X=0)}catch(e){}try{t=e==top&&-1!=X}catch(e){t=!1}if(t)return X=-1,Q(),void ee();try{X||(X=setTimeout(te,3e3))}catch(e){}}}function ne(e){Q(e),ee()}function ie(){F||(F=!0,H(e,"load",ie),function(){var e,t,i=0,o=n&&n.tgt||"_top";for(t=C("a"),"_self"==o&&(o="_top");(e=t[i++])&&(O(e,"target")!=o&&O(e,"target",o),!(i>10)););}())}function oe(e){var t,n,i,o,r;try{t=e.data,n=e.source,e.origin}catch(e){}if(b.evtCncl(e),t&&n&&n==top&&(i=w(t,null,null,!0,!0),o=i.guid,r=i.msg,V==o&&r&&typeof r==u))try{setTimeout((function(){!function(e,t){var n,i,o=!1,r={};e&&(i=e.geom||"",n=e.cmd,i&&(D=w(k(i),null,null,!0,!0)));r.cmd=n,r.value=r.info=e&&e.value,r.reason=e&&e.reason,"collapsed"==n?(o=!0,M&&(R=null,M=!1,j=!0,pe(),j=!1,ue("collapsed"))):"collapse"==n?(o=!0,M&&(R=null,M=!1,ue("collapsed"))):"expand"==n?(o=!0,R&&(R=null,M=!0,ue("expanded"))):"geom-update"==n?ue("geom-update"):"focus-change"==n?(r.info=r.value=y.cbool(r.value),q=r.value,ue("focus-change",r)):"read-cookie"==n?(o=!0,R&&(R=null,M=!0,ue("read-cookie",r=e&&e.value))):"write-cookie"==n?(o=!0,R&&(R=null,M=!0,ue("write-cookie",r))):"failed"==n&&(o=!0,R&&(R=null,M=!0,ue("failed",r)));e=null}(r),i=e=o=r=null}),1)}catch(e){}}function re(t,n,a){var c,l,d=!1;if(a?(c=r||s,l=s):(c=i||o,l=o),c){try{c(t,n),d=!0}catch(e){d=!1}if(!d)try{c.call(e,t,n),d=!0}catch(e){d=!1}}if(l&&!d)try{l.call(e,t,n,!1)}catch(e){}}function se(e,t){var n=!1;switch(e=S(e).toLowerCase()){case"unload":case"onunload":Y.push(t);break;case a:case c:break;default:n=!0}n&&re(e,t)}function ae(e,t){var n,i,o=0;switch(e=S(e).toLowerCase()){case"unload":case"onunload":i=Y}if(i){if(i.length)for(;n=i[o];){if(n===t){i.splice(o,1);break}o++}}else re(e,t,!0)}function ce(){var e;try{if(J.length>0)e=J[0],he(S(["cmd=","error","&pos=",B,"&errors=",e]),"error");U&&(clearTimeout(U),U=0)}catch(e){}J=[]}function le(e,t,n){J.push(S(["Error occurred inside SafeFrame:\nMessage: ",e,"\nURL:",t,"\nLine:",n]));try{U&&(clearTimeout(U),U=0),U=setTimeout(ce,3e3)}catch(e){}return!0}function de(e){var t=y.noop,n=Object,r={get:t,set:t},s=!1;if(e){if(i&&(e.attachEvent=se,e.detachEvent=ae),o&&(e.addEventListener=se,e.removeEventListener=ae),e[l])try{e[l]("onload",t),e[d]("onload",t),e[l]("onunload",t),e[d]("onunload",t),e[l](c,t),e[d](c,t),s=!0}catch(e){s=!1}if(!s&&n[h])try{n[h](e,"onload",r),n[h](e,"onunload",r),n[h](e,c,nobg),s=!0}catch(e){s=!1}}return s}function he(e,n){var i,o=y.guid("sf_pnd_cmd"),r=t.dest,s=!1,a=y.time();if(e&&n&&!R){if(i=w({msg:e,id:r,guid:V,cmd:n}),R={id:o,sent:a,cmd:n},setTimeout((function(){R&&R.id==o&&("exp-ovr"!=n&&"exp-push"!=n||(j=!0,pe(),j=!1),ue("failed:"+n+":timeout")),o=s=a=n=e=R=i=null}),4e3),z)try{top.postMessage(i.toString(),"file"==$||""==$?"*":$),s=!0}catch(e){s=!1}var c,l,d;s||(c="send",l=i,x&&(msg_clientfb=b.msgclient_fb),c&&x&&x[c]&&x[c](l,d))}}function ue(e,t){try{L(e,t)}catch(e){}}function fe(e,t){var n,i,o=E("sf_align"),r=o.style;n=e?"right:0px;":"left:0px;",i=t?"bottom:0px;":"top:0px;",r.cssText="position:absolute;"+n+i,o=r=null}function pe(){return!!(j||N&&M&&!R)&&(fe(0,0),!0)}function ge(e,t,n){!N&&V&&(e=_(e,0,0),t=_(t,0,0),e,t,N=!0,L=y.callable(n)?n:null)}function me(e,t,n){var i,o,r,s,a,c,l,d=!1,h=!1,f=n?"exp-push":"exp-ovr",p=["cmd=",f,"&pos=",B],g=0,m=0;if(N&&!R&&(!n||_e("exp-push"))){if(e&&typeof e==u){if(i=_(e.r,0,0),o=_(e.b,0,0),r=_(e.t,0,0),s=_(e.l,0,0),e.push){if(!_e("exp-push"))return;f="exp-push",p[1]=f}!i&&s&&(d=!0,g=-1*s),i&&!s&&(g=i),!o&&r&&(h=!0,m=-1*r),o&&!r&&(m=o),!(r&&o||s&&i)?(fe(d,h),p.push("&dx=",g,"&dy=",m),he(S(p),f)):(c=(a=E("sf_align"))&&a.style,l=["position:absolute;"],r&&o?l.push("top:",r,"px;"):r?l.push("bottom:0px;"):o&&l.push("top:0px;"),s&&i?l.push("left:",s,"px;"):s?l.push("right:0px;"):o&&l.push("left:0px;"),c&&(c.cssText=S(l)),p.push("&exp_obj=",escape(w(e))),he(S(p),f))}else{if(e=_(e,0),t=_(t,0),e<=0&&t<=0)return;fe(d=e<=0,h=t<=0),p.push("&dx=",e,"&dy=",t),he(S(p),f)}return!0}}function ve(){pe()&&he(S(["cmd=","collapse","&pos=",B]),"collapse")}function ye(){return D}function we(e,t){var n,i="";return W&&(t?t in W?i=S(W[t][e]):W.non_shared&&t in W.non_shared&&(i=S(W.non_shared[t][e])):(n=W.shared)&&typeof n==u&&(i=S(n[e]))),i}function be(){if(R){if("exp-ovr"==R.cmd)return"expanding";if("collapse"==R.cmd)return STATUS}return M?"expanded":"collapsed"}function xe(e,t){var n=null==t,i=n?"read-cookie":"write-cookie",o=["cmd=",i,"&pos=",B,"&cookie=",e];n||(o.push("&value="),o.push(t.value)),he(S(o),i)}function Ae(e){he(S(["cmd=","msg","&pos=",B,"&msg=",e]),"msg")}function ke(){var e,t=_(D&&D.self&&D.self.iv,-1,0);return t>=0&&(e=Math.floor(100*t)),e}function Se(){return q||document.hasFocus()}function _e(e){var n=t.conf,i=n&&n.supports||!1;return i&&((e=S(e))?"0"==(i=i[e]||!1)&&(i=!1):i=y.mix({},i)),i}!function(){var c,l,d={};if(y&&b)if(function(c){var l,d,h,u,g,m,v=!1,x=!0;c=c&&c instanceof Object?c:{};try{d=e.name}catch(e){}try{e.name=""}catch(e){}if(!d)return c.status=500.101,v;try{top==p?(t=w(d,null,null,!0,!0),u=y.time(),V=t.guid,m=u-(g=_(V.replace(/[^_]*_(\d+)_\d+_\d+/g,"$1"),0)),v=V&&g&&m>0&&m<3e4,t.loc&&(t.loc=unescape(t.loc)),v||(c.status=500.104)):c.status=500.102}catch(e){t=V=null,v=!1,c.status=500.103}if(v)try{if(n=t.conf,e.name=n.dest,B=n.id,W=t.meta,$=t.host,D=t.geom,z=y.cbool(t.html5),q=y.cbool(t.has_focus),h=n.bg,D&&((D=w(k(D),null,null,!0,!0)).self&&D.exp||(D=null)),$||($=($=f.referrer).substring(0,$.indexOf("/",9))),h&&K(S(["#sf_body { background-color: ",h,"; }"]),"sf_bg_css"),"_self"==(h=n.tgt)&&(n.tgt="_top"),h||(n.tgt="_top"),"_top"!=h){for(;P(C("base")[0]););l=b.make("base"),O(l,"target",h),T(C("head")[0],l)}A&&(i=e.attachEvent,r=e.detachEvent),o=e.addEventListener,s=e.removeEventListener,I(e,"unload",ne),I(e,"load",ie),I(e,a,oe),de(e),de(e.__proto__),de(e.Window&&e.Window.prototype)}catch(e){c.status=500.105,t=n=V=null,x=!1}else t=V=null,x=!1;return x}(d))y.def("ext",{register:ge,expand:me,collapse:ve,geom:ye,meta:we,status:be,supports:_e,cookie:xe,message:Ae,inViewPercentage:ke,winHasFocus:Se},g,!0),function(){var e,i;if(i=S(n&&n.css),e=S(t&&t.html),i&&K(i=k(i),"sf_custom_css"),e){e=k(e);try{f.write(e),te(),Z()}catch(e){le("Error while rendering content: "+e[a])}}}();else try{c=C("head")[0],(l=b.make("script")).type="text/plain",l.text="\x3c!-- Construction of SafeFrame failed: "+(d.status||"unknown")+" --\x3e",T(c,l)}catch(e){}}()}(window);const queue=window.adhesetag&&window.adhesetag.ahq||[];window.adhesetag={ahq:{push:function(e){e()}},init:function(e){window.adhesetag.adhese=new Adhese,window.adhesetag.adhese.init(e)},adhese:null,AdheseAjax:AdheseAjax},queue.forEach(window.adhesetag.ahq.push);


var AdheseGateway = {};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

AdheseGateway.debug = false;
if (window.location.href.includes('adhesegw')) {
    AdheseGateway.debug = true;
};

AdheseGateway.multiplier = 1;
AdheseGateway.roadblockSlotAdded = false;
AdheseGateway.PREBID_TIMEOUT = 2000;
AdheseGateway.FAILSAFE_TIMEOUT = 3000;
AdheseGateway.prebidRefererUrl = window.location.href;
AdheseGateway.infiniteScroll = false;
AdheseGateway.infiniteScrollSlots = [];
AdheseGateway.targetArray = [];
AdheseGateway.adServer = 'google';
AdheseGateway.adUnits = [];
AdheseGateway.definedSlots = undefined;
AdheseGateway.consentForAds;
AdheseGateway.deviceType = 'unknown';
AdheseGateway.adheseSlots = [];
AdheseGateway.gptadslots = [];

AdheseGateway.adformIdentifiers = {
	"ABHD.NL_WEB_PAGINA_300X600_PREMIUM" : 900197,
	"ABHD.NL_WEB_PAGINA_728X90_PREMIUM" : 900198,
	"ANNEMEREL.COM_MOB_ARTIKEL_320X240_MID" : 900199,
	"ANNEMEREL.COM_MOB_PAGINA_320X240_DOWN" : 900200,
	"ANNEMEREL.COM_MOB_PAGINA_320X240_TOP" : 900201,
	"ANNEMEREL.COM_WEB_ARTIKEL_300X600_DOWN" : 900202,
	"ANNEMEREL.COM_WEB_ARTIKEL_300X600_MID" : 900203,
	"ANNEMEREL.COM_WEB_ARTIKEL_300X600_TOP" : 900204,
	"ANNEMEREL.COM_WEB_ARTIKEL_970X250_PREMIUM" : 900205,
	"ANNEMEREL.COM_WEB_PAGINA_300X600_DOWN" : 900206,
	"ANNEMEREL.COM_WEB_PAGINA_300X600_TOP" : 900207,
	"ANNEMEREL.COM_WEB_PAGINA_970X250_PREMIUM" : 900208,
	"APPARATA.NL_MOB_ROS_320X240_MID" : 900209,
	"APPARATA.NL_WEB_ROS_300X600_PREMIUM" : 900210,
	"APPARATA.NL_WEB_ROS_728X90_PREMIUM" : 900211,
	"APPARATA.NL_WEB_ROS_728X90_PREMIUM_BOTTOM" : 900212,
	"APPARATA.NL_WEB_ROS_970X250_PREMIUM" : 900213,
	"AUTOBLOG.NL_MOB_PAGINA_320X240_MID" : 900214,
	"AUTOBLOG.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900215,
	"AUTOBLOG.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900216,
	"AUTOBLOG.NL_WEB_PAGINA_300X600_PREMIUM" : 900217,
	"AUTOBLOG.NL_WEB_PAGINA_LIST_336X280_PREMIUM" : 900218,
	"AUTOBLOG.NL_WEB_PAGINA_LIST_336X280_REGULIER" : 900219,
	"AUTOBLOG.NL_WEB_PAGINA_970X250_PREMIUM" : 900220,
	"AUTOJUNK.NL_MOB_FOTO_MID" : 900221,
	"AUTOJUNK.NL_MOB_FOTO_TOP" : 900222,
	"AUTOJUNK.NL_MOB_PAGINA_TOP" : 900223,
	"AUTOJUNK.NL_WEB_PAGINA_300X600_PREMIUM" : 900224,
	"AUTOJUNK.NL_WEB_FOTO_300X600_PREMIUM" : 900225,
	"AUTOJUNK.NL_WEB_PAGINA_728X90_REGULIER" : 900226,
	"AUTOJUNK.NL_WEB_PAGINA_970X500_PREMIUM" : 900227,
	"AUTORAI.NL_MOB_PAGINA_320X240_DOWN" : 900228,
	"AUTORAI.NL_MOB_ARTIKEL_320X240_TOP" : 900229,
	"AUTORAI.NL_MOB_PAGINA_320X240_MID" : 900230,
	"AUTORAI.NL_WEB_PAGINA_336X280_PREMIUM" : 900231,
	"AUTORAI.NL_WEB_ARTIKEL_728X90_REGULIER" : 900232,
	"AUTORAI.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900233,
	"AUTORAI.NL_WEB_PAGINA_728X90_REGULIER" : 900234,
	"AUTORAI.NL_WEB_PAGINA_728X90_REGULIER_BOTTOM" : 900235,
	"AUTORAI.NL_WEB_PAGINA_970X250_PREMIUM" : 900236,
	"AUTOTRACK.NL_MOB_DETAIL_320X240_TOP" : 900237,
	"AUTOTRACK.NL_MOB_HOME_320X240_TOP" : 900238,
	"AUTOTRACK.NL_WEB_DETAIL_970X250_PREMIUM" : 900239,
	"AUTOTRACK.NL_WEB_HOME_970X250_PREMIUM" : 900240,
	"AUTOTRACK.NL_WEB_LISTER_728X90_PREMIUM" : 900241,
	"AUTOTRACK.NL_WEB_LISTER_728X90_PREMIUM_DOWN" : 900242,
	"AUTOTRACK.NL_WEB_LISTER_970X250_PREMIUM" : 900243,
	"AUTOVOORU.NL_MOB_ARTIKEL_320X240_MID" : 900244,
	"AUTOVOORU.NL_MOB_PAGINA_320X240_DOWN" : 900245,
	"AUTOVOORU.NL_MOB_PAGINA_320X240_MID" : 900246,
	"AUTOVOORU.NL_MOB_PAGINA_320X240_TOP" : 900247,
	"AUTOVOORU.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900248,
	"AUTOVOORU.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900249,
	"AUTOVOORU.NL_WEB_PAGINA_728X90_PREMIUM" : 900250,
	"AUTOWERELD.COM_MOB_ARTIKEL_320X240_MID" : 900251,
	"AUTOVOORU.NL_WEB_PAGINA_970X250_PREMIUM" : 900252,
	"AUTOWERELD.COM_MOB_ARTIKEL_320X240_TOP" : 900253,
	"AUTOWERELD.COM_MOB_HOME_320X240_TOP" : 900254,
	"AUTOWERELD.COM_WEB_ARTIKEL_300X600_PREMIUM" : 900255,
	"AUTOWERELD.COM_MOB_HOME_320X240_MID" : 900256,
	"AUTOWERELD.COM_WEB_HOME_728X90_REGULIER" : 900257,
	"AUTOWERELD.COM_WEB_HOME_970X250_PREMIUM" : 900258,
	"AUTOWERELD.COM_WEB_ARTIKEL_728X90_REGULIER" : 900259,
	"AUTOWERELD.COM_WEB_ARTIKEL_970X250_PREMIUM" : 900260,
	"AUTOWERELD.NL_MOB_BEDRIJF_LIST_320X240_DOWN" : 900261,
	"AUTOWERELD.NL_MOB_BEDRIJF_LIST_320X240_MID" : 900262,
	"AUTOWERELD.NL_MOB_BEDRIJVEN_320X240_TOP" : 900263,
	"AUTOWERELD.NL_MOB_FOTO_320X240_DOWN" : 900264,
	"AUTOWERELD.NL_MOB_KENTEKENMERK_DETAIL_320X240_PREMIUM" : 900265,
	"AUTOWERELD.NL_MOB_LIST_320X240_DOWN" : 900266,
	"AUTOWERELD.NL_WEB_BEDRIJF_LIST_728X90_TOP_PREMIUM" : 900267,
	"AUTOWERELD.NL_MOB_FOTO_320X240_TOP" : 900268,
	"AUTOWERELD.NL_MOB_LIST_320X240_MID" : 900269,
	"AUTOWERELD.NL_WEB_BEDRIJFSPAGINA_300X600_PREMIUM" : 900270,
	"AUTOWERELD.NL_WEB_BEDRIJF_LIST_300X600_PREMIUM" : 900271,
	"AUTOWERELD.NL_WEB_BEDRIJFSPAGINA_728X90_PREMIUM" : 900272,
	"AUTOWERELD.NL_WEB_BEDRIJVEN_728X90_TOP_PREMIUM" : 900273,
	"AUTOWERELD.NL_WEB_DETAIL_970X250_PREMIUM" : 900274,
	"AUTOWERELD.NL_WEB_BEDRIJVEN_728X90_DOWN_REGULIER" : 900275,
	"AUTOWERELD.NL_WEB_FOTO_728X90_DOWN_REGULIER" : 900276,
	"AUTOWERELD.NL_WEB_FOTO_728X90_MID_PREMIUM" : 900277,
	"AUTOWERELD.NL_WEB_FOTO_728X90_TOP_PREMIUM" : 900278,
	"AUTOWERELD.NL_WEB_FOTO_970X250_PREMIUM" : 900279,
	"AUTOWERELD.NL_WEB_HOME_970X250_PREMIUM" : 900280,
	"AUTOWERELD.NL_WEB_KENTEKENINFO_970X250_PREMIUM" : 900281,
	"AUTOWERELD.NL_WEB_KENTEKENMERK_336X280_PREMIUM" : 900282,
	"AUTOWERELD.NL_WEB_KENTEKENMERK_DETAIL_300X600_PREMIUM" : 900283,
	"AUTOWERELD.NL_WEB_LIST_728X90_DOWN_REGULIER" : 900284,
	"AUTOWERELD.NL_WEB_LIST_728X90_MID_PREMIUM" : 900285,
	"AUTOWERELD.NL_WEB_LIST_970X250_TOP_PREMIUM" : 900286,
	"AUTOWERELD.NL_WEB_LIST_728X90_TOP_PREMIUM" : 900287,
	"AUTOWIKI.NL_WEB_PAGINA_336X280_PREMIUM" : 900288,
	"AUTOWIKI.NL_WEB_PAGINA_728X90_PREMIUM" : 900289,
	"BEAUTYSCENE.NL_MOB_HOME_320X240_MID" : 900290,
	"BEAUTYSCENE.NL_MOB_ARTIKEL_320X240_TOP" : 900291,
	"BEAUTYSCENE.NL_WEB_HOME_970X250_PREMIUM" : 900292,
	"BIKERBOOK.NL_MOB_ARTIKEL_320X240_MID" : 900293,
	"BIKERBOOK.NL_MOB_ARTIKEL_320X240_TOP" : 900294,
	"BIKERBOOK.NL_WEB_ARTIKEL_728X90" : 900295,
	"BIKERBOOK.NL_WEB_ARTIKEL_300X600" : 900296,
	"BIKERBOOK.NL_WEB_ARTIKEL_970X250" : 900297,
	"BYARANKA.NL_MOB_HOME_320X240_TOP" : 900298,
	"BYARANKA.NL_MOB_HOME_320X240_MID" : 900299,
	"BYARANKA.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900300,
	"BYARANKA.NL_WEB_ARTIKEL_336X280_PREMIUM_DOWN" : 900301,
	"BYARANKA.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900302,
	"BYARANKA.NL_WEB_HOME_970X250_PREMIUM" : 900303,
	"CALLY.COM_MOB_DATE_SET_320X240_TOP" : 900304,
	"CALLY.COM_MOB_EVENT_320X240_MID" : 900305,
	"CALLY.COM_MOB_EVENT_320X240_TOP" : 900306,
	"CALLY.COM_MOB_EVENT_AVAILABILITY_320X240_MID" : 900307,
	"CALLY.COM_MOB_EVENT_CREATED_320X240_TOP" : 900308,
	"CALLY.COM_MOB_EVENT_AVAILABILITY_320X240_TOP" : 900309,
	"CALLY.COM_MOB_EVENT_LIST_320X240_TOP" : 900310,
	"CALLY.COM_WEB_DATE_SET_970X250_PREMIUM" : 900311,
	"CALLY.COM_WEB_EVENT_300X600_PREMIUM" : 900312,
	"CALLY.COM_WEB_EVENT_970X250_PREMIUM" : 900313,
	"CALLY.COM_WEB_EVENT_970X250_PREMIUM_DOWN" : 900314,
	"CALLY.COM_WEB_EVENT_AVAILABILITY_300X600_PREMIUM" : 900315,
	"CALLY.COM_WEB_EVENT_AVAILABILITY_970X250_PREMIUM" : 900316,
	"CALLY.COM_WEB_EVENT_CREATED_300X600_PREMIUM" : 900317,
	"CALLY.COM_WEB_EVENT_CREATED_970X250_PREMIUM" : 900318,
	"CALLY.COM_WEB_EVENT_LIST_300X600_PREMIUM" : 900319,
	"CLUBVANRELAXTEMOEDERS.NL_MOB_PAGINA_320X240_MID" : 900320,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_ARTIKEL_300X600_DOWN" : 900321,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_ARTIKEL_300X600_MID" : 900322,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_ARTIKEL_300X600_TOP" : 900323,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_PAGINA_300X600_MID" : 900324,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_PAGINA_300X600_DOWN" : 900325,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_PAGINA_300X600_TOP" : 900326,
	"CLUBVANRELAXTEMOEDERS.NL_WEB_PAGINA_970X250_PREMIUM" : 900327,
	"DATUMPRIKKER.NL_MOB_DATE_SET_320X240_TOP" : 900328,
	"DATUMPRIKKER.NL_MOB_EVENT_320X240_MID" : 900329,
	"DATUMPRIKKER.NL_MOB_EVENT_320X240_TOP" : 900330,
	"DATUMPRIKKER.NL_MOB_EVENT_AVAILABILITY_320X240_MID" : 900331,
	"DATUMPRIKKER.NL_MOB_EVENT_AVAILABILITY_320X240_TOP" : 900332,
	"DATUMPRIKKER.NL_MOB_EVENT_CREATED_320X240_TOP" : 900333,
	"DATUMPRIKKER.NL_WEB_DATE_SET_970X250_PREMIUM" : 900334,
	"DATUMPRIKKER.NL_WEB_EVENT_300X600_PREMIUM" : 900335,
	"DATUMPRIKKER.NL_WEB_EVENT_970X250_PREMIUM" : 900336,
	"DATUMPRIKKER.NL_WEB_EVENT_970X250_PREMIUM_DOWN" : 900337,
	"DATUMPRIKKER.NL_WEB_EVENT_AVAILABILITY_300X600_PREMIUM" : 900338,
	"DATUMPRIKKER.NL_WEB_EVENT_AVAILABILITY_970X250_PREMIUM" : 900339,
	"DATUMPRIKKER.NL_WEB_EVENT_CREATED_970X250_PREMIUM" : 900340,
	"DATUMPRIKKER.NL_WEB_EVENT_LIST_300X600_PREMIUM" : 900341,
	"DUTCHCOWBOYS.NL_MOB_ROS_320X240_MID" : 900342,
	"DUTCHCOWBOYS.NL_MOB_ROS_320X240_TOP" : 900343,
	"DUTCHCOWBOYS.NL_WEB_ROS_300X600_PREMIUM" : 900344,
	"DUTCHCOWBOYS.NL_WEB_ROS_970X250_PREMIUM" : 900345,
	"DUTCHCOWBOYS.NL_WEB_ROS_970X250_PREMIUM_MID" : 900346,
	"ELISEJOANNE.NL_WEB_ARTIKEL_300X600_DOWN" : 900347,
	"ELISEJOANNE.NL_WEB_ARTIKEL_300X600_MID" : 900348,
	"ELISEJOANNE.NL_WEB_ARTIKEL_300X600_TOP" : 900349,
	"ELISEJOANNE.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900350,
	"ELISEJOANNE.NL_WEB_PAGINA_300X600_DOWN" : 900351,
	"ELISEJOANNE.NL_WEB_PAGINA_300X600_TOP" : 900352,
	"FALDER.NL_MOB_ARTIKEL_320X240_MID" : 900353,
	"ELISEJOANNE.NL_WEB_PAGINA_970X250_PREMIUM" : 900354,
	"FALDER.NL_MOB_ARTIKEL_320X240_TOP" : 900355,
	"FALDER.NL_WEB_ARTIKEL_728X90_REGULIER" : 900356,
	"FALDER.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900357,
	"FCUPDATE_MOB_ARTIKEL_320X240_TOP" : 900358,
	"FCUPDATE_MOB_ARTIKEL_320X240_MID" : 900359,
	"FCUPDATE_MOB_PAGINA_320X240_TOP" : 900360,
	"FCUPDATE_MOB_PAGINA_320X240_MID" : 900361,
	"FCUPDATE_WEB_ARTIKEL_300X600_PREMIUM" : 900362,
	"FCUPDATE_WEB_ARTIKEL_336X280_REGULIER" : 900363,
	"FCUPDATE_WEB_ARTIKEL_728X90_ONDER_CONTENT_PREMIUM" : 900364,
	"FCUPDATE_WEB_ARTIKEL_728X90_REGULIER" : 900365,
	"FCUPDATE_WEB_ARTIKEL_970X250_PREMIUM" : 900366,
	"FCUPDATE_WEB_PAGINA_300X600_PREMIUM" : 900367,
	"FCUPDATE_WEB_PAGINA_336X280_REGULIER" : 900368,
	"FCUPDATE_WEB_PAGINA_728X90_ONDER_CONTENT_PREMIUM" : 900369,
	"FCUPDATE_WEB_PAGINA_970X250_PREMIUM" : 900370,
	"FHM.NL_WEB_ROS_300X600_PREMIUM" : 900374,
	"FHM.NL_WEB_ROS_970X250_PREMIUM" : 900376,
	"FINNIK.NL_MOB_AUTORAPPORT_DOWN" : 900377,
	"FINNIK.NL_MOB_AUTORAPPORT_MID" : 900378,
	"FINNIK.NL_MOB_AUTORAPPORT_TOP" : 900379,
	"FINNIK.NL_WEB_AUTORAPPORT_728X90_DOWN_LAZY_PREMIUM" : 900380,
	"FINNIK.NL_WEB_AUTORAPPORT_728X90_DOWN_REGULIER" : 900381,
	"FINNIK.NL_WEB_AUTORAPPORT_728X90_MID_PREMIUM" : 900382,
	"FINNIK.NL_WEB_AUTORAPPORT_970X250_TOP_PREMIUM" : 900383,
	"FRESHHH.NL_MOB_PAGINA_320X240_MID" : 900384,
	"FRESHHH.NL_WEB_PAGINA_970X250_PREMIUM" : 900385,
	"FRESHHH.NL_MOB_PAGINA_320X240_TOP" : 900386,
	"GASPEDAAL.NL_MOB_LIST_320X240_TOP" : 900387,
	"GASPEDAAL.NL_MOB_LIST_320X240_MID" : 900388,
	"GASPEDAAL.NL_WEB_LIST_728X90_BOVEN" : 900389,
	"GASPEDAAL.NL_WEB_LIST_728X90_TUSSEN_23" : 900390,
	"GASPEDAAL.NL_WEB_LIST_728X90_TUSSEN_16" : 900391,
	"GASPEDAAL.NL_WEB_LIST_970X250_ONDER" : 900392,
	"GASPEDAAL.NL_WEB_LIST_728X90_TUSSEN_30" : 900393,
	"GASPEDAAL.NL_WEB_LIST_970X250_TUSSEN" : 900394,
	"GIRLSCENE.NL_MOB_PAGINA_320X240_MID" : 900395,
	"GIRLSCENE.NL_MOB_PAGINA_320X240_TOP" : 900396,
	"GIRLSCENE.NL_MOB_ARTIKEL_320X240_MID" : 900397,
	"GIRLSCENE.NL_WEB_ARTIKEL_300X600_DOWN" : 900398,
	"GIRLSCENE.NL_WEB_ARTIKEL_300X600_MID" : 900399,
	"GIRLSCENE.NL_WEB_ARTIKEL_300X600_TOP" : 900400,
	"GIRLSCENE.NL_WEB_HOROSCOOP_300X600_TOP" : 900401,
	"GIRLSCENE.NL_WEB_HOROSCOOP_970X250_PREMIUM" : 900402,
	"GIRLSCENE.NL_WEB_PAGINA_970X250_PREMIUM" : 900403,
	"GPTODAY.NET_MOB_ARTIKEL_320X240_TOP" : 900404,
	"GIRLSCENE.NL_WEB_PAGINA_970X250_REGULIER" : 900405,
	"GPTODAY.NET_WEB_ARTIKEL_300X600_PREMIUM_TOP" : 900406,
	"GPTODAY.NET_WEB_ARTIKEL_970X250_PREMIUM" : 900407,
	"GPTODAY.NET_MOB_HOME_320X240_MID" : 900408,
	"GPTODAY.NET_WEB_HOME_300X600_PREMIUM_TOP" : 900409,
	"GPTODAY.NET_WEB_ARTIKEL_336X280_PREMIUM" : 900410,
	"GPTODAY.NET_WEB_HOME_336X280_PREMIUM" : 900411,
	"GPTODAY.NET_WEB_HOME_970X250_PREMIUM" : 900412,
	"GPUPDATE_MOB_ARTIKEL_320X240_MID" : 900413,
	"GPUPDATE_MOB_ARTIKEL_320X240_TOP" : 900414,
	"GPUPDATE_MOB_PAGINA_320X240_MID" : 900415,
	"GPUPDATE_MOB_PAGINA_320X240_TOP" : 900416,
	"GPUPDATE_WEB_ARTIKEL_300X600_PREMIUM" : 900417,
	"GPUPDATE_WEB_ARTIKEL_728X90_ONDER_CONTENT_PREMIUM" : 900418,
	"GPUPDATE_WEB_ARTIKEL_336X280_REGULIER" : 900419,
	"GPUPDATE_WEB_ARTIKEL_728X90_REGULIER" : 900420,
	"GPUPDATE_WEB_ARTIKEL_970X250_PREMIUM" : 900421,
	"GPUPDATE_WEB_PAGINA_728X90_ONDER_CONTENT_PREMIUM" : 900422,
	"GPUPDATE_WEB_PAGINA_300X600_PREMIUM" : 900423,
	"GPUPDATE_WEB_PAGINA_336X280_REGULIER" : 900424,
	"GRANDPRIX33.NL_MOB_ROS_320X240_TOP" : 900425,
	"GRANDPRIX33.NL_WEB_ROS_300X600_PREMIUM" : 900426,
	"GPUPDATE_WEB_PAGINA_970X250_PREMIUM" : 900427,
	"GRANDPRIX33.NL_WEB_ROS_728X90_PREMIUM_DOWN" : 900428,
	"GRANDPRIX33.NL_WEB_ROS_728X90_PREMIUM" : 900429,
	"GRANDPRIX33.NL_WEB_ROS_970X250_PREMIUM" : 900430,
	"GROEN7.NL_MOB_PAGINA_DOWN" : 900431,
	"GROEN7.NL_MOB_PAGINA_TOP" : 900432,
	"GROEN7.NL_MOB_PAGINA_MID" : 900433,
	"GROEN7.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900434,
	"GROEN7.NL_WEB_ARTIKEL_336X280_REGULIER" : 900435,
	"GROEN7.NL_WEB_ARTIKEL_970X500_PREMIUM" : 900436,
	"GROEN7.NL_WEB_PAGINA_728X90_PREMIUM" : 900437,
	"GROEN7.NL_WEB_PAGINA_728X90_REGULIER" : 900438,
	"GROEN7.NL_WEB_PAGINA_970X500_PREMIUM" : 900439,
	"HERHEALTH.NL_MOB_ARTIKEL_320X240_MID" : 900440,
	"HERHEALTH.NL_MOB_PAGINA_320X240_MID" : 900441,
	"HERHEALTH.NL_WEB_ARTIKEL_300X600_MID" : 900442,
	"HERHEALTH.NL_WEB_ARTIKEL_300X600_DOWN" : 900443,
	"HERHEALTH.NL_WEB_PAGINA_300X600_DOWN" : 900444,
	"HERHEALTH.NL_WEB_ARTIKEL_300X600_TOP" : 900445,
	"HERHEALTH.NL_WEB_PAGINA_300X600_MID" : 900446,
	"HERHEALTH.NL_WEB_PAGINA_300X600_TOP" : 900447,
	"HERHEALTH.NL_WEB_PAGINA_970X250_PREMIUM" : 900448,
	"HORSES.NL_MOB_ARTIKEL_320X240_MID" : 900449,
	"HORSES.NL_MOB_PAGINA_320X240_TOP" : 900450,
	"HORSES.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900451,
	"HORSES.NL_WEB_PAGINA_336X280_PREMIUM" : 900452,
	"INDELEIDERSTRUI.NL_MOB_ARTIKEL_320X240_MID" : 900453,
	"INDELEIDERSTRUI.NL_MOB_PAGINA_320X240_MID" : 900454,
	"INDELEIDERSTRUI.NL_MOB_PAGINA_320X240_TOP" : 900455,
	"INDELEIDERSTRUI.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900456,
	"INDELEIDERSTRUI.NL_WEB_ARTIKEL_336X280_REGULIER" : 900457,
	"INDELEIDERSTRUI.NL_WEB_ARTIKEL_728X90_REGULIER" : 900458,
	"INDELEIDERSTRUI.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900459,
	"INDELEIDERSTRUI.NL_WEB_PAGINA_300X600_PREMIUM" : 900460,
	"INDELEIDERSTRUI.NL_WEB_PAGINA_336X280_REGULIER" : 900461,
	"INDELEIDERSTRUI.NL_WEB_PAGINA_970X250_PREMIUM" : 900462,
	"JUFMAIKE.NL_MOB_ARTIKEL_320X240_DOWN" : 900463,
	"JUFMAIKE.NL_MOB_ARTIKEL_320X240_MID" : 900464,
	"JUFMAIKE.NL_MOB_PAGINA_320X240_DOWN" : 900465,
	"JUFMAIKE.NL_WEB_ARTIKEL_300X600_MID" : 900466,
	"JUFMAIKE.NL_WEB_ARTIKEL_300X600_TOP" : 900467,
	"JUFMAIKE.NL_WEB_PAGINA_300X600_TOP" : 900468,
	"JUFMAIKE.NL_WEB_PAGINA_970X250_PREMIUM" : 900469,
	"KELLYCARESSE.NL_MOB_ARTIKEL_320X240_MID" : 900470,
	"KELLYCARESSE.NL_MOB_PAGINA_320X240_MID" : 900471,
	"KELLYCARESSE.NL_MOB_PAGINA_320X240_TOP" : 900472,
	"KELLYCARESSE.NL_WEB_ARTIKEL_300X600_DOWN" : 900473,
	"KELLYCARESSE.NL_WEB_ARTIKEL_300X600_MID" : 900474,
	"KELLYCARESSE.NL_WEB_ARTIKEL_300X600_TOP" : 900475,
	"KELLYCARESSE.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900476,
	"KELLYCARESSE.NL_WEB_PAGINA_970X250_PREMIUM" : 900477,
	"KINDERLIEDJES.INFO_MOB_ARTIKEL_320X240_MID" : 900478,
	"KINDERLIEDJES.INFO_MOB_PAGINA_320X240_MID" : 900479,
	"KINDERLIEDJES.INFO_WEB_ARTIKEL_300X600_TOP" : 900480,
	"KINDERLIEDJES.INFO_WEB_PAGINA_300X600_TOP" : 900481,
	"LADYLEMONADE.NL_MOB_HOME_320X240_DOWN" : 900482,
	"LADYLEMONADE.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900483,
	"LADYLEMONADE.NL_MOB_HOME_320X240_MID" : 900484,
	"LADYLEMONADE.NL_WEB_ARTIKEL_336X280_PREMIUM_DOWN" : 900485,
	"LADYLEMONADE.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900486,
	"LADYLEMONADE.NL_WEB_HOME_336X280_PREMIUM" : 900487,
	"LADYLEMONADE.NL_WEB_HOME_300X600_PREMIUM" : 900488,
	"LAVIESANNE.NL_MOB_PAGINA_320X240_MID" : 900489,
	"LADYLEMONADE.NL_WEB_HOME_970X250_PREMIUM" : 900490,
	"LAVIESANNE.NL_WEB_ARTIKEL_300X600_TOP" : 900491,
	"LAVIESANNE.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900492,
	"LAVIESANNE.NL_MOB_ARTIKEL_320X240_MID" : 900493,
	"LAVIESANNE.NL_WEB_PAGINA_300X600_MID" : 900494,
	"LAVIESANNE.NL_MOB_PAGINA_320X240_DOWN" : 900495,
	"LAVIESANNE.NL_WEB_PAGINA_300X600_TOP" : 900496,
	"LAVIESANNE.NL_MOB_PAGINA_320X240_TOP" : 900497,
	"LAVIESANNE.NL_WEB_ARTIKEL_300X600_MID" : 900498,
	"LAVIESANNE.NL_WEB_PAGINA_300X600_DOWN" : 900499,
	"LAVIESANNE.NL_WEB_PAGINA_970X250_PREMIUM" : 900500,
	"MANLY.NL_MOB_ROS_320X240_MID" : 900501,
	"MANLY.NL_WEB_ROS_970X250_PREMIUM" : 900502,
	"MANLY.NL_MOB_ROS_320X240_TOP" : 900503,
	"MANLY.NL_WEB_ROS_728X90_PREMIUM" : 900504,
	"MANNENZAKEN.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900505,
	"MANNENZAKEN.NL_MOB_PAGINA_320X240_TOP" : 900506,
	"MANNENZAKEN.NL_WEB_ARTIKEL_728X90_PREMIUM" : 900507,
	"MANNENZAKEN.NL_WEB_FORUM_300X600_PREMIUM" : 900508,
	"MANNENZAKEN.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900509,
	"MANNENZAKEN.NL_WEB_FORUM_336X280_PREMIUM" : 900510,
	"MANNENZAKEN.NL_WEB_FORUM_970X250_PREMIUM" : 900511,
	"MANNENZAKEN.NL_WEB_FORUM_728X90_PREMIUM" : 900512,
	"MANNENZAKEN.NL_WEB_PAGINA_970X250_PREMIUM" : 900513,
	"MANNENZAKEN.NL_WEB_FORUM_728X90_PREMIUM_DOWN" : 900514,
	"MNLX.NL_WEB_ROS_300X600_PREMIUM" : 900515,
	"MNLX.NL_WEB_ROS_970X250_PREMIUM" : 900516,
	"MNLX.NL_MOB_ROS_320X240_TOP" : 900517,
	"MOTORRAI.NL_MOB_ARTIKEL_320X240_DOWN" : 900518,
	"MOTORRAI.NL_MOB_ARTIKEL_320X240_MID" : 900519,
	"MOTORRAI.NL_MOB_PAGINA_320X240_TOP" : 900520,
	"MOTORRAI.NL_MOB_ARTIKEL_320X240_TOP" : 900521,
	"MOTORRAI.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900522,
	"MOTORRAI.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900523,
	"MOTORRAI.NL_WEB_ARTIKEL_728X90_REGULIER" : 900524,
	"MOTORRAI.NL_WEB_PAGINA_728X90_REGULIER" : 900525,
	"MOTORRAI.NL_WEB_PAGINA_336X280_PREMIUM" : 900526,
	"MOTORRAI.NL_WEB_PAGINA_728X90_REGULIER_BOTTOM" : 900527,
	"MYLAPS.COM_WEB_ROS_300X600_PREMIUM" : 900528,
	"MOTORRAI.NL_WEB_PAGINA_970X250_PREMIUM" : 900529,
	"MYLAPS.COM_WEB_ROS_970X250_PREMIUM" : 900530,
	"MYLAPS.COM_MOB_ROS_320X240_TOP" : 900531,
	"NEDERLANDMOBIEL.NL_MOB_ARTIKEL_320X240_MID" : 900532,
	"NEDERLANDMOBIEL.NL_MOB_PAGINA_320X240_DOWN" : 900533,
	"NEDERLANDMOBIEL.NL_MOB_PAGINA_320X240_MID" : 900534,
	"NEDERLANDMOBIEL.NL_MOB_PAGINA_320X240_TOP" : 900535,
	"NEDERLANDMOBIEL.NL_WEB_ARTIKEL_728X90_PREMIUM" : 900536,
	"NEDERLANDMOBIEL.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900537,
	"NEDERLANDMOBIEL.NL_WEB_PAGINA_728X90_PREMIUM_MID" : 900538,
	"NEDERLANDMOBIEL.NL_WEB_PAGINA_728X90_PREMIUM_DOWN" : 900539,
	"NEDERLANDMOBIEL.NL_WEB_PAGINA_728X90_PREMIUM_TOP" : 900540,
	"NEDERLANDMOBIEL.NL_WEB_PAGINA_970X250_PREMIUM" : 900541,
	"NEVEROFFSIDE.NL_MOB_ROS_320X240_MID" : 900542,
	"NEVEROFFSIDE.NL_WEB_ROS_728X90_PREMIUM" : 900543,
	"NEVEROFFSIDE.NL_WEB_ROS_300X600_PREMIUM" : 900544,
	"NIEUWNIEUWS.NL_WEB_PAGINA_728X90_PREMIUM" : 900545,
	"NL.MOTORSPORT.COM_MOB_ROS_300X250_DOWN" : 900546,
	"NL.MOTORSPORT.COM_MOB_ROS_320X100_TOP" : 900547,
	"NL.MOTORSPORT.COM_MOB_ROS_300X250_MID" : 900548,
	"NL.MOTORSPORT.COM_WEB_ROS_300X250" : 900549,
	"NL.MOTORSPORT.COM_WEB_ROS_300X250_2" : 900550,
	"NL.MOTORSPORT.COM_WEB_ROS_300X600" : 900551,
	"NL.MOTORSPORT.COM_WEB_ROS_300X600_2" : 900552,
	"NL.MOTORSPORT.COM_WEB_ROS_728X90" : 900553,
	"NL.MOTORSPORT.COM_WEB_ROS_970X250" : 900554,
	"OUDERSENZO.NL_WEB_ARTIKEL_300X600_DOWN" : 900555,
	"OUDERSENZO.NL_WEB_ARTIKEL_300X600_MID" : 900556,
	"OUDERSENZO.NL_WEB_ARTIKEL_300X600_TOP" : 900557,
	"PARRA.NU_MOB_ARTIKEL_320X240_DOWN" : 900558,
	"PARRA.NU_MOB_ARTIKEL_320X240_MID" : 900559,
	"PARRA.NU_MOB_ARTIKEL_320X240_TOP" : 900560,
	"PARRA.NU_MOB_PAGINA_320X240_MID" : 900561,
	"PARRA.NU_MOB_PAGINA_320X240_DOWN" : 900562,
	"PARRA.NU_MOB_PAGINA_320X240_TOP" : 900563,
	"PARRA.NU_WEB_ARTIKEL_1800X1000_PREMIUM" : 900564,
	"PARRA.NU_WEB_ARTIKEL_300X600_PREMIUM" : 900565,
	"PARRA.NU_WEB_ARTIKEL_728X90_PREMIUM_LOAD" : 900566,
	"PARRA.NU_WEB_PAGINA_1800X1000_PREMIUM" : 900567,
	"PROBLEMCAR.NL_MOB_ARTIKEL_320X240_DOWN" : 900568,
	"PROBLEMCAR.NL_MOB_PAGINA_320X240_DOWN" : 900569,
	"PROBLEMCAR.NL_MOB_ARTIKEL_320X240_TOP" : 900570,
	"PROBLEMCAR.NL_MOB_PAGINA_320X240_TOP" : 900571,
	"PROBLEMCAR.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900572,
	"PROBLEMCAR.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900573,
	"PROBLEMCAR.NL_WEB_PAGINA_300X600_PREMIUM" : 900574,
	"PROBLEMCAR.NL_WEB_ARTIKEL_728X90_PREMIUM" : 900575,
	"PROBLEMCAR.NL_WEB_PAGINA_728X90_PREMIUM" : 900576,
	"PROBLEMCAR.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900577,
	"PROBLEMCAR.NL_WEB_PAGINA_970X250_PREMIUM" : 900578,
	"RACINGNEWS365_MOB_ARTIKEL_320X240_TOP" : 900579,
	"RACINGNEWS365_MOB_PAGINA_320X240_MID" : 900580,
	"RACINGNEWS365_MOB_PAGINA_320X240_TOP" : 900581,
	"RACINGNEWS365_WEB_ARTIKEL_336X280_PREMIUM" : 900582,
	"RACINGNEWS365_WEB_ARTIKEL_300X600_PREMIUM" : 900583,
	"RACINGNEWS365_WEB_ARTIKEL_728X90_PREMIUM" : 900584,
	"RACINGNEWS365_WEB_ARTIKEL_728X90_PREMIUM_DOWN" : 900585,
	"RACINGNEWS365_WEB_PAGINA_728X90_PREMIUM" : 900586,
	"RACINGNEWS365_WEB_PAGINA_728X90_PREMIUM_DOWN" : 900587,
	"RACINGNEWS365_WEB_ARTIKEL_970X250_PREMIUM" : 900588,
	"RIJTESTEN.NL_MOB_ARTIKEL_320X240_TOP" : 900589,
	"RACINGNEWS365_WEB_PAGINA_970X250_PREMIUM" : 900590,
	"RIJTESTEN.NL_MOB_HOME_320X240_MID" : 900591,
	"RIJTESTEN.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900592,
	"RIJTESTEN.NL_WEB_ARTIKEL_728X90_REGULIER" : 900593,
	"RIJTESTEN.NL_WEB_HOME_970X250_PREMIUM" : 900594,
	"RIJTESTEN.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900595,
	"ROUTENET.NL_WEB_PAGINA_1800X1000_PREMIUM" : 900596,
	"ROUTENET.NL_WEB_PAGINA_970X500_PREMIUM" : 900597,
	"ROUTENET.NL_WEB_PAGINA_336X280_PREMIUM" : 900598,
	"SHOPGIDS.NL_MOB_ARTIKEL_320X240_MID" : 900599,
	"SHOPGIDS.NL_MOB_ARTIKEL_320X240_TOP" : 900600,
	"SHOPGIDS.NL_MOB_PAGINA_320X240_MID" : 900601,
	"SHOPGIDS.NL_MOB_PAGINA_320X240_DOWN" : 900602,
	"SHOPGIDS.NL_MOB_PAGINA_320X240_TOP" : 900603,
	"SHOPGIDS.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900604,
	"SHOPGIDS.NL_WEB_PAGINA_970X250_PREMIUM" : 900605,
	"SKOFTEN.NET_MOB_ARTIKEL_320X240_MID" : 900606,
	"SKOFTEN.NET_MOB_ARTIKEL_320X240_DOWN" : 900607,
	"SKOFTEN.NET_MOB_ARTIKEL_320X240_TOP" : 900608,
	"SKOFTEN.NET_MOB_GIRLS_320X240_DOWN" : 900609,
	"SKOFTEN.NET_MOB_GIRLS_320X240_TOP" : 900610,
	"SKOFTEN.NET_MOB_GIRLS_320X240_MID" : 900611,
	"SKOFTEN.NET_MOB_PAGINA_320X240_MID" : 900612,
	"SKOFTEN.NET_WEB_ARTIKEL_300X600_PREMIUM" : 900613,
	"SKOFTEN.NET_WEB_ARTIKEL_336X280_PREMIUM" : 900614,
	"SKOFTEN.NET_WEB_ARTIKEL_336X280_PREMIUM_DOWN" : 900615,
	"SKOFTEN.NET_WEB_ARTIKEL_336X280_PREMIUM_MID" : 900616,
	"SKOFTEN.NET_WEB_ARTIKEL_970X250_PREMIUM" : 900617,
	"SKOFTEN.NET_WEB_GIRLS_300X600_PREMIUM" : 900618,
	"SKOFTEN.NET_WEB_GIRLS_336X280_PREMIUM" : 900619,
	"SKOFTEN.NET_WEB_GIRLS_336X280_PREMIUM_MID" : 900620,
	"SKOFTEN.NET_WEB_GIRLS_336X280_PREMIUM_DOWN" : 900621,
	"SKOFTEN.NET_WEB_GIRLS_970X250_PREMIUM" : 900622,
	"SKOFTEN.NET_WEB_PAGINA_120X600_PREMIUM" : 900623,
	"SKOFTEN.NET_WEB_PAGINA_300X600_PREMIUM" : 900624,
	"SKOFTEN.NET_WEB_PAGINA_336X280_PREMIUM" : 900625,
	"SKOFTEN.NET_WEB_PAGINA_728X90_PREMIUM" : 900626,
	"SKOFTEN.NET_WEB_PAGINA_970X250_PREMIUM" : 900627,
	"SMULWEB.NL_MOB_CATEGORIE_320X240_TOP" : 900628,
	"SMULWEB.NL_MOB_RECEPTEN_320X240_TOP" : 900629,
	"SMULWEB.NL_WEB_CATEGORIE_300X600_TOP" : 900630,
	"SMULWEB.NL_WEB_CATEGORIE_300X600_DOWN" : 900631,
	"SMULWEB.NL_WEB_CATEGORIE_970X250" : 900632,
	"SMULWEB.NL_WEB_HOME_970X250_DOWN" : 900633,
	"SMULWEB.NL_WEB_RECEPTEN_300X600_TOP" : 900634,
	"SMULWEB.NL_WEB_RECEPTEN_970X250" : 900635,
	"TRENDALERT.NL_MOB_ARTIKEL_320X240_TOP" : 900636,
	"TRENDALERT.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900637,
	"VADERSENMOEDERS.NL_WEB_ARTIKEL_300X600_DOWN" : 900638,
	"VADERSENMOEDERS.NL_WEB_ARTIKEL_300X600_MID" : 900639,
	"VADERSENMOEDERS.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900640,
	"VADERSENMOEDERS.NL_WEB_ARTIKEL_300X600_TOP" : 900641,
	"VOETBAL.NL_WEB_PAGINA_300X600_PREMIUM" : 900642,
	"VOETBAL.NL_MOB_PAGINA_TOP" : 900643,
	"VOETBAL.NL_WEB_PAGINA_970X500_PREMIUM" : 900644,
	"VOETBALFLITSEN.NL_WEB_ROS_728X90_PREMIUM" : 900645,
	"VOETBALFLITSEN.BE_MOB_ROS_320X240_TOP" : 900646,
	"VOETBALFLITSEN.NL_MOB_ROS_320X240_TOP" : 900647,
	"WIELERFLITS.NL_MOB_ARTIKEL_320X240_DOWN" : 900648,
	"VOETBALFLITSEN.NL_MOB_SNOEPJES_320X240_TOP" : 900649,
	"WIELERFLITS.NL_MOB_ARTIKEL_320X240_MID" : 900650,
	"WIELERFLITS.NL_MOB_PAGINA_320X240_MID" : 900651,
	"VOETBALFLITSEN.NL_WEB_ROS_1800X1000_PREMIUM" : 900652,
	"WIELERFLITS.NL_MOB_PAGINA_320X240_TOP" : 900653,
	"WIELERFLITS.NL_WEB_ARTIKEL_300X600_PREMIUM" : 900654,
	"WIELERFLITS.NL_WEB_ARTIKEL_336X280_PREMIUM" : 900655,
	"WIELERFLITS.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900656,
	"WIELERFLITS.NL_WEB_PAGINA_728X90_PREMIUM" : 900657,
	"WIELERFLITS.NL_WEB_PAGINA_300X600_PREMIUM" : 900658,
	"WIELERFLITS.NL_WEB_PAGINA_970X250_PREMIUM" : 900659,
	"ZE.NL_WEB_ARTIKEL_300X600_DOWN" : 900660,
	"ZE.NL_WEB_ARTIKEL_300X600_MID" : 900661,
	"ZE.NL_WEB_ARTIKEL_300X600_TOP" : 900662,
	"ZERAUTO.NL_MOB_ARTIKEL_320X240_TOP" : 900663,
	"ZERAUTO.NL_MOB_ARTIKEL_320X240_DOWN" : 900664,
	"ZERAUTO.NL_MOB_PAGINA_320X240_DOWN" : 900665,
	"ZERAUTO.NL_MOB_ARTIKEL_320X240_MID" : 900666,
	"ZERAUTO.NL_WEB_ARTIKEL_728X90_REGULIER" : 900667,
	"ZERAUTO.NL_MOB_PAGINA_320X240_MID" : 900668,
	"ZERAUTO.NL_WEB_PAGINA_336X280_PREMIUM" : 900669,
	"ZERAUTO.NL_WEB_ARTIKEL_970X250_PREMIUM" : 900670,
	"ZERAUTO.NL_WEB_PAGINA_728X90_REGULIER_BOTTOM" : 900671,
	"ZERAUTO.NL_WEB_PAGINA_728X90_REGULIER" : 900672,
	"ZERAUTO.NL_WEB_PAGINA_970X250_PREMIUM" : 900673,
	"ABHD.NL_WEB_VIDEO_300X600_PREMIUM" : 900676,
	"ABHD.NL_WEB_VIDEO_728X90_PREMIUM" : 900677,
	"AUTOJUNK.NL_MOB_VIDEO_TOP" : 900678,
	"AUTOJUNK.NL_WEB_VIDEO_300X600_PREMIUM" : 900679,
	"AUTOJUNK.NL_WEB_VIDEO_970X500_PREMIUM" : 900680,
	"FCVIDEO.NL_MOB_320X240_VIDEO_TOP_PREMIUM" : 900681,
};

function decorateLog(args, prefix) {
    args = [args];
    prefix && args.unshift(prefix);
    args.unshift('display: inline-block; color: #fff; background: #ff0066; padding: 1px 4px; border-radius: 3px;');
    args.unshift('%cAdhese');
    return args;
};

AdheseGateway.logger = function(arguments) {
    if (AdheseGateway.debug) console.info.apply(console, decorateLog(arguments, 'DEBUG:'));
}

AdheseGateway.externalBidders = []

AdheseGateway.getScreenWidth = function() {
    AdheseGateway.logger('getScreenWidth');
    return Math.max(
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

AdheseGateway.getDeviceType = function(width) {
	var device = '';
	if (width < 769) {
        device = 'phone';
    } else if (width < 1025) {
        device = 'tablet';
    } else {
        device = 'desktop';
    }
    AdheseGateway.logger('Device:', device);
    return device;
}

AdheseAdUnit = function(path, width, height) {
    this.adUnitPath = path;
    this.sizes = [new this.Size(width, height)];
    return this;
};

AdheseAdUnit.prototype.getSizes = function() {
    return this.sizes;
};

AdheseAdUnit.prototype.Size = function(width, height) {
    this.width = width;
    this.height = height;
    return this;
};

AdheseAdUnit.prototype.Size.prototype.getWidth = function() {
    return this.width;
};

AdheseAdUnit.prototype.Size.prototype.getHeight = function() {
    return this.height;
};

AdheseAdUnit.prototype.getAdUnitPath = function(options) {
    return this.adUnitPath;
};

AdheseAdUnit.prototype.getAdUnitPath = function(options) {
    return this.adUnitPath;
};

AdheseGateway.ajax = {
    request: function(ops) {
        if (typeof ops == 'string') ops = {
            url: ops
        };
        ops.url = ops.url || '';
        ops.method = ops.method || 'get'
        ops.data = ops.data || {};
        if (typeof ops.encodeData == "undefined") {
            ops.encodeData = true;
        }
        var getParams = function(data, url) {
            var arr = [],
                str;
            for (var name in data) {
                arr.push(name + '=' + encodeURIComponent(data[name]));
            }
            str = arr.join('&');
            if (str != '') {
                return url ? (url.indexOf('?') < 0 ? '?' + str : '&' + str) : str;
            }
            return '';
        }
        var api = {
            host: {},
            process: function(ops) {
                var self = this;
                this.xhr = null;

                if (document.all && !window.atob) { // IE9 and older
                    try {
                        this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                        try {
                            this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {
                            this.xhr = false;
                        }
                    }
                } else {
                    try {
                        this.xhr = new XMLHttpRequest();
                    } catch (e) {
                        this.xhr = false;
                    }
                }

                if (this.xhr) {
                    if ("withCredentials" in this.xhr) {
                        this.xhr.withCredentials = true;
                    }
                    this.xhr.onreadystatechange = function() {
                        if (self.xhr.readyState == 4 && self.xhr.status == 200) {
                            var result = self.xhr.responseText;
                            if (ops.json === true && typeof JSON != 'undefined') {
                                if (result) {
                                    try {
                                        result = JSON.parse(result);
                                        self.doneCallback && self.doneCallback.apply(self.host, [result, self.xhr]);
                                    } catch (e) {
                                        self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: " + e]);
                                    }
                                } else {
                                    self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: Response is empty string"]);
                                }
                            }
                        } else if (self.xhr.readyState == 4) {
                            self.failCallback && self.failCallback.apply(self.host, [self.xhr]);
                        }
                        self.alwaysCallback && self.alwaysCallback.apply(self.host, [self.xhr]);
                    }
                }
                if (ops.method == 'get') {
                    this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
                } else {
                    this.xhr.open(ops.method, ops.url, true);
                    this.setHeaders({
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-type': 'application/x-www-form-urlencoded'
                    });
                }
                if (ops.headers && typeof ops.headers == 'object') {
                    this.setHeaders(ops.headers);
                }
                setTimeout(function() {
                    if (ops.method == 'get') {
                        self.xhr.send()
                    } else {
                        var data;
                        if (ops.encodeData) {
                            data = getParams(ops.data);
                        } else {
                            data = ops.data;
                        }
                        self.xhr.send(data);
                    }
                }, 20);
                return this;
            },
            done: function(callback) {
                this.doneCallback = callback;
                return this;
            },
            fail: function(callback) {
                this.failCallback = callback;
                return this;
            },
            always: function(callback) {
                this.alwaysCallback = callback;
                return this;
            },
            error: function(callback) {
                this.errorCallback = callback;
                return this;
            },
            setHeaders: function(headers) {
                for (var name in headers) {
                    this.xhr && this.xhr.setRequestHeader(name, headers[name]);
                }
            }
        }
        return api.process(ops);
    }
}

AdheseGateway.addTrackingPixel = function(uri) {
    AdheseGateway.logger('addTrackingPixel');
    var img = document.createElement('img');
    img.src = uri;
    img.style.height = "1px";
    img.style.width = "1px";
    img.style.margin = "-1px";
    img.style.border = "0";
    img.style.position = "absolute";
    img.style.top = "0";
    if (document.body) {
    	document.body.appendChild(img);
    } else {
	    setTimeout(function(){
	    	document.body.appendChild(img);
	    }, 500);
    }
};

AdheseGateway.appendSyncIframe = function(options) {
    AdheseGateway.logger('ADHESE: appendSyncIframe');
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("id", "sync_iframe_" + options.syncName);
    iframe.setAttribute("height", "0");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("marginwidth", "0");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("style", "border: 0px; display: none;");
    iframe.setAttribute("src", options.url);
    if (document.body) {
        document.body.appendChild(iframe);
    } else {
        //wait 1 sec and try again
        setTimeout(function() {
            if (document.body) {
                document.body.appendChild(iframe);
            }
        }, 1000);
    }
};

AdheseGateway.loadJSON = function(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
};

AdheseGateway.getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};


AdheseGateway.priceBucketConfig = {
    "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 2.50,
            "increment": 0.01
        },
        {
            "precision": 2,
            "min": 2.50,
            "max": 10,
            "increment": 0.10
        },
        {
            "precision": 2,
            "min": 10,
            "max": 20,
            "increment": 0.2
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 0.5
        }
    ]
};


AdheseGateway.syncUser = function(option) {
    AdheseGateway.logger('syncUser')
    AdheseGateway.appendSyncIframe({
        syncName: "mannenmedia",
        url: "https://user-sync.adhese.com/iframe/user_sync.html?account=mannenmedia"
    });
    AdheseGateway.syncImprove();
};

AdheseGateway.syncImprove = function(option) {
    AdheseGateway.logger('syncImprove')
    var response = AdheseGateway.ajax.request({
            url: "https://ad.360yield.com/add?jsonp=%7B%22bid_request%22%3A%7B%22id%22%3A%22adhese_user_sync%22%2C%22secure%22%3A1%2C%22version%22%3A%22DT-1.6.0-JS-5.1.1%22%2C%22gdpr%22%3A%221%22%2C%22imp%22%3A%5B%7B%22id%22%3A%22efg%22%2C%22pid%22%3A13317693%2C%22banner%22%3A%7B%7D%7D%5D%7D%7D",
            method: 'get',
            json: true
        })
        .done(function(result) {
            try {
                var syncUrls = result.bid[0].sync;
                for (var i in syncUrls) {
                    AdheseGateway.addTrackingPixel(result.bid[0].sync[i]);
                }
            } catch (e) {
                AdheseGateway.logger("Exception when syncing Improve users");
                console.log(result);
            }
        });
};

AdheseGateway.isArticleForContextSync = false;

AdheseGateway.syncContext = function(option) {
    if (AdheseGateway.isArticleForContextSync) {
        AdheseGateway.logger("ADHESE: connect to weborama and send context");
        AdheseGateway.logger("ADHESE: context sync url: " + "https://ads-mannenmedia.adhese.com/usersync/reverse-sync?url=" + encodeURIComponent("https://dx.frontend.weborama.com/collect?dsp_id=7&eid={ADHESE_USER_ID}&touchpoint=46&url=" + encodeURIComponent(location.href)));
        AdheseGateway.addTrackingPixel("https://ads-mannenmedia.adhese.com/usersync/reverse-sync?url=" + encodeURIComponent("https://dx.frontend.weborama.com/collect?dsp_id=7&eid={ADHESE_USER_ID}&touchpoint=46&url=" + encodeURIComponent(location.href)));
    }
};

AdheseGateway.syncDigitalAudience = function() {
	AdheseGateway.logger('syncDigitalAudience()')
    //assign pixel url's to categories
    var daCategories = {
        'Automotive': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/26_',
        'Automotive occasion': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/27_',
        'Man lifestyle': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/28_',
        'Tech': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/29_',
        'Sport': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/30_',
        'Formule 1': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/31_',
        'Vrouw sport': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/32_',
        'Vrouw lifestyle': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/33_',
        'Gezin': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/34_'
    };

    //assign categories to sites
    var siteToCategory = {
        'Automotive': 'www.autowereld.com www.autoblog.nl www.groen7.nl www.autojunk.nl www.problemcar.nl www.autorai.nl www.bikerbook.nl www.finnik.nl www.zerauto.nl www.motorrai.nl www.rijtesten.nl www.routenet.nl',
        'Automotive occasion': 'www.autowereld.nl www.gaspedaal.nl www.autotrack.nl www.nederlandmobiel.nl www.autovooru.nl',
        'Man lifestyle': 'www.dailybase.nl www.datumprikker.nl www.dutchcowboys.nl www.falder.nl www.fhm.nl www.geenstijl.nl www.mannenzaken.nl www.mxxl.nl www.manly.nl www.skoften.net www.parra.nu',
        'Tech': 'www.apparata.nl',
        'Sport': 'www.voetbalflitsen.nl www.fcupdate.net www.voetbal.nl www.indeleiderstrui.nl www.wielerflits.nl',
        'Formule 1': 'www.gpupdate.net www.nl.motorsport.com www.racingnews365.nl www.gptoday.net www.gp33.nl',
        'Vrouw sport': '',
        'Vrouw lifestyle': '',
        'Gezin': ''
    }

    var siteUrl = window.location.hostname;
    var daUrl;
    var category;
    var keywords;

    for (var prop in siteToCategory) { //find out to which category a site belongs
        if (siteToCategory[prop].includes(siteUrl)) {
            daUrl = daCategories[prop] //pick up the right url
            category = prop;
        }
    }

    //categories where keyword = content, assign keywords to url
    if (category == 'Automotive occasion') {
        var content = googletag.pubads().getTargeting('auto_merk');
        var keywords = content.join('_');
        if (keywords && daUrl) daUrl += keywords;
        //categories where keyword = auto_merk
    } else {
        var content = googletag.pubads().getTargeting('content');
        var keywords = content.join('_');
        if (keywords && daUrl) {
        	console.log('found ', keywords, daUrl)
        	daUrl += keywords;
        }
    }

    var dat = document.getElementById('dasynctag'); //if sync pixel is already loaded, remove it
    if (dat) {
        dat.remove();
    };
if (category && daUrl) {    
    var sa = document.createElement('img');
    sa.id = 'dasynctag';
    sa.src = daUrl;
    sa.style.height = '1px';
    sa.style.width = '1px';
    sa.style.display = 'none';
    console.log(category,daUrl)
      document.body.appendChild(sa)
    } 
};

AdheseGateway.adheseScreenWidth = 0;

AdheseGateway.defineAdUnits = function() {
    AdheseGateway.logger('ADHESE: defineAdUnits');
    AdheseGateway.adheseScreenWidth = AdheseGateway.getScreenWidth();

    if (AdheseGateway.consentForAds) {
        AdheseGateway.syncUser();
        setTimeout(AdheseGateway.syncDigitalAudience, 2000);
    }

    try {
        AdheseGateway.definedSlots = googletag.slot_manager_instance.m;
        if (definedSlots) AdheseGateway.createAdUnits();
    } catch (e) {
        AdheseGateway.logger("Trying to create slots using gptadslots");
        try {
            for (var i = 0; i < gptadslots.length; i++) {
                if (gptadslots[i]) {
                    if (!AdheseGateway.definedSlots) AdheseGateway.definedSlots = new Object();
                    AdheseGateway.definedSlots[gptadslots[i].getAdUnitPath()] = [gptadslots[i]];
                }
            }
            if (AdheseGateway.definedSlots) {
            	AdheseGateway.logger('gptadslots found')
                AdheseGateway.createAdUnits();
            }
        } catch (e) {
            if (AdheseGateway.debug) console.log(e);
            try {
                AdheseGateway.logger('Failed to find gptadslots, try again based on googletag.pubads().getSlots()');
                setTimeout(function() {
                    gptadslots = googletag.pubads().getSlots();
                    for (var i = 0; i < gptadslots.length; i++) {
                        if (gptadslots[i]) {
                            if (!AdheseGateway.definedSlots) AdheseGateway.definedSlots = new Object();
                            AdheseGateway.definedSlots[gptadslots[i].getAdUnitPath()] = [gptadslots[i]];
                        }
                    }
                    if (AdheseGateway.definedSlots) {
                        AdheseGateway.logger('googletag.pubads.getSlots() found');
                        AdheseGateway.createAdUnits();
                    }
                }, 5);
            } catch (e) {
                if (AdheseGateway.debug) console.log(e);
            }
        }
    }
}

AdheseGateway.defineInfiniteScrollAdUnits = function(slots) {
	AdheseGateway.infiniteScroll = true;
    AdheseGateway.logger('ADHESE: defineInfiniteScrollAdUnits');
    AdheseGateway.adheseScreenWidth = AdheseGateway.getScreenWidth();
    AdheseGateway.adUnits = [];
    pbjs.adUnits = [];
    pbjs.initAdserverSet = false;
    AdheseGateway.definedSlots = {}; 
    AdheseGateway.infiniteScrollSlots = slots;

    AdheseGateway.logger("Creating infinite scroll slots");
    for (var i = 0; i < AdheseGateway.infiniteScrollSlots.length; i++) {
        if (AdheseGateway.infiniteScrollSlots[i]) {
            if (!AdheseGateway.definedSlots) AdheseGateway.definedSlots = new Object();
            AdheseGateway.definedSlots[gptadslots[i].getAdUnitPath()] = [AdheseGateway.infiniteScrollSlots[i]];
        }
    }
    if (AdheseGateway.definedSlots) {
        AdheseGateway.createAdUnits();
    }
}

AdheseGateway.chooseAdserver = function () {
    AdheseGateway.logger('chooseAdserver() initializing' + AdheseGateway.adServer);
    if (AdheseGateway.adServer == 'google') {
        pbjs.que.push(function() {
            pbjs.requestBids({
                bidsBackHandler: AdheseGateway.initGoogle,
                timeout: AdheseGateway.PREBID_TIMEOUT
            });
        });
    } else {
        AdheseGateway.initAdhese(AdheseGateway.adheseSlots);
    }
};

AdheseGateway.createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    AdheseGateway.logger('ADHESE: createPrebidAdunitFromSlot' + slot);

    //determine size for adhese format
    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    if (sizeFromAdunit[0].length > 5) {
        var sizeToFix = sizeFromAdunit[0].split('_');
        sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1]
    }

    if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = [320, 240];
    } else {
    	if (isNaN(sizeFromAdunit[0]) && AdheseGateway.getDeviceType() == 'phone') {
    		AdheseGateway.logger('sizeFromAdunit ' + sizeFromAdunit[0] + ' found, which is not a number, replacing size by' + '320x240');
    		sizeFromAdunit = [320, 240];
    	}
    };

    //try to determine sizes for prebid based on dfp sizes. 
    var sizes = [];
    var googleSizes = slot.getSizes();
    for (var i = 0; i < googleSizes.length; i++) {
        if (typeof googleSizes[i]['l'] == 'number' && typeof googleSizes[i]['j'] == 'number') {
            sizes.push([googleSizes[i]['l'], googleSizes[i]['j']])
        } else {
            sizes = [1,1];
        }
    }

    var loc = (slot.getAdUnitPath().replace(/\//g, '_') + '_').toUpperCase();
    var format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
    var prebidSize = [parseInt(sizeFromAdunit[0]), parseInt(sizeFromAdunit[1])]
    if (sizeFromAdunit.length > 1) {
        var prebidSlotCode = slot.getSlotElementId();
        var o = {
            code: prebidSlotCode,
            mediaTypes: {
                banner: {
                    sizes: sizes
                }
            },
            bids: [
                {
                    bidder: 'adhese',
                    params: {
                        account: 'mannenmedia',
                        location: loc,
                        format: format,
                        data: {
                            'dt': ['desktop'],
                            'tl': [tlParam],
                            'xi': [xiParam],
                            'dt': [AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth())]
                        }
                    }
                }
            ]
        }

        for (var c = 0; c < customParam.length; c++) {
            o.bids[0].params.data[customParam[c][0]] = [customParam[c][1]];
        }
        if (loc.includes('_970X250_PREMIUM_') && !AdheseGateway.roadblockSlotAdded && !loc.includes('_MID_') && !loc.includes('_DOWN_')) {
        	var roadblockparams = {
                bidder: 'adhese',
                params: {
                    account: 'mannenmedia',
                    location: loc,
                    format: 'ROADBLOCK',
                    data: {
                        'dt': ['desktop'],
                        'tl': [tlParam],
                        'xi': [xiParam],
                        'dt': [AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth())]
                    }
                }
            }
        	o.bids.push(roadblockparams);
        	AdheseGateway.roadblockSlotAdded = true;
        }
        try {
	        var dfpId = slot.getAdUnitPath().split('/')[3].toUpperCase();
	        var adformId = AdheseGateway.adformIdentifiers[dfpId];
	        if (adformId && sizes) {
	        	var adformParams = {
	        		bidder: 'adform',
	        		params: {
	        			mid: adformId
	        		}
	        	}
	        	//o.bids.push(adformParams);
	        	//AdheseGateway.logger('Added adform id ' + adformId + ' to adUnit' + dfpId);
	        }
        } catch (e) {
        	AdheseGateway.logger(e)
        }
        adUnits.push(o);
    }
    return adUnits;
}


AdheseGateway.createAdheseGatewaySlots = function (slot, adheseSlots, xtParam, tlParam, customParam) {
    var location = (slot.getAdUnitPath().replace(/\//g, '_') + '_').toUpperCase();

    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    if (sizeFromAdunit[0].length > 5) {
        var sizeToFix = sizeFromAdunit[0].split('_');
        sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1]
    }

    if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = [320, 240];
    } else {
    	if (isNaN(sizeFromAdunit[0]) && AdheseGateway.getDeviceType() == 'phone') {
    		AdheseGateway.logger('sizeFromAdunit ' + sizeFromAdunit[0] + ' found, which is not a number, replacing size by' + '320x240');
    		sizeFromAdunit = [320, 240];
    	}
    };

    var format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
    var containerId = slot.getSlotElementId();
    var lazyLoaded = true; 

    var o = {
        location: location,
        format: format,
        containerId: containerId,
        lazyLoaded: lazyLoaded
    };

    AdheseGateway.logger('CreateAdheseGatewaySlot pushing slot params:');
    AdheseGateway.logger(o);
    adheseSlots.push(o);

    return adheseSlots;
};




AdheseGateway.createAdUnits = function() {
    AdheseGateway.logger('createAdUnits');

    var xiParam = '';
    var xtParam = '';
    var tlParam = 'none';

    var targetConfig = [
        ['ab', 'auto_bmin'],
        ['ar', 'auto_brnst'],
        ['am', 'auto_merk'],
        ['ao', 'auto_model'],
        ['at', 'auto_trns'],
        ['ct', 'content'],
        ['ac', 'D_CITY'],
        ['cn', 'D_CNTRY'],
        ['ad', 'LOC_CITY'],
        ['cd', 'LOC_CNTRY'],
        ['pc', 'prijscat'],
        ['cv', 'VEH']
    ];


    try {
        var contentTargets = googletag.pubads().getTargeting('content');
        for (var i = 0; i < contentTargets.length; i++) {
            if (xiParam.length > 0) xiParam += ';';
            xiParam += 'content;' + contentTargets[i];
        }
    } catch (e) {}

    try {
        var iabTargets = googletag.pubads().getTargeting('iab_string');
        for (var i = 0; i < iabTargets.length; i++) {
            xtParam = iabTargets[i];
        }
    } catch (e) {}

    try {
        if (AdheseGateway.consentForAds) tlParam = 'all';
    } catch (e) {
        AdheseGateway.logger("ADHESE: no consent defined for dfp")
        tlParam = 'all';
    }

    try {
        for (var t = 0; t < targetConfig.length; t++) {
            var prefix = targetConfig[t][0];
            var keyword = targetConfig[t][1];
            var target = googletag.pubads().getTargeting(keyword);
            if (target.length < 1) {
            	try {
            		//if targeting can not be found on page level, check if it's set on slot level 
            		target = googletag.pubads().getSlots()[0].getTargeting(keyword);
            	} catch (e) {}
            }
            var value = '';
            for (var i = 0; i < target.length; i++) {
                if (value.length > 0) value += ',';
                value += target[i];
            }
            if (value.length > 0) AdheseGateway.targetArray.push([prefix, value]);
        }
    } catch (e) {}

    if (window.location.href.includes('roadblockDemo')) {
    	AdheseGateway.targetArray.push(['ge', '1'])
    }

    if (AdheseGateway.definedSlots) {

        var ignoreFilter = ['_NATIVE', '_OUTSTREAM', '_PREROLL', '_BLOCK', '_3X3', '_1X1', '2785365'];
        var regexIgnore = new RegExp(ignoreFilter.join("|"), "i");
        var regexWeb = new RegExp("_WEB_", "i");
        var regexMob = new RegExp("_MOB_", "i");
        var regexArticle = new RegExp("ARTIKEL", "i");
        for (var prop in AdheseGateway.definedSlots) {
            prop.toUpperCase();
            if (regexArticle.test(prop) && !AdheseGateway.isArticleForContextSync) {
                AdheseGateway.isArticleForContextSync = true;
            }
            if (!regexIgnore.test(prop)) {
                if (AdheseGateway.adheseScreenWidth > 768 && regexWeb.test(prop)) {
                    AdheseGateway.logger('Gateway added web slot: ' + prop);
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                } else if (AdheseGateway.adheseScreenWidth < 769 && regexMob.test(prop)) {
                    AdheseGateway.logger('Gateway added mobile slot: ' + prop);
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                } else if (!regexWeb.test(prop) && !regexMob.test(prop)) {
                    AdheseGateway.logger('Gateway added backup slot: ' + prop)
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                	AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                }
            } else {
                AdheseGateway.logger("ignore regex for slot: " + prop + " - " + regexIgnore.test(prop));
            }
        }
        if (AdheseGateway.consentForAds) {
        AdheseGateway.syncContext();
  		}
    }

    AdheseGateway.SETCONFIG = {
        consentManagement: {
            cmpApi: 'iab',
            timeout: 3000,
            allowAuctionWithoutConsent: true
        },
        bidderSequence: "random",
        bidderTimeout: AdheseGateway.PREBID_TIMEOUT,
        priceGranularity: AdheseGateway.priceBucketConfig,
        userSync: {
            userIds: [{
                name: "id5Id",
                params: {
                    partner: 235 // change to the Partner Number you received from ID5
                },
                storage: {
                    type: "cookie",
                    name: "pbjs-id5id", // create a cookie with this name
                    expires: 90, // cookie lasts for 90 days
                    refreshInSeconds: 8 * 3600 // refresh ID every 8 hours to ensure it is fresh
                }
            }],
            syncDelay: 2000,
            syncEnabled: true,
            syncsPerBidder: 3,
            filterSettings: {
                iframe: {
                    bidders: ['adform'], // '*' means all bidders
                    filter: 'include'
                }, image: {
                	bidders: ['adform'],
                	filter: 'include'
                }
            },
        },
        currency: {
            "adServerCurrency": "EUR",
        },
        refererInfo: {
            referer: AdheseGateway.prebidRefererUrl
        }
    }
    if (AdheseGateway.debug) {
    	AdheseGateway.SETCONFIG.debug = true;
    } 

    pbjs.bidderSettings = {
        adhese: {
            bidCpmAdjustment: function(bidCpm, bid) {

                AdheseGateway.logger('Gateway bid received', bid);
                if (bid.width == '666' && bid.height == '150') {
                	AdheseGateway.logger('Found roadblock! Serving companion creatives and cancelling all other bids.')
                	googletag.cmd.push(function() {
                		googletag.pubads().setTargeting('hb_roadblock', ['true']);
                	});
                };

                var appnexusDealId;
                if (bid.dealId) {
                    appnexusDealId = bid.dealId;
                };

                var ghgDeals = {
                    priority: [688836, 688839, 688855, 688862, 689024, 688873, 688875, 688860, 688852, 688844, 688866, 688835, 688837, 688853, 688856, 688868, 688871, 688874, 688858, 688848, 688841, 688865, 687920, 688826, 687923, 688806, 687925, 688833, 688822, 688809, 688803, 687927, 688816, 687922, 688830, 687924, 688808, 687926, 688834, 688824, 688812, 688800, 687928, 688818],
                    superPriority: [688900, 688902, 688908, 688912, 688919, 688922, 688924, 688911, 688906, 688904, 688917, 688899, 688901, 688907, 688909, 688918, 688921, 688923, 688910, 688905, 688903, 688915, 688876, 688895, 688878, 688887, 688880, 688897, 688893, 688889, 688886, 688883, 688891, 688877, 688896, 688879, 688888, 688882, 688898, 688894, 688890, 688885, 688884, 688892],
                    reachFrequency: [688992, 688994, 689002, 689007, 689014, 689019, 689022, 689006, 689000, 688997, 689011, 688990, 688993, 689001, 689004, 689012, 689016, 689020, 689005, 688999, 688996, 689009, 688939, 688985, 688950, 688972, 688953, 688987, 689030, 688975, 688970, 688960, 688979, 688944, 688986, 688951, 688974, 688954, 688989, 688984, 688978, 688963, 688961, 688980]
                };

                if (ghgDeals.priority.includes(appnexusDealId)) {
                    AdheseGateway.logger('Found TMP priority deal ' + appnexusDealId + '.');
                    return bidCpm * 1.0
                } else if (ghgDeals.superPriority.includes(appnexusDealId)) {
                    AdheseGateway.logger('Found TMP superPriority deal ' + appnexusDealId + '. Bid * 1.4.');
                    return bidCpm * 1.4
                } else if (ghgDeals.reachFrequency.includes(appnexusDealId)) {
                    AdheseGateway.logger('Found TMP superPriority deal ' + appnexusDealId + '. Bid * 1.8.');
                    return bidCpm * 1.8
                } else {
                    return bidCpm
                }
            }

        }
    }

    pbjs.que.push(function() {
        pbjs.addAdUnits(AdheseGateway.adUnits);
        pbjs.setConfig(AdheseGateway.SETCONFIG);
    });

    AdheseGateway.chooseAdserver();
}

AdheseGateway.initAdserver = function(bids) {
    AdheseGateway.logger('initAdserver');
    for (var i in bids) {
        for (var j in bids[i].bids) {
            var bid = bids[i].bids[j];
            if (bid.width == 1800 && bid.height == 1000) {
                bid.width = 728;
                bid.height = 90;
            } else if (bid.width == 970 && bid.height == 1000) {
                bid.width = 970;
                bid.height = 250;
            }
        }
    }
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        if (AdheseGateway.infiniteScroll) {
        	AdheseGateway.logger('Only refreshing infinite scroll slots:');
        	AdheseGateway.logger(AdheseGateway.infiniteScrollSlots)
        	googletag.pubads().refresh(AdheseGateway.infiniteScrollSlots);
        } else {
         	AdheseGateway.logger('googletag.pubads().refresh()');
        	googletag.pubads().refresh();       	
        }
    });
};


AdheseGateway.initGoogle = function(bids) {
    AdheseGateway.logger('initGoogle()');
    AdheseGateway.logger(bids);
    for (var i in bids) {
        for (var j in bids[i].bids) {
            var bid = bids[i].bids[j];
            if (bid.width == 1800 && bid.height == 1000) {
                bid.width = 728;
                bid.height = 90;
            } else if (bid.width == 970 && bid.height == 1000) {
                bid.width = 970;
                bid.height = 250;
            }
        }
    }
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh();
    });
};

AdheseGateway.initAdhese = function(t) {
    AdheseGateway.logger('initAdhese()');
    
    try {
        var adhese = new Adhese();

        adhese.init({
            debug: true,
            account: "mannenmedia",
            host: "https://ads-mannenmedia.adhese.com/",
            location: '',
            safeframe: true,
            safeframeContainerID: "slotName",
            previewHost: "https://mannenmedia-preview.adhese.org"
        });

        if(!AdheseGateway.consentForAds) adhese.registerRequestParameter('tl', 'none');
        if(AdheseGateway.deviceType) adhese.registerRequestParameter('vp',AdheseGateway.deviceType);
        for (var c = 0; c < AdheseGateway.targetArray.length; c++) {
            try {
                adhese.registerRequestParameter(AdheseGateway.targetArray[c][0], this.targetArray[c][1]);  
            } catch (e) {
                if (AdheseGateway.debug) console.log('failed to add target from targetArray', e);
            }
        }

        var ads = new Array();
        
        for (var x in t) {
            AdheseGateway.logger(t[x]);
            ads.push(adhese.tag(t[x].format, {
                'location': t[x].location,
                'containerId': t[x].containerId
            }));
            t[x].slotCode = t[x].location + '-' + t[x].format;
        }
        
        var adUri = adhese.getMultipleRequestUri(ads, {
            type: "json"
        });
        
        var response = AdheseGateway.ajax.request({
            url: adUri,
            method: "get",
            json: true
        }).done(function(results) {
            adhese.safeframe.addPositions(results);
            if(this.debug) console.info(adhese.safeframe);
            
            for (var x in results) {
                var ad = results[x];
                AdheseGateway.logger(ad);
                
                for ( var c in t ) {
                    if ( ad.slotName == t[c].slotCode ) {                            
                        var container = document.getElementById(t[c].containerId);
                        if ( container ) {
                            container.style.marginBottom = '10px';
                            container.style.display='block';
                            container.parentElement.style.display='block';
                            var con = document.createElement('div');
                            con.id = ad.slotName;
                            container.appendChild(con);

                            //dont render rich media ads in a safeframe.
                            if (ad.height == '1000' || ad.height == '500' || ad.height == '400') {
                            	try {
			                       	var iframe = document.createElement('iframe');
			                       	iframe.id = ad.slotName + 'adhese_iframe';
			                       	if (ad.height == '1000') {
			                       		iframe.height == '250';
			                       		iframe.width == ad.width;
			                       	} else {
				                        iframe.width = ad.width;
				                        iframe.height = ad.height;			                       		
			                       	}

			                        var parent = document.getElementById(ad.slotName);
			                        parent.appendChild(iframe);
									
									var iframeDoc = iframe.contentWindow.document;
			                        var adMarkup = (ad.body != "") ? ad.body : ad.tag;
			                        iframeDoc.write(adMarkup);
			                        iframeDoc.close();
                            	} catch (e) {
                            		console.log(e)
                            	}
                            } else {
                            	adhese.safeframe.render(ad.slotName);
                            }
                        }
                    } 
                }
            }
        });
    } catch (e) {
        console.error(e);
    }        
};

AdheseGateway.checkConsent = function() {
    AdheseGateway.logger('AdheseGateway.checkConsent');
    __tcfapi('getTCData', 2, (tcData, success) => {
        try {
            var c = tcData.purpose.consents;
            var newConsentForAds = (c[1] && c[2] && c[3] && c[4] && c[5]);
            if (AdheseGateway.consentForAds !== newConsentForAds) {
                AdheseGateway.consentForAds = newConsentForAds;
                pbjs.adUnits = [];
                googletag.cmd.push(function() {
                    googletag.pubads().setTargeting('iab_string', [tcData.tcString]);
                    googletag.pubads().setTargeting('consent', [AdheseGateway.consentForAds ? '1' : '0']);
                    googletag.pubads().setTargeting('rev_consent', [AdheseGateway.consentForAds ? '0' : '1']);
                    googletag.pubads().setRequestNonPersonalizedAds(AdheseGateway.consentForAds ? 0 : 1);
                    
                    //AdheseGateway.adServer = AdheseGateway.consentForAds ? 'google' : 'adhese';
                    if(window.location.href.includes('dailybase')) AdheseGateway.adServer = 'adhese';
                    if (AdheseGateway.adServer == 'adhese') AdheseGateway.targetArray.push(['xt', tcData.tcString]);
                    if (!AdheseGateway.consentForAds) AdheseGateway.targetArray.push(['tl', 'none'])
                    AdheseGateway.defineAdUnits();
                });
            }
        } catch (e) {
            if (AdheseGateway.debug) console.log(e);
        }
    });
}

window.__tcfapi('addEventListener', 'acceptAllButtonClicked', function(data) {
    AdheseGateway.logger('AcceptAllButtonClicked');
    AdheseGateway.checkConsent();
});

window.__tcfapi('addEventListener', 'exitButtonClicked', function(data) {
    AdheseGateway.logger('ADHESE: exitButtonClicked');
    AdheseGateway.checkConsent();
});

window.__tcfapi('addEventListener', 'cmpReady', function(data) {
    AdheseGateway.logger('ADHESE: cmpReady');
    AdheseGateway.checkConsent();
});

if (window.location.href.includes('publishift_test' || Math.random() < 0.1)) {
    (function(p, b, l, s, h) {
        p._pubs = p._pubs || [];
        s = b.createElement('script'),
            h = b.getElementsByTagName('script')[0];
        s.async = 1;
        s.type = 'text/javascript';
        s.defer = true;
        s.src = l;
        h.parentNode.insertBefore(s, h)
    })
    (window, document, 'https://cdn.publishift.io/PS-20493/pubs.js');

    window._pubs.push({ 'action': 'init', 'identifier': 'PS-20493', callback: function(keywords) { 
	    	AdheseGateway.targetArray.push('ps', keywords);
	    	AdheseGateway.logger('Added publishift keywords: ' + keywords.join(','))
        } 
    });
}