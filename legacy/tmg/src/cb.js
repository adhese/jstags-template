var cX = cX || {};
cX.callQueue = cX.callQueue || [];

(function() {
    /* PIXEL TO DROP (optional) */
    var trackingPixel = '';

    /* ROUGH COMMERCIALBREAK TIMESLOTS */
/*  var commercialBreaks = [
        ['18:15:00', '18:27:00'],
        ['18:45:00', '18:57:00'],
        ['19:15:00', '19:27:00'],
        ['19:45:00', '20:57:00'],
        ['20:15:00', '20:27:00'],
        ['20:45:00', '20:57:00'],
        ['21:15:00', '21:27:00'],
        ['21:45:00', '21:57:00'],
        ['22:15:00', '22:27:00'],
    ];*/

    /* EXACT COMMERCIALBREAK TIMESLOTS */
   var commercialBreaks = [
        ['18:14:00', '18:20:00'],
        ['18:42:00', '18:53:00'],
        ['19:11:00', '19:18:00'],
        ['19:23:00', '19:25:00'],
        ['19:43:00', '19:48:00'],
        ['19:50:00', '19:55:00'],
        ['20:16:00', '20:18:00'],
        ['20:21:00', '20:22:00'],
        ['20:42:00', '20:47:00'],
        ['21:10:00', '21:17:00'],
        ['21:25:00', '21:26:00'],
        ['21:39:00', '21:41:00'],
        ['22:02:00', '22:07:00'],
        ['22:11:00', '22:18:00'],
        ['22:42:00', '22:43:00'],
        ['22:52:00', '22:54:00'],
        ['23:19:00', '23:23:00'],
        ['23:44:00', '23:46:00'],
        ['23:48:00', '23:49:00'],
    ];
    /* TIME IN MINUTES AFTER WHICH WE LABEL A USER AS NEW */
    var cookieLifeTime = 15;

    /* CHECK CONSENT IN DIDOMI BEFORE DROPPING? */
    var checkForConsent = false;


    function setCookie(name, value, expires) {
        var cookie = name + "=" + value + "; path=/; domain=." + location.hostname.replace(/^www\./i, "");

        if (typeof expires !== "undefined") {
            var now = new Date();
            now.setTime(now.getTime() + expires * 60 * 1000);
            cookie += "; expires=" + now.toUTCString();
        }
        document.cookie = cookie;
    }

    function getCookie(name) {
        var cookies = document.cookie.split(";"),
            toReturn;

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(name + "=") === 0) {
                toReturn = cookie.substring((name + "=").length, cookie.length);
            }
        }
        return toReturn;
    }

    var slot = 'undefined';

    function isItCommercialBreak() {
        var commercialBreak = false;

        for (var i = 0; i < commercialBreaks.length; i++) {
            var startTime = commercialBreaks[i][0];
            var endTime = commercialBreaks[i][1];

            currentDate = new Date()

            startDate = new Date(currentDate.getTime());
            startDate.setHours(startTime.split(":")[0]);
            startDate.setMinutes(startTime.split(":")[1]);
            startDate.setSeconds(startTime.split(":")[2]);

            endDate = new Date(currentDate.getTime());
            endDate.setHours(endTime.split(":")[0]);
            endDate.setMinutes(endTime.split(":")[1]);
            endDate.setSeconds(endTime.split(":")[2]);

            if (startDate < currentDate && endDate > currentDate) {
                commercialBreak = true;
                slot = 'N' + commercialBreaks[i][0] + ' - ' + commercialBreaks[i][1];
            }
        }
        return commercialBreak;
    }

    function firePixel(uri) {
        if (trackingPixel.length > 0) {
            var img = document.createElement('img');
            img.src = uri;
            img.style.height = "1px";
            img.style.width = "1px";
            img.style.margin = "-1px";
            img.style.border = "0";
            img.style.position = "absolute";
            img.style.top = "0";
            document.body.appendChild(img);
        }

        setCookie("newUser", newUser, cookieLifeTime);

        cX.callQueue.push(['setSiteId', '1134008386653965092']);
        cX.callQueue.push(['setEventAttributes', { origin: 'tmg-cb-log', persistedQueryId: 'c070f903e8319c92031fac3d8031dc4a196818f9' }]);
        cX.callQueue.push(['sendEvent', 'commercialbreak', { timeslot: slot }]);
    }

    var newUser = getCookie("newUser");

    if (typeof newUser === "undefined") {
        newUser = true;
    } else {
        newUser = false;
    }
    if (newUser && isItCommercialBreak()) {
        if (checkForConsent) {
            window.addEventListener('DOMContentLoaded', (event) => {
                try {
                    if (!Didomi.getUserConsentStatusForAll().purposes.disabled.length > 0) {
                        firePixel(trackingPixel);
                    }
                } catch (e) {}
            });
        } else {
            firePixel(trackingPixel);
        }
    }
})();