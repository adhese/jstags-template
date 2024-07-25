// set global variables, if they are not set
var agw = agw || {};
var pbjs = pbjs || {};
var googletag = googletag || {};
agw.adUnits = agw.adUnits || {};
agw.debug = false;


agw.prebidBuckets = {
    "buckets": 
    [{
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
    }]
};

agw.prebidConfig = {
    bidderSequence: "random",
    enableSendAllBids: false,
    bidderTimeout: 1500,
    debug: agw.debug,
    priceGranularity: agw.prebidBuckets,
    userSync: {
        syncEnabled: false
    },
    currency: {
        adServerCurrency: "EUR"
    },
    refererInfo: {
        referer: window.location.href
    }
};

agw.bidsBackHandler = function(slot) {
    if (agw.debug) console.log('bidsBackHandler called for slot', slot.getSlotElementId());
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
            if (agw.debug) console.log(pbjs.getAdserverTargetingForAdUnitCode([slot.getSlotElementId()]));
            googletag.pubads().refresh([slot]);
        });
    });
};

agw.findBiggestSize = function(sizes) {
    // because adhese lacks size support we need to find the biggest size and use that as format. We'll then assign smaller sizes as additional.
    // this is not ideal, but it's the best we can do for now.
    var sizePriority = ['1800x1000', '970x1000', '970x250', '970x90', '728x90', '300x600','320x500','320x400', '320x240', '300x250', '160x600', '120x600','320x100', '320x50', '300x100', '300x50', '320x480', '1x1', '1x2'];
    var biggestSize = '';
    for (var c = 0; c < sizePriority.length; c++) {
        for (var d = 0; d < sizes.length; d++) {
            if (Array.isArray(sizes[d]) && sizePriority[c] == sizes[d].join('x')) {
                biggestSize = sizes[d];
                break;
            }
        }
        if (biggestSize != '') {
            break;
        }
    }
    return biggestSize.join('x');
}

agw.getSlotSizes = function(slot) {
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

agw.createPrebidAdunitFromSlot = function(slot, options, data) {    
    var sizes = agw.getSlotSizes(slot);
    var format = agw.findBiggestSize(sizes);
    var data = data || {};
    var loc = (slot.getAdUnitPath().replace(/,[^\/]*/g,'').replace(/\//g, '_') + '_').toUpperCase();
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
                    account: 'adswag',
                    location: loc,
                    format: format,
                    data: data
                }
            }
        ]
    };
    return o;
};

agw.requestBid = function(slot, options, data) {
    //we want to be able to switch between calling GPT via Prebid and directly rendering the ad. 
    if (options.renderType == 'gam') {
        if (agw.debug) console.log('adding slot', slot.getSlotElementId(), 'to adUnits');
        agw.adUnits[slot.getSlotElementId()] = {};
        agw.adUnits[slot.getSlotElementId()]['prebidAdUnit'] = agw.createPrebidAdunitFromSlot(slot, options, data)
        agw.adUnits[slot.getSlotElementId()]['bidRequested'] = false;
        var adUnits = [];
        for (var key in agw.adUnits) {
            if (agw.adUnits[key]['bidRequested'] == false) {
                adUnits.push(agw.adUnits[key]['prebidAdUnit']);
            }
        }
        pbjs.que.push(function() {
            //pbjs.adUnits = adUnits;
            pbjs.addAdUnits(adUnits);
            pbjs.setConfig(agw.prebidConfig);
            agw.adUnits[slot.getSlotElementId()]['bidRequested'] = true;
            pbjs.requestBids({
                adUnitCodes: [slot.getSlotElementId()],
                bidsBackHandler: agw.bidsBackHandler.bind(this, slot)
            });
        });
    } else if (options.renderType == 'direct') {
        agw.initAdhese(slot, options, data);
    }
};



agw.initAdhese = function(slot, options, data) {
    var debug = false;
    if (window.location.href.includes('adhesegw')) debug = true;

    var adhese = new Adhese();
    var ads = new Array();
    var adsToLazyLoad = {};
    adhese.init({
        debug: agw.debug,
        poolHost: 'https://pool-adswag.adhese.com/',
        account: "adswag",
        host: "https://ads-adswag.adhese.com/",
        location: '',
        safeframe: true,
        safeframeContainerID: "slotName",
        previewHost: "https://adswag-preview.adhese.org",
        viewabilityTracking: true
    });
    
    var centerElement = function(element) {
        if (element) {
            element.style.margin = '0 auto';
        }
    };

    var determineRenderType = function(ad) {
        if (agw.debug) console.log('determine render type for', ad);
        //var adMarkup = (ad.body != "") ? ad.body : ad.tag;
        //determine render type based on response
        //if (ad.height == '1000' || (ad.width == '1' && ad.height == '2') || (ad.width == '320' && ad.height == '400') || (ad.width == '1' && ad.height == '1') || (ad.width == '500' && ad.height == '200')) {
            return 'friendlyIframe';
        // } else if (adMarkup.includes('weborama')){
        //     return 'friendlyIframe';
        // } else {
        //     return 'safeFrame';
        // }
    };

    var renderInFriendlyIframe = function(ad) {
        if (agw.debug) console.log('render in friendly iframe', ad);
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
        centerElement(frameContainer);
    };

    var lazyLoadAds = function(slots) {
        var ads = adsToLazyLoad;
        var checkAds = function() {
            for (ad in ads) {
                if (adhese.helper.adhElementInViewportWithPercentage(ad ,1,1,1) && !ads[ad].rendered) { //if container is 1px in view and not yet rendered, render.
                    if (agw.debug) console.log(ads[ad].slotName, 'in view, begin to render');
                    var renderType = determineRenderType(ads[ad]);
                    if (renderType == 'friendlyIframe') {
                        renderInFriendlyIframe(ads[ad]);                  
                    } else {
                        adhese.safeframe.render(ads[ad].slotName); //render ad 
                        centerElement(document.getElementById("sf_pos_rel_el_" + ads[ad].slotName));
                    }
                    ads[ad].rendered = true;
                }
            }
        };
        window.addEventListener("scroll", checkAds);
        checkAds(); //check once to see if there are slots already in view
    };

    var createContainerAndCheckForRender = function(ad, adheseSlot) {
        if (agw.debug) console.log('create container and check for render', ad, adheseSlot);

        var slotCode = adheseSlot.slotCode;
        if ( ad.slotName == slotCode ) {
            var container = document.getElementById(adheseSlot.divId);
            if (container) {
                container.style.marginBottom = '10px';
                container.style.display='block';
                container.parentElement.style.display='block';
                var con = document.createElement('div');
                con.id = ad.slotName;
                container.appendChild(con);
                if (adheseSlot.lazyLoaded) { 
                    //if ad is to be lazyloaded, add to lazyload object
                    adsToLazyLoad[ad.slotName] = ad; 
                    adsToLazyLoad[ad.slotName].rendered = false;
                } else {
                    //if not lazyloaded, start render process
                    var renderType = determineRenderType(ad);
                    if (renderType == 'friendlyIframe') {
                        renderInFriendlyIframe(ad);
                    } else {
                        adhese.safeframe.render(ad.slotName); //if not lazyloaded, render instantly
                        centerElement(document.getElementById("sf_pos_rel_el_" + ad.slotName));
                    }
                }
            }
        }
    };

    var getMediaType = function(ad) {
        var tag = ad.tag ? ad.tag : ad.body;
        if (tag.includes('<VAST')) {
            return 'video';
        } else {
            return 'banner';
        }
    };

    
    var requestAdheseAds = function(slot, options, data) {
        if (agw.debug) console.log('requestAdheseAds', slot, options, data);
        
        var adheseSlot = {};
        adheseSlot.divId =slot.getSlotElementId();
        adheseSlot.lazyLoaded = true;
        adheseSlot.location = (slot.getAdUnitPath().replace(/,[^\/]*/g,'').replace(/\//g, '_') + '_').toUpperCase();
        adheseSlot.mediaTypes = ["banner"];
        adheseSlot.size = agw.findBiggestSize(agw.getSlotSizes(slot));
        adheseSlot.slotCode = adheseSlot.location + '-' + adheseSlot.size;
        
        ads.push(adhese.tag(adheseSlot.size, {
            'location': adheseSlot.location,
            'containerId': adheseSlot.divId
        }));                
    
        
        if (agw.debug) console.log('Requesting ads for:', ads);
        var adUri = adhese.getMultipleRequestUri(ads, {
            type: "json"
        });

        for (p in adhese.previewFormats) {
            for (var x = 0; x < ads.length; x++) {
                if (p == ads[x].format) {
                    var previewAd = ads[x];
                    var response = AdheseAjax.request({
                        url: ads[x].swfSrc,
                        method: "get",
                        json: true
                    }).done(function(result) {                      
                        result[0].slotName = previewAd.options.slotName;
                        result[0].viewableImpressionCounter = '';
                        result[0].tag = result[0].tag.replace(/\[adheseReplace.*?\]/g,'').replace(/\[adheseLogID\]/g,'');
                        result[0].body = result[0].body.replace(/\[adheseReplace.*?\]/g,'').replace(/\[adheseLogID\]/g,'');
                        adhese.safeframe.addPositions(result);
                        createContainerAndCheckForRender(result[0], configuredSlots);
                    });
                }
            }
        }

        var response = AdheseAjax.request({
            url: adUri,
            method: "get",
            json: true
        }).done(function(results) {
            
            // if there are no results, refresh the ad
            if (results.length == 0) {
                if (options.debug) ('no results, refreshing ad');
                googletag.pubads().refresh([slot]);
                return;
            }

            if (agw.debug) console.log('Received ads for:', results);
            //if ad is from adserver, add impression tracker. 
            for (var i in results) {
                var ad = results[i];
                if (ad.origin == 'JERLICIA' && getMediaType(ad) == 'banner') {
                    var impressionTracker = "<img src='" + ad.trackedImpressionCounter + "' border='0' width='1' height='1' alt='' style='display:none'/>";
                    if (ad.body && ad.body != "" && ad.body != "<ADHESE_BODY>") {
                        ad.body = ad.body + impressionTracker;
                    } else {
                        ad.tag = ad.tag + impressionTracker;
                    }
                }
            };

            adhese.safeframe.addPositions(results);
            for (var x in results) {
                var ad = results[x];
                var tag = ad.tag ? ad.tag : ad.body;
                if (getMediaType(ad) == 'video') {
                    //do something for video
                } else {
                    createContainerAndCheckForRender(ad, adheseSlot);
                }
            };
            lazyLoadAds(adheseSlot); //start rendering ads in lazyload queue
        });
    };
   //registerTargets();
    requestAdheseAds(slot, options, data);
};

agw.requestAds = function(slots, options, data) {
    // set default options
    var defaultOptions = {
        'timeout': 1500,
        'renderType' : 'direct', // options: gam, direct
        'currency': 'EUR',
        'debug': false
    };

    var defaultData = {
        'tl': 'none',
    };

    // merge options with default options, where options have priority
    options = Object.assign(defaultOptions, options);
    data = Object.assign(defaultData, data);
    if (options.debug) agw.debug = true;
    if (agw.debug) console.log('requestAds', slots, options, data);

    // if multiple slots are requested at once, we split the requests up for now to prevent duplicate slots. 
    // We might want to bundle them at some point to reduce the number of requests.
    if (slots.length == 0) return;
    if (slots.length == 1) {
        agw.requestBid(slots[0], options, data);
    } else {
        slots = slots.forEach(slot => {
            agw.requestBid(slot, options, data);
        });
    }
};