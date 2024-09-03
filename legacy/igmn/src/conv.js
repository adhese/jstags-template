(function(){
    var ADHESE_IMPRESSION_ID = undefined;
    var ADHESE_LOG_ID = undefined;
    var ADHESE_SLOT_ID = undefined;

    var helper = {};

    helper.getParamsFromUrl = function() {
	    var params = new URLSearchParams(window.location.search);
		for (var param of params) {
		    if (param[0] == 'adh_ii') ADHESE_IMPRESSION_ID = param[1];
		    if (param[0] == 'adh_crid') ADHESE_LOG_ID = param[1];
		    if (param[0] == 'adh_slid') ADHESE_SLOT_ID = param[1];
		};
    };

	helper.addTrackingPixel = function(uri) {
	    var img = document.createElement('img');
	    img.src = uri;
	    img.style.height = "1px";
	    img.style.width = "1px";
	    img.style.margin = "-1px";
	    img.style.border = "0";
	    img.style.position = "absolute";
	    img.style.top = "0";
	    if (document.body) {
	    	document.body.appendChild(img);
	    } else {
		    setTimeout(function(){
		    	document.body.appendChild(img);
		    }, 500);
	    }
	};

    helper.setCookie = function(cookieName, cookieValue) {
        var date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); //reset every 7d
        expires = "; expires=" + date.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + expires + "; Secure; SameSite=Lax; path=/";
    };

    helper.getCookie = function(name) {
        var value = '';
        if (document.cookie && -1 != document.cookie.indexOf(name)) {
            var i, s, e = document.cookie.split(";");
            for (var n = 0; n < e.length; n++) {
                if (-1 != e[n].indexOf(name)) {
                    2 <= (i = e[n].split("=")).length && (s = i[1]);
                    value = s;
                }
            }
            return value;
        }
        return; 
    };

    helper.getTracker = function() {
		if (ADHESE_IMPRESSION_ID && ADHESE_LOG_ID && ADHESE_SLOT_ID) {
			var tracker = 'https://ads-igmn.adhese.com/track/' + ADHESE_LOG_ID + '-conversion/II' + ADHESE_IMPRESSION_ID + '/sl' + ADHESE_SLOT_ID + '/?' + new Date().getTime();
			return tracker;
		};
		return '';
    };

    //get tracking type from script attribute
	var script = document.currentScript;
	var trackType = 'conversion'

	if (trackType == 'landing') {
		//if landing, drop tracking url in cookie for later use.
		helper.getParamsFromUrl();
		if (helper.getTracker()); {
			var cookieValue = btoa('https://ads-igmn.adhese.com/track/' + ADHESE_LOG_ID + '-conversion/II' + ADHESE_IMPRESSION_ID + '/sl' + ADHESE_SLOT_ID + '/?' + new Date().getTime())
			
			if (ADHESE_LOG_ID && ADHESE_IMPRESSION_ID && ADHESE_SLOT_ID) helper.setCookie('igmnclck', cookieValue);			
		}
	} else if (trackType == 'conversion') {
		//if conversion, fire tracking url dropped earlier
		var cookie = helper.getCookie('igmnclck')
		if (cookie) {
			helper.addTrackingPixel(atob(cookie));
		}
	}
})()