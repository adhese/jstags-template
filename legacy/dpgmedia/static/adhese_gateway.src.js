function AdheseGateway(gT,dL,pbjs,sizeMapping) {

    this.gT = gT;
    this.dL = dL;
    this.pbjs = pbjs;
    this.sizeMapping = sizeMapping;
    this.adhese_debug = window.location.href.includes('adhese_debug=true');
    this.adhese_adserver = window.location.href.includes('adhese_adserver');
    this.consentForAds = true;
    if (this.adhese_adserver) this.consentForAds = false;
    this.viewPort = "large";
    this.adUnits = [];
    this.adheseSlots = [];
    this.targetArray = []
    this.definedSlots = undefined;
    this.PREBID_TIMEOUT = 2000;
    this.prebidRefererUrl = window.location.href;
    this.cookiesAllowed = !this.sizeMapping['dfp']['requestNonPersonalizedAds'];
    this.lazyLoadThreshold = this.sizeMapping['dfp']['lazyLoadThreshold'];
    this.priceBucketConfig = {
        "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 0.70,
            "increment": 0.05
        },
            {
                "precision": 2,
                "min": 0.70,
                "max": 2.50,
                "increment": 0.01
            },
            {
                "precision": 2,
                "min": 2.50,
                "max": 20,
                "increment": 0.05
            },
            {
                "precision": 2,
                "min": 20,
                "max": 50,
                "increment": 1
            }
        ]
    };
    this.clientSideBiddderConfig = {
        gelderlander: {
            criteo: {
                large: {
                    //size: [zoneId]
                    '970x250': ['1090717'],
                    '468x60': ['1400097'],
                    '728x90': ['1090716'],
                    '300x250': ['1090719'],
                    '300x600': ['1090715'],
                    '120x600': ['1138157'],
                    '160x600': ['1138158'],
                    '336x280': ['1090720'],
                    '1800x1000':[''],
                    '970x1000':[''],
                    '1800x200':[''],
                },
                medium: {
                    '970x250': ['1090717'],
                    '468x60': ['1400097'],
                    '728x90': ['1090716'],
                    '300x250': ['1090719'],
                    '300x600': ['1090715'],
                    '120x600': ['1138157'],
                    '160x600': ['1138158'],
                    '336x280': ['1090720']
                },
                small: {
                    '300x250': ['1090721'],
                    '300x100': ['1090723'],
                    '320x50': ['1090722'],
                    '320x240': ['[1090724'],
                    '336x280': ['1090720']
                }            
            },
            floors: {
                large: {
                    //size: [floor]
                    '970x250': [2.50],
                    '468x60': [0.15],
                    '728x90': [0.15],
                    '300x250': [0.15],
                    '300x600': [2.50],
                    '120x600': [0.15],
                    '160x600': [0.15],
                    '336x280': [0.15],
                    '1800x1000':[11.25],
                    '970x1000':[11.25],
                    '1800x200':[11.25],
                },
                medium: {
                    '970x250': [2.50],
                    '468x60': [0.15],
                    '728x90': [0.15],
                    '300x250': [0.15],
                    '300x600': [2.50],
                    '120x600': [0.15],
                    '160x600': [0.15],
                    '336x280': [0.15]
                },
                small: {
                    '300x250': [0.15],
                    '300x100': [0.15],
                    '320x50': [0.15],
                    '320x240': [0.15],
                    '336x280': [0.15]
                }            
            }
        }
    }

    window.dispatchEvent(new CustomEvent('adheseapiready', {}));
    if (this.adhese_debug) {
        console.log("ADHESE: dispatched event adheseapiready");
    }
    this.defineAdUnits();
    return this;
}

AdheseGateway.prototype.getDeviceType = function (viewPort) {
    if (viewPort == "small")
        return "mobile";
    else if (viewPort == "medium")
        return "tablet";
    return "desktop";
};

AdheseGateway.prototype.loadAdheseSDK = function() {
    // for production we would preferably have this hosted by DPG or included in main.js build.
    var scrpt = document.createElement('script');
    scrpt.async = false;
    scrpt.type = 'text/javascript';
    scrpt.src = 'https://pool-dpgmedia.adhese.com/tag/tag.src.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(scrpt, node);
};

AdheseGateway.prototype.AdheseAdUnit = function (path, width, height) {
    this.adUnitPath = path;
    this.sizes = [new this.Size(width, height)];
    return this;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.getSizes = function () {
    return this.sizes;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.Size = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.Size.prototype.getWidth = function () {
    return this.width;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.Size.prototype.getHeight = function () {
    return this.height;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.getAdUnitPath = function (options) {
    return this.adUnitPath;
};

AdheseGateway.prototype.AdheseAdUnit.prototype.getAdUnitPath = function (options) {
    return this.adUnitPath;
};

AdheseGateway.prototype.addTrackingPixel = function (uri) {
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

AdheseGateway.prototype.appendSyncIframe = function (options) {
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

AdheseGateway.prototype.syncUser = function (option) {
    this.appendSyncIframe({
        syncName: "dpgmedia",
        url: "https://user-sync.adhese.com/iframe/user_sync.html?account=dpgmedia"
    });
};

AdheseGateway.prototype.getConsentString = function () {
    var string = '';
    try {
        __tcfapi('getTCData', 2, (tcData, success) => { 
            if (success) { 
                string = tcData.tcString;
            }
        });        
    } catch (e) {
        if (document.cookie && -1 != document.cookie.indexOf("DPGconsent")) {
            var i, s, e = document.cookie.split(";");

            for (var n = 0; n < e.length; n++) {
                if (-1 != e[n].indexOf("DPGconsent")) {
                    2 <= (i = e[n].split("=")).length && (s = i[1]);
                    string = s;
                }
            }
        }        
    }
    return string;
};

AdheseGateway.prototype.createPrebidAdunitFromSlot = function (slot, adUnits, xtParam, tlParam, customParam) {
    var sizeFromAdunit = [
        [300, 250],[300, 600]
    ];

    try {
        var pos = slot['targeting']['slot']; // expected: "top--1"
        var mappingReference = this.sizeMapping.dfp.slots[pos]["sizeMapping"]; // expected: "top" 
        var sizeArray = this.sizeMapping.dfp.sizeMapping[mappingReference][this.viewPort]; // expected: [[728,90], [970,250], ...]
        if(sizeArray.length > 0) {
            sizeFromAdunit = sizeArray;
            var index = sizeFromAdunit.indexOf("fluid");
            if (index > -1) {
                sizeFromAdunit.splice(index, 1);
            }
        }
    } catch (e) {
        if(this.adhese_debug) {
            console.log(e);
        }
    }

    if (this.adhese_debug) {
        console.log('ADHESE: sizeFromAdunit:', sizeFromAdunit);
    }

    var adUnitPath = slot['adUnit'].split("/");
    var loc = adUnitPath[2];
    var formatViewport = this.viewPort;
    var format = slot['targeting']['pos'] + "_" + formatViewport;
    if (sizeFromAdunit.length > 1) {
        var prebidSlotCode = slot['domId'];
        var o = {
            code: prebidSlotCode,
            mediaTypes: {
                banner: {
                    sizes: sizeFromAdunit
                }
            },
            bids: [
                {
                    bidder: 'adhese',
                    params: {
                        account: 'dpgmedia',
                        location: loc,
                        format: format,
                        data: {
                            'dt': ['desktop'],
                            'tl': [tlParam],
                        }
                    }
                }
            ]
        };

        if (format.includes('layer1')) {
            o.mediaTypes.video = {
                context: 'outstream',
                playerSize: [[640, 360]],
                mimes: ["video/mp4"]
            }
            o.renderer = {
                url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
                render: function(bid) {
                    var config = {
                        showMute: true,
                        showVolume: true,
                        showProgressBar: true,
                        autoInitialSize: true, //auto resize to div width
                        allowFullscreen: true,
                        disableTopBar: false,
                        //enableInlineVideoForIos: true,
                        disableCollapse: true,
                        /*skippable: {
                            videoThreshold: 10,
                            videoOffset: 5,
                            skipLocation: 'top-right',
                            skipText: 'Video can be skipped in %%TIME%% seconds',
                            skipButtonText: 'skip video'
                        },*/
                        adText: 'Advertentie',
                        content: bid.vastXml,
                        frameworks: ["vpaid_1_0", "vpaid_2_0"],
                        playback_methods: ["auto_play_sound_off"],
                        player_height: bid.height,
                        player_width: bid.width
                    }
                    try {
                        var parentElement = document.getElementsByClassName('article__paragraph')[0];
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
                    } catch(e) {
                        //try again if player library didn't load yet. 
                        setTimeout(function(){
                            window.ANOutstreamVideo.renderAd({ targetId: 'adheseOutstreamDiv', rendererOptions: config, });
                        }, 300);
                    }
                }
            }
        }

        for (var c = 0; c < customParam.length; c++) {
            o.bids[0].params.data[customParam[c][0]] = customParam[c][1];
        }

        // add criteo bidders
        for (var d=0; d<sizeFromAdunit.length; d++) {
            try {
                var criteoParams = this.clientSideBiddderConfig.gelderlander.criteo[formatViewport][sizeFromAdunit[d].join('x')];
                if (criteoParams && criteoParams[0]) {
                    o.bids.push({
                        bidder: 'criteo',
                        params: {
                            zoneId: criteoParams[0]
                        }
                    });
                }
            } catch(e) {
                if (this.adhese_debug) {
                    console.log("ADHESE: criteo bidder: unsupported size");
                }                
            }            
        }        
        adUnits.push(o);
    }
    return adUnits;
};

AdheseGateway.prototype.renderOutstream = function (bid) {

};

AdheseGateway.prototype.createAdheseSlots = function (slot, adheseSlots, xtParam, tlParam, customParam) {
    var location = '';
    var format = '';
    var containerId = '';
    var lazyLoaded = '';    

    try {
        location = slot['adUnit'].split("/")[2];
        format = slot['targeting']['pos'] + "_" + this.viewPort;
        containerId = slot['domId'];
        lazyLoaded = slot['lazyLoaded'];    
    } catch (e) {
        console.log(e);
    }

    var o = {
        location: location,
        format: format,
        containerId: containerId,
        lazyLoaded: lazyLoaded
    };

    adheseSlots.push(o);
    return adheseSlots;
};


AdheseGateway.prototype.initialisePrebid = function (consentString, consentForAds) {
    var xtParam = '';
    var tlParam = 'none';
    var targetArray = [];
    var adUnits = [];
    var adheseSlots = [];
    var adUnitsToIgnore = 'regio1 regio2 regio3 rmidregio1';

    try {
        xtParam = consentString;
    } catch (e) {}

    try {
        if (consentForAds) tlParam = 'all';
    } catch (e) {
        if (this.adhese_debug) {
            console.log("ADHESE: no consent defined for dfp");
        }
        tlParam = 'all';
    }

    try {
        // contextual keywords
        var contextTags = [];
        if (this.dL[0].content.tags) {
            contextTags = this.dL[0].content.tags.split('|');
        }
        var value = '';
        for (var i = 0; i < contextTags.length; i++) {
            if (value.length > 0 && contextTags[i] && contextTags[i] != "") value += ',';
            value += contextTags[i];
        }

        var dpgTargeting = this.sizeMapping['dfp']['targeting'];

        // page category -- hier onderscheid top en sub category voorzien
        // sport.schaatsen >> hoofdcat: sport, subcat: schaatsen
        var cat = dpgTargeting['cat'];

        // category
        try {
            // targetArray.push(['pt', this.dL[0].page.type]);
            targetArray.push(['ca', dpgTargeting['cat']]);
        } catch (e) {}

        // section
        try {
            targetArray.push(['sc', dpgTargeting['cat'].split('.')[0]]);
        } catch (e) {}

        // subsection
        try {
            targetArray.push(['ss', dpgTargeting['cat'].split('.')[1]]);
        } catch (e) {}

        // topics/article keywords
        try {
            targetArray.push(['ct', dpgTargeting['top']]);
        } catch (e) {}
        
        // pay
        try {
            targetArray.push(['py', dpgTargeting['pay']]);
        } catch (e) {}

        // inread
        try {
            targetArray.push(['ir', JSON.stringify(dpgTargeting['inread'])]);
        } catch (e) {}

        // viewport
        targetArray.push(['vp', this.viewPort]);

        // device type
        targetArray.push(['dt', this.getDeviceType(this.viewPort)]);

        // pageType
        try {
            targetArray.push(['pt', dpgTargeting['pag']]);
        } catch (e) {}

        // cxense
        try {
            if (this.adhese_adserver && this.adhese_debug) dpgTargeting['cxsg'] = 'adserver_test';
            targetArray.push(['cx', dpgTargeting['cxsg']]);
        } catch (e) {}
        
        // cxense uid
        try {
            targetArray.push(['cu', dpgTargeting['cxid']]);
        } catch (e) {}

        // snowplow uid
        try {
            targetArray.push(['su', dpgTargeting['spid']]);
        } catch (e) {}

        // comp id (article id)
        try {
            targetArray.push(['ai', dpgTargeting['cid']]);
        } catch (e) {}

    } catch (e) {
        // console.log(e);
    }
    
    this.targetArray = targetArray;

    if (this.definedSlots) {
        for (var i = 0; i < this.definedSlots.length; i++) {
            if (adUnitsToIgnore.indexOf(this.definedSlots[i]['targeting']['pos'])==-1) {
                if (this.adhese_debug) {
                    console.log('ADHESE: Gateway added slot: ' + this.definedSlots[i]['adUnit'] + ' - ' + this.definedSlots[i]['targeting']['pos']);
                }
                adheseSlots = this.createAdheseSlots(this.definedSlots[i], adheseSlots, xtParam, tlParam, targetArray);
                adUnits = this.createPrebidAdunitFromSlot(this.definedSlots[i], adUnits, xtParam, tlParam, targetArray);
            } else if (this.adhese_debug) {
                console.log('ADHESE: Gateway ignoring slot: ' + this.definedSlots[i]['adUnit'] + ' - ' + this.definedSlots[i]['targeting']['pos']);
            }      
        }
    }

    var SETCONFIG = {
        consentManagement: {    
            gdpr: { 
                cmpApi: 'static',   
                allowAuctionWithoutConsent: true,  
                consentData: {  
                    getConsentData: {   
                        'gdprApplies': true,    
                        'hasGlobalScope': false,    
                        'consentData': consentString    
                    },  
                    getVendorConsents: {    
                        'gdprApplies': true,    
                        'hasGlobalScope': false,
                        'metadata': consentString
                    }   
                }   
            }   
        },
        enableSendAllBids: false,
        bidderSequence: "random",
        bidderTimeout: this.PREBID_TIMEOUT,
        priceGranularity: this.priceBucketConfig,
        userSync: {
            userIds: [{
              name: "id5Id",
              params: {
                  partner: 144             // change to the Partner Number you received from ID5
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
            syncsPerBidder: 10,
            filterSettings: {
                iframe: {
                    bidders: ['adhese'], // '*' means all bidders
                    filter: 'include'
                }
            },
        },
        currency: {
            "adServerCurrency": "EUR",
        },
        refererInfo: {
            referer: this.prebidRefererUrl
        }
    };

    var self = this;
    pbjs.bidderSettings = {
        adhese: {
            bidCpmAdjustment: function (bidCpm, bid) {
                // check for market instance
                if (bid.adhese.origin == 'APPNEXUS' && bid.adhese.originInstance == 'groupm') {
                    if (adhese_debug) {
                        console.log("ADHESE: bidCpmAdjustment for bid below");
                        console.log(bid);
                    };

                    var gpsMultipliers = {
                        desktop: {
                            '120x600': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        desktop: {
                            '160x600': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        desktop: {
                            '1800x1000': {
                                '654': 1.1,
                                '850': 1.2,
                                '1112': 1.5,
                                '785': 1.1,
                                '1020': 1.2,
                                '1334': 1.5
                            }
                        },
                        desktop: {
                            '300x250': {
                                '142': 1.1,
                                '184': 1.2,
                                '241': 1.5,
                                '170': 1.1,
                                '221': 1.2,
                                '289': 1.5
                            }
                        },
                        desktop: {
                            '300x600': {
                                '327': 1.1,
                                '425': 1.2,
                                '556': 1.5,
                                '392': 1.1,
                                '510': 1.2,
                                '667': 1.5
                            }
                        },
                        desktop: {
                            '336x280': {
                                '142': 1.1,
                                '184': 1.2,
                                '241': 1.5,
                                '170': 1.1,
                                '221': 1.2,
                                '289': 1.5
                            }
                        },
                        desktop: {
                            '728x90': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        desktop: {
                            '970x250': {
                                '382': 1.1,
                                '496': 1.2,
                                '649': 1.5,
                                '458': 1.1,
                                '595': 1.2,
                                '778': 1.5
                            }
                        },
                        mobile: {
                            '300x250': {
                                '120': 1.1,
                                '156': 1.2,
                                '204': 1.5,
                                '144': 1.1,
                                '187': 1.2,
                                '245': 1.5
                            }
                        },
                        mobile: {
                            '300x600': {
                                '327': 1.1,
                                '425': 1.2,
                                '556': 1.5,
                                '392': 1.1,
                                '510': 1.2,
                                '667': 1.5
                            }
                        },
                        mobile: {
                            '320x100': {
                                '087': 1.1,
                                '113': 1.2,
                                '148': 1.5,
                                '105': 1.1,
                                '136': 1.2,
                                '178': 1.5
                            }
                        },
                        mobile: {
                            '320x240': {
                                '120': 1.1,
                                '156': 1.2,
                                '204': 1.5,
                                '144': 1.1,
                                '187': 1.2,
                                '245': 1.5
                            }
                        },
                        mobile: {
                            '320x480': {
                                '196': 1.1,
                                '255': 1.2,
                                '334': 1.5,
                                '235': 1.1,
                                '306': 1.2,
                                '400': 1.5
                            }
                        },
                        mobile: {
                            '320x50': {
                                '055': 1.1,
                                '071': 1.2,
                                '093': 1.5,
                                '065': 1.1,
                                '085': 1.2,
                                '122': 1.5
                            }
                        },
                        mobile: {
                            '320x500': {
                                '196': 1.1,
                                '255': 1.2,
                                '334': 1.5,
                                '235': 1.1,
                                '306': 1.2,
                                '400': 1.5
                            }
                        },
                        tablet: {
                            '120x600': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        tablet: {
                            '160x600': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        tablet: {
                            '1800x1000': {
                                '654': 1.1,
                                '850': 1.2,
                                '1112': 1.5,
                                '785': 1.1,
                                '1020': 1.2,
                                '1334': 1.5
                            }
                        },
                        tablet: {
                            '300x250': {
                                '142': 1.1,
                                '184': 1.2,
                                '241': 1.5,
                                '170': 1.1,
                                '221': 1.2,
                                '289': 1.5
                            }
                        },
                        tablet: {
                            '300x600': {
                                '327': 1.1,
                                '425': 1.2,
                                '556': 1.5,
                                '392': 1.1,
                                '510': 1.2,
                                '667': 1.5
                            }
                        },
                        tablet: {
                            '336x280': {
                                '142': 1.1,
                                '184': 1.2,
                                '241': 1.5,
                                '170': 1.1,
                                '221': 1.2,
                                '289': 1.5
                            }
                        },
                        tablet: {
                            '728x90': {
                                '153': 1.1,
                                '198': 1.2,
                                '259': 1.5,
                                '183': 1.1,
                                '238': 1.2,
                                '311': 1.5
                            }
                        },
                        tablet: {
                            '970x250': {
                                '382': 1.1,
                                '496': 1.2,
                                '649': 1.5,
                                '458': 1.1,
                                '595': 1.2,
                                '778': 1.5
                            }
                        }
                    };

                    if (adhese_debug) {
                        console.log('ADHESE: get gps multiplier for ' + self.getDeviceType() + '.' + bid.width + 'x' + bid.height + '.' + Math.round(bid.cpm * 100));
                        console.log('ADHESE: multiplier of ' + gpsMultipliers[self.getDeviceType()][bid.width + 'x' + bid.height][Math.round(bidCpm * 100)] + ' will be applied to bid.cpm');
                    }
                    var m = gpsMultipliers[self.getDeviceType()][bid.width + 'x' + bid.height][Math.round(bid.originalCpm * 100)];
                    if (m) return bidCpm * m;
                    return bidCpm;
                }
            }
        }
    }

    this.pbjs.que.push(function() {
        self.pbjs.addAdUnits(adUnits);
        self.pbjs.setConfig(SETCONFIG);
        if (!self.adhese_adserver && consentForAds) {
            //notify listeners we're ready to move
            window.dispatchEvent(new CustomEvent('all', {}));
            if (self.adhese_debug) console.log("ADHESE: dispatched event adheserequestbids");
            self.pbjs.requestBids({
                bidsBackHandler: function(bids) {
                    self.initGoogleAdManager(bids, self);
                },
                timeout: self.PREBID_TIMEOUT
            });
        } else {
            self.adheseSlots = adheseSlots;
            if (self.adhese_debug) console.log('ADHESE: cancel prebid, calling adhese ad server. AdheseSlots:');
            self.initAdhese(self.adheseSlots)
        }
    });
};

AdheseGateway.prototype.initAdhese = function(t) {
    console.log("ADHESE: initializing adhese ad server");
    if(this.adhese_debug) {
        console.log('ADHESE: destroy google slots')
        window.googletag.destroySlots();
    }
    //Adhese SDK is loaded from prebid.js file hosted by DPG
    //this.loadAdheseSDK();
    try {
        var adhese = new Adhese();

        adhese.init({
            debug: true,
            account: "dpgmedia",
            host: "https://ads-dpgmedia.adhese.com/",
            location: '',
            safeframe: true,
            safeframeContainerID: "slotName",
            previewHost: "https://dpgmedia-preview.adhese.org"
        });

        if(this.consentForAds) adhese.registerRequestParameter('tl', 'none');
        if(this.viewPort) adhese.registerRequestParameter('vp',this.viewPort);

        for (var c = 0; c < this.targetArray.length; c++) {
            try {
                adhese.registerRequestParameter(this.targetArray[c][0], this.targetArray[c][1]);  
            } catch (e) {
                if(this.adhese_debug) console.log('failed to add target from targetArray', e);
            }
        }

        var ads = new Array();
        
        for (var x in t) {
            console.info(t[x]);
            ads.push(adhese.tag(t[x].format, {
                'location': t[x].location,
                'containerId': t[x].containerId
            }));
            t[x].slotCode = t[x].location + '-' + t[x].format;
        }
        
        var adUri = adhese.getMultipleRequestUri(ads, {
            type: "json"
        });
        
        var response = AdheseAjax.request({
            url: adUri,
            method: "get",
            json: true
        }).done(function(results) {
            adhese.safeframe.addPositions(results);
            if(this.adhese_debug) console.info(adhese.safeframe);
            
            for (var x in results) {
                var ad = results[x];
                console.log(ad);
                
                for ( var c in t ) {
                    if ( ad.slotName == t[c].slotCode ) {                            
                        var container = document.getElementById(t[c].containerId);
                        if ( container ) {
                            console.info (container);
                            //container.style.outline='1px red solid';
                            container.style.marginBottom = '10px';
                            container.style.display='block';
                            container.parentElement.style.display='block';
                            var con = document.createElement('div');
                            con.id = ad.slotName;
                            container.appendChild(con);
                            adhese.safeframe.render(ad.slotName);
                        }
                    } 
                }
            }
        });
    } catch (e) {
        console.error(e);
    }        
};

/**
 * move adserverTargeting to bidderSettings
 * http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings
 * 
 * a setting for criteo with one target, saferframe = on
 * function that determines if safeframe is on for adhese
 */

AdheseGateway.prototype.initGoogleAdManager = function (bids, self) {
    // adjust bid sizes for special formats
    // set GAM parameter "safeframe=on|off"
    var noSafeframeSizes = [
        {w:1800,h:1000},
        {w:1800,h:200},
        {w:970,h:1000},
        {w:320,h:240},
        {w:320,h:500},
        {w:320,h:400},
        {w:320,h:480}
    ];
    // blocked creatives
    var blockedAdvertisers = {
        rubicon: ['3571852'],
        improve: ['3729']
    };

    for (var i in bids) {
        for (var j in bids[i].bids) {
            var safeframe = true;
            var bid = bids[i].bids[j];
            // check for use of safeframe
            for (var k=0;k<noSafeframeSizes.length;k++) {
                if(noSafeframeSizes[k].w==bid.width && noSafeframeSizes[k].h==bid.height) {
                    safeframe = false;
                    break;
                }
            }
            // if we have a deal, safeframe is not needed
            if (safeframe && bid.dealId!="") {
                safeframe = false;
            }

            // if(bid.bidder == 'criteo') {
            //     safeframe = false;
            // }

            //adjust sizes for some formats
            if (bid.width == 1800 && bid.height == 1000) {
                bid.width = 970;
                bid.height = 120;
            } else if (bid.width == 1800 && bid.height == 200) {
                bid.width = 970;
                bid.height = 110;
            } else if (bid.width == 970 && bid.height == 1000) {
                bid.width = 970;
                bid.height = 100;
            }
            try {
                bid.adserverTargeting.safeframe = (safeframe?"on":"off");
            } catch(e) {}

            try {
                // extra targeting for debugging in gT console and gam
                if (bid.adhese.originData.seatbid[0].seat) bid.adserverTargeting.adh_seat = bid.adhese.originData.seatbid[0].seat;
                else bid.adserverTargeting.adh_seat = "";
                if (bid.adhese.originData.seatbid[0].buyer) bid.adserverTargeting.adh_buyer = bid.adhese.originData.seatbid[0].buyer;
                else bid.adserverTargeting.adh_buyer = "";
                bid.adserverTargeting.adh_crid = bid.creativeId;
                bid.adserverTargeting.adh_dealid = bid.dealId;
                bid.adserverTargeting.adh_market = bid.adhese.origin + (bid.adhese.originInstance!=""?"-" + bid.adhese.originInstance:"");
            } catch(e) {}
            
            try {
                if (bid.mediaType == 'video' && bid.adUnitCode.includes('layer--1')) bid.adserverTargeting.adh_outstream = 'true';
            } catch (e) {}
            try {
                //check for blocked creatives
                var bA = blockedAdvertisers[bid.adserverTargeting.adh_market];
                if (bA && bA.indexOf(bid.creativeId)>-1) {
                    bid.cpm = 0;
                    if (this.adhese_debug) console.log("ADHESE: discarded bid because creative is blocked ", bid);
                }
            } catch(e) {}
            
            // check for floors, if below, discard bid
            if (bid.bidder == 'criteo') {
                var bidSize = bid.width + 'x' + bid.height;
                var floor = this.clientSideBiddderConfig.gelderlander.floors[this.viewPort][bidSize][0];
                if (floor > bid.cpm) {
                    bid.cpm = 0;
                    if (this.adhese_debug) console.log("ADHESE: discarded bid, below the floor", bid);
                }
            }
        }
    }

    if (self.pbjs.initGoogleAdManagerSet) return;
    self.pbjs.initGoogleAdManagerSet = true;
    self.gT.cmd.push(function () {
        self.pbjs.setTargetingForGPTAsync && self.pbjs.setTargetingForGPTAsync();
    });
    //notify listeners we're done
    window.dispatchEvent(new CustomEvent('adhesebidscollected', {}));
    if (this.adhese_debug) console.log("ADHESE: dispatched event adhesebidscollected");
};

AdheseGateway.prototype.defineAdUnits = function () {
    if (this.adhese_debug) console.log("ADHESE: version 202004201006");

    //notify listeners we're ready to move
    window.dispatchEvent(new CustomEvent('adhesemakeadunits', {}));
    if (this.adhese_debug) console.log("ADHESE: dispatched event adhesemakeadunits");

    this.viewPort = this.sizeMapping['dfp']['targeting']['screen'];

    if (this.consentForAds) {
        this.syncUser();
    }

    try {
        this.definedSlots = this.definedSlots = window.advert.getSlots();
        if (this.definedSlots) this.initialisePrebid(this.getConsentString(), this.consentForAds);
    } catch (e) {
        if (this.adhese_debug) {
            console.log("ADHESE: window.advert.getSlots() not found, try again");
            console.log(e);
        }
        try {
            setTimeout(function(){
                this.definedSlots = this.definedSlots = window.advert.getSlots();
                if (this.definedSlots) this.initialisePrebid(this.getConsentString(), this.consentForAds);                    
            }, 500);
        } catch (e) {
            if(this.adhese_debug) {
                console.log('ADHESE: failed to get slots from window.advert.getSlots()');
            }
        }
    }
};

window.AdheseGateway = AdheseGateway;
