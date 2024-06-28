function initAdhese() {
    var debug = false;
    if (window.location.href.includes('adhesegw')) debug = true;

    var adhese = new Adhese();
    var ads = new Array();
    var adsToLazyLoad = {};



    adhese.init({
        debug: debug,
        poolHost: 'https://pool-massarius.adhese.com/',
        account: "massarius",
        host: "https://ads-massarius.adhese.com/",
        location: '',
        safeframe: true,
        safeframeContainerID: "slotName",
        previewHost: "https://massarius-preview.adhese.org",
        viewabilityTracking: true
    });

     var registerTargets = function() {
        var targetArray = []; //create target array with adhese prefix
        var w = window.location.href;
        try {
           // targetArray.push(['ab', ['sometarget']]);
             //register targets
            for (var c = 0; c < targetArray.length; c++) {
                adhese.registerRequestParameter(targetArray[c][0], targetArray[c][1]);
            };     
        } catch (e) {
            if(debug) console.log('error adding target(s)', e);
        };
    };
    
    var centerElement = function(element) {
        if (element) {
            element.style.margin = '0 auto';
        }
    }
    var determineRenderType = function(ad) {
        if(debug) console.log('determine render type for', ad);
        var adMarkup = (ad.body != "") ? ad.body : ad.tag;
        //determine render type based on response
        if (ad.height == '1000' || (ad.width == '1' && ad.height == '2') || (ad.width == '320' && ad.height == '400') || (ad.width == '1' && ad.height == '1') || (ad.width == '500' && ad.height == '200')) {
            return 'friendlyIframe';
        } else if (adMarkup.includes('weborama')){
            return 'friendlyIframe';
        } else {
            return 'safeFrame';
        }
    };

    var renderInFriendlyIframe = function(ad) {
        if(debug) console.log('render in friendly iframe', ad);
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
                    if (debug) console.log(ads[ad].slotName, 'in view, begin to render');
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

    var createContainerAndCheckForRender = function(ad, slots) {
        var configuredSlots = slots;
        for ( var c in configuredSlots ) {
            var slotCode = configuredSlots[c].slotCode;
            if ( ad.slotName == slotCode ) {
                var container = document.getElementById(configuredSlots[c].divId);
                if (container) {
                    container.style.marginBottom = '10px';
                    container.style.display='block';
                    container.parentElement.style.display='block';
                    var con = document.createElement('div');
                    con.id = ad.slotName;
                    container.appendChild(con);
                    if (configuredSlots[c].lazyLoaded) { 
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

    var findBiggestSize = function(sizes) {
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
    
    var requestAds = function() {

        var configuredSlots = {};
        //translate gamPositions to adhese structure
        for (var x in gamPositions) {
            var slot = gamPositions[x];
            var adheseSlot = {};
            adheseSlot.divId = slot.id;
            adheseSlot.lazyLoaded = true;
            adheseSlot.location = slot.gamName.toUpperCase().replace(/-/g, '_');
            adheseSlot.mediaTypes = ["banner"];
            adheseSlot.size = findBiggestSize(slot.sizes.deviceSizes);
            adheseSlot.slotCode = slot.gamName + '-' + adheseSlot.size;
            configuredSlots[slot.id] = adheseSlot;
        }

        if (configuredSlots.length == 0) return;

        //keep track of added slots to make sure we don't have duplicates
        var addedSlots = [];

        //create adhese slots from configured slots
        for (var x in configuredSlots) {
            var location = configuredSlots[x].location;
            var slotCode = location + '-' + configuredSlots[x].size;
            configuredSlots[x].slotCode = slotCode;
            var size = configuredSlots[x].size;

            //prevent duplicate slot errors
            if (!addedSlots.includes(slotCode)) {
                ads.push(adhese.tag(size, {
                    'location': location,
                    'containerId': configuredSlots[x].divId
                }));                
            } else {
                console.log('Adhese: Not processing duplicate slot. please make sure all location/size combinations are unique:', configuredSlots[x])
            };
            addedSlots.push(slotCode);
        };
        
        if (debug) console.log('Requesting ads for:', ads);
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
            if (debug) console.log('Received ads for:', results);

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
                    createContainerAndCheckForRender(ad, configuredSlots);
                }
            };
            lazyLoadAds(configuredSlots); //start rendering ads in lazyload queue
        });
    };
    registerTargets();
    requestAds();
};

initAdhese();