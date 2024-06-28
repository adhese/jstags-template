(function(){
    var scriptTag = document.currentScript;
    var opt = scriptTag.getAttribute('data-igmn-opt');
    if (opt == 'out') {
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src =
        "https://pool-igmn.adhese.com/tag/setcookie.html?eventName=igmn_opt=out";
        document.body.appendChild(iframe);
    }
})()
