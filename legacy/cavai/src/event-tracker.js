var adheseScript = document.currentScript;
var fireEvent = function(event) {
	var eventName = event.data.eventMessage;
	var ii = adheseScript.getAttribute('data-adhese-ii');
	var crid = adheseScript.getAttribute('data-adhese-crid');
	var slid = adheseScript.getAttribute('data-adhese-slid');

	var addTrackingPixel = function(uri) {
		var img = document.createElement("img");
		img.src = uri;
		img.style.height = "1px";
		img.style.width = "1px";
		img.style.margin = "-1px";
		img.style.border = "0";
		img.style.position = "absolute";
		img.style.top = "0";
		document.body.appendChild(img);
	};
	var trackingUrl = 'https://ads-cavai.adhese.com/track/' + crid + '-' + eventName + '/II' + ii + '/sl' + slid + '/?' + new Date().getTime();
	if (eventName && ii && crid && slid) addTrackingPixel(trackingUrl);	
}

try { 
	window.top.addEventListener("message", function(event) {
		if (event.data.type=='cavaiTrackingEvent') {
			fireEvent(event);
		}
	}, false);
} catch (e) {
	window.addEventListener("message", function(event) {
		if (event.data.type=='cavaiTrackingEvent') {
			fireEvent(event);
		}
	}, false);
}