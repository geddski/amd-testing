var requirejs = require('requirejs');
requirejs(['lib/jasmine-1.1.0.rc1/jasmine'], function(){
	console.log('------specrunner.js run');
	//run the tests
	
//	jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
//	jasmine.getEnv().execute();
	return "specrunner";
});