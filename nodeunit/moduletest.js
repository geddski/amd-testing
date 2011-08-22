define(['SampleModule'], function(sample) {
	return {
		'example test': function (test) {
			test.ok(true, 'everything is ok');
			test.done();
		}
	};
});
