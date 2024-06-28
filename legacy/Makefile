ignore:
#

CUSTOMERS :=

RELEASES := $(CUSTOMERS:%=%-release)

print-customers:
	echo "${CUSTOMERS}"

release-all: init ${RELEASES}

init:
	for c in $$(make --quiet print-customers); do mkdir -p "$$c/dist"; done

server:
	python -m SimpleHTTPServer

