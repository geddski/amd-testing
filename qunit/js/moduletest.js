define(['samplemodule'], function(SampleModule) {
//define([], function() {
	console.log("moduletest");
	test("a Sample Module", function() {
		ok(true, "this test is fine");
		equal(SampleModule.name, "sample", "name should be sample");
	});
});