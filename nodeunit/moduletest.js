(function (name, definition) {
	var theModule = definition(),
		hasDefine = typeof define === 'function',
		hasExports = typeof module !== 'undefined' && module.exports;

	if (hasDefine) { // AMD Module
		define(theModule);
	} else if (hasExports) { // Node.js Module
		module.exports = theModule;
	}
})('moduletest', function () {

	// define your module here and return the public API
	return {
		'example test': function (test) {
			test.ok(true, 'everything is ok');
			test.done();
		}
	};

});
