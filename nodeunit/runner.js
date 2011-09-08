var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require,
	baseUrl: 'js'
});

requirejs(['moduletest'], function(ModuleTest){
	exports.ModuleTest = ModuleTest;
});




