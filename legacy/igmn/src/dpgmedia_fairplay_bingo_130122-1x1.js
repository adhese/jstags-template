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
                let arr = [], str;
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
                                let result = self.xhr.responseText;
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

    const addTrackingPixel = function(uri) {
        let img = document.createElement("img");
        img.src = uri;
        img.style.height = "1px";
        img.style.width = "1px";
        img.style.margin = "-1px";
        img.style.border = "0";
        img.style.position = "absolute";
        img.style.top = "0";
        document.body.appendChild(img);
    };


   let adUri = "https://ads-igmn.adhese.com/json/sldpgmedia_fairplay_bingo_130122-1x1/" + "/?t=" + new Date().getTime();
   
    AdheseAjax.request({
        url: adUri,
        method: 'get',
        json: true
    })
    .done(function(result) {
        for (let i = result.length - 1; i >= 0; i--) {
            if(result[i] && result[i].trackedImpressionCounter) addTrackingPixel(result[i].trackedImpressionCounter);
        };
    });

}).call(this);