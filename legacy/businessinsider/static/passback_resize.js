  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        let childIframe = {};
        childIframe.width = event.size[0];
        childIframe.height = event.size[1];
        let w = window.frameElement;
        if (w !== window.top) {
            try {
                window.parent.frameElement.width = childIframe.width;
                window.parent.frameElement.height = childIframe.height;
            } catch (e) {
                console.log("Exception resizing window.parent.frameElement");
                console.log(e);
            }
            try {
                window.frameElement.width = childIframe.width;
                window.frameElement.height = childIframe.height;
            } catch (e) {
                console.log("Exception resizing window.frameElement");
                console.log(e);
            }
        }
    });
});