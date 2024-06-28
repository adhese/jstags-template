

//if window.adhese is undefined, create it
if (typeof(window.adhese) == 'undefined') {
    var adhese = new Adhese();
    adhese.init({
        debug:true, 
        account:"bionic", 
        location: 'project_on', 
        host: "https://ads-bionic.adhese.com/",
        safeframe: true,
        safeframeContainerID: "slotName",
        previewHost: "https://bionic-preview.adhese.org",
        viewability: true
    });    
}
if (window.location.href.includes('version-test')) adhese.debug = true;

adhese.decorateLog = function(args, prefix) {
    args = [args];
    prefix && args.unshift(prefix);
    args.unshift('display: inline-block; color: #fff; background: #ff0066; padding: 1px 4px; border-radius: 3px;');
    args.unshift('%cAdhese');
    return args;
};

adhese.logger = function(arguments) {
    if (adhese.debug) console.info.apply(console, adhese.decorateLog(arguments, 'DEBUG:'));
};

adhese.sanitizeTarget = function(target) {
    if (target && typeof(target) == 'string') {
        var sanitizedTarget = target.replace(/-/g, '_').toLowerCase();
        return sanitizedTarget;
    }
    return target;
};

adhese.getParam = function(param) {    
    if (typeof(adheseData) != 'undefined') {
        param = this.sanitizeTarget(adheseData[param]);
    }
    return param;    
};

adhese.getCssParams = function() {
    if (window.adheseData && window.adheseData.css) {
        var css = window.adheseData.css;
        var cssParams = {
            "bg": css.backGroundColor,
            "tc": css.titleColor,
            "tx": css.textColor,
            "uc": css.urlColor
        };
        return cssParams;
    } else {
        return false;
    }
}

adhese.getFormatForPosition = function(position) {
    //get viewport in pixels
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    var bannerFormatPerViewport = {
        "sidebar": {
            0: null,
            1000: "160x600",
            1600: "300x250"
        },
        "tileview": {
            0: "300x250"
            //529: null
        },
        "listview": {
            0: "300x250",
            800: "728x90"
        }
    };

    if (bannerFormatPerViewport[position]) {
        var format = null;
        for (var viewport in bannerFormatPerViewport[position]) {
            if (viewportWidth >= viewport) {
                format = bannerFormatPerViewport[position][viewport];
            }
        }
        adhese.logger('format for position ' + position + ' is ' + format);
        return format;
    }
};

adhese.getMediaType = function(ad) {
    var tag = ad.tag ? ad.tag : ad.body;
    if (tag.includes('<VAST')) {
        return 'video';
    } else {
        return 'banner';
    }
};

adhese.fetchAd = function(divId, format) {
    adhese.logger('fetch ad for ' + format + ' with divId ' + divId);
    var size = adhese.getFormatForPosition(format);
    if (!size) {
        adhese.logger('no size found for position ' + format + ' with current viewport, not requesting ad');
        return; 
    };

    var url = 'https://ads-bionic.adhese.com/json/sl' + window.adheseData.project.toLowerCase().replace(/ /g, '_') + '_' + format + '-' + size;
    
    var css = this.getCssParams();
    if (css) {
        var cssTargets = '/bg' + css.bg + '/tc' + css.tc + '/tx' + css.tx + '/uc' + css.uc;
        url = url + cssTargets.replace(/#/g, '');
        url = url + '/uu' + this.getParam('userId') + '/pt' + this.getParam('pageType') + '/lg' + this.getParam('language') + '/pr' + this.getParam('project') + '/li' + this.getParam('loggedIn') + '/tlall';
    };
    if (adhese.debug) url = url + '/ptdebug';

    AdheseAjax.request({
        url: url,
        method: 'get',
        json: true
    }).done(function (results) {
        //add impression tracker to html
        for (var x in results) {
            var ad = results[x];
            if (ad.origin == 'JERLICIA' && adhese.getMediaType(ad) == 'banner') {
                var impressionTracker = "<img src='" + ad.trackedImpressionCounter + "' border='0' width='1' height='1' alt='' style='display:none'/>";
                if (ad.body && ad.body != "" && ad.body != "<ADHESE_BODY>") {
                    ad.body = ad.body + impressionTracker;
                } else {
                    ad.tag = ad.tag + impressionTracker;
                }
            }
        }

        for (var i = results.length - 1; i >= 0; i--) {
            var ad = results[i];
            var markup = ad.tag ? ad.tag : ad.body;
            if (ad.ext && ad.ext == 'advar') {
                //write out native ads directly to container
                adhese.logger('Native ad found, rendering HTML');
                document.getElementById(divId).innerHTML = markup;
                document.getElementById(divId).parentNode.style.display="block";
            } else {
                //regular banners in an iframe
                adhese.logger('IAB Format found, rendering iframe');
                //create friendly iframe
                var iframe = document.createElement('iframe');
                iframe.id = ad.slotName + '_adhese_iframe_' + divId;
                iframe.width = ad.width;
                iframe.height = ad.height;			                       		
                iframe.frameBorder = 0;
                iframe.scrolling='no';
                iframe.style.margin = '0 auto';
                iframe.style.display = 'block';
                //add to document
                var parent = document.getElementById(divId);
                parent.appendChild(iframe);                
                var iframeCSS = "<style>body{margin:0px;}</style>";

                //render ad in iframe
                var iframeDoc = iframe.contentWindow.document;
                iframeDoc.write(iframeCSS + markup);
                iframeDoc.close();
                

                //fire event to notify ad is loaded
                var event = new CustomEvent('AdheseAdLoaded', { 
                    'ad': ad,
                    'divId': divId,
                    'width': ad.width,
                    'height': ad.height
                });
                document.dispatchEvent(event);

                document.addEventListener('AdheseAdLoaded', function(e) {
                    // returns object with ad, divId, width and height
                    // some code to resize containers
                });
            }        
        };
    });  
};

adhese.requestAdSlot = function(divId, format) {
    adhese.logger('requestAdSlot for ' + format + ' with divId ' + divId);
    //use the divId passed in the function call in combination with the intersection observer API, and add the ad to the div when it is in the viewport
    var adSlot = document.getElementById(divId);
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                adhese.logger('intersectionRatio > 0, requesting ad');
                adhese.fetchAd(divId, format);
                observer.unobserve(adSlot);
            }
        });
    }, { threshold: [0] });
    observer.observe(adSlot);
};