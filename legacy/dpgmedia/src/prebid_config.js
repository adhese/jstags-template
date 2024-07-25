var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var checkDependencies = function() {
    if (
        typeof window.googletag !== "undefined"
        && window.googletag.apiReady
        && typeof window.dataLayer !== "undefined"
        && window.dataLayer[0]
        && window.dataLayer[0].content
    ) {
        console.log("ADHESE: googletag and dataLayer available, moving forward");
        adheseGW = new AdheseGateway(googletag,dataLayer,pbjs);
    } else {
        console.log("ADHESE: waiting for googletag and dataLayer to become available");
        setTimeout(checkDependencies, 20);
    }
};
checkDependencies();
