var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

//bring in and list all the tests to be run
requirejs(['moduletest'], function(ModuleTest){
	exports.ModuleTest = ModuleTest;
});




