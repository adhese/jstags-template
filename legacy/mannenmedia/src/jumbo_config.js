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

var adheseScreenWidth = 0;

defineAdUnits = function() {
    adheseScreenWidth = getScreenWidth();

    if (consentForAds) {
        syncUser();
    }

    try {
        definedSlots = googletag.slot_manager_instance.m;
        if (definedSlots) createAdUnits();
    } catch (e) {
        if (adhese_debug) {console.log("ADHESE: defining slots on slot_manager_instance skipped")};
        try {
            for (var i = 0; i < gptadslots.length; i++) {
                if (gptadslots[i]) {
                    if (!definedSlots) definedSlots = new Object();
                    definedSlots[gptadslots[i].getAdUnitPath()] = [gptadslots[i]];
                }
            }
            if (definedSlots) {
                createAdUnits();
            }
        } catch (e) {
        }
    }
}

var createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    var sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    if (adhese_debug) { console.log('sizeFromAdunit 1:', sizeFromAdunit);
        console.log(sizeFromAdunit) } else if (sizeFromAdunit[0].indexOf("_MOB_") != -1) {
        sizeFromAdunit = ['320', '240'];
    }
    var loc = (slot.getAdUnitPath().replace(/\//g, '_') + '_').toUpperCase();
    var format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
    if (sizeFromAdunit.length > 1) {
        var prebidSlotCode = slot.getAdUnitPath();
        var o = {
            code: prebidSlotCode,
            mediaTypes: {
                banner: {
                    sizes: sizeFromAdunit
                }
            },
            bids: [
                //Adhese
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
        adUnits.push(o);
    }
    return adUnits;
}

var createAdUnits = function() {
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
            var value = '';
            for (var i = 0; i < target.length; i++) {
                if (value.length > 0) value += ',';
                value += target[i];
            }
            if (value.length > 0) targetArray.push([prefix, value]);
        }
    } catch (e) {}

    if (definedSlots) {
        var ignoreFilter = ['_NATIVE','_OUTSTREAM','_PREROLL','_BLOCK','_3X3','_1X1','2785365'];
        var regexIgnore = new RegExp(ignoreFilter.join( "|" ), "i");
        var regexWeb = new RegExp("_WEB_", "i");
        var regexMob = new RegExp("_MOB_", "i");
        var regexArticle = new RegExp("ARTIKEL", "i");
        for (var prop in definedSlots) {
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
                        bidders: ['adhese', 'justpremium'], // '*' means all bidders
                        filter: 'include'
                    }
                },
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
        googletag.pubads().refresh();
    });
};