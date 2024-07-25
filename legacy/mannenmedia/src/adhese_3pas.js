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

    var adheseDiv = document.currentScript.parentNode;
    var clickTag = adheseDiv.getAttribute("data-adhese-click");
    if (clickTag==null) clickTag = "";
    var adUri = "https://ads-" + adheseDiv.getAttribute("data-adhese-account") + ".adhese.com/json/" + adheseDiv.getAttribute("data-adhese-slot") + "/?t=" + new Date().getTime();
    var response = AdheseAjax.request({
        url: adUri,
        method: 'get',
        json: true
    })
    .done(function(result) {
    //google double iframe resizing logic
    let w = window.frameElement;
    let p = window.parent.frameElement;
        if (result.length == 0) {
            try {
                if (w != window.top) {
                    w.width = 1;
                    w.height = 1;
                }
                if (p != window.top) {
                    p.width = 1;
                    p.height = 1;
                }
            } catch (e) {
                console.log(e);
            }
        }

        for (var i = result.length - 1; i >= 0; i--) {
        if (!result.length == 0) {
            try {
                if (w != window.top) {
                    w.width = result[i].width;
                    w.height = result[i].height;
                }
                if (p != window.top) {
                    p.width = result[i].width;
                    p.height = result[i].height;

                }
            } catch (e) {
                console.log(e);
            }
        }

            if (result[i].ext == 'zip') {
                var el = document.createElement('div');
                el.innerHTML = result[i].tag;
                var iframe = el.getElementsByTagName('iframe')[0];
                var src = iframe.getAttribute('src');
                src += "&click=" + clickTag;
                iframe.setAttribute('src',src);
                adheseDiv.appendChild(iframe);
            } else if (result[i].ext == 'gif' || result[i].ext == 'jpg' || result[i].ext == 'png'){
                var el = document.createElement('div');
                el.innerHTML = result[i].tag;
                var anchor = el.getElementsByTagName('a')[0];
                var href = anchor.getAttribute('href');
                href = decodeURIComponent(clickTag) + href;
                anchor.setAttribute('href',href);
                adheseDiv.appendChild(anchor);                
            } else if (result[i].ext == 'js') {
                var iframe = document.createElement('iframe');
                iframe.width = result[i].width;
                iframe.height = result[i].height;
                iframe.scrolling="no";
                iframe.frameBorder = 0;
                iframe.frameSpacing = 0;
                iframe.style = "border: none;outline: none;overflow: hidden;top:0px; left:0px; margin: 0; padding: 0;";
                adheseDiv.appendChild(iframe);
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write("<html><head></head><body style='margin: 0px; padding: 0px;'>");
                iframe.contentWindow.document.write(result[i].body);
                iframe.contentWindow.document.close();   
            }
        };
        if (adUri.indexOf("/tlall")!=-1) {
            var usIframe = document.createElement("IFRAME");
            usIframe.setAttribute("id", "sync_iframe_mannenmedia");
            usIframe.setAttribute("height", "0");
            usIframe.setAttribute("width", "0");
            usIframe.setAttribute("marginwidth", "0");
            usIframe.setAttribute("marginheight", "0");
            usIframe.setAttribute("frameborder", "0");
            usIframe.setAttribute("scrolling", "no");
            usIframe.setAttribute("style", "border: 0px; display: none;");
            usIframe.setAttribute("src", "https://user-sync.adhese.com/iframe/user_sync.html?account=mannenmedia"); 
            adheseDiv.appendChild(usIframe);

            //DBM
            let img = document.createElement('img');
            img.src = "https://cm.g.doubleclick.net/pixel?google_nid=improvedigital&google_cm&google_sc";
            img.style.height = "1px";
            img.style.width = "1px";
            img.style.margin = "-1px";
            img.style.border = "0";
            img.style.position = "absolute";
            img.style.top = "0";
            document.body.appendChild(img);

            //MediaMath
            let img2 = document.createElement('img');
            img2.src = "https://pixel.mathtag.com/sync/img?sync=auto";
            img2.style.height = "1px";
            img2.style.width = "1px";
            img2.style.margin = "-1px";
            img2.style.border = "0";
            img2.style.position = "absolute";
            img2.style.top = "0";
            document.body.appendChild(img2);

            //Adform
            let img3 = document.createElement('img');
            img3.src = "https://track.adform.net/serving/cookie/match/?party=5&publisher_user_id=261&publisher_dsp_id=42&publisher_call_type=redirect&publisher_redirecturl=https://ad.360yield.com/match";
            img3.style.height = "1px";
            img3.style.width = "1px";
            img3.style.margin = "-1px";
            img3.style.border = "0";
            img3.style.position = "absolute";
            img3.style.top = "0";
            document.body.appendChild(img3);

            //Platform161
            let img4 = document.createElement('img');
            img4.src = "https://ads.creative-serving.com/id_match_o?publisher_user_id=261&publisher_dsp_id=79&publisher_call_type=redirect&publisher_redirecturl=https://ad.360yield.com/match";
            img4.style.height = "1px";
            img4.style.width = "1px";
            img4.style.margin = "-1px";
            img4.style.border = "0";
            img4.style.position = "absolute";
            img4.style.top = "0";
            document.body.appendChild(img4);
        }
    });

}).call(this);
