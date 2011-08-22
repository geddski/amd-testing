# AMD Testing

## purpose
Demonstrate how to test async modules (AMD) both in the browser and in NodeJS. RequireJS is the AMD loader, and several testing frameworks will be evaluated.
The goal is to find the very best test framework for testing AMD modules in both environments.

## Jasmine
The first test framework to try is Jasmine.
### Browser Testing
Open jasmine/SpecRunner.html in your browser
### Node Testing
Install jasmine-node globally `npm install jasmine-node -g`, then run `jasmine-node spec` (spec is the folder that contains the tests).
Jasmine will search for each test file in the `spec` folder and run them.
Currently tests (specs) that are regular scripts are tested just fine, but AMD modules fail with "define is not defined".
There may be a way to run jasmine-node programmatically rather than as a CL tool, but if so I haven't figured out how yet.
To see the regular script pass comment out the entire contents of `spec/ModuleSpec.js`

