(function(){
    var AdheseAjax = {
        request: function(ops) {
            if(typeof ops == 'string') ops = { url: ops };
            ops.url = ops.url || '';
            ops.method = ops.method || 'get'
            ops.data = ops.data || {};
            if(typeof ops.encodeData == "undefined"){
                ops.encodeData = true;
            }
            var getParams = function(data, url) {
                var arr = [], str;
                for(var name in data) {
                    arr.push(name + '=' + encodeURIComponent(data[name]));
                }
                str = arr.join('&');
                if(str != '') {
                    return url ? (url.indexOf('?') < 0 ? '?' + str : '&' + str) : str;
                }
                return '';
            }
            var api = {
                host: {},
                process: function(ops) {
                    var self = this;
                    this.xhr = null;

                    if (document.all && !window.atob) { // IE9 and older
                        try {
                            this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
                        }
                        catch(e) {
                            try {
                                this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
                            }
                            catch (e) {this.xhr = false; }
                        }
                    } else {
                        try {
                            this.xhr = new XMLHttpRequest();
                        }
                        catch (e) {
                            this.xhr = false;
                        }
                    }

                    if(this.xhr) {
                        if ("withCredentials" in this.xhr) {
                            this.xhr.withCredentials = true;
                        }
                        this.xhr.onreadystatechange = function() {
                            if(self.xhr.readyState == 4 && self.xhr.status == 200) {
                                var result = self.xhr.responseText;
                                if(ops.json === true && typeof JSON != 'undefined') {
                                    if (result){
                                        try{
                                            result = JSON.parse(result);
                                            self.doneCallback && self.doneCallback.apply(self.host, [result, self.xhr]);
                                        }catch(e){
                                            self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: " + e]);
                                        }
                                    }else {
                                        self.errorCallback && self.errorCallback.apply(self.host, ["Adhese Ajax: Response is empty string"]);
                                    }
                                }
                            } else if(self.xhr.readyState == 4) {
                                self.failCallback && self.failCallback.apply(self.host, [self.xhr]);
                            }
                            self.alwaysCallback && self.alwaysCallback.apply(self.host, [self.xhr]);
                        }
                    }
                    if(ops.method == 'get') {
                        this.xhr.open("GET", ops.url + getParams(ops.data, ops.url), true);
                    } else {
                        this.xhr.open(ops.method, ops.url, true);
                        this.setHeaders({
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-type': 'application/x-www-form-urlencoded'
                        });
                    }
                    if(ops.headers && typeof ops.headers == 'object') {
                        this.setHeaders(ops.headers);
                    }
                    setTimeout(function() {
                        if(ops.method == 'get'){
                            self.xhr.send()
                        }else{
                            var data;
                            if (ops.encodeData) {
                            data = getParams(ops.data);
                        }else {
                            data = ops.data;
                        }
                        self.xhr.send(data);
                    }
                    }, 20);
                    return this;
                },
                done: function(callback) {
                    this.doneCallback = callback;
                    return this;
                },
                fail: function(callback) {
                    this.failCallback = callback;
                    return this;
                },
                always: function(callback) {
                    this.alwaysCallback = callback;
                    return this;
                },
                error: function(callback) {
                    this.errorCallback = callback;
                    return this;
                },
                setHeaders: function(headers) {
                    for(var name in headers) {
                        this.xhr && this.xhr.setRequestHeader(name, headers[name]);
                    }
                }
            }
            return api.process(ops);
        }
    }

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

    if (window.innerWidth < 760) {
        deviceType = "phone";
    } else {
        deviceType = "desktop";
    }

    var adheseDiv = document.currentScript.parentNode;
    var clickTag = adheseDiv.getAttribute("data-adhese-click");
    if (clickTag==null) clickTag = "";
    var consentString = adheseDiv.getAttribute("data-adhese-consentstring");
    if (consentString==null) consentString = "";
    var appId = adheseDiv.getAttribute("data-adhese-appid");
    if (appId==null) appId = "";
    var encodedUrl = adheseDiv.getAttribute("data-adhese-encodedurl");
    if (encodedUrl==null) encodedUrl = "";
    if (encodedUrl.indexOf("%") == -1) {
        encodedUrl = encodeURIComponent(encodedUrl);
    }
    var b64Url = "";
    try {  b64Url = btoa(decodeURIComponent(encodedUrl)); } catch (e) {console.log(e)};
    var adUri = "https://ads-marktplaats.adhese.com/json/sl" + (adheseDiv.getAttribute("data-adhese-adunit")).toLowerCase().replace(/\//g,"_").replace(/\(/g,"_").replace(/\)/g,"_") + "/dt" + deviceType + "/xt" + consentString + "/xb" + appId + "/ur" + encodedUrl + "/xf" + b64Url + "/?t=" + new Date().getTime();
    var addClickTrackerToIframeSrc = function  (tag, clickUrl) {
        if (tag.includes("index.html?") && typeof clickUrl !== undefined) {
            var b64clickUrl = btoa(clickUrl);
            var tagWithClick = tag.replace("index.html?", "index.html?b64click=" + b64clickUrl + "&");
            return tagWithClick
        } else {
            return tag;
        }
    }

    AdheseAjax.request({
        url: adUri,
        method: 'get',
        json: true
    })
    .done(function(result) {       
        for (var i = result.length - 1; i >= 0; i--) {
            if (result[i].ext == 'zip') {
                var el = document.createElement('div');
                if (clickTag) {
                    //add b64 3rd party click track to iframe src so it can be fetched from within html5 creative
                    result[i].tag = addClickTrackerToIframeSrc(result[i].tag, clickTag);
                };
                el.innerHTML = result[i].tag;
                var iframe = el.getElementsByTagName('iframe')[0];
                iframe.style.width = result[i].width + 'px';
                iframe.style.height = result[i].height + 'px';
                var src = iframe.getAttribute('src');
                iframe.setAttribute('src',src);
                adheseDiv.appendChild(iframe);
                if(result[i] && result[i].trackedImpressionCounter) addTrackingPixel(result[i].trackedImpressionCounter);
                adheseDiv.style.textAlign = 'center';
            } else if (result[i].ext == 'gif' || result[i].ext == 'jpg' || result[i].ext == 'png'){
                var el = document.createElement('div');
                el.innerHTML = result[i].tag;
                var anchor = el.getElementsByTagName('a')[0];
                var href = anchor.getAttribute('href');
                href = decodeURIComponent(clickTag) + href;
                anchor.setAttribute('href',href);
                adheseDiv.appendChild(anchor); 
                if(result[i] && result[i].trackedImpressionCounter) addTrackingPixel(result[i].trackedImpressionCounter);                
            } else if (result[i].ext == 'js' || result[i].ext == 'advar') {
                var toInsertInBody = result[i].tag ? result[i].tag : result[i].body;
                if(clickTag) {
                    /*add third party ad server click tracker in before adhese click tracker*/
                    var thirdPartyClickTag = clickTag + 'https://ads-marktplaats.adhese.com/raylene/';
                    toInsertInBody = toInsertInBody.replace('https://ads-marktplaats.adhese.com/raylene/', thirdPartyClickTag);
                }
                var iframe = document.createElement('iframe');
                iframe.width = result[i].width;
                iframe.height = result[i].height;
                iframe.scrolling="no";
                iframe.frameBorder = 0;
                iframe.frameSpacing = 0;
                iframe.style = "border: none;outline: none;overflow: hidden;top:0px; left:0px; margin: 0; padding: 0;";
                iframe.src = "about:blank";
                iframe.addEventListener('load', function (e) {
                    var id = iframe.contentDocument;
                    id.open();
                    id.write("<html><head></head><body style='margin: 0px; padding: 0px;'>");
                    id.write(toInsertInBody);
                    id.write("</body></html>");
                    id.close();
                }, false);
                adheseDiv.appendChild(iframe);
                if(result[i] && result[i].trackedImpressionCounter) addTrackingPixel(result[i].trackedImpressionCounter);
            }
        };
    });
}).call(this);