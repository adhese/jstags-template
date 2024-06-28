(function(){
    var helper = {};
	var trackingUri = "https://ads-igmn.adhese.com/json/slfpo_conversion_tracking-1x1";
	var eventName = "";
	var debug = false;

	var urlData = {
		"token": "",
		"utm_source": "",
		"utm_medium": "",
		"utm_campaign": "",
		"utm_content": "",
		"utm_term": ""
	};

	helper.logger = function(textToLog) {
		//log text in console with "info:" in blue:
		if (debug){
			console.log("%cinfo: " + textToLog, "color: orange; font-weight: bold;");
		}
	};

	helper.addTrackingPixel = function(uri) {
		helper.logger('addTrackingPixel: ' + uri);
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

	helper.getParamsFromUrl = function() {
	    var params = new URLSearchParams(window.location.search);
		for (var param of params) {
		    if (param[0] == 'token') urlData.token = param[1];
		    if (param[0] == 'utm_source') urlData.utm_source = param[1];
		    if (param[0] == 'utm_medium') urlData.utm_medium = param[1];
		    if (param[0] == 'utm_campaign') urlData.utm_campaign = param[1];
			if (param[0] == 'utm_content') urlData.utm_content = param[1];
			if (param[0] == 'utm_term') urlData.utm_term = param[1];
		};
    };
	
	helper.setCookie = function(cookieName, cookieValue) {
		helper.logger('setCookie: ' + cookieName + ' = ' + cookieValue);
        var date = new Date();
        date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000)); //reset every 90d
        expires = "; expires=" + date.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + expires + "; Secure; SameSite=Lax; Domain=." + window.location.hostname + "; path=/";
    };

    helper.getCookie = function(name) {
		helper.logger('getCookie: ' + name);
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
        return false; 
    };

	//when this script is loaded, it contains a data attribute with the event name. 
	helper.getEventName = function() {
		helper.logger('getEventName')
		var script = document.currentScript;
		var event = script.getAttribute('data-event-name');
		if(event) {
			return event;
		} else {
			return false;
		}
	};

	helper.getTracker = function(viewableImpressionCounter, eventName) {
		helper.logger('getTracker for ' + eventName);
		var tracker = viewableImpressionCounter.replace('Adhese_IABview', eventName);
		return tracker;
	};

	helper.handleAdResponse = function(response) {
		helper.logger('handleAdResponse:');
		helper.logger(response);
		if (response && response[0]) {
			//we track the impression
			if(response[0].impressionCounter) {
				helper.addTrackingPixel(response[0].impressionCounter);
			}
			var eventUrl = new String(response[0].viewableImpressionCounter);
			//store the viewable impression counter in a cookie
			if (eventUrl) {
				helper.setCookie('__igmn2', btoa(eventUrl));
			}
			//if the event name is set, we track the event
			if(eventName) {
				let tracker = helper.getTracker(eventUrl, eventName);
				this.addTrackingPixel(tracker);
			}
			//if the token is set, we track the token
			if(urlData && urlData.token) {
				let tracker = helper.getTracker(eventUrl, "token=" + urlData.token);
				this.addTrackingPixel(tracker);
			}
			if(urlData && urlData.utm_source) {
				let tracker = helper.getTracker(eventUrl, "utm_source=" + urlData.utm_source);
				this.addTrackingPixel(tracker);
			}
			if(urlData && urlData.utm_medium) {
				let tracker = helper.getTracker(eventUrl, "utm_medium=" + urlData.utm_medium);
				this.addTrackingPixel(tracker);
			}
			if(urlData && urlData.utm_campaign) {
				let tracker = helper.getTracker(eventUrl, "utm_campaign=" + urlData.utm_campaign);
				this.addTrackingPixel(tracker);
			}
			if(urlData && urlData.utm_content) {
				let tracker = helper.getTracker(eventUrl, "utm_content=" + urlData.utm_content);
				this.addTrackingPixel(tracker);
			}
			if(urlData && urlData.utm_term) {
				let tracker = helper.getTracker(eventUrl, "utm_term=" + urlData.utm_term);
				this.addTrackingPixel(tracker);
			}
		}
	};

	helper.getAd = function(uri) {
		helper.logger('getAd: ' + uri);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.send();
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse(this.responseText);
				if (response) {
					helper.handleAdResponse(response);
				}
			}
		}
	};
	
	helper.getParamsFromUrl();
	eventName = helper.getEventName();
	var url = window.location.href;
	url = url.toLowerCase();
	
	//if we find a token or utm params in the url, its a first landing and no cookie exists yet, its a new visitor so we start tracking.
	if ((url.includes("utm_medium=display") || url.includes("utm_medium=video")|| url.includes("utm_medium=preroll") || url.includes("utm_medium=native") || url.includes("utm_medium=seamless")) && helper.getCookie('__igmn2') == false) {
		helper.logger('utm_medium found, no cookie found, new visitor');
		helper.getAd(trackingUri);
	} else {
		helper.logger('event: ' + eventName + ', cookie: ' + helper.getCookie('__igmn2') + '');
		//if we find a viewableImpressionCounter cookie, we fire the tracking url
		var cookie = helper.getCookie('__igmn2');
		if (cookie && eventName !== 'page_view') {
			var viewableImpressionCounter = atob(cookie);
			var tracker = helper.getTracker(viewableImpressionCounter, eventName);
			helper.addTrackingPixel(tracker);
		}
	}
})();