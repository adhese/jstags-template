try {
    window.__tcfapi('getTCData', 2, function(tcData) {
        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("id", "sync_iframe_talpa");
        iframe.setAttribute("height", "0");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("marginwidth", "0");
        iframe.setAttribute("marginheight", "0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("style", "border: 0px; display: none;");
        iframe.setAttribute("src", "https://user-sync.adhese.com/iframe/user_sync.html?account=talpa&gdpr=1&consentString=" + tcData.tcString);
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
    });
} catch(e) {}