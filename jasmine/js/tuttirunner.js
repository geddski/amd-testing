var log = console.log;
var sys = require('sys');
var Tutti = require('tutti').Tutti;

function indent(str) {
	return str.split('\n').map(
		function(l) {
			return '  ' + l
		}).join('\n')
}

function display(msg) {
	if ('error' in msg) {
		log(msg.browser);
		log(indent(msg.error))
	} else if ('console' in msg) {
		log(msg.browser);
		log(indent(msg.console))
	}
}

Tutti('http://tuttijs.com:46071/66247ab4be8b9554a8a78eae2b03a39b')
	.on('message', display)
	.reset()
	.load('lib/jasmine-1.1.0.rc1/jasmine.js')
	.load('lib/consoleJasmineReporter.js')
	.load('spec/ScriptSpec.js')
	.eval('jasmine.getEnv().addReporter(new ConsoleJasmineReporter())')
	.eval('jasmine.getEnv().execute()')
	.wait('console')
	.exit();
