var requirejs = require('requirejs');
requirejs.config({
	//Pass the top-level main.js/index.js require
	//function to requirejs so that node modules
	//are loaded relative to the top-level JS file.
	nodeRequire: require,
	baseUrl: 'js'
});

requirejs(['moduletest'], function(ModuleTest){
	exports.testSomething = ModuleTest.testSomething;
	exports.testSomethingElse = ModuleTest.testSomethingElse;
});




