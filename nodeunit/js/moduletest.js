define(['./SampleModule', 'nodeunit'], function(SampleModule, nodeunitNode) {
	//browsers have the global nodeunit already available
	var nu = nodeunitNode || nodeunit;
	
	return nu.testCase({
		setUp: function (callback) {
			this.foo = "hi";
			callback();
		},
		tearDown: function (callback) {
			this.foo = "";
			callback();
		},
		'AMD Module': function(test){
			test.ok(SampleModule.name == 'sample');
			test.done();
		},
		testSomething : function(test) {
			test.ok(this.foo == 'hi', 'foo should be hi');
			test.ok(true, "this assertion should pass");
			test.done();
		},
		testSomethingElse : function(test) {
			test.ok(true, "yay!");
			test.ok(1 < 3, "wow you're good at math");
			test.done();
		}
	})
});