var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var AdheseGateway = {};
var adhese;

AdheseGateway.adhese = {};

AdheseGateway.accountName = "hardwareluxx";
AdheseGateway.debug = true;
AdheseGateway.deviceType = "unknown";
AdheseGateway.adhese.slots = [];
AdheseGateway.targetArray = [];
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

AdheseGateway.getScreenWidth = function () {
  return window.outerWidth || window.innerWidth;
};

AdheseGateway.getSlotSizes = function (slotType, deviceType) {
  var sizeMapping = {
    main_leaderboard: {
      desktop: [
        [728, 90],
        [970, 250],
      ],
      tablet: [728, 90],
      mobile: [300, 250],
    },
    main_rectangle: {
      desktop: [
        [300, 250],
        [300, 600],
      ],
      tablet: [300, 250],
      mobile: [300, 250],
    },
    lower_rectangle: {
      desktop: [
        [300, 250],
        [300, 600],
      ],
      tablet: [300, 250],
      mobile: [300, 250],
    },
    site_takeover: {
      desktop: [1, 1],
      tablet: [],
      mobile: [],
    },
    post_forum: {
      desktop: [728, 90],
      tablet: [728, 90],
      mobile: [300, 250],
    },
  };
  return sizeMapping[slotType][deviceType];
};

AdheseGateway.findBiggestSize = function (sizes) {
  // we need to check if sizes is an array of arrays, if not, put it in an array
  if (!Array.isArray(sizes[0])) {
    sizes = [sizes];
  }

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
    account: AdheseGateway.account,
    host: "https://cdn03.hardwareluxx.de/json",
    location: "",
    safeframe: true,
    safeframeContainerID: "slotName",
    previewHost: "https://" + AdheseGateway.account + "-preview.adhese.org",
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
  console.log("parentId", parentId)
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
  HardwareluxxConfig
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

AdheseGateway.sendAdheseRequest = function (slots, HardwareluxxConfig) {
  AdheseGateway.logger("sendAdheseRequest()");
  //do POST request to adhese
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://cdn03.hardwareluxx.de/json",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      AdheseGateway.logger("response from adhese:");
      AdheseGateway.logger(response);
      //if we have a response, we render the ads
      AdheseGateway.handleAdheseResponse(response, slots, HardwareluxxConfig);
    } else {
      AdheseGateway.logger("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send(
    JSON.stringify(adhese.getRequestPayload(AdheseGateway.adhese.slots))
  );
};

AdheseGateway.createAdheseSlots = function (slots, HardwareluxxConfig) {
  //initialize adhese if not already done:
  AdheseGateway.initAdhese(slots, HardwareluxxConfig);

  // register adhese slots to adhese SDK
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var divId = slot.containerId;
    var location =
      HardwareluxxConfig.data.domain +
      "_" +
      HardwareluxxConfig.data.pageType +
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
  AdheseGateway.sendAdheseRequest(slots, HardwareluxxConfig);
};
AdheseGateway.init = function (HardwareluxxConfig) {
  //check deviceType
  AdheseGateway.deviceType = AdheseGateway.getDeviceType();
  //first we pick all slots based on device type
  var slots = AdheseGateway.filterSlotsOnDevice(HardwareluxxConfig.slots);
  //find sizes based on slotType and viewport, assign to slot object
  AdheseGateway.assignDeviceSizes(slots);
  AdheseGateway.createAdheseSlots(slots, HardwareluxxConfig);
};
AdheseGateway.init(HardwareluxxConfig);