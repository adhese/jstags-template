# Jstags

These are custom customer files that end up at: `https://pool-$customer.adhese.com/tag/*`.
Usually it's Adhese [sdk](https://github.com/adhese/sdk_typescript) `tag.js` with some customer-specific customizations around it.

## Init
1. Fork `adhese/jstags-template` repo as `jstags` into your organisation eg. `your-org/jstags`
2. Clone your fork locally
3. Give `adhese-ci` GitHub user access to the forked repo
 
## Working with the upstream and the forked repos
- Customer -related change? -> merge to your fork `your-org/jstags`
- Github actions build/release script -related updates? -> make a PR in `adhese/jstags-template`

## Keeping up-to-date with the upstream repo
1. (one time action) Add `template` as a remote:
   ```
   git remote add template git@github.com:adhese/jstags_template.git
   ```
2. To synchronize with the upstream changes run:
   ```
    git fetch template && git merge template/main
    ```

## Structure
Supported types of jstags:
* NPM-based (`vite` dir)

### NPM-based jstags (`vite` dir)
All the build process is managed with NPM `vite/package.json` file.
* All the dependencies are pulled from the NPM repo.
* `npm run build` is supposed to generate a build artifact in `vite/dist/$customer`.
* `npm run serve --customer customerx` will start a dev http server and host customer resources at `http://localhost:8080/tag/resource_name.here`

## Dir structure
```
├── common                  # resources shared between multiple customers 
│   ├── partials              # html templates/partials
│   └── src                   # generic *.ts utils
├── customers               
│   ├── customerx             # files specific for customerx
│   │   ├── bye.html
│   │   ├── hello.html
│   │   └── src
│   └── customery             # files specific for customery
│       ├── hello.html
│       └── src
```
## Build setup
Single customer file-structure could look like:
```
├── bye.html      
├── hello.html     # html file to be published at https://pool-customerx.adhese.com/tag/hello.html
└── src
    ├── _bye.ts    # private resource, it won't be available at any predictable url
    ├── _hello.ts  
    ├── lib.ts     # js lib to be published at https://pool-customerx.adhese.com/tag/lib.js    
    └── tag.ts
```

## Proposed workflow
1. Make a PR with jstag changes for customer `xyz`
2. Deploy to test
   * Run `Publish` GitHub action with parameters:
      * branch: your-pr-branch
      * customer: `xyz`
      * env: `test`
   * Check your results at `https://pool-xyz.adhese.com/tag/test/*`.
3. Merge the PR
4. Deploy to prod happens automatically
   * Check your results at `https://pool-xyz.adhese.com/tag/*`.

## Adding a new customer
1. Add the new dir structure and files for the new customer
2. Run the `Publish` GitHub action
3. Declare (or ask Adhese support to) the new customer in the jstags config in the [Projects repo](https://github.com/adhese/projects/blob/jstags/config.json)

## Publish process - technicalities
The `Publish` github action:
* builds the artifact
* converts it to an NPM package

This is then picked up by the workflow in [projects](https://github.com/adhese/projects) repo, which:
* downloads the package
* uploads it to the correct s3 location (with --delete flag, all the manual s3 changes will be discarded)
