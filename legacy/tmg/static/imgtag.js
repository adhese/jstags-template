	var div = document.getElementById('bannerDiv');
		div.innerHTML = '<img src=' + uglyTag.imgSource + ' onclick="clickFunction()" onmouseover="" style="cursor: pointer;"/>' ;
    var clickFunction = function() {
	var pixel = document.createElement('img');
	pixel.src = uglyTag.clickPixel;
	document.body.appendChild(pixel);
	landingpage = uglyTag.clickMacro + uglyTag.landingpage;
	window.open(uglyTag.landingpage, '_blank');
}