#!/bin/bash

set -e

cd "$(dirname "$0")"

echo "This script is intended for Github Actions only. Do not run it locally."

if [ -z "$customers" ]; then
  echo "customers env variable not specified"
  exit 1
fi

date=$(LANG=en_us_88591; date)
date_version=$(date +'0.%Y%m%d.%H%M%S')

PACKAGE_NAMESPACE="${package_namespace:-@adhese}"
PACKAGE_NAME_PREFIX="${package_name_prefix:-jstag-}"
VERSION="${version:-$date_version}"
AUTHOR="${author:-adhese}"
REPOSITORY="${repository:-git+https://github.com/adhese/jstags.git}"
ENV="${env:-prod}"
DESCRIPTION="${description:-$date}"

if [[ "${ENV}" == "test" ]]; then
  PACKAGE_NAME_PREFIX="${PACKAGE_NAME_PREFIX}${env}-"
fi

publish_to_npm() {
  CUSTOMER="$1"
  shift

  if [ -z "${CUSTOMER}" ]; then
    echo "CUSTOMER variable not set!"
    exit 1
  fi

  if [[ -f "$CUSTOMER/package.json" ]]; then
    pushd "$CUSTOMER/dist" >/dev/null
  else
    pushd "build/all/$CUSTOMER" >/dev/null
  fi

  >.npmignore # so `npm publish` does not look at .gitignore file
  echo "${DESCRIPTION}" > README.md
  cat >package.json <<EOF
{
  "name": "${PACKAGE_NAMESPACE}/${PACKAGE_NAME_PREFIX}${CUSTOMER}",
  "version": "${VERSION}",
  "author": "${AUTHOR}",
  "license": "UNLICENSED",
  "repository": {
    "url": "$REPOSITORY"
  },
  "publishConfig": {
    "${PACKAGE_NAMESPACE}:registry": "https://npm.pkg.github.com"
  },
  "scripts": {}
}
EOF

  npm publish "$@"

  popd >/dev/null

}

for c in $customers; do
  publish_to_npm "$c" "$@"
done
