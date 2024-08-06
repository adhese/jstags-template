# Jstags

These are custom customer files that end up at: `https://pool-$customer.adhese.com/tag/*`.
Usually it's Adhese [sdk](https://github.com/adhese/sdk) `tag.js` with some customer-specific customizations around it.

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

## Structure
Supported types of jstags:
* NPM-based
* Makefile-based (legacy)

### NPM-based jstags
All the build process is managed with NPM `package.json` file.
* All the dependencies are pulled from the NPM repo (no need to rely on the `sdk` git submodule).
* `npm run build` is supposed to generate a build artifact in `customers/$customer/dist`.

### Makefile-based jstags

#### Dir structure
```
legacy/$customer
├── src        - sources that get processed by the `$customer-release` job in the Makefile
├── dist       - outputs of the `$customer-release` job (it's all .gitignored!)
└── static     - static files that should get deployed "as is"
```

In `Makefile` there should be a task `$customer-release`. It should put all its outputs to the `$customer/dist` directory.
The `dist` and `static` dirs are merged and published together.

**Note: Do not place any `.js` files in `static` dir!*** All the `.js` all should go through the Makefile pipeline (eg. to get minified).
There's a number of files that break this rule - it's all legacy files that were placed directly on s3, and there's no `Makefile` job for them.

## Proposed workflow
1. Make a PR with jstag changes for customer `xyz`
2. Deploy to test
   * Run [Publish action](https://github.com/adhese/jstags/actions/workflows/publish.yml) with parameters:
      * branch: your-pr-branch
      * customer: `xyz`
      * env: `test`
   * Check your results at `https://pool-xyz.adhese.com/tag/test/*`.
3. Merge the PR
4. Deploy to prod
   * Run [Publish action](https://github.com/adhese/jstags/actions/workflows/publish.yml) with parameters:
      * branch:
      * customer: `xyz`
      * env: `prod`
   * Check your results at `https://pool-xyz.adhese.com/tag/*`.

## Adding a new customer
1. Add the new dir structure and files for the new customer
2. Run the [Publish action](https://github.com/adhese/jstags/actions/workflows/publish.yml)
3. Declare the new customer in the jstags config in the [Projects repo](https://github.com/adhese/projects/blob//jstags/config.json)

## Publish process - technicalities
The `Publish` github action:
* builds the artifact
* converts it to an NPM package

This is then picked up by the workflow in [projects](https://github.com/adhese/projects) repo, which:
* downloads the package
* uploads it to the correct s3 location (with --delete flag, all the manual s3 changes will be discarded)
