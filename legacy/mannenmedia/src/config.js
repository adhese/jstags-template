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

  function getScreenWidth() {
    return Math.max(
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

var adhese_debug = false;
if (window.location.href.includes('adhese_debug=true')) {
    adhese_debug = true;
};

var externalBidders = []
var adsLoaded = false;

var adformIdentifiers = {
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

var AdheseAjax = {
    request: function(ops) {
        if(typeof ops == 'string') ops = { url: ops };
        ops.url = ops.url || '';
        ops.method = ops.method || 'get'
        ops.data = ops.data || {};
        if(typeof ops.encodeData == "undefined"){
            ops.encodeData = true;
        }
        var getParams = function(data, url) {
            var arr = [], str;
            for(var name in data) {
                arr.push(name + '=' + encodeURIComponent(data[name]));
            }
            str = arr.join('&');
            if(str != '') {
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
                    }
                    catch(e) {
                        try {
                            this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch (e) {this.xhr = false; }
                    }
                } else {
                    try {
                        this.xhr = new XMLHttpRequest();
                    }
                    catch (e) {
                        this.xhr = false;
                    }
                }

                if(this.xhr) {
                    if ("withCredentials" in this.xhr) {
                        this.xhr.withCredentials = true;
                    }
                    this.xhr.onreadystatechange = function() {
                        if(self.xhr.readyState == 4 && self.xhr.status == 200) {
                            var result = self.xhr.responseText;
                            if(ops.json === true && typeof JSON != 'undefined') {
                                if (result){
                                    try{
                                        result = JSON.parse(result);
                                        self.doneCallback && self.doneCallback.apply(self.host, [result, self.xhr]);
                                    }catch(e){
                                        self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: " + e]);
                                    }
                                }else {
                                    self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: Response is empty string"]);
                                }
                            }
                        } else if(self.xhr.readyState == 4) {
                            self.failCallback && self.failCallback.apply(self.host, [self.xhr]);
                        }
                        self.alwaysCallback && self.alwaysCallback.apply(self.host, [self.xhr]);
                    }
                }
                if(ops.method == 'get') {
                    this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
                } else {
                    this.xhr.open(ops.method, ops.url, true);
                    this.setHeaders({
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-type': 'application/x-www-form-urlencoded'
                    });
                }
                if(ops.headers && typeof ops.headers == 'object') {
                    this.setHeaders(ops.headers);
                }
                setTimeout(function() {
                    if(ops.method == 'get'){
                        self.xhr.send()
                    }else{
                        var data;
                        if (ops.encodeData) {
                        data = getParams(ops.data);
                    }else {
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
                for(var name in headers) {
                    this.xhr && this.xhr.setRequestHeader(name, headers[name]);
                }
            }
        }
        return api.process(ops);
    }
}

var addTrackingPixel = function(uri) {
    var img = document.createElement('img');
    img.src = uri;
    img.style.height = "1px";
    img.style.width = "1px";
    img.style.margin = "-1px";
    img.style.border = "0";
    img.style.position = "absolute";
    img.style.top = "0";
    document.body.appendChild(img);
};

var appendSyncIframe = function(options) {
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

var loadJSON = function(path, callback) {
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

var multiplier = 1;
var adhese_testgroup = '';
var randomInt = getRandomInt(100);

var PREBID_TIMEOUT = 1500;
var FAILSAFE_TIMEOUT = 3000;
var prebidRefererUrl = window.location.href;

var priceBucketConfig = {
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

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var adUnits = [];
var definedSlots = undefined;

var syncUser = function(option) {
    appendSyncIframe({ syncName: "mannenmedia", url: "https://user-sync.adhese.com/iframe/user_sync.html?account=mannenmedia" });
    syncImprove();
};

var syncImprove = function (option) {
    if (adhese_debug) {
        console.log("ADHESE: sync users for Improve Digital");
    }
    var response = AdheseAjax.request({
            url: "https://ad.360yield.com/add?jsonp=%7B%22bid_request%22%3A%7B%22id%22%3A%22adhese_user_sync%22%2C%22secure%22%3A1%2C%22version%22%3A%22DT-1.6.0-JS-5.1.1%22%2C%22gdpr%22%3A%221%22%2C%22imp%22%3A%5B%7B%22id%22%3A%22efg%22%2C%22pid%22%3A13317693%2C%22banner%22%3A%7B%7D%7D%5D%7D%7D",
            method: 'get',
            json: true
        })
        .done(function (result) {
            try {
                var syncUrls = result.bid[0].sync;
                for (var i in syncUrls) {
                    addTrackingPixel(result.bid[0].sync[i]);
                }
            } catch (e) {
                console.log("ADHESE: exception when syncing Improve users");
                console.log(result);
            }
        });
};

var isArticleForContextSync = false;

var syncContext = function(option) {
    if (isArticleForContextSync) {
    	addTrackingPixel("https://ads-mannenmedia.adhese.com/usersync/reverse-sync?url=" + encodeURIComponent("https://dx.frontend.weborama.com/collect?dsp_id=7&eid={ADHESE_USER_ID}&touchpoint=46&url=" + encodeURIComponent(location.href)));
    }
};


var syncDigitalAudience = function() {
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
        'Gezin': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/34_',
        'Datumprikker': 'https://target.digitalaudience.io/bakery/pix/p/dap_200326/35_'
    };

    //assign categories to sites
    var siteToCategory = {
        'Automotive': 'www.autowereld.com www.autoblog.nl www.groen7.nl www.autojunk.nl www.problemcar.nl www.autorai.nl www.bikerbook.nl www.finnik.nl www.zerauto.nl www.motorrai.nl www.rijtesten.nl www.routenet.nl',
        'Automotive occasion': 'www.autowereld.nl www.gaspedaal.nl www.autotrack.nl www.nederlandmobiel.nl www.autovooru.nl',
        'Man lifestyle': 'www.dailybase.nl www.dutchcowboys.nl www.falder.nl www.fhm.nl www.geenstijl.nl www.mannenzaken.nl www.mxxl.nl www.manly.nl www.skoften.net www.parra.nu',
        'Tech': 'www.apparata.nl',
        'Sport': 'www.voetbalflitsen.nl www.fcupdate.net www.voetbal.nl www.indeleiderstrui.nl www.wielerflits.nl',
        'Formule 1': 'www.gpupdate.net www.nl.motorsport.com www.racingnews365.nl www.gptoday.net www.gp33.nl',
	    'Vrouw sport': 'www.horses.nl www.annemerel.com www.fitwithmarit.nl www.bitmagazine.nl',
	    'Vrouw lifestyle': 'www.ze.nl www.girlscene.nl www.byaranka.nl www.beautyscene.nl www.laviesanne.nl www.trendalert.nl www.elisejoanne.nl www.herhealth.nl www.ladylemonade.nl www.freshhh.nl www.kellycaresse.nl www.fem-fem.nl',
	    'Gezin': 'www.babyvandaag.nl www.clubvanrelaxtemoeders.nl www.oudersenzo.nl www.kinderliedjes.nl',
    	'Datumprikker': 'www.datumprikker.nl'
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
    if (category == 'Datumprikker') {
        var content = googletag.pubads().getTargeting('event_category');
        var keywords = content.join('_');
        if (keywords && daUrl) daUrl += keywords;
        //categories where keyword = auto_merk
    } else if (category == 'Automotive occasion') {
        var content = googletag.pubads().getSlots()[0].getTargeting('auto_merk');
        if (content.length<1) content = googletag.pubads().getTargeting('auto_merk');
        var keywords = content.join('_');
        if (keywords && daUrl) daUrl += keywords;
        //categories where keyword = auto_merk
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
      document.body.appendChild(sa)
    }
};

var loadDomainAdUnits = function(domain) {
    if (adhese_debug) {console.log("load slots for " + domain);}
    loadJSON("https://ads-mannenmedia.adhese.com/tag/" + domain + ".adunits.js", function(response) {
        var declaredSlots = JSON.parse(response);
        for (var prop in declaredSlots) {
            if (!definedSlots) definedSlots = new Object();
            definedSlots[prop] = [new AdheseAdUnit(declaredSlots[prop][0].adUnitPath, declaredSlots[prop][0].sizes[0].width, declaredSlots[prop][0].sizes[0].height)];
        }
        createAdUnits();
    });
};

var adheseScreenWidth = 0;

var defineAdUnits = function() {
    adheseScreenWidth = getScreenWidth();

    if (consentForAds) {
        syncUser();
        syncDigitalAudience();
    }

    try {
        definedSlots = googletag.slot_manager_instance.m;
        if (definedSlots && !adsLoaded) createAdUnits();
    } catch (e) {
        if (adhese_debug) {console.log("ADHESE: defining slots on slot_manager_instance skipped")};
        try {
            for (var i = 0; i < gptadslots.length; i++) {
                if (gptadslots[i]) {
                    if (!definedSlots) definedSlots = new Object();
                    definedSlots[gptadslots[i].getAdUnitPath()] = [gptadslots[i]];
                }
            }
            if (definedSlots && !adsLoaded) {
                createAdUnits();
            }
        } catch (e) {
            if(adhese_debug) console.log(e);
            try {
            	var gptadslots = googletag.pubads().getSlots();
	            for (var i = 0; i < gptadslots.length; i++) {
	                if (gptadslots[i]) {
	                    if (!definedSlots) definedSlots = new Object();
	                    definedSlots[gptadslots[i].getAdUnitPath()] = [gptadslots[i]];
	                }
	            }
	            if (definedSlots && !adsLoaded) { createAdUnits(); }
            } catch (e) {
            	console.log(e);
            }
        }
    }
}

var getDeviceType = function(width) {
	var device = '';
	if (width < 769) {
        device = 'phone';
    } else if (width < 1025) {
        device = 'tablet';
    } else {
        device = 'desktop';
    }
    return device;
}

var createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    //determine size for adhese format
    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    if (sizeFromAdunit[0].length > 5) {
        var sizeToFix = sizeFromAdunit[0].split('_');
        sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1]
    }

    if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = [320, 240];
    } else {
    	if (isNaN(sizeFromAdunit[0]) && getDeviceType() == 'phone') {
    		sizeFromAdunit = [320, 240];
    	}
    };

	if (sizeFromAdunit[0].indexOf("_MOB_")!=-1) {
        sizeFromAdunit = [320, 240];
    }

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
                            'xi': [xiParam]
                        }
                    }
                }
            ]
        }

        for (var c = 0; c < customParam.length; c++){
            o.bids[0].params.data[customParam[c][0]] = [customParam[c][1]];
        }
        
        try {
	        var dfpId = slot.getAdUnitPath().split('/')[3].toUpperCase();
	        var adformId = adformIdentifiers[dfpId];
	        if (adformId && sizes) {
	        	var adformParams = {
	        		bidder: 'adform',
	        		params: {
	        			mid: adformId
	        		}
	        	}
	        	o.bids.push(adformParams);
	        }
        } catch (e) {
        	console.log(e)
        }

        adUnits.push(o);
    }
    return adUnits;
}


var createAdUnits = function() {
	adsLoaded = true;
    var xiParam = '';
    var xtParam = '';
    var tlParam = 'none';
    
    var targetConfig = [['ab','auto_bmin'],['ar','auto_brnst'],['am','auto_merk'],['ao','auto_model'],['at','auto_trns'],['ct','content'],['ac','D_CITY'],['cn','D_CNTRY'],['ad','LOC_CITY'],['cd','LOC_CNTRY'],['pc','prijscat'],['cv','VEH']];
    var targetArray = [];
    
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
        if (consentForAds) tlParam = 'all';
    } catch (e) {
        if (adhese_debug) {console.log("ADHESE: no consent defined for dfp")};
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
            if (value.length > 0) targetArray.push([prefix, value]);
        }
    } catch (e) {}

    if (definedSlots) {
        var ignoreFilter = ['_OUTSTREAM','_PREROLL','_BLOCK','_3X3','_1X1','2785365'];
        var regexIgnore = new RegExp(ignoreFilter.join( "|" ), "i");
        var regexWeb = new RegExp("_WEB_", "i");
        var regexMob = new RegExp("_MOB_", "i");
        var regexArticle = new RegExp("ARTIKEL", "i");
        for (var prop in definedSlots) {
            if (regexArticle.test(prop) && !isArticleForContextSync) {
                isArticleForContextSync = true;
            }
            if (!regexIgnore.test(prop)) {
                if (adheseScreenWidth > 768 && regexWeb.test(prop)) {
                    if (adhese_debug) {console.log('ADHESE: Gateway added web slot: ' + prop)};
                    adUnits = createPrebidAdunitFromSlot(definedSlots[prop][0], adUnits, xiParam, xtParam, tlParam, targetArray);
    
                } else if (adheseScreenWidth < 769 && regexMob.test(prop)) {
                    if (adhese_debug) {console.log('ADHESE: Gateway added mobile slot: ' + prop)};
                    adUnits = createPrebidAdunitFromSlot(definedSlots[prop][0], adUnits, xiParam, xtParam, tlParam, targetArray);
    
                } else if (!regexWeb.test(prop) && !regexMob.test(prop)) {
                    if (adhese_debug) {console.log('ADHESE: Gateway added backup slot: ' + prop)};
                    adUnits = createPrebidAdunitFromSlot(definedSlots[prop][0], adUnits, xiParam, xtParam, tlParam, targetArray);
                }
            } else if (adhese_debug) {
                console.log("ADHESE: ignore regex for slot: " + prop + " - " + regexIgnore.test(prop));            
            }
        }
        if (consentForAds) {
            syncContext();
        }       
    }

    var SETCONFIG = {
          consentManagement: {
              cmpApi: 'iab',
              timeout: 3000,
              allowAuctionWithoutConsent: true
            },
            bidderSequence: "random",
            bidderTimeout: PREBID_TIMEOUT,
            priceGranularity: priceBucketConfig,
            userSync: {
              userIds: [{
                  name: "id5Id",
                  params: {
                      partner: 235             // change to the Partner Number you received from ID5
                  },
                  storage: {
                      type: "cookie",
                      name: "pbjs-id5id",      // create a cookie with this name
                      expires: 90,             // cookie lasts for 90 days
                      refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
                  }
              }],
                syncDelay: 100,
                syncEnabled: true,
                syncsPerBidder: 3,
                filterSettings: {
                    iframe: {
                        bidders: ['adform'], // '*' means all bidders
                        filter: 'include'
                    },
                    image: {
                		bidders: ['adform'],
                		filter: 'include'
                	}
                }
            },
            currency: {
                "adServerCurrency": "EUR",
            },
            refererInfo: { 
                referer: prebidRefererUrl   
            }
        }

    pbjs.bidderSettings = {
        adhese: {
            bidCpmAdjustment: function(bidCpm, bid) {
              if(adhese_debug) {
                console.log(bid);
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
                  if (adhese_debug) { console.log('Found TMP priority deal ' + appnexusDealId + '.') }
                    return bidCpm * 1.0
                } else if (ghgDeals.superPriority.includes(appnexusDealId)) {
                  if (adhese_debug) { console.log('Found TMP superPriority deal ' + appnexusDealId + '. Bid * 1.4.') }
                    return bidCpm * 1.4
                } else if (ghgDeals.reachFrequency.includes(appnexusDealId)) {
                  if (adhese_debug) { console.log('Found TMP superPriority deal ' + appnexusDealId + '. Bid * 1.8.') }
                    return bidCpm * 1.8
                } else {
                    return bidCpm
                }
            }
        },
    }
    
    pbjs.que.push(function() {
        pbjs.addAdUnits(adUnits);
        pbjs.setConfig(SETCONFIG);
        
        if (consentForAds) {
            if(adhese_debug) {
                console.log('ADHESE: Requesting bids')
            }
            pbjs.requestBids({
                bidsBackHandler: initAdserver,
                timeout: PREBID_TIMEOUT
            });
        }
    });
}

var initAdserver = function(bids) {
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
        googletag.pubads().setTargeting('adhese_test', [adhese_testgroup]);
        googletag.pubads().refresh();
    });
};