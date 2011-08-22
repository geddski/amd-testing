define(['../src/SampleModule'], function(sample){
	/* Comment out this entire file to test just the regular script */
	describe('module test', function() {
		it('should work', function() {
			expect(1).toEqual(1);
		});
	});

	describe('sample module', function(){
		it('should have the correct properties', function(){
			expect(sample.name).toEqual('sample');
			expect(sample.purpose).toEqual('AMD testing');
		});
	});

});
