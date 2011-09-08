define(function(require, exports, module) {
	var testCase = require('nodeunit').testCase;

	exports.testSomething = function(test) {
		test.expect(1);
		test.ok(true, "this assertion should pass");
		test.done();
	};
	exports.testSomethingElse = function(test) {
		test.ok(true, "yay!");
		test.ok(1 < 3, "wow you're good at math");
		test.done();
	};
});
