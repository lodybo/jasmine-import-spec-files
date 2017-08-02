# Splitting Protractor tests across multiple files
## !! EXPERIMENT !!

This purpose of this repo is to demonstrate a way to split protractor tests across multiple files.
This is especially handy for large test suites, where tests can be split in single-purpose files.

### Using ES6
The basis of this experiment is simple: there is a top-level module (called `app.spec.ts`) which defines a `describe` function that defines the top-level suite.

After that, a second file (`_calculate.spec.ts`, for this example following Sass filename conventions) that contains the second unit test. This test (including `describe` for the suite name) is wrapped in a function that gets `export`'ed. The top-level file `import`'s that function and simply executes it.

Maybe there's a better way to do this, but this is *a* way.

### Page Objects
- (There is also a way to use Page Objects to extract interfacing with layouts)[https://stackoverflow.com/questions/33442338/is-there-a-tool-to-split-protractor-tests-into-component-files]. This is not exactly the same (the answer doesn't demonstrate splitting), but since Page Objects *do* exemplify modularity and fit in the single-purpose paradigm. Also, Page Objects are functions which can be `export`'ed from from their module file (much like this example).