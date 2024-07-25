var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var apstag = apstag || {};

var AdheseGateway = {};
AdheseGateway.debug = false;
AdheseGateway.multiplier = 1;
AdheseGateway.roadblockSlotAdded = false;
AdheseGateway.PREBID_TIMEOUT = 2000;
AdheseGateway.prebidRefererUrl = window.location.href;
AdheseGateway.infiniteScroll = false;
AdheseGateway.infiniteScrollSlots = [];
AdheseGateway.targetArray = [];
AdheseGateway.adServer = "google";
AdheseGateway.adUnits = [];
AdheseGateway.definedSlots = undefined;
AdheseGateway.consentForAds;
AdheseGateway.deviceType = "unknown";
AdheseGateway.adheseSlots = [];
AdheseGateway.gptadslots = [];
AdheseGateway.amazonSlots = [];
AdheseGateway.adheseScreenWidth = 0;
AdheseGateway.adheseViewportDimensions = { width: 0, height: 0 };
AdheseGateway.consentString;
AdheseGateway.cmp = "liveramp";
AdheseGateway.slotsOrderedByElementId = {};
AdheseGateway.floor = 0.5;
AdheseGateway.enableAmazon = true;
AdheseGateway.enableCriteo = true;
AdheseGateway.schainParamsFromScriptTag = {};
AdheseGateway.digitalAudienceCat = null;

if (window.location.href.includes("adhesegw")) {
  AdheseGateway.debug = true;
}

if (
  typeof document.currentScript.getAttribute("data-digitalaudiencecat") !== null
) {
  AdheseGateway.digitalAudienceCat = document.currentScript.getAttribute(
    "data-digitalaudiencecat"
  );
}

function decorateLog(args, prefix) {
  args = [args];
  prefix && args.unshift(prefix);
  args.unshift(
    "display: inline-block; color: #fff; background: #ff0066; padding: 1px 4px; border-radius: 3px;"
  );
  args.unshift("%cAdhese");
  return args;
}

AdheseGateway.logger = function (arguments) {
  if (AdheseGateway.debug)
    console.info.apply(console, decorateLog(arguments, "DEBUG:"));
};

AdheseGateway.getScreenWidth = function () {
  return Math.max(
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

AdheseGateway.loadScript = function (url, callback) {
  AdheseGateway.logger("ADHESE: loadScript " + url);
  var script = document.createElement("script");
  script.src = url;
  script.async = true;
  script.type = "text/javascript";
  document.head.appendChild(script);

  if (callback) {
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      //Others
      script.onload = function () {
        callback();
      };
    }
  }
};

AdheseGateway.getViewportDimensions = function () {
  AdheseGateway.logger(
    "ADHESE: getViewPortDimensions " +
      document.documentElement.clientWidth +
      " - " +
      window.innerWidth
  );
  var dim = {};
  dim.width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  dim.height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return dim;
};

AdheseGateway.getDeviceType = function (width) {
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

AdheseAdUnit = function (path, width, height) {
  this.adUnitPath = path;
  this.sizes = [new this.Size(width, height)];
  return this;
};

AdheseAdUnit.prototype.getSizes = function () {
  return this.sizes;
};

AdheseAdUnit.prototype.Size = function (width, height) {
  this.width = width;
  this.height = height;
  return this;
};

AdheseAdUnit.prototype.Size.prototype.getWidth = function () {
  return this.width;
};

AdheseAdUnit.prototype.Size.prototype.getHeight = function () {
  return this.height;
};

AdheseAdUnit.prototype.getAdUnitPath = function (options) {
  return this.adUnitPath;
};

AdheseAdUnit.prototype.getAdUnitPath = function (options) {
  return this.adUnitPath;
};

AdheseGateway.sellersJson = {
  contact_email: "info@mmedia.nl",
  contact_address: "Mmedia, Suikersilo-West 31, Halfweg",
  version: "1.0",
  identifiers: [
    {
      name: "Mmedia BV",
      value: "00000000001",
    },
  ],
  sellers: [
    {
      seller_id: "22712321661",
      name: "Annemerel B.V.",
      domain: "annemerel.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22411390898",
      name: "Autoblog.nl",
      domain: "autoblog.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21867799933",
      name: "Bikerbook",
      domain: "bikerbook.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22685817205",
      name: "By Aranka b.v.",
      domain: "byaranka.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22686251436",
      name: "Clubvanrelaxtemoeders",
      domain: "clubvanrelaxtemoeders.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22548658020",
      name: "Crazyvoetbal B.V.",
      domain: "mxxl.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22101458698",
      name: "Erik Aaftink",
      domain: "osm-tips.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22681081253",
      name: "Eyecons BV",
      domain: "eyecons.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "12463988",
      name: "F&L Media B.V.",
      domain: "fnlmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22590397484",
      name: "Fanreach",
      domain: "fanreach.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22590210310",
      name: "FHM",
      domain: "fhm.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22656240778",
      name: "First Place Media BV",
      domain: "first-place.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21952519481",
      name: "Foody B.V.",
      domain: "foody.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22712752046",
      name: "Freetix BV",
      domain: "freetix.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22579712787",
      name: "GS Magenta",
      domain: "magenta.gs",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "101662276",
      name: "HerHealth",
      domain: "herhealth.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22091904085",
      name: "Hobby Blogo",
      domain: "blogo.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "4087761",
      name: " IEX Media",
      domain: "iexgroup.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22681777219",
      name: "JufMaike",
      domain: "jufmaike.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "1010375",
      name: "Jumbo (SMRG)",
      domain: "summitretailmediagroup.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22709397379",
      name: "KellyCaresse",
      domain: "kellycaresse.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22663776585",
      name: "KNHB",
      domain: "hockey.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22727102557",
      name: "Ladylemonade B.V.",
      domain: "ladylemonade.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22571416056",
      name: "Levent Media",
      domain: "leventmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "51327775",
      name: "Locatienet",
      domain: "locatienet.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "6122441",
      name: "Motorsport",
      domain: "motorsport.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21755761572",
      name: "Mylaps",
      domain: "mylaps.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22031482",
      name: "Nederland Mobiel",
      domain: "nederlandmobiel.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22594967922",
      name: "ParraTV",
      domain: "parra.nu",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22487991941",
      name: "Plan To Meet B.V.",
      domain: "datumprikker.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22681436631",
      name: "Problemcar",
      domain: "problemcar.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22590405884",
      name: "RacingNews365",
      domain: "racingnews365.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22676833279",
      name: "Rijtesten.nl",
      domain: "rijtesten.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22590169534",
      name: "Snippet Media",
      domain: "snippetmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22678590774",
      name: "SocioSport - Voetbalflitsen.nl",
      domain: "sociossports.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22546708267",
      name: "Tishiergeenhotel",
      domain: "tishiergeenhotel.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21827228732",
      name: "TNL Business",
      domain: "tnlbusiness.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "1030791",
      name: "Valkering Media BV",
      domain: "valkeringmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22590534491",
      name: "Voetbalmedia",
      domain: "voetbal.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "11206138",
      name: "Wielerflits.nl",
      domain: "wielerflits.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21673313059",
      name: "Wij Special Media",
      domain: "wijspecialmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "117546062",
      name: "Youclick Media",
      domain: "skoften.net",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22061521764",
      name: "Tradecast",
      domain: "tradecast.tv",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "1963292",
      name: "GPFans.com",
      domain: "gpfans.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22783577496",
      name: "TranswebGroup",
      domain: "bigtruck.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22798843414",
      name: "1908.nl",
      domain: "1908.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21713996915",
      name: "Atletiek.nu",
      domain: "atletiek.nu",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22815947892",
      name: "ES Event & Sport Promoter",
      domain: "racesport.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22832816927",
      name: "Dailybase.nl",
      domain: "dailybase.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "21832188041",
      name: "BDU",
      domain: "bdumedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22850455918",
      name: "Hypr",
      domain: "telstarmediacentrum.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22860720237",
      name: "Rice media BV",
      domain: "reismedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "63677517",
      name: "Rodi",
      domain: "rodi.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22866181736",
      name: "Banli Media B.V.",
      domain: "streamwijzer.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22878490188",
      name: "Enter Media",
      domain: "entermedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "3593714",
      name: "DailyBuzz",
      domain: "dailybuzz.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22890307222",
      name: "Achterhoek Nieuws",
      domain: "achterhoeknieuws.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "309438910",
      name: "Brugmedia",
      domain: "brugmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22887264952",
      name: "Starterspers",
      domain: "gemeentenieuwsonline.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "86885977",
      name: "Het Kontakt Edities bv",
      domain: "hetkontakt.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22892965659",
      name: "Uitgeverij Verhagen",
      domain: "uitgeverijverhagen.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22896134673",
      name: "StedenDriehoek BV",
      domain: "stedendriehoek.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22898540569",
      name: "Regiobode",
      domain: "regiobodeonline.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "30144991",
      name: "Magmedia",
      domain: "magmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "1013419",
      name: "Eskes Media B.V.",
      domain: "eskesmedia.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22915401517",
      name: "The Outdoors",
      domain: "theoutdoors.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22673514728",
      name: "Pilot Studio",
      domain: "pilotstudio.nl",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "1012162",
      name: "Jasper Media",
      domain: "jaspersmedia.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22943263553",
      name: "CyclingOracle.nl",
      domain: "cyclingoracle.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22198193285",
      name: "Scorito",
      domain: "scorito.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22708912395",
      name: "Proudwheels",
      domain: "proudwheels.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22673380752",
      name: "Just Another Media Company",
      domain: "justanothernetwork.com",
      seller_type: "PUBLISHER",
    },
    {
      seller_id: "22946371924",
      name: "BAR Lokale Media",
      domain: "barlokalemedia.nl",
      seller_type: "PUBLISHER",
    },
  ],
};

AdheseGateway.ajax = {
  request: function (ops) {
    if (typeof ops == "string")
      ops = {
        url: ops,
      };
    ops.url = ops.url || "";
    ops.method = ops.method || "get";
    ops.data = ops.data || {};
    if (typeof ops.encodeData == "undefined") {
      ops.encodeData = true;
    }
    var getParams = function (data, url) {
      var arr = [],
        str;
      for (var name in data) {
        arr.push(name + "=" + encodeURIComponent(data[name]));
      }
      str = arr.join("&");
      if (str != "") {
        return url ? (url.indexOf("?") < 0 ? "?" + str : "&" + str) : str;
      }
      return "";
    };
    var api = {
      host: {},
      process: function (ops) {
        var self = this;
        this.xhr = null;

        if (document.all && !window.atob) {
          // IE9 and older
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
          this.xhr.onreadystatechange = function () {
            if (self.xhr.readyState == 4 && self.xhr.status == 200) {
              var result = self.xhr.responseText;
              if (ops.json === true && typeof JSON != "undefined") {
                if (result) {
                  try {
                    result = JSON.parse(result);
                    self.doneCallback &&
                      self.doneCallback.apply(self.host, [result, self.xhr]);
                  } catch (e) {
                    self.errorCallback &&
                      self.errorCallback.apply(self.host, [
                        "Adhese Ajax: " + e,
                      ]);
                  }
                } else {
                  self.errorCallback &&
                    self.errorCallback.apply(self.host, [
                      "Adhese Ajax: Response is empty string",
                    ]);
                }
              }
            } else if (self.xhr.readyState == 4) {
              self.failCallback &&
                self.failCallback.apply(self.host, [self.xhr]);
            }
            self.alwaysCallback &&
              self.alwaysCallback.apply(self.host, [self.xhr]);
          };
        }
        if (ops.method == "get") {
          this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
        } else {
          this.xhr.open(ops.method, ops.url, true);
          this.setHeaders({
            "X-Requested-With": "XMLHttpRequest",
            "Content-type": "application/x-www-form-urlencoded",
          });
        }
        if (ops.headers && typeof ops.headers == "object") {
          this.setHeaders(ops.headers);
        }
        setTimeout(function () {
          if (ops.method == "get") {
            self.xhr.send();
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
      done: function (callback) {
        this.doneCallback = callback;
        return this;
      },
      fail: function (callback) {
        this.failCallback = callback;
        return this;
      },
      always: function (callback) {
        this.alwaysCallback = callback;
        return this;
      },
      error: function (callback) {
        this.errorCallback = callback;
        return this;
      },
      setHeaders: function (headers) {
        for (var name in headers) {
          this.xhr && this.xhr.setRequestHeader(name, headers[name]);
        }
      },
    };
    return api.process(ops);
  },
};

AdheseGateway.getBase64EncodedUrl = function () {
  var url = window.location.href;
  url = url.split("?")[0];
  if (url.includes("://")) {
    return btoa(url.split("://")[1]);
  }
};

AdheseGateway.addTrackingPixel = function (uri) {
  AdheseGateway.logger("addTrackingPixel: " + uri);
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

AdheseGateway.appendSyncIframe = function (options) {
  AdheseGateway.logger("ADHESE: appendSyncIframe");
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
    setTimeout(function () {
      if (document.body) {
        document.body.appendChild(iframe);
      }
    }, 1000);
  }
};

AdheseGateway.loadJSON = function (path, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

AdheseGateway.priceBucketConfig = {
  buckets: [
    {
      precision: 2,
      min: 0,
      max: 2.5,
      increment: 0.01,
    },
    {
      precision: 2,
      min: 2.5,
      max: 10,
      increment: 0.1,
    },
    {
      precision: 2,
      min: 10,
      max: 20,
      increment: 0.2,
    },
    {
      precision: 2,
      min: 20,
      max: 50,
      increment: 0.5,
    },
  ],
};

AdheseGateway.addGdprParamsToUrl = function (
  uri,
  gdprParams,
  consentStringKey
) {
  var url = uri;
  var consentStringKey = consentStringKey || "gdpr_consent";
  if (
    gdprParams &&
    gdprParams.consent &&
    gdprParams.consentString &&
    gdprParams.gdprApplies
  ) {
    var gdpr = gdprParams.gdprApplies ? "1" : "0";
    url +=
      (url.indexOf("?") === -1 ? "?" : "&") +
      "gdpr=" +
      gdpr +
      "&" +
      consentStringKey +
      "=" +
      encodeURIComponent(gdprParams.consentString || "");
  }
  return url;
};

AdheseGateway.syncAdhese = function (gdprParams) {
  AdheseGateway.logger("Create adhese user sync iframe");
  try {
    var syncurl =
      "https://user-sync.adhese.com/iframe/user_sync.html?account=mannenmedia";
    syncurl = AdheseGateway.addGdprParamsToUrl(
      syncurl,
      gdprParams,
      "consentString"
    );

    AdheseGateway.appendSyncIframe({
      syncName: "mannenmedia",
      url: syncurl,
    });
  } catch (e) {}
};

AdheseGateway.getDomain = function () {
  var domain = window.location.hostname;
  if (domain.indexOf("www.") === 0) {
    domain = domain.substring(4);
  }
  return domain;
};

AdheseGateway.syncDigitalAudience = function (gdprParams) {
  AdheseGateway.logger("syncDigitalAudience()");

  var websites = {
    "www.annemerel.com": "32",
    "apparata.nl": "28",
    "autoblog.nl": "26",
    "autojunk.nl": "26",
    "autoreview.nl ": "26",
    "autovooru.nl": "26",
    "beautyscene.nl": "33",
    "beleggen.nl": "36",
    "belgiemobiel.be": "26",
    "bellinga.tv": "34",
    "beurs.nl": "36",
    "beursduivel.be": "36",
    "beursgorilla.nl": "36",
    "beursonline.nl": "36",
    "bikerbook.nl": "26",
    "byaranka.nl": "28",
    "cally.com": "28",
    "champ.life": "30",
    "clubvanrelaxtemoeders.nl": "34",
    "datumprikker.nl": "28",
    "debeurs.nl": "36",
    "drenthemobiel.nl": "26",
    "eurobench.com": "36",
    "eyecons.com": "30",
    "eyecons.nl": "30",
    "falder.nl": "28",
    "fcupdate.nl": "30",
    "fcvideo.nl": "30",
    "fhm.nl": "28",
    "finnik.nl": "26",
    "flevolandmobiel.nl": "26",
    "flickvault.com": "28",
    "foodiesmagazine.nl": "28",
    "foody.nl": "28",
    "geenstijl.nl": "28",
    "gelderlandmobiel.nl": "26",
    "gp33.nl": "30",
    "gptoday.net": "30",
    "groningenmobiel.nl": "26",
    "guruwatch.com": "36",
    "herhealth.nl": "32",
    "hobby.blogo.nl": "28",
    "hockey.nl": "30",
    "iex.nl": "36",
    "iexgeld.nl": "36",
    "indeleiderstrui.nl": "30",
    "jiskefet.nl": "28",
    "kellycaresse.nl": "34",
    "kwpn.tv": "28",
    "ladylemonade.nl": "34",
    "laviesanne.nl": "34",
    "limburgmobiel.nl": "26",
    "me-to-we.nl": "28",
    "monitor.iex.nl": "36",
    "moviemeter.nl": "28",
    "musicmeter.nl": "28",
    "speedhive.mylaps.com": "30",
    "mynd.nu": "28",
    "nederlandmobiel.nl": "26",
    "nieuwnieuws.nl": "28",
    "nl.motorsport.com": "30",
    "noord-brabantmobiel.nl": "26",
    "noord-hollandmobiel.nl": "26",
    "osm-tips.nl": "28",
    "overijsselmobiel.nl": "26",
    "problemcar.nl": "26",
    "racingnews365.com": "",
    "racingnews365.nl": "30",
    "relaxd.nl": "28",
    "rijtesten.nl": "26",
    "routenet.nl": "26",
    "saarmagazine.nl": "28",
    "shopgids.nl": "28",
    "skoften.net": "28",
    "smulweb.nl": "28",
    "tishiergeenhotel.nl": "28",
    "trafficnet.nl": "26",
    "trendalert.nl": "33",
    "trucks.nl": "26",
    "trucksnl.be": "26",
    "trucksnl.com": "26",
    "utrechtmobiel.nl": "26",
    "voetbal.nl": "30",
    "voetbalflitsen.be": "30",
    "voetbalflitsen.nl": "30",
    "voorjaarsklassiekers.be": "30",
    "wieler-koers.nl": "30",
    "wielerflits.be": "30",
    "wielerflits.nl": "30",
    "wij.nl": "34",
    "ze.nl": "28",
    "zeelandmobiel.nl": "26",
    "zuid-hollandmobiel.nl": "26",
    "1908.nl": "32",
    "allesoverkatwijk.nl": "40",
    "amstelveensnieuwsblad.nl": "40",
    "arenalokaal.nl": "40",
    "autosport.com": "30",
    "baarnschecourant.nl": "40",
    "barneveldsekrant.nl": "40",
    "belegger.nl": "36",
    "bennekomsnieuwsblad.nl": "40",
    "bigtruck.nl": "26",
    "biltschecourant.nl": "40",
    "brielsnieuwsland.nl": "40",
    "bunniksnieuws.nl": "40",
    "bussumsnieuws.nl": "40",
    "dailybuzz.nl": "28",
    "dehavenloods.nl": "40",
    "dehillegommer.nl": "40",
    "denieuwsbode.nl": "40",
    "denoordwijker.nl": "40",
    "deputtenaer.nl": "40",
    "derijnpost.nl": "40",
    "destadamersfoort.nl": "40",
    "destadgorinchem.nl": "40",
    "deteylinger.nl": "40",
    "dewoudenberger.nl": "40",
    "diemernieuws.nl": "40",
    "edestad.nl": "40",
    "ermelosweekblad.nl": "40",
    "footballtransfers.com": "30",
    "ggof.nl": "40",
    "gooieneembode.nl": "40",
    "goudsepost.nl": "40",
    "groothellevoet.nl": "40",
    "grootnissewaard.nl": "40",
    "haarlemsweekblad.nl": "40",
    "harderwijkercourant.nl": "40",
    "hartvanlansingerland.nl": "40",
    "hcnieuws.nl": "40",
    "heemsteedsecourant.nl": "40",
    "hetcontact.nl": "40",
    "hetkompashardinxveld-giessendam.nl": "40",
    "hetkompasonline.nl": "40",
    "hetkompassliedrecht.nl": "40",
    "hetkrantje-online.nl": "40",
    "houtensnieuws.nl": "40",
    "huisaanhuiselburg.nl": "40",
    "huisaanhuisoldebroek.nl": "40",
    "iepieleaks.nl": "26",
    "iexprofs.nl": "36",
    "jufmaike.nl": "28",
    "kellycaresse.nl": "34",
    "kliknieuwsdemaasdriehoek.nl": "40",
    "kliknieuwsdenbosch.nl": "40",
    "kliknieuwsmaasenniersbode.nl": "40",
    "kliknieuwsoss.nl": "40",
    "kliknieuwsuden.nl": "40",
    "kliknieuwsveghel.nl": "40",
    "laardercourant.nl": "40",
    "leiderdorpsweekblad.nl": "40",
    "leusderkrant.nl": "40",
    "lissernieuws.nl": "40",
    "loesoe.nl": "28",
    "luchtvaartnieuws.nl": "40",
    "manify.nl": "28",
    "middenstandsbelangen.nl": "40",
    "mnlx.nl": "28",
    "molenkruier.nl": "40",
    "monitor.beursduivel.be": "36",
    "mooischijndel.nl": "40",
    "muidernieuws.nl": "40",
    "naardernieuws.nl": "40",
    "nieuwsbladdekaap.nl": "40",
    "nieuwsbladvoorhuizen.nl": "40",
    "noordwijkerhoutsweekblad.nl": "40",
    "nunspeethuisaanhuis.nl": "40",
    "oegstgeestercourant.nl": "40",
    "peelbelangonline.nl": "40",
    "racesport.nl": "30",
    "racingnews365.com": "30",
    "recreatiekrantveluwe.nl": "40",
    "regioalkmaarmagazine.nl": "40",
    "regiosportveenendaal.nl": "40",
    "regiozakenwaterland.nl": "40",
    "reisbizz.nl": "40",
    "rijnenveluwe.nl": "40",
    "rodi.nl": "40",
    "scherpenzeelsekrant.nl": "40",
    "soestercourant.nl": "40",
    "stadnijkerk.nl": "40",
    "stadwageningen.nl": "40",
    "streamwijzer.nl": "28",
    "streekbladzoetermeer.nl": "40",
    "telstar-online.nl": "40",
    "tostrams.nl": "36",
    "trailertotaal.nl": "26",
    "transportenmilieu.nl": "26",
    "valkenswaardsweekblad.nl": "40",
    "weekbladdeschakel.nl": "40",
    "weekbladvoordeurne.nl": "40",
    "weekbladvoorouderamstel.nl": "40",
    "weekbladwestvoorne.nl": "40",
    "weespernieuws.nl": "40",
    "wijksnieuws.nl": "40",
    "witteweekbladnieuw-vennep.nl": "40",
    "woerdensecourant.nl": "40",
    "zakenreisnieuws.nl": "40",
    "zenderstreeknieuws.nl": "40",
    "1908.nl": "32",
    "allesoverkatwijk.nl": "40",
    "amstelveensnieuwsblad.nl": "40",
    "arenalokaal.nl": "40",
    "autosport.com": ["26", "30"],
    "baarnschecourant.nl": "40",
    "barneveldsekrant.nl": "40",
    "belegger.nl": "36",
    "bennekomsnieuwsblad.nl": "40",
    "bigtruck.nl": "26",
    "biltschecourant.nl": "40",
    "brielsnieuwsland.nl": "40",
    "bunniksnieuws.nl": "40",
    "bussumsnieuws.nl": "40",
    "dailybuzz.nl": "28",
    "dehavenloods.nl": "40",
    "dehillegommer.nl": "40",
    "denieuwsbode.nl": "40",
    "denoordwijker.nl": "40",
    "deputtenaer.nl": "40",
    "derijnpost.nl": "40",
    "destadamersfoort.nl": "40",
    "destadgorinchem.nl": "40",
    "deteylinger.nl": "40",
    "dewoudenberger.nl": "40",
    "diemernieuws.nl": "40",
    "edestad.nl": "40",
    "ermelosweekblad.nl": "40",
    "footballtransfers.com": "30",
    "ggof.nl": "40",
    "gooieneembode.nl": "40",
    "goudsepost.nl": "40",
    "groothellevoet.nl": "40",
    "grootnissewaard.nl": "40",
    "haarlemsweekblad.nl": "40",
    "harderwijkercourant.nl": "40",
    "hartvanlansingerland.nl": "40",
    "hcnieuws.nl": "40",
    "heemsteedsecourant.nl": "40",
    "hetcontact.nl": "40",
    "hetkompashardinxveld-giessendam.nl": "40",
    "hetkompasonline.nl": "40",
    "hetkompassliedrecht.nl": "40",
    "hetkrantje-online.nl": "40",
    "houtensnieuws.nl": "40",
    "huisaanhuiselburg.nl": "40",
    "huisaanhuisoldebroek.nl": "40",
    "iepieleaks.nl": "26",
    "iexprofs.nl": "36",
    "jufmaike.nl": "28",
    "kellycaresse.nl": "34",
    "kliknieuwsdemaasdriehoek.nl": "40",
    "kliknieuwsdenbosch.nl": "40",
    "kliknieuwsmaasenniersbode.nl": "40",
    "kliknieuwsoss.nl": "40",
    "kliknieuwsuden.nl": "40",
    "kliknieuwsveghel.nl": "40",
    "laardercourant.nl": "40",
    "leiderdorpsweekblad.nl": "40",
    "leusderkrant.nl": "40",
    "lissernieuws.nl": "40",
    "loesoe.nl": "28",
    "luchtvaartnieuws.nl": ["28", "40"],
    "manify.nl": "28",
    "middenstandsbelangen.nl": "40",
    "mnlx.nl": "28",
    "molenkruier.nl": "40",
    "monitor.beursduivel.be": "36",
    "mooischijndel.nl": "40",
    "muidernieuws.nl": "40",
    "naardernieuws.nl": "40",
    "nieuwsbladdekaap.nl": "40",
    "nieuwsbladvoorhuizen.nl": "40",
    "noordwijkerhoutsweekblad.nl": "40",
    "nunspeethuisaanhuis.nl": "40",
    "oegstgeestercourant.nl": "40",
    "peelbelangonline.nl": "40",
    "racesport.nl": ["26", "30"],
    "racingnews365.com": ["26", "30"],
    "recreatiekrantveluwe.nl": "40",
    "regioalkmaarmagazine.nl": "40",
    "regiosportveenendaal.nl": "40",
    "regiozakenwaterland.nl": "40",
    "reisbizz.nl": "28",
    "rijnenveluwe.nl": "40",
    "rodi.nl": "40",
    "scherpenzeelsekrant.nl": "40",
    "soestercourant.nl": "40",
    "stadnijkerk.nl": "40",
    "stadwageningen.nl": "40",
    "streamwijzer.nl": "28",
    "streekbladzoetermeer.nl": "40",
    "telstar-online.nl": "40",
    "tostrams.nl": "36",
    "trailertotaal.nl": "26",
    "transportenmilieu.nl": "26",
    "valkenswaardsweekblad.nl": "40",
    "weekbladdeschakel.nl": "40",
    "weekbladvoordeurne.nl": "40",
    "weekbladvoorouderamstel.nl": "40",
    "weekbladwestvoorne.nl": "40",
    "weespernieuws.nl": "40",
    "wijksnieuws.nl": "40",
    "witteweekbladnieuw-vennep.nl": "40",
    "woerdensecourant.nl": "40",
    "zakenreisnieuws.nl": ["28", "40"],
    "zenderstreeknieuws.nl": "40",
  };
  if (AdheseGateway.digitalAudienceCat !== null) {
    AdheseGateway.loadScript(
      "https://target.digitalaudience.io/bakery/scripts/da.js",
      function () {
        __da.bake({
          publisher: "dap_200326",
          category: AdheseGateway.digitalAudienceCat,
        });
      }
    );
  } else if (websites[AdheseGateway.getDomain()]) {
    AdheseGateway.loadScript(
      "https://target.digitalaudience.io/bakery/scripts/da.js",
      function () {
        var id = websites[AdheseGateway.getDomain()];
        if (Array.isArray(id)) {
          for (var i = 0; i < id.length; i++) {
            __da.bake({ publisher: "dap_200326", category: id[i] });
          }
        } else {
          __da.bake({ publisher: "dap_200326", category: id });
        }
      }
    );
  }
};

AdheseGateway.fireSyncs = function (gdprParams) {
  if (AdheseGateway.consentForAds) {
    setTimeout(AdheseGateway.syncAdhese(gdprParams), 1000);
    setTimeout(AdheseGateway.syncDigitalAudience(gdprParams), 2000);
    if (
      window.location.href.includes("fcupdate.nl") ||
      window.location.href.includes("footballtransfers.com")
    ) {
      setTimeout(function () {
        AdheseGateway.fireUserPreference();
      }, 1000);
    }
  }
};

AdheseGateway.defineAdUnits = function () {
  AdheseGateway.logger("ADHESE: defineAdUnits");
  // AdheseGateway.adheseViewportDimensions.width = AdheseGateway.getScreenWidth();
  AdheseGateway.adheseViewportDimensions =
    AdheseGateway.getViewportDimensions();

  try {
    AdheseGateway.definedSlots = googletag.slot_manager_instance.m;
    if (definedSlots) AdheseGateway.createAdUnits();
  } catch (e) {
    AdheseGateway.logger("Trying to create slots using gptadslots");
    try {
      for (var i = 0; i < gptadslots.length; i++) {
        if (gptadslots[i]) {
          if (!AdheseGateway.definedSlots)
            AdheseGateway.definedSlots = new Object();
          AdheseGateway.definedSlots[gptadslots[i].getAdUnitPath()] = [
            gptadslots[i],
          ];
        }
      }
      if (AdheseGateway.definedSlots) {
        AdheseGateway.logger("gptadslots found");
        AdheseGateway.createAdUnits();
      }
    } catch (e) {
      if (AdheseGateway.debug) console.log(e);
      try {
        AdheseGateway.logger(
          "Failed to find gptadslots, try again based on googletag.pubads().getSlots()"
        );
        setTimeout(function () {
          gptadslots = googletag.pubads().getSlots();
          for (var i = 0; i < gptadslots.length; i++) {
            if (gptadslots[i]) {
              if (!AdheseGateway.definedSlots)
                AdheseGateway.definedSlots = new Object();
              AdheseGateway.definedSlots[gptadslots[i].getAdUnitPath()] = [
                gptadslots[i],
              ];
            }
          }
          if (AdheseGateway.definedSlots) {
            AdheseGateway.logger("googletag.pubads.getSlots() found");
            AdheseGateway.createAdUnits();
          }
        }, 5);
      } catch (e) {
        if (AdheseGateway.debug) console.log(e);
      }
    }
  }
};

AdheseGateway.defineInfiniteScrollAdUnits = function (slots) {
  AdheseGateway.infiniteScroll = true;
  AdheseGateway.logger("ADHESE: defineInfiniteScrollAdUnits");
  AdheseGateway.adheseViewportDimensions =
    AdheseGateway.getViewportDimensions();
  AdheseGateway.adUnits = [];
  pbjs.adUnits = [];
  pbjs.initAdserverSet = false;
  AdheseGateway.definedSlots = {};
  AdheseGateway.infiniteScrollSlots = slots;

  AdheseGateway.logger("Creating infinite scroll slots");
  for (var i = 0; i < AdheseGateway.infiniteScrollSlots.length; i++) {
    if (AdheseGateway.infiniteScrollSlots[i]) {
      if (!AdheseGateway.definedSlots)
        AdheseGateway.definedSlots = new Object();
      AdheseGateway.definedSlots[infiniteScrollSlots[i].getAdUnitPath()] = [
        AdheseGateway.infiniteScrollSlots[i],
      ];
    }
  }
  if (AdheseGateway.definedSlots) {
    AdheseGateway.createAdUnits();
  }
};
AdheseGateway.getSchainParamsForDomain = function () {
  AdheseGateway.logger("getSchainParamsForDomain");

  var asi = "mmedia.nl";
  var sid = null;
  var name = null;
  var domain = null;
  try {
    sid = AdheseGateway.schainParamsFromScriptTag.sid;
    name = AdheseGateway.schainParamsFromScriptTag.name;
    domain = AdheseGateway.schainParamsFromScriptTag.domain;
  } catch (e) {
    console.log(e);
  }
  AdheseGateway.logger(
    "schain params from script tag: sid: " +
      sid +
      ", name: " +
      name +
      ", domain: " +
      domain
  );
  //if any of the values are empty, try to get them from the sellers.json, else return the values
  if (!sid || !name || !domain) {
    var companies = AdheseGateway.sellersJson.sellers;
    for (var i = 0; i < companies.length; i++) {
      try {
        if (
          companies[i].domain ==
          window.location.hostname.replace("www.", "").replace("m.", "")
        ) {
          sid = companies[i].seller_id;
          name = companies[i].name;
          domain = companies[i].domain;
          AdheseGateway.logger(
            "schain params from sellers.json: sid: " +
              companies[i].seller_id +
              ", name: " +
              companies[i].name +
              ", domain: " +
              companies[i].domain
          );
        }
      } catch (e) {
        AdheseGateway.logger(e);
      }
    }
  }
  return { asi: asi, sid: sid, name: name, domain: domain };
};

/** Executes a parallel auction with prebid **/
AdheseGateway.initAmazonAndPrebid = function (slotsToRefresh) {
  var schainParams = AdheseGateway.getSchainParamsForDomain();
  if (AdheseGateway.enableAmazon) {
    apstag.init({
      pubID: "f02b23da-1d66-47e3-ba9a-4639e08c6166",
      adServer: "googletag",
      schain: {
        complete: 1, // Integer 1 or 0 indicating if all preceding nodes are complete
        ver: "1.0", // Version of the spec used
        nodes: [
          // Can be empty if the owner of the site is creating this request
          {
            asi: schainParams.asi, // Populate with the canonical domain of the advertising system where the seller.JSON file is hosted.
            sid: schainParams.sid, // The identifier associated with the seller or reseller account within your advertising system
            hp: 1, // 1 or 0, whether this node is involved in the payment flow
            name: schainParams.name, // Name of the company paid for inventory under seller ID (optional)
            domain: schainParams.domain, // Business domain of this node (optional)
          },
        ],
      },
    });
  }
  var requestManager = {
    adserverRequestSent: false,
    aps: AdheseGateway.enableAmazon ? false : true,
    prebid: false,
  };
  // when both APS and Prebid have returned, initiate ad request
  function biddersBack() {
    AdheseGateway.logger(
      "amazon back: " +
        requestManager.aps +
        " -  prebid back:" +
        requestManager.prebid
    );
    if (requestManager.aps && requestManager.prebid) {
      AdheseGateway.initGoogle();
    }
    return;
  }
  setTimeout(function () {
    AdheseGateway.initGoogle();
    return;
  }, AdheseGateway.PREBID_TIMEOUT);
  // sends bid request to APS and Prebid
  function requestHeaderBids() {
    // APS request
    if (AdheseGateway.enableAmazon) {
      apstag.fetchBids(
        {
          slots: AdheseGateway.amazonSlots,
        },
        function () {
          googletag.cmd.push(function () {
            apstag.setDisplayBids();
            requestManager.aps = true; // signals that APS request has completed
            biddersBack(); // checks whether both APS and Prebid have returned
          });
        }
      );
    }

    // put prebid request here
    pbjs.que.push(function () {
      pbjs.requestBids({
        bidsBackHandler: function (bids) {
          googletag.cmd.push(function () {
            requestManager.prebid = true; // signals that Prebid request has completed

            // adjust bid size for rich media to avoid page bouncing
            for (var i in bids) {
              for (var j in bids[i].bids) {
                var bid = bids[i].bids[j];
                if (bid.width == 1800 && bid.height == 1000) {
                  bid.width = 728;
                  bid.height = 90;
                } else if (bid.width == 970 && bid.height == 1000) {
                  bid.width = 970;
                  bid.height = 250;
                } else if (bid.width == 1920 && bid.height == 1200) {
                  bid.width = 970;
                  bid.height = 250;
                }
              }
            }
            biddersBack(); // checks whether both APS and Prebid have returned
          });
        },
      });
    });
  }
  // initiate bid request
  requestHeaderBids();
};

AdheseGateway.chooseAdserver = function () {
  AdheseGateway.logger(
    "Consent for ads is " +
      AdheseGateway.consentForAds +
      ", initializing " +
      AdheseGateway.adServer +
      " ad server."
  );
  if (AdheseGateway.adServer == "google") {
    AdheseGateway.initAmazonAndPrebid(AdheseGateway.gptadslots);
  } else {
    AdheseGateway.initAdhese(AdheseGateway.adheseSlots);
  }
};

AdheseGateway.getSlotSizes = function (slot) {
  //try to determine sizes for prebid based on dfp sizes.
  var sizes = [];
  var googleSizes = slot.getSizes();
  for (var i = 0; i < googleSizes.length; i++) {
    if (
      typeof googleSizes[i]["width"] == "number" &&
      typeof googleSizes[i]["height"] == "number"
    ) {
      sizes.push([googleSizes[i]["width"], googleSizes[i]["height"]]);
    } else {
      sizes.push([1, 1]);
    }
  }
  return sizes;
};

AdheseGateway.getCriteoParams = function (slot) {
  //voetbal.nl has a separate networkId
  var networkId = window.location.href.includes("voetbal.nl") ? 207575 : 11508;
  var publisherSubId = slot.getAdUnitPath();

  var obj = {
    bidder: "criteo",
    params: {
      networkId: networkId,
      publisherSubId: publisherSubId,
    },
  };
  return obj;
};

AdheseGateway.getIndexExchangeParams = function (slot, siteId) {
  var obj = {
    bidder: "ix",
    params: {
      siteId: siteId,
    },
  };
  return obj;
};

AdheseGateway.getWeboParams = function (slot, placementId) {
  var obj = {
    bidder: "weborama",
    params: {
      placementId: placementId,
    },
  };
  return obj;
};

AdheseGateway.createPrebidAdunitFromSlot = function (
  slot,
  adUnits,
  xiParam,
  xtParam,
  tlParam,
  customParam
) {
  AdheseGateway.logger(
    "createPrebidAdunitFromSlot with adUnitPath " +
      slot.getAdUnitPath() +
      " and div " +
      slot.getSlotElementId()
  );
  //determine size for adhese format
  var sizeFromAdunit = slot
    .getAdUnitPath()
    .replace(/.*_([\d]+[x|X][\d]+)_.*/, "$1")
    .toUpperCase()
    .split("X");
  //fix some edge cases for inconsistent naming on MM end.
  if (sizeFromAdunit[0].length > 5) {
    var sizeToFix = sizeFromAdunit[0].split("_");
    sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1];
  }
  //another fix for mobile slots, just set size to 320x240
  if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
    sizeFromAdunit = [320, 240];
  } else {
    if (
      isNaN(sizeFromAdunit[0]) &&
      AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth()) == "phone"
    ) {
      AdheseGateway.logger(
        "sizeFromAdunit " +
          sizeFromAdunit[0] +
          " found, which is not a number, replacing size by" +
          "320x240"
      );
      sizeFromAdunit = [320, 240];
    }
  }

  var sizes = AdheseGateway.getSlotSizes(slot);

  var loc = (
    slot
      .getAdUnitPath()
      .replace(/,[^\/]*/g, "")
      .replace(/\//g, "_") + "_"
  ).toUpperCase();
  var format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
  var prebidSize = [parseInt(sizeFromAdunit[0]), parseInt(sizeFromAdunit[1])];
  if (sizeFromAdunit.length > 1) {
    var prebidSlotCode = slot.getSlotElementId();
    var o = {
      code: prebidSlotCode,
      mediaTypes: {
        banner: {
          sizes: sizes,
        },
      },
      bids: [
        {
          bidder: "adhese",
          params: {
            account: "mannenmedia",
            location: loc,
            format: format,
            data: {
              dt: ["desktop"],
              tl: [tlParam],
              xi: [xiParam],
              dt: [AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth())],
            },
          },
        },
      ],
    };

    for (var c = 0; c < customParam.length; c++) {
      key = customParam[c][0];
      value = customParam[c][1];
      if (value && typeof value == "string" && value.includes(";")) {
        value = value.split(";");
        if (
          window.location.href.includes("autoblog.nl") &&
          key == "ct" &&
          value.includes("formule_1")
        ) {
          ``````;
          o.bids[0].params.data.dt = "autoblog_f1";
        }
      }

      o.bids[0].params.data[key] = value;
    }
    if (AdheseGateway.enableCriteo) {
      o.bids.push(AdheseGateway.getCriteoParams(slot));
    }

    try {
      if (
        typeof (adheseData !== "undefined") &&
        typeof adheseData.index_siteID !== "undefined"
      ) {
        o.bids.push(
          AdheseGateway.getIndexExchangeParams(slot, adheseData.index_siteID)
        );
      }

      if (
        typeof adheseData !== "undefined" &&
        typeof adheseData.webo_placementID !== "undefined"
      ) {
        o.bids.push(
          AdheseGateway.getWeboParams(slot, adheseData.webo_placementID)
        );
      }
    } catch (e) {}

    AdheseGateway.logger(o);
    adUnits.push(o);
  }
  return adUnits;
};

AdheseGateway.createAmazonAdunitFromSlot = function (
  slot,
  adUnits,
  xiParam,
  xtParam,
  tlParam,
  customParam
) {
  var sizeFromAdunit = AdheseGateway.getSlotSizes(slot);
  var o = {
    slotID: slot.getSlotElementId(),
    slotName: slot.getAdUnitPath(),
    sizes: sizeFromAdunit,
  };

  AdheseGateway.amazonSlots.push(o);
  return AdheseGateway.amazonSlots;
};

AdheseGateway.createAdheseGatewaySlots = function (
  slot,
  adheseSlots,
  xtParam,
  tlParam,
  customParam
) {
  var location = (
    slot
      .getAdUnitPath()
      .replace(/,[^\/]*/g, "")
      .replace(/\//g, "_") + "_"
  ).toUpperCase();
  var sizeFromAdunit = slot
    .getAdUnitPath()
    .replace(/.*_([\d]+[x|X][\d]+)_.*/, "$1")
    .toUpperCase()
    .split("X");
  if (sizeFromAdunit[0].length > 5) {
    var sizeToFix = sizeFromAdunit[0].split("_");
    sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1];
  }

  if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
    sizeFromAdunit = [320, 240];
  } else {
    if (
      isNaN(sizeFromAdunit[0]) &&
      AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth()) == "phone"
    ) {
      AdheseGateway.logger(
        "sizeFromAdunit " +
          sizeFromAdunit[0] +
          " found, which is not a number, replacing size by" +
          "320x240"
      );
      sizeFromAdunit = [320, 240];
    }
  }

  var format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
  var containerId = slot.getSlotElementId();
  var lazyLoaded = true;

  var o = {
    location: location,
    format: format,
    containerId: containerId,
    lazyLoaded: lazyLoaded,
  };

  AdheseGateway.logger("CreateAdheseGatewaySlot pushing slot params:");
  AdheseGateway.logger(o);
  adheseSlots.push(o);

  return adheseSlots;
};

AdheseGateway.getBrowsiKey = function () {
  /* should return site domain + country. For example www.autoblog.nl = autoblognl */
  var siteKey = window.location.hostname
    .replace(/www./g, "")
    .split(".")
    .join("");
  return siteKey;
};

AdheseGateway.getSchainParamsFromScriptTag = function () {
  var schainParams = {};
  var script = document.currentScript;
  if (script) {
    schainParams.sid = script.getAttribute("data-sellersjson-sid");
    schainParams.name = script.getAttribute("data-sellersjson-name");
    schainParams.domain = script.getAttribute("data-sellersjson-domain");
  }
  return schainParams;
};

AdheseGateway.allowBrowsi = function () {
  var w = window.location.href;
  if (AdheseGateway.adServer == "adhese") {
    return false;
  }
  if (w.includes("browsitest")) {
    return true;
  }
  if (
    typeof window.enableBrowsi !== "undefined" &&
    window.enableBrowsi == true
  ) {
    AdheseGateway.logger("enable Browsi");
    return true;
  }

  var enabledDomains = [
    "autoblog.nl",
    "wielerflits.nl",
    "routenet.nl",
    "geenstijl.nl",
    "ze.nl",
    "indeleiderstrui.nl",
    "voetbalflitsen.nl",
    "apparata.nl",
    "nl.motorsport.com",
    "1908.nl",
    "iex.nl",
    "problemcar.nl",
    "wij.nl",
    "beleggen.nl",
    "belegger.nl",
    "beursgorilla.nl",
    "beurs.nl",
    "beursonline.nl",
    "debeurs.nl",
    "beursduivel.be",
    "guruwatch.nl",
    "iexgeld.nl",
    "eurobench.com",
    "tostrams.nl",
    "iexprofs.nl",
    "footballtransfers.nl",
    "racingnews365.nl",
    "racingnews365.com",
    "italiamo.nl",
    "axed.nl",
    "parra.nu",
    "vkmag.com",
  ];
  for (var i = 0; i < enabledDomains.length; i++) {
    if (w.includes(enabledDomains[i])) {
      AdheseGateway.logger("enable Browsi");
      return true;
    }
  }
  AdheseGateway.logger("Browsi disabled");
  return false;
};

AdheseGateway.createAdUnits = function () {
  AdheseGateway.logger("createAdUnits");

  var xiParam = "";
  var xtParam = "";
  var tlParam = "";

  var targetConfig = [
    ["ab", "auto_bmin"],
    ["ar", "auto_brnst"],
    ["am", "auto_merk"],
    ["ao", "auto_model"],
    ["at", "auto_trns"],
    ["ct", "content"],
    ["ac", "D_CITY"],
    ["cn", "D_CNTRY"],
    ["ad", "LOC_CITY"],
    ["cd", "LOC_CNTRY"],
    ["pc", "prijscat"],
    ["cv", "VEH"],
  ];

  try {
    var contentTargets = googletag.pubads().getTargeting("content");
    for (var i = 0; i < contentTargets.length; i++) {
      if (xiParam.length > 0) xiParam += ";";
      xiParam += "content;" + contentTargets[i];
    }
  } catch (e) {}

  try {
    var iabTargets = googletag.pubads().getTargeting("iab_string");
    for (var i = 0; i < iabTargets.length; i++) {
      xtParam = iabTargets[i];
    }
  } catch (e) {}

  try {
    if (AdheseGateway.consentForAds) tlParam = "all";
  } catch (e) {
    AdheseGateway.logger("ADHESE: no consent defined for dfp");
    tlParam = "all";
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
      var value = "";
      for (var i = 0; i < target.length; i++) {
        if (value.length > 0) value += ";";
        value += target[i].toLowerCase().replace(/ /g, "_").replace(/-/g, "_");
      }
      if (value.length > 0) AdheseGateway.targetArray.push([prefix, value]);
    }
  } catch (e) {}

  if (window.location.href.includes("roadblockDemo")) {
    AdheseGateway.targetArray.push(["ge", "1"]);
  }

  AdheseGateway.targetArray.push([
    "xw",
    AdheseGateway.adheseViewportDimensions.width,
  ]);
  AdheseGateway.targetArray.push([
    "xh",
    AdheseGateway.adheseViewportDimensions.height,
  ]);

  try {
    AdheseGateway.targetArray.push(["ur", AdheseGateway.getBase64EncodedUrl()]);
    if (AdheseGateway.adServer == "adhese")
      AdheseGateway.targetArray.push(["xf", btoa(window.location.href)]);
  } catch (e) {}

  if (AdheseGateway.definedSlots) {
    var ignoreFilter = [
      "_OUTSTREAM",
      "_PREROLL",
      "_BLOCK",
      "_3X3",
      "2785365",
      "_180x150",
      "1X1_VIDEO",
      "VIDEO_1X1",
      "AD_FLUID",
      "1X1_CUSTOM",
      "_ANCHOR",
      "MULTIPLEX",
      "INTERSTITIAL",
      "APPINSTALL",
      "_FLUID",
    ];
    var regexIgnore = new RegExp(ignoreFilter.join("|"), "i");
    var regexWeb = new RegExp("_WEB_", "i");
    var regexMob = new RegExp("_MOB_", "i");
    var regexArticle = new RegExp("ARTIKEL", "i");
    for (var prop in AdheseGateway.definedSlots) {
      try {
        //add slots ordered by element id to AdheseGateway object so we can apply targeting based on slot element id when prebid response comes back.
        AdheseGateway.slotsOrderedByElementId[
          AdheseGateway.definedSlots[prop][0].getSlotElementId()
        ] = AdheseGateway.definedSlots[prop][0];
      } catch (e) {}
      prop.toUpperCase();
      if (!regexIgnore.test(prop)) {
        if (
          AdheseGateway.adheseViewportDimensions.width > 768 &&
          regexWeb.test(prop)
        ) {
          AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adUnits,
            xiParam,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
        } else if (
          AdheseGateway.adheseViewportDimensions.width < 769 &&
          regexMob.test(prop)
        ) {
          AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adUnits,
            xiParam,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
        } else if (!regexWeb.test(prop) && !regexMob.test(prop)) {
          AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adUnits,
            xiParam,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
          AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(
            AdheseGateway.definedSlots[prop][0],
            AdheseGateway.adheseSlots,
            xtParam,
            tlParam,
            AdheseGateway.targetArray
          );
        }
      } else {
        AdheseGateway.logger(
          "ignore regex for slot: " + prop + " - " + regexIgnore.test(prop)
        );
      }
    }
  }
  pbjs.aliasBidder("appnexus", "weborama");
  AdheseGateway.SETCONFIG = {
    gvlMapping: {
      weborama: 32,
    },
    adhese: {
      storageAllowed: true,
      globalTargets: {},
    },
    appnexus: {
      storageAllowed: true,
    },
    ix: {
      storageAllowed: true,
    },
    consentManagement: {
      cmpApi: "iab",
      timeout: 3000,
    },
    bidderSequence: "random",
    bidderTimeout: AdheseGateway.PREBID_TIMEOUT,
    priceGranularity: AdheseGateway.priceBucketConfig,
    userSync: {
      userIds: [
        {
          name: "id5Id",
          params: {
            partner: 235, // change to the Partner Number you received from ID5
          },
          storage: {
            type: "html5",
            name: "id5id", // create a cookie with this name
            expires: 90, // cookie lasts for 90 days
            refreshInSeconds: 8 * 3600, // refresh ID every 8 hours to ensure it is fresh
          },
        },
      ],
      syncDelay: 2000,
      syncEnabled: true,
      syncsPerBidder: 5,
      filterSettings: {
        iframe: {
          bidders: ["appnexus", "criteo", "ix"], // '*' means all bidders
          filter: "include",
        },
        image: {
          bidders: ["appnexus", "criteo", "ix"],
          filter: "include",
        },
      },
    },
    currency: {
      adServerCurrency: "EUR",
    },
    refererInfo: {
      referer: AdheseGateway.prebidRefererUrl,
    },
  };

  if (
    window.MMDATA &&
    typeof window.MMDATA.bsuit !== undefined &&
    window.MMDATA.bsuit
  )
    AdheseGateway.SETCONFIG.adhese.globalTargets.bs = window.MMDATA.bsuit;

  if (AdheseGateway.debug) {
    AdheseGateway.SETCONFIG.debug = true;
  }

  AdheseGateway.SETCONFIG.consentManagement = {
    cmpApi: "iab",
    timeout: 3000,
  };

  if (AdheseGateway.allowBrowsi()) {
    AdheseGateway.SETCONFIG.realTimeData = {
      dataProviders: [
        {
          name: "browsi",
          params: {
            url: "yield-manager.browsiprod.com",
            siteKey: AdheseGateway.getBrowsiKey(),
            pubKey: "mmedia",
            keyName: "browsiViewability",
          },
        },
      ],
    };
  }
  if (AdheseGateway.enableCriteo) {
    AdheseGateway.SETCONFIG.criteo = {
      fastBidVersion: "latest",
      storageAllowed: true,
    };
  }

  AdheseGateway.addGamPriorityTargeting = function (bid, key, value) {
    if (!bid || !key || !value) return;
    if (!Array.isArray(value)) value = [value];
    var googleSlot = AdheseGateway.slotsOrderedByElementId[bid.adUnitCode];
    googleSlot.setTargeting(key, value);
  };

  pbjs.bidderSettings = {
    suppressEmptyKeys: true,
    adserverTargeting: [
      {
        key: 'hb_origin_adhese',
        val: bidResponse => bidResponse.adhese.origin
      }, {
        key: 'hb_adid_improvedigit',
        val: bidResponse => (bidResponse.adhese.origin == 'IMPROVE' && bidResponse.dealId) ? bidResponse.adId : null
      }, {
        key: 'hb_format_improvedig',
        val: bidResponse => (bidResponse.adhese.origin == 'IMPROVE' && bidResponse.dealId) ? bidResponse.mediaType : null
      }, {
        key: 'hb_size_improvedigit',
        val: bidResponse => (bidResponse.adhese.origin == 'IMPROVE' && bidResponse.dealId) ? bidResponse.width + 'x' + bidResponse.height : null
      }, {
        key: 'hb_pb_improvedigital',
        val: bidResponse => (bidResponse.adhese.origin == 'IMPROVE' && bidResponse.dealId) ? bidResponse.pbCg : null
      }, {
        key: 'hb_deal_improvedigit',
        val: bidResponse => (bidResponse.adhese.origin == 'IMPROVE' && bidResponse.dealId) ? bidResponse.dealId : null
      }
    ],
    adhese: {
      bidCpmAdjustment: function (bidCpm, bid) {
        AdheseGateway.logger("Gateway bid received", bid);
        if (bid.width == "666" && bid.height == "150") {
          AdheseGateway.logger(
            "Found roadblock! Serving companion creatives and cancelling all other bids."
          );
          googletag.cmd.push(function () {
            googletag.pubads().setTargeting("hb_roadblock", ["true"]);
          });
        }

        //discard all platform161 bids below 0.50
        if (bid.adhese.origin == "PLATFORM161" && bidCpm < 0.5) return 0;

        var appnexusDealId;
        if (bid.dealId) {
          appnexusDealId = bid.dealId;
        }

        var ghgDeals = {
          reachFrequency: [
            1170249, 1170248, 1170247, 1170246, 1170241, 1170240, 1170239,
            1170238, 1170236, 1170234, 1170229, 1170228, 1170227, 1170226,
            1170221, 1170220, 1170219, 1170218, 1170216, 1170214, 1170209,
            1170208, 1170207, 1170206, 1170201, 1170200, 1170199, 1170198,
            1170196, 1170194, 1170189, 1170188, 1170187, 1170186, 1170181,
            1170180, 1170179, 1170178, 1170176, 1170174, 1170169, 1170168,
            1170167, 1170166, 1170159, 1170158, 1170157, 1170156, 1170154,
            1170152,
          ],
        };
        if (ghgDeals.reachFrequency.includes(appnexusDealId)) {
          AdheseGateway.logger(
            "Found TMP reachFrequency deal " + appnexusDealId + ". Bid * 1.8."
          );
          AdheseGateway.addGamPriorityTargeting(
            bid,
            "ghgprio",
            "reachfrequency"
          );
          return bidCpm * 1.4;
        }

        if ((typeof bid.dealId !== "undefined") & (bid.dealId == "igmn-229")) {
          return 5;
        }

        if (bid.adhese.origin == "APPNEXUS-gps") {
          return bidCpm * 1.4;
        } else {
          return bidCpm;
        }
      },
      storageAllowed: true,
    },
    appnexus: {
      storageAllowed: true,
    },
    ix: {
      storageAllowed: true,
    },
    criteo: {
      storageAllowed: true,
    },
  };

  pbjs.que.push(function () {
    pbjs.aliasBidder("appnexus", "weborama");

    pbjs.setBidderConfig({
      bidders: ["weborama", "appnexus"],
      config: {
        schain: {
          validation: "relaxed",
          config: {
            ver: "1.0",
            complete: 1,
            nodes: [
              {
                asi: "weborama.nl",
                sid: AdheseGateway.schainParamsFromScriptTag.sid
                  ? AdheseGateway.schainParamsFromScriptTag.sid
                  : "",
                hp: 1,
              },
            ],
          },
        },
      },
    });

    pbjs.setBidderConfig({
      bidders: ["criteo", "ix"],
      config: {
        schain: {
          validation: "relaxed",
          config: {
            ver: "1.0",
            complete: 1,
            nodes: [
              {
                asi: "mmedia.nl",
                sid: AdheseGateway.schainParamsFromScriptTag.sid
                  ? AdheseGateway.schainParamsFromScriptTag.sid
                  : "",
                hp: 1,
              },
            ],
          },
        },
      },
    });

    pbjs.addAdUnits(AdheseGateway.adUnits);
    pbjs.setConfig(AdheseGateway.SETCONFIG);
  });

  AdheseGateway.chooseAdserver();
};

AdheseGateway.initGoogle = function (bids) {
  AdheseGateway.logger("initGoogle()");
  if (AdheseGateway.debug) AdheseGateway.addGoogleRenderListeners();
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function () {
    pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
    googletag.pubads().refresh();
  });
};

AdheseGateway.getMediaType = function (ad) {
  var tag = ad.tag ? ad.tag : ad.body;
  if (tag.includes("<VAST")) {
    return "video";
  } else {
    return "banner";
  }
};
AdheseGateway.shouldAdBeRendered = function (ad) {
  if (
    (ad.origin == "PLATFORM161" || ad.origin == "TRIPLELIFT") &&
    ad.extension &&
    ad.extension.prebid &&
    ad.extension.prebid.cpm &&
    ad.extension.prebid.cpm.amount
  ) {
    if (Number(ad.extension.prebid.cpm.amount) < AdheseGateway.floor) {
      AdheseGateway.logger("discarded response, price too low");
      AdheseGateway.logger(ad);
      return false;
    }
  }
  return true;
};

AdheseGateway.addGoogleRenderListeners = function () {
  //add slot requested listener and log if a slot is requested
  AdheseGateway.logger("addGoogleRenderListeners()");
  googletag.cmd.push(function () {
    googletag.pubads().addEventListener("slotRequested", function (event) {
      AdheseGateway.logger(
        "[GAM]: ad requested for slot: " +
          event.slot.getSlotElementId() +
          " | adUnitPath: " +
          event.slot.getAdUnitPath()
      );
    });
  });

  // add slot on load listener and log if a slot is loaded
  googletag.cmd.push(function () {
    googletag.pubads().addEventListener("slotOnload", function (event) {
      AdheseGateway.logger(
        "[GAM]: loaded slot: " +
          event.slot.getSlotElementId() +
          " with adUnitPath: " +
          event.slot.getAdUnitPath()
      );
    });
  });

  // add listener to log if a response is received
  googletag.cmd.push(function () {
    googletag
      .pubads()
      .addEventListener("slotResponseReceived", function (event) {
        AdheseGateway.logger(
          "[GAM]: response recieved for slot: " +
            event.slot.getSlotElementId() +
            " with adUnitPath: " +
            event.slot.getAdUnitPath()
        );
      });
  });

  //add slot render ended listener and log if a slot is empty or not
  googletag.cmd.push(function () {
    googletag.pubads().addEventListener("slotRenderEnded", function (event) {
      AdheseGateway.logger(
        "[GAM]: render ended for slot: " +
          event.slot.getSlotElementId() +
          " with adUnitPath: " +
          event.slot.getAdUnitPath() +
          " slot is empty: " +
          event.isEmpty +
          ""
      );
    });
  });
};

AdheseGateway.renderInFriendlyIframe = function (ad) {
  var iframeCSS = "<style>body{margin:0px;}</style>";
  var frameContainer = document.getElementById(ad.slotName);

  var parent = document.getElementById(ad.slotName);
  parent.appendChild(iframe);
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
  //centerElement(frameContainer);
};

AdheseGateway.initAdhese = function (t) {
  AdheseGateway.logger("initAdhese()");

  try {
    var adhese = new Adhese();

    adhese.init({
      debug: true,
      account: "mannenmedia",
      host: "https://ads-mannenmedia.adhese.com/",
      location: "",
      safeframe: true,
      safeframeContainerID: "slotName",
      previewHost: "https://mannenmedia-preview.adhese.org",
    });

    if (AdheseGateway.deviceType)
      adhese.registerRequestParameter("vp", AdheseGateway.deviceType);
    for (var c = 0; c < AdheseGateway.targetArray.length; c++) {
      try {
        adhese.registerRequestParameter(
          AdheseGateway.targetArray[c][0],
          this.targetArray[c][1]
        );
      } catch (e) {
        if (AdheseGateway.debug)
          console.log("failed to add target from targetArray", e);
      }
    }

    var ads = new Array();
    for (var x in t) {
      AdheseGateway.logger(t[x]);
      ads.push(
        adhese.tag(t[x].format, {
          location: t[x].location,
          containerId: t[x].containerId,
        })
      );
      t[x].slotCode = t[x].location + "-" + t[x].format;
    }

    var adUri = adhese.getMultipleRequestUri(ads, {
      type: "json",
    });

    AdheseGateway.logger("Fetching ads");
    AdheseGateway.logger(ads);
    var response = AdheseGateway.ajax
      .request({
        url: adUri,
        method: "get",
        json: true,
      })
      .done(function (results) {
        for (var x in results) {
          var ad = results[x];
          if (
            ad.origin == "JERLICIA" &&
            AdheseGateway.getMediaType(ad) == "banner"
          ) {
            var impressionTracker =
              "<img src='" +
              ad.trackedImpressionCounter +
              "' border='0' width='1' height='1' alt='' style='display:none'/>";
            if (ad.body && ad.body != "" && ad.body != "<ADHESE_BODY>") {
              ad.body = ad.body + impressionTracker;
            } else {
              ad.tag = ad.tag + impressionTracker;
            }
          }
        }
        adhese.safeframe.addPositions(results);
        for (var x in results) {
          var ad = results[x];
          if (AdheseGateway.shouldAdBeRendered(ad)) {
            for (var c in t) {
              if (ad.slotName == t[c].slotCode) {
                var container = document.getElementById(t[c].containerId);
                if (container) {
                  container.style.marginBottom = "10px";
                  container.style.display = "block";
                  container.parentElement.style.display = "block";
                  var con = document.createElement("div");
                  con.id = ad.slotName;
                  container.appendChild(con);

                  //dont render rich media ads in a safeframe.
                  if (
                    ad.height == "1000" ||
                    ad.height == "500" ||
                    ad.height == "400" ||
                    ad.height == "1200" ||
                    ad.height == "1080" ||
                    ad.width == "300"
                  ) {
                    var iframeCSS = "<style>body{margin:0px;}</style>";
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
                    con.appendChild(adFrm);
                    var adMarkup = ad.body != "" ? ad.body : ad.tag;

                    adFrmDoc = adFrm.contentWindow.document;
                    adMarkup += iframeCSS;
                    adFrmDoc.write(adMarkup);
                    adFrmDoc.close();
                  } else {
                    adhese.safeframe.render(ad.slotName);
                    AdheseGateway.logger("Rendering response in safeframe:");
                    AdheseGateway.logger(ad);
                  }
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

AdheseGateway.translateObjectIntoContextTarget = function (obj) {
  var contextTargets = "";
  if (typeof obj !== "object") return "";
  for (param in obj) {
    var key = param;
    var values = obj[param];
    try {
      if (Array.isArray(values) && values[0].length) {
        values.forEach(function (value) {
          var contextValue = key + "_" + value + ";";
          contextTargets =
            contextTargets +
            contextValue
              .toLowerCase()
              .replace(/\s/g, "_")
              .replace(/-/g, "_")
              .replace(/\//g, "_")
              .replace(/___/g, "_")
              .replace(/__/g, "_");
        });
      } else if (typeof values == "string" && values.length) {
        var contextValue = key + "_" + values + ";";
        contextTargets =
          contextTargets +
          contextValue
            .toLowerCase()
            .replace(/\s/g, "_")
            .replace(/-/g, "_")
            .replace(/\//g, "_")
            .replace(/___/g, "_")
            .replace(/__/g, "_");
      }
    } catch (e) {}
  }
  return contextTargets;
};

AdheseGateway.getSportbookiesCategory = function () {
  var url = window.location.href.split("/");
  if (url.length > 2) {
    return url[3].replace(/-/g, "_");
  } else {
    return false;
  }
};

AdheseGateway.processConsent = function (consent, consentString, gdprApplies) {
  AdheseGateway.logger(
    "processConsent, with consent = " +
      consent +
      " and consentString = " +
      consentString
  );
  var gdprParams = {
    consent: consent ? consent : "",
    consentString: consentString ? consentString : "",
    gdprApplies: gdprApplies ? gdprApplies : false,
  };

  if (consentString) {
    pbjs.adUnits = [];
    googletag.cmd.push(function () {
      googletag.pubads().setTargeting("iab_string", [consentString]);
      googletag
        .pubads()
        .setTargeting("consent", [AdheseGateway.consentForAds ? "1" : "0"]);
      googletag
        .pubads()
        .setTargeting("rev_consent", [AdheseGateway.consentForAds ? "0" : "1"]);
      googletag
        .pubads()
        .setRequestNonPersonalizedAds(AdheseGateway.consentForAds ? 0 : 1);

      AdheseGateway.adServer = AdheseGateway.consentForAds
        ? "google"
        : "adhese";
      AdheseGateway.targetArray.push(["in", AdheseGateway.adServer]);
      if (
        window.location.href.includes("sportbookies.nl") &&
        AdheseGateway.getSportbookiesCategory()
      )
        AdheseGateway.targetArray.push([
          "in",
          AdheseGateway.getSportbookiesCategory(),
        ]);
      if (window.location.href.includes("dailybase.nl"))
        AdheseGateway.adServer = "adhese";
      if (
        window.mmedia &&
        typeof window.mmedia.disableGoogle !== undefined &&
        window.mmedia.disableGoogle
      ) {
        AdheseGateway.adServer = "adhese";
        AdheseGateway.logger("mmedia.disableGoogle = true, disabling GAM");
      }
      if (AdheseGateway.adServer == "adhese")
        AdheseGateway.targetArray.push(["xt", consentString]);
      if (
        window.MMDATA &&
        typeof window.MMDATA.bsuit !== undefined &&
        window.MMDATA.bsuit
      )
        AdheseGateway.targetArray.push(["bs", window.MMDATA.bsuit]);
      if (
        window.MMDATA &&
        typeof window.MMDATA.iabtier1category !== undefined &&
        window.MMDATA.iabtier1category
      )
        AdheseGateway.targetArray.push(["ia", window.MMDATA.iabtier1category]);
      if (!AdheseGateway.consentForAds)
        AdheseGateway.targetArray.push(["tl", "none"]);
      if (typeof window.MMDATA !== "undefined") {
        AdheseGateway.targetArray.push([
          "ct",
          AdheseGateway.translateObjectIntoContextTarget(window.MMDATA),
        ]);
      }
      AdheseGateway.defineAdUnits(); //we only call defineAdUnits when tcString is available, so we don't load ads when consent window is still open.
    });
  }
  AdheseGateway.fireSyncs(gdprParams);
};

AdheseGateway.adsFetchedWithoutGDPR = false;

AdheseGateway.checkConsent = function () {
  AdheseGateway.logger("AdheseGateway.checkConsent");
  const callback = (tcData, success) => {  
  // window.__tcfapi("getTCData", 2, function (tcData) {
    AdheseGateway.logger(
      "AdheseGateway.checkConsent, tcData = " + JSON.stringify(tcData)
    );
    try {
      var c = tcData.purpose.consents;
      var newConsentForAds = c[1] && c[2] && c[3] && c[4];
      var newConsentString = tcData.tcString;
      if (AdheseGateway.consentForAds !== newConsentForAds) {
        AdheseGateway.consentString = newConsentString;
        AdheseGateway.consentForAds = newConsentForAds;
        AdheseGateway.processConsent(
          AdheseGateway.consentForAds,
          tcData.tcString,
          tcData.gdprApplies
        );
      } else {
        //this logic is required to make sure we load ads on the first pageload on no-consent, where consentForAds = false and stays false. We look at consentstring instead.
        if (AdheseGateway.consentString !== newConsentString) {
          AdheseGateway.consentString = newConsentString;
          AdheseGateway.adServer = AdheseGateway.consentForAds
            ? "google"
            : "adhese";
          AdheseGateway.processConsent(
            AdheseGateway.consentForAds,
            tcData.tcString,
            tcData.gdprApplies
          );
        }
      }
    } catch (e) {
      if (!tcData.gdprApplies && !AdheseGateway.adsFetchedWithoutGDPR) {
        AdheseGateway.adsFetchedWithoutGDPR = true;
        AdheseGateway.logger("GDPR does not apply - fetch ads");
        AdheseGateway.adServer = "google";
        googletag.cmd.push(function () {
          AdheseGateway.defineAdUnits();
        });
      }
      AdheseGateway.logger(e);
    }
  };
  __tcfapi('addEventListener', 2, callback);
};

AdheseGateway.logger("config loaded");
AdheseGateway.liverampCmpListenersAdded = false;
AdheseGateway.googleCmpListenersAdded = false;
AdheseGateway.initRetries = 1;

AdheseGateway.getScriptQueryParam = function (param) {
  AdheseGateway.logger("getScriptQueryParam: " + param);
  try {
    const url = new URL(document.currentScript.getAttribute("src"));
    const params = new URLSearchParams(url.search);
    if (params.has(param)) {
      return params.get(param);
    }
  } catch (e) {
    if (AdheseGateway.debug) console.log(e);
    return false;
  }
  return false;
};

AdheseGateway.addLiverampListeners = function () {
  //Liveramp Listeners for pubs using Liveramp Privacy Manager
  try {
    AdheseGateway.logger("Trying to add liveramp __tcfapi listeners.");
    window.__tcfapi(
      "addEventListener",
      "acceptAllButtonClicked",
      function (data) {
        AdheseGateway.logger("AcceptAllButtonClicked");
        AdheseGateway.checkConsent();
      }
    );

    window.__tcfapi("addEventListener", "exitButtonClicked", function (data) {
      AdheseGateway.logger("ADHESE: exitButtonClicked");
      AdheseGateway.checkConsent();
    });

    window.__tcfapi("addEventListener", "cmpReady", function (data) {
      AdheseGateway.logger("ADHESE: cmpReady");
      AdheseGateway.checkConsent();
    });
    AdheseGateway.liverampCmpListenersAdded = true;
  } catch (e) {
    AdheseGateway.logger("Failed to add Liveramp listeners");
    if (AdheseGateway.debug) console.log(e);
  }
};

AdheseGateway.addGoogleCmpListeners = function () {
  var initiated = false;
  try {
    //Google listneners for pubs using Google CMP.
    AdheseGateway.logger("Adding googlefc listeners.");
    window.googlefc = window.googlefc || {};
    window.googlefc.ccpa = window.googlefc.ccpa || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    googlefc.callbackQueue.push({
      CONSENT_DATA_READY: function () {
        AdheseGateway.logger("googlefc callback");
        __tcfapi("getTCData", 2, function (data, success) {
          if (!initiated) AdheseGateway.checkConsent();
        });
        const callback = (tcData, success) => {
          if(success && tcData.eventStatus === 'tcloaded') {
            AdheseGateway.logger('TCData loaded');
            AdheseGateway.checkConsent();
          } else {
            console.error('Failed to load TCData');
          }
        
        }
        
        __tcfapi('addEventListener', 2, callback);
      },
    });
    AdheseGateway.googleCmpListenersAdded = true;

    //check if consent is already available
    function doubleCheckConsent() {
      try {
        __tcfapi("getTCData", 2, function (data, success) {
          AdheseGateway.logger("Found google consent preferences");
          if (!initiated && success && data.tcString) {
            AdheseGateway.checkConsent();
            initiated = true;
          } else {
            setTimeout(doubleCheckConsent, 100);
          }
        });
      } catch (err) {
        setTimeout(doubleCheckConsent, 100);
      }
    }
    setTimeout(doubleCheckConsent, 200);
  } catch (e) {
    AdheseGateway.logger("Failed to add Google listeners");
    if (AdheseGateway.debug) console.log(e);
  }
};

AdheseGateway.addConsentManagerListeners = function () {
  __cmp(
    "addEventListener",
    ["consent", AdheseGateway.checkConsent, false],
    null
  );
};

AdheseGateway.init = function () {
  //cmp type is defined in the config url, e.g. https://pool-mannenmedia.adhese.com/tag/config_v2.js?cmp=google
  //if not defined, default is liveramp
  AdheseGateway.cmp = AdheseGateway.getScriptQueryParam("cmp")
    ? AdheseGateway.getScriptQueryParam("cmp")
    : "liveramp";
  AdheseGateway.logger(
    "Initialize CMP listeners, attempt:" + AdheseGateway.initRetries
  );
  AdheseGateway.logger("CMP type is " + AdheseGateway.cmp);
  AdheseGateway.logger("__tcfapi typeof = " + typeof window.__tcfapi);

  if (typeof window.__cmp !== "undefined") {
    AdheseGateway.logger("ConsentManager detected");
    AdheseGateway.cmp = "consentmanager";
  }

  if (AdheseGateway.cmp == "consentmanager") {
    AdheseGateway.logger("Adding consentmanager listeners");
    AdheseGateway.addConsentManagerListeners();
  }
  //check if __tcfapi is there before adding listeners, otherwise stuff will break
  if (
    typeof window.__tcfapi == "undefined" &&
    AdheseGateway.cmp == "liveramp"
  ) {
    AdheseGateway.logger("__tcfapi undefined, try again");
    // wait 200ms and try adding listeners again. __tcfapi should always become available at some point.
    if (AdheseGateway.initRetries < 20) {
      setTimeout(AdheseGateway.init, 200);
    } else {
      console.log("Maximum initialization retries reached, CMP not found.");
    }
  }
  //if __tcfapi is defined, we can just add the listeners for liveramp
  if (
    typeof window.__tcfapi !== "undefined" &&
    !AdheseGateway.liverampCmpListenersAdded &&
    AdheseGateway.cmp == "liveramp"
  ) {
    AdheseGateway.logger("__tcfapi found, adding liveramp eventlisteners");
    AdheseGateway.addLiverampListeners();
  }

  //if google cmp is used instead of liveramp, we can just add the google listeners. No need to wait for __tcfapi because their callbackQueue is defined by us.
  if (AdheseGateway.cmp == "google" && !AdheseGateway.googleCmpListenersAdded) {
    AdheseGateway.logger("google cmp found");
    AdheseGateway.addGoogleCmpListeners();
  }
  AdheseGateway.initRetries++;
};
AdheseGateway.schainParamsFromScriptTag =
  AdheseGateway.getSchainParamsFromScriptTag();
AdheseGateway.init();

//append iframe to body with src https://pool-igmn.adhese.com/tag/optout.html

AdheseGateway.optout = function () {
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src =
    "https://pool-igmn.adhese.com/tag/optout.html?eventName=igmn_opt=out";
  document.body.appendChild(iframe);
};

AdheseGateway.fireUserPreference = function () {
  //var ageStatus = window.location.href.includes('under24=true') ? 0 : 1;
  // build the adUri
  let baseUrl =
    "https://ads-igmn.adhese.com/json/slmannenmedia_fcupdate.nl-1x1/xt" +
    AdheseGateway.consentString;
  const urlParams = new URLSearchParams(window.location.search);
  const adUri = baseUrl;

  fetch(adUri, {
    method: "GET",
    credentials: "include",
    headers: new Headers({ "content-type": "application/json" }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (!result.length) return;
      var ad = result[0].ad ? result[0].ad : result[0].body;
      var ageStatus = ad.includes("in") ? 1 : 0;
      var event = new CustomEvent("igmn:ageStatus", {
        detail: { ageStatus: ageStatus },
      });
      console.log("dispatching event");
      document.dispatchEvent(event);
      setTimeout(function () {
        document.dispatchEvent(event);
      }, 1000);
    });
};

if (
  window.location.href.includes(
    "https://www.fcupdate.nl/voetbalnieuws/2020/01/branded-content?aid=32b87c30-a62d-40f2-94a7-531cf8b89969"
  )
) {
  (function () {
    // check if page is loaded else add domcontentloaded listener
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://adswag.bbvms.com/p/default/c/5560897.js";
      script.async = true;
      var h3 = document.getElementsByTagName("h3")[0];
      h3.parentNode.insertBefore(script, h3.nextSibling);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "https://adswag.bbvms.com/p/default/c/5560897.js";
          script.async = true;
          var h3 = document.getElementsByTagName("h3")[0];
          h3.parentNode.insertBefore(script, h3.nextSibling);
        }, 1000);
      });
    }
  })();
}
