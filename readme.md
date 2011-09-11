# AMD Testing

## purpose
Demonstrate how to test async modules (AMD) both in the browser and in NodeJS. RequireJS is the AMD loader, and several testing frameworks will be evaluated.
The goal is to find the very best test frameworks for testing AMD modules in both environments.

## Jasmine
Jasmine is working.
### Browser Testing
Open jasmine/SpecRunner.html in your browser
### Node Testing
`node runner.js`

Make sure you've installed the RequireJS npm package. This allows you to use your AMD modules in Node.
NOTE: there are a couple of ways to run Jasmine in Node: 1. use the regular standalone jasmine.js file or 2. use the 3rd party jasmine-node command-line tool.
I was not able to get it working with the command-line tool, because it searches for all tests in a specified folder and runs them, and our tests themselves are AMD modules.
If jasmine-node could run programmatically this would be no problem, but it doesn't.
I did however get the regular jasmine.js to work, creating my own runner.js file. It sets up the global jasmine variables and the RequireJS stuff.
Just run `node runner.js`.

