# Jstags

## Init
1. Fork `adhese/jstags-template` repo as `jstags` into your organisation eg. `your-org/jstags`
2. Clone your fork locally
 
## Working with the upstream and the forked repos
- All the customer-related changes should be committed to the forked repo
- All the github actions build/release script updates should be committed to the forked repo

## Keeping up-to-date with the upstream repo
1. (one time action) Add `template` as a remote:
   ```
   git remote add template git@github.com:adhese/jstags_template.git
   ```
2. To synchronize with the upstream changes run:
   ```
    git fetch template && git merge template/legacy
    ```
