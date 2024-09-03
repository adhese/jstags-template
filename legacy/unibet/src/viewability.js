class AdheseViewability {
    constructor() {  
        this.rootElement = window.frameElement ? window.frameElement : document.currentScript.parentElement.parentNode;
        let logid = document.currentScript.parentElement.dataset.adhLogid;
        let sl = document.currentScript.parentElement.dataset.adhSl;
        let ii = document.currentScript.parentElement.dataset.adhIi;
        let accountId = document.currentScript.src.split("-")[1].split(".")[0];
        this.trackingUri = `https://ads-${accountId}.adhese.com/track/${logid}-[tracking_event]/sl${sl}/II${ii}?t=${Math.random()*100000}`;

        this.interSectionObserver;
        this.frameType;

        this.options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
    }
  
    firePixel(eventName) {
      // Check if tracking event is set
      if (!eventName || !eventName.length > 0) return;
  
      // Replace insecure protocol with secure protocol
      let uri = eventName.replace("http", "https");
      // If the eventName is already a full url, don't add the tracking uri
      uri = eventName.includes("https")
        ? eventName
        : this.trackingUri.replace("[tracking_event]", eventName);
  
      const img = document.createElement("img");
      img.src = uri;
      img.style.height = "1px";
      img.style.width = "1px";
      img.style.margin = "-1px";
      img.style.border = "0";
      img.style.position = "absolute";
      img.style.top = "0";
      document.body.appendChild(img);
    }
  
    intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        const adBox = entry.target;
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.5) {
            adBox.timerRunning = true;
            adBox.timer = window.setTimeout(() => {
              this.interSectionObserver.unobserve(adBox);
              this.firePixel("mrc_50_1s");
            }, 1000);
          }
        } else if (adBox.timerRunning) {
          window.clearTimeout(adBox.timer);
          adBox.timerRunning = false;
        }
      });
    };
  
    init() {
  
      if (typeof (window.$sf) !== "undefined" || typeof (window.parent.$sf) !== "undefined") {

        let sf = window.$sf ? window.$sf : window.parent.$sf;

        this.frameType = "frametype=safeframe";

        let viewableTimerId = 0;
        let viewableFired = false;
  
        const notifyViewablePassed = () => {
          if (viewableFired) return;
          viewableFired = true;
          viewableTimerId = 0;
          this.firePixel("mrc_50_1s");
        };
  
        const statusUpdate = () => {
        console.log("statusUpdate");
          if (sf.ext.inViewPercentage() > 50) {
            if (viewableTimerId == 0) {
              viewableTimerId = setTimeout(function () {
                notifyViewablePassed();
              }, 1000);
            }
          } else {
            clearTimeout(viewableTimerId);
          }
        };
  
        sf.ext.register(
          this.rootElement.clientWidth,
          this.rootElement.clientHeight,
          statusUpdate
        );
      } else if (!window.top) {
        this.frameType = "frametype=unfriendly_iframe";
      } else {
        this.frameType = "frametype=friendly_iframe";
  
        this.interSectionObserver = new IntersectionObserver(
          this.intersectionCallback,
          this.options
        );
        this.interSectionObserver.observe(this.rootElement);
      }
      this.firePixel(this.frameType);  
    }
}

let adheseViewability = new AdheseViewability();
adheseViewability.init();
