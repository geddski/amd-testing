define(["../SampleModule"], function(SampleModule) {

  describe("Sample Module", function() {
    it('should have a name', function() {
      expect(SampleModule.name).toBe("sample");
    });
    
    it('should state the purpose', function() {
      expect(SampleModule.purpose).toBe("AMD testing");
    });
    
    it('should store the jquery version', function() {
      expect(SampleModule.jq_version).toBe("1.6");
    });
  });
  
	return {
		name: "modulespec"
	}
});