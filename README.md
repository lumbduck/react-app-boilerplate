## Use this repo to create a React/Redux app with Node backend and Babel/Webpack for client compatibility

### Steps to start building your app
1. Copy/clone entire contents of this project to your new (empty) project folder (make sure to include .babelrc; a base .gitignore file is also included if desired)
2. Ensure you are using npm v6.14.x or higher (`npm -v`) and node v13.12.x or higher (`node -v`)
3. In the root directory of your new project, run the following to install Babel, React, Webpack, and other tools:
    - `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
    - `npm install react react-dom`
    - `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader`
    - `npm install redux react-redux`
    - optional: `npm install redux-persist` to provide basic persistent data storage
4. To enable hot loading, which will automatically refresh your browser window during development, run `npm install --save-dev react-hot-loader`.

    NOTE: If you do not want to enable hot loading, do not run this command. Instead, open src/App.js and change line 10 to `export default App`.
5. Finally, run `npx webpack-dev-server --hot --mode development` to launch the app in development mode (if you skipped step 4, then omit `--hot` from the launch command). You should be able to see the page ./public/index.html at http://localhost:3000/. It simply renders "Hello, World!"
6. If you would like a shorter alias for launching the app, you can insert the following code as a new line at line 7 of package.json: `"dev": "npx webpack-dev-server --hot --mode development",` (if you skipped step 4, then omit `--hot` from this line). (It's possible that package.json will be different than at the time of writing this. Note that the new line should be inside the `scripts` object, which also contains an entry for `"test"`. Place the line above `"test": ...` and make sure to include the comma so that these fields are properly separated.) Now you can simply run `npm run dev` as an alias for the command in step 5.
7. You may also like to see the dist folder which is typically surpressed when running webpack in development mode. You can add another alias, `"build": "npx webpack --mode development",`, after the `"dev": ...` alias added in step 6. Running `npm run build` will now populate the dist folder in you project root.
