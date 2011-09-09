console.log('running QUnit from Node');
var qunit = require('./js/lib/qunit').QUnit;
//todo this seems to work but doesn't report anything
qunit.test("a Sample Module", function() {
	qunit.ok(true, "this test is fine");
});
qunit.init();