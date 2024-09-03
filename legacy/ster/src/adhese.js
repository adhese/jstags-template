var renderVisibleAds = function () {
    var i = respondedAds.length;
    while (i--) {
        var el = document.getElementById(respondedAds[i].slotName);
        try {
            if (respondedAds[i].orderId == 114) {
                setVisibleHidden(respondedAds[i].slotName);
            }
            var w = parseInt(respondedAds[i].width);
            var h = parseInt(respondedAds[i].height);
            if (adhese.helper.adhElementInViewportWithPercentage(el, w, h, .5)) {
                if (respondedAds[i].orderId == 114) {
                    hideEmptySlot(respondedAds[i].slotName)
                } else {
                    try {
                        if (el.parentNode.style.display == 'none') {
                            el.parentNode.style.display = 'block';
                        }
                        insertSterHeader();
                    } catch (err) {}

                    if (
                        respondedAds[i].extraField1 == "weborama_breakout" ||
                        (
                            respondedAds[i].origin == "ADSCIENCE" &&
                            respondedAds[i].originData.seatbid[0].bid[0].ext.no_safeframe == 1
                        )
                    ) {
                        try {
                            var adMarkup = (respondedAds[i].body != "") ? respondedAds[i].body : respondedAds[i].tag;
                            postscribe(el, adMarkup);
                        } catch (err) {
                            console.log(err);
                        }
                    } else {
                        adhese.safeframe.render(respondedAds[i].slotName);
                    }
                }
                if (typeof respondedAds[i].tracker !== 'undefined') {
                    AdheseAjax.request({
                        url: respondedAds[i].tracker,
                        method: "get"
                    });
                }

                respondedAds.splice(i, 1);

            }
        } catch (err) {
            console.error(err);
        }
    }
};

var collapseEmptyAds = function () {
    // collapse all active containers without ads
    for (var slot in requestedSlots) {
        if (!requestedSlots[slot]) {
            hideEmptySlot(slot);
        }
    }
    // collapse all unused containers
    for (var x = 0; x < unusedSlots.length; x++) {
        hideEmptySlot(unusedSlots[x].container);
        // try {
        //     var el = document.getElementById(unusedSlots[x].container);
        //     el.style.display = 'none';
        // } catch (err) {}
    }
};

var hideEmptySlot = function (slot) {
    // change display for container of ad slot
    try {
        var el = document.getElementById(slot).parentNode;
        el.style.display = 'none';
        // for NOS, remove class ster-banner--is-visible from parent
        // or showBanner_... class, used in articles
        var elNOS = el.parentNode;
        elNOS.className = elNOS.className.replace(/\bster-banner--is-visible\b/g, "");
        elNOS.className = elNOS.className.replace(/\bshowBanner_[^\s|"]+/g, "");
    } catch (err) {}

    // for NPO, set class ster to display:none
    try {
        if (window.location.host == "www.nporadio4.nl" || window.location.host == "www.nporadio1.nl") {
            var elNPO = document.getElementsByClassName("sterad");
            for (var i = 0; i < elNPO.length; i++) {
                elNPO.item(i).style.display = "none";
            }
        }
    } catch (err) {}

    // for BNNVARA, set class ster to display:none
    try {
        if (window.location.host == "www.bnnvara.nl") {
            var elBnnvara = document.getElementById(slot).parentNode.parentNode;
            elBnnvara.style.display = 'none';
        }
    } catch (err) {}
};

var setVisibleHidden = function (slot) {
    // change visibility for container of ad slot
    // display can't be none if you want to calculate the inview percentage
    try {

        var el = document.getElementById(slot).parentNode;
        el.style.visibility = 'hidden';
        // for NOS, remove class ster-banner--is-visible from parent
        // or showBanner_... class, used in articles
        var elNOS = el.parentNode;
        if (elNOS.className.indexOf('ster-banner--is-visible') > 0) elNOS.style.visibility = 'hidden';
    } catch (err) {}

    // for NPO, set class ster to display:none
    try {
        if (window.location.host == "www.nporadio4.nl" || window.location.host == "www.nporadio1.nl") {
            var elNPO = document.getElementsByClassName("sterad");
            for (var i = 0; i < elNPO.length; i++) {
                elNPO.item(i).style.visibility = "hidden";
            }
        }
    } catch (err) {}

    // for BNNVARA, set class ster to display:none
    try {
        if (window.location.host == "www.bnnvara.nl") {
            var elBnnvara = document.getElementById(slot).parentNode.parentNode;
            elBnnvara.style.visibility = 'hidden';
        }
    } catch (err) {}
};

// exception for pages where we are in an iframe
var useSafeframe = true;
if (
    window.location.href == "https://joop.bnnvara.nl/content/mu-plugins/Joop/widgets/ster-gdp-ads/home.html" ||
    window.location.href == "https://radioplayer.npo.nl/_popupsites/radio4/?radioapp=1&channel=4"
) {
    useSafeframe = false;
}

var adhese = new Adhese();

adhese.init({
    debug: true,
    account: "ster",
    location: getAdheseLocation,
    safeframe: useSafeframe,
    safeframeContainerID: "slotName",
    previewHost: "https://ster-preview.adhese.org",
    prefixVersion: 2
});

if (window.location.href.substring(window.location.href.length - 1) == '/') {
    adhese.request.ur = [], adhese.registerRequestParameter('ur', adhese.helper.base64.urlencode(window.location.href.substring(0, window.location.href.length - 1)));
}

var ads = new Array();
var requestedSlots = new Array();
var unusedSlots = new Array();
var respondedAds = new Array();

function sortAdsOnScreenWidth(a, b) {
    if (parseInt(a.screen) > parseInt(b.screen)) return -1;
    if (parseInt(a.screen) < parseInt(b.screen)) return 1;
    return 0;
}

// save display port settings based on mapping with screen values, we need 3 values and sort them from small to large
var screenToDisplayPort = new Array();

function saveScreenForDisplayPort(inM) {
    var inMapping = inM.sort(sortAdsOnScreenWidth);
    if (inMapping.length == 3) {
        for (var i = 0; i < inMapping.length; i++) {
            screenToDisplayPort[i] = inMapping[i].screen;
        }
    }
}

function determineDisplayPort() {
    return getDisplayPort(document.documentElement.clientWidth);
}

function getDisplayPort(w) {
    if (screenToDisplayPort.length == 3) {
        if (w < screenToDisplayPort[1]) {
            return "phone";
        } else if (w < screenToDisplayPort[0]) {
            return "tablet";
        } else {
            return "desktop";
        }
    } else if (w < 760) {
        return "phone";
    } else if (w < 1200) {
        return "tablet";
    } else {
        return "desktop";
    }
}

Adhese.prototype.Helper.prototype.adhElementInViewportWithPercentage = function (element, w, h, percentage) {
    if (typeof element == "string") {
        element = document.getElementById(element);
    }
    if (element) {
        var rect = element.getBoundingClientRect();
        var calY = rect.top + h * percentage;
        var calX = rect.left + w * percentage;
        return rect.top >= 0 && rect.left >= 0 && calY <= (window.innerHeight || document.documentElement.clientHeight) && calX <= (window.innerWidth || document.documentElement.clientWidth);
    } else {
        return false;
    }
};

var displayPort = "";
var requestRunning = 0;

Adhese.prototype.requestAds = function (inMapping) {
    var mapping = inMapping[0].ads;
    ads = new Array();
    requestRunning++;

    saveScreenForDisplayPort(mapping);

    displayPort = determineDisplayPort();
    adhese.registerRequestParameter("vp", displayPort);

    // run through mapping, pick by screen setting
    var inMapping = new Array();
    if (mapping.length > 0 && mapping[0].screen != undefined) {
        for (var y = 0; y < mapping.length; y++) {
            if (getDisplayPort(mapping[y].screen) == displayPort) {
                inMapping.push(mapping[y]);
            } else {
                unusedSlots.push(mapping[y]);
            }
        }
    }

    // filter unused slots to keep unique unused containers for collapsing later
    var emptyContainers = new Array();
    for (var y = 0; y < unusedSlots.length; y++) {
        var inUse = false;
        for (var z = 0; z < inMapping.length; z++) {
            if (unusedSlots[y].container == inMapping[z].container) {
                inUse = true;
            }
        }
        if (!inUse) emptyContainers.push(unusedSlots[y]);
    }
    unusedSlots = emptyContainers;

    for (var x = 0; x < inMapping.length; x++) {
        var inFormat = inMapping[x].format;
        var ad = adhese.tag(inFormat, {
            location: getAdheseLocation().toLowerCase(),
            format: inFormat,
            safeframeContainerID: "slotName"
        });
        requestedSlots[ad.options.slotName] = false;
        ads.push(ad);

        try {
            var container = document.getElementById(inMapping[x].container);
            var div = document.createElement('div');
            div.id = ad.options.slotName;
            container.appendChild(div);
        } catch (err) {}
    }

    for (p in adhese.previewFormats) {
        for (var x = 0; x < adhese.ads.length; x++) {
            var ad = adhese.ads[x];
            if (p == ad[1].format) {
                requestedSlots[ad[1].options.slotName] = true;
                var response = AdheseAjax.request({
                    url: ad[1].swfSrc,
                    method: "get",
                    json: true
                }).done(function (preview) {
                    preview[0].slotName = ad[1].options.slotName;
                    for (var b = 0; b < preview[0].additionalCreatives.length; b++) {
                        preview[0].additionalCreatives[b].slotName = ad[1].options.slotName;
                    }
                    adhese.safeframe.addPositions(preview);
                    adhese.safeframe.render(ad[1].options.slotName);

                    var el = document.getElementById(ad[1].options.slotName);
                    try {
                        if (el.parentNode.style.display == "none") {
                            el.parentNode.style.display = "block";
                        }
                        insertSterHeader();

                    } catch (err) {}
                });
            }
        }
    }

    var adUri = adhese.getMultipleRequestUri(ads, {
        type: "json"
    });
    AdheseAjax.request({
        url: adUri,
        method: "get",
        json: true
    }).done(function (result) {
        for (var i = 0; i < result.length; i++) {
            respondedAds.push(result[i]);
            requestedSlots[result[i].slotName] = true;
        }
        if (useSafeframe) {
            adhese.safeframe.addPositions(result);
        }

        requestRunning--;
        if (requestRunning == 0)
            collapseEmptyAds();

        renderVisibleAds();
    });
};

window.addEventListener("scroll", function () {
    renderVisibleAds();
}, false);