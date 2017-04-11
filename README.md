### NOTE:
Right now, this is a work in progress right now and cannot be used because it's broken 

Purpose of this project is to provide a small and easy to understand React/Redux SPA to use as base for further development.

### What you get:
- Browserify for packaging and serving
- ES6 js syntax
- LESS for CSS generation
- React
- Redux
- React routing for SPA navigation

### USAGE
1. CLI: run ```yarn install``` to install dependencies
2. run ```yarn start``` to start the server
3. run ```yarn all``` to build and watch the js source code
4. run ```yarn less``` to build and watch the less source code


- yarn is used as package manager
- browserify-server is used to host the files 
- browserify is used to bundle the app
- watchify is used to watch for changes and deploy them
- babelify is used to transform es6 code to es5
- babel-preset-es2015 is used to babelify es6 code
- babel-preset-react is used to babelify react code
- less is used to compile to css
- less-watch-compiler is used to watch less changes
- react-router is used for SPA routing
