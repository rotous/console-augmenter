require('../../dist/bundle.js');

function logSomething() {
	// Debug logging
	console.debug('logSomething()');
	// Greet the world
	console.log('Hello world');
	// Show some info
	console.info('Here\'s my advice.');
	// Show a warning
	console.warn('I\'m warning you!');
	// Show an error
	console.error('I think you made an error...');

	console.whiteline();
}

logSomething();

// Add timestamps
console.addTimestamps(true);
logSomething();
// Remove timestamps again
console.addTimestamps(false);

// Set the log level to only show warning and errors
console.logLevel(console.LL_WARN);
logSomething();
