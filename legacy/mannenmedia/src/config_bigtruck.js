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
AdheseGateway.adServer = 'google';
AdheseGateway.adUnits = [];
AdheseGateway.definedSlots = undefined;
AdheseGateway.consentForAds;
AdheseGateway.deviceType = 'unknown';
AdheseGateway.adheseSlots = [];
AdheseGateway.gptadslots = [];
AdheseGateway.amazonSlots = [];
AdheseGateway.adheseScreenWidth = 0;
AdheseGateway.adheseViewportDimensions = {width:0,height:0};
AdheseGateway.consentString;
AdheseGateway.cmp = 'liveramp';
AdheseGateway.slotsOrderedByElementId = {};
AdheseGateway.floor = 0.5;
AdheseGateway.enableAmazon = true;
AdheseGateway.enableCriteo = true;

if (window.location.href.includes('adhesegw')) {
    AdheseGateway.debug = true;
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
};

AdheseGateway.getScreenWidth = function() {
    return Math.max(
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

AdheseGateway.getViewportDimensions = function() {
    AdheseGateway.logger('ADHESE: getViewPortDimensions ' + document.documentElement.clientWidth + ' - ' + window.innerWidth);
    var dim = {};
    dim.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    dim.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return dim;
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
    return device;
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

AdheseGateway.sellersJson = {
    "contact_email": "info@mmedia.nl",
    "contact_address": "Mmedia, Suikersilo-West 31, Halfweg",
    "version": "3.0",
    "identifiers": [
         {
            "name": "Mmedia BV",
            "value": "00000000001"
         }
    ],
    "sellers": [
         {
            "seller_id": "22712321661", 
            "name": "Annemerel B.V.", 
            "domain": "annemerel.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22411390898", 
            "name": "Autoblog.nl", 
            "domain": "autoblog.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21867799933", 
            "name": "Bikerbook", 
            "domain": "bikerbook.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22685817205", 
            "name": "By Aranka b.v.", 
            "domain": "byaranka.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22686251436", 
            "name": "Clubvanrelaxtemoeders", 
            "domain": "clubvanrelaxtemoeders.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22548658020", 
            "name": "Crazyvoetbal B.V.", 
            "domain": "mxxl.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22101458698", 
            "name": "Erik Aaftink", 
            "domain": "osm-tips.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22681081253", 
            "name": "Eyecons BV", 
            "domain": "eyecons.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "12463988", 
            "name": "F&L Media B.V.", 
            "domain": "fnlmedia.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22590397484", 
            "name": "Fanreach", 
            "domain": "fanreach.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22590210310", 
            "name": "FHM", 
            "domain": "fhm.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22656240778", 
            "name": "First Place Media BV", 
            "domain": "first-place.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21952519481", 
            "name": "Foody B.V.", 
            "domain": "foody.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22712752046", 
            "name": "Freetix BV", 
            "domain": "freetix.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22579712787", 
            "name": "GS Magenta", 
            "domain": "magenta.gs", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "101662276", 
            "name": "HerHealth", 
            "domain": "herhealth.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22091904085", 
            "name": "Hobby Blogo", 
            "domain": "blogo.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "4087761", 
            "name": " IEX Media", 
            "domain": "iexgroup.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22681777219", 
            "name": "JufMaike", 
            "domain": "jufmaike.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "1010375", 
            "name": "Jumbo (SMRG)", 
            "domain": "summitretailmediagroup.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22709397379", 
            "name": "KellyCaresse", 
            "domain": "kellycaresse.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22663776585", 
            "name": "KNHB", 
            "domain": "hockey.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22727102557", 
            "name": "Ladylemonade B.V.", 
            "domain": "ladylemonade.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22571416056", 
            "name": "Levent Media", 
            "domain": "leventmedia.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "51327775", 
            "name": "Locatienet", 
            "domain": "locatienet.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "6122441", 
            "name": "Motorsport", 
            "domain": "motorsport.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21755761572", 
            "name": "Mylaps", 
            "domain": "mylaps.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22031482", 
            "name": "Nederland Mobiel", 
            "domain": "nederlandmobiel.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22594967922", 
            "name": "ParraTV", 
            "domain": "parra.nu", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22487991941", 
            "name": "Plan To Meet B.V.", 
            "domain": "datumprikker.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22681436631", 
            "name": "Problemcar", 
            "domain": "problemcar.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22590405884", 
            "name": "RacingNews365", 
            "domain": "racingnews365.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22676833279", 
            "name": "Rijtesten.nl", 
            "domain": "rijtesten.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22590169534", 
            "name": "Snippet Media", 
            "domain": "snippetmedia.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22678590774", 
            "name": "SocioSport - Voetbalflitsen.nl", 
            "domain": "sociossports.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22546708267", 
            "name": "Tishiergeenhotel", 
            "domain": "tishiergeenhotel.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21827228732", 
            "name": "TNL Business", 
            "domain": "tnlbusiness.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "1030791", 
            "name": "Valkering Media BV", 
            "domain": "valkeringmedia.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22590534491", 
            "name": "Voetbalmedia", 
            "domain": "voetbal.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "11206138", 
            "name": "Wielerflits.nl", 
            "domain": "wielerflits.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21673313059", 
            "name": "Wij Special Media", 
            "domain": "wijspecialmedia.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "117546062", 
            "name": "Youclick Media", 
            "domain": "skoften.net", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22061521764", 
            "name": "Tradecast", 
            "domain": "tradecast.tv", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "1963292", 
            "name": "GPFans.com", 
            "domain": "gpfans.com", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22783577496", 
            "name": "TranswebGroup", 
            "domain": "bigtruck.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "22798843414", 
            "name": "1908.nl", 
            "domain": "1908.nl", 
            "seller_type": "PUBLISHER"
         },
         {
            "seller_id": "21713996915", 
            "name": "Atletiek.nu", 
            "domain": "atletiek.nu", 
            "seller_type": "PUBLISHER"
         }
     ]
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

AdheseGateway.getBase64EncodedUrl = function() {
    var url = window.location.href;
    url = url.split('?')[0];
    if (url.includes('://')) {
        return btoa(url.split('://')[1]);
    }
}

AdheseGateway.addTrackingPixel = function(uri) {
    AdheseGateway.logger('addTrackingPixel: ' + uri);
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

AdheseGateway.addGdprParamsToUrl = function (uri, gdprParams, consentStringKey) {
    var url = uri;
    var consentStringKey = consentStringKey || 'gdpr_consent';
    if (gdprParams && gdprParams.consent && gdprParams.consentString && gdprParams.gdprApplies) {
        var gdpr = gdprParams.gdprApplies ? "1" : "0";
        url += (url.indexOf('?') === -1 ? '?' : '&') + 'gdpr=' + gdpr + '&' + consentStringKey + '=' + encodeURIComponent(gdprParams.consentString || '');
    }
    return url;
};

AdheseGateway.syncAdhese = function(gdprParams) {
    AdheseGateway.logger('Create adhese user sync iframe');
    try {
        var syncurl = "https://user-sync.adhese.com/iframe/user_sync.html?account=mannenmedia";
        syncurl = AdheseGateway.addGdprParamsToUrl(syncurl, gdprParams, 'consentString');
    
        AdheseGateway.appendSyncIframe({
            syncName: "mannenmedia",
            url: syncurl
        });
    } catch (e) {
        console.log('failed to sync user')
    }
};

AdheseGateway.syncDigitalAudience = function(gdprParams) {
	AdheseGateway.logger('syncDigitalAudience()')

    const siteToDaId = {
        "www.annemerel.com":"32_",
        "apparata.nl":"28_",
        "autoblog.nl":"26_",
        "autojunk.nl":"26_",
        "autoreview.nl ":"26_",
        "autovooru.nl":"26_",
        "beautyscene.nl":"33_",
        "beleggen.nl":"36_",
        "belgiemobiel.be":"26_",
        "bellinga.tv":"34_",
        "beurs.nl":"36_",
        "beursduivel.be":"36_",
        "beursgorilla.nl":"36_",
        "beursonline.nl":"36_",
        "bikerbook.nl":"26_",
        "byaranka.nl":"28_",
        "cally.com":"28_",
        "champ.life":"30_",
        "clubvanrelaxtemoeders.nl":"34_",
        "datumprikker.nl":"28_",
        "debeurs.nl":"36_",
        "drenthemobiel.nl":"26_",
        "eurobench.com":"36_",
        "eyecons.com":"30_",
        "eyecons.nl":"30_",
        "falder.nl":"28_",
        "fcupdate.nl":"30_",
        "fcvideo.nl":"30_",
        "fhm.nl":"28_",
        "finnik.nl":"26_",
        "flevolandmobiel.nl":"26_",
        "flickvault.com":"28_",
        "foodiesmagazine.nl":"28_",
        "foody.nl":"28_",
        "geenstijl.nl":"28_",
        "gelderlandmobiel.nl":"26_",
        "gp33.nl":"30_",
        "gptoday.net":"30_",
        "groningenmobiel.nl":"26_",
        "guruwatch.com":"36_",
        "herhealth.nl":"32_",
        "hobby.blogo.nl":"28_",
        "hockey.nl":"30_",
        "iex.nl":"36_",
        "iexgeld.nl":"36_",
        "indeleiderstrui.nl":"30_",
        "jiskefet.nl":"28_",
        "kellycaresse.nl":"34_",
        "kwpn.tv":"28_",
        "ladylemonade.nl":"34_",
        "laviesanne.nl":"34_",
        "limburgmobiel.nl":"26_",
        "me-to-we.nl":"28_",
        "monitor.iex.nl":"36_",
        "moviemeter.nl":"28_",
        "musicmeter.nl":"28_",
        "speedhive.mylaps.com":"30_",
        "mynd.nu":"28_",
        "nederlandmobiel.nl":"26_",
        "nieuwnieuws.nl":"28_",
        "nl.motorsport.com":"30_",
        "noord-brabantmobiel.nl":"26_",
        "noord-hollandmobiel.nl":"26_",
        "osm-tips.nl":"28_",
        "overijsselmobiel.nl":"26_",
        "problemcar.nl":"26_",
        "racingnews365.com":"",
        "racingnews365.nl":"30_",
        "relaxd.nl":"28_",
        "rijtesten.nl":"26_",
        "routenet.nl":"26_",
        "saarmagazine.nl":"28_",
        "shopgids.nl":"28_",
        "skoften.net":"28_",
        "smulweb.nl":"28_",
        "tishiergeenhotel.nl":"28_",
        "trafficnet.nl":"26_",
        "trendalert.nl":"33_",
        "trucks.nl":"26_",
        "trucksnl.be":"26_",
        "trucksnl.com":"26_",
        "utrechtmobiel.nl":"26_",
        "voetbal.nl":"30_",
        "voetbalflitsen.be":"30_",
        "voetbalflitsen.nl":"30_",
        "voorjaarsklassiekers.be":"30_",
        "wieler-koers.nl":"30_",
        "wielerflits.be":"30_",
        "wielerflits.nl":"30_",
        "wij.nl":"34_",
        "ze.nl":"28_",
        "zeelandmobiel.nl":"26_",
        "zuid-hollandmobiel.nl":"26_"
    };

    try {
        let siteUrl = window.location.hostname.replace("www.", "");
        let daId = siteToDaId[siteUrl] ? siteToDaId[siteUrl] : "";
        if (daId.length > 0) {
            let url = "https://target.digitalaudience.io/bakery/pix/p/dap_200326/" + daId;
            url = this.addGdprParamsToUrl(url, gdprParams);
    
            let px = document.createElement('img');
            px.id = 'dasynctag';
            px.src = url;
            px.style.height = '1px';
            px.style.width = '1px';
            px.style.display = 'none';
            document.body.appendChild(px)    
        }
    } catch(e) {
        console.log(e);
    };
};


AdheseGateway.fireSyncs = function(gdprParams) {
    if (AdheseGateway.consentForAds) {
        setTimeout(AdheseGateway.syncAdhese(gdprParams), 1000);
        setTimeout(AdheseGateway.syncDigitalAudience(gdprParams), 2000);
    }
};


AdheseGateway.defineAdUnits = function() {
    AdheseGateway.logger('ADHESE: defineAdUnits');
    // AdheseGateway.adheseViewportDimensions.width = AdheseGateway.getScreenWidth();
    AdheseGateway.adheseViewportDimensions = AdheseGateway.getViewportDimensions();

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
};

AdheseGateway.defineInfiniteScrollAdUnits = function(slots) {
	AdheseGateway.infiniteScroll = true;
    AdheseGateway.logger('ADHESE: defineInfiniteScrollAdUnits');
    AdheseGateway.adheseViewportDimensions = AdheseGateway.getViewportDimensions();
    AdheseGateway.adUnits = [];
    pbjs.adUnits = [];
    pbjs.initAdserverSet = false;
    AdheseGateway.definedSlots = {}; 
    AdheseGateway.infiniteScrollSlots = slots;

    AdheseGateway.logger("Creating infinite scroll slots");
    for (var i = 0; i < AdheseGateway.infiniteScrollSlots.length; i++) {
        if (AdheseGateway.infiniteScrollSlots[i]) {
            if (!AdheseGateway.definedSlots) AdheseGateway.definedSlots = new Object();
            AdheseGateway.definedSlots[infiniteScrollSlots[i].getAdUnitPath()] = [AdheseGateway.infiniteScrollSlots[i]];
        }
    }
    if (AdheseGateway.definedSlots) {
        AdheseGateway.createAdUnits();
    }
}

AdheseGateway.getSchainParamsForDomain = function() {
    var asi = "mmedia.nl";
    var sid = "";
    var name = "";
    var domain = "";

    var companies = AdheseGateway.sellersJson.sellers;

    for (var i=0; i < companies.length; i++) {
        try {
            if (companies[i].domain == window.location.hostname) {
                sid = companies[i].seller_id;
                name = companies[i].name;
                domain = companies[i].domain;
            }
        } catch (e) {
            AdheseGateway.logger(e);
        };
    }
    return {asi: asi, sid: sid, name: name, domain: domain};
};
/** Executes a parallel auction with prebid **/
AdheseGateway.initAmazonAndPrebid = function(slotsToRefresh) {
    var schainParams = AdheseGateway.getSchainParamsForDomain();
    if(AdheseGateway.enableAmazon) {
        apstag.init({
            pubID: 'f02b23da-1d66-47e3-ba9a-4639e08c6166',
            adServer: 'googletag',
            schain: {
                complete: 1, // Integer 1 or 0 indicating if all preceding nodes are complete
                ver: '1.0', // Version of the spec used
                nodes: [ // Can be empty if the owner of the site is creating this request
                    {
                        asi: schainParams.asi, // Populate with the canonical domain of the advertising system where the seller.JSON file is hosted.
                        sid: schainParams.sid, // The identifier associated with the seller or reseller account within your advertising system
                        hp: 1, // 1 or 0, whether this node is involved in the payment flow
                        name: schainParams.name, // Name of the company paid for inventory under seller ID (optional)
                        domain: schainParams.domain, // Business domain of this node (optional)
                    }
                ]
            }
        });
    };
    var requestManager = {
        adserverRequestSent: false,
        aps: AdheseGateway.enableAmazon ? false : true,
        prebid: false
    };
    // when both APS and Prebid have returned, initiate ad request
    function biddersBack() {
        AdheseGateway.logger('amazon back: ' + requestManager.aps +' -  prebid back:' + requestManager.prebid);
        if (requestManager.aps && requestManager.prebid) {
            AdheseGateway.initGoogle();
        }
        return;
    }
    setTimeout(function(){
        AdheseGateway.initGoogle();
        return;
    }, AdheseGateway.PREBID_TIMEOUT);
    // sends bid request to APS and Prebid
    function requestHeaderBids() {
        // APS request
        if(AdheseGateway.enableAmazon) {
            apstag.fetchBids({
                slots: AdheseGateway.amazonSlots
            }, function() {
                googletag.cmd.push(function() {
                    apstag.setDisplayBids();
                    requestManager.aps = true; // signals that APS request has completed
                    biddersBack(); // checks whether both APS and Prebid have returned
                });
            });
        };

        // put prebid request here
        pbjs.que.push(function() {
            pbjs.requestBids({
                bidsBackHandler: function(bids) {
                    googletag.cmd.push(function() {
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
                    })
                }
            });
        });
    }
    // initiate bid request
    requestHeaderBids();
};

AdheseGateway.chooseAdserver = function () {
    AdheseGateway.logger('Consent for ads is ' + AdheseGateway.consentForAds + ', initializing ' + AdheseGateway.adServer + ' ad server.');
    if (AdheseGateway.adServer == 'google') {
        AdheseGateway.initAmazonAndPrebid(AdheseGateway.gptadslots);
    } else {
        AdheseGateway.initAdhese(AdheseGateway.adheseSlots);
    }
};

AdheseGateway.getSlotSizes = function(slot) {
    //try to determine sizes for prebid based on dfp sizes. 
    var sizes = [];
    var googleSizes = slot.getSizes();
    for (var i = 0; i < googleSizes.length; i++) {
        if (typeof googleSizes[i]['width'] == 'number' && typeof googleSizes[i]['height'] == 'number') {
            sizes.push([googleSizes[i]['width'], googleSizes[i]['height']]);
        } else {
            sizes.push([1,1]);
        }
    };
    return sizes;
};

AdheseGateway.getCriteoParams = function(slot) {
    //voetbal.nl has a separate networkId
    var networkId = window.location.href.includes('voetbal.nl') ? 207575 : 11508;
    var publisherSubId = slot.getAdUnitPath();

    var criteoObj = {
        bidder: "criteo",
        params: {
            networkId: networkId,
            publisherSubId: publisherSubId
        }
    }
    return criteoObj;
};

AdheseGateway.createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    AdheseGateway.logger('createPrebidAdunitFromSlot with adUnitPath ' + slot.getAdUnitPath() + ' and div ' + slot.getSlotElementId());
    //determine size for adhese format
    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    //fix some edge cases for inconsistent naming on MM end.
    if (sizeFromAdunit[0].length > 5) {
        var sizeToFix = sizeFromAdunit[0].split('_');
        sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1]
    }
    //another fix for mobile slots, just set size to 320x240
    if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = [320, 240];
    } else {
    	if (isNaN(sizeFromAdunit[0]) && AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth()) == 'phone') {
    		AdheseGateway.logger('sizeFromAdunit ' + sizeFromAdunit[0] + ' found, which is not a number, replacing size by' + '320x240');
    		sizeFromAdunit = [320, 240];
    	}
    };

    var sizes = AdheseGateway.getSlotSizes(slot);

    var loc = (slot.getAdUnitPath().replace(/,[^\/]*/g,'').replace(/\//g, '_') + '_').toUpperCase();
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
        if(AdheseGateway.enableCriteo) {
            o.bids.push(AdheseGateway.getCriteoParams(slot));
        };
        if (format.includes('728x90') && loc.includes('BIKERBOOK') && AdheseGateway.debug) {


            o.mediaTypes.video = {
                context: 'outstream',
                playerSize: [
                    [640, 360]
                ],
                mimes: ["video/mp4"]
            }
            o.renderer = {
                url: 'https://pool-mannenmedia.adhese.com/tag/empty.js',
                render: function(bid) {
                    console.log('render outstream')
                    var config = {
                        showMute: false,
                        showVolume: false,
                        showProgressBar: false,
                        autoInitialSize: true, //auto resize to div width
                        allowFullscreen: true,
                        disableTopBar: true,
                        disableCollapse: true,
                        content: bid.vastXml,
                        frameworks: ["vpaid_1_0", "vpaid_2_0"],
                        playback_methods: ["auto_play_sound_off"],
                        player_height: bid.height,
                        player_width: bid.width
                    }
                    try {
                        var parentElement = document.getElementById(slot.getSlotElementId());
                        var div = document.createElement('div');
                        div.id = 'adheseOutstreamDiv';
                        div.style.marginTop = '10px';
                        div.style.marginBottom = '10px';
                        parentElement.appendChild(div);
                    } catch (e) {
                        console.log(e);
                    }
                    try {
                        window.ANOutstreamVideo.renderAd({ targetId: 'adheseOutstreamDiv', rendererOptions: config, });
                    } catch (e) {
                        //try again if player library didn't load yet.
                        setTimeout(function() {
                            ANOutstreamVideo.renderAd({ targetId: 'adheseOutstreamDiv', rendererOptions: config, });
                        }, 1000);
                    }
                }
            }
            var outstreamParams = {
            	bidder: 'adhese',
            	params: {
            		account: 'mannenmedia',
            		location: '_11692722_BIKERBOOK.NL_BIKERBOOK.NL_OUTSTREAM_',
            		format: 'OUTSTREAM'
            	}
            }
            o.bids.push(outstreamParams)
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
        AdheseGateway.logger(o);
        adUnits.push(o);
    }
    return adUnits;
};

AdheseGateway.createAmazonAdunitFromSlot = function (slot, adUnits, xiParam, xtParam, tlParam, customParam) {

    var sizeFromAdunit = AdheseGateway.getSlotSizes(slot);
    var o = {
        slotID: slot.getSlotElementId(),
        slotName: slot.getAdUnitPath(),
        sizes: sizeFromAdunit
    };

    AdheseGateway.amazonSlots.push(o);
    return AdheseGateway.amazonSlots;
};

AdheseGateway.createAdheseGatewaySlots = function (slot, adheseSlots, xtParam, tlParam, customParam) {
    var location = (slot.getAdUnitPath().replace(/,[^\/]*/g,'').replace(/\//g, '_') + '_').toUpperCase();
    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    if (sizeFromAdunit[0].length > 5) {
        var sizeToFix = sizeFromAdunit[0].split('_');
        sizeFromAdunit[0] = sizeToFix[sizeToFix.length - 1]
    }

    if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = [320, 240];
    } else {
    	if (isNaN(sizeFromAdunit[0]) && AdheseGateway.getDeviceType(AdheseGateway.getScreenWidth()) == 'phone') {
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

AdheseGateway.getBrowsiKey = function() {
	/* should return site domain + country. For example www.autoblog.nl = autoblognl */
	var siteKey = window.location.hostname.replace(/www./g,'').split('.').join('');
	return siteKey
};

AdheseGateway.allowBrowsi = function() {
    var w = window.location.href;
    if (AdheseGateway.adServer == 'adhese') {
        return false;
    };
	if (w.includes('browsitest')) {
		return true;
	};
	if (typeof window.enableBrowsi !== 'undefined' && window.enableBrowsi == true) {
		AdheseGateway.logger('enable Browsi');
		return true;
	};
    
	var enabledDomains = ['autoblog.nl', 'wielerflits.nl', 'routenet.nl', 'geenstijl.nl', 'ze.nl', 'indeleiderstrui.nl', 'voetbalflitsen.nl', 'apparata.nl', 'nl.motorsport.com','1908.nl', 'iex.nl', 'problemcar.nl'];
	for (var i=0; i<enabledDomains.length; i++) {
		if (w.includes(enabledDomains[i])) {
			AdheseGateway.logger('enable Browsi');
			return true;
		}
	};
	AdheseGateway.logger('Browsi disabled');
	return false;
};

AdheseGateway.overrideConsentString = function() {
	var domains = ['iex.nl', 'beursonline.nl', 'belegger.nl', 'beleggen.nl', 'eurobench.com', 'beursduivel.be', 'debeurs.nl', 'beurs.nl'];
	for (var i=0; i<domains.length;i++) {
		if (window.location.href.includes(domains[i])) {
			return true;
		}
		return false;
	}
};

AdheseGateway.createAdUnits = function() {
    AdheseGateway.logger('createAdUnits');

    var xiParam = '';
    var xtParam = '';
    var tlParam = '';

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
    } catch (e) {};

    try {
        var iabTargets = googletag.pubads().getTargeting('iab_string');
        for (var i = 0; i < iabTargets.length; i++) {
            xtParam = iabTargets[i];
        }
    } catch (e) {};

    try {
        if (AdheseGateway.consentForAds) tlParam = 'all';
    } catch (e) {
        AdheseGateway.logger("ADHESE: no consent defined for dfp")
        tlParam = 'all';
    };

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
                if (value.length > 0) value += ';';
                value += target[i];
            }
            if (value.length > 0) AdheseGateway.targetArray.push([prefix, value]);
        }
    } catch (e) {};

    if (window.location.href.includes('roadblockDemo')) {
    	AdheseGateway.targetArray.push(['ge', '1'])
    };
    
    AdheseGateway.targetArray.push(['xw',AdheseGateway.adheseViewportDimensions.width]);
    AdheseGateway.targetArray.push(['xh',AdheseGateway.adheseViewportDimensions.height]);

    try {
    	AdheseGateway.targetArray.push(['ur', AdheseGateway.getBase64EncodedUrl()])
    } catch (e) {};

    if (AdheseGateway.definedSlots) {

        var ignoreFilter = ['_OUTSTREAM', '_PREROLL', '_BLOCK', '_3X3', '2785365', '_180x150', '1X1_VIDEO', 'VIDEO_1X1', 'AD_FLUID', '1X1_CUSTOM', '_ANCHOR', 'MULTIPLEX', 'INTERSTITIAL', 'APPINSTALL'];
        var regexIgnore = new RegExp(ignoreFilter.join("|"), "i");
        var regexWeb = new RegExp("_WEB_", "i");
        var regexMob = new RegExp("_MOB_", "i");
        var regexArticle = new RegExp("ARTIKEL", "i");
        for (var prop in AdheseGateway.definedSlots) {
            try {
                //add slots ordered by element id to AdheseGateway object so we can apply targeting based on slot element id when prebid response comes back.
                AdheseGateway.slotsOrderedByElementId[AdheseGateway.definedSlots[prop][0].getSlotElementId()] = AdheseGateway.definedSlots[prop][0]
            } catch (e) {};
            prop.toUpperCase();
            if (!regexIgnore.test(prop)) {
                if (AdheseGateway.adheseViewportDimensions.width > 768 && regexWeb.test(prop)) {
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                } else if (AdheseGateway.adheseViewportDimensions.width < 769 && regexMob.test(prop)) {
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                } else if (!regexWeb.test(prop) && !regexMob.test(prop)) {
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, AdheseGateway.targetArray);
                    AdheseGateway.amazonSlots = AdheseGateway.createAmazonAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                	AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, AdheseGateway.targetArray);
                }
            } else {
                AdheseGateway.logger("ignore regex for slot: " + prop + " - " + regexIgnore.test(prop));
            }
        }
    };
    //
    AdheseGateway.SETCONFIG = {
        adhese: {
            storageAllowed: true
        },
        consentManagement: {
            cmpApi: 'iab',
            timeout: 3000,
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
                    type: "html5",
                    name: "id5id", // create a cookie with this name
                    expires: 90, // cookie lasts for 90 days
                    refreshInSeconds: 8 * 3600 // refresh ID every 8 hours to ensure it is fresh
                }
            }],
            syncDelay: 2000,
            syncEnabled: true,
            syncsPerBidder: 0,
            filterSettings: {
                iframe: {
                    bidders: ['*'], // '*' means all bidders
                    filter: 'exclude'
                }, image: {
                	bidders: ['*'],
                	filter: 'exclude'
                }
            },
        },
        currency: {
            "adServerCurrency": "EUR",
        },
        refererInfo: {
            referer: AdheseGateway.prebidRefererUrl
        }
    };
    if (AdheseGateway.debug) {
    	AdheseGateway.SETCONFIG.debug = true;
    };

    if (AdheseGateway.overrideConsentString) {
      	AdheseGateway.SETCONFIG.consentManagement = {
            gdpr: {
            	cmpApi: 'static',
              	consentData: {
                	getTCData: {
                  	tcString: 'CPNmoHYPNtP2bADABBNLBvCsAP_AAE_AAAAAHvoV5TpWSWNAc3R5AosQOYQf9kC3IWACABANE4AFAAIAoAQAVGAAEAgAAAACAQAAIBYAAABBGAkABAAAAAAAAAAEAACAAAIIICIAgloBCAAIAAgAAAAAUAAAgAACAAAAkADEARIAQEAABAAAAAAAAAgAAAAAAAAAAAAAAAAIHvoV5CpWSWFAcHRpAIMQKIQfVkCXIWACABAFAwAAAAIAoAQAFEAAAAgAAAACAQAAIBQAAAABAAkABAAAAAAAAAAAAAAAAAIIICAAgFoBCAAIAAgAAAAAUAAAgAAAAAAAgABAARIAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAA',
                  	gdprApplies: true
	    			}
				}
			}
		}
    } else {
    	AdheseGateway.SETCONFIG.consentManagement = {
            cmpApi: 'iab',
            timeout: 3000
        }
    };

	if (AdheseGateway.allowBrowsi()) {
		AdheseGateway.SETCONFIG.realTimeData = {
			dataProviders:[{
				"name": "browsi",
				"params": {
					"url": "yield-manager.browsiprod.com",
					"siteKey": AdheseGateway.getBrowsiKey(), 
					"pubKey": "mmedia", 
					"keyName":"browsiViewability"
				}
			}]
		}
	};
    if (AdheseGateway.enableCriteo) {
        AdheseGateway.SETCONFIG.criteo = {
            fastBidVersion: 'latest',
            storageAllowed: true
        }
    };

    AdheseGateway.addGamPriorityTargeting = function(bid, key, value) {
        if (!bid || !key || !value) return;
        if (!Array.isArray(value)) value = [value];
        var googleSlot = AdheseGateway.slotsOrderedByElementId[bid.adUnitCode];
        googleSlot.setTargeting(key, value);
    };

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

                //discard all platform161 bids below 0.50
                if (bid.adhese.origin == 'PLATFORM161' && bidCpm < 0.5) return 0;

                var appnexusDealId;
                if (bid.dealId) {
                    appnexusDealId = bid.dealId;
                };

                var ghgDeals = {
                    reachFrequency: [1170249,1170248,1170247,1170246,1170241,1170240,1170239,1170238,1170236,1170234,1170229,1170228,1170227,1170226,1170221,1170220,1170219,1170218,1170216,1170214,1170209,1170208,1170207,1170206,1170201,1170200,1170199,1170198,1170196,1170194,1170189,1170188,1170187,1170186,1170181,1170180,1170179,1170178,1170176,1170174,1170169,1170168,1170167,1170166,1170159,1170158,1170157,1170156,1170154,1170152]
                };
                if (ghgDeals.reachFrequency.includes(appnexusDealId)) {
                    AdheseGateway.logger('Found TMP reachFrequency deal ' + appnexusDealId + '. Bid * 1.8.');
                    AdheseGateway.addGamPriorityTargeting(bid, 'ghgprio', 'reachfrequency');
                    return bidCpm * 1.4;
                } 
                
                if (bid.adhese.origin == 'APPNEXUS-gps') {
                    return bidCpm * 1.4;
                } else {
                    return bidCpm;
                }
            }
        }
    }

    pbjs.que.push(function() {
        pbjs.addAdUnits(AdheseGateway.adUnits);
        pbjs.setConfig(AdheseGateway.SETCONFIG);
    });

    AdheseGateway.chooseAdserver();
};

AdheseGateway.initGoogle = function(bids) {
    AdheseGateway.logger('initGoogle()');
    AdheseGateway.logger(bids);
    AdheseGateway.logger('AdheseGateway.initGoogle()');

    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh();
    });
};

AdheseGateway.getMediaType = function(ad) {
    var tag = ad.tag ? ad.tag : ad.body;
    if (tag.includes('<VAST')) {
        return 'video';
    } else {
        return 'banner';
    }
};
AdheseGateway.shouldAdBeRendered = function(ad) {
    if (ad.origin == 'PLATFORM161' && ad.extension && ad.extension.prebid && ad.extension.prebid.cpm && ad.extension.prebid.cpm.amount) {
        if (Number(ad.extension.prebid.cpm.amount) < AdheseGateway.floor) {
            AdheseGateway.logger('discarded response, price too low');
            AdheseGateway.logger(ad);
            return false;
        }
    }
    return true;
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
        
        AdheseGateway.logger('Fetching ads');
        AdheseGateway.logger(ads);
        var response = AdheseGateway.ajax.request({
            url: adUri,
            method: "get",
            json: true
        }).done(function(results) {
                        
            for (var x in results) {
                var ad = results[x];
                if (ad.origin == 'JERLICIA' && AdheseGateway.getMediaType(ad) == 'banner') {
                    var impressionTracker = "<img src='" + ad.trackedImpressionCounter + "' border='0' width='1' height='1' alt='' style='display:none'/>";
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
                                if (ad.height == '1000' || ad.height == '500' || ad.height == '400' || ad.height == '1200' || ad.height == '1080') {
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
                                        AdheseGateway.logger('Rendering rich media response in friendly iframe:');
                                        AdheseGateway.logger(ad);
                                    } catch (e) {
                                        AdheseGateway.logger(e);
                                    }
                                } else {
                                    adhese.safeframe.render(ad.slotName);
                                    AdheseGateway.logger('Rendering response in safeframe:');
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

AdheseGateway.translateObjectIntoContextTarget = function(obj) {
    var contextTargets = "";
    if (typeof obj !== 'object') return  "";
    for (param in obj) {
        var key = param;
        var values = obj[param];
        try {
            if (Array.isArray(values) && values[0].length) {
                values.forEach(function(value){
                    var contextValue = key + "_" + value + ";";
                    contextTargets = contextTargets + contextValue.toLowerCase().replace(/\s/g, '_').replace(/-/g, '_').replace(/\//g, '_').replace(/___/g, '_').replace(/__/g, '_');
                })
            } else if (typeof values == 'string' && values.length){
                var contextValue = key + "_" + values + ";";
                contextTargets = contextTargets + contextValue.toLowerCase().replace(/\s/g, '_').replace(/-/g, '_').replace(/\//g, '_').replace(/___/g, '_').replace(/__/g, '_');
            }
        }catch(e){}
    }
    return contextTargets;
};

AdheseGateway.getSportbookiesCategory = function() {
    var url = window.location.href.split('/');
    if(url.length>2) {
        return url[3].replace(/-/g, "_");
    } else {
        return false;
    }
};

AdheseGateway.processConsent = function(consent, consentString, gdprApplies) {
	AdheseGateway.logger('processConsent, with consent = ' + consent + ' and consentString = ' + consentString);
    var gdprParams = {
        consent: consent ? consent : "",
        consentString: consentString ? consentString : "",
        gdprApplies: gdprApplies ? gdprApplies : false
    };

	if (consentString) {
	    pbjs.adUnits = [];
	    googletag.cmd.push(function() {
	        googletag.pubads().setTargeting('iab_string', [consentString]);
	        googletag.pubads().setTargeting('consent', [AdheseGateway.consentForAds ? '1' : '0']);
	        googletag.pubads().setTargeting('rev_consent', [AdheseGateway.consentForAds ? '0' : '1']);
	        googletag.pubads().setRequestNonPersonalizedAds(AdheseGateway.consentForAds ? 0 : 1);
	        
            AdheseGateway.adServer = AdheseGateway.consentForAds ? 'google' : 'adhese';
            AdheseGateway.targetArray.push(['in', AdheseGateway.adServer]);
            if (window.location.href.includes('sportbookies.nl') && AdheseGateway.getSportbookiesCategory()) AdheseGateway.targetArray.push(['in', AdheseGateway.getSportbookiesCategory()]);
            if(window.location.href.includes('dailybase.nl') || window.location.href.includes('sportbookies')) AdheseGateway.adServer = 'adhese';
            if (window.mmedia && typeof window.mmedia.disableGoogle !== undefined && window.mmedia.disableGoogle) {
                AdheseGateway.adServer = 'adhese';
                AdheseGateway.logger('mmedia.disableGoogle = true, disabling GAM');
            }; 
	        if (AdheseGateway.adServer == 'adhese') AdheseGateway.targetArray.push(['xt', consentString]);
            if (window.MMDATA && typeof window.MMDATA.bsuit !== undefined && window.MMDATA.bsuit) AdheseGateway.targetArray.push(['bs', window.MMDATA.bsuit]);
	        if (!AdheseGateway.consentForAds) AdheseGateway.targetArray.push(['tl', 'none']);
            if (typeof window.MMDATA !== 'undefined') {
                AdheseGateway.targetArray.push(['ct', AdheseGateway.translateObjectIntoContextTarget(window.MMDATA)]);
            }
	        AdheseGateway.defineAdUnits(); //we only call defineAdUnits when tcString is available, so we don't load ads when consent window is still open.
	    });
	}
	AdheseGateway.fireSyncs(gdprParams);
};

AdheseGateway.adsFetchedWithoutGDPR = false;

AdheseGateway.checkConsent = function() {
    AdheseGateway.logger('AdheseGateway.checkConsent');
    window.__tcfapi('getTCData', 2, function(tcData) {
        if (tcData && tcData.cmpStatus == 'loaded') {
        try {
            var c = tcData.purpose.consents;
            var newConsentForAds = (c[1] && c[2] && c[3] && c[4]);
            var newConsentString = tcData.tcString;
            console.log(c);
            if (AdheseGateway.consentForAds !== newConsentForAds) {
                console.log('if');
            	AdheseGateway.consentString = newConsentString;
                AdheseGateway.consentForAds = newConsentForAds;
                AdheseGateway.processConsent(AdheseGateway.consentForAds, tcData.tcString, tcData.gdprApplies);
            } else {
            	//this logic is required to make sure we load ads on the first pageload on no-consent, where consentForAds = false and stays false. We look at consentstring instead.
            	if (AdheseGateway.consentString !== newConsentString) {
                    console.log('else');
            		AdheseGateway.consentString = newConsentString;
                	AdheseGateway.adServer = 'google';
                	AdheseGateway.processConsent(AdheseGateway.consentForAds, tcData.tcString, tcData.gdprApplies);
            	}
            }
        } catch (e) {
        	if(!tcData.gdprApplies && !AdheseGateway.adsFetchedWithoutGDPR) {
        		AdheseGateway.adsFetchedWithoutGDPR = true;
        		AdheseGateway.logger('GDPR does not apply - fetch ads')
        		AdheseGateway.adServer = 'google';
        		googletag.cmd.push(function() {
        			AdheseGateway.defineAdUnits();
        		});
        	};
            AdheseGateway.logger(e);
        }
    } else {
        setTimeout(AdheseGateway.checkConsent, 100);
    }
    });
};

AdheseGateway.logger('config loaded');
AdheseGateway.liverampCmpListenersAdded = false;
AdheseGateway.googleCmpListenersAdded = false;
AdheseGateway.initRetries = 1;

AdheseGateway.getScriptQueryParam = function(param) {
	AdheseGateway.logger('getScriptQueryParam: ' + param);
	try {
		const url = new URL(document.currentScript.getAttribute('src'));
		const params = new URLSearchParams(url.search);
		if (params.has(param)) {

			return params.get(param);
		}		
	} catch (e) {
		if (AdheseGateway.debug) console.log(e);
		return false;
	};
	return false;
};

AdheseGateway.addLiverampListeners = function() {

	//Liveramp Listeners for pubs using Liveramp Privacy Manager
	try {
		AdheseGateway.logger('Trying to add liveramp __tcfapi listeners.');
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
		AdheseGateway.liverampCmpListenersAdded = true;
	} catch (e) {
		AdheseGateway.logger('Failed to add Liveramp listeners');
		if(AdheseGateway.debug) console.log(e);
	};
};

AdheseGateway.addGoogleCmpListeners = function() {
	try {
		//Google listneners for pubs using Google CMP.
		AdheseGateway.logger('Adding googlefc listeners.');
		window.googlefc = window.googlefc || {};
		window.googlefc.ccpa = window.googlefc.ccpa || {}
		window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
		googlefc.callbackQueue.push({
			'CONSENT_DATA_READY': function(){
				AdheseGateway.logger('googlefc callback');
				__tcfapi('getTCData', 0, function(data, success) {
					AdheseGateway.logger('Found google consent preferences');
					AdheseGateway.checkConsent();
				})
			}
		});
		AdheseGateway.googleCmpListenersAdded = true;
	} catch (e) {
		AdheseGateway.logger('Failed to add Google listeners');
		if(AdheseGateway.debug) console.log(e);		
	}
};

AdheseGateway.init = function() {
	//cmp type is defined in the config url, e.g. https://pool-mannenmedia.adhese.com/tag/config_v2.js?cmp=google
	//if not defined, default is liveramp
	AdheseGateway.cmp = AdheseGateway.getScriptQueryParam('cmp') ? AdheseGateway.getScriptQueryParam('cmp') : 'liveramp';
	AdheseGateway.logger('Initialize CMP listeners, attempt:' + AdheseGateway.initRetries);
	AdheseGateway.logger('CMP type is ' + AdheseGateway.cmp);
	AdheseGateway.logger('__tcfapi typeof = ' + typeof(window.__tcfapi));

	//check if __tcfapi is there before adding listeners, otherwise stuff will break
	if (typeof window.__tcfapi == 'undefined' && AdheseGateway.cmp == 'liveramp') {
		AdheseGateway.logger('__tcfapi undefined, try again');
		// wait 200ms and try adding listeners again. __tcfapi should always become available at some point. 
		if(AdheseGateway.initRetries<20) {
			setTimeout(AdheseGateway.init, 200);
		} else {
			console.log('Maximum initialization retries reached, CMP not found.');
		}	
	}
	//if __tcfapi is defined, we can just add the listeners for liveramp
	if (typeof window.__tcfapi !== 'undefined' && !AdheseGateway.liverampCmpListenersAdded && AdheseGateway.cmp == 'liveramp') {
		AdheseGateway.logger('__tcfapi found, adding liveramp eventlisteners')
		 AdheseGateway.addLiverampListeners();
	}

	//if google cmp is used instead of liveramp, we can just add the google listeners. No need to wait for __tcfapi because their callbackQueue is defined by us.
	if (AdheseGateway.cmp == 'google' && !AdheseGateway.googleCmpListenersAdded) {
		AdheseGateway.logger('google cmp found');
		AdheseGateway.addGoogleCmpListeners();
	}
	AdheseGateway.initRetries++;
};
AdheseGateway.init();
