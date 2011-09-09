var isVerbose = true;
var showColors = true;

var jasmine = require('jasmine-node');
jasmine.executeSpecsInFolder(__dirname + '/spec', function(runner, log){
	process.exit(runner.results().failedCount?1:0);
}, isVerbose, showColors);