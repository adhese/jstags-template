var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var AdheseGateway = {};
AdheseGateway.adUnits = [];
AdheseGateway.gptadslots = []
AdheseGateway.consentForAds;
AdheseGateway.PREBID_TIMEOUT = 2000;
AdheseGateway.prebidRefererUrl = window.location.href;
AdheseGateway.debug = false;
AdheseGateway.definedSlots = undefined;
AdheseGateway.screenWidth = 0;
AdheseGateway.deviceType = 'unknown';
AdheseGateway.adheseSlots = [];
AdheseGateway.targetArray = [];
AdheseGateway.adServer = 'google';
AdheseGateway.showheroesDivCreated = false;
AdheseGateway.bettingEnabled = true;

if (window.location.href.includes('debug=true')) {
    AdheseGateway.debug = true;
}

AdheseGateway.excludedUrls = {
    wildCards: [
        "https://deliciousmagazine.nl/site/koken-als-sterrenchef",
        "https://www.formule1.nl/wp/wp-admin",
        "https://www.vorsten.nl/wp/wp-admin",
        "https://www.kijkmagazine.nl/wp/wp-admin",
        ],
    exactMatches: [
        "https://www.fiets.nl/mtb-awards-2020/",
        "https://truckstar.nl/particulier-auto-verzekering/",
        "https://www.knipmode.nl/klantenservice/",
        "https://www.tijdschriftnu.nl/klantenservice/",
        "https://www.vorsten.nl/klantenservice/",
        "https://www.kijkmagazine.nl/klantenservice/",
        "https://www.formule1.nl/klantenservice/",
        "https://deliciousmagazine.nl/klantenservice/",
        "https://www.seasons.nl/klantenservice/",
        "https://www.rootsmagazine.nl/klantenservice/",
        "https://www.fiets.nl/klantenservice/",
        "https://www.fietsactief.nl/klantenservice/",
    ]
};

AdheseGateway.checkIfAdsAreAllowed = function() {
    var adsAllowed = true;
    var domain = window.location.href;
    var wildCards = AdheseGateway.excludedUrls.wildCards;
    var exactMatches = AdheseGateway.excludedUrls.exactMatches;

    wildCards.forEach(function(url) {
        if (domain.includes(url)) {
            adsAllowed = false;
        }
    });

    exactMatches.forEach(function(url) {
        if (domain == url) {
            adsAllowed = false;
        }
    });

    return adsAllowed;
};

AdheseGateway.decorateLog = function(args, prefix) {
  args = [args];
  prefix && args.unshift(prefix);
  args.unshift('display: inline-block; color: #fff; background: #ff0066; padding: 1px 4px; border-radius: 3px;');
  args.unshift('%cAdhese Gateway');
  return args;
};

AdheseGateway.logger = function(arguments) {
    if (AdheseGateway.debug) console.info.apply(console, AdheseGateway.decorateLog(arguments, 'DEBUG:'));
}

AdheseGateway.logger('Adhese initialized, waiting for CMP');

if (AdheseGateway.debug) {
    googletag.cmd.push(function() {
        googletag.pubads().setTargeting('adhese_test', ['true']);
    })
}

AdheseGateway.priceBucketConfig = {
    "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 1,
            "increment": 0.05
        },
        {
            "precision": 2,
            "min": 1,
            "max": 2,
            "increment": 0.10
        },
        {
            "precision": 2,
            "min": 2,
            "max": 5,
            "increment": 0.20
        },
        {
            "precision": 2,
            "min": 5,
            "max": 20,
            "increment": 0.5
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 1
        }
    ]
};

AdheseGateway.pbjsConfig = {
    consentManagement: {
        cmpApi: 'iab',
        timeout: 1000,
    },
    bidderSequence: "random",
    enableSendAllBids: false,
    bidderTimeout: AdheseGateway.PREBID_TIMEOUT,
    priceGranularity: AdheseGateway.priceBucketConfig,
    userSync: {
        userIds: [{
            name: "id5Id",
            params: {
                partner: 419
            },
            storage: {
                type: "cookie",
                name: "pbjs-id5id",
                expires: 90,      
                refreshInSeconds: 8*3600
            }
        }],
        syncDelay: 100,
        syncEnabled: false,
        syncsPerBidder: 5,
        filterSettings: {
            iframe: {
                bidders: ['*'],
                filter: 'include'
            },
            image: {
                bidders: ['*'],
                filter: 'include'
            }
        }
    },
    currency: {
        adServerCurrency: "EUR"
    },
    refererInfo: {
        referer: AdheseGateway.prebidRefererUrl
    }
}

if (AdheseGateway.debug) {
    AdheseGateway.logger('setting pbjs debug to true');
    AdheseGateway.pbjsConfig.debug = true;
}

AdheseGateway.getScreenWidth = function() {
    AdheseGateway.logger('getScreenWidth()');
    return Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

AdheseGateway.appendSyncIframe = function(options) {
    AdheseGateway.logger('appendSyncIframe()');
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

AdheseGateway.syncUser = function(option) {
    AdheseGateway.logger('syncUser()');
    AdheseGateway.appendSyncIframe({ syncName: "newskoolmedia", url: "https://user-sync.adhese.com/iframe/user_sync.html?account=newskoolmedia" });
};

AdheseGateway.defineAdUnits = function() {
    AdheseGateway.logger('defineAdUnits()');
    AdheseGateway.screenWidth = AdheseGateway.getScreenWidth();
    if (AdheseGateway.screenWidth < 769) {
        AdheseGateway.deviceType = 'phone';
    } else if (AdheseGateway.screenWidth < 1025) {
        AdheseGateway.deviceType = 'tablet';
    } else {
        AdheseGateway.deviceType = 'desktop';
    }

    try {
        for (var i = 0; i < AdheseGateway.gptadslots.length; i++) {
            if (AdheseGateway.gptadslots[i]) {
                if (!AdheseGateway.definedSlots) AdheseGateway.definedSlots = {};
                AdheseGateway.definedSlots[AdheseGateway.gptadslots[i].getSlotElementId()] = [AdheseGateway.gptadslots[i]];
            }
        }
        if (AdheseGateway.definedSlots) {
            AdheseGateway.createAdUnits();
        }
    } catch (e) {
        console.log(e);
    }
};

AdheseGateway.invibesMapping = {
    //"SITENAME", ["invibes identifier", "render position"]
    "BELEGGERSBELANGEN" : ["invibes_beleggersbelangen", "MID_MOBILE"],
    "DELICIOUSMAGAZINE" : ["invibes_deliciousmagazine", "MID_MOBILE"],
    "ELSEVIER" : ["invibes_elsevier", "BOT_MOBILE"],
    "FIETS" : ["invibes_fiets", "TOP_MOBILE"],
    "FIETSACTIEF" : ["invibes_fietsactief", "MID_MOBILE"],
    "FORMULE1" : ["invibes_formule1", "MID_MOBILE"],
    "KIJKMAGAZINE" : ["invibes_kijkmagazine", "MID_MOBILE"],
    "KNIPMODE" : ["invibes_knipmode", "MID_MOBILE"],
    "KNIPPIE" : ["invibes_knippie", "MID_MOBILE"],
    "ROOTSMAGAZINE" : ["invibes_rootsmagazine", "MID_MOBILE"],
    "SEASONS" : ["invibes_seasons", "MID_MOBILE"],
    "VORSTEN" : ["invibes_vorsten", "MID_MOBILE"],
    "ZIN" : ["invibes_zin", "MID_MOBILE"]
};

AdheseGateway.createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    AdheseGateway.logger('createPrebidAdunitFromSlot:' + slot.getSlotElementId());
    var sizeFromAdunit = [1, 1];
    var loc = slot.getAdUnitPath().split('/')[2].toUpperCase();
    var format = '';
    var slotElementId = slot.getSlotElementId();

    if (slotElementId.includes('dfp_')) {
        format = slotElementId.split('dfp_')[1].toUpperCase();
    } else {
        format = slotElementId;
    }

    if (sizeFromAdunit.length > 1) {
        var o = {
            code: slot.getSlotElementId(),
            mediaTypes: {
                banner: {
                    sizes: sizeFromAdunit
                }
            },
            bids: [{
                bidder: 'adhese',
                params: {
                    account: 'newskoolmedia',
                    location: loc,
                    format: format,
                    data: {
                        'dt': [AdheseGateway.deviceType],
                        'tl': [tlParam],
                        'xi': [xiParam],
                        'up': [AdheseGateway.bettingEnabled ? 'in' : 'out'],
                    }
                }
            }]
        }
        for (var c = 0; c < customParam.length; c++) {
            o.bids[0].params.data[customParam[c][0]] = customParam[c][1];
        }
        try {
            if (format.includes(AdheseGateway.invibesMapping[loc][1])) {

                var invibesConfig = {
                    bidder: 'invibes',
                    params: {
                        placementId: AdheseGateway.invibesMapping[loc][0],
                        customEndpoint: '//bid2.videostep.com/Bid/VideoAdContent',
                        adContainerId: slotElementId
                    }
                }
                try {
                    o.mediaTypes.video = {
                        playerSize: [640,360],
                        context: 'outstream'
                    }
                    o.bids.push(invibesConfig);
                } catch (e) {}
            }                    
        } catch (e) {
            AdheseGateway.logger(e);
        };
        AdheseGateway.adUnits.push(o);
    }
    return AdheseGateway.adUnits;
};

AdheseGateway.createAdheseGatewaySlots = function (slot, adheseSlots, xtParam, tlParam, customParam) {
    var location = '';
    var format = '';
    var containerId = '';
    var lazyLoaded = true; 
    var slotElementId = slot.getSlotElementId();
    try {
        location = slot.getAdUnitPath().split('/')[2].toUpperCase();
        if (slotElementId.includes('dfp_')) {
            format = slotElementId.split('dfp_')[1].toUpperCase();
        } else {
            format = slotElementId;
        }
        containerId = slot.getSlotElementId();
    } catch (e) {
        console.log(e);
    }

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

AdheseGateway.addTrackingPixel = function(uri) {
    AdheseGateway.logger('addTrackingPixel()');
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

AdheseGateway.ajax = {
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
                                        self.errorCallback && self.errorCallback.apply(self.host, ["AdheseGateway Ajax: " + e]);
                                    }
                                }else {
                                    self.errorCallback && self.errorCallback.apply(self.host, ["AdheseGateway Ajax: Response is empty string"]);
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
                if (ops.headers && typeof ops.headers == 'object') {
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
};

AdheseGateway.syncImprove = function(option) {
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
            AdheseGateway.logger("exception when syncing Improve users");
            console.log(e);
        }
    });
};

AdheseGateway.createAdUnits = function() {
    AdheseGateway.logger('createAdUnits()');
    var xiParam = '';
    var xtParam = '';
    var tlParam = 'all';
    if (!AdheseGateway.consentForAds) tlParam = 'none';
    var targetArray = [];

    try {
        targetArray.push(['pt', [dataLayer[3].gwa_pageType]]);
    } catch (e) {}
    try {
        targetArray.push(['xf', [btoa(window.location.href)]]);
    } catch (e) {}
    try {
        targetArray.push(['ca', [dataLayer[3].gwa_category]]);
    } catch (e) {}

    if (AdheseGateway.definedSlots) {
        for (var prop in AdheseGateway.definedSlots) {
            if (AdheseGateway.deviceType == 'desktop' || AdheseGateway.deviceType == 'tablet') {
                if (!prop.includes('EXTERN') && !prop.includes('fluid') && !prop.includes('_mobile')) {
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, targetArray);
                }
            } else if (AdheseGateway.deviceType = 'mobile') {
                if (prop.includes('_mobile')) {
                    AdheseGateway.adUnits = AdheseGateway.createPrebidAdunitFromSlot(AdheseGateway.definedSlots[prop][0], AdheseGateway.adUnits, xiParam, xtParam, tlParam, targetArray);
                    AdheseGateway.adheseSlots = AdheseGateway.createAdheseGatewaySlots(AdheseGateway.definedSlots[prop][0], AdheseGateway.adheseSlots, xtParam, tlParam, targetArray);
                }
            }
        }
    }

    pbjs.bidderSettings = {
        'adhese': {
            bidCpmAdjustment: function(bidCpm, bid) {
                return bidCpm;
            }
        },
    };
    AdheseGateway.chooseAdserver();
};

AdheseGateway.chooseAdserver = function () {
    AdheseGateway.logger('chooseAdserver() initializing' + AdheseGateway.adServer);
    if (AdheseGateway.adServer == 'google') {
        pbjs.que.push(function() {
            pbjs.addAdUnits(AdheseGateway.adUnits);
            pbjs.setConfig(AdheseGateway.pbjsConfig);
            pbjs.requestBids({
                bidsBackHandler: AdheseGateway.initGoogle,
                timeout: AdheseGateway.PREBID_TIMEOUT
            });
        });
    } else {
        //initialize adhese for all display slots
        AdheseGateway.initAdhese(AdheseGateway.adheseSlots);
        //call only native slot trough google 
        var slots = AdheseGateway.definedSlots;
        for (prop in slots) {
            if (prop.includes('logolinks')) {
                AdheseGateway.logger('loading Google slot:' + prop)
                googletag.cmd.push(function() {
                    googletag.pubads().enableLazyLoad({
                        fetchMarginPercent: 500,
                        renderMarginPercent: 30,
                        mobileScaling: 2.0
                      });
                    googletag.pubads().refresh([slots[prop]])
                })
            }
        }
    }
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
            //dirty way to serve invibes ads using existing adhese prebid line items.
            if (bid.adserverTargeting.hb_bidder = 'invibes') bid.adserverTargeting.hb_bidder = 'adhese';
        }
    }
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        googletag.pubads().enableLazyLoad({
          fetchMarginPercent: 500,
          renderMarginPercent: 30,
          mobileScaling: 2.0
        });
        googletag.pubads().refresh();
    });
};

AdheseGateway.renderInFriendlyIframe = function(ad) {
    var iframeCSS = "<style>body{margin:0px;}</style>";
    var frameContainer = document.getElementById(ad.slotName);
    var adFrm = document.createElement('iframe');
    if (ad.height == '1000') {
        adFrm.width = 1;
        adFrm.height = 1;             
    } else {
        adFrm.width = ad.width;
        adFrm.height = ad.height;
        adFrm.style.width = ad.width;
        adFrm.style.height = ad.height;
    }
    adFrm.frameBorder = 0;
    adFrm.scrolling='no';
    adFrm.style.margin = '0 auto';
    adFrm.style.display = 'block';
    frameContainer.appendChild(adFrm);
    var adMarkup = (ad.body != "") ? ad.body : ad.tag;

    adFrmDoc =  adFrm.contentWindow.document;
    adMarkup += iframeCSS;
    adFrmDoc.write(adMarkup);
    adFrmDoc.close();
    
    if (adhese.safeframe.viewability && ad.viewableImpressionCounter  && ad.slotName != '[adheseReplace:SL]') {
        adhese.safeframe.viewability.trackers[ad.slotName] = ad.viewableImpressionCounter;
        adhese.safeframe.viewability.adObserver.observe(document.getElementById(ad.slotName));
    }
};

var adhese;
AdheseGateway.initAdhese = function(t) {
    AdheseGateway.logger('initAdhese()');
    
    try {
        adhese = new Adhese();

        adhese.init({
            debug: true,
            account: "newskoolmedia",
            host: "https://ads-newskoolmedia.adhese.com/",
            location: '',
            safeframe: true,
            safeframeContainerID: "slotName",
            previewHost: "https://newskoolmedia-preview.adhese.org",
            viewabilityTracking: true
        });

        if(!AdheseGateway.consentForAds) adhese.registerRequestParameter('tl', 'none');
        if(AdheseGateway.deviceType) adhese.registerRequestParameter('vp',AdheseGateway.deviceType);
        adhese.registerRequestParameter('xf', btoa(window.location.href));
        adhese.registerRequestParameter('ge', '3');
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
            for (var x in results) {
                var ad = results[x];
                for ( var c in t ) {
                    if ( ad.slotName == t[c].slotCode ) {      
                        var container = document.getElementById(t[c].containerId);
                        if ( container ) {
                            AdheseGateway.logger(container);
                            container.style.marginBottom = '10px';
                            container.style.display='block';
                            container.parentElement.style.display='block';
                            var con = document.createElement('div');
                            con.id = ad.slotName;
                            container.appendChild(con);
                            AdheseGateway.renderInFriendlyIframe(ad);
                            //adhese.safeframe.render(ad.slotName);
                            if(ad.origin == 'JERLICIA' && ad && ad.trackedImpressionCounter) AdheseGateway.addTrackingPixel(ad.trackedImpressionCounter);
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

    googletag.cmd.push(function() {
        var bettingTargeting = googletag.pubads().getTargeting('gamblingEnabled');
        console.log('hello', bettingTargeting)
        if (bettingTargeting && bettingTargeting[0] == 'false') {
                AdheseGateway.bettingEnabled = false;
        }
    });

        AdheseGateway.logger('checkConsent()');
    __tcfapi('getTCData', 2, (tcData, success) => {
        if (tcData.eventStatus === 'cmpuishown') return;
        try {
            var c = tcData.purpose.consents;
            var newConsentForAds = (c[1] && c[2] && c[3] && c[4] && c[5]);
            if (Object.keys(c).length === 0 && c.constructor === Object) {
                AdheseGateway.logger('No consent found, setting adServer to Adhese');
                newConsentForAds = false;
                AdheseGateway.adServer = 'adhese';
            }
            AdheseGateway.logger('consentForAds', AdheseGateway.consentForAds, 'newConsentForAds', newConsentForAds);
            if (AdheseGateway.consentForAds !== newConsentForAds) {
                AdheseGateway.consentForAds = newConsentForAds;
                pbjs.adUnits = [];
                googletag.cmd.push(function() {
                    googletag.pubads().setRequestNonPersonalizedAds(AdheseGateway.consentForAds ? 0 : 1);
                    AdheseGateway.defineAdUnits();
                });
                if (AdheseGateway.consentForAds) {
                    setTimeout(function(){
                        AdheseGateway.syncUser();
                        AdheseGateway.syncImprove();
                    }, 1000);  
                }
            }
        } catch (e) {
            console.log(e);
        }
    });
}

window.addEventListener('CookiebotOnLoad', function() {
    AdheseGateway.logger('Cookiebot Loaded');
    AdheseGateway.gptadslots = googletag.pubads().getSlots();
    if (AdheseGateway.checkIfAdsAreAllowed()) {
        AdheseGateway.checkConsent();
    };
});


if(window.location.href.includes('deliciousmagazine.nl') || window.location.href.includes('formule1.nl') || window.location.href.includes('fiets.nl') || window.location.href.includes('ewmagazine.nl') || window.location.href.includes('elseone.nl') || typeof(window.Didomi) !== 'undefined') {

    googletag.cmd.push(function() {
        googletag.pubads().disableInitialLoad();
    });

    window.didomiEventListeners = window.didomiEventListeners || [];
    window.didomiEventListeners.push({
        event: 'consent.changed',
        listener: function (context) {
            console.log('consent changed');
            AdheseGateway.gptadslots = googletag.pubads().getSlots();
            if (AdheseGateway.checkIfAdsAreAllowed()) {
                AdheseGateway.checkConsent();
            };  
        }
    });

    function addTcfEventListeners() {
        try {
            window.__tcfapi('addEventListener', 'acceptAllButtonClicked', function(data) {
                googletag.cmd.push(function() { 
                    AdheseGateway.gptadslots = googletag.pubads().getSlots();
                    AdheseGateway.logger('AcceptAllButtonClicked');
                    AdheseGateway.checkConsent();
                });
            });
            
            window.__tcfapi('addEventListener', 'exitButtonClicked', function(data) {
                googletag.cmd.push(function() { 
                    AdheseGateway.gptadslots = googletag.pubads().getSlots();
                    AdheseGateway.logger('exitButtonClicked');
                    AdheseGateway.checkConsent();
                });
            });
            
            window.__tcfapi('addEventListener', 'cmpReady', function(data) {
                googletag.cmd.push(function() { 
                    AdheseGateway.gptadslots = googletag.pubads().getSlots();
                    AdheseGateway.logger('cmpReady');
                    AdheseGateway.checkConsent();
                });
            });
        } catch (e){ console.log(e) }
    }

    if (typeof window.__tcfapi !== 'undefined') {
        addTcfEventListeners();
    } else {
        // we need to wait for the __tcfapi to be loaded
        var tcfapiInterval = setInterval(function() {
            if (typeof window.__tcfapi !== 'undefined') {
                addTcfEventListeners();
                clearInterval(tcfapiInterval);
            }
        }, 100);
    }
}
if (!window.location.href.includes('ewmagazine.nl')) {

    (function(){
        var sizeMappings = {
            'lb_bb': {
                970: [[728, 90], [970, 70], [970, 90], [970, 250], [970, 500]],
                768: [728, 90],
                0: [],
            },
            'lb': {
                970: [[728, 90], [970, 70]],
                768: [728, 90],
                0: [],
            },
            'rt_hpa': { 
                970: [[300, 250], [300, 600], [160, 600]],
                768: [[300, 250], [300, 600], [160, 600]],
                0: [],
            },
            'mobile': {
                320: [[300, 50], [320, 50], [300, 100], [320, 100], [320, 250], [300, 250], [320, 240], [320, 480]],
                767: [],
                0: [],
            }
        };
        
        var width = window.innerWidth;
        var slotSizeMapping = {
            dfp_top_lb_bb: sizeMappings.lb_bb,
            dfp_mid_lb_bb: sizeMappings.lb,
            dfp_top_rectangle: sizeMappings.rt_hpa, 
            dfp_mid_rectangle: sizeMappings.rt_hpa,
            dfp_bot_rectangle: sizeMappings.rt_hpa,
            dfp_top_mobile: sizeMappings.mobile,
            dfp_top_rt: width > 1000 ? sizeMappings.rt_hpa : sizeMappings.mobile,
            dfp_mid_rt: width > 1000 ? sizeMappings.rt_hpa : sizeMappings.mobile,
            dfp_bot_rt: width > 1000 ? sizeMappings.rt_hpa : sizeMappings.mobile,
            dfp_mid_mobile: sizeMappings.mobile,
            dfp_bot_mobile: sizeMappings.mobile,
            dfp_top_interstitial: sizeMappings.interstitial,
            dfp_mid_inpage: sizeMappings.inpage,
            gam_mid_fluid: sizeMappings.fluid
        };
        
        var getSizeMapping = function(slotElementId) {
            var slotElementId = slotElementId.replace(/formule1_/, '').replace(/Fiets_/, '');
            var sizeMapping = slotSizeMapping[slotElementId];
            var mapping = googletag.sizeMapping();
            for (var key in sizeMapping) {
                if (sizeMapping.hasOwnProperty(key)) {
                    var sizes = sizeMapping[key];
                    mapping.addSize([+key, 0], sizes);
                }
            }
            return mapping.build();
        }
        
        var getSizes = function(slot) {
            var sizesFromSlot = slot.getSizes();
            var sizes = [];
            for (var i = 0; i < sizesFromSlot.length; i++) {
                var size = sizesFromSlot[i];
                if (size.width && size.height) {
                    sizes.push([size.width, size.height]);
                } else {
                    sizes.push(['fluid'])
                }
            }
            return sizes;
        }
        
        var newGoogleSlots = [];
        
        googletag.cmd.push(function() {
            var googleSlots = googletag.pubads().getSlots();
            for (var i = 0; i < googleSlots.length; i++) {
                var slot = googleSlots[i];
                var obj = {};
                obj.adUnitPath = slot.getAdUnitPath().replace('21705115422', '79802621');
                obj.slotElementId = slot.getSlotElementId();
                slotSizeMapping[slot.getSlotElementId()] ? obj.sizeMapping = slotSizeMapping[slot.getSlotElementId()] : null;
                obj.outOfPage = slot.getOutOfPage();
                obj.targeting = slot.getTargetingMap();
                obj.sizes = getSizes(slot);
                newGoogleSlots.push(obj);
            }
            googletag.destroySlots();
        
            for (var i = 0; i < newGoogleSlots.length; i++) {
                var slot = newGoogleSlots[i];
                if(slot.outOfPage) {
                    var newSlot = googletag.defineOutOfPageSlot(slot.adUnitPath, slot.slotElementId);
                } else {
                    var newSlot = googletag.defineSlot(slot.adUnitPath, slot.sizes, slot.slotElementId);
                }
                newSlot.addService(googletag.pubads());
                //for key in slot.targeting add targeting
                for (var key in slot.targeting) {
                    if (slot.targeting.hasOwnProperty(key)) {
                        newSlot.setTargeting(key, slot.targeting[key]);
                    }
                }
                newSlot.defineSizeMapping(getSizeMapping(slot.slotElementId));
            }
        });    
    })();
}