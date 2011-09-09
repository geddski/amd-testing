var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

//bring in and list all the tests to be run
requirejs(['./spec/ModuleSpec'], function(ModuleSpec) {
	var jasmine = require('./lib/jasmine-1.1.0.rc1/jasmine').jasmine;
	var window = "hi";
	var ConsoleJasmineReporter2 = require('./lib/consoleJasmineReporter2').ConsoleJasmineReporter;
	//	console.log("ModuleSpec: ", ModuleSpec);
//		exports.ModuleSpec = ModuleSpec;
	jasmine.getEnv().addReporter(new ConsoleJasmineReporter2());
	jasmine.getEnv().execute();
});