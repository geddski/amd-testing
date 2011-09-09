var jasmine = jasmine || require('../lib/jasmine-1.1.0.rc1/jasmine').jasmine;
var describe = describe || require('../lib/jasmine-1.1.0.rc1/jasmine').describe;
var it = it || require('../lib/jasmine-1.1.0.rc1/jasmine').it;
var expect = expect || require('../lib/jasmine-1.1.0.rc1/jasmine').expect;
var define = define || require('requirejs');

define([], function(){
	console.log('modulespec');
	describe('module test', function() {
		it('should work in the browser and node', function() {
			expect(1).toEqual(1);
		});

		it('should work in node', function(){
			expect(2).toEqual(2);
		});
});
  return {
	  name: "modulespec"
  }
});

//todo find better way to make these globally available
//var jasmine = jasmine || require('../lib/jasmine-1.1.0.rc1/jasmine').jasmine;
//var describe = describe || require('../lib/jasmine-1.1.0.rc1/jasmine').describe;
//var it = it || require('../lib/jasmine-1.1.0.rc1/jasmine').it;
//var expect = expect || require('../lib/jasmine-1.1.0.rc1/jasmine').expect;



//describe('module test', function() {
////	var isNode = typeof module !== 'undefined' && module.exports;
////	if(isNode){
////	 	require = require('requirejs');
////	}
//
////	require(['SampleModule'], function(SampleModule){
////		console.log("SampleModule: ", SampleModule);
//		it('should work', function() {
//			expect(3).toEqual(3);
//		});
//
//		it('should be awesome', function() {
//			expect(2).toEqual(2);
//		});
//
//		it('should work in the browser and node', function() {
//			expect(1).toEqual(1);
//		});
////	});
//});