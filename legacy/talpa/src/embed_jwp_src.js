var adhese = require('adhese');

let adheseConfig = {
  account: 'talpa',
  slots: [
    'kijk.nl_web_pre-previd30',
    'kijk.nl_web_mid1-previd30',
    'kijk.nl_web_mid2-previd30',
    'kijk.nl_web_mid3-previd30',
    'kijk.nl_web_post-previd30'
  ],
  videoId: 'VID222222', // video id for contextual lookups - mediaId
  userId: 'TLP123456', // talpa user id for dmp segments
  deviceType: 'desktop', // desktop, mobile, tablet, tv
  consentString: 'CO-a1S7O-a1S7AHABBENBECgAP_AAE_AAAAAHKtf_X_fb3_j-_59_9t0eY1f9_7_v20zjgeds-8Nyd_X_L8X52M7vF36pq4KuR4Eu3LBIQdlHOHcTUmw6IkVqTPsbk2Mr7NKJ7PEinMbe2dYGH9_n9XTuZKY79_s___z__-__v__77f__-3_3_vp9V---_fgcqASYal8BFmJY4Ek0aVQogQhXEh0AIAKKEYWiawgJXBTsrgI_QQMAEBqAjAiBBiCjFkEAAAAASURASAHggEQBEAgABACpAQgAI0AQWAEgYBAAKAaFgBFAEIEhBkcFRymBARItFBPJGAJRd7GGEIZRQAUCj-AEGgTgAqACsAFwAQwAyABlgDUAGyAOwAfgBAACCgEYAKWAU8Aq8BaAFpANYAbwA6oB8gENgIdAReAkQBNgCdgFIgLkAYEAwkBh4DGAGTgM5AZ4Az4ByQDlBECIAFQAVgAuACGAGQAMsAagA2QB2AD8AIAARgApYBTwCrgGsAOqAfIBDYCHQEXgJEATYAnYBSIC5AGBAMJAYeAycBnIDPgHJAOUAAA.f_gACfgAAAAA',
  debug: true,
  maxCpm: 40
};

adhese.getAdheseAds(undefined, adheseConfig).then((response) => {
  window.dispatchEvent(new CustomEvent('AdheseReady', { detail: response }));
});

// event listener for Adhese, when AdheseReady is fired, all bids have been collected and the custom targets for freewhee are available
// call player setup and initialisation
window.addEventListener("AdheseReady",
  function (event) {
    window.playerConfig.advertising.freewheel.custom = Object.assign(event.detail.freewheel_config, window.playerConfig.advertising.freewheel.custom);
    setupTalpaPlayer();
  }
  , false);

// to build: resolve npm requirements and browserify embed_jwp_src.js -o embed_jwp.js