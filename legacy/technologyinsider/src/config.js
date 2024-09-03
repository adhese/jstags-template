function Adhese() {
  return (
    (this.config = {
      debug: !1,
    }),
    (this.request = {}),
    (this.requestExtra = []),
    (this.ads = []),
    (this.that = this),
    (this.helper = new this.Helper()),
    (this.detection = new this.Detection()),
    this
  );
}
(Adhese.prototype.Ad = function (e, t, i) {
  return (
    (this.format = i && i.format ? i.format : t),
    (this.options = e.helper.merge(
      {
        write: !1,
      },
      i
    )),
    (this.uid = t),
    (this.safeframe = !(!i || !i.safeframe) && i.safeframe),
    null != this.options.position &&
      (this.uid = this.options.position + this.format),
    null != this.options.containerId
      ? (this.containerId = this.options.containerId)
      : (this.containerId = ""),
    (this.options.slotName = this.getSlotName(e)),
    (this.containingElementId = this.getContainingElementId()),
    i && i.parameters
      ? (this.parameters = i.parameters)
      : (this.parameters = {}),
    this
  );
}),
  (Adhese.prototype.Ad.prototype.getContainingElementId = function () {
    return this.options.slotName && "" != this.containerId
      ? this.options.slotName + "_" + this.containerId
      : this.options.slotName
      ? this.options.slotName
      : "" != this.containerId
      ? this.uid + "_" + this.containerId
      : this.uid;
  }),
  (Adhese.prototype.Ad.prototype.getSlotName = function (e) {
    return (
      (this.options.position && this.options.location
        ? this.options.location + this.options.position
        : this.options.position
        ? e.config.location + this.options.position
        : this.options.location
        ? this.options.location
        : e.config.location) +
      "-" +
      this.format
    );
  }),
  (Adhese.prototype.init = function (e) {
    if (
      ((this.config.debug = e.debug),
      this.helper.log("Adhese: initializing..."),
      (this.config.jquery = "undefined" != typeof jQuery),
      e.account)
    ) {
      this.config.account = e.account;
      var t = "http:";
      "file:" != window.location.protocol && (t = window.location.protocol),
        !e.prefixVersion || (e.prefixVersion && 1 == e.prefixVersion)
          ? ((this.config.host = t + "//ads-" + e.account + ".adhese.com/"),
            (this.config.poolHost = t + "//pool-" + e.account + ".adhese.com/"),
            (this.config.clickHost =
              t + "//click-" + e.account + ".adhese.com/"))
          : e.prefixVersion &&
            2 == e.prefixVersion &&
            ((this.config.host = t + "//ads-" + e.account + ".adhese.com/"),
            (this.config.poolHost = t + "//pool-" + e.account + ".adhese.com/"),
            (this.config.clickHost =
              t + "//ads-" + e.account + ".adhese.com/")),
        (this.config.previewHost =
          "https://" + e.account + "-preview.adhese.org/"),
        (this.config.hostname = void 0);
    } else if (e.host && e.poolHost) {
      (this.config.host = e.host),
        (this.config.clickHost = e.host),
        (this.config.poolHost = e.poolHost);
      var i = document.createElement("a");
      (i.href = this.config.host), (this.config.hostname = i.hostname);
    }
    for (var o in (e.previewHost && (this.config.previewHost = e.previewHost),
    e.location && "function" == typeof e.location
      ? ((this.config.location = e.location()),
        this.helper.log('options.location=="function"'))
      : e.location && "string" == typeof e.location
      ? ((this.config.location = e.location),
        this.helper.log('options.location=="string"'))
      : (this.config.location = "testlocation"),
    e.viewabilityTracking
      ? (this.config.viewabilityTracking = e.viewabilityTracking)
      : (this.config.viewabilityTracking = !1),
    void 0 === e.safeframe || 0 == e.safeframe
      ? (this.config.safeframe = !1)
      : ((this.config.safeframe = e.safeframe),
        this.initSafeFrame(e.safeframeContainerID)),
    (this.config.logSafeframeMessages =
      e.safeframeMsg || this.logSafeframeMessages),
    this.registerRequestParameter("rn", Math.round(1e4 * Math.random())),
    "function" == typeof Fingerprint &&
      this.registerRequestParameter(
        "fp",
        new Fingerprint({
          canvas: !0,
        }).get()
      ),
    this.registerRequestParameter("pr", window.devicePixelRatio || 1),
    (void 0 !== e.referrer && 1 != e.referrer) ||
      this.registerRequestParameter(
        "re",
        this.helper.base64.urlencode(document.referrer.substr(0, 200))
      ),
    (void 0 !== e.url && 1 != e.url) ||
      this.registerRequestParameter(
        "ur",
        this.helper.base64.urlencode(window.location.href)
      ),
    (this.userAgent = this.helper.getUserAgent()),
    this.userAgent))
      this.registerRequestParameter("br", this.userAgent[o]);
    "function" == typeof this.Detection &&
      (this.registerRequestParameter("dt", this.detection.device()),
      this.registerRequestParameter("br", this.detection.device())),
      (this.config.previewExclusive = !1),
      e.previewExclusive && (this.config.previewExclusive = e.previewExclusive),
      this.checkPreview(),
      this.checkAdheseInfo(),
      this.checkVisible &&
        (addEventListener("load", this.checkVisible.bind(this), !1),
        addEventListener("scroll", this.checkVisible.bind(this), !1)),
      this.helper.log(
        "Adhese: initialized with config:",
        JSON.stringify(this.config)
      );
  }),
  (Adhese.prototype.initSafeFrame = function (e) {
    this.safeframe ||
      (this.safeframe = e
        ? new this.SafeFrame(
            this.config.poolHost,
            e,
            this.config.viewabilityTracking,
            this.config.logSafeframeMessages
          )
        : new this.SafeFrame(
            this.config.poolHost,
            this.config.viewabilityTracking,
            this.config.logSafeframeMessages
          ));
  }),
  (Adhese.prototype.registerRequestParameter = function (e, t) {
    var i = this.request[e];
    i || (i = new Array()), i.push(t), (this.request[e] = i);
  }),
  (Adhese.prototype.removeRequestParameter = function (e, t) {
    var i = this.request[e];
    if (i) {
      var o = i.indexOf(t);
      -1 != o && i.splice(o, 1);
    }
  }),
  (Adhese.prototype.getBooleanConsent = function () {
    try {
      return this.request.tl[0];
    } catch (e) {
      return "none";
    }
  }),
  (Adhese.prototype.addRequestString = function (e) {
    this.requestExtra.push(e);
  }),
  (Adhese.prototype.tag = function (e, t) {
    var i = this;
    this.helper.log(e, JSON.stringify(t)),
      t &&
        t.safeframe &&
        (t.safeframeContainerID
          ? this.initSafeFrame(t.safeframeContainerID)
          : this.initSafeFrame());
    var o = new this.Ad(this, e, t);
    if (this.previewActive) {
      var r = this.previewFormats;
      for (var n in r)
        if (n == e + (t.position ? t.position : "")) {
          var s = r[e + (t.position ? t.position : "")],
            a = new this.Ad(this, e, t);
          (a.adType = e), (a.ext = "js");
          var c = "";
          a.options.write || (c = "json/"),
            (a.swfSrc =
              i.config.previewHost +
              "/creatives/preview/" +
              c +
              "tag.do?id=" +
              s.creative +
              "&slotId=" +
              s.slot),
            (a.width = s.width),
            (a.height = s.height),
            (o = a),
            "complete" === document.readyState
              ? this.showPreviewSign()
              : addEventListener("load", i.showPreviewSign.bind(i));
        }
    }
    return (
      this.ads.push([e, o]),
      o.options.write &&
        (0 == this.config.previewExclusive ||
          (1 == this.config.previewExclusive && o.swfSrc)) &&
        this.write(o),
      o
    );
  }),
  (Adhese.prototype.write = function (e) {
    if (this.config.safeframe || e.safeframe) {
      var t = "";
      (t =
        this.previewActive && e.swfSrc
          ? e.swfSrc
          : this.getRequestUri(e, {
              type: "json",
            })),
        this.helper.log(
          "Adhese.write: request uri: " + t + ", safeframe enabled"
        );
      var i = this.safeframe.containerID;
      AdheseAjax.request({
        url: t,
        method: "get",
        json: !0,
      }).done(function (e) {
        adhese.safeframe.addPositions(e);
        for (var t = e.length - 1; t >= 0; t--)
          adhese.safeframe.render(e[t][i]);
      });
    } else {
      t = "";
      (t =
        this.previewActive && e.swfSrc
          ? e.swfSrc
          : this.getRequestUri(e, {
              type: "js",
            })),
        this.helper.log("Adhese.write: request uri: " + t),
        document.write(
          '<script type="text/javascript" src="' + t + '"></script>'
        );
    }
  }),
  (Adhese.prototype.track = function (e) {
    this.helper.addTrackingPixel(e);
  }),
  (Adhese.prototype.trackByUrl = function (e) {
    this.helper.addTrackingPixel(e);
  }),
  (Adhese.prototype.renderAndTrackAd = function (e) {
    this.safeframe.render(e.containingElementId),
      AdheseAjax.request({
        url: e.tracker,
        method: "get",
      });
  }),
  (Adhese.prototype.getMultipleRequestUri = function (e, t) {
    var i = this.config.host;
    switch (
      (t ||
        (t = {
          type: "js",
        }),
      t.type)
    ) {
      case "json":
        i += "json/";
        break;
      case "jsonp":
        t.callbackFunctionName || (t.callbackFunctionName = "callback"),
          (i += "jsonp/" + t.callbackFunctionName + "/");
        break;
      default:
        i += "ad/";
    }
    for (var o = e.length - 1; o >= 0; o--) {
      var r = e[o];
      (!r.swfSrc || (r.swfSrc && -1 == r.swfSrc.indexOf("preview"))) &&
        (i += "sl" + this.getSlotName(r) + "/");
    }
    for (var n in this.request) {
      for (var s = n, a = 0; a < this.request[n].length; a++)
        s += this.request[n][a] + (this.request[n].length - 1 > a ? ";" : "");
      i += s + "/";
    }
    for (o = 0, n = this.requestExtra; o < n.length; o++)
      n[o] && (i += n[o] + "/");
    return (i += "?t=" + new Date().getTime());
  }),
  (Adhese.prototype.getRequestPayload = function (e, t) {
    let i = [];
    for (var o = e.length - 1; o >= 0; o--) {
      var r = e[o];
      (!r.swfSrc || (r.swfSrc && -1 == r.swfSrc.indexOf("preview"))) &&
        i.push({
          slotname: this.getSlotName(r),
          parameters: r.parameters,
        });
    }
    let n = {};
    for (var s in this.request) {
      for (var a = [], c = 0; c < this.request[s].length; c++)
        a.push(this.request[s][c]);
      n[s] = a;
    }
    return {
      slots: i,
      parameters: n,
      vastContentAsUrl: !t || !t.vastContentAsUrl || t.vastContentAsUrl,
    };
  }),
  (Adhese.prototype.getSlotName = function (e) {
    return (
      e.options.position && e.options.location
        ? (u = e.options.location + e.options.position)
        : e.options.position
        ? (u = this.config.location + e.options.position)
        : e.options.location
        ? (u = e.options.location)
        : (u = this.config.location),
      u + "-" + e.format
    );
  }),
  (Adhese.prototype.getRequestUri = function (e, t) {
    if (t.preview && 1 == t.preview) return e.swfSrc;
    var i = [e];
    return this.getMultipleRequestUri(i, t);
  }),
  (Adhese.prototype.syncUser = function (e, t) {
    "rubicon" == e
      ? this.rubiconUserSync(t)
      : "improvedigital" == e
      ? this.improvedigitalUserSync(t)
      : "pubmatic" == e
      ? this.pubmaticUserSync(t)
      : "spotx" == e
      ? this.spotxUserSync(t)
      : "appnexus" == e
      ? this.appnexusUserSync(t)
      : "smartadserver" == e
      ? this.smartadserverUserSync(t)
      : "multi" == e && this.multiUserSync(t);
  }),
  (Adhese.prototype.getSfPreview = function (e) {
    for (var t = this, i = e.length - 1; i >= 0; i--) {
      var o = e[i];
      o.swfSrc &&
        o.swfSrc.indexOf("tag.do") > -1 &&
        AdheseAjax.request({
          url: t.getRequestUri(o, {
            type: "json",
            preview: !0,
          }),
          method: "get",
          json: !0,
        }).done(function (e) {
          t.safeframe.addPositions(e);
          for (var i = e.length - 1; i >= 0; i--)
            t.safeframe.render(e[i].adType);
        });
    }
  }),
  (Adhese.prototype.getSfAds = function (e) {
    var t = this;
    AdheseAjax.request({
      url: t.getMultipleRequestUri(e, {
        type: "json",
      }),
      method: "get",
      json: !0,
    }).done(function (e) {
      t.safeframe.addPositions(e);
      for (var i = e.length - 1; i >= 0; i--) t.safeframe.render(e[i].adType);
    }),
      t.getSfPreview(e);
  }),
  (Adhese.prototype.registerResponse = function (e, t) {
    adhese.responses || (adhese.responses = new Object()),
      (adhese.responses[e] = t);
  }),
  (Adhese.prototype.logSafeframeMessages = function (e, t, i) {
    this.helper.log(e, t, i);
  }),
  (Adhese.prototype.enableViewabilityTracking = function (e, t) {
    (e.viewability = {
      contentBox: document.querySelector("body"),
      trackers: {},
      trackerTimeout: 0,
    }),
      (observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: [],
      }),
      "object" == typeof t && null !== t
        ? (t.inViewPercentage
            ? observerOptions.threshold.push(t.inViewPercentage)
            : observerOptions.threshold.push(0.5),
          t.rootMargin && (observerOptions.rootMargin = t.rootMargin),
          (e.viewability.trackerTimeout =
            t.duration && "" !== t.duration ? t.duration : 1),
          (e.viewability.inViewPercentage =
            observerOptions.threshold[observerOptions.threshold.length - 1]))
        : (observerOptions.threshold.push(0.5),
          (e.viewability.trackerTimeout = 1),
          (e.viewability.inViewPercentage =
            observerOptions.threshold[observerOptions.threshold.length - 1])),
      (e.viewability.intersectionCallback = function (t) {
        t.forEach(function (t) {
          var i = t.target;
          if (t.isIntersecting) {
            if (
              t.intersectionRatio >= e.viewability.inViewPercentage &&
              e.viewability.trackerTimeout > 0
            )
              (i.timerRunning = !0),
                (i.timer = window.setTimeout(function () {
                  if (
                    (e.viewability.adObserver.unobserve(i),
                    e.viewability.trackers[i.id])
                  ) {
                    var t = document.createElement("img");
                    (t.src = e.viewability.trackers[i.id]),
                      (t.style.height = "1px"),
                      (t.style.width = "1px"),
                      (t.style.margin = "-1px"),
                      (t.style.border = "0"),
                      (t.style.position = "absolute"),
                      (t.style.top = "0"),
                      document.body.appendChild(t);
                  }
                }, 1e3 * e.viewability.trackerTimeout));
            else if (
              t.intersectionRatio >= e.viewability.inViewPercentage &&
              (e.viewability.adObserver.unobserve(i),
              e.viewability.trackers[i.id])
            ) {
              var o = document.createElement("img");
              (o.src = e.viewability.trackers[i.id]),
                (o.style.height = "1px"),
                (o.style.width = "1px"),
                (o.style.margin = "-1px"),
                (o.style.border = "0"),
                (o.style.position = "absolute"),
                (o.style.top = "0"),
                document.body.appendChild(o);
            }
          } else i.timerRunning && (window.clearTimeout(i.timer), (i.timerRunning = !1));
        });
      }),
      (e.viewability.adObserver = new IntersectionObserver(
        e.viewability.intersectionCallback,
        observerOptions
      ));
  }),
  (Adhese.prototype.Helper = function () {
    (this.oslist = [
      {
        string: navigator.userAgent,
        subString: "Windows Phone",
        identity: "WindowsPhone",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 10.0",
        identity: "Windows10",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 6.3",
        identity: "Windows8.1",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 6.2",
        identity: "Windows8",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 6.1",
        identity: "Windows7",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 6.0",
        identity: "WindowsVista",
      },
      {
        string: navigator.userAgent,
        subString: "Windows NT 5.1",
        identity: "WindowsXP",
      },
      {
        string: navigator.userAgent,
        subString: "Windows 98",
        identity: "Windows98",
      },
      {
        string: navigator.userAgent,
        subString: "Android",
        identity: "Android",
      },
      {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iOS",
      },
      {
        string: navigator.userAgent,
        subString: "iPad",
        identity: "iOS",
      },
      {
        string: navigator.platform,
        subString: "Mac",
        identity: "OSX",
      },
      {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux",
      },
    ]),
      (this.browserlist = [
        {
          string: navigator.userAgent,
          subString: "AppleTV",
          identity: "AppleTV",
        },
        {
          string: navigator.userAgent,
          subString: "CrKey",
          identity: "Chromecast",
        },
        {
          string: navigator.userAgent,
          subString: "FBAN",
          identity: "Facebook",
        },
        {
          string: navigator.userAgent,
          subString: "FBAV",
          identity: "Facebook",
        },
        {
          string: navigator.userAgent,
          subString: "Instagram",
          identity: "Instagram",
        },
        {
          string: navigator.userAgent,
          subString: "Trident/7",
          identity: "Explorer",
          versionSearch: "rv",
        },
        {
          string: navigator.userAgent,
          subString: "MSIE",
          identity: "Explorer",
          versionSearch: "MSIE",
        },
        {
          string: navigator.userAgent,
          subString: "Chrome",
          identity: "Chrome",
        },
        {
          prop: window.opera,
          identity: "Opera",
        },
        {
          string: navigator.userAgent,
          subString: "Firefox",
          identity: "Firefox",
        },
        {
          string: navigator.vendor,
          subString: "Apple",
          identity: "Safari",
          versionSearch: "Version",
        },
      ]);
  }),
  (Adhese.prototype.Helper.prototype.log = function () {
    (this.logObjs = this.logObjs || {}), (this.logs = this.logs || []);
    for (
      var e = "", t = new Date().getTime(), i = 0, o = arguments;
      i < o.length;
      i++
    )
      o[i] && (e += o[i] + " ");
    (this.logObjs[t] = logObj =
      {
        msg: e,
      }),
      this.logs.push([t, arguments]),
      window.location.search.match("debug") && console.log(t, arguments);
  }),
  (Adhese.prototype.Helper.prototype.debug = function () {
    for (var e in this.logs) {
      var t = this.logs[e];
      console.log(t[0], t[1]);
    }
  }),
  (Adhese.prototype.Helper.prototype.debugTable = function () {
    "function" == typeof console.table && console.table(this.logObjs);
  }),
  (Adhese.prototype.Helper.prototype.getMetaTagContent = function (e, t) {}),
  (Adhese.prototype.Helper.prototype.getQueryStringParameter = function (e) {
    var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
    return t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : "";
  }),
  (Adhese.prototype.Helper.prototype.addTrackingPixel = function (e) {
    var t = document.createElement("img");
    (t.src = e),
      (t.style.height = "1px"),
      (t.style.width = "1px"),
      (t.style.margin = "-1px"),
      (t.style.border = "0"),
      (t.style.position = "absolute"),
      (t.style.top = "0"),
      document.body.appendChild(t);
  }),
  (Adhese.prototype.Helper.prototype.getScreenProperties = function () {
    var e = new Object();
    return (
      (e.width = window.innerWidth
        ? window.innerWidth
        : document.body.offsetWidth),
      (e.height = window.innerHeight
        ? window.innerHeight
        : document.body.offsetHeight),
      e
    );
  }),
  (Adhese.prototype.Helper.prototype.addEvent = function (e, t, i, o) {
    void 0 === o && (o = window),
      o.addEventListener
        ? o.addEventListener(
            e,
            function () {
              t(i);
            },
            !1
          )
        : o.attachEvent &&
          o.attachEvent("on" + e, function () {
            t(i);
          });
  }),
  (Adhese.prototype.Helper.prototype.removeEvent = function (e, t, i) {
    window.removeEventListener
      ? window.removeEventListener(e, t, !1)
      : window.detachEvent && window.detachEvent("on" + e, t);
  }),
  (Adhese.prototype.Helper.prototype.getAbsoluteOffset = function (e) {
    var t = {
      top: 0,
      left: 0,
    };
    if (void 0 !== e)
      for (t.left = 0, t.top = 0; e; e = e.offsetParent)
        (t.left += e.offsetLeft), (t.top += e.offsetTop);
    return t;
  }),
  (Adhese.prototype.Helper.prototype.getUserAgent = function () {
    var e = {};
    return (
      (e.browser = this.searchString(this.browserlist) || "unknownBrowser"),
      (e.browserVersion =
        e.browser + this.searchVersion(navigator.userAgent) ||
        this.searchVersion(navigator.appVersion) ||
        "unknownVersion"),
      (e.os = this.searchString(this.oslist) || "unknownOS"),
      e
    );
  }),
  (Adhese.prototype.Helper.prototype.searchString = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t].string,
        o = e[t].prop;
      if (
        ((this.versionSearchString = e[t].versionSearch || e[t].identity), i)
      ) {
        if (-1 != i.indexOf(e[t].subString)) return e[t].identity;
      } else if (o) return e[t].identity;
    }
  }),
  (Adhese.prototype.Helper.prototype.searchVersion = function (e) {
    var t = e.indexOf(this.versionSearchString);
    if (-1 != t)
      return parseFloat(e.substring(t + this.versionSearchString.length + 1));
  }),
  (Adhese.prototype.Helper.prototype.merge = function (e, t) {
    var i = {};
    for (var o in e) i[o] = e[o];
    for (var o in t) i[o] = t[o];
    return i;
  }),
  (Adhese.prototype.Helper.prototype.stringToHex = function (e, t) {
    try {
      t = unescape(encodeURIComponent(e))
        .split("")
        .map(function (e) {
          return e.charCodeAt(0).toString(16);
        })
        .join("");
    } catch (i) {
      (t = e), console.log("invalid text input: ", i, e);
    }
    return t;
  }),
  (Adhese.prototype.Helper.prototype.hexToString = function (e, t) {
    try {
      t = decodeURIComponent(e.replace(/(..)/g, "%$1"));
    } catch (i) {
      (t = e), console.log("invalid hex input: ", i, e);
    }
    return t;
  }),
  (Adhese.prototype.Helper.prototype.base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      if ("function" == typeof btoab) return btoa(e);
      var t,
        i,
        o,
        r,
        n,
        s,
        a,
        c = "",
        d = 0;
      for (e = this._utf8_encode(e); d < e.length; )
        (r = (t = e.charCodeAt(d++)) >> 2),
          (n = ((3 & t) << 4) | ((i = e.charCodeAt(d++)) >> 4)),
          (s = ((15 & i) << 2) | ((o = e.charCodeAt(d++)) >> 6)),
          (a = 63 & o),
          isNaN(i) ? (s = a = 64) : isNaN(o) && (a = 64),
          (c =
            c +
            this._keyStr.charAt(r) +
            this._keyStr.charAt(n) +
            this._keyStr.charAt(s) +
            this._keyStr.charAt(a));
      return c;
    },
    urlencode: function (e) {
      if ("function" == typeof btoa)
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_");
      var t,
        i,
        o,
        r,
        n,
        s,
        a,
        c = "",
        d = 0;
      for (e = this._utf8_encode(e); d < e.length; )
        (r = (t = e.charCodeAt(d++)) >> 2),
          (n = ((3 & t) << 4) | ((i = e.charCodeAt(d++)) >> 4)),
          (s = ((15 & i) << 2) | ((o = e.charCodeAt(d++)) >> 6)),
          (a = 63 & o),
          isNaN(i) ? (s = a = 64) : isNaN(o) && (a = 64),
          (c =
            c +
            this._keyStr.charAt(r) +
            this._keyStr.charAt(n) +
            this._keyStr.charAt(s) +
            this._keyStr.charAt(a));
      return c.replace(/\+/g, "-").replace(/\//g, "_");
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var t = "", i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);
        o < 128
          ? (t += String.fromCharCode(o))
          : o > 127 && o < 2048
          ? ((t += String.fromCharCode((o >> 6) | 192)),
            (t += String.fromCharCode((63 & o) | 128)))
          : ((t += String.fromCharCode((o >> 12) | 224)),
            (t += String.fromCharCode(((o >> 6) & 63) | 128)),
            (t += String.fromCharCode((63 & o) | 128)));
      }
      return t;
    },
  }),
  (Adhese.prototype.Helper.prototype.createCookie = function (e, t, i) {
    var o = "";
    if (i) {
      var r = new Date();
      r.setTime(
        r.getTime() + 24 * i * 60 * 60 * 1e3 - 60 * r.getTimezoneOffset() * 1e3
      ),
        (o = "; expires=" + r.toUTCString());
    }
    document.cookie = e + "=" + t + o + "; path=/; SameSite=None; Secure";
  }),
  (Adhese.prototype.Helper.prototype.readCookie = function (e) {
    for (
      var t = e + "=", i = document.cookie.split(";"), o = 0;
      o < i.length;
      o++
    ) {
      for (var r = i[o]; " " == r.charAt(0); ) r = r.substring(1, r.length);
      if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
    }
    return null;
  }),
  (Adhese.prototype.Helper.prototype.eraseCookie = function (e) {
    this.createCookie(e, "", -1);
  }),
  (Adhese.prototype.Helper.prototype.eatsCookie = function () {
    return (
      this.createCookie("adheseTestCookie", "", 1),
      null != this.readCookie("adheseTestCookie") &&
        (this.eraseCookie("adheseTestCookie"), !0)
    );
  }),
  (Adhese.prototype.Helper.prototype.getMetaContent = function (e) {
    for (
      var t = document.getElementsByTagName("META"), i = [], o = t.length - 1;
      o >= 0;
      o--
    ) {
      var r = t[o];
      r &&
        (r.name === e || r.getAttribute("property") === e) &&
        r.content &&
        i.push(r.content);
    }
    return i;
  }),
  (Adhese.prototype.Helper.prototype.adhElementInViewport = function (e) {
    return this.adhElementInViewportWithPercentage(e, 1);
  }),
  (Adhese.prototype.Helper.prototype.adhElementInViewportWithPercentage =
    function (e, t, i, o) {
      if (("string" == typeof e && (e = document.getElementById(e)), e)) {
        var r = e.getBoundingClientRect(),
          n = r.top + i * o,
          s = r.left + t * o;
        return (
          r.top >= 0 &&
          r.left >= 0 &&
          n <= (window.innerHeight || document.documentElement.clientHeight) &&
          s <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      return !1;
    }),
  (Adhese.prototype.checkPreview = function () {
    if (((this.previewFormats = {}), !this.config.previewHost)) return !1;
    if (-1 != window.location.search.indexOf("adhesePreview")) {
      this.helper.log("checking for preview");
      var e = window.location.search.substring(1),
        t = e.match(/adhesePreviewCreativeId/g).length,
        o = e.split("&"),
        r = "",
        n = "",
        s = "",
        a = "",
        c = 0,
        d = 0,
        h = [];
      -1 != e.indexOf("adhesePreviewExclusive=true") &&
        (this.config.previewExclusive = !0),
        -1 != e.indexOf("adhesePreviewExclusive=false") &&
          (this.config.previewExclusive = !1);
      for (var l = 0; l < o.length; l++)
        if (
          ("adhesePreviewCreativeId" == o[l].split("=")[0] &&
            (r = unescape(o[l].split("=")[1])),
          "adhesePreviewSlotId" == o[l].split("=")[0] &&
            (n = o[l].split("=")[1]),
          "adhesePreviewCreativeTemplate" == o[l].split("=")[0] &&
            ((s = o[l].split("=")[1]), h.push(s)),
          "adhesePreviewTemplateFile" == o[l].split("=")[0] &&
            (a = o[l].split("=")[1]),
          "adhesePreviewWidth" == o[l].split("=")[0] &&
            (c = o[l].split("=")[1]),
          "adhesePreviewHeight" == o[l].split("=")[0] &&
            (d = o[l].split("=")[1]),
          "adhesePreviewCreativeKey" == o[l].split("=")[0] && t > 1)
        ) {
          if ("" != n && "" != h[0])
            for (i in h) {
              s = h[i];
              this.previewFormats[s] = {
                slot: n,
                creative: r,
                templateFile: a,
                width: c,
                height: d,
              };
            }
          h = [];
        }
      if (1 == t)
        for (var f = 0; f < h.length; f++)
          this.previewFormats[h[f]] = {
            slot: n,
            creative: r,
            templateFile: a,
            width: c,
            height: d,
          };
      r = [];
      for (k in this.previewFormats)
        r.push(
          k +
            "," +
            this.previewFormats[k].creative +
            "," +
            this.previewFormats[k].slot +
            "," +
            this.previewFormats[k].template +
            "," +
            this.previewFormats[k].width +
            "," +
            this.previewFormats[k].height
        );
      this.helper.createCookie("adhese_preview", r.join("|"), 0),
        (this.previewActive = !0);
    } else if (this.helper.readCookie("adhese_preview")) {
      var p = this.helper.readCookie("adhese_preview").split("|");
      for (l = 0; l < p.length; l++) {
        r = p[l].split(",");
        this.previewFormats[r[0]] = {
          creative: r[1],
          slot: r[2],
          template: r[3],
          width: r[4],
          height: r[5],
        };
      }
      this.previewActive = !0;
    } else this.checkPreviewList();
  }),
  (Adhese.prototype.checkPreviewList = function () {
    this.helper.log(
      "checking for preview in json format",
      this.helper.getQueryStringParameter("adhese_preview_list")
    );
    var e = [],
      t = this.helper.getQueryStringParameter("adhese_preview_list"),
      i = this.helper.readCookie("adhese_preview_list");
    "" != t && null != t
      ? (e = JSON.parse(t))
      : "" != i && null != i && (e = JSON.parse(i)),
      (this.previewFormats = {}),
      e.forEach((e) => {
        this.previewFormats[e.format + (e.position ? e.position : "")] = {
          slot: e.slotId ? e.slotId : "",
          creative: e.cId,
          templateFile: e.format,
          width: 0,
          height: 0,
          position: e.position ? e.position : "",
        };
      }),
      (this.previewActive = e.length > 0),
      this.previewActive &&
        this.helper.createCookie("adhese_preview_list", JSON.stringify(e), 0);
  }),
  (Adhese.prototype.showPreviewSign = function () {
    if (!document.getElementById("adhPreviewMessage")) {
      var e = this,
        t = document.createElement("DIV");
      (t.innerHTML =
        '<div id="adhPreviewMessage" style="opacity: 0.4; cursor:pointer;font-family:Helvetica,Verdana; font-size:12px; text-align:center; background-color: #000000; color: #FFFFFF; position:fixed; top:10px;left:10px;padding:10px;z-index:9999;width: 100px;">ADHESE PREVIEW MODE<br/>clock to close</div>'),
        document.body.appendChild(t),
        e.helper.addEvent("click", e.closePreviewSign.bind(e), t, t);
    }
  }),
  (Adhese.prototype.closePreviewSign = function () {
    this.helper.eraseCookie("adhese_preview"),
      this.helper.eraseCookie("adhese_preview_list"),
      -1 != location.search.indexOf("adhesePreviewCreativeId") ||
      -1 != location.search.indexOf("adhese_preview_list")
        ? (location.href = location.href.split("?")[0])
        : location.reload();
  }),
  (Adhese.prototype.checkAdheseInfo = function () {
    if (-1 == window.location.search.indexOf("adheseInfo=true")) return !1;
    addEventListener("load", this.showInfoSign.bind(this));
  }),
  (Adhese.prototype.showInfoSign = function () {
    var e = this,
      t = document.createElement("DIV"),
      i =
        '<div id="adhInfoMessage" style="cursor:pointer;font-family:Helvetica,Verdana; font-size:12px; text-align:center; background-color: lightgrey; color: black; position:fixed; top:10px;right:10px;padding:10px;z-index:9999;width:auto; max-width:300px; opacity:0.9; border:2px #9e9e9e solid">';
    for (x in ((i +=
      "<b>Adhese Request Info</b></br>- Click to disable -</br>"),
    (i += "</br><b>Location code:</b></br>"),
    (i += this.config.location + "</br>"),
    (i += "</br><b>Format code(s):</b></br>"),
    adhese.ads))
      i += adhese.ads[x][0] + "</br>";
    for (x in ((i += "</br><b>Targeting:</b></br>"), adhese.request))
      "ur" != x &&
        "rn" != x &&
        "re" != x &&
        "pr" != x &&
        "fp" != x &&
        (i += "<b>" + x + ": </b>" + adhese.request[x] + "</br>");
    (i += "</div>"),
      (t.innerHTML = i),
      document.body.appendChild(t),
      e.helper.addEvent("click", e.closeInfoSign.bind(e), t, t);
  }),
  (Adhese.prototype.closeInfoSign = function () {
    document.getElementById("adhInfoMessage").style.display = "none";
  }),
  (Adhese.prototype.Detection = function () {
    return this;
  }),
  (Adhese.prototype.Detection.prototype.device = function (e) {
    return (
      ((e = e || window.navigator.userAgent).match(
        /webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile Safari|SymbianOS/i
      ) &&
        !e.match(/Android/i)) ||
      (e.match(/Mobile/i) && e.match(/Android/i))
        ? (this.deviceType = "phone")
        : e.match(/iPad|Android|Tablet|Silk/i)
        ? (this.deviceType = "tablet")
        : (this.deviceType = "desktop"),
      this.deviceType
    );
  });
var AdheseAjax = {
  request: function (e) {
    "string" == typeof e &&
      (e = {
        url: e,
      }),
      (e.url = e.url || ""),
      (e.method = e.method || "get"),
      (e.data = e.data || {}),
      void 0 === e.encodeData && (e.encodeData = !0);
    var t = function (e, t) {
      var i,
        o = [];
      for (var r in e) o.push(r + "=" + encodeURIComponent(e[r]));
      return "" != (i = o.join("&"))
        ? t
          ? t.indexOf("?") < 0
            ? "?" + i
            : "&" + i
          : i
        : "";
    };
    return {
      host: {},
      process: function (e) {
        var i = this;
        if (((this.xhr = null), document.all && !window.atob))
          try {
            this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
            try {
              this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
              this.xhr = !1;
            }
          }
        else
          try {
            this.xhr = new XMLHttpRequest();
          } catch (e) {
            this.xhr = !1;
          }
        return (
          this.xhr &&
            ("withCredentials" in this.xhr && (this.xhr.withCredentials = !0),
            (this.xhr.onreadystatechange = function () {
              if (4 == i.xhr.readyState && 200 == i.xhr.status) {
                var t = i.xhr.responseText;
                if (!0 === e.json && "undefined" != typeof JSON)
                  if (t)
                    try {
                      (t = JSON.parse(t)),
                        i.doneCallback &&
                          i.doneCallback.apply(i.host, [t, i.xhr]);
                    } catch (e) {
                      console.error("Ad response parsing error: \n", e),
                        i.errorCallback &&
                          i.errorCallback.apply(i.host, ["Adhese Ajax: " + e]);
                    }
                  else
                    i.errorCallback &&
                      i.errorCallback.apply(i.host, [
                        "Adhese Ajax: Response is empty string",
                      ]);
              } else
                4 == i.xhr.readyState &&
                  i.failCallback &&
                  i.failCallback.apply(i.host, [i.xhr]);
              i.alwaysCallback && i.alwaysCallback.apply(i.host, [i.xhr]);
            })),
          "get" == e.method
            ? this.xhr.open("GET", e.url + t(e.data, e.url), !0)
            : (this.xhr.open(e.method, e.url, !0),
              this.setHeaders({
                "X-Requested-With": "XMLHttpRequest",
                "Content-type": "application/x-www-form-urlencoded",
              })),
          e.headers &&
            "object" == typeof e.headers &&
            this.setHeaders(e.headers),
          setTimeout(function () {
            var o;
            "get" == e.method
              ? i.xhr.send()
              : ((o = e.encodeData ? t(e.data) : e.data), i.xhr.send(o));
          }, 20),
          this
        );
      },
      done: function (e) {
        return (this.doneCallback = e), this;
      },
      fail: function (e) {
        return (this.failCallback = e), this;
      },
      always: function (e) {
        return (this.alwaysCallback = e), this;
      },
      error: function (e) {
        return (this.errorCallback = e), this;
      },
      setHeaders: function (e) {
        for (var t in e) this.xhr && this.xhr.setRequestHeader(t, e[t]);
      },
    }.process(e);
  },
};
if (
  ((Adhese.prototype.Events = function () {}),
  (Adhese.prototype.Events.prototype.add = function (e, t, i) {
    i || (i = window),
      window.addEventListener
        ? i.addEventListener(e, t, !1)
        : window.attachEvent && i.attachEvent("on" + e, t);
  }),
  (Adhese.prototype.Events.prototype.remove = function (e, t, i) {
    i || (i = window),
      window.removeEventListener
        ? i.removeEventListener(e, t, !1)
        : window.attachEvent && i.detachEvent("on" + e, t);
  }),
  (Adhese.prototype.SafeFrame = function (e, t, i, o) {
    return (
      (this.poolHost = e),
      (this.containerID = "adType"),
      t && (this.containerID = t),
      (this.viewability = i),
      this.viewability &&
        Adhese.prototype.enableViewabilityTracking(this, this.viewability),
      (this.adhesePositions = new Array()),
      (this.ads = []),
      (this.logMessages = o || ""),
      this.init()
    );
  }),
  (Adhese.prototype.SafeFrame.prototype.init = function () {
    if (
      ((this.adhesePositionConfig = new Object()),
      this.ads && this.ads.length > 0)
    )
      for (index in this.ads) {
        var e = this.ads[index];
        this.adhesePositionConfig[e[this.containerID]] = {
          w: e.width,
          h: e.height,
          size: e.width + "x" + e.height,
          dest: e[this.containerID],
          tgt: "_blank",
        };
      }
    new $sf.host.Config({
      auto: !1,
      debug: !0,
      renderFile: this.poolHost + "sf/r.html",
      positions: this.adhesePositionConfig,
      onBeforePosMsg: this.logMessages,
    });
    return this;
  }),
  (Adhese.prototype.SafeFrame.prototype.addPositions = function (e) {
    for (var t in e) {
      var i = e[t];
      (i.sfHtml = i.tag), "js" == i.ext && (i.sfHtml = i.body);
      var o = "_blank";
      i.sfHtml && i.sfHtml.indexOf("TARGET='_self'") > 0 && (o = "_self");
      var r = new $sf.host.PosConfig({
        id: i[this.containerID],
        w: i.width,
        h: i.height,
        size: i.width + "x" + i.height,
        dest: i[this.containerID],
        tgt: o,
      });
      this.adhesePositions.push(
        new $sf.host.Position({
          id: i[this.containerID],
          html: i.sfHtml,
          src: i.sfSrc,
          conf: r,
          viewableTracker: i.viewableImpressionCounter || "",
        })
      );
    }
  }),
  (Adhese.prototype.SafeFrame.prototype.render = function (e) {
    for (var t in this.adhesePositions)
      this.adhesePositions[t].id == e &&
        ($sf.host.render(this.adhesePositions[t]),
        this.viewability &&
          this.adhesePositions[t].viewableTracker &&
          "" !== this.adhesePositions[t].viewableTracker &&
          ((this.viewability.trackers[e] =
            this.adhesePositions[t].viewableTracker),
          this.viewability.adObserver.observe(document.getElementById(e))));
  }),
  window.$sf)
)
  try {
    ($sf.ver = "1-1-0"), ($sf.specVersion = "1.1");
  } catch (e) {}
else
  window.$sf = {
    ver: "1-1-0",
    specVersion: "1.1",
  };
!(function (e) {
  var t,
    i,
    o,
    r,
    n,
    s = "?",
    a = "object",
    c = "function",
    d = "string",
    h = "number",
    l = "replace",
    f = "length",
    p = "document",
    u = "prototype",
    g = e && e.Number,
    v = e && e.Math,
    m = e && e[p],
    y = e && e.navigator,
    w = (y && y.userAgent) || "",
    b = "toLowerCase",
    x = "getAttribute",
    A = "setAttribute",
    k = "removeAttribute",
    S = "getElementsByTagName",
    C = "DOMContentLoaded",
    T = e && e.String,
    _ = T.fromCharCode(92),
    P = _ + _,
    E = T.fromCharCode(34),
    I = _ + E,
    H = T.fromCharCode(43),
    O = "scr" + E + H + E + "ipt",
    R = "about:blank",
    G = "iframe",
    F = "CollectGarbage",
    N = "addEventListener",
    j = "",
    M = L,
    D = !0,
    L = !1,
    q = null,
    W = {
      preventDefault: 0,
      stopImmediatePropagation: 0,
      stopPropagation: 0,
      preventBubble: 0,
    },
    z = g && g.MAX_VALUE,
    V = -1 * z,
    B = e && e.escape,
    U = e && e.unescape,
    $ =
      !(!window.ActiveXObject && "ActiveXObject" in window) &&
      e &&
      "ActiveXObject" in e,
    X = 0,
    J = L,
    Y = 0,
    Q = q,
    K = 0,
    Z = q,
    ee = 0,
    te = 0,
    ie = 0,
    oe = {},
    re = "",
    ne = "",
    se = q,
    ae = q;
  !(function () {
    var r;
    function n(e) {
      var t = typeof e;
      return t == d
        ? e
        : t != h || e
        ? t == a && e && e.join
          ? e.join("")
          : !1 === e
          ? "false"
          : !0 === e
          ? "true"
          : e
          ? T(e)
          : ""
        : "0";
    }
    function p(e, t, i, o) {
      if (typeof e != h)
        try {
          e = e ? parseFloat(e) : g.NaN;
        } catch (t) {
          e = g.NaN;
        }
      return (
        o == q && (o = z),
        i == q && (i = V),
        (isNaN(e) || e < i || e > o) && t != q ? t : e
      );
    }
    function m(e) {
      try {
        e = e && typeof e == c && e.toString() && new e.constructor() ? e : q;
      } catch (t) {
        e = q;
      }
      return !!e;
    }
    function y(e, t, i, o, r) {
      var n, s, d;
      if (!t || !e) return e;
      for (s in t)
        (d = typeof (n = t[s])),
          (i && !t.hasOwnProperty(s)) ||
            (r && s in e) ||
            (o && d == c) ||
            (d == a && n && (n = n.slice ? y([], n) : y({}, n)), (e[s] = n));
      return e;
    }
    function w() {
      return new Date().getTime();
    }
    function b() {
      return v.round(100 * v.random());
    }
    function x(e) {
      var t = n(e);
      return t && t[l](/^\s\s*/, "")[l](/\s\s*$/, "");
    }
    function A(t, i, o, r) {
      var s,
        c,
        d = o && typeof o == a ? o : e,
        h = 0,
        l = q;
      if (t)
        if (((t = n(t)), (i = i && typeof i == a ? i : q), t.indexOf(".")))
          for (s = t.split("."); (c = s[h++]); )
            (c = x(c)),
              (l =
                h == s[f]
                  ? d[c] && i
                    ? (d[c] = y(d[c], i, L, q, r))
                    : r && c in d
                    ? d[c]
                    : (d[c] = d[c] || i || {})
                  : r && c in d
                  ? d[c]
                  : (d[c] = d[c] || {})),
              (d = d[c]);
        else
          l =
            d[t] && i ? (d[t] = y(d[t], i, L, q, r)) : (d[t] = d[t] || i || {});
      return l;
    }
    function k() {
      return P;
    }
    function S() {
      return I;
    }
    function C() {
      return "\\r";
    }
    function _() {
      return "\\n";
    }
    function H(e, t, i) {
      return n(["<", t, O, i, ">"]);
    }
    function R(e, t, i, o, r) {
      var c,
        d,
        h,
        l,
        p,
        u,
        g,
        v,
        m,
        w,
        b,
        x,
        A,
        k,
        S = this,
        C = "indexOf",
        T = "substring",
        _ = L;
      if (!(S instanceof R)) return new R(e, t, i, o, r);
      if (!arguments[f]) return S;
      if (e && typeof e == a) return y(new R("", t, i, o, r), e);
      if (((e = n(e)), (t = n(t) || "&"), (i = n(i) || "="), !e)) return S;
      if (
        (t != s && i != s && e.charAt(0) == s && (e = e[T](1)),
        (c = e[C](s)),
        (d = e[C](i)),
        -1 != c && -1 != d && c > d)
      )
        (l = B(e[T](d + 1))), (p = e.substr(0, d + 1)), (e = p + l);
      else if (-1 != c) return new R((e = e[T](c + 1)), t, i, o);
      for (
        e.charAt(0) == t && (e = e[T](1)), b = (g = e.split(t))[f], c = 0;
        b--;

      )
        if (((l = g[c++]), (w = L), (_ = L), l)) {
          if ((A = (v = l.split(i))[f]) > 2) {
            if (((m = U(v[0])), v.shift(), r))
              if (
                ((p = m + i),
                (d = e[C](p)),
                (A = p[f]),
                (u = e[T](d + A)),
                (k = (p = t + t)[f]),
                -1 != (h = u[C](p)))
              ) {
                for (u in ((x = new R(
                  (u = e.substr(d + A, h + k)),
                  t,
                  i,
                  o,
                  r
                )),
                (u = ""),
                (A = 0),
                x))
                  A++;
                A > 0 && (c += A - 1), (l = x);
              } else l = U(v.join(i));
            else l = U(v.join(i));
            _ = D;
          } else 2 == A && ((m = U(v[0])), (l = U(v[1])), (_ = D));
          _ &&
            ((o && m in S) || ((S[m] = l), (w = D)),
            r &&
              w &&
              m &&
              l &&
              typeof l != a &&
              (l[C](t) >= 0 || l[C](i) >= 0) &&
              (S[m] = new R(l, t, i, o, r)));
        }
    }
    ((r = R[u]).toString = r.valueOf =
      function e(t, i, o, r) {
        var s,
          d,
          h,
          l = [];
        for (s in ((t = t || "&"), (i = i || "="), this))
          (d = typeof (h = this[s])),
            (h && d == c) ||
              (h && d == a && (h = e.apply(h, [t, i, o, r])),
              o && (s = B(s)),
              r || (h = B(h)),
              l.push(s, i, h, t));
        return n(l);
      }),
      (o = A("$sf.lib.lang", {
        ParamHash: R,
        cstr: n,
        cnum: p,
        cbool: function (e) {
          return e &&
            "0" != e &&
            "false" != e &&
            "no" != e &&
            "undefined" != e &&
            "null" != e
            ? D
            : L;
        },
        noop: function () {},
        trim: x,
        callable: m,
        guid: function (e) {
          return n([e || "", "_", w(), "_", b(), "_", X++]);
        },
        mix: y,
        time: w,
        rand: b,
        def: A,
        ns: function (t, i) {
          var o,
            r,
            s,
            a = /\[(('|")?)((\s|.)*?)(('|")?)\]/gm,
            c = /\./gm,
            d = 0,
            h = "",
            f = D;
          if (((o = i = i || e), t))
            if ((t = n(t)))
              if ((r = (t = x(t)).match(/(\[(.{1,})\])|(\.\w+)/gm)))
                for (
                  h = t[l](/(\[.*)|(\..*)/g, ""), r.unshift(h);
                  (s = r[d++]);

                ) {
                  if (!o[(s = s[l](a, "$3")[l](c, ""))]) {
                    f = L;
                    break;
                  }
                  o = o[s];
                }
              else o = o[(s = t)];
            else f = L;
          else f = L;
          return (f && o) || L;
        },
        jssafe_html: function (e) {
          var t = n(e);
          return (
            t &&
              ((t = (t = (t = (t = (t = (t = (t = t.replace(
                /(<noscript[^>]*>)(\s*?|.*?)(<\/noscript>)/gim,
                ""
              )).replace(/\\/g, k)).replace(/\"/g, S)).replace(
                /\n/g,
                _
              )).replace(/\r/g, C)).replace(
                /<(\/)*script([^>]*)>/gi,
                H
              )).replace(/\t/gi, " ")),
              (t = n([E, t, E])),
              (t = E + t + E)),
            t
          );
        },
        isArray: function (e) {
          return (
            null != e &&
            "string" != typeof e &&
            null != e.length &&
            e.constructor == Array
          );
        },
      })),
      A("$sf.env", {
        isIE: $,
      }),
      (t = n),
      p,
      (i = m);
  })(),
    (function () {
      function e(e) {
        var t = 0;
        return parseFloat(
          e.replace(/\./g, function () {
            return 1 == t++ ? "" : ".";
          })
        );
      }
      function t(e, t, i) {
        var o = e && e.match(t);
        return i == q ? o : (o && o[i]) || q;
      }
      function i(e, t) {
        return e.test(t);
      }
      function r(o) {
        var r,
          n = {},
          s = new Date();
        if (!o && ae) return ae;
        (n.ie =
          n.opera =
          n.gecko =
          n.webkit =
          n.safari =
          n.chrome =
          n.air =
          n.ipod =
          n.ipad =
          n.iphone =
          n.android =
          n.webos =
          n.silk =
          n.nodejs =
          n.phantomjs =
            0),
          (n.mobile = n.ios = n.os = q),
          (n.accel = !1),
          (n.caja = y && y.cajaVersion),
          (n.cks = L),
          (o = o || w || "") &&
            (i(/windows|win32/i, o)
              ? (n.os = "windows")
              : i(/macintosh|mac_powerpc/i, o)
              ? (n.os = "macintosh")
              : i(/android/i, o)
              ? (n.os = "android")
              : i(/symbos/i, o)
              ? (n.os = "symbos")
              : i(/linux/i, o)
              ? (n.os = "linux")
              : i(/rhino/i, o) && (n.os = "rhino"),
            i(/KHTML/, o) && (n.webkit = 1),
            i(/IEMobile|XBLWP7/, o) && (n.mobile = "windows"),
            i(/Fennec/, o) && (n.mobile = "gecko"),
            (r = t(o, /AppleWebKit\/([^\s]*)/, 1)) &&
              ((n.webkit = e(r)),
              (n.safari = n.webkit),
              i(/PhantomJS/, o) &&
                (r = t(o, /PhantomJS\/([^\s]*)/, 1)) &&
                (n.phantomjs = e(r)),
              i(/ Mobile\//, o) || i(/iPad|iPod|iPhone/, o)
                ? ((n.mobile = "Apple"),
                  (r = (r = t(o, /OS ([^\s]*)/, 1)) && e(r.replace("_", "."))),
                  (n.ios = r),
                  (n.ipad = n.ipod = n.iphone = 0),
                  (r = t(o, /iPad|iPod|iPhone/, 0)) && (n[r[b]()] = n.ios))
                : ((r = t(o, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0)) &&
                    (n.mobile = r),
                  i(/webOS/, o) &&
                    ((n.mobile = "WebOS"),
                    (r = t(o, /webOS\/([^\s]*);/, 1)) && (n.webos = e(r))),
                  i(/ Android/, o) &&
                    ((n.mobile = "Android"),
                    (r = t(o, /Android ([^\s]*);/, 1)) && (n.android = e(r))),
                  i(/Silk/, o) &&
                    ((r = t(o, /Silk\/([^\s]*)\)/, 1)) && (n.silk = e(r)),
                    n.android || ((n.android = 2.34), (n.os = "Android")),
                    i(/Accelerated=true/, o) && (n.accel = !0))),
              (r = o.match(/(Chrome|CrMo)\/([^\s]*)/)) && r[1] && r[2]
                ? ((n.chrome = e(r[2])),
                  (n.safari = 0),
                  "CrMo" === r[1] && (n.mobile = "chrome"))
                : (r = t(o, /AdobeAIR\/([^\s]*)/)) && (n.air = r[0])),
            n.webkit ||
              ((r = t(o, /Opera[\s\/]([^\s]*)/, 1))
                ? ((n.opera = e(r)),
                  (r = t(o, /Opera Mini[^;]*/, 0)) && (n.mobile = r))
                : (r = t(o, /MSIE\s([^;]*)/, 1))
                ? (n.ie = e(r))
                : (r = t(o, /Gecko\/([^\s]*)/)) &&
                  ((n.gecko = 1),
                  (r = t(o, /rv:([^\s\)]*)/, 1)) && (n.gecko = e(r)))));
        try {
          s.setTime(s.getTime() + 1e3),
            (m.cookie = cstr([
              "sf_ck_tst=test; expires=",
              s.toGMTString(),
              "; path=/",
            ])),
            -1 != m.cookie.indexOf("sf_ck_tst") && (n.cks = D);
        } catch (e) {
          n.cks = L;
        }
        try {
          typeof process == a &&
            process.versions &&
            process.versions.node &&
            ((n.os = process.platform),
            (n.nodejs = numberify(process.versions.node)));
        } catch (e) {
          n.nodejs = 0;
        }
        return n;
      }
      ((ae = r()).parse = r), o.def("$sf.env.ua", ae, q, D);
    })(),
    (function () {
      function s() {
        te && (clearTimeout(te), (te = 0));
      }
      function a(t) {
        U(e, "load", a), U(e, C, a), (Q = D);
      }
      function c() {
        var e, t, i, o;
        if ((s(), ee >= 300 && ((Z = q), (Q = D)), Q === q)) {
          try {
            (i = (t = (e = m && m.body) && P("*", e)) && t[f]),
              (o = e && e.lastChild);
          } catch (e) {
            (K = 0), (Z = q);
          }
          K && i == K && o == Z
            ? ((Z = q), (Q = D))
            : ((K = i), (Z = o), (ee += 1), (te = setTimeout(c, 50)));
        } else Z = q;
      }
      function h(e) {
        var t,
          i = I(e, "id");
        (t = i && oe[i]) && (U(e, "load", t), (oe[i] = q), delete oe[i]);
      }
      function l(e) {
        return (e && typeof e == d && w(e)) || e;
      }
      function g(t, i, o, n) {
        try {
          se || (se = r.msghost);
        } catch (e) {
          se = q;
        }
        if (e == top) return t && se && se[t] && se[t](i, o, n);
      }
      function v(e) {
        var t = q;
        try {
          e && (t = 9 == e.nodeType ? e : e[p] || e.ownerDocument || q);
        } catch (e) {
          t = q;
        }
        return t;
      }
      function y(e) {
        var t,
          i = q,
          o = "parentWindow",
          r = "defaultView";
        try {
          e &&
            ((i = e[o] || e[r] || q) ||
              (i = ((t = v(e)) && (t[o] || t[r])) || q));
        } catch (e) {
          i = q;
        }
        return i;
      }
      function w(e) {
        var t,
          i = arguments,
          o = i[f];
        return ((t = o > 1 ? v(i[1]) : m) && t.getElementById(e)) || q;
      }
      function _(e) {
        return (e && 1 == e.nodeType && e.tagName[b]()) || "";
      }
      function P(e, t) {
        var i = [];
        try {
          i = t && t[S] ? t[S](e) || i : m[S](e) || i;
        } catch (e) {
          i = [];
        }
        return i;
      }
      function E(e) {
        return e && (e.parentNode || e.parentElement);
      }
      function I(e, i, o) {
        try {
          arguments[f] > 2
            ? o === q
              ? J
                ? e[k](i, 0)
                : e[k](i)
              : ((o = t(o)),
                "class" == i[b]()
                  ? (e.className = o)
                  : J
                  ? e[A](i, o, 0)
                  : e[A](i, o))
            : (o = t(J ? e[x](i, 0) : e[x](i)));
        } catch (e) {
          o = "";
        }
        return o;
      }
      function H(e, i) {
        var o;
        try {
          (o = e.style),
            arguments[f] > 1 ? (o.cssText = t(i)) : (i = o.cssText);
        } catch (e) {
          i = "";
        }
        return i;
      }
      function O(e, t) {
        return ((arguments[f] > 1 && v(t)) || m).createElement(e);
      }
      function z(e, t) {
        var i = L;
        try {
          e && (i = e.appendChild(t));
        } catch (e) {
          i = L;
        }
        return i;
      }
      function V(e) {
        var t,
          i = L,
          o = _(e) == G;
        o && (g("detach", e), h(e), $ || I(e, "src", R));
        try {
          (t = E(e)) && (t.removeChild(e), (i = D), $ && o && n());
        } catch (e) {}
        return (e = t = q), i;
      }
      function B(e, t, i) {
        try {
          M ? e[j]("on" + t, i) : e[j](t, i, L);
        } catch (e) {}
        e = i = q;
      }
      function U(e, t, i) {
        try {
          M ? e.detachEvent("on" + t, i) : e.removeEventListener(t, i, L);
        } catch (e) {}
        e = i = q;
      }
      function X() {
        var e;
        return (
          s(),
          Q
            ? ((Z = q), D)
            : ((e = m.readyState) &&
                ((Z = q), (Q = "loaded" == e || "complete" == e ? D : L)),
              (Z = q),
              (ee = K = 0),
              c(),
              !!Q)
        );
      }
      function ae(e) {
        var t;
        if (X())
          try {
            o.callable(e) && e();
          } catch (t) {
            t = q;
          }
        else
          setTimeout(function () {
            ae(e), (e = q);
          }, 51);
      }
      function ce(t) {
        var i = "";
        if ((t = t || e.event)) {
          try {
            t.returnValue = L;
          } catch (e) {}
          try {
            t.cancelBubble = D;
          } catch (e) {}
          try {
            t.stopped = D;
          } catch (e) {}
          for (i in W)
            if (W[i])
              try {
                t[i]();
              } catch (e) {}
        }
        return L;
      }
      function de(t) {
        var i = q;
        try {
          i = (t = t || e.event) ? t[re] || t[ne] : q;
        } catch (e) {
          i = q;
        }
        return i;
      }
      function he(e, t, i, o, r) {
        return le(e, t, i, o, r);
      }
      function le(e, o, r, n, s, a) {
        var c,
          d,
          p,
          u,
          v,
          m = ["<", G, " "],
          y = "";
        if (a) p = e;
        else {
          if (_((e = l(e))) != G) return q;
          p = e.cloneNode(L);
        }
        for (c in ("src" in (o = o || {})
          ? I(p, "src", q)
          : (o.src = I(e, "src") || R),
        "name" in o ? I(p, "name", q) : (o.name = I(e, "name")),
        o.src || (o.src = R),
        (y = s && g("prep", o)),
        a || (I(p, "width", q), I(p, "height", q)),
        r &&
          ((d = H(p)) && ";" != d.charAt(d[f] - 1) && (d += ";"),
          H(p, [d, t(r)])),
        z((d = O("div")), p),
        (v = d.innerHTML.replace(/<iframe(.*?)>(.*?)<\/iframe>/gim, "$1")),
        m.push('name="', o.name, '" ', v, "></", G, ">"),
        delete o.name,
        (d.innerHTML = t(m)),
        (u = d.firstChild),
        o))
          I(u, c, o[c]);
        return (
          I(u, "id") || (I(u, "id", "sf_iframe_" + ie), ie++),
          I(u, "FRAMEBORDER", "no"),
          I(u, "SCROLLING", "no"),
          I(u, "ALLOWTRANSPARENCY", D),
          I(u, "HIDEFOCUS", D),
          I(u, "TABINDEX", -1),
          I(u, "MARGINWIDTH", 0),
          I(u, "MARGINHEIGHT", 0),
          (function (e, t) {
            var o, r;
            i(t) &&
              ((o = function (i) {
                var n = de(i);
                if ((h(n), n && t))
                  try {
                    t.call(n, i);
                  } catch (e) {}
                n = e = t = o = r = q;
              }),
              (r = I(e, "id")),
              h(e),
              r && (oe[r] = o),
              B(e, "load", o)),
              (o = q);
          })(u, n),
          y && g("attach", u, y, s),
          (y = s = p = n = e = d = null),
          u
        );
      }
      function fe(e, t, i, o) {
        return le(O(G), e, t, i, o, D);
      }
      !(function () {
        var t,
          i,
          s = "SCROLLING",
          c = "UIEvent";
        $
          ? ((re = "srcElement"),
            (ne = "target"),
            I((t = O(G)), s, "no"),
            (J = "no" != I(t, s)),
            (n =
              F in e
                ? function () {
                    Y && clearTimeout(Y),
                      (Y = setTimeout(function () {
                        try {
                          e[F]();
                        } catch (e) {}
                      }, 3e3));
                  }
                : _lang.noop))
          : ((re = "target"), (ne = "currentTarget")),
          e[N] && !$
            ? ((j = N), "removeEventListener")
            : $ && ((M = D), (j = "attachEvent"), "detachEvent"),
          (t = q);
        try {
          t = m.createEvent(c);
        } catch (e) {
          t = q;
        }
        if (!t)
          try {
            t = m.createEvent("UIEvents");
          } catch (e) {
            t = q;
          }
        if (t) for (i in W) t[i] && (W[i] = 1);
        (t = q),
          B(e, "load", a),
          B(e, C, a),
          (r = o.def(
            "$sf.lib.dom",
            {
              doc: v,
              view: y,
              elt: w,
              tagName: _,
              tags: P,
              par: E,
              make: O,
              css: H,
              attr: I,
              gc: n,
              append: z,
              purge: V,
              attach: B,
              detach: U,
              ready: X,
              wait: ae,
              evtCncl: ce,
              evtTgt: de,
            },
            q,
            D
          ));
      })(),
        (iframes = o.def(
          "$sf.lib.dom.iframes",
          {
            make: fe,
            clone: he,
            replace: function (e, i, o, r, n) {
              var s, a, c, d, f, p;
              (a = (f = _((a = (d = (e = e || {}).id) && l(d)))) ? a : q),
                (c = f == G ? a : q)
                  ? (g("detach", c),
                    h(c),
                    (p = E(c)),
                    I((s = he(c, e, i, r, n)), "onload", q),
                    I(s, "onreadystatechange", q))
                  : (o && _((o = l(o))) && (p = o),
                    !p && a && (p = E(a)),
                    (s = fe(e, (i = t(i) || H(a) || ""), r, n)));
              try {
                p
                  ? c
                    ? p.replaceChild(s, c)
                    : a
                    ? p.replaceChild(s, a)
                    : z(p, s)
                  : z(m.body, s);
              } catch (e) {}
              return (s = a = e = c = p = r = q), w(d);
            },
            view: function (e) {
              var t,
                i,
                o,
                r,
                n,
                s,
                a = 0;
              try {
                if (!(t = e.contentWindow || q))
                  for (
                    r = ((i = (o = v(e)) && y(o)) && i.frames) || [];
                    (n = r[a++]);

                  ) {
                    try {
                      s = n.frameElement;
                    } catch (e) {
                      s = q;
                    }
                    if (s && s == e) {
                      t = n;
                      break;
                    }
                  }
              } catch (e) {
                t = q;
              }
              return t;
            },
          },
          q,
          D
        )),
        (logger = o.def(
          "$sf.lib.logger",
          {
            log: function (t) {
              e.console && console.log && console.log(t);
            },
            error: function (t) {
              e.console && console.error
                ? console.error(t)
                : e.console && console.log && console.log(t);
            },
          },
          q,
          D
        )),
        (info = o.def(
          "$sf.info",
          {
            errs: [],
            list: [],
          },
          q,
          D
        )),
        T[u].trim || (T[u].trim = o.trim);
    })();
})(window),
  (function (e) {
    var t = null,
      i = !0,
      o = !1,
      r = "sf_pos",
      n = "sf_pos_rel_el",
      s = "onBeforePosMsg",
      a = "onPosMsg",
      c = {
        "exp-ovr": 1,
        "exp-push": 0,
        bg: 0,
        pin: 0,
        "read-cookie": 0,
        "write-cookie": 0,
      },
      d = "exp-ovr",
      h = "collapse",
      l = "error",
      f = "geom-update",
      p = "focus-change",
      u = "object",
      g = "string",
      v = "style",
      m = "length",
      y = "width",
      w = "height",
      b = "PX",
      x = "scroll",
      A = "documentElement",
      k = "document",
      S = "compareDocumentPosition",
      C = "elementFromPoint",
      T = "auto",
      _ = "hidden",
      P = "overflow",
      E = "toFixed",
      I = "attach",
      H = "detach",
      O = "message",
      R = "postMessage",
      G = "guid",
      F = "application/x-shockwave-flash",
      N = e && e.$sf,
      j = N && N.ver,
      M = N && N.env,
      D = M && M.ua,
      L = N && N.lib,
      q = L && L.lang,
      W = L && L.dom,
      z = W && W.iframes,
      V = q && q.cbool,
      B = q && q.cnum,
      U = q && q.cstr,
      $ = q && q.callable,
      X = q && q.noop,
      J = q && q.guid,
      Y = q && q.mix,
      Q = W && W.elt,
      K = W && W.par,
      Z = (W && W.tags, W && W.attr),
      ee = W && W.doc,
      te = W && W.tagName,
      ie = W && W.view,
      oe = z && z.view,
      re = (W && W.purge, W && W.ready, e && e.escape),
      ne = e && e.Math,
      se = ne && ne.max,
      ae = ne && ne.min,
      ce = ne && ne.round,
      de = t,
      he = q && q.ParamHash,
      le = e && e[k],
      fe = M && M.isIE,
      pe = (D && D.ie) || 0,
      ue = (D && D.webkit) || 0,
      ge = (D && D.gecko) || 0,
      ve = (D && D.opera) || 0,
      me = e && e.location,
      ye = me && (me.protocol + "//" + (me.host || me.hostname) || ""),
      we = {},
      be = {},
      xe = {},
      Ae = {},
      ke = {},
      Se = o,
      Ce = o,
      Te = o,
      _e = o,
      Pe = 0,
      Ee = 0,
      Ie = t,
      He = t,
      Oe = t,
      Re = t,
      Ge = [
        "ShockwaveFlash.ShockwaveFlash.11",
        "ShockwaveFlash.ShockwaveFlash.8",
        "ShockwaveFlash.ShockwaveFlash.7",
        "ShockwaveFlash.ShockwaveFlash.6",
        "ShockwaveFlash.ShockwaveFlash",
      ];
    function Fe(e) {
      var o,
        n,
        s,
        a,
        c,
        d = this;
      if (!arguments.length) return Re ? Y({}, Re) : t;
      if (!(d instanceof Fe)) return new Fe(e);
      if (!e) return (Re = t), t;
      if (
        ((c = !!Re),
        (d.auto = "auto" in e ? V(e.auto) : i),
        (d.cdn = U(e.cdn)),
        (d.debug = V(e.debug)),
        (d.root = U(e.root)),
        (d.renderFile = U(e.renderFile)),
        (d.msgFile = U(e.msgFile)),
        (d.to = B(e.to, 6e4)),
        (d.ver = U(e.ver) || j),
        (d.onBeforePosMsg = $(e.onBeforePosMsg) ? e.onBeforePosMsg : X),
        (d.onPosMsg = $(e.onPosMsg) ? e.onPosMsg : X),
        (d.onStartPosRender = $(e.onStartPosRender) ? e.onStartPosRender : X),
        (d.onEndPosRender = $(e.onEndPosRender) ? e.onEndPosRender : X),
        (d.onFailure = $(e.onFailure) ? e.onFailure3 : X),
        (n = e.positions),
        (d.positions = o = {}),
        n)
      )
        for (s in n)
          (a = n[s]) && typeof a == u && (o[s || a.id || J(r)] = new Ne(a));
      (Re = d), (c = !!(c && d.auto && q && q.ns("$sf.host.boot")));
      try {
        c && N.host.boot();
      } catch (e) {}
      return Y({}, Re);
    }
    function Ne(e, t, o) {
      var n,
        s,
        a = this,
        d = (e && typeof e) || "";
      return a instanceof Ne
        ? (d == u
            ? ((a.id = U(e.id)),
              (a.dest = U(e.dest || t)),
              (a.bg = U(e.bg) || "transparent"),
              (a.tgt = U(e.tgt) || "_top"),
              (a.css = U(e.css)),
              (a.w = B(e.w, 0)),
              (a.h = B(e.h, 0)),
              (a.z = B(e.z, 0)),
              (a.supports = Y({}, e.supports || c, i, i, i)),
              a.w && a.h
                ? (a.size = a.w + "x" + a.h)
                : (n = U(e.size))
                ? ((s = n.split(/x/gi)),
                  (a.w = B(s[0], 0)),
                  (a.h = B(s[1], 0)),
                  (a.size = n))
                : (a.size = ""))
            : "string" == d
            ? ((a.id = U(e)), (a.dest = U(e.dest)))
            : ((a.dest = ""),
              (a.bg = "transparent"),
              (a.tgt = "_top"),
              (a.css = ""),
              (a.w = 0),
              (a.h = 0),
              (a.size = ""),
              (a.z = 0),
              (a.supports = {})),
          (a.id = a.id || J(r)),
          !Re && o && Fe(o),
          Re && (Re.positions[a.id] = a),
          Y({}, a))
        : new Ne(e, t, o);
    }
    function je(e) {
      if (e) {
        if (
          (e.indexOf("${sf_ver}") > -1 &&
            (e = e.replace(/\${sf_ver}/gi, $sf.ver)),
          e.indexOf("${ck_on}") > -1)
        ) {
          var i = (function () {
            var e = !!navigator.cookieEnabled;
            void 0 !== navigator.cookieEnabled ||
              e ||
              ((document.cookie = "testcookie"),
              (e = -1 != document.cookie.indexOf("testcookie")),
              navigator && (navigator.cookieEnabled = e));
            return e;
          })()
            ? "1"
            : "0";
          e = e.replace(/\${ck_on}/gi, i);
        }
        if (e.indexOf("${flash_ver}") > -1) {
          var o = (function () {
            if (Oe !== t) return Oe;
            if (navigator.plugins && navigator.plugins.length > 0) {
              var e = navigator.mimeTypes;
              e &&
                e[F] &&
                e[F].enabledPlugin &&
                e[F].enabledPlugin.description &&
                (Oe = e[F].enabledPlugin.version);
            } else if (N.env.isIE) {
              var i, o, r;
              for (i = 0; i < Ge.length; i++)
                try {
                  (r = (o = new ActiveXObject(Ge[i]).GetVariable(
                    "$version"
                  )).indexOf(" ")),
                    (Oe =
                      r > -1
                        ? o.substr(r + 1).replace(/,/gi, ".")
                        : o.replace(/,/gi, "."));
                  break;
                } catch (e) {
                  t, (Oe = 0);
                  continue;
                }
            } else Oe = 0;
            return Oe;
          })();
          e = e.replace(/\${flash_ver}/gi, o);
        }
      }
      return U([
        "<scr",
        "ipt type='text/javascript', src='",
        e,
        "'></scr",
        "ipt>",
      ]);
    }
    function Me(e) {
      var t = (e && ee(e)) || le,
        i = t.compatMode,
        o = t[A];
      return i && !ve && "CSS1Compat" != i && (o = t.body), o;
    }
    function De(e) {
      return ((e = U(e)) && -1 == e.search(/\D+/g)) ||
        (e && -1 != e.search(/px/gi))
        ? i
        : void 0;
    }
    function Le(e) {
      var t,
        i,
        o,
        r,
        n = [-1, -1, -1, -1],
        s = ["clipTop", "clipRight", "clipBottom", "clipLeft"],
        a = 0;
      if (!e) return n;
      if (pe)
        for (; (i = s[a]); )
          De((t = e[i])) && (t = B(t, -1)) >= 0 && (n[a] = t), a++;
      else if ((t = e.clip) && -1 != t.search(/\d+/g))
        for (
          r = (n =
            (n = (t = t.replace(/\w+\(([^\)]*?)\)/g, "$1")).split(" "))[m] <= 1
              ? n.split(",")
              : n)[m],
            a = 0;
          r--;

        )
          De((o = n[a])) ? (n[a] = B(o, -1)) : (n[a] = -1), a++;
      return n;
    }
    function qe(e, t) {
      var i,
        o = 0,
        r = 0;
      return (
        (i = Ue(e)) &&
          ((o = i.borderTopWidth),
          (r = i.borderLeftWidth),
          (o = De(o) ? B(o, 0) : 0),
          (r = De(r) ? B(r, 0) : 0),
          ge && /^t(?:able|d|h|r|head|foot)$/i.test(te(e)) && (o = r = 0)),
        ((t = t || {
          t: 0,
          l: 0,
        }).t += o),
        (t.l += r),
        t
      );
    }
    function We(e) {
      var t,
        i,
        o,
        r,
        n = {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
        },
        s = {
          scrollLeft: 0,
          scrollTop: 0,
          scrollWidth: 0,
          scrollHeight: 0,
        },
        a = 0,
        c = 0;
      return (
        (i = (t = ee(e) || le)[A] || s),
        (r = t.body || s),
        (o = t.defaultView) &&
          ((a = B(o.pageXOffset, 0)), (c = B(o.pageYOffset, 0))),
        (n.x = se(i.scrollLeft, r.scrollLeft, a)),
        (n.y = se(i.scrollTop, r.scrollTop, c)),
        (n.w = se(i.scrollWidth, r.scrollWidth, 0)),
        (n.h = se(i.scrollHeight, r.scrollHeight, 0)),
        n
      );
    }
    function ze(e) {
      var t,
        i,
        r,
        n = {
          t: 0,
          l: 0,
          r: 0,
          b: 0,
          w: 0,
          h: 0,
          z: 0,
        },
        s = 0,
        a = 0,
        c = o,
        d = Me(e),
        h = We(e);
      if (e && 1 == e.nodeType)
        try {
          for (
            n.l = e.offsetLeft || 0,
              n.t = e.offsetTop || 0,
              t = e,
              c = ge || ue > 519;
            (t = t.offsetParent) &&
            ((n.t += t.offsetTop || 0),
            (n.l += t.offsetLeft || 0),
            c && qe(t, n),
            t != d);

          );
          if ("fixed" != Ue((t = e), "position")) {
            for (
              t = e;
              (t = K(t)) &&
              (1 == t.nodeType &&
                ((s = t.scrollTop || 0),
                (a = t.scrollLeft || 0),
                ge && "visible" != Ue(t, P) && qe(t, n),
                (n.l -= a),
                (n.t -= s)),
              t != d);

            );
            (n.t += h.y), (n.l += h.x);
          } else (n.t += h.y), (n.l += h.x);
          pe || e != Me(e)
            ? ((r = e.offsetHeight), (i = e.offsetWidth))
            : ((r = e.clientHeight), (i = e.clientWidth)),
            (n.b = n.t + r),
            (n.r = n.l + i),
            (n.w = se(n.r - n.l, 0)),
            (n.h = se(n.b - n.t, 0)),
            (n.z = Ue(e, "zIndex"));
        } catch (e) {
          n = {
            t: 0,
            l: 0,
            r: 0,
            b: 0,
            w: 0,
            h: 0,
            z: 0,
          };
        }
      return n;
    }
    function Ve(e) {
      var t = Me(e),
        i = 0,
        o = 0;
      return (
        t && ((i = t.scrollWidth || 0), (o = t.scrollHeight || 0)),
        {
          t: 0,
          l: 0,
          b: o,
          r: i,
          w: i,
          h: o,
        }
      );
    }
    function Be(e, t) {
      var r = o,
        n = (e && e.nodeType) || -1,
        s = (t && t.nodeType) || -1;
      if (1 == n && -1 != s)
        if (e.contains)
          if (ve || 1 == s) r = e.contains(t);
          else
            for (; t; ) {
              if (e === t) {
                r = i;
                break;
              }
              t = t.parentNode;
            }
        else e[S] && (r = e === t || !!(16 & e[S](t)));
      return r;
    }
    function Ue(e, i) {
      var o = "",
        r = !(!arguments[m] || !i),
        n = "getComputedStyle";
      if (r)
        if (pe)
          try {
            o = e.currentStyle[i];
          } catch (e) {
            o = "";
          }
        else
          try {
            o = ie(e)[n](e, t)[i];
          } catch (e) {
            o = "";
          }
      else if (pe)
        try {
          o = e.currentStyle;
        } catch (e) {
          o = t;
        }
      else
        try {
          o = ie(e)[n](e, t);
        } catch (e) {
          o = t;
        }
      return o;
    }
    function $e(r, n, s) {
      var a,
        c,
        d,
        h,
        l,
        f,
        p,
        g,
        v,
        y,
        w,
        b,
        A,
        k,
        S,
        C,
        P,
        I,
        H,
        O,
        R = r && K(r),
        G = Me(r),
        F = de(r),
        N = de(G),
        j = We(G),
        M = Ve(r),
        D = {
          t: 0,
          l: 0,
          r: 0,
          b: 0,
          w: 0,
          h: 0,
        },
        L = {
          t: 0,
          l: 0,
          r: 0,
          b: 0,
          xs: 0,
          ys: 0,
          xiv: 0,
          yiv: 0,
          iv: 0,
          w: 0,
          h: 0,
        },
        q = 0,
        W = 0,
        z = o,
        V = o,
        U = o;
      z = o;
      if (((n = n && typeof n == u ? n : {}), R))
        for (
          ;
          (a = Ue(R)) &&
          (("block" != a.display &&
            "absolute" != a.position &&
            "none" == a.float &&
            "none" == a.clear) ||
            ((k = a.overflowX),
            (S = a.overflowY),
            (C = Le(a)),
            R == G
              ? ((g = j.w), (w = j.h))
              : ((g = R.scrollWidth), (w = R.scrollHeight)),
            (v = R.offsetWidth),
            (b = R.offsetHeight),
            (y = R.clientWidth),
            (A = R.clientHeight),
            (k == _ || C[1] > 0 || C[3] > 0) && (H || ((P = 1), (H = R))),
            (S == _ || C[0] > 0 || C[2] > 0) && (H || ((I = 1), (H = R))),
            k == x && ((H = R), (q = b - A), (z = i)),
            S == x && (H || (H = R), (W = v - y), (z = i)),
            k == T && (H || (H = R), g > y && (q = b - A), (z = i)),
            S == T && (H || (H = R), w > A && (W = v - y), (z = i)),
            !H)) &&
          (R == G &&
            (g > y && (q = (d = e.innerHeight || b) - A),
            w > A && (W = (c = e.innerWidth || v) - y),
            (z = i)),
          (R = K(R)) && 1 == R.nodeType);

        );
      return (
        F.w &&
          F.h &&
          (H && H != G
            ? ((a = Ue(H)),
              "body" == te(H) ? ((H = G), (h = F.t), (l = F.l)) : (h = l = 0),
              (D = de(H)),
              C[1] > 0 && ((D.w = C[1]), (D.r = D.l + D.w)),
              C[3] > 0 && ((D.l = D.l + C[3]), (D.w = D.w - C[3])),
              C[2] > 0 && ((D.h = C[2]), (D.b = D.t + D.h)),
              C[0] > 0 && ((D.t = D.t + C[0]), (D.h = D.h - C[0])),
              F.t > D.t && D.t > 0 && (h = F.t - D.t),
              F.l > D.l && D.l > 0 && (l = F.l - D.l),
              H.scrollTop,
              H.scrollLeft,
              (w = H.scrollHeight),
              (g = H.scrollWidth),
              (L.t = se(h, 0)),
              (L.l = se(l, 0)),
              a &&
                ((P = a.overflowX == _ || C[1] > 0 || C[3] > 0),
                (I = a.overflowY == _ || C[0] > 0 || C[2] > 0)),
              F.t >= D.b
                ? (L.b = 0)
                : (!I && F.t >= D.b && (I = 1),
                  w > H.clientHeight
                    ? (L.b = I ? 0 : se(w - F.h - q - h, 0))
                    : (L.b = se(D.h - F.h - q - h, 0))),
              F.l >= D.r
                ? (L.r = 0)
                : (!P && F.l >= D.r && (P = 1),
                  g > H.clientWidth
                    ? (L.r = P ? 0 : se(g - F.w - W - l, 0))
                    : (L.r = se(D.w - F.w - W - l, 0))))
            : ((L.t = se(F.t, 0)),
              (L.l = se(F.l, 0)),
              pe && "BackCompat" == le.compatMode && "no" == Z(G, x)
                ? (I = P = 1)
                : (a = Ue(G)) &&
                  ((P = a.overflowX == _), (I = a.overflowY == _)),
              j.h > G.clientHeight
                ? I
                  ? (L.b = 0)
                  : ((U = i), (L.b = se(M.h - F.h - q - F.t, 0)))
                : (L.b = se(N.h - F.h - q - F.t, 0)),
              j.w > G.clientWidth
                ? P
                  ? (L.r = 0)
                  : ((V = i), (L.r = se(M.w - F.w - W - F.l, 0)))
                : (L.r = se(N.r - F.w - W - F.l, 0))),
          (L.xs = q ? 1 : 0),
          (L.ys = W ? 1 : 0),
          (L.w = L.r + L.l),
          (L.h = L.t + L.b),
          H && H != G ? (O = D) : ((O = N), (H = G)),
          (l = se(F.l, O.l)),
          (f = ae(F.r, V ? ae(M.r, O.r) : O.r)),
          (c = se(f - l, 0)),
          (h = se(F.t, O.t)),
          (p = ae(F.b, U ? ae(M.b, O.b) : O.b)),
          (d = se(p - h, 0)),
          (L.xiv = B((c / F.w)[E](2))),
          (L.yiv = B((d / F.h)[E](2))),
          (L.iv = B(((c * d) / (F.w * F.h))[E](2)))),
        (n.refNode = H || G),
        (n.isRoot = H == G),
        (n.canScroll = z),
        (n.refRect = H && H != G ? D : N),
        (n.expRect = L),
        (n.rect = F),
        s &&
          (function () {
            var e,
              i,
              o,
              a,
              c,
              d,
              h,
              l,
              f,
              p,
              u,
              g,
              v,
              y,
              w,
              b = 0,
              x = 0;
            if (
              L.iv > 0.5 &&
              ((Se = n),
              (e = Xe(r, B(s, 1, 1))),
              (Se = t),
              (x = e[m]),
              (a = (i = F.w) * (o = F.h)),
              x)
            )
              for (; (c = e[b++]); )
                (d = de(c)),
                  (l = se(F.l, d.l)),
                  (f = ae(F.r, d.r)),
                  (h = se(F.t, d.t)),
                  (g = (u = f - l) * (p = ae(F.b, d.b) - h)),
                  (y = (1 - u / i)[E](2)),
                  (w = (1 - p / o)[E](2)),
                  (v = (1 - g / a)[E](2)),
                  ((y > 0 && y < L.xiv) || (w > 0 && w < L.yiv)) &&
                    ((L.xiv = y), (L.yiv = w), (L.iv = v));
          })(),
        L
      );
    }
    function Xe(e, o) {
      var r,
        n,
        s,
        a,
        c,
        d,
        h,
        l,
        f,
        p = de(e),
        u = ee(e),
        g = Me(u),
        v = p.t,
        y = p.l,
        w = p.r - p.l,
        b = p.b - p.t,
        x = [],
        A = ce(w / 10),
        k = ce(b / 10),
        S = A,
        T = k,
        _ = {},
        P = {},
        E = [],
        I = 0;
      if (
        (Se ? (P = Se) : $e(e, P, i),
        (d = P.refNode),
        (h = P.refRect) && d && d != g
          ? ((l = h.r), (f = h.b))
          : ((l = y + w), (f = v + b)),
        u && g && u[C])
      ) {
        for (; S < w; ) {
          for (T = k; T < b; )
            (n = v + T), (r = y + S) < l && n < f && E.push([r, n]), (T += k);
          S += A;
        }
        for (o = B(o, E[m]); (s = E[I++]); ) {
          c = u[C](s[0], s[1]);
          try {
            c &&
              1 == c.nodeType &&
              c !== g &&
              c !== e &&
              !Be(e, c) &&
              ((a = Z(c, "id")) || ((a = q.guid("geom_inter")), Z(c, "id", a)),
              !_[a] && x[m] < o && ((_[a] = 1), x.push(c)));
          } catch (e) {}
        }
      }
      for (a in ((a = ""), _))
        0 == a.indexOf("geom_inter") && (c = Q(a)) && Z(c, "id", t);
      return x;
    }
    function Je(e, t, i, o) {
      return He || (He = W.msghost_fb), e && He && He[e] && He[e](t, i, o);
    }
    function Ye(t) {
      !Ce &&
        t &&
        t.data == initID &&
        ((Ce = i), W.evtCncl(t), W.detach(e, O, Ye));
    }
    function Qe(e) {
      var t = e && e.data,
        i = e && e.source,
        r = t && "string" == typeof t && -1 != t.indexOf(G) && he(t),
        n = r && r.id,
        s = n && Q(n),
        a = s && oe(s),
        c = n && be[n],
        d = r && r.guid,
        h = c && c.guid,
        l = c && c._xmsgcb,
        f = o;
      if (h && d && d == h && i && a && a == i)
        try {
          f = l(r.msg);
        } catch (e) {
          f = o;
        }
      return f && W.evtCncl(e), f;
    }
    function Ke(e, r) {
      var n,
        s,
        a,
        c = e && be[e],
        d = o;
      if (c) {
        if (c)
          if ((((n = he()).msg = r), (n.guid = c.guid), Ze())) {
            (a = Q(e)), (s = oe(a));
            try {
              s[R](U(n), c.srcHost || "*"), (d = i);
            } catch (e) {
              d = o;
            }
          } else d = Je("send", e, r);
      } else d = Je("send", e, r);
      return (n = s = a = t), d;
    }
    function Ze() {
      return Ce;
    }
    function et(e) {
      var i,
        o,
        r,
        n,
        s,
        a = t,
        c = (function () {
          var e,
            t = me.href.indexOf("#");
          return (
            (t = (e = t > -1 ? me.href.substr(0, t) : me.href).indexOf("?")) >
              -1 && (e = e.substr(0, t)),
            escape(e)
          );
        })();
      return (
        e &&
          ((i = e.name),
          (o = he(i)),
          (n =
            0 !=
            (n = (r = U(e.src)) && r.substring(0, r.indexOf("/", 9))).search(
              /http/gi
            )
              ? ""
              : n),
          ((a = he(o)).id = e.id || "iframe_" + J()),
          (a.src = r),
          (a.srcHost = n),
          (a.guid = a.guid || J()),
          (a.host = ye),
          (a.loc = c),
          (a.proxyID = ""),
          Ze()
            ? ((a.html5 = 1), (a.proxyPath = ""))
            : (s = Je("prep", a)) && (a = s),
          (e.name = a)),
        a
      );
    }
    function tt(t, o, r) {
      var n;
      "iframe" == te(t) &&
        (n = Z(t, "id")) &&
        o &&
        o instanceof he &&
        n == o.id &&
        (Ze()
          ? ((be[n] = o), (o._xmsgcb = r), Te || (W.attach(e, O, Qe), (Te = i)))
          : Je(I, t, o, r));
    }
    function it(r) {
      var n = Z(r, "id"),
        s = n && be[n],
        a = i;
      if (s) {
        for (n in (s && ((s._xmsgcb = be[n] = t), (s = t), delete be[n]),
        (n = ""),
        be))
          if ((s = be[n]) && s.guid) {
            a = o;
            break;
          }
        a && Ze() && Te && ((Te = o), W.detach(e, O, Qe)), (r = s = t);
      } else Je(H, r);
    }
    function ot(e) {
      var i,
        r,
        n = [],
        s = arguments,
        a = s[m],
        c = 0,
        d = o;
      if (Re && (i = Re[e])) {
        for (; a--; ) (r = s[c++]) != e && n.push(r);
        try {
          d = i.apply(t, n);
        } catch (e) {
          d = o;
        }
      }
      return d;
    }
    function rt(e) {
      var t = e && xe[e];
      t && (clearTimeout(t), St(e), ot(a, "render-timeout", e)),
        yt() || (Ie = "");
    }
    function nt() {
      Pe && (clearTimeout(Pe), (Pe = 0));
    }
    function st() {
      Ee && (clearTimeout(Ee), (Ee = 0));
    }
    function at(e) {
      st(),
        (Ee = setTimeout(function () {
          !(function (e) {
            var t, i, o, r;
            for (t in we)
              (r = (i = we[t]) && i.dest) &&
                Q(r) &&
                i &&
                ((o = he()),
                (data = he()),
                (o.pos = t),
                (o.cmd = data.cmd = p),
                (o.value = e),
                ot(a, t, p, e),
                wt(i, o));
            st();
          })(e);
        }, 2));
    }
    function ct(e) {
      nt(), (Pe = e ? setTimeout(lt, 750) : setTimeout(ht, 750));
    }
    function dt(e) {
      var t, o, r, n, s, c;
      for (t in we)
        (e && t in ke) ||
          ((s = (n = (o = we[t]) && o.dest) && Q(n)) &&
            o &&
            ((c = At(t, s, i)),
            ((r = he()).pos = t),
            (r.cmd = f),
            (r.geom = re(c)),
            ot(a, t, f, c),
            wt(o, r)));
      nt();
    }
    function ht() {
      dt();
    }
    function lt() {
      dt(i);
    }
    function ft(e) {
      at(i);
    }
    function pt(t) {
      at(e[k].hasFocus());
    }
    function ut(e) {
      ct(1);
    }
    function gt(e) {
      ct();
    }
    function vt(i) {
      var r, n;
      nt();
      try {
        for (r in (W.detach(e, x, ut),
        W.detach(e, "resize", gt),
        W.detach(e, "unload", vt),
        W.detach(e, "focus", ft),
        W.detach(e, "blur", pt),
        ke))
          (n = ke[r]) &&
            (n.tID && clearTimeout(n.tID),
            W.detach(ke[r], x, n.onscroll),
            (n.onscroll = n.node = t)),
            (ke[r] = t),
            delete ke[r];
        _e = o;
      } catch (e) {}
    }
    function mt(e) {
      var r,
        n,
        c = o;
      if ((r = he(e, t, t, i, i)) && r.pos && (n = we[r.pos]))
        switch (r.cmd) {
          case "exp-push":
            kt(r, i), (c = i);
            break;
          case "exp-ovr":
            kt(r), (c = i);
            break;
          case "collapse":
            !(function (e, o, r) {
              var n,
                c = e && e.pos,
                d = c && we[c],
                l = d && d.conf,
                f = l && l.dest,
                p = f && Q(f),
                u = p && Q("sf_pos_rel_el_" + c),
                g = p && p[v],
                m = u && u[v];
              if (!(c && d && p && u)) return;
              if (!d.expanded) return;
              (n = ke[c]) && n.tID && clearTimeout(n.tID);
              if ((nt(), !r && ot(s, c, h, 0, 0))) return;
              (g.left = g.top = "0px"),
                (m.width = g.width = l.w + b),
                (m.height = g.height = l.h + b),
                (g.zIndex = d.dx = d.dy = 0),
                xt(f),
                r ||
                  (ot(a, c, h, 0, 0),
                  (e.cmd = o ? "collapsed" : "collapse"),
                  (e.geom = re(At(c, p, i))),
                  wt(d, e));
              p = g = u = m = d = e = t;
            })(r),
              (c = i);
            break;
          case "msg":
            ot(a, r.pos, "msg", r.msg), (c = i);
            break;
          case l:
            !(function (e) {
              var t = e && e.pos,
                i = t && we[t],
                o = i && i.conf,
                r = o && o.dest,
                n = r && Q(r),
                s = n && Q("sf_pos_rel_el_" + t);
              n && n[v], s && s[v];
              N && N.info && N.info.errs && N.info.errs.push(e);
              ot(a, t, l, e);
            })(r),
              (c = i);
            break;
          case f:
            N.lib.logger.log("Geom update complete: " + r.pos), (c = i);
            break;
          case "read-cookie":
            n.conf &&
            n.conf.supports &&
            n.conf.supports[r.cmd] &&
            "0" != n.conf.supports[r.cmd]
              ? (!(function (e, o) {
                  var r,
                    n,
                    s = e && e.pos,
                    c = s && we[s],
                    d = c && c.conf,
                    h = d && d.dest,
                    l = h && Q(h),
                    f = "read-cookie";
                  if (!d.supports || !d.supports[f] || "0" == d.supports[f])
                    return;
                  if (!s || !c || !l) return;
                  if (!(r = e.cookie)) return;
                  (n = (function () {
                    var e,
                      t,
                      i,
                      o = {};
                    for (
                      e = document.cookie.split("; "), t = e.length - 1;
                      t >= 0;
                      t--
                    )
                      o[(i = e[t].split("="))[0]] = i[1];
                    return o;
                  })()),
                    ot(a, f, s, 0, 0),
                    (e.cmd = f),
                    (e.geom = re(At(s, l, i))),
                    (e.value = n[r]),
                    wt(c, e),
                    (l = c = e = t);
                })(r),
                (c = i))
              : (c = o);
            break;
          case "write-cookie":
            n.conf &&
            n.conf.supports &&
            n.conf.supports[r.cmd] &&
            "0" != n.conf.supports[r.cmd]
              ? (!(function (e, o) {
                  var r,
                    n,
                    s = e && e.pos,
                    c = s && we[s],
                    d = c && c.conf,
                    h = d && d.dest,
                    l = h && Q(h),
                    f = "write-cookie";
                  if (!d.supports || !d.supports[f] || "0" == d.supports[f])
                    return;
                  if (!s || !c || !l) return;
                  if (!(r = e.cookie)) return;
                  n = escape(e.value);
                  var p = new Date();
                  p.setDate(p.getDate() + 1);
                  var u =
                    n +
                    "; expires=" +
                    p.toUTCString() +
                    "; SameSite=None; Secure";
                  (document.cookie = r + "=" + u),
                    ot(a, f, s, 0, 0),
                    (e.cmd = f),
                    (e.geom = re(At(s, l, i))),
                    (e.info = n),
                    (e.value = ""),
                    wt(c, e),
                    (l = c = e = t);
                })(r),
                (c = i))
              : (c = o);
        }
      return c;
    }
    function yt() {
      var e,
        t = i;
      for (e in xe) {
        t = o;
        break;
      }
      return t;
    }
    function wt(e, i) {
      (Ie = "sending-msg-down-" + i.cmd),
        setTimeout(function () {
          var o = e && e.dest;
          o && i && Ke(o, i.toString()), (Ie = ""), (i = o = e = t);
        }, 1);
    }
    function bt() {
      var e = this,
        i = W.attr(e, "_pos_id");
      xe[i] &&
        (clearTimeout(xe[i]),
        delete xe[i],
        (Ae[i] = i),
        W.attr(e, "_pos_id", t),
        W.attr(e, "name", t),
        (e[v].visibility = "inherit"),
        (e[v].display = "block"),
        ot("onEndPosRender", i)),
        yt() || (Ie = "");
    }
    function xt(e, t, i, o, r) {
      if (fe) {
        var n = Q(e),
          s = "shm_" + e,
          a = Q(s);
        if (t) {
          if (a) return void (a[v].visibility = "visible");
          (a = z.clone(
            n,
            {
              id: s,
              src: "",
              name: s,
            },
            [
              y,
              ":",
              i,
              b,
              ";position:absolute;",
              w,
              ":",
              o,
              b,
              ";z-index:",
              r - 1,
              ";filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
            ]
          )),
            W.append(K(n), a);
        } else !t && a && (a[v].visibility = "hidden");
      }
    }
    function At(e, o, r) {
      var n,
        s,
        c,
        d,
        h = he(),
        l = {};
      try {
        W.bounds(o, l, i),
          r ||
            l.isRoot ||
            !l.canScroll ||
            (((c = l.expRect).xs || c.ys) &&
              ((n = ke[e]),
              (s = l.refNode),
              n &&
                n.node != s &&
                (n.tID && clearTimeout(n.tID),
                W.detach(undefined, x, n.onscroll),
                (n.node = n.onscroll = t),
                (ke[e] = t),
                delete ke[e]),
              ke[e] ||
                (((n = {}).node = s),
                (n.onscroll = function (t) {
                  !(function (e, t, o) {
                    var r = ke[t];
                    r &&
                      (r.tID && (clearTimeout(r.tID), delete r.tID),
                      (r.tID = setTimeout(function () {
                        var e,
                          o,
                          n = we[t],
                          s = n && n.dest,
                          c = s && Q(s);
                        c &&
                          n &&
                          ((e = At(t, c, i)),
                          ((o = he()).pos = t),
                          (o.cmd = f),
                          (o.geom = re(e)),
                          ot(a, t, f, e),
                          wt(n, o)),
                          delete r.tID;
                      }, 750)));
                  })(0, e);
                }),
                (ke[e] = n),
                W.attach(s, x, n.onscroll))));
      } catch (e) {
        h = t;
      }
      try {
        h &&
          ((h.win = he(W.winRect())),
          (h.par = he(l.refRect)),
          (c = he(l.expRect)),
          ((d = he(l.rect)).iv = c.iv),
          (d.xiv = c.xiv),
          (d.yiv = c.yiv),
          delete c.iv,
          delete c.xiv,
          delete c.yiv,
          (h.exp = c),
          (h.self = d));
      } catch (e) {
        h = t;
      }
      return h;
    }
    function kt(e, r) {
      var n,
        c,
        h,
        l,
        f,
        p,
        u,
        g,
        m,
        y,
        w,
        x,
        A,
        k,
        S,
        C,
        T,
        _,
        P,
        E,
        I = o,
        H = o,
        O = e && e.pos;
      O &&
        ((c = (n = we[O]) && n.conf),
        n &&
          c &&
          ((A = n.dest),
          (h = Q(A)),
          (l = Q("sf_pos_rel_el_" + O)),
          h &&
            l &&
            ((f = h[v]),
            (p = l[v]),
            f &&
              ((E = ke[O]) && E.tID && clearTimeout(E.tID),
              nt(),
              (_ = e.exp_obj),
              (u = c.w),
              (g = c.h),
              _
                ? ((k = B(_.t, 0, 0)),
                  (S = B(_.l, 0, 0)),
                  (C = B(_.r, 0, 0)),
                  (T = B(_.b, 0, 0)),
                  (w = B(u + S + C, 0, 0)),
                  (x = B(g + k + T, 0, 0)),
                  k ? ((y = -1 * k), (H = i)) : (y = 0),
                  S ? ((m = -1 * S), (I = i)) : (m = 0))
                : ((w = (I = (m = n.dx = B(e.dx)) < 0) ? u + -1 * m : u + m),
                  (x = (H = (y = n.dy = B(e.dy)) < 0) ? g + -1 * y : g + y)),
              (w <= u && x <= g) ||
                ot(s, O, d, m, y) ||
                ((f.width = w + b),
                (f.height = x + b),
                I && (f.left = m + b),
                H && (f.top = y + b),
                (P = B(n.z, 0)) || (P = 3e3),
                (f.zIndex = P),
                xt(A, i, w, x, P - 1),
                r
                  ? ((p.width = w + b), (p.height = x + b))
                  : ((p.width = u + b), (p.height = g + b)),
                (n.expanded = i),
                (e.dx = m),
                (e.dy = y),
                (e.w = w),
                (e.h = x),
                (e.cmd = "expand"),
                (e.geom = re(At(O, h, i))),
                ot(a, O, d, m, y),
                wt(n, e),
                (f = l = h = n = e = t))))));
    }
    function St() {
      var e,
        r,
        s,
        a,
        c,
        d,
        h = 0,
        l = i,
        f = arguments;
      if (!f[m] || "*" == f[h]) for (e in ((f = []), we)) f.push(e);
      for (; (e = f[h++]); )
        (r = we[e]) &&
          (e in xe && (clearTimeout(xe[e]), delete xe[e]),
          e in Ae && delete Ae[e],
          (d = (a = (s = r.dest) && Q(s)) && K(a)),
          -1 != W.attr(d, "id").indexOf(n) && (d = K((c = d))),
          W.purge(a),
          c && W.purge(c),
          (we[e] = t),
          delete we[e],
          (a = W.make("div")),
          W.attr(a, "id", s),
          W.append(d, a));
      for (e in ((e = ""), we)) {
        l = o;
        break;
      }
      l && ((Ie = ""), vt());
    }
    q &&
      e == top &&
      ((de = pe
        ? function (e) {
            var t,
              i,
              o,
              r,
              n,
              s,
              a,
              c,
              d,
              h = {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0,
                z: 0,
              },
              l = "BackCompat";
            if (e && 1 == e.nodeType)
              try {
                if (((o = ee(e) || le), !W.ready())) return ze(e);
                (t = We(e)),
                  (i = e.getBoundingClientRect()),
                  (h.t = i.top),
                  (h.l = i.left),
                  (s = a = 2),
                  (r = o.compatMode),
                  (c = (n = Ue(o[A])).borderLeftWidth),
                  (d = n.borderTopWidth),
                  6 === pe && r != l && (s = a = 0),
                  r == l &&
                    ((s = c = De(c) ? B(c, 0) : 0),
                    (a = d = De(d) ? B(d, 0) : 0),
                    (h.t -= s),
                    (h.l -= a)),
                  (h.t += t.y),
                  (h.l += t.x),
                  (h.b = h.t + e.offsetHeight),
                  (h.r = h.l + e.offsetWidth),
                  (h.w = se(h.r - h.l, 0)),
                  (h.h = se(h.b - h.t, 0)),
                  (h.z = Ue(e, "zIndex"));
              } catch (e) {
                h = {
                  t: 0,
                  l: 0,
                  r: 0,
                  b: 0,
                  w: 0,
                  h: 0,
                  z: 0,
                };
              }
            return h;
          }
        : ze),
      q.def(
        "dom",
        {
          rect: de,
          currentStyle: Ue,
          contains: Be,
          docRect: Ve,
          winRect: function (t) {
            var i = (t && ie(t)) || e,
              o = i.innerHeight || 0,
              r = i.innerWidth || 0,
              n = i.screenY || i.screenTop || 0,
              s = o + n,
              a = i.screenX || i.screenLeft || 0,
              c = r + a,
              d = Me(t);
            return (
              o ||
                r ||
                !d ||
                ((o = d.clientHeight || 0),
                (c = a + (r = d.clientWidth || 0)),
                (s = n + o)),
              {
                t: n,
                l: a,
                b: s,
                r: c,
                w: r,
                h: o,
              }
            );
          },
          bounds: $e,
          overlaps: Xe,
        },
        L,
        i
      ),
      (function () {
        if (q) {
          q.def(
            "msghost",
            {
              prep: et,
              attach: tt,
              detach: it,
              usingHTML5: Ze,
              send: Ke,
            },
            W,
            i
          ),
            W.attach(e, O, Ye),
            (initID = "xdm-html5-init-" + J()),
            (ye = 0 == ye.indexOf("file") ? (ye = "file") : ye);
          try {
            e[R](initID, "file" == ye ? "*" : ye);
          } catch (t) {
            W.detach(e, O, Ye);
          }
        }
      })(),
      q.def(
        "$sf.host",
        {
          Config: Fe,
          PosConfig: Ne,
          PosMeta: function e(t, i, o) {
            var r,
              n,
              s = this;
            if (!(s instanceof e)) return new e(key, o, pos, t);
            if (((r = {}), (n = {}), !i || typeof i != g)) return s;
            t && typeof t == u && (r = Y(r, t)),
              o && typeof o == u && (n[i] = o),
              (s.toString = function () {
                var e = new he();
                return (e.shared = r), (e.non_shared = n), e.toString();
              }),
              (s.value = function (e, t) {
                var i = "";
                return e && typeof e == g
                  ? ((t && typeof t == g) || (t = "shared"),
                    (i =
                      "shared" == t
                        ? r[e] || ""
                        : (e in n && n[prop_key]) || ""))
                  : i;
              });
          },
          Position: function e(t, i, o, n) {
            var s,
              a = this,
              c = t && typeof t;
            if (!(a instanceof e)) return new e(t, i, o, n);
            if (null == Re) {
              var d = "Publisher Config not initialized - abort";
              return logger.error(d), void info.errs.push(d);
            }
            c == u ? Y(a, t) : (s = a.id = U(t) || J(r)),
              i
                ? ((a.html = i), (a.src = ""))
                : a.src
                ? (a.html = je(a.src))
                : ((a.html = a.html || ""), (a.src = "")),
              a.html || (a.html = ""),
              (a.meta = o || a.meta || {}),
              (a.conf = n || a.conf || {}),
              s &&
                (Re && Re.positions[s]
                  ? (a.conf = Re.positions[s])
                  : n && ((n.id = s), (a.conf = new Ne(n))));
          },
          nuke: St,
          get: function (e) {
            var t = we[e];
            return t ? Y({}, t) : null;
          },
          render: function r() {
            var n,
              s,
              a,
              c,
              d,
              h,
              l,
              f,
              p,
              u,
              g,
              A,
              k,
              S,
              C,
              T = 0,
              _ = arguments,
              P = "relative",
              E = "absolute",
              I = "top:0px;left:0px;visibility:hidden;display:none;";
            if (!Re) return o;
            if (!W.ready())
              return (
                W.wait(function () {
                  r.apply(t, _), (_ = t);
                }),
                t
              );
            for (
              _[0] instanceof Array && 1 == _[m] && (_ = _[0]);
              (n = _[T++]);

            )
              if (
                (a = (s = n.id) ? Re.positions[s] : t) &&
                (c = (p = a.dest) && Q(p))
              ) {
                if (((A = a.w), (k = a.h), !A)) {
                  try {
                    A = c.offsetWidth;
                  } catch (e) {
                    A = 0;
                  }
                  A && (a.w = A);
                }
                if (!k) {
                  try {
                    k = c.offsetHeight;
                  } catch (e) {
                    k = 0;
                  }
                  k && (a.h = k);
                }
                A &&
                  k &&
                  ((f = new he()),
                  (h = Q((u = "sf_pos_rel_el_" + s))),
                  (l = K(c)),
                  h && l == h && (l = K(h)),
                  xt(p),
                  (C = xe[s]) && clearTimeout(C),
                  (C = Ae[s]) && delete Ae[s],
                  (xe[s] = setTimeout(function () {
                    rt(s);
                  }, Re.to)),
                  (Ie = "rendering"),
                  ot("onStartPosRender", s, a, n),
                  (g = [
                    "position:",
                    "",
                    ";z-index:0;",
                    y,
                    ":",
                    A,
                    b,
                    ";",
                    w,
                    ":",
                    k,
                    b,
                    ";",
                    "visibility:inherit;",
                  ]),
                  h
                    ? (((S = h[v]).width = A + b),
                      (S.height = k + b),
                      ((S = c && c[v]).width = A + b),
                      (S.height = k + b))
                    : ((g[1] = P),
                      ((h = W.make("div")).id = u),
                      (h.className = "iab_sf"),
                      (d = c.cloneNode(o)),
                      W.css(d, g),
                      h.appendChild(d),
                      W.css(h, g),
                      l.replaceChild(h, c),
                      (c = Q(p))),
                  (f.id = s),
                  (f.dest = p),
                  (f.conf = he(a)),
                  (f.meta = n.meta.toString()),
                  (f.html = re(n.html)),
                  (f.geom = re(At(s, c))),
                  (f.src = Re.renderFile),
                  (f.has_focus = q.cstr(document.hasFocus())),
                  (g[1] = E),
                  (g[13] = I),
                  _e ||
                    (W.attach(e, x, ut),
                    W.attach(e, "resize", gt),
                    W.attach(e, "unload", vt),
                    W.attach(e, "focus", ft),
                    W.attach(e, "blur", pt),
                    (_e = i)),
                  z.replace(
                    {
                      id: p,
                      name: f,
                      src: Re.renderFile,
                      _pos_id: s,
                    },
                    g,
                    h,
                    bt,
                    mt
                  ),
                  (we[s] = f));
              }
          },
          status: function () {
            return Ie;
          },
        },
        t,
        i
      ));
  })(window),
  (function (e) {
    var t = !1,
      i = !0,
      o = null,
      r = e && e.document,
      n = e && e.$sf,
      s = n && n.lib,
      a = s && s.lang,
      c = s && s.dom,
      d = a && a.cstr,
      h = a && a.guid,
      l = c && c.elt,
      f = c && c.par,
      p = c && c.tags,
      u = c && c.attr,
      g = c && c.purge,
      v = c && c.ready,
      m = {},
      y = 0,
      w = t,
      b = t;
    function x(t, i) {
      var o, a;
      try {
        s || (s = n && n.lib),
          s && s.logger && e == top
            ? i
              ? s.logger.error(t)
              : s.logger.log(t)
            : ((o = r.getElementsByTagName("head")[0]),
              ((a = r.createElement("script")).type = "text/plain"),
              (a.text =
                "\x3c!-- SafeFrame " +
                (i ? "error" : "log") +
                ": " +
                (t || "unknown") +
                " --\x3e"),
              o.appendChild(o, a));
      } catch (e) {}
    }
    function A() {
      var e, t;
      if (c) for (e in m) (t = l(e)) && (g(t), delete m[e]);
    }
    function k() {
      var g,
        y,
        k,
        S,
        C,
        T,
        _,
        P,
        E,
        I,
        H,
        O,
        R,
        G,
        F,
        N,
        j,
        M = (p && p("script")) || [],
        D = [],
        L = 0,
        q = t,
        W = n && n.host,
        z = W && W.conf;
      if (!n || !a || !c) return x("SafeFrame base library not found", i), q;
      if ((s || (s = n && n.lib), b && w))
        return x("Automatic boot already invoked"), q;
      if (e == top) {
        try {
          sf_conf = W.Config();
        } catch (N) {
          sf_conf = o;
        }
        if (z && !sf_conf)
          try {
            sf_conf = W.Config(z);
          } catch (e) {
            sf_conf = o;
          }
        if (!sf_conf) return x("No configuration found"), q;
      }
      for (; (g = M[L++]); )
        if ("sf_data" == g.className || "text/x-safeframe" == u(g, "type")) {
          if (
            ((w = i),
            (k = u(g, "id")) || ((k = h("sf_data_element")), u(g, "id", k)),
            m[k])
          )
            continue;
          S = g.text || g.innerHTML || g.innerText;
          try {
            (S = a.trim(S)), (S = (S = new Function("return " + S))());
          } catch (N) {
            (S = o),
              x(
                "Error parsing tag configuration " + ((N && N.message) || ""),
                i
              );
            continue;
          }
          if (S && S.id && (S.html || S.src))
            if (e != top)
              (C =
                (C = S.html || "") ||
                ((j = S.src),
                d([
                  "<scr",
                  "ipt type='text/javascript', src='",
                  j,
                  "'></scr",
                  "ipt>",
                ]))),
                v()
                  ? x("cannot write html content into already loaded document")
                  : r.write(C);
            else {
              if (!(y = f(g))) {
                x("can't find parent element for script tag", i);
                continue;
              }
              if (
                ((_ = sf_conf && sf_conf.positions[S.id]) ||
                  (((_ = S.conf).id = S.id), _ && (_ = new W.PosConfig(_))),
                !_)
              ) {
                x(
                  "no position conf found pre-defined or inline for position " +
                    S.id,
                  i
                );
                continue;
              }
              if (
                (_.dest || (_ = new W.PosConfig(_, h("sf_position"))), S.meta)
              ) {
                for (F in ((F = ""), (O = {}), (E = S.meta)))
                  (H = typeof (I = E[F])),
                    !R && "object" == H && I && ((R = I), (G = F)),
                    "object" != H && "function" != H && (O[F] = I);
                E = new W.PosMeta(O, G || "", G && R ? R : o);
              }
              if (
                ((T = new W.Position(S, o, E, _)), (m[k] = k), !(P = l(_.dest)))
              )
                if (v()) {
                  (P = c.make("div")), u(P, "id", _.dest);
                  try {
                    y.insertBefore(P);
                  } catch (N) {
                    x("failed auto-adding destination element " + N.message, i);
                    continue;
                  }
                } else r.write("<div id='", _.dest, "'></div>");
              D.push(T);
            }
          else
            x(
              "no content or id property found in the inline position object",
              i
            );
        }
      if (D.length)
        try {
          W.render(D);
        } catch (e) {
          x("failed during rendering " + e.message);
        }
      else x("no positions to boot");
      c.wait(A);
    }
    setTimeout(function r() {
      var s,
        a,
        d,
        h,
        l,
        f = i;
      if (!w)
        if (((a = n && n.host), e == top)) {
          a && !a.boot && (a.boot = k);
          try {
            s = a && a.Config();
          } catch (e) {
            s = o;
          }
          if (!s)
            try {
              s = a && a.conf;
            } catch (e) {
              s = o;
            }
          if (
            s &&
            ("auto" in s && s.auto === t && (f = t),
            (!a.render || !a.Config) && (d = s.hostFile))
          )
            return (
              (h = p("head")[0]),
              ((l = c.make("script")).id = "sf_host_lib"),
              (l.type = "text/javascript"),
              (l.className = "sf_lib"),
              (l.src = d),
              e.ActiveXObject
                ? (l.onreadystatechange = function () {
                    var e = l.readyState;
                    ("loaded" != e && "complete" != e) ||
                      ((b = t),
                      f && k(),
                      (l.onreadystatechange = o),
                      (l = h = a = s = o));
                  })
                : (l.onload = function () {
                    (b = t), f && k(), (l.onload = o), (l = h = a = s = o);
                  }),
              (b = i),
              void h.appendChild(l)
            );
          f && (s ? ((b = i), k(), (b = t)) : y++ <= 100 && setTimeout(r, 50));
        } else k();
    }, 50);
  })(window),
  (function (e) {
    var t,
      i,
      o,
      r,
      n,
      s,
      a = null,
      c = !0,
      d = !1,
      h = "load",
      l = "on",
      f = "message",
      p = "unload",
      u = "onunload",
      g = l + f,
      v = "onload",
      m = "__defineGetter__",
      y = "__defineSetter__",
      w = "__defineProperty__",
      b = "addEventListener",
      x = "removeEventListener",
      A = "attachEvent",
      k = "detachEvent",
      S = "exp-ovr",
      C = "collapse",
      T = "error",
      _ = "geom-update",
      P = "focus-change",
      E = "expand",
      I = C,
      H = "collapsed",
      O = "failed",
      R = "read-cookie",
      G = "write-cookie",
      F = 3e3,
      N = "object",
      j = e && e.document,
      M = e && e.parent,
      D = e && e.$sf,
      L = D && D.lib,
      q = D && D.env,
      W = L && L.lang,
      z = W && W.ParamHash,
      V = L && L.dom,
      B = (V && V.iframes, V && V.msgclient_fb),
      U = q && q.isIE,
      $ = e && e.unescape,
      X = W && W.cstr,
      J = W && W.cnum,
      Y = V && V.append,
      Q = V && V.tags,
      K = V && V.elt,
      Z = V && V.purge,
      ee = V && V.attach,
      te = V && V.detach,
      ie = V && V.attr,
      oe = d,
      re = d,
      ne = d,
      se = d,
      ae = a,
      ce = a,
      de = a,
      he = a,
      le = d,
      fe = "",
      pe = "",
      ue = d,
      ge = "",
      ve = 0,
      me = 0,
      ye = 0,
      we = [],
      be = [];
    function xe(e, t) {
      var i, o, r;
      try {
        (i = Q("head")[0]),
          -1 == e.search(/\{[^\}]*}/g)
            ? (((o = V.make("link")).type = "text/css"),
              (o.rel = "stylesheet"),
              (o.href = e))
            : (((o = V.make("style")).type = "text/css"),
              U
                ? (o.styleSheet.cssText = e)
                : ((r = j.createTextNode(e)), Y(o, r))),
          t && (o.id = t),
          Y(i, o);
      } catch (e) {}
    }
    function Ae(e) {
      var t,
        i = window;
      try {
        e = e || i.event || {};
      } catch (t) {
        e = {
          type: p,
        };
      }
      for (; (t = be.shift()); )
        try {
          t(e);
        } catch (e) {}
      try {
        o && ((i[A] = o), (i[k] = n));
      } catch (e) {}
      try {
        r && ((i[b] = r), (i[x] = s));
      } catch (e) {}
      oe || te(i, h, _e), te(i, p, Te);
      try {
        i.onerror = a;
      } catch (e) {}
      try {
        ve && (clearTimeout(ve), (ve = 0));
      } catch (e) {}
      try {
        me && (clearTimeout(me), (me = 0));
      } catch (e) {}
      try {
        ye && (clearTimeout(ye), (ye = 0));
      } catch (e) {}
      return (i = o = r = n = s = j = $ = M = t = grand_par = a), 1;
    }
    function ke() {
      try {
        ye && (clearTimeout(ye), (ye = 0));
      } catch (e) {}
      try {
        U && e.onmessage && (e.onmessage = a);
      } catch (e) {}
      try {
        e.onerror = Re;
      } catch (e) {}
      ye = setTimeout(ke, F);
    }
    function Se() {
      try {
        document.open("text/html", "replace"),
          document.write(""),
          document.close();
      } catch (e) {}
    }
    function Ce() {
      var t = d;
      if (
        ((function () {
          var e,
            t = Q("iframe"),
            i = 0,
            o = "";
          if (pe)
            for (; (e = t[i++]); )
              if (
                (o =
                  (o = ie(e, "src")) && o.length >= 9
                    ? o.substring(0, o.indexOf("/", 9)).toLowerCase()
                    : "") &&
                o == pe &&
                "sf" != e.className
              )
                try {
                  Z(e);
                } catch (e) {}
        })(),
        U)
      ) {
        try {
          me && -1 != me && (clearTimeout(me), (me = 0));
        } catch (e) {}
        try {
          t = e == top && -1 != me;
        } catch (e) {
          t = d;
        }
        if (t) return (me = -1), Ae(), void Se();
        try {
          me || (me = setTimeout(Ce, F));
        } catch (e) {}
      }
    }
    function Te(e) {
      Ae(e), Se();
    }
    function _e() {
      oe ||
        ((oe = c),
        te(e, h, _e),
        (function () {
          var e,
            t,
            o = 0,
            r = (i && i.tgt) || "_top";
          for (
            t = Q("a"), "_self" == r && (r = "_top");
            (e = t[o++]) &&
            (ie(e, "target") != r && ie(e, "target", r), !(o > 10));

          );
        })());
    }
    function Pe(e) {
      var t, i, o, r, n;
      try {
        (t = e.data), (i = e.source), e.origin;
      } catch (e) {}
      if (
        (V.evtCncl(e),
        t &&
          i &&
          i == top &&
          ((o = z(t, a, a, c, c)),
          (r = o.guid),
          (n = o.msg),
          fe == r && n && typeof n == N))
      )
        try {
          setTimeout(function () {
            !(function (e, t) {
              var i,
                o,
                r = d,
                n = {};
              e &&
                ((o = e.geom || ""),
                (i = e.cmd),
                o && (de = z($(o), a, a, c, c)));
              (n.cmd = i),
                (n.value = n.info = e && e.value),
                (n.reason = e && e.reason),
                i == H
                  ? ((r = c),
                    re && ((ce = a), (re = d), (ne = c), Me(), (ne = d), Ne(H)))
                  : i == I
                  ? ((r = c), re && ((ce = a), (re = d), Ne(H)))
                  : i == E
                  ? ((r = c), ce && ((ce = a), (re = c), Ne("expanded")))
                  : i == _
                  ? Ne(_)
                  : i == P
                  ? ((n.info = n.value = W.cbool(n.value)),
                    (le = n.value),
                    Ne(P, n))
                  : i == R
                  ? ((r = c),
                    ce && ((ce = a), (re = c), (n = e && e.value), Ne(R, n)))
                  : i == G
                  ? ((r = c), ce && ((ce = a), (re = c), Ne(G, n)))
                  : i == O && ((r = c), ce && ((ce = a), (re = c), Ne(O, n)));
              e = a;
            })(n),
              (o = e = r = n = a);
          }, 1);
        } catch (e) {}
    }
    function Ee(t, i, a) {
      var h,
        l,
        f = d;
      if ((a ? ((h = n || s), (l = s)) : ((h = o || r), (l = r)), h)) {
        try {
          h(t, i), (f = c);
        } catch (e) {
          f = d;
        }
        if (!f)
          try {
            h.call(e, t, i), (f = c);
          } catch (e) {
            f = d;
          }
      }
      if (l && !f)
        try {
          l.call(e, t, i, d);
        } catch (e) {}
    }
    function Ie(e, t) {
      var i = d;
      switch ((e = X(e).toLowerCase())) {
        case p:
        case u:
          be.push(t);
          break;
        case f:
        case g:
          break;
        default:
          i = c;
      }
      i && Ee(e, t);
    }
    function He(e, t) {
      var i,
        o,
        r = 0;
      switch ((e = X(e).toLowerCase())) {
        case p:
        case u:
          o = be;
      }
      if (o) {
        if (o.length)
          for (; (i = o[r]); ) {
            if (i === t) {
              o.splice(r, 1);
              break;
            }
            r++;
          }
      } else Ee(e, t, c);
    }
    function Oe() {
      var e;
      try {
        if (we.length > 0)
          (e = we[0]), Fe(X(["cmd=", T, "&pos=", ge, "&errors=", e]), T);
        ve && (clearTimeout(ve), (ve = 0));
      } catch (e) {}
      we = [];
    }
    function Re(e, t, i) {
      we.push(
        X([
          "Error occurred inside SafeFrame:\nMessage: ",
          e,
          "\nURL:",
          t,
          "\nLine:",
          i,
        ])
      );
      try {
        ve && (clearTimeout(ve), (ve = 0)), (ve = setTimeout(Oe, F));
      } catch (e) {}
      return c;
    }
    function Ge(e) {
      var t = W.noop,
        i = Object,
        n = {
          get: t,
          set: t,
        },
        s = d;
      if (e) {
        if (
          (o && ((e[A] = Ie), (e[k] = He)),
          r && ((e[b] = Ie), (e[x] = He)),
          e[m])
        )
          try {
            e[m](v, t),
              e[y](v, t),
              e[m](u, t),
              e[y](u, t),
              e[m](g, t),
              e[y](g, t),
              (s = c);
          } catch (e) {
            s = d;
          }
        if (!s && i[w])
          try {
            i[w](e, v, n), i[w](e, u, n), i[w](e, g, nobg), (s = c);
          } catch (e) {
            s = d;
          }
      }
      return s;
    }
    function Fe(e, i) {
      var o,
        r = W.guid("sf_pnd_cmd"),
        n = t.dest,
        s = d,
        h = W.time();
      if (e && i && !ce) {
        if (
          ((o = z({
            msg: e,
            id: n,
            guid: fe,
            cmd: i,
          })),
          (ce = {
            id: r,
            sent: h,
            cmd: i,
          }),
          setTimeout(function () {
            ce &&
              ce.id == r &&
              ((i != S && "exp-push" != i) || ((ne = c), Me(), (ne = d)),
              Ne("failed:" + i + ":timeout")),
              (r = s = h = i = e = ce = o = a);
          }, 4e3),
          ue)
        )
          try {
            top.postMessage(o.toString(), "file" == pe || "" == pe ? "*" : pe),
              (s = c);
          } catch (e) {
            s = d;
          }
        var l, f, p;
        s ||
          ((l = "send"),
          (f = o),
          B && (msg_clientfb = V.msgclient_fb),
          l && B && B[l] && B[l](f, p));
      }
    }
    function Ne(e, t) {
      try {
        ae(e, t);
      } catch (e) {}
    }
    function je(e, t) {
      var i,
        o,
        r = K("sf_align"),
        n = r.style;
      (i = e ? "right:0px;" : "left:0px;"),
        (o = t ? "bottom:0px;" : "top:0px;"),
        (n.cssText = "position:absolute;" + i + o),
        (r = n = a);
    }
    function Me() {
      return ne || (se && re && !ce) ? (je(0, 0), c) : d;
    }
    function De(e, t, i) {
      !se &&
        fe &&
        ((e = J(e, 0, 0)),
        (t = J(t, 0, 0)),
        e,
        t,
        (se = c),
        (ae = W.callable(i) ? i : a));
    }
    function Le(e, t, i) {
      var o,
        r,
        n,
        s,
        a,
        h,
        l,
        f = d,
        p = d,
        u = i ? "exp-push" : S,
        g = ["cmd=", u, "&pos=", ge],
        v = 0,
        m = 0;
      if (se && !ce && (!i || Je("exp-push"))) {
        if (e && typeof e == N) {
          if (
            ((o = J(e.r, 0, 0)),
            (r = J(e.b, 0, 0)),
            (n = J(e.t, 0, 0)),
            (s = J(e.l, 0, 0)),
            e.push)
          ) {
            if (!Je("exp-push")) return;
            (u = "exp-push"), (g[1] = u);
          }
          !o && s && ((f = c), (v = -1 * s)),
            o && !s && (v = o),
            !r && n && ((p = c), (m = -1 * n)),
            r && !n && (m = r),
            ((n && r) || (s && o) ? d : c)
              ? (je(f, p), g.push("&dx=", v, "&dy=", m), Fe(X(g), u))
              : ((h = (a = K("sf_align")) && a.style),
                (l = ["position:absolute;"]),
                n && r
                  ? l.push("top:", n, "px;")
                  : n
                  ? l.push("bottom:0px;")
                  : r && l.push("top:0px;"),
                s && o
                  ? l.push("left:", s, "px;")
                  : s
                  ? l.push("right:0px;")
                  : r && l.push("left:0px;"),
                h && (h.cssText = X(l)),
                g.push("&exp_obj=", escape(z(e))),
                Fe(X(g), u));
        } else {
          if (((e = J(e, 0)), (t = J(t, 0)), e <= 0 && t <= 0)) return;
          je((f = e <= 0), (p = t <= 0)),
            g.push("&dx=", e, "&dy=", t),
            Fe(X(g), u);
        }
        return c;
      }
    }
    function qe() {
      Me() && Fe(X(["cmd=", C, "&pos=", ge]), C);
    }
    function We() {
      return de;
    }
    function ze(e, t) {
      var i,
        o = "";
      return (
        he &&
          (t
            ? t in he
              ? (o = X(he[t][e]))
              : he.non_shared &&
                t in he.non_shared &&
                (o = X(he.non_shared[t][e]))
            : (i = he.shared) && typeof i == N && (o = X(i[e]))),
        o
      );
    }
    function Ve() {
      if (ce) {
        if (ce.cmd == S) return "expanding";
        if (ce.cmd == C) return STATUS;
      }
      return re ? "expanded" : "collapsed";
    }
    function Be(e, t) {
      var i = t == a,
        o = i ? "read-cookie" : "write-cookie",
        r = ["cmd=", o, "&pos=", ge, "&cookie=", e];
      i || (r.push("&value="), r.push(t.value)), Fe(X(r), o);
    }
    function Ue(e) {
      Fe(X(["cmd=", "msg", "&pos=", ge, "&msg=", e]), "msg");
    }
    function $e() {
      var e,
        t = J(de && de.self && de.self.iv, -1, 0);
      return t >= 0 && (e = Math.floor(100 * t)), e;
    }
    function Xe() {
      return le || document.hasFocus();
    }
    function Je(e) {
      var i = t.conf,
        o = (i && i.supports) || d;
      return (
        o &&
          ((e = X(e)) ? "0" == (o = o[e] || d) && (o = d) : (o = W.mix({}, o))),
        o
      );
    }
    !(function () {
      var l,
        u,
        g = {};
      if (W && V)
        if (
          (function (l) {
            var u,
              g,
              v,
              m,
              y,
              w,
              S = d,
              C = c;
            l = l && l instanceof Object ? l : {};
            try {
              g = e.name;
            } catch (e) {}
            try {
              e.name = "";
            } catch (e) {}
            if (!g) return (l.status = 500.101), S;
            try {
              top == M
                ? ((t = z(g, a, a, c, c)),
                  (m = W.time()),
                  (fe = t.guid),
                  (w =
                    m - (y = J(fe.replace(/[^_]*_(\d+)_\d+_\d+/g, "$1"), 0))),
                  (S = fe && y && w > 0 && w < 3e4),
                  t.loc && (t.loc = unescape(t.loc)),
                  S || (l.status = 500.104))
                : (l.status = 500.102);
            } catch (e) {
              (t = fe = a), (S = d), (l.status = 500.103);
            }
            if (S)
              try {
                if (
                  ((i = t.conf),
                  (e.name = i.dest),
                  (ge = i.id),
                  (he = t.meta),
                  (pe = t.host),
                  (de = t.geom),
                  (ue = W.cbool(t.html5)),
                  (le = W.cbool(t.has_focus)),
                  (v = i.bg),
                  de &&
                    (((de = z($(de), a, a, c, c)).self && de.exp) || (de = a)),
                  pe ||
                    (pe = (pe = j.referrer).substring(0, pe.indexOf("/", 9))),
                  v &&
                    xe(
                      X(["#sf_body { background-color: ", v, "; }"]),
                      "sf_bg_css"
                    ),
                  "_self" == (v = i.tgt) && (i.tgt = "_top"),
                  v || (i.tgt = "_top"),
                  "_top" != v)
                ) {
                  for (; Z(Q("base")[0]); );
                  (u = V.make("base")), ie(u, "target", v), Y(Q("head")[0], u);
                }
                U && ((o = e[A]), (n = e[k])),
                  (r = e[b]),
                  (s = e[x]),
                  ee(e, p, Te),
                  ee(e, h, _e),
                  ee(e, f, Pe),
                  Ge(e),
                  Ge(e.__proto__),
                  Ge(e.Window && e.Window.prototype);
              } catch (e) {
                (l.status = 500.105), (t = i = fe = a), (C = d);
              }
            else (t = fe = a), (C = d);
            return C;
          })(g)
        )
          W.def(
            "ext",
            {
              register: De,
              expand: Le,
              collapse: qe,
              geom: We,
              meta: ze,
              status: Ve,
              supports: Je,
              cookie: Be,
              message: Ue,
              inViewPercentage: $e,
              winHasFocus: Xe,
            },
            D,
            c
          ),
            (function () {
              var e, o;
              if (
                ((o = X(i && i.css)),
                (e = X(t && t.html)),
                o && xe((o = $(o)), "sf_custom_css"),
                e)
              ) {
                e = $(e);
                try {
                  j.write(e), Ce(), ke();
                } catch (e) {
                  Re("Error while rendering content: " + e[f]);
                }
              }
            })();
        else
          try {
            (l = Q("head")[0]),
              ((u = V.make("script")).type = "text/plain"),
              (u.text =
                "\x3c!-- Construction of SafeFrame failed: " +
                (g.status || "unknown") +
                " --\x3e"),
              Y(l, u);
          } catch (e) {}
    })();
  })(window);
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var AdheseGateway = {};
var adhese;

AdheseGateway.adhese = {};

AdheseGateway.accountName = "technologyinsider";
AdheseGateway.debug = technologyinsiderConfig.options.debug
  ? technologyinsiderConfig.options.debug
  : false;
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
      desktop: [970, 250],
      tablet: [728, 90],
      mobile: [300, 250],
    },
    gewinnspiel: {
      desktop: [600, 1100],
      tablet: [600, 1100],
      mobile: [320, 400],
    },
  };

  if (!sizeMapping[slotType]) {
    AdheseGateway.logger("no size mapping found for slotType: " + slotType);
    return [1, 1];
  }
  return sizeMapping[slotType][deviceType];
};

AdheseGateway.findBiggestSize = function (sizes) {
  // we need to check if sizes is an array of arrays, if not, put it in an array
  if (!Array.isArray(sizes[0])) {
    sizes = [sizes];
  }

  if (sizes.length == 0) return "1x1";
  var sizePriority = [
    "600x1100",
    "1800x1000",
    "970x1000",
    "970x250",
    "900x250",
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

  adFrm.width = ad.width;
  adFrm.height = ad.height;
  adFrm.style.width = ad.width;
  adFrm.style.height = ad.height;
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
    host: "https://aa.technologyinsider.nl/json",
    location: "",
    safeframe: true,
    safeframeContainerID: "slotName",
    previewHost: "https://" + AdheseGateway.account + "-preview.adhese.org",
    viewabilityTracking: true,
  });
  adhese.registerRequestParameter("xf", btoa(window.location.href));
  adhese.registerRequestParameter("tl", "none");
  try {
    if (technologyinsiderConfig.data.pageType)
      adhese.registerRequestParameter(
        "pt",
        technologyinsiderConfig.data.pageType
      );
    if (technologyinsiderConfig.data.category)
      adhese.registerRequestParameter(
        "ct",
        technologyinsiderConfig.data.category
      );
    if (technologyinsiderConfig.data.subCategoryOne)
      adhese.registerRequestParameter(
        "so",
        technologyinsiderConfig.data.subCategoryOne
      );
    if (technologyinsiderConfig.data.subCategoryTwo)
      adhese.registerRequestParameter(
        "st",
        technologyinsiderConfig.data.subCategoryTwo
      );
    if (technologyinsiderConfig.options.debug)
      adhese.registerRequestParameter(
        "db",
        technologyinsiderConfig.options.debug.toString()
      );
  } catch (e) {}
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
  parentElement = document.getElementById(parentId);
  if (parentElement) {
    parentElement.appendChild(adContainer);
  } else {
    AdheseGateway.logger("Advertising div not found for", parentId);
    console.warn("Advertising div not found for", parentId);
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

AdheseGateway.handleAdheseResponse = function (
  response,
  slots,
  technologyinsiderConfig
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
      slot.adReceived = true;
      AdheseGateway.logger("found slot for ad: " + ad.slotName);
      AdheseGateway.logger(slot);
      AdheseGateway.createAdContainer(
        ad.slotName,
        slot.containerId,
        ad.width,
        ad.height
      );
      if (slot.slotType == "site_takeover") {
        this.renderInFriendlyIframe(ad);
      } else {
        AdheseGateway.handleLazyLoad(ad, slot.containerId);
      }
    } else {
      AdheseGateway.logger("no slot found for ad: " + ad.slotName);
    }
  }

  // loop through slots and for each slot that did not receive an ad, fire a browser event so that custom logic can be applied
  slots.forEach(function (slot) {
    if (!slot.adReceived) {
      var event = new CustomEvent("AdheseNoAd", {
        detail: {
          slot: slot,
        },
      });
      window.dispatchEvent(event);
    }
  });
};

AdheseGateway.getPreviewUrl = function (slot) {
  var previewUrl =
    "https://" +
    AdheseGateway.accountName +
    "-preview.adhese.org/creatives/preview/json/tag.do?id=";
  var urlParams = new URLSearchParams(window.location.search);
  var adhesePreviewCreativeId = urlParams.get("adhesePreviewCreativeId");
  previewUrl += adhesePreviewCreativeId;
  return previewUrl;
};

AdheseGateway.sendAdheseRequest = function (slots, technologyinsiderConfig) {
  if (window.location.href.includes("adhesePreviewCreativeId")) {
    var previewSlots = [];
    for (p in adhese.previewFormats) {
      for (var x = 0; x < slots.length; x++) {
        if (p == slots[x].format) {
          previewSlots.push(slots[x]);
          var response = AdheseAjax.request({
            url: AdheseGateway.getPreviewUrl(slots[x]),
            method: "GET",
            json: true,
          }).done(function (result) {
            for (var i = 0; i < previewSlots.length; i++) {
              result[0].slotName = previewSlots[i].containerId;
              result[0].viewableImpressionCounter = "";
              result[0].tag = result[0].tag
                .replace(/\[adheseReplace.*?\]/g, "")
                .replace(/\[adheseLogID\]/g, "");
              result[0].body = result[0].body
                .replace(/\[adheseReplace.*?\]/g, "")
                .replace(/\[adheseLogID\]/g, "");
              if (!previewSlots[i].previewRendered)
                AdheseGateway.renderInFriendlyIframe(result[0]);
              previewSlots[i].previewRendered = true;
            }
          });
        }
      }
    }
  }

  AdheseGateway.logger("sendAdheseRequest()");
  //do POST request to adhese
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://aa.technologyinsider.nl/json", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      AdheseGateway.logger("response from adhese:");
      AdheseGateway.logger(response);
      //if we have a response, we render the ads
      AdheseGateway.handleAdheseResponse(
        response,
        slots,
        technologyinsiderConfig
      );
    } else {
      AdheseGateway.logger("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send(
    JSON.stringify(adhese.getRequestPayload(AdheseGateway.adhese.slots))
  );
};

AdheseGateway.createAdheseSlots = function (slots, technologyinsiderConfig) {
  //initialize adhese if not already done:
  AdheseGateway.initAdhese(slots, technologyinsiderConfig);

  // register adhese slots to adhese SDK
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var divId = slot.containerId;
    var location =
      technologyinsiderConfig.data.domain +
      "_" +
      technologyinsiderConfig.data.category +
      "_" +
      technologyinsiderConfig.data.pageType +
      "_" +
      slot.slotType;
    var format = AdheseGateway.findBiggestSize(slot.sizes);
    slot.format = format;
    var slotCode = location + "-" + format;
    slot.slotCode = slotCode;
    //if any of the above variables is undefined then skip this slot
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

  //send adhese request
  AdheseGateway.sendAdheseRequest(slots, technologyinsiderConfig);
};
AdheseGateway.init = function (technologyinsiderConfig) {
  //check deviceType
  AdheseGateway.deviceType = AdheseGateway.getDeviceType();
  //first we pick all slots based on device type
  var slots = AdheseGateway.filterSlotsOnDevice(technologyinsiderConfig.slots);
  //find sizes based on slotType and viewport, assign to slot object
  AdheseGateway.assignDeviceSizes(slots);
  AdheseGateway.createAdheseSlots(slots, technologyinsiderConfig);
};
AdheseGateway.init(technologyinsiderConfig);
