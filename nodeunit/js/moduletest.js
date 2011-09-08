define([], function() {
	return {
		testSomething : function(test) {
			test.expect(1);
			test.ok(true, "this assertion should pass");
			test.done();
		},
		testSomethingElse: function(test){
			test.ok(true, "yay!");
			test.ok(1 < 3, "wow you're good at math");
			test.done();
		}
	}
});

//define(function(require, exports, module) {
//	//Put traditional CommonJS module content here
//	console.log('hola');
//});

//(function (name, definition) {
//	var theModule = definition(),
//		hasDefine = typeof define === 'function',
//		hasExports = typeof module !== 'undefined' && module.exports;
//
//	if (hasDefine) { // AMD Module
//		define(theModule);
//	} else if (hasExports) { // Node.js Module
//		module.exports = theModule;
//	}
//})('moduletest', function () {
//
//	// define your module here and return the public API
//	return {
//		'example test': function (test) {
//			test.ok(true, 'everything is ok');
//			test.done();
//		}
//	};
//
//});
