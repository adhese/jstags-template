(function(){

// https://content1.nrc.nl/raylene//sl1/brChrome/brChrome90/brOSX/brdesktop/dmDMGo1g0c0/dmADV0/dmDMGo1g0c0/dmADV0/dmDMGo1g0c0/dmADV0/dmDMGo1g0c0/dmADV0/dtdesktop/ogcontrol/IIbb121f6b-f598-440e-87cc-64ae25a7e831/tlnone/lifalse/ptfrontpage/schome/A2127.68.78.84/ad147-13/URhttps://special.nrc.nl/polestar/het-is-tijd-voor-meer-transparantie?test=4&utm_source=xtr_redactioneel_1&utm_medium=billboard&utm_campaign=Polestar%20-%20Advertorial%20-%2004%2F21

	var ADHESE_IMPRESSION_ID = undefined;
	var ADHESE_LOG_ID = undefined;
	var params = new URLSearchParams(window.location.search);
	var isTabActive = true;
	var qualityViewTracked = false;

	var  addTrackingPixel = function(uri) {
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

	var handleVisibilityChange = function() {
		if (document.hidden) {
	    	isTabActive = false; 
		} else {
	    	isTabActive = true;
	    	//if quality view wasn't already tracked, start counting. 
	    	if (!qualityViewTracked) startCounter();
	  	}
	};

	for (var param of params) {
		if (param[0] == 'adh_ii') ADHESE_IMPRESSION_ID = param[1];
		if (param[0] == 'adh_crid') ADHESE_LOG_ID = param[1];
		if (param[0] == 'adh_slid') ADHESE_SLOT_ID = param[1];
	};

	document.addEventListener("visibilitychange", handleVisibilityChange, false);

	var startCounter = function() {
		if (ADHESE_IMPRESSION_ID && ADHESE_LOG_ID && ADHESE_SLOT_ID) {
			setTimeout(function(){
				var tracker = 'https://content1.nrc.nl/track/' + ADHESE_LOG_ID + '-qv/II' + ADHESE_IMPRESSION_ID + '/sl' + ADHESE_SLOT_ID + '/?' + new Date().getTime();
				if (isTabActive && !qualityViewTracked) {
					addTrackingPixel(tracker);
					qualityViewTracked = true;
				}
			},15000);
		}	
	};

	startCounter();
})();