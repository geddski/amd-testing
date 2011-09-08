//todo will this work in the browser still?
var requirejs = require('requirejs');

require.paths.unshift(__dirname + '/deps');
try {
	var reporter = require('nodeunit').reporters.default;
}
catch(e) {
	console.log("Cannot find nodeunit module.");
	console.log("You can download submodules for this project by doing:");
	console.log("");
	console.log("    git submodule init");
	console.log("    git submodule update");
	console.log("");
	process.exit();
}

process.chdir(__dirname);

requirejs(['moduletest'], function(moduletest){
	console.log('moduletest: ', moduletest);
	reporter.run({
		'Sample Module' : moduletest
	});
});
//reporter.run(['scripttest.js']);