Adhese.prototype.fadeOutFooter = function () {
  //function to remove footer wervingsbanner.
  adheseFooter = document.querySelector("#adheseFooter");
  const fadeEffect = setInterval(function () {
    if (!adheseFooter.style.opacity) {
      adheseFooter.style.opacity = 1;
    }
    if (adheseFooter.style.opacity > 0) {
      adheseFooter.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      adheseFooter.remove();
    }
  }, 20);
};
var adhese;
function initAdhese() {
  var debug = false;
  var multiFormatAuctionSlots = [];
  if (adheseData && adheseData.debug) debug = adheseData.debug;
  if (window.location.href.includes("adhesegw")) debug = true;
  var getDeviceType = function () {
    var width = window.innerWidth;
    var device = "";

    if (width < 769) {
      device = "phone";
    } else if (width < 1025) {
      device = "tablet";
    } else {
      device = "desktop";
    }
    return device;
  };

  adhese = new Adhese();
  var ads = new Array();
  var adsToLazyLoad = {};
  var scrollListenerAdded = false;
  var userInteractionDetected = false;
  var adBlocked = undefined;
  var isPageActive = true;

  adhese.init({
    debug: debug,
    poolHost: "https://content2.nrc.nl/",
    //account: "nrcmedia",
    host: "https://content1.nrc.nl/",
    location: "",
    safeframe: true,
    safeframeContainerID: "slotName",
    previewHost: "https://nrcmedia-preview.adhese.org",
    viewabilityTracking: true,
  });

  var getCookie = function (name) {
    var value = "";
    if (document.cookie && -1 != document.cookie.indexOf(name)) {
      var i,
        s,
        e = document.cookie.split(";");
      for (var n = 0; n < e.length; n++) {
        if (-1 != e[n].indexOf(name)) {
          2 <= (i = e[n].split("=")).length && (s = i[1]);
          value = s;
        }
      }
      return value;
    }
    return false;
  };

  var setCookie = function (cookieKey, cookieValue, minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + expires + "; path=/";
  };

  var getFormattedArticleUrl = function () {
    let url = window.location.href;
    url = url.split("?")[0]; //discard query string params
    url = url.split("nrc.nl/")[1]; //discard nrc.nl
    url = url.replace(/\//g, "_"); //replace all / by underscores
    if (window.location.href.includes("advertorial.nrc.nl")) {
      url = "advertorial_" + url;
    }
    return url;
  };

  var getQueryStringFromUrl = function (key) {
    var params = new URLSearchParams(window.location.search);
    for (var param of params) {
      if (param[0] == key) {
        return param[1];
      }
    }
    return "other";
  };

  var getQvSource = function () {
    var w = window.location.href;
    if (w.includes("adh_crid")) {
      return "banner";
    } else if (w.includes("nrc_source")) {
      return getQueryStringFromUrl("nrc_source");
    } else if (getCookie("adhqv")) {
      return getCookie("adhqv");
    } else {
      return "other";
    }
  };

  var registerTargets = function () {
    var targetArray = []; //create target array with adhese prefix
    var w = window.location.href;
    try {
      targetArray.push([
        "xt",
        [
          "CPLzTxEPLzTxEAHABBENBpCgAP_AAE_AAAAAEUwAgCXAIpAAAAEGgAwABBBcRABgACCC4AAA.f_gACfgAAAAA",
        ],
      ]);
      targetArray.push(["xf", [btoa(window.location.href)]]);
      targetArray.push(["tl", ["all"]]);
      if (adheseData && typeof adheseData.loggedIn !== undefined)
        targetArray.push(["li", [adheseData.loggedIn]]);
      if (adheseData && typeof adheseData.isSubscriber !== undefined)
        targetArray.push(["su", [adheseData.isSubscriber]]);
      if (adheseData && adheseData.pageType)
        targetArray.push(["pt", [adheseData.pageType]]);
      if (adheseData && adheseData.articleId)
        targetArray.push(["ai", [adheseData.articleId]]);
      if (adheseData && adheseData.deviceType)
        targetArray.push(["dt", [getDeviceType()]]);
      if (adheseData && adheseData.section)
        targetArray.push(["sc", [adheseData.section]]);
      if (adheseData && adheseData.subsection)
        targetArray.push(["ss", [adheseData.subsection]]);
      if (adheseData && adheseData.colorScheme)
        targetArray.push(["br", [adheseData.colorScheme]]);
      if (adheseData && adheseData.segment)
        targetArray.push([
          "sg",
          [
            adheseData.segment
              .toLowerCase()
              .replace(/ /g, "")
              .replace(/-/g, "")
          ],
        ]);
      if (adheseData && adheseData.topics) {
        var topics = adheseData.topics.map(function (topic) {
          return topic.replace(/-/g, "_").toLowerCase();
        });
        targetArray.push(["tp", [topics.join(";")]]);
      }
      if (typeof getCookie("adhblck") !== undefined)
        targetArray.push(["ab", [getCookie("adhblck")]]);
      if (w.includes("adhese.nrc.nl") || w.includes("adhese_debug"))
        targetArray.push(["ai", ["articletest"]]);
      if (w.includes("brandedcontent") || w.includes("advertorial.nrc.nl")) {
        targetArray.push(["an", [getFormattedArticleUrl()]]);
        targetArray.push(["qs", [getQvSource()]]);
        if (w.includes("utm_source"))
          targetArray.push(["us", [getQueryStringFromUrl("utm_source")]]);
        if (w.includes("utm_medium"))
          targetArray.push(["um", [getQueryStringFromUrl("utm_medium")]]);
        if (w.includes("utm_campaign"))
          targetArray.push(["uc", [getQueryStringFromUrl("utm_campaign")]]);
        if (w.includes("utm_term"))
          targetArray.push(["ut", [getQueryStringFromUrl("utm_term")]]);
        if (w.includes("utm_content"))
          targetArray.push(["uo", [getQueryStringFromUrl("utm_content")]]);
      }
      // get rayn targets
      var raynData = getStoredRaynData();
      if (raynData && raynData.personaIds) {
        targetArray.push(["rp", [raynData.personaIds.join(";")]]);
      }
      if (raynData && raynData.audienceCategoryIds) {
        targetArray.push(["ra", [raynData.audienceCategoryIds.join(";")]]);
      }
      //register targets
      for (var c = 0; c < targetArray.length; c++) {
        adhese.registerRequestParameter(targetArray[c][0], targetArray[c][1]);
      }
    } catch (e) {
      if (debug) console.log("error adding target(s)", e);
    }
  };

  var isUserLoggedIn = function () {
    var loggedIn = false;
    if (adheseData && adheseData.loggedIn) {
      loggedIn = adheseData.loggedIn;
    }
    return loggedIn;
  };

  //we call nmt.markSlotAsFilled from NRC to make sure their styling is applied to the ad container
  var markSlotAsFilled = function (ad, slots) {
    var configuredSlots = slots;
    var slotName = ad.slotName;
    for (slot in configuredSlots) {
      if (configuredSlots[slot].slotCode == slotName) {
        var slotElem = document.getElementById(configuredSlots[slot].divId);
        window.nmt.markSlotAsFilled(slotElem);
        if (debug)
          console.log("mark", configuredSlots[slot].divId, "as filled");
        //check if slot is eligble to be refreshed
        if (configuredSlots[slot].allowRefill) {
          startRefillTimer(configuredSlots[slot]);
        }
      }
    }
  };

  var trackAction = function (action, ad) {
    var iabTracker =
      ad && ad.viewableImpressionCounter ? ad.viewableImpressionCounter : null;
    //the actiontracker is identical to the IABview tracker, just replace Adhese_IABview in the URL and return that.

    var ADHESE_IMPRESSION_ID = undefined;
    var ADHESE_LOG_ID = undefined;
    var ADHESE_SLOT_ID = undefined;

    var params = new URLSearchParams(window.location.search);
    for (var param of params) {
      if (param[0] == "adh_ii") ADHESE_IMPRESSION_ID = param[1];
      if (param[0] == "adh_crid") ADHESE_LOG_ID = param[1];
      if (param[0] == "adh_slid") ADHESE_SLOT_ID = param[1];
    }
    //if these values are present in URL, we want to assign the QV track to the banner/click resulting in this landing.
    if (
      ADHESE_IMPRESSION_ID &&
      ADHESE_LOG_ID &&
      ADHESE_SLOT_ID &&
      ADHESE_LOG_ID !== "[adheseLogID]"
    ) {
      let actionTracker =
        "https://content1.nrc.nl/track/" +
        ADHESE_LOG_ID +
        "-" +
        action +
        "/II" +
        ADHESE_IMPRESSION_ID +
        "/sl" +
        ADHESE_SLOT_ID +
        "/?" +
        new Date().getTime();
      adhese.helper.addTrackingPixel(actionTracker);
    }
    if (iabTracker) {
      //else we assign action track to the tracking slot, for QV landing from external sources
      let actionTracker = iabTracker.replace("Adhese_IABview", action);
      adhese.helper.addTrackingPixel(actionTracker);
    }
    //return actionTracker;
  };

  var checkForQualityView = function (ad) {
    var isTabActive = true;
    var qualityViewTracked = false;
    var currentDwellTime = 1;

    var handleVisibilityChange = function () {
      if (document.hidden) {
        isTabActive = false;
      } else {
        isTabActive = true;
        //if quality view wasn't already tracked, start counting.
        if (!qualityViewTracked) startQvTimer();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false
    );

    var startQvTimer = function () {
      setTimeout(function () {
        if (isTabActive && !qualityViewTracked) {
          trackAction("qv", ad);
          //adhese.helper.addTrackingPixel(getActionTracker('qv', ad));
          qualityViewTracked = true;
        }
      }, 15000);
    };
    startQvTimer();

    var firedDwellTimeTrackers = {
      5: false,
      10: false,
      15: false,
      30: false,
      60: false,
      90: false,
      120: false,
      180: false,
      240: false,
      300: false,
    };

    var checkForDwellTrack = function (dwellTime) {
      if (isTabActive) {
        currentDwellTime = dwellTime + 1;
      }
      if (
        typeof firedDwellTimeTrackers[dwellTime] !== undefined &&
        firedDwellTimeTrackers[dwellTime] == false
      ) {
        var trackName = "dwell" + dwellTime.toString();
        trackAction(trackName, ad);
        //var tracker = getActionTracker(trackName, ad);
        //adhese.helper.addTrackingPixel(tracker);
        firedDwellTimeTrackers[dwellTime] = true;
        // we could potentially fire qv tracker from here, but lets first see if numbers add up with old method.
      }
    };

    var increaseDwellTime = setInterval(function () {
      // every second check if page is still active
      // if so, increase dwelltime counter and potentially fire action tracker
      checkForDwellTrack(currentDwellTime);
    }, 1000);

    //track scroll depth
    var firedScrollTrackers = {
      scroll0: false,
      scroll25: false,
      scroll50: false,
      scroll75: false,
      scroll100: false,
    };

    var fireScrollTracker = function (pctScrolled) {
      if (pctScrolled >= 0 && !firedScrollTrackers.scroll0) {
        firedScrollTrackers.scroll0 = true;
        trackAction("scroll0", ad);
        //adhese.helper.addTrackingPixel(getActionTracker('scroll0', ad));
      }
      if (pctScrolled >= 25 && !firedScrollTrackers.scroll25) {
        firedScrollTrackers.scroll25 = true;
        trackAction("scroll25", ad);
        //adhese.helper.addTrackingPixel(getActionTracker('scroll25', ad));
      }
      if (pctScrolled >= 50 && !firedScrollTrackers.scroll50) {
        firedScrollTrackers.scroll50 = true;
        trackAction("scroll50", ad);
        //adhese.helper.addTrackingPixel(getActionTracker('scroll50', ad));
      }
      if (pctScrolled >= 75 && !firedScrollTrackers.scroll75) {
        firedScrollTrackers.scroll75 = true;
        trackAction("scroll75", ad);
        //adhese.helper.addTrackingPixel(getActionTracker('scroll75', ad));
      }
      if (pctScrolled >= 100 && !firedScrollTrackers.scroll100) {
        firedScrollTrackers.scroll100 = true;
        trackAction("scroll100", ad);
        //adhese.helper.addTrackingPixel(getActionTracker('scroll100', ad));
      }
    };

    var measureScrollDepth = function () {
      function getDocHeight() {
        var D;
        if (window.location.href.includes("advertorial.nrc.nl")) {
          //element to observe for advertorial pages
          D = document.getElementsByClassName("y-article__content")[0];
        } else {
          //element to observe for brandedcontent pages
          D = document.getElementsByClassName("article__header-and-content")[0];
        }
        return Math.max(D.scrollHeight, D.offsetHeight, D.clientHeight);
      }

      var docheight = getDocHeight();
      var winheight, docheight, trackLength, throttlescroll;

      function getmeasurements() {
        winheight =
          window.innerHeight ||
          (document.documentElement || document.body).clientHeight;
        docheight = getDocHeight();
        trackLength = docheight - winheight;
      }

      function amountscrolled() {
        var scrollTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        fireScrollTracker(pctScrolled);
      }

      getmeasurements();

      window.addEventListener(
        "resize",
        function () {
          getmeasurements();
        },
        false
      );

      window.addEventListener(
        "scroll",
        function () {
          clearTimeout(throttlescroll);
          throttlescroll = setTimeout(function () {
            // throttle code inside scroll to once every 50 milliseconds
            amountscrolled();
          }, 50);
        },
        false
      );
    };
    measureScrollDepth();
    trackAction("qvlanding", ad);
    //adhese.helper.addTrackingPixel(getActionTracker('qvlanding', ad));
  };

  var determineRenderType = function (ad) {
    if (debug) console.log("determine render type for", ad);
    var adMarkup = ad.body != "" ? ad.body : ad.tag;
    if (ad.slotName.includes("klantwaarde")) {
      return "html";
    }
    //determine render type based on response
    else if (
      ad.height == "1000" ||
      (ad.width == "1" && ad.height == "2") ||
      (ad.width == "320" && ad.height == "400") ||
      (ad.width == "1" && ad.height == "1") ||
      (ad.width == "748" && ad.height == "200")
    ) {
      return "friendlyIframe";
    } else if (
      adMarkup.includes("weborama") ||
      adMarkup.includes("nookie.io") || 
      adMarkup.includes("cavai")
    ) {
      return "friendlyIframe";
    } else if (ad && typeof ad.ext !== "undefined" && ad.ext == "advar") {
      return "friendlyIframe";
    } else {
      return "safeframe";
    }
  };

  var renderInFriendlyIframe = function (ad) {
    if (debug) console.log("render in friendly iframe", ad);
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

  var getCookie = function (name) {
    var value = "";
    if (document.cookie && -1 != document.cookie.indexOf(name)) {
      var i,
        s,
        e = document.cookie.split(";");
      for (var n = 0; n < e.length; n++) {
        if (-1 != e[n].indexOf(name)) {
          2 <= (i = e[n].split("=")).length && (s = i[1]);
          value = s;
        }
      }
      return value;
    }
    return false;
  };

  var lazyLoadAds = function (slots) {
    var configuredSlots = slots;
    var ads = adsToLazyLoad;
    var checkAds = function () {
      for (ad in ads) {
        if (
          adhese.helper.adhElementInViewportWithPercentage(ad, 1, 1, 1) &&
          !ads[ad].rendered
        ) {
          //if container is 1px in view and not yet rendered, render.
          if (debug) console.log(ads[ad].slotName, "in view, begin to render");
          var renderType = determineRenderType(ads[ad]);
          if (renderType == "friendlyIframe") {
            renderInFriendlyIframe(ads[ad]);
          } else {
            adhese.safeframe.render(ads[ad].slotName); //render ad
          }
          //adhese.helper.addTrackingPixel(ads[ad].tracker); //add impression tracker
          ads[ad].rendered = true;
          markSlotAsFilled(ads[ad], configuredSlots);
        }
      }
    };
    window.addEventListener("scroll", checkAds);
    checkAds(); //check once to see if there are slots already in view
  };

  var reloadQueue = [];

  var startRefillTimer = function (slot) {
    if (debug) console.log("startRefillTimer,", slot);
    var delay = 10000; //show a new ad every 10s
    if (debug) console.log("starting refill timer for", slot, delay);

    var reloadSlot = setTimeout(function () {
      var configuredSlots = {}; //reset configuredSlots so we can use requestAds()
      configuredSlots[slot.location] = slot;
      configuredSlots[slot.location].refilled = true; //mark slot as refilled so we can apply logic that removes previous ad before next render in requestAds.
      configuredSlots[slot.location].refillCount = configuredSlots[
        slot.location
      ].refillCount
        ? configuredSlots[slot.location].refillCount + 1
        : 1;
      if (debug)
        console.log(
          "refill count for slot",
          configuredSlots[slot.location],
          configuredSlots[slot.location].refillCount
        );
      ads = []; //clear ads
      if (configuredSlots[slot.location].refillCount < 5) {
        if (isPageActive) {
          //if page is active, fetch new ads
          requestAds(configuredSlots);
        } else {
          //if page is not active, push slot into reloadQueue so that ads can be fetched if user comes back
          reloadQueue.push(configuredSlots);
          if (debug) console.log("add to reload queue", configuredSlots);
        }
      } else {
        if (debug)
          console.log(
            "refresh limit reached for slot",
            configuredSlots[slot.location]
          );
      }
    }, delay);
  };

  var checkReloadQueue = function () {
    //fetch ads added to reloadQueue array, these were added while the user was not actively browsing
    if (debug) console.log("checkReloadQueue", reloadQueue);
    for (var i = 0; i < reloadQueue.length; i++) {
      if (reloadQueue[i]) {
        requestAds(reloadQueue[i]);
        reloadQueue.splice(i, 1);
      }
    }
  };

  var visibilityChange = function () {
    if (document.hidden) {
      if (debug) console.log("hidden");
      isPageActive = false;
    } else {
      if (debug) console.log("not hidden");
      isPageActive = true;
      checkReloadQueue();
    }
  };
  //use visibilitychange API for detecting if user moves to other tab
  document.addEventListener("visibilitychange", visibilityChange, false);

  //use blur/focus to detect if user moves to different window
  window.addEventListener("blur", () => {
    if (debug) console.log("blur");
    isPageActive = false;
  });
  window.addEventListener("focus", () => {
    if (debug) console.log("focus");
    isPageActive = true;
    checkReloadQueue();
  });

  var setContainerDimensions = function (slot) {
    //set w/h of container to avoid page bouncing when reloading slot
    var container = document.getElementById(slot.divId);
    var width = slot.size.split("x")[0];
    var height = slot.size.split("x")[1];
    container.style.height = height + "px";
    container.style.width = width + "px";
  };

  var removeContainer = function (parent, slot) {
    if (debug) console.log("removeContainer", slot);
    setContainerDimensions(slot);
    if (debug) console.log("removing child nodes of", parent);
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  var createContainerAndCheckForRender = function (ad, slots) {
    var configuredSlots = slots;
    for (var c in configuredSlots) {
      var slotCode = configuredSlots[c].slotCode;
      if (ad.slotName == slotCode) {
        if (
          typeof configuredSlots[c].refilled !== undefined &&
          configuredSlots[c].refilled
        ) {
          //if slot is refreshed, first remove previous container content before rendering new ad
          var el = document.getElementById(configuredSlots[c].divId);
          removeContainer(el, configuredSlots[c]);
        }
        var container = document.getElementById(configuredSlots[c].divId);
        var loggedIn = isUserLoggedIn();
        if (container) {
          container.style.marginBottom = "10px";
          container.style.display = "block";
          container.parentElement.style.display = "block";
          var con = document.createElement("div");
          con.id = ad.slotName;
          container.appendChild(con);
          if (configuredSlots[c].lazyLoaded) {
            //if ad is to be lazyloaded, add to lazyload object
            adsToLazyLoad[ad.slotName] = ad;
            adsToLazyLoad[ad.slotName].rendered = false;
          } else {
            //if not lazyloaded, start render process
            var renderType = determineRenderType(ad);
            if (renderType == "friendlyIframe") {
              renderInFriendlyIframe(ad);
            } else {
              adhese.safeframe.render(ad.slotName); //if not lazyloaded, render instantly
            }
            markSlotAsFilled(ad, configuredSlots);
            try {
              if (configuredSlots[c].allowRefill) {
                //check if slot should be refreshed
                startRefillTimer(configuredSlots[c]);
                if (debug)
                  console.log(
                    "starting refill Timer for",
                    configuredSlots[c].location
                  );
              }
            } catch (e) {
              console.log(e);
              if (debug)
                console.log(
                  "allowRefill or refillDelay not defined for slot",
                  configuredSlots[c]
                );
            }
          }
        }
      }
    }
  };

  var getMediaType = function (ad) {
    var tag = ad.tag ? ad.tag : ad.body;
    if (tag.includes("<VAST")) {
      return "video";
    } else if (ad.adFormat == "werving") {
      return "wervingsbanner";
    } else if (ad.slotName.includes("klantwaarde")) {
      return "klantwaarde";
    } else if (ad.adFormat == "tracker-1x1") {
      return "brandedcontent-tracker";
    } else {
      return "banner";
    }
  };

  var createCompanionMarkup = function (companions) {
    var companion = companions[0];
    var clickUrl = companion.click;
    var logo = companion.resource;
    var ctaText = "Meer weten over dit product?";
    var markUp =
      '<div class="cta_center" style="position: absolute;left: 50%;top: 70%;transform: translate(-50%, -50%); font-family:Guardian Text Egyptian Web,Georgia,sans-serif"><img class="cta_logo" src=' +
      logo +
      ' style="width: 250px;position: absolute;left: 50%;bottom:50%;transform: translate(-50%, -50%);"><h1 class="cta_head" style="text-align: center;line-height: normal;">Meer weten over dit product?</h1><p class="cta_link" style="text-align: center; padding:5px"><a href="' +
      clickUrl +
      '" target="_blank">klik hier</a></p></div>';

    var ctaDiv = document.createElement("div");
    ctaDiv.className = "cta_div";
    ctaDiv.style.zIndex = "100";
    ctaDiv.style.position = "absolute";
    ctaDiv.style.color = "black";
    ctaDiv.style.top = "0";
    ctaDiv.style.left = "0";
    ctaDiv.style.width = "100%";
    ctaDiv.style.height = "100%";
    ctaDiv.innerHTML = markUp;

    jwplayer().on("adComplete", function (event) {
      var playerEl = document.getElementById("outstreamContainer");
      playerEl.appendChild(ctaDiv);
    });
  };

  var initJWOutstream = function (xml, container) {
    //create container for player
    var div = document.createElement("div");
    div.id = "outstreamContainer";
    document.getElementById(container).appendChild(div);

    //load JW player
    var scrpt = document.createElement("script");
    scrpt.async = true;
    scrpt.type = "text/javascript";
    scrpt.src =
      "https://content2.nrc.nl/projects/media_player/jwplayer-8.20.4/jwplayer.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(scrpt, node);
    scrpt.onload = function () {
      window.jwplayer.key = "tMSPuTAyVRnXvoiVM5lpO3nc8AQvJ92v1WBmzS4J9rHCp1Oo";
      jwplayer("outstreamContainer").setup({
        aspectratio: "16:9",
        width: "100%",
        advertising: {
          client: "vast",
          outstream: true,
          vastxml: xml,
          endstate: "open",
          vpaidcontrols: true,
          controls: true,
        },
        floating: {
          mode: "never",
        },
        autoPause: {
          viewability: true,
          pauseAds: true,
        },
        displayHeading: false,
      });

      jwplayer().on("adCompanions", function (event) {
        createCompanionMarkup(event.companions);
      });

      // Get clickthrough url if ad is being viewed
      let clickUrl = "";
      jwplayer().on("adViewableImpression", function ({ clickThroughUrl }) {
        clickUrl = clickThroughUrl;
      });

      // If the ad completes
      jwplayer().on("adComplete", function () {
        // Get the players container
        const container = jwplayer().getContainer();

        // Get and the colors from the document if they exist
        let bgColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--primary-background")
          ? "var(--primary-background)"
          : null;
        let textColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--primary-text")
          ? "var(--primary-text)"
          : null;

        // If the variables don't exist, use light mode as standard
        if (!bgColor || !textColor) {
          bgColor = "#fff";
          textColor = "#1a1a1a";
        }

        // Set fontFamily for text and button
        const fontFamily =
          "LFT Etica,Lucida Sans,Lucida Grande,Lucida Sans Unicode,Arial,sans-serif";

        // Create parent overlay
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.zIndex = "100";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.color = textColor;
        overlay.style.fontFamily = fontFamily;
        overlay.style.fontSize = "16px/145%";
        overlay.style.fontWeight = "300";
        overlay.style.textAlign = "center";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.display = "flex";
        overlay.style.flexDirection = "column";
        overlay.style.backgroundColor = bgColor;
        overlay.onclick = function () {
          window.open(clickUrl);
        };

        // Create text content
        const text = document.createElement("div");
        text.textContent = "Meer weten over dit product?";
        text.style.marginBottom = "10px";

        // Create button
        const button = document.createElement("button");
        button.textContent = "Klik hier";
        button.style.backgroundColor = "var(--nrc-red)";
        button.style.color = "#fff";
        button.style.padding = "10px";
        button.style.border = "none";
        button.style.outline = "none";
        button.style.borderRadius = "5px";
        button.style.fontFamily = fontFamily;
        button.style.fontSize = "16px/145%";
        button.style.fontWeight = "500";

        // Append the elements
        overlay.appendChild(text);
        overlay.appendChild(button);
        container.appendChild(overlay);
      });
    };
  };

  var renderWervingsBanner = function (ad) {
    var tag = ad.tag ? ad.tag : ad.body;
    var impressionTracker =
      "<img src='" +
      ad.trackedImpressionCounter +
      "' border='0' width='1' height='1' alt='' style='display:none'/>";
    tag = tag + impressionTracker;
    var container = document.createElement("div");
    container.innerHTML = tag;

    if (tag.includes("topad")) {
      var parent = document.querySelectorAll("[data-banner-holder]")[0];
      parent.appendChild(container);
      initTopad();
    } else {
      document.body.appendChild(container);
    }
  };

  var renderKlantwaardeBanner = function (ad) {
    var tag = ad.tag ? ad.tag : ad.body;
    var impressionTracker =
      "<img src='" +
      ad.trackedImpressionCounter +
      "' border='0' width='1' height='1' alt='' style='display:none'/>";
    tag = tag + impressionTracker;
    var container = document.createElement("div");
    container.innerHTML = tag;

    if (ad.slotName.includes("topbanner")) {
      renderBanner({
        ad,
        container: ".banner--klantwaarde-topbanner",
      });
    } else if (ad.slotName.includes("inline")) {
      renderBanner({
        ad,
        container: ".banner--klantwaarde-inline",
      });
    } else if (ad.slotName.includes("overlay")) {
      renderBanner({
        ad,
        container: ".banner--klantwaarde-overlay",
        options: {
          overlay: true,
        },
      });
    } else if (ad.slotName.includes("floorad")) {
      renderBanner({
        ad,
        container: ".banner--klantwaarde-floorad",
        options: {
          overlay: true,
        },
      });
    } else {
      document.body.appendChild(container);
    }
  };

  const renderBanner = function ({ ad, container, options }) {
    // Get required elements from DOM
    const adContainer = document.querySelector(container);

    if (!adContainer) {
      console.error("Ad container not found");
      return;
    }

    // Style adContainer
    adContainer.style.height = "auto";
    adContainer.style.width = "100%";

    // Banner specific styles
    if (options && options.overlay) {
      adContainer.style.position = "fixed";
      adContainer.style.bottom = "0";
      adContainer.style.left = "0";
      adContainer.style.zIndex = "9999";
    }

    // Get adMarkup
    const adMarkup = ad.tag ? ad.tag : ad.body;

    // Insert the adMarkup, excluding <script> tags, using innerHTML.
    adContainer.innerHTML = adMarkup.replace(
      /<script[^>]*>([\s\S]*?)<\/script>/gi,
      ""
    );

    // Match and capture all <script> tags.
    const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    let scriptsToExecute = [];

    // Extract the JavaScript to execute.
    while ((match = scriptRegex.exec(adMarkup)) !== null) {
      scriptsToExecute.push(match[1]);
    }

    // For each script, create a new script element and execute it.
    scriptsToExecute.forEach((scriptContent) => {
      if (scriptContent.trim()) {
        const correctedScriptContent = scriptContent.replace(/\\'/g, "'"); // Correct the escaping
        const scriptElement = document.createElement("script");
        scriptElement.text = correctedScriptContent;
        document.body.appendChild(scriptElement);
      }
    });
  };

  var initTopad = function () {
    // Get required elements from DOM
    const topad = document.querySelector("#adhese_topad");
    const textVariables = document.querySelector(".adheseTextVariables");
    const topadTekstRegular = document.querySelector(
      "#adhese_topad_text_regular"
    );
    const topadTekstBold = document.querySelector("#adhese_topad_text_bold");
    const topadMobileTekstBold = document.querySelector(
      "#adhese_topad_mobile_text_bold"
    );

    // Create text variables from adheseTextVariables
    const mobieleTekstRegular = textVariables.dataset.mobile_text_regular;
    const mobieleTekstBold = " " + textVariables.dataset.mobile_text_bold;
    const desktopTekstRegular = textVariables.dataset.desktop_text_regular;
    const desktopTekstBold = textVariables.dataset.desktop_text_bold;

    // Function for opening link in browser after clicking the ad-container
    topad.onclick = function () {
      window.open(
        textVariables.dataset.adh_url + "?" + textVariables.dataset.utm_intern
      );
    };

    // Displays text for desktop
    function displayDesktopText() {
      topadTekstRegular.innerHTML = desktopTekstRegular;
      topadTekstBold.innerHTML = desktopTekstBold;
    }

    // Displays text for mobile
    function displayMobileText() {
      topadTekstRegular.innerHTML = mobieleTekstRegular;
      let topadMobileTekstBold = document.createElement("span");
      topadMobileTekstBold.className = "adhese_topad__item--text bold";
      topadMobileTekstBold.setAttribute("id", "adhese_topad_mobile_text_bold");
      topadMobileTekstBold.innerHTML = mobieleTekstBold;
      topadTekstRegular.appendChild(topadMobileTekstBold);
    }

    // Constantly checks viewport for changes and updates text using above functions
    function checkViewport() {
      const viewWidth = Math.max(
        document.documentElement.clientWidth || 0,
        topad.innerWidth || 0
      );

      if (viewWidth > 800 && viewWidth <= 1410) {
        displayDesktopText();
      } else if (viewWidth <= 800) {
        displayMobileText();
      } else {
        displayDesktopText();
      }
    }

    // Initial viewport check
    checkViewport();
    // Observer for viewport
    new ResizeObserver(checkViewport).observe(topad);
  };

  var isPaywallShown = function () {
    if (document.getElementsByClassName("has-paywall").length > 0) return true;
    return false;
  };

  var getAdCpm = function (ad) {
    var cpm = 0;
    if (
      ad.extension &&
      ad.extension.prebid &&
      ad.extension.prebid.cpm &&
      ad.extension.prebid.cpm.amount
    ) {
      cpm = ad.extension.prebid.cpm.amount;
    }
    return cpm;
  };

  var requestAds = function (slotsObject) {
    const configuredSlots = Object.values(slotsObject);

    if (typeof debug !== "undefined" && debug)
      console.log(
        "configured slots for ",
        getDeviceType(),
        ":",
        configuredSlots
      );

    if (configuredSlots.length === 0) return;

    let addedSlots = [];
    let ads = [];
    let multiFormatAuctionSlots = [];

    configuredSlots.forEach((slot) => {
      let multiFormatAuction = slot.mediaTypes && slot.mediaTypes.length > 1;
      if (slot.location === "belowarticle-mobile-appview")
        multiFormatAuction = true;

      let location = slot.location;
      if (window.adheseData && window.adheseData.pageType) {
        location = `${window.adheseData.pageType}_${slot.location}`;
      } else {
        console.log(
          "window.adheseData.pageType not found. Unable to construct slots"
        );
        return;
      }

      const slotCode = `${location}-${slot.size}`;
      slot.slotCode = slotCode;

      if (!addedSlots.includes(slotCode)) {
        ads.push(
          adhese.tag(slot.size, {
            location: location,
            containerId: slot.divId,
          })
        );
        addedSlots.push(slotCode);
      } else {
        console.log(
          "Adhese: Not processing duplicate slot. please make sure all location/size combinations are unique:",
          slot
        );
      }

      if (multiFormatAuction) {
        try {
          let additionalSlot = Object.create(slot);
          const key = `${slot.divId}-outstream`;
          configuredSlots[key] = additionalSlot;
          configuredSlots[key].slotCode = location + "-outstream";

          multiFormatAuctionSlots.push(`${location}-${slot.size}`);
          multiFormatAuctionSlots.push(`${location}-outstream`);

          ads.push(
            adhese.tag("outstream", {
              location: location,
              containerId: slot.divId,
            })
          );
        } catch (e) {
          console.log(
            "Adhese: unable to add slot for secondary media type: ",
            e
          );
        }
      }
    });

    if (typeof debug !== "undefined" && debug)
      console.log("Requesting ads for:", ads);

    let adUri = adhese.getMultipleRequestUri(ads, { type: "json" });

    for (let p in adhese.previewFormats) {
      if (adhese.previewFormats.hasOwnProperty(p)) {
        // Check property belongs to the object
        for (let x = 0; x < ads.length; x++) {
          const ad = ads[x];

          if (p === ad.format || ad.containingElementId.includes(p)) {
            let adUrl;

            if (ad.swfSrc && ad.swfSrc !== "") {
              adUrl = ad.swfSrc;
            } else {
              const adhesePreviewUrl = "https://nrcmedia-preview.adhese.org";
              const adhesePreviewId = getQueryStringFromUrl(
                "adhesePreviewCreativeId"
              );
              const adhesePreviewSlotId = getQueryStringFromUrl(
                "adhesePreviewSlotId"
              );
              adUrl = `${adhesePreviewUrl}/creatives/preview/json/tag.do?id=${adhesePreviewId}&slotId=${adhesePreviewSlotId}`;
            }

            AdheseAjax.request({
              url: adUrl,
              method: "get",
              json: true,
            }).done(function (result) {
              const adDetails = result[0];
              adDetails.slotName = ad.options.slotName;
              adDetails.viewableImpressionCounter = "";
              adDetails.tag = adDetails.tag
                .replace(/\[adheseReplace.*?\]/g, "")
                .replace(/\[adheseLogID\]/g, "");
              adDetails.body = adDetails.body
                .replace(/\[adheseReplace.*?\]/g, "")
                .replace(/\[adheseLogID\]/g, "");

              const mediaType = getMediaType(adDetails);
              if (mediaType === "klantwaarde") {
                renderKlantwaardeBanner(adDetails);
              } else {
                adhese.safeframe.addPositions(result);
                createContainerAndCheckForRender(adDetails, configuredSlots);
              }
            });
          }
        }
      }
    }

    AdheseAjax.request({
      url: adUri,
      method: "get",
      json: true,
    }).done(function (results) {
      if (debug) console.log("Received ads for:", results);
      if (isPaywallShown()) {
        console.log("paywall shown, not rendering ads.");
        return;
      }

      var multiFormatBids = [];

      for (var i in results) {
        var ad = results[i];

        if (multiFormatAuctionSlots.includes(ad.slotName)) {
          //if there are responses that belong to a multi-format slot, save the cpm and its index in results array so we can use this later.
          multiFormatBids.push([getAdCpm(ad)]);
        }

        if (ad.origin == "JERLICIA" && getMediaType(ad) == "banner") {
          var moatScript =
            "<script type='text/javascript' src='https://z.moatads.com/nrcadhesedisplay65304621824/moatad.js#moatClientLevel1=" +
            ad.advertiserId +
            "&moatClientLevel2=" +
            ad.orderId +
            "&moatClientLevel3=" +
            ad.adspaceId +
            "&moatClientLevel4=" +
            ad.libId +
            "&moatClientSlicer1=NRC&moatClientSlicer2=" +
            ad.slotID +
            "&moatClientSlicer3=" +
            ad.width +
            "x" +
            ad.height +
            "'></script>";
          var impressionTracker =
            "<img src='" +
            ad.trackedImpressionCounter +
            "' border='0' width='1' height='1' alt='' style='display:none'/>";
          if (ad.body && ad.body != "" && ad.body != "<ADHESE_BODY>") {
            ad.body = ad.body + impressionTracker + moatScript;
          } else {
            ad.tag = ad.tag + impressionTracker + moatScript;
          }
        } else if (getMediaType(ad) == "brandedcontent-tracker") {
          adhese.helper.addTrackingPixel(ad.trackedImpressionCounter);
          checkForQualityView(ad);
          setCookie("adhqv", "clickthrough", 5); //we mark a user who visited a qv article for 5 minutes so that we can assign potential clickthroughs to other articles to this imp
        } else if (getMediaType(ad) == "wervingsbanner") {
          renderWervingsBanner(ad);
        } else if (getMediaType(ad) == "klantwaarde") {
          renderKlantwaardeBanner(ad);
        }
      }

      //check if there are multiple bids for the same slots, and throw the lowest bid out of results
      if (multiFormatBids.length > 1) {
        // if (multiFormatBids[0][0] > multiFormatBids[1][0]) {
        //     results.splice(multiFormatBids[1][1], 1);
        // } else if(multiFormatBids[0][0] < multiFormatBids[1][0]) {
        //     results.splice(multiFormatBids[0][1], 1);
        // } else {
        //     results.splice(multiFormatBids[1][1], 1);
        // };
      }

      adhese.safeframe.addPositions(results);
      for (var x in results) {
        var ad = results[x];
        var tag = ad.tag ? ad.tag : ad.body;
        if (getMediaType(ad) == "video") {
          for (slot in configuredSlots) {
            if (configuredSlots[slot].slotCode == ad.slotName) {
              initJWOutstream(tag, configuredSlots[slot]["divId"]);
              markSlotAsFilled(ad, configuredSlots);
            }
          }
        } else if (getMediaType(ad) !== "wervingsbanner") {
          createContainerAndCheckForRender(ad, configuredSlots);
        }
      }
      lazyLoadAds(configuredSlots); //start rendering ads in lazyload queue
    });
  };
  registerTargets();
  requestAds(window.adheseSlots);

  //add eventlistener to resize iframes from within safeframe
  try {
    window.top.addEventListener(
      "message",
      function (event) {
        if (event.data.type == "adheseResizeIframe") {
          var frame = document.getElementById(
            "frontpage_brandedcontent-item-niet-te-missen-366x680"
          );
          var adHeight = event.data.eventMessage.adHeight;
          frame.style.height = adHeight + "px !important";
        }
      },
      false
    );
  } catch (e) {
    console.log(e);
  }

  // Load the Rayn script
  (function (d, s, id) {
    var js,
      rjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src =
      "https://wrappers.prod.rayn.io/connections/dcf0ca5c-c6a5-4e74-ad5f-fc582b2fb67d/bundle.js";
    js.onload = function () {
      fetchRaynData();
    };
    rjs.parentNode.insertBefore(js, rjs);
  })(document, "script", "rayn-js");

  // Function to call Rayn API functions and store results
  async function fetchRaynData() {
    try {
      // Fetch data from Rayn API
      const contentCategoryIds = await raynJS.getContentCategoryIds(true);
      const audienceCategoryIds = await raynJS.getAudienceCategoryIds();
      const personaIds = await raynJS.getPersonaIds();

      // Store the results in an object
      const raynData = {
        contentCategoryIds,
        audienceCategoryIds,
        personaIds,
      };

      // Store raynData in localStorage
      localStorage.setItem("raynData", JSON.stringify(raynData));
      // log content category ids server side by calling  https://content1.nrc.nl/usersync/handlers/rayn_contextual/user_sync?id=[event]&u=[user]&ttl=43200
      const contentCategoryIdsString = contentCategoryIds.join(";");
      const userId = btoa(window.location.href);
      const contentSyncUrl = `https://content1.nrc.nl/usersync/handlers/rayn_contextual/user_sync?id=${contentCategoryIdsString}&u=${userId}&ttl=43200`;
      // do a fetch to the user sync url
      //fetch(contentSyncUrl)

      return raynData;
    } catch (error) {
      console.error("Error fetching Rayn data:", error);
    }
  }

  // Function to get raynData from localStorage
  function getStoredRaynData() {
    const raynData = localStorage.getItem("raynData");
    return raynData ? JSON.parse(raynData) : null;
  }
}

//let NRC know we're ready.
(function () {
  window.adheseLoaded = true;
  var event = new Event("adheseLoaded");
  window.dispatchEvent(event);
})();

//separate function to determine if an adblocker is active, this is done before everything else and regardless of NRC calls initAdhese()
(function () {
  var setCookie = function (cookieValue) {
    var date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); //reset every 30d
    expires = "; expires=" + date.toUTCString();
    document.cookie = "adhblck=" + cookieValue + expires + "; path=/";
  };

  var getCookie = function (name) {
    var value = "";
    if (document.cookie && -1 != document.cookie.indexOf(name)) {
      var i,
        s,
        e = document.cookie.split(";");
      for (var n = 0; n < e.length; n++) {
        if (-1 != e[n].indexOf(name)) {
          2 <= (i = e[n].split("=")).length && (s = i[1]);
          value = s;
        }
      }
      return value;
    }
    return;
  };

  var cookieValue = getCookie("adhblck");
  if (typeof cookieValue == "undefined") {
    var scrpt = document.createElement("script");
    scrpt.async = false;
    scrpt.type = "text/javascript";
    scrpt.src = "https://pool-nrcmedia.adhese.com/tag/prebid-ads.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(scrpt, node);
    scrpt.onload = function () {
      setCookie("false");
    };
    scrpt.onerror = function () {
      setCookie("true");
    };
  }
})();

if (window.location.hostname.includes("advertorial.nrc.nl")) {
  //for advertorial pages there is no actual adserving setup, so we add a fake slot so we can track QV events.
  var adheseSlots = {
    "adslot0-brandedcontent-tracker": {
      allowRefill: false,
      divId: "adslot0-brandedcontent-tracker",
      lazyLoaded: false,
      location: "brandedcontent-tracker",
      mediaTypes: ["banner"],
      size: "1x1",
      slotCode: "article_brandedcontent_tracker-1x1",
    },
  };

  var adheseData = {
    articleId: 0,
    colorScheme: "light",
    consent: false,
    debug: false,
    isSubscriber: true,
    loggedIn: true,
    pageType: "article",
    section: "ros",
  };
  initAdhese();
}
