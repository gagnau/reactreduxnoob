Purpose of this project is to provide a small and easy to understand React/Redux SPA to use as base for further development.

Right now, it's a simple counter that counts up and down depending on the buttons clicked.

### What you get:
- Yarn for dependency managing
- Browserify for application packaging and serving
- ES6 js syntax
- LESS for CSS generation
- React
- Redux
- React routing for SPA navigation

### USAGE
1. Run ```yarn install``` to install dependencies
2. Run ```yarn start``` to build the code, start the application and start watching
3. Go to http://localhost:2000 to run the application
4. Run ```yarn js-lint``` to check the js code before commit

- yarn is used as dependency manager
- browserify is used to bundle the app
- browserify-server is used to host the files 
- watchify is used to watch for changes and deploy them
- babelify is used to transform es6 code to es5
- babel-preset-es2015 is used to babelify es6 code
- babel-preset-react is used to babelify react code
- less is used to compile to css
- less-watch-compiler is used to watch less changes
- react-router is used for SPA routing
- Air bnb lint rules are used with semi exception 

### ROADMAP
- Add styelint
- Add routing
