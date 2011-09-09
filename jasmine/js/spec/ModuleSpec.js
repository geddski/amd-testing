var describe = describe || require('../lib/jasmine-1.1.0.rc1/jasmine').describe;
console.log('modulespec');

describe('module test', function() {
//	var isNode = typeof module !== 'undefined' && module.exports;
//	if(isNode){
//	 	require = require('requirejs');
//	}
	require([], function(){
		it('should work', function() {
			expect(3).toEqual(3);
		});

		it('should be awesome', function() {
			expect(2).toEqual(2);
		});

		it('should work in the browser and node', function() {
			expect(1).toEqual(1);
		});
	});
});