var requirejs = require('requirejs');

requirejs(['moduletest'], function(SampleModule){
	console.log("SampleModule: ", SampleModule);
//	exports.testSomething = function(test) {
//		test.expect(1);
//		test.ok(true, "this assertion should pass");
//		test.done();
//	};
});




