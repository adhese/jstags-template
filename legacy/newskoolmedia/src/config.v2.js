var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var AdheseGateway = {};
var adhese;

AdheseGateway.prebid = {};
AdheseGateway.adhese = {};
AdheseGateway.gam = {};
AdheseGateway.consent = {};

AdheseGateway.prebid.adUnits = [];
AdheseGateway.consent.consentForAds;
AdheseGateway.prebid.timeout = 2000;
AdheseGateway.prebid.referrer = window.location.href;
AdheseGateway.debug = false;
AdheseGateway.deviceType = "unknown";
AdheseGateway.adhese.slots = [];
AdheseGateway.targetArray = [];
AdheseGateway.adServer = "google";
AdheseGateway.consentProcessed = false;
AdheseGateway.gam.slots = {};
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

AdheseGateway.prebid.priceBucketConfig = {
  buckets: [
    {
      precision: 2,
      min: 0,
      max: 1,
      increment: 0.05,
    },
    {
      precision: 2,
      min: 1,
      max: 2,
      increment: 0.1,
    },
    {
      precision: 2,
      min: 2,
      max: 5,
      increment: 0.2,
    },
    {
      precision: 2,
      min: 5,
      max: 20,
      increment: 0.5,
    },
    {
      precision: 2,
      min: 20,
      max: 50,
      increment: 1,
    },
  ],
};

AdheseGateway.getScreenWidth = function () {
  return window.outerWidth || window.innerWidth;
};

AdheseGateway.gam.sizeMapping = {
  lb_bb: {
    desktop: [
      [728, 90],
      [970, 70],
      [970, 90],
      [970, 250],
      [970, 500],
    ],
    tablet: [728, 90],
    mobile: [],
  },
  lb: {
    desktop: [
      [728, 90],
      [970, 70],
    ],
    tablet: [728, 90],
    mobile: [],
  },
  rt_hpa: {
    desktop: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    tablet: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    mobile: [],
  },
  mobile: {
    mobile: [
      [300, 50],
      [320, 50],
      [300, 100],
      [320, 100],
      [320, 250],
      [300, 250],
      [320, 240],
      [320, 480],
    ],
    tablet: [],
    desktop: [],
  },
  interstitial: {
    desktop: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    tablet: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    mobile: [],
  },
  inpage: {
    desktop: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    tablet: [
      [300, 250],
      [300, 600],
      [160, 600],
    ],
    mobile: [],
  },
  fluid: {
    desktop: [["fluid"]],
    tablet: [["fluid"]],
    mobile: [["fluid"]],
  },
  top_incontent: {
    desktop: [
      [300, 250],
      [320, 240],
      [320, 250],
      [300, 251],
    ],
    tablet: [
      [300, 250],
      [320, 240],
      [320, 250],
      [300, 251],
    ],
    mobile: [
      [300, 50],
      [320, 50],
      [300, 100],
      [320, 100],
      [320, 250],
      [300, 250],
      [320, 240],
      [320, 480],
      [300, 251],
    ],
  },
  mid_incontent: {
    desktop: [
      [300, 250],
      [320, 240],
      [320, 250],
      [300, 252],
    ],
    tablet: [
      [300, 250],
      [320, 240],
      [320, 250],
      [300, 252],
    ],
    mobile: [
      [300, 50],
      [320, 50],
      [300, 100],
      [320, 100],
      [320, 250],
      [300, 250],
      [320, 240],
      [320, 480],
      [300, 252],
    ],
  },
  bot_incontent: {
    desktop: [[300, 250], [320, 240], [320, 250], [300, 253], ["fluid"]],
    tablet: [[300, 250], [320, 240], [320, 250], [300, 253], ["fluid"]],
    mobile: [
      [300, 50],
      [320, 50],
      [300, 100],
      [320, 100],
      [320, 250],
      [300, 250],
      [320, 240],
      [320, 480],
      [300, 253],
      ["fluid"],
    ],
  },
};

AdheseGateway.getSlotSizes = function (slotType, deviceType) {
  var slotNameToSizeMapping = {
    top_lb_bb: AdheseGateway.gam.sizeMapping.lb_bb[deviceType],
    mid_lb_bb: AdheseGateway.gam.sizeMapping.lb[deviceType],
    bot_lb: AdheseGateway.gam.sizeMapping.lb[deviceType],
    top_rectangle: AdheseGateway.gam.sizeMapping.rt_hpa[deviceType],
    mid_rectangle: AdheseGateway.gam.sizeMapping.rt_hpa[deviceType],
    bot_rectangle: AdheseGateway.gam.sizeMapping.rt_hpa[deviceType],
    top_mobile: AdheseGateway.gam.sizeMapping.mobile[deviceType],
    top_rt:
      AdheseGateway.getScreenWidth() > 768
        ? AdheseGateway.gam.sizeMapping.rt_hpa[deviceType]
        : AdheseGateway.gam.sizeMapping.mobile[deviceType],
    mid_rt:
      AdheseGateway.getScreenWidth() > 768
        ? AdheseGateway.gam.sizeMapping.rt_hpa[deviceType]
        : AdheseGateway.gam.sizeMapping.mobile[deviceType],
    bot_rt:
      AdheseGateway.getScreenWidth() > 768
        ? AdheseGateway.gam.sizeMapping.rt_hpa[deviceType]
        : AdheseGateway.gam.sizeMapping.mobile[deviceType],
    mid_mobile: AdheseGateway.gam.sizeMapping.mobile[deviceType],
    bot_mobile: AdheseGateway.gam.sizeMapping.mobile[deviceType],
    top_interstitial: AdheseGateway.gam.sizeMapping.interstitial[deviceType],
    mid_inpage: AdheseGateway.gam.sizeMapping.inpage[deviceType],
    mid_fluid: AdheseGateway.gam.sizeMapping.fluid[deviceType],
    mid_incontent: AdheseGateway.gam.sizeMapping.mid_incontent[deviceType],
    top_incontent: AdheseGateway.gam.sizeMapping.top_incontent[deviceType],
    bot_incontent: AdheseGateway.gam.sizeMapping.bot_incontent[deviceType],
  };

  var sizes = slotNameToSizeMapping[slotType]
    ? slotNameToSizeMapping[slotType]
    : [];
  return sizes;
};

AdheseGateway.prebid.config = {
  consentManagement: {
    cmpApi: "iab",
    timeout: 1000,
  },
  bidderSequence: "random",
  enableSendAllBids: false,
  bidderTimeout: AdheseGateway.prebid.timeout,
  priceGranularity: AdheseGateway.prebid.priceBucketConfig,
  userSync: {
    userIds: [
      {
        name: "id5Id",
        params: {
          partner: 419,
        },
        storage: {
          type: "cookie",
          name: "pbjs-id5id",
          expires: 90,
          refreshInSeconds: 8 * 3600,
        },
      },
    ],
    syncDelay: 1000,
    syncEnabled: false,
    syncsPerBidder: 5,
    filterSettings: {
      iframe: {
        bidders: ["*"],
        filter: "include",
      },
      image: {
        bidders: ["*"],
        filter: "include",
      },
    },
  },
  currency: {
    adServerCurrency: "EUR",
  },
  refererInfo: {
    referer: AdheseGateway.prebid.prebidRefererUrl,
  },
};

if (AdheseGateway.debug) {
  AdheseGateway.prebid.config.debug = true;
}

AdheseGateway.appendSyncIframe = function () {
  AdheseGateway.logger("appendSyncIframe()");
  var iframe = document.createElement("IFRAME");
  iframe.setAttribute("id", "sync_iframe_newskoolmedia");
  iframe.setAttribute("height", "0");
  iframe.setAttribute("width", "0");
  iframe.setAttribute("marginwidth", "0");
  iframe.setAttribute("marginheight", "0");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("style", "border: 0px; display: none;");
  iframe.setAttribute(
    "src",
    "https://user-sync.adhese.com/iframe/user_sync.html?account=newskoolmedia"
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

AdheseGateway.initGoogle = function (bids) {
  AdheseGateway.logger("initGoogle()");
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
  googletag.cmd.push(function () {
    pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
    googletag.pubads().refresh();
  });
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

  adFrmDoc = adFrm.contentWindow.document;
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

AdheseGateway.initAdhese = function () {
  if (AdheseGateway.adhese.initialized) return;
  AdheseGateway.logger("initAdhese()");
  adhese = new Adhese();
  adhese.init({
    debug: true,
    account: "newskoolmedia",
    host: "https://ads-newskoolmedia.adhese.com/",
    location: "",
    safeframe: true,
    safeframeContainerID: "slotName",
    previewHost: "https://newskoolmedia-preview.adhese.org",
    viewabilityTracking: true,
  });
  adhese.registerRequestParameter("xf", btoa(window.location.href));
  AdheseGateway.adhese.initialized = true;
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

AdheseGateway.addGoogleCmpListeners = function (callback) {
  var initiated = false;
  try {
    //Google listneners for pubs using Google CMP.
    AdheseGateway.logger("Adding googlefc listeners.");
    window.googlefc = window.googlefc || {};
    window.googlefc.ccpa = window.googlefc.ccpa || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    googlefc.callbackQueue.push({
      CONSENT_DATA_READY: function () {
        const cmpCallback = (tcData, success) => {
          if (success && tcData.eventStatus === "tcloaded") {
            AdheseGateway.processConsentData(tcData);
            initiated = true;
            callback(tcData);
          } else {
            console.error("Failed to load TCData");
          }
        };
        window.__tcfapi("addEventListener", 2, cmpCallback);
      },
    });
  } catch (e) {}
};

AdheseGateway.getConsentData = function (callback) {
  if (AdheseGateway.consentProcessed) return;
  if (
    RoulartaConfig &&
    RoulartaConfig.data &&
    RoulartaConfig.options.cmp == "google"
  ) {
    AdheseGateway.addGoogleCmpListeners(callback);
  } else {
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
  }
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
  AdheseGateway.adserver = consentForAds ? "google" : "adhese";
  AdheseGateway.logger("consentForAds: " + AdheseGateway.consentForAds);
  AdheseGateway.consentString = consentData.tcString;
  AdheseGateway.consentProcessed = true;
};

AdheseGateway.createPrebidSlots = function (slots, roulartaConfig) {
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var divId = slot.containerId;
    var location =
      roulartaConfig.data.domain +
      "_" +
      roulartaConfig.data.pageType +
      "_" +
      slot.slotType;
    var format = AdheseGateway.findBiggestSize(slot.sizes);
    AdheseGateway.logger(
      "create prebid adUnit: " + divId + " " + location + " " + format
    );
    var o = {
      code: divId,
      mediaTypes: {
        banner: {
          sizes: slot.sizes,
        },
      },
      bids: [
        {
          bidder: "adhese",
          params: {
            account: "newskoolmedia",
            location: location,
            format: format,
            data: {
              dt: [AdheseGateway.deviceType],
              pt: roulartaConfig.pageType,
            },
          },
        },
      ],
    };
    AdheseGateway.prebid.adUnits.push(o);
  }
  AdheseGateway.startPrebidAuction(slots, roulartaConfig);
};

AdheseGateway.createGamSlots = function (slots, roulartaConfig) {
  AdheseGateway.logger("createGamSlots()");
  googletag.cmd.push(function () {
    for (var i = 0; i < slots.length; i++) {
      var slot = slots[i];
      var elementId = slot.containerId;
      var adUnitPath =
        "/79802621/" +
        roulartaConfig.data.domain.toUpperCase() +
        "/" +
        roulartaConfig.data.pageType.toUpperCase() +
        "/" +
        slot.slotType.toUpperCase();
      var sizes = slot.sizes;
      AdheseGateway.logger(
        "creating GAM slot: " + elementId + " " + adUnitPath + " " + sizes
      );
      if (slot.outOfPage) {
        var s = googletag
          .defineOutOfPageSlot(adUnitPath, elementId)
          .addService(googletag.pubads());
      } else {
        var s = googletag
          .defineSlot(adUnitPath, sizes, elementId)
          .addService(googletag.pubads());
      }
      AdheseGateway.gam.slots[elementId] = s;
    }
  });
  AdheseGateway.setGamSettings(slots, roulartaConfig);
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

AdheseGateway.setGamSettings = function (slots, roulartaConfig) {
  AdheseGateway.logger("setGamSettings()");
  googletag.cmd.push(function () {
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().disableInitialLoad();
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 500,
      renderMarginPercent: 30,
      mobileScaling: 2.0,
    });
    googletag.enableServices();
    AdheseGateway.setGamTargeting(slots, roulartaConfig);
  });
};

AdheseGateway.setGamTargeting = function (slots, roulartaConfig) {
  //for each key/value in roulartaConfig.data, set google targeting
  AdheseGateway.logger("setGamTargeting()");
  for (var key in roulartaConfig.data) {
    if (roulartaConfig.data.hasOwnProperty(key)) {
      AdheseGateway.logger(
        "setGamTargeting: " + key + ": " + roulartaConfig.data[key]
      );
      googletag.pubads().setTargeting(key, roulartaConfig.data[key]);
    }
  }
  AdheseGateway.createPrebidSlots(slots, roulartaConfig);
};

AdheseGateway.startPrebidAuction = function (slots, roulartaConfig) {
  pbjs.que.push(function () {
    pbjs.addAdUnits(AdheseGateway.prebid.adUnits);
    pbjs.setConfig(AdheseGateway.prebid.config);
    pbjs.requestBids({
      bidsBackHandler: AdheseGateway.initGoogle,
      timeout: AdheseGateway.prebid.PREBID_TIMEOUT,
    });
  });
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
  parentElement = document.getElementById(parentId);
  parentElement.appendChild(adContainer);
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

AdheseGateway.handleAdheseResponse = function (
  response,
  slots,
  roulartaConfig
) {
  //we want to create a container for the ad, but first we need to map the ad to the slot based on the slotCode
  AdheseGateway.logger("handleAdheseResponse()");
  AdheseGateway.logger(response);
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
    }
  }
};

AdheseGateway.sendAdheseRequest = function (slots, roulartaConfig) {
  AdheseGateway.logger("sendAdheseRequest()");
  //do POST request to adhese
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://ads-newskoolmedia.adhese.com/json", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      AdheseGateway.logger("response from adhese:");
      AdheseGateway.logger(response);
      //if we have a response, we render the ads
      AdheseGateway.handleAdheseResponse(response, slots, roulartaConfig);
    } else {
      AdheseGateway.logger("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send(
    JSON.stringify(adhese.getRequestPayload(AdheseGateway.adhese.slots))
  );
};

AdheseGateway.createAdheseSlots = function (slots, roulartaConfig) {
  //initialize adhese if not already done:
  AdheseGateway.initAdhese(slots, roulartaConfig);

  // register adhese slots to adhese SDK
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var divId = slot.containerId;
    var location =
      roulartaConfig.data.domain +
      "_" +
      roulartaConfig.data.pageType +
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
      parameters: {
        ab: "test",
      },
    });
    AdheseGateway.adhese.slots.push(ad);
  }

  //send adhese request
  AdheseGateway.sendAdheseRequest(slots, roulartaConfig);
};

AdheseGateway.init = function (roulartaConfig) {
  //check deviceType
  AdheseGateway.deviceType = AdheseGateway.getDeviceType();
  //first we pick all slots based on device type
  var slots = AdheseGateway.filterSlotsOnDevice(roulartaConfig.slots);
  //find sizes based on slotType and viewport, assign to slot object
  AdheseGateway.assignDeviceSizes(slots);

  var callBack = function (consentData) {
    //do something with consentData..
    AdheseGateway.processConsentData(consentData);
    //if consent, we load prebid and google.
    if (AdheseGateway.consentForAds) {
      //AdheseGateway.loadScript('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
      AdheseGateway.createGamSlots(slots, roulartaConfig);
      setTimeout(function () {
        AdheseGateway.appendSyncIframe();
      }, 1000);
    } else {
      //if no consent, we load adhese ad server.
      AdheseGateway.createAdheseSlots(slots, roulartaConfig);
    }
  };
  AdheseGateway.getConsentData(callBack);
};
AdheseGateway.loadScript(
  "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
);
AdheseGateway.init(RoulartaConfig);
