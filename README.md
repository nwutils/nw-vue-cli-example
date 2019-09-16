# nw-vue-cli-example

NW.js + Vue-CLI 3 example

![A screenshot of the default app running on Windows](screenshot.png)

* NW.js
* Vue-CLI 3
* Vue 2
* Vue-DevTools
* Babel
* ESLint
* Jest


## Running Locally for development

1. `npm install`
1. `npm start`
1. An empty window will pop up while Webpack warm ups
1. Once Webpack is running, refresh the window and you're golden


## Building for distribution

1. `npm run build:clean` will delete your `./dist` and `./dist-vue` folders
1. `npm run build:vue` will build just your Vue app for distribution (`./dist-vue`)
1. `npm run build:nw` will build just your NW.js app (`./dist`)
1. `npm run build` is your all-in-one command. It will clean out the old dist folders and build your Vue and NW.js app


# **IMPORTANT NOTE ABOUT BUILDS!!!**

They take a long time. If you do `npm run build` expect it to take 10-30 minutes (depending on amount of dependencies in the dist and your CPU/internet). This can be adjusted by changing the build params in the `package.json`. The more platforms and build types, the longer it takes.


## Automated quality enforcment

1. **Linting:** `npm run lint` - Uses rules in `./eslint.json`
1. **Unit tests:** `npm run test:unit` - [Jest](https://jestjs.io).
1. **End-to-end:** `npm run test:e2e` - Accepting PR to make tests run in NW.js. - [Nightwatch](https://nightwatchjs.org).


### Customize configuration

Want Vue-Router? Vuex? Use the Vue-CLI to add them:

* [Vue-CLI documentation](https://cli.vuejs.org/config).


* * *


## Alternatives

* [nwjs-vue](https://github.com/elegantweb/nwjs-vue) - Uses Vue-CLI 2
* [vue-desktop-basic](https://github.com/TheJaredWilcurt/vue-desktop-basic) - Does not use a build system at all, all `.vue` files run directly in the browser context


* * *


## Maintainence of this repo

This is not for those *using* this repo, but for those *maintaining* it.

1. When updating the version of NW.js devDependency, also update these:
  * `tests/unit/setup.js`
  * `tests/unit/components/__snapshots__/HelloWorld.test.js.snap`
  * `.browserslistrc`
1. Run `npm run regression` after updating dependencies or other major changes to verify builds still work correctly
