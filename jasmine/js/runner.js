var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

//bring in and list all the tests to be run
requirejs(['./spec/ModuleSpec'], function(ModuleSpec) {
	var jasmine = require('./lib/jasmine-1.1.0.rc1/jasmine').jasmine;
	
//	jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
//	jasmine.getEnv().execute();
	
//	console.log("ModuleSpec: ", ModuleSpec);
//	exports.ModuleTest = ModuleTest;
});