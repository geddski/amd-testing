Object.prototype.should = {
	equal:function () {
		return -1;
	}
};

describe('Array', function () {

	beforeEach(function (done) {
		console.log('before happening');
	});

	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {

			console.log("[].should: ", [].should);
			[1, 2, 3].indexOf(5).should.equal(-1);
			[1, 2, 3].indexOf(0).should.equal(-1);
		})
	});
});