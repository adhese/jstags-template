(function(){
    __tcfapi('getTCData', 2, function(tcData, success) {
        if (success) {
            let baseUrl = "https://ads-igmn.adhese.com/json/slmannenmedia_fcupdate.nl-1x1/xt" + tcData.tcString;
            const adUri = baseUrl;    
            fetch(adUri, {
                method: "GET",
                credentials: "include",
                headers: new Headers({'content-type': 'application/json'})
            })
            .then(response => response.json())
            .then(result => {
                if (!result.length) return;
                var ad = result[0].ad ? result[0].ad : result[0].body;
                var ageStatus = ad.includes('out') ? 0 : 1;
                var event = new CustomEvent('igmn:ageStatus', { detail: { ageStatus: ageStatus } });
                console.log('dispatching event');
                document.dispatchEvent(event);
                setTimeout(function() {
                    document.dispatchEvent(event);
                }, 500);
            });
        }
    });
})();