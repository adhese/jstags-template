ignore:
#

CUSTOMERS := adswag betsson bionic businessinsider candid cavai dazn drankgigant gamemania groupm igmn massarius newskoolmedia nrcmedia ster unibet hardwareluxx technologyinsider

RELEASES := $(CUSTOMERS:%=%-release)

print-customers:
	echo "${CUSTOMERS}"

release-all: init ${RELEASES}

init:
	for c in $$(make --quiet print-customers); do mkdir -p "$$c/dist"; done

server:
	python -m SimpleHTTPServer

dazn-release:
	cat dazn/src/prebid.js dazn/src/prebid_config.js > dazn/dist/prebid_adhese.js

ster-release:
	uglifyjs libraries/postscribe.js sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js  ster/src/adhese.js -m -c -o ster/dist/tag.js
	uglifyjs libraries/postscribe.js sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js  ster/src/adhese.js -b -o ster/dist/tag.src.js

ster-3pas:
	uglifyjs ster/src/adhese_3pas.js -m -c -v -o ster/dist/adhese_3pas.js

bionic-release:
	terser --compress --mangle --verbose --output bionic/dist/project_on.min.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js bionic/src/project_on.js
	terser --compress --mangle --verbose --output bionic/dist/ad.js -- bionic/src/ad.js

nrcmedia-release:
	terser --compress --mangle --verbose --output nrcmedia/dist/qv.js -- nrcmedia/src/qv.js
	terser --compress --mangle --verbose --ecma 5 --output nrcmedia/dist/tag.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js nrcmedia/src/tag.js
	terser --compress --mangle --verbose --output nrcmedia/dist/3pas.js -- nrcmedia/src/3pas.js
	terser --compress --mangle --verbose --output nrcmedia/dist/rss-parser.min.js -- nrcmedia/src/rss-parser.js
	cat sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js nrcmedia/src/tag.js > nrcmedia/dist/tag.min.src.js
	terser --compress --mangle --verbose --output nrcmedia/dist/digitalekrant.js -- nrcmedia/src/digitalekrant.js

	# legacy test setup - remove if nothing relies on its output
	terser --compress --mangle --verbose --ecma 5 --output nrcmedia/dist/tag-test.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js nrcmedia/src/tag.js
	cat sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js nrcmedia/src/tag.js > nrcmedia/dist/tag-test.min.src.js

cavai-release:
	terser --compress --mangle --verbose --output cavai/dist/event-tracker.js -- cavai/src/event-tracker.js
	terser --compress --mangle --verbose --output cavai/dist/3pas.js -- cavai/src/3pas.js
	terser --compress --mangle --verbose --output cavai/dist/fire-event.js -- cavai/src/fire-event.js
	terser --compress --mangle --verbose --output cavai/dist/vpaid.js -- cavai/src/vpaid.js

groupm-release:
	cp groupm/src/debug.html groupm/dist/debug.html

businessinsider-release:
	cp businessinsider/src/debug.html businessinsider/dist/debug.html
	terser --compress --mangle --verbose --output businessinsider/dist/prebid.js -- businessinsider/src/prebid.js
	terser --compress --mangle --verbose --output businessinsider/dist/config.js -- businessinsider/src/config.js

newskoolmedia-release:
	terser --compress --mangle --verbose --output newskoolmedia/dist/prebid.js -- newskoolmedia/src/prebid.js
	terser --compress --mangle --verbose --output newskoolmedia/dist/config.js -- newskoolmedia/src/config.js
	terser --compress --mangle --verbose --output newskoolmedia/dist/config.v2.js -- newskoolmedia/src/prebid.js newskoolmedia/src/config.v2.js

igmn-release:
	terser --compress --mangle --verbose --output igmn/dist/conv.js -- igmn/src/conv.js
	terser --compress --mangle --verbose --output igmn/dist/bannerflow.js -- igmn/src/bannerflow.js
	terser --compress --mangle --verbose --output igmn/dist/3pas.js -- igmn/src/3pas.js
	terser --compress --mangle --verbose --output igmn/dist/landing.js -- igmn/src/landing.js
	terser --compress --mangle --verbose --output igmn/dist/trackimp.js -- igmn/src/trackimp.js
	terser --compress --mangle --verbose --output igmn/dist/trackevent.js -- igmn/src/trackevent.js
	terser --compress --mangle --verbose --output igmn/dist/dpgmedia_fairplay_casino_native_tracker_121121-1x1.js -- igmn/src/dpgmedia_fairplay_casino_native_tracker_121121-1x1.js
	terser --compress --mangle --verbose --output igmn/dist/dpgmedia_fairplay_bingo_130122-1x1.js -- igmn/src/dpgmedia_fairplay_bingo_130122-1x1.js
	terser --compress --mangle --verbose --output igmn/dist/mmedia_fairplay_casino_native_tracker_230322-1x1.js -- igmn/src/mmedia_fairplay_casino_native_tracker_230322-1x1.js
	terser --compress --mangle --verbose --output igmn/dist/ad.js -- igmn/src/ad.js
	terser --compress --mangle --verbose --output igmn/dist/audience_sync.js -- igmn/src/audience_sync.js
	terser --compress --mangle --verbose --output igmn/dist/audience_sync.js -- igmn/src/audience_sync.js
	cp igmn/src/setcookie.html igmn/dist/setcookie.html
	terser --compress --mangle --verbose --output igmn/dist/optout.js -- igmn/src/optout.js
	terser --compress --mangle --verbose --output igmn/dist/realtimes.js -- igmn/src/realtimes.js
	cat igmn/src/debug.html > igmn/dist/debug.html

candid-release:
	terser --compress --mangle --verbose --ecma 5 --output candid/dist/vpaid_ad.min.js -- candid/src/vpaid_ad.js

adswag-release:
	cp adswag/src/vast.xml adswag/dist/vast.xml
	cp adswag/src/setcookie.html adswag/dist/setcookie.html
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/vpaid.js -- adswag/src/vpaid.js
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/adhese_3pas.js -- adswag/src/adhese_3pas.js
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/optout.js -- adswag/src/optout.js
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/protothema.gr.js -- adswag/src/prebid.js sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js adswag/src/protothema.gr.js
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/hardwareluxx.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js adswag/src/hardwareluxx.js
	terser --compress --mangle --verbose --ecma 5 --output adswag/dist/voetbalflitsen.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js adswag/src/voetbalflitsen.js

massarius-release:
	terser --compress --mangle --verbose --ecma 5 --output massarius/dist/tag.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js massarius/src/tag.js

betsson-release:
	terser --compress --mangle --verbose --ecma 5 --output betsson/dist/event.js --  betsson/src/event.js

unibet-release:
	terser --compress --mangle --verbose --output unibet/dist/3pas.js -- unibet/src/3pas.js
	terser --compress --mangle --verbose --output unibet/dist/viewability.js -- unibet/src/viewability.js

gamemania-release:
	cp gamemania/src/config.js gamemania/dist/config.js

hardwareluxx-release:
	terser --compress --mangle --verbose --ecma 5 --output hardwareluxx/dist/config.js -- sdk/src/*.js sdk/src/detection/Detection.js sdk/src/ajax/*.js sdk/src/events/*.js  sdk/src/Helper.js sdk/src/safeframe/SafeFrame.js sdk/src/safeframe/js/lib/base.js sdk/src/safeframe/js/host/host.js sdk/src/safeframe/js/lib/boot.js sdk/src/safeframe/js/ext/ext.js hardwareluxx/src/config.js

marktplaats-release:
	cat marktplaats/src/debug.html > marktplaats/dist/debug.html

talpa-release:
	terser --compress --mangle --verbose --ecma 5 --output talpa/dist/sync.min.js -- talpa/src/sync.js
	terser --compress --mangle --verbose --ecma 5 --output talpa/dist/embed_jwp.min.js -- talpa/src/embed_jwp.js

technologyinsider-release:
	terser --compress --mangle --verbose --ecma 5 --output technologyinsider/dist/config.js -- technologyinsider/src/config.js

tmg-3pas:
	uglifyjs tmg/src/adhese_3pas.js -m -c -v -o tmg/dist/adhese_3pas.js

drankgigant-release:
	cp drankgigant/src/config-acceptance.js drankgigant/dist/config-acceptance.js