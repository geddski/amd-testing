define(["../SampleModule"], function(SampleModule) {

  describe("Sample Module", function() {
    it('should have a name', function() {
      expect(SampleModule.name).toBe("sample");
    });
    
    it('should state the purpose', function() {
      expect(SampleModule.purpose).toBe("AMD testing");
    });
  });
  
	return {
		name: "modulespec"
	}
});