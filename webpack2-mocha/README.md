# Webpack 2 + MarionetteJS + Babel/ES6 + Mocha Test Runner

This is a modern JS skeleton with MarionetteJS for [Webpack 2](https://webpack.js.org/).
Added integration with

- Mocha test runner, using [mocha-webpack](https://github.com/zinserjan/mocha-webpack)
- IDE integration, additonal vscode settings to enable running & debug tests in [Visual Studio Code](http://zinserjan.github.io/mocha-webpack/docs/guides/ide-integration.html#debug-in-visual-studio-code)
- [Code coverage](http://zinserjan.github.io/mocha-webpack/docs/guides/code-coverage.html) with nyc and istanbul-instrumenter-loader


## Getting started

* Install:
    * Inside this folder run: `npm install`
* Run:
    * `npm start` — starts project
    * `npm run build` - builds you project
    * `npm run test` - run test with watch mode for continuous feedback
    * `npm run test-ci` - run test once
    * `npm run cover` - run code coverage
    
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` and `app/styles/` to `public/`.
