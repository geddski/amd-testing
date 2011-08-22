define(['../src/SampleModule'], function(sample){
	describe('general test', function() {
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
