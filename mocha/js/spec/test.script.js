Object.prototype.should = {
	equal:function () {
		return -1;
	}
};

describe('tests', function () {

	beforeEach(function () {
		console.log('before is happening');
	});

	describe('script test', function () {
		it('should work', function () {
			expect("chewy").to.be.a('string');
			expect(4).to.be.a('number');
		});
	});
});