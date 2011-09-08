var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

//bring in and list all the tests to be run
requirejs(['./spec/ModuleSpec'], function(ModuleSpec) {
	console.log("ModuleSpec: ", ModuleSpec);
//	exports.ModuleTest = ModuleTest;
});