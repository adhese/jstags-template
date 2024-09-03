	//if in google > adhese > google iframe: try resizing outer frame 
	if (window.parent.parent.frameElement != null) {
	    try {
	        window.parent.parent.frameElement.width = '1';
	        window.parent.parent.frameElement.height = '1';
	    } catch (e) {
	        console.log(e);
	    }
	//if only in google frame: try resizing iframe 
	} else if (window.frameElement != null) {
	    try {
	        window.frameElement.width = '1';
	        window.frameElement.height = '1';
	    } catch (e) {
	        console.log(e);
	    }
	}
