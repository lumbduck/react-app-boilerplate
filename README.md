## Use this repo to create a React/Redux app with Node backend and Babel/Webpack for client compatibility

### Steps to start building your app
1. Copy/clone entire contents of this project to your new (empty) project folder (make sure to include .babelrc; a base .gitignore file is also included if desired)
2. Ensure you are using npm v6.14.x or higher (`npm -v`) and node v13.12.x or higher (`node -v`)
3. In the root directory of your new project, run the following to install Babel, React, Webpack, and other tools:
    - `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
    - `npm install react react-dom`
    - `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader`
    - `npm install redux react-redux reselect`
    - optional (to provide support for local persistent storage):
        - `npm install redux-persist`
        - NOTE: if you skip this step, see imports and comments in both `src/store.js` and `src/index.js`
        for some boilerplate that needs to be _removed_.
    - optional (to provide support for dispatching async actions):
        - `npm install redux-thunk redux-devtools-extension @babel/runtime`
        - `npm install --save-dev @babel/plugin-transform-runtime`
        - NOTE: if you skip this step, remove `"@babel/plugin-transform-runtime"` from the `plugins` array in `.babelrc`, and see imports and comments in `src/store.js` for some additional boilerplate that needs to be _removed_.
    - optional (to enable hot loading):
        - `npm install --save-dev react-hot-loader`
        - NOTE: if you skip this step, replace the `default export` in `src/App.js` with `export default App`, and omit the `--hot` option from your launch command in steps 4 and 5, below.
4. Finally, run `npx webpack-dev-server --hot --mode development` to launch the app in development mode (if you skipped step 4, then omit `--hot` from the launch command). You should be able to see the page ./public/index.html at http://localhost:3000/. It simply renders "Hello, World!"
5. If you would like a shorter alias for launching the app, you can insert the following into the `scripts` object in `package.json`: `"dev": "npx webpack-dev-server --hot --mode development",` (if you skipped step 4, then omit `--hot` from this line). Now you can simply run `npm run dev` as an alias for starting the dev build.
6. You may also like to see the dist folder which is typically suppressed when running webpack in development mode. You can add another alias, `"build": "npx webpack --mode development",`, after the `"dev": ...` alias added in step 6. Running `npm run build` will now populate the dist folder in you project root.

### Additional features
That's a lot of frontend power, but here are some other recommendations for `npm` packages that can be useful to install:
- `styled-components`: for dynamically styling components
- `mocha` and `chai`: for testing
    - Install these alongside `@babel/register`, using the `--save-dev` flag for all 3 packages.
    - To test async Thunks, also install `sinon`, `node-fetch`, and `fetch-mock`, also using the `--save-dev` flag.
    - For copy/paste convenience, here's the entire installation:
        - `npm install --save-dev mocha chai @babel/register sinon node-fetch fetch`
    - To optimize `npm run test`, you'll want to assign the `test` alias in `package.json` to something like the following: `"mocha \"src/**/*.test.js\" --require @babel/register --recursive"`. This will allow you to write `describe(...)` style tests in `*.test.js` files anywhere in your project without worrying about exports.
- `jest`: an alternative to `mocha` and `chai` for testing
    - Also needs `babel` support and a different `npm run test` alias. See: https://redux.js.org/recipes/writing-tests for more info.
