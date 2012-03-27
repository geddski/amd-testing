buster.spec.expose();

describe('tests', function () {

  before(function () {
    console.log('before is happening');
  });

  describe('script test', function () {
    it('should work', function () {
      expect(true).toEqual(true);
    });
  });
});