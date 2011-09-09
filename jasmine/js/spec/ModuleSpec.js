
var define = define || require('requirejs');

define([], function() {
	console.log('modulespec');
	describe('module test', function() {
		it('should work in the browser', function() {
			expect(1).toEqual(1);
		});

		it('should work in node', function() {
			expect(2).toEqual(2);
		});
	});
	return {
		name: "modulespec"
	}
});