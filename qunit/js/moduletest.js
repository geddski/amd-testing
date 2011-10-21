define(['samplemodule'], function(SampleModule) {
	console.log("moduletest");
	test("sanity", function() {
		ok(true, "this test is fine");
	});
	
	test("the module name", function() {
	  equal(SampleModule.name, "sample", "name should be sample");
	});
	
	test("the module purpose", function() {
	  equal(SampleModule.purpose, "AMD testing", "purpose should be 'AMD testing'");
	});
	
	test("the module jquery version", function() {
	  equal(SampleModule.jq_version, "1.6", "jq_version should be '1.6'");
	});
});