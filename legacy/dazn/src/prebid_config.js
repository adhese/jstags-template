
function getScreenWidth() {
    return Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

var adhese_debug = false;
if (window.location.href.includes('adhese_debug=true')) {
    adhese_debug = true;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

var isTabActive = true;
var refreshCount = 0;
var multiplier = 1;
var adhese_testgroup = '';
var randomInt = getRandomInt(100);


if (randomInt > 75) {
    multiplier = 1;
    adhese_testgroup = 'a';
}  else {
    multiplier = 1;
    adhese_testgroup = 'b';
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

const prebidRefererUrl = window.location.href;
const priceBucketConfig = {
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

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var adUnits = [];
var definedSlots = undefined;

var syncUser = function(option) {
    appendSyncIframe({ syncName: "dazn", url: "https://user-sync.adhese.com/iframe/user_sync.html?account=dazn" });
};

var loadDomainAdUnits = function(domain) {
    console.log("load slots for " + domain);
    loadJSON("https://ads-dazn.adhese.com/tag/" + domain + ".adunits.js", function(response) {
        let declaredSlots = JSON.parse(response);
        for (let prop in declaredSlots) {
            if (!definedSlots) definedSlots = new Object();
            definedSlots[prop] = [new AdheseAdUnit(declaredSlots[prop][0].adUnitPath, declaredSlots[prop][0].sizes[0].width, declaredSlots[prop][0].sizes[0].height)];
        }
        createAdUnits();
    });
};

var adheseScreenWidth = 0;
var adheseDeviceType = 'unknown';

var defineAdUnits = function() {
    adheseScreenWidth = getScreenWidth();
    if (adheseScreenWidth < 769) {
        adheseDeviceType = 'phone';
    } else if (adheseScreenWidth < 1025) {
        adheseDeviceType = 'tablet';
    } else {
        adheseDeviceType = 'desktop';
    }

    if (consentForAds) {
        syncUser();
    }

    try {
        definedSlots = googletag.slot_manager_instance.m;
        if (definedSlots) createAdUnits();
    } catch (e) {
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
            console.log("defining slots on gptadslots array skipped");
            console.log(e);
            try {
                let domain = window.location.hostname;
                loadDomainAdUnits(domain);
            } catch (e) {
                console.log("loading slots failed for domain");
            }
        }
    }
}

var createPrebidAdunitFromSlot = undefined;

if (!adhese_debug) {
   createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam) {
    // let sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    let sizeFromAdunit = [1,1];
    let loc = slot.getAdUnitPath().replace(/(.*\/).*$/, '$1').replace(/\//g, '_').toUpperCase();
    // let format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
    let format = slot.getAdUnitPath().replace(/.*\/(.*)$/, '$1').toUpperCase();
    if (sizeFromAdunit.length > 1) {
        adUnits.push({
            code: slot.getAdUnitPath(),
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
                        account: 'dazn',
                        location: loc,
                        format: format,
                        data: {
                            'dt': [adheseDeviceType],
                            'tl': [tlParam],
                            'xt': [xtParam],
                            'xi': [xiParam]
                        }
                    }
                }
            ]
        });
    }
    return adUnits;
}  
} else {


 createPrebidAdunitFromSlot = function(slot, adUnits, xiParam, xtParam, tlParam, customParam) {
    // let sizeFromAdunit = slot.getAdUnitPath().replace(/.*_([\d]+[x|X][\d]+)_.*/, '$1').toUpperCase().split('X');
    let sizeFromAdunit = [1,1];
    let loc = slot.getAdUnitPath().replace(/(.*\/).*$/, '$1').replace(/\//g, '_').toUpperCase();
    // let format = sizeFromAdunit[0] + "x" + sizeFromAdunit[1];
    let format = slot.getAdUnitPath().replace(/.*\/(.*)$/, '$1').toUpperCase();

    if (sizeFromAdunit.length > 1) {

        var prebidSlotCode = slot.getAdUnitPath();
        let o = {
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
                        account: 'dazn',
                        location: loc,
                        format: format,
                        data: {
                            'dt': [adheseDeviceType],
                            'tl': [tlParam],
                            'xt': [xtParam],
                            'xi': [xiParam]
                        }
                    }
                }
            ]
        }

          if (adhese_debug && (slot.getAdUnitPath() == '/67970281/DISPLAY_OWNED__NL/Voetbalzone/Homepage/Top_Banner')) {
              o.bids.push({
                  bidder: 'improvedigital',
                  params: {
                      placementId: 1204544,
                  }
              });
            }          
        adUnits.push(o);
    }
    return adUnits;
}    
}









var createAdUnits = function() {
    let xiParam = '';
    let xtParam = '';
    let tlParam = 'none';


    try {
        let contentTargets = googletag.pubads().getTargeting('content');
        for (var i = 0; i < contentTargets.length; i++) {
            if (xiParam.length > 0) xiParam += ';';
            xiParam += 'content;' + contentTargets[i];
        }
    } catch (e) {}

    try {
        let iabTargets = googletag.pubads().getTargeting('iab_string');
        for (var i = 0; i < iabTargets.length; i++) {
            xtParam = iabTargets[i];
        }
    } catch (e) {}

    try {
        if (consentForAds) tlParam = 'all';
    } catch (e) {
        console.log("no consent defined for dfp");
        tlParam = 'all';
    }

    if (definedSlots) {
        for (var prop in definedSlots) {
            if (!prop.includes('Outstream') && !prop.includes('Sponsorship_Widget') && !prop.includes('Skin') && !prop.includes('Mobile_Interstitial') && !prop.includes('Adfactor_Native_Ad') && !prop.includes('Middle_Banner_InArticle')) {
                adUnits = createPrebidAdunitFromSlot(definedSlots[prop][0], adUnits, xiParam, xtParam, tlParam);
            }
        }
    }


    pbjs.bidderSettings = {
      adhese: {
        bidCpmAdjustment : function(bidCpm, bid){
          return bidCpm * multiplier;
        }
      }
    };

    pbjs.que.push(function() {
        pbjs.addAdUnits(adUnits);
        pbjs.setConfig({
            bidderSequence: "random",
            bidderTimeout: PREBID_TIMEOUT,
            priceGranularity: priceBucketConfig,
            userSync: {
                syncDelay: 100,
                // syncEnabled: (tlParam=='all'),
                syncEnabled: false,
                syncsPerBidder: 5,
                filterSettings: {
                    iframe: {
                        bidders: ['adhese'], // '*' means all bidders
                        filter: 'include'
                    }
                }
            },
            currency: {
                adServerCurrency: "EUR"
            },
            refererInfo: {
                referer: prebidRefererUrl
            }
        });
        if (consentForAds) {
            pbjs.requestBids({
                bidsBackHandler: initAdserver,
                timeout: PREBID_TIMEOUT
            });
        }
    });
}


var initAdserver = function(bids) {
    for (let i in bids) {
        for (let j in bids[i].bids) {
            let bid = bids[i].bids[j];
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
        googletag.pubads().setTargeting('adhese_splittest', [adhese_testgroup]);
        googletag.pubads().refresh();
    });

/*    window.onfocus = function() {
        isTabActive = true;
    };
    window.onblur = function() {
        isTabActive = false;
    };

    setInterval(function(){
        console.log('Tab is active: ', isTabActive);
    }, 1000);

    setInterval(function() {
        if (isTabActive && consentForAds && !window.location.href.includes('wielerflits')) {
            if (refreshCount < 5) {
                pbjs.que.push(function() {
                    pbjs.requestBids({
                        timeout: PREBID_TIMEOUT,
                        bidsBackHandler: function() {
                            pbjs.setTargetingForGPTAsync();
                            let i;
                            for (i = 0; i < gptadslots.length; i++) {
                                let slot = gptadslots[i].getAdUnitPath();
                                if(!slot.toLowerCase().includes('top_banner')) {
                                    googletag.pubads().refresh([gptadslots[i]]);
                                }
                            }
                            refreshCount++;
                        }
                    });
                });
                console.log('ADHESE: refreshing ads') 
            }
        }       
    }, 30000);*/  
};