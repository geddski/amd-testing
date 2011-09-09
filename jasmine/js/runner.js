var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

//make jasmine available globally like it is in the browser
global.describe = require('./lib/jasmine-1.1.0.rc1/jasmine').describe;
global.it = require('./lib/jasmine-1.1.0.rc1/jasmine').it;
global.expect = require('./lib/jasmine-1.1.0.rc1/jasmine').expect;

//bring in and list all the tests to be run
requirejs(['./spec/ModuleSpec'], function(ModuleSpec) {
	var jasmine = require('./lib/jasmine-1.1.0.rc1/jasmine').jasmine;
	var window = "hi";
	var ConsoleJasmineReporter2 = require('./lib/consoleJasmineReporter2').ConsoleJasmineReporter;
//		console.log("ModuleSpec: ", ModuleSpec);
//		exports.ModuleSpec = ModuleSpec;
	jasmine.getEnv().addReporter(new ConsoleJasmineReporter2());
	jasmine.getEnv().execute();
});