#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"

rm -rf build
mkdir -p build

if [ -z "$customers" ]; then
  echo "customers env variable not specified"
  CUSTOMERS=$(find . -mindepth 1 -maxdepth 1 -type d -printf "%f\n" | grep -vE "build|libraries|sdk")
else
  CUSTOMERS="$customers"
fi

function build_makefile() {
  make init
  for customer in $CUSTOMERS; do
    if [[ " $(make -s print-customers) " == *" $customer "* ]]; then
      make "$customer-release"
      # copy local dist to global dist
      if [[ -d "${customer}/dist" ]] && [[ -n "$(ls -A "${customer}/dist")" ]]; then
        mkdir -p "build/release/${customer}"
        cp -r "${customer}"/dist/* "build/release/${customer}/"
      fi
    fi
  done

  for customer in $(find ./* -maxdepth 1 -mindepth 1 -type d -name 'static' | cut -d '/' -f2); do
    # copy local static to global static
    if [[ -d "${customer}/static" ]] && [[ -n "$(ls -A "${customer}/static")" ]]; then
      mkdir -p "build/static/${customer}"
      cp -r "${customer}"/static/* "build/static/${customer}/"
    fi
  done

  mkdir -p build/all
  rsync -a build/release/* build/all

  # make sure no static file attempts to override files in dist
  dir="build/static"
  pushd "$dir" >/dev/null
  conflicting_files=$(find ./* -type f -exec test -f ../all/{} \; -exec echo {} \;)
  if [ -n "$conflicting_files" ]; then
    echo "Conflict with prod files detected: $conflicting_files for $dir"
    exit 1
  fi
  popd >/dev/null
  rsync -a "$dir"/* build/all
}

build_makefile "$@"
