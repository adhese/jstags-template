var AdheseGateway = {};
var adhese;

AdheseGateway.prebid = {};
AdheseGateway.adhese = {};
AdheseGateway.consent = {};

AdheseGateway.prebid.adUnits = [];
AdheseGateway.consent.consentForAds;
AdheseGateway.prebid.timeout = 2000;
AdheseGateway.prebid.referrer = window.location.href;
AdheseGateway.debug = false;
AdheseGateway.deviceType = "unknown";
AdheseGateway.adhese.slots = [];
AdheseGateway.targetArray = [];
AdheseGateway.adServer = "adhese";
AdheseGateway.consentProcessed = false;
if (window.location.href.includes("debug=true")) {
  AdheseGateway.debug = true;
}

AdheseGateway.loadScript = function (url) {
  AdheseGateway.logger("loadScript: " + url);
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = url;
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(script, node);
};

AdheseGateway.decorateLog = function (args, prefix) {
  args = [args];
  prefix && args.unshift(prefix);
  args.unshift(
    "display: inline-block; color: #fff; background: #ff0066; padding: 1px 4px; border-radius: 3px;"
  );
  args.unshift("%cAdhese Gateway");
  return args;
};

AdheseGateway.logger = function (arguments) {
  if (AdheseGateway.debug)
    console.info.apply(console, AdheseGateway.decorateLog(arguments, "DEBUG:"));
};

AdheseGateway.logger("Adhese initialized, waiting for CMP");

AdheseGateway.getScreenWidth = function () {
  return window.outerWidth || window.innerWidth;
};

AdheseGateway.sizeMapping = {
  h1: {
    desktop: [
      [1800, 1000],
      [970, 70],
      [970, 90],
      [970, 250],
    ],
    tablet: [728, 90],
    mobile: [320, 100],
  },
  r1: {
    desktop: [
      [300, 600],
      [300, 250],
    ],
    tablet: [[300, 250]],
    mobile: [
      [320, 240],
      [300, 250],
      [320, 400],
    ],
  },
  r2: {
    desktop: [
      [300, 600],
      [300, 250],
    ],
    tablet: [[300, 250]],
    mobile: [
      [320, 240],
      [300, 250],
      [320, 400],
    ],
  },
  r3: {
    desktop: [
      [300, 600],
      [300, 250],
    ],
    tablet: [[300, 250]],
    mobile: [
      [320, 240],
      [300, 250],
      [320, 400],
    ],
  },
  r4: {
    desktop: [
      [300, 600],
      [300, 250],
    ],
    tablet: [[300, 250]],
    mobile: [
      [320, 240],
      [300, 250],
      [320, 400],
    ],
  },
  r5: {
    desktop: [
      [300, 600],
      [300, 250],
    ],
    tablet: [[300, 250]],
    mobile: [
      [320, 240],
      [300, 250],
      [320, 400],
    ],
  },
  ia1: {
    desktop: [
      [728, 90],
      [300, 250],
    ],
    tablet: [],
    mobile: [],
  },
  s1: {
    desktop: [
      [160, 600],
      [120, 600],
    ],
    tablet: [[120, 600]],
    mobile: [],
  },
  l1: {
    desktop: [[728, 90]],
    tablet: [[728, 90]],
    mobile: [],
  },
  l2: {
    desktop: [[728, 90]],
    tablet: [[728, 90]],
    mobile: [],
  },
  l3: {
    desktop: [[728, 90]],
    tablet: [[728, 90]],
    mobile: [],
  },
  p1: {
    desktop: [[1, 1]],
    tablet: [[1, 1]],
    mobile: [[1, 1]],
  },
};

AdheseGateway.getSlotSizes = function (slotType, deviceType) {
  if (AdheseGateway.sizeMapping[slotType] === undefined) {
    AdheseGateway.logger("no sizeMapping found for slotType: " + slotType);
    return [];
  }
  var sizes = AdheseGateway.sizeMapping[slotType][deviceType];
  return sizes;
};

AdheseGateway.appendSyncIframe = function () {
  AdheseGateway.logger("appendSyncIframe()");
  var iframe = document.createElement("IFRAME");
  iframe.setAttribute("id", "adswag");
  iframe.setAttribute("height", "0");
  iframe.setAttribute("width", "0");
  iframe.setAttribute("marginwidth", "0");
  iframe.setAttribute("marginheight", "0");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("style", "border: 0px; display: none;");
  iframe.setAttribute(
    "src",
    "https://user-sync.adhese.com/iframe/user_sync.html?account=adswag"
  );
  if (document.body) {
    document.body.appendChild(iframe);
  } else {
    //wait 1 sec and try again
    setTimeout(function () {
      if (document.body) {
        document.body.appendChild(iframe);
      }
    }, 1000);
  }
};

AdheseGateway.findBiggestSize = function (sizes) {
  if (sizes.length == 0) return "1x1";
  var sizePriority = [
    "1800x1000",
    "970x1000",
    "970x250",
    "970x90",
    "728x90",
    "300x600",
    "320x500",
    "320x400",
    "320x240",
    "300x250",
    "160x600",
    "120x600",
    "320x100",
    "320x50",
    "300x100",
    "300x50",
    "320x480",
    "1x1",
    "1x2",
  ];
  var biggestSize = "";
  for (var c = 0; c < sizePriority.length; c++) {
    for (var d = 0; d < sizes.length; d++) {
      if (Array.isArray(sizes[d]) && sizePriority[c] == sizes[d].join("x")) {
        biggestSize = sizes[d];
        break;
      }
    }
    if (biggestSize != "") {
      break;
    }
  }
  try {
    return biggestSize.join("x");
  } catch (e) {
    return "0x0";
  }
};

AdheseGateway.addTrackingPixel = function (uri) {
  AdheseGateway.logger("addTrackingPixel()");
  var img = document.createElement("img");
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
    setTimeout(function () {
      document.body.appendChild(img);
    }, 500);
  }
};

AdheseGateway.renderInFriendlyIframe = function (ad) {
  var iframeCSS = "<style>body{margin:0px;}</style>";
  var frameContainer = document.getElementById(ad.slotName);
  var adFrm = document.createElement("iframe");
  if (ad.height == "1000") {
    adFrm.width = 1;
    adFrm.height = 1;
  } else {
    adFrm.width = ad.width;
    adFrm.height = ad.height;
    adFrm.style.width = ad.width;
    adFrm.style.height = ad.height;
  }
  adFrm.frameBorder = 0;
  adFrm.scrolling = "no";
  adFrm.style.margin = "0 auto";
  adFrm.style.display = "block";
  frameContainer.appendChild(adFrm);
  var adMarkup = ad.body != "" ? ad.body : ad.tag;

  var adFrmDoc = adFrm.contentWindow.document;
  adMarkup += iframeCSS;
  adFrmDoc.write(adMarkup);
  adFrmDoc.close();

  if (
    adhese.safeframe.viewability &&
    ad.viewableImpressionCounter &&
    ad.slotName != "[adheseReplace:SL]"
  ) {
    adhese.safeframe.viewability.trackers[ad.slotName] =
      ad.viewableImpressionCounter;
    adhese.safeframe.viewability.adObserver.observe(
      document.getElementById(ad.slotName)
    );
  }
};

AdheseGateway.getDeviceType = function () {
  var width = AdheseGateway.getScreenWidth();
  var device = "";
  if (width < 769) {
    device = "mobile";
  } else if (width < 1025) {
    device = "tablet";
  } else {
    device = "desktop";
  }
  AdheseGateway.logger("getDeviceType:" + device);
  return device;
};

AdheseGateway.filterSlotsOnDevice = function (slots) {
  const deviceType = AdheseGateway.getDeviceType();
  return slots.filter((slot) => {
    if (slot.devices) {
      return slot.devices.includes(deviceType);
    }
    return true;
  });
};

AdheseGateway.getConsentData = function (callback) {
  if (AdheseGateway.consentProcessed) return;
  if (typeof window.__tcfapi === "undefined") {
    AdheseGateway.logger("window.__tcfapi is undefined, retrying in 100ms");
    // we need to wait for the __tcfapi to be loaded
    var tcfapiInterval = setInterval(function () {
      if (typeof window.__tcfapi !== "undefined") {
        AdheseGateway.getConsentData(callback);
        clearInterval(tcfapiInterval);
      }
    }, 100);
    return;
  }

  __tcfapi("getTCData", 2, function (tcData, success) {
    if (AdheseGateway.consentProcessed) return;
    AdheseGateway.logger("tcData.eventStatus", tcData.eventStatus);
    if (tcData.eventStatus === "cmpuishown") {
      window.didomiEventListeners = window.didomiEventListeners || [];
      window.didomiEventListeners.push({
        event: "consent.changed",
        listener: function (context) {
          AdheseGateway.getConsentData(callback);
        },
      });
    } else {
      callback(tcData);
    }
  });
};

AdheseGateway.processConsentData = function (consentData) {
  AdheseGateway.logger("processConsentData()");
  //check if we have consent for ads
  var c = consentData.purpose.consents;
  var consentForAds = c[1] && c[2] && c[3] && c[4] && c[5];
  if (Object.keys(c).length === 0 && c.constructor === Object) {
    consentForAds = false;
  }
  AdheseGateway.consentForAds = consentForAds;
  AdheseGateway.logger("consentForAds: " + AdheseGateway.consentForAds);
  AdheseGateway.consentString = consentData.tcString;
  AdheseGateway.targetArray.push(["xt", consentData.tcString]);
  AdheseGateway.consentProcessed = true;
};

AdheseGateway.assignDeviceSizes = function (slots) {
  AdheseGateway.logger("assignDeviceSizes()");
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    slot.sizes = AdheseGateway.getSlotSizes(
      slot.slotType,
      AdheseGateway.deviceType
    );
  }
};

AdheseGateway.createAdContainer = function (
  containerId,
  parentId,
  width,
  height
) {
  AdheseGateway.logger("createAdContainer()");
  var adContainer = document.createElement("div");
  adContainer.id = containerId;
  adContainer.className = "ad-container";
  adContainer.style.width = width + "px";
  adContainer.style.height = height + "px";
  adContainer.style.margin = "0 auto";
  adContainer.style.display = "block";
  if (!document.getElementById(parentId)) {
    AdheseGateway.logger("parent container not found: " + parentId);
    return;
  } else {
    AdheseGateway.logger("parent container found: " + parentId);
    var parentElement = document.getElementById(parentId);
    parentElement.appendChild(adContainer);
  }
};

AdheseGateway.lazyloadQueue = [];

AdheseGateway.handleLazyLoad = function (ad, containerId) {
  //use intersection observer to check if container is in viewport
  var options = {
    root: null,
    rootMargin: "200px 0px", // Change this line
    threshold: 0.1,
  };
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        AdheseGateway.logger("container is in viewport, rendering ad");
        AdheseGateway.renderInFriendlyIframe(ad);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  var container = document.getElementById(containerId);
  observer.observe(container);
};

AdheseGateway.handleAdheseResponse = function (response, slots, ArmpConfig) {
  //we want to create a container for the ad, but first we need to map the ad to the slot based on the slotCode
  AdheseGateway.logger("handleAdheseResponse()");
  var ads = response;
  for (var i = 0; i < ads.length; i++) {
    //check if slotCode is in slots, if so, create ad container within slot.containerId
    var ad = ads[i];
    //add impression tracker to ad
    var impressionTracker =
      "<img src='" +
      ad.trackedImpressionCounter +
      "' border='0' width='1' height='1' alt='' style='display:none'/>";
    if (ad.body && ad.body != "" && ad.body != "<ADHESE_BODY>") {
      ad.body = ad.body + impressionTracker;
    } else {
      ad.tag = ad.tag + impressionTracker;
    }
    //find slot containerId based on slotCode
    var slot = slots.find(function (slot) {
      return slot.slotCode == ad.slotName;
    });

    if (slot) {
      AdheseGateway.logger("found slot for ad: " + ad.slotName);
      AdheseGateway.logger(slot);
      AdheseGateway.createAdContainer(
        ad.slotName,
        slot.containerId,
        ad.width,
        ad.height
      );
      AdheseGateway.handleLazyLoad(ad, slot.containerId);
      //AdheseGateway.renderInFriendlyIframe(ad);
    } else {
      AdheseGateway.logger("no slot found for ad: " + ad.slotName);
      // Collapse the div if no ad is found
      var adContainer = document.getElementById(ad.slotName);
      if (adContainer) {
        adContainer.style.height = "0px";
      }
    }
  }
};

AdheseGateway.sendAdheseRequest = function (slots, ArmpConfig) {
  AdheseGateway.logger("sendAdheseRequest()");
  //do POST request to adhese
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://ads-adswag.adhese.com/json", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.withCredentials = true;
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      AdheseGateway.logger("response from adhese:");
      AdheseGateway.logger(response);
      //if we have a response, we render the ads
      AdheseGateway.handleAdheseResponse(response, slots, ArmpConfig);
    } else {
      AdheseGateway.logger("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send(
    JSON.stringify(adhese.getRequestPayload(AdheseGateway.adhese.slots))
  );
};

AdheseGateway.base64urlEncode = function (s) {
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

AdheseGateway.initAdhese = function (slots, ArmpConfig) {
  //initialize adhese if not already done:
  if (!AdheseGateway.adhese.initialized) {
    AdheseGateway.logger("initializing adhese");
    window.adhese = new Adhese();
    adhese.init({
      debug: true,
      account: "adswag",
      host: "https://ads-adswag.adhese.com/",
      location: "",
      safeframe: true,
      safeframeContainerID: "slotName",
      previewHost: "https://adswag-preview.adhese.org",
      viewabilityTracking: true,
    });
    adhese.registerRequestParameter(
      "xf",
      AdheseGateway.base64urlEncode(window.location.href)
    );
    AdheseGateway.adhese.initialized = true;
  }
};

AdheseGateway.createAdheseSlots = function (slots, ArmpConfig) {
  //initialize adhese if not already done:
  AdheseGateway.initAdhese(slots, ArmpConfig);
  // register adhese slots to adhese SDK
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var divId = slot.containerId;
    var location =
      ArmpConfig.data.domain +
      "_" +
      ArmpConfig.data.pageType +
      "_" +
      slot.slotType;
    var format = AdheseGateway.findBiggestSize(slot.sizes);
    var slotCode = location + "-" + format;
    slot.slotCode = slotCode;
    //if any of the above variables is undefined, skip this slot
    if (
      typeof divId === "undefined" ||
      typeof location === "undefined" ||
      typeof format === "undefined"
    ) {
      AdheseGateway.logger(
        "skipping slot: " + divId + " " + location + " " + format
      );
      continue;
    }
    AdheseGateway.logger(
      "create adhese slot: " + divId + " " + location + " " + format
    );

    var ad = adhese.tag(format, {
      divId,
      location,
      slotCode,
      parameters: {},
    });
    AdheseGateway.adhese.slots.push(ad);
  }

  // for each target in targetArray, add to adhese request
  for (var i = 0; i < AdheseGateway.targetArray.length; i++) {
    var target = AdheseGateway.targetArray[i];
    adhese.registerRequestParameter(target[0], target[1]);
  }
  //send adhese request
  AdheseGateway.sendAdheseRequest(slots, ArmpConfig);
};

AdheseGateway.init = function (ArmpConfig) {
  console.log("init adhese");
  //check deviceType
  AdheseGateway.deviceType = AdheseGateway.getDeviceType();
  //first we pick all slots based on device type
  var slots = AdheseGateway.filterSlotsOnDevice(ArmpConfig.slots);
  //find sizes based on slotType and viewport, assign to slot object
  AdheseGateway.assignDeviceSizes(slots);

  // Initialize Adhese for existing slots
  AdheseGateway.initAdhese(slots, ArmpConfig);
  AdheseGateway.createAdheseSlots(slots, ArmpConfig);
};

AdheseGateway.init(ArmpConfig);

(function () {
  var host = window.location.hostname;
  var element = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];
  var url = "https://cmp.inmobi.com".concat(
    "/choice/",
    "FCB3RuFD51EpZ",
    "/",
    host,
    "/choice.js?tag_version=V3"
  );
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = "text/javascript";
  element.src = url;
  firstScript.parentNode.insertBefore(element, firstScript);
  function makeStub() {
    var TCF_LOCATOR_NAME = "__tcfapiLocator";
    var queue = [];
    var win = window;
    var cmpFrame;
    function addFrame() {
      var doc = win.document;
      var otherCMP = !!win.frames[TCF_LOCATOR_NAME];
      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement("iframe");
          iframe.style.cssText = "display:none";
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }
    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;
      if (!args.length) {
        return queue;
      } else if (args[0] === "setGdprApplies") {
        if (args.length > 3 && args[2] === 2 && typeof args[3] === "boolean") {
          gdprApplies = args[3];
          if (typeof args[2] === "function") {
            args[2]("set", true);
          }
        }
      } else if (args[0] === "ping") {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: "stub",
        };
        if (typeof args[2] === "function") {
          args[2](retr);
        }
      } else {
        if (args[0] === "init" && typeof args[3] === "object") {
          args[3] = Object.assign(args[3], { tag_version: "V3" });
        }
        queue.push(args);
      }
    }
    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === "string";
      var json = {};
      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}
      var payload = json.__tcfapiCall;
      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function (retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId,
              },
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, "*");
            }
          },
          payload.parameter
        );
      }
    }
    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}
      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener("message", postMessageEventHandler, false);
    }
  }
  makeStub();
  var uspStubFunction = function () {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function () {
        if (typeof window.__uspapi !== "undefined") {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };
  var checkIfUspIsReady = function () {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn("USP is not accessible");
    } else {
      clearInterval(uspInterval);
    }
  };
  if (typeof window.__uspapi === "undefined") {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
