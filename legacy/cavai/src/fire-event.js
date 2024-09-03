(function(){
	var adheseScript = document.currentScript;
	var event = adheseScript.getAttribute('data-adhese-event');
	var w;
    try {
    	window.top.adheseTest = 'test';
    	w = window.top;
    } catch (e) {
    	w = window.parent;
    }
    w.postMessage({ 'type':'cavaiTrackingEvent','eventMessage': event}, '*');
})();