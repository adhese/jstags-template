function AdheseGateway(gT,dL,pbjs,sizeMapping) {
    this.gT = gT;
    this.dL = dL;
    this.pbjs = pbjs;
    this.sizeMapping = sizeMapping;
    if (this.adhese_debug) {
        console.log('ADHESE: sizeMapping:', sizeMapping);
    }
    this.consentForAds = true;
    this.viewPort = "large";
    this.adUnits = [];
    this.definedSlots = undefined;
    this.adhese_debug = window.location.href.includes('adhese_debug=true');
    this.PREBID_TIMEOUT = 2000;
    this.prebidRefererUrl = window.location.href;
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
    if (document.cookie && -1 != document.cookie.indexOf("DPGconsent")) {
        var i, s, e = document.cookie.split(";");

        for (var n = 0; n < e.length; n++) {
            if (-1 != e[n].indexOf("DPGconsent")) {
                2 <= (i = e[n].split("=")).length && (s = i[1]);
                return s;
            }
        }
    }
};

AdheseGateway.prototype.createPrebidAdunitFromSlot = function (slot, adUnits, xtParam, tlParam, customParam) {
    var sizeFromAdunit = [
        [300, 250],[300, 600]
    ];

    try {
        var pos = slot.getSlotElementId().split('_')[0]; // expected: "top--1"
        var mappingReference = this.sizeMapping.dfp.slots[pos]["sizeMapping"]; // expected: "top" 
        var sizeArray = this.sizeMapping.dfp.sizeMapping[mappingReference][this.viewPort]; // expected: [[728,90], [970,250], ...]
        if(sizeArray.length > 0) {
            sizeFromAdunit = sizeArray
        }
    } catch (e) {
        if(this.adhese_debug) {
            console.log(e);
        }
    }

    if (this.adhese_debug) {
        console.log('ADHESE: sizeFromAdunit:', sizeFromAdunit);
    }

    var adUnitPath = slot.getAdUnitPath().split("/");
    var loc = adUnitPath[2];
    var formatViewport = this.viewPort;
    var format = slot.getTargeting('pos') + "_" + formatViewport;
    if (sizeFromAdunit.length > 1) {
        var prebidSlotCode = slot.getSlotElementId();
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

        for (var c = 0; c < customParam.length; c++) {
            o.bids[0].params.data[customParam[c][0]] = customParam[c][1];
        }

        // add criteo bidders
        for (var d=0; d<sizeFromAdunit.length; d++) {
            var criteoParams = this.clientSideBiddderConfig.gelderlander.criteo[formatViewport][sizeFromAdunit[d].join('x')];
            if (criteoParams && criteoParams[0]) {
                o.bids.push({
                    bidder: 'criteo',
                    params: {
                        zoneId: criteoParams[0]
                    }
                });
            }
        }        

        adUnits.push(o);
    }
    return adUnits;
};

AdheseGateway.prototype.initialisePrebid = function (consentString, consentForAds) {
    var xtParam = '';
    var tlParam = 'none';
    var targetArray = [];
    var adUnits = [];
    var adUnitsToIgnore = 'regio1 regio2 regio3 rmidregio1 layer1';

    try {
        xtParam = consentString;
    } catch (e) {}

    try {
        if (consentForAds) tlParam = 'all';
    } catch (e) {
        if (this.adhese_debug) {
            console.log("ADHESE: no consent defined for dfp")
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
        // page category -- hier onderscheid top en sub category voorzien
        // sport.schaatsen >> hoofdcat: sport, subcat: schaatsen
        var cat = this.gT.pubads().getTargeting('cat');

        // category
        try {
            // targetArray.push(['pt', this.dL[0].page.type]);
            targetArray.push(['ca', cat[0]]);
        } catch (e) {}

        // section
        try {
            targetArray.push(['sc', [cat[0].split('.')[0]]]);
        } catch (e) {}

        // subsection
        try {
            targetArray.push(['ss', [cat[0].split('.')[1]]]);
        } catch (e) {}

        // topics/article keywords
        try {
            targetArray.push(['ct', this.gT.pubads().getTargeting('top')]);
        } catch (e) {}
        
        // pay
        try {
            targetArray.push(['py', this.gT.pubads().getTargeting('pay')]);
        } catch (e) {}

        // inread
        try {
            targetArray.push(['ir', this.gT.pubads().getTargeting('inread')]);
        } catch (e) {}

        // viewport
        targetArray.push(['vp', this.viewPort]);

        // device type
        targetArray.push(['dt', this.getDeviceType(this.viewPort)]);

        // pageType
        try {
            targetArray.push(['pt', this.gT.pubads().getTargeting('pag')]);
        } catch (e) {}

        // cxense
        try {
            targetArray.push(['cx', this.gT.pubads().getTargeting('cxsg')]);
        } catch (e) {}
        
        // cxense uid
        try {
            targetArray.push(['cu', this.gT.pubads().getTargeting('cxid')]);
        } catch (e) {}

        // snowplow uid
        try {
            targetArray.push(['su', this.gT.pubads().getTargeting('spid')]);
        } catch (e) {}

        // comp id (article id)
        try {
            targetArray.push(['ai', this.gT.pubads().getTargeting('cid')]);
        } catch (e) {}

    } catch (e) {
        // console.log(e);
    }

    if (this.definedSlots) {
        for (var i = 0; i < this.definedSlots.length; i++) {
            if (adUnitsToIgnore.indexOf(this.definedSlots[i].getTargeting('pos'))==-1) {
                if (this.adhese_debug) {
                    console.log('ADHESE: Gateway added slot: ' + this.definedSlots[i].getAdUnitPath() + ' - ' + this.definedSlots[i].getTargeting('pos'));
                }
                adUnits = this.createPrebidAdunitFromSlot(this.definedSlots[i], adUnits, xtParam, tlParam, targetArray);
            } else if (this.adhese_debug) {
                console.log('ADHESE: Gateway ignoring slot: ' + this.definedSlots[i].getAdUnitPath() + ' - ' + this.definedSlots[i].getTargeting('pos'));
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
    this.pbjs.que.push(function () {
        self.pbjs.addAdUnits(adUnits);
        self.pbjs.setConfig(SETCONFIG);
        if (consentForAds) {
            //notify listeners we're ready to move
            window.dispatchEvent(new CustomEvent('all', {}));
            if (self.adhese_debug) console.log("ADHESE: dispatched event adheserequestbids");

            if (self.adhese_debug) {
                console.log('ADHESE: Requesting bids')
            }

            self.pbjs.requestBids({
                bidsBackHandler: function(bids) {
                    self.initAdserver(bids, self);
                },
                timeout: self.PREBID_TIMEOUT
            });
        }
    });
};

AdheseGateway.prototype.initAdserver = function (bids, self) {
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
                bid.adserverTargeting.adh_market = (bid.adhese.originData.seatbid[0].bid[0].ext.rp!=undefined?"rubicon":(bid.adhese.originData.seatbid[0].bid[0].ext.appnexus!=undefined?"appnexus":"improve"));
            } catch(e) {}
            
            try {
                //check for blocked creatives
                var bA = blockedAdvertisers[bid.adserverTargeting.adh_market];
                if (bA && bA.indexOf(bid.creativeId)>-1) {
                    bid.cpm = 0;
                    if (this.adhese_debug) console.log("ADHESE: discarded bid because creative is blocked ", bid);
                }
            } catch(e) {}
            
            // check for floors, if below, discard bid
            if (bid.bidder = 'criteo') {
                var bidSize = bid.width + 'x' + bid.height;
                var floor = this.clientSideBiddderConfig.gelderlander.floors[this.viewPort][bidSize][0];
                if (floor > bid.cpm) {
                    bid.cpm = 0;
                    if (this.adhese_debug) console.log("ADHESE: discarded bid, below the floor", bid);
                }
            }
        }
    }

    if (self.pbjs.initAdserverSet) return;
    self.pbjs.initAdserverSet = true;
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

    this.viewPort = this.gT.pubads().getTargeting("screen")[0];

    if (this.consentForAds) {
        this.syncUser();
    }

    try {
        this.definedSlots = this.gT.pubads().getSlots();
        if (this.definedSlots) this.initialisePrebid(this.getConsentString(), this.consentForAds);
    } catch (e) {
        if (this.adhese_debug) {
            console.log("ADHESE: defining adunits based on googletag.getSlots() failed");
            console.log(e);
        }
    }
};

window.AdheseGateway = AdheseGateway;