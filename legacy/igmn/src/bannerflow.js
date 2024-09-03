function getThirdPartyClickTrackerFromUrl (iframeSource) {
    if (iframeSource.includes("b64click=")) {
        return atob(iframeSource.split("b64click=")[1].split("&")[0]);
    } else {
        return "";
    }
};

function addThirdPartyClickTracker() {
    var thirdPartyClickTag = getThirdPartyClickTrackerFromUrl(window.location.href);
    clickTag = thirdPartyClickTag + clickTag;
};

function getDomain (iframeSource) {
    var urlEncoded = iframeSource.split('/xf');
    if (urlEncoded.length > 1) {
        var b64url = urlEncoded[1].split('/')[0];
        return atob(b64url);
    } else {
        return;
    }
};

function sanitizeDomain(url) {
    try {
        domain = url.replace("www.", "").replace("http://", "").replace("https://", "").split("/")[0];
        return domain;
    } catch (e) {
        return "unknown"
    }
};

function replaceUTMDomain () {
    clickTag = clickTag.replace("${DOMAIN_PLACEHOLDER}", sanitizeDomain(getDomain(window.location.href)));
}

if (clickTag.includes("${DOMAIN_PLACEHOLDER}")) {
    replaceUTMDomain();
};
if (window.location.href.includes("b64click")) {
    addThirdPartyClickTracker();
};