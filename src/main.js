(function() {
	"use strict";

	const LL_0 = 0;
	const LL_ALL = LL_0;
	const LL_1 = 1;
	const LL_LOG = LL_1;
	const LL_2 = 2;
	const LL_INFO = LL_2;
	const LL_3 = 3;
	const LL_WARN = LL_3;
	const LL_4 = 4;
	const LL_ERROR = LL_4;
	const LL_5 = 5;
	const LL_NONE = LL_5;

	let config = {
		timestamps: false,
		logLevel: LL_ALL,
	};

	let orig = null;

	if ( console && typeof console === 'object' ) {
		orig = {...console};

		const augmentedConsole = {
			LL_ALL,
			LL_WARN,
			LL_ERROR,
			LL_NONE,

			/**
			 * Configure the console functions
			 * @param {Object} configObj Object with the new configuration
			 */
			configure: configObj => {
				if ( typeof configObj !== 'object' ) {
					return;
				}

				if ( configObj.logLevel ) {
					console.logLevel(level);
				}
				if ( configObj.timestamp ) {
					console.timestamp(configObj.timestamp);
				}
			},

			/**
			 * Set the log level of the function log, info, warn, error
			 * @param {Number} level the new log level. Can be one of
			 * console.LL_ALL, console.LL_WARN, console.LL_ERROR, or console.LL_NONE
			 */
			logLevel: level => {
				if ( ![LL_ALL, LL_LOG, LL_INFO, LL_WARN, LL_ERROR, LL_NONE].some(l => l === level) ) {
					// Invalid value
					console.error('Invalid log level value');
					return;
				}

				config.logLevel = level;
			},

			/**
			 * Set adding timestamps to the log functions
			 * @param {Boolean} set True to add timestamps to the logs,
			 * or false to disable timestamps
			 */
			addTimestamps: set => {
				if ( set !== !!set ) {
					// Invalid value
					console.error('Invalid argument for console.timestamp(). Boolean expected.');
					return;
				}

				config.timestamps = set;
			},

			/**
			 * Write one or more whitelines to the console
			 * @param {Number} n Number of whitelines to write
			 */
			whiteline: (n) => {
				if ( typeof n !== 'number' || parseInt(n) !== n ) {
					n = 1;
				}

				for ( let i=0; i<n; i++ ) {
					orig.log('');
				}
			},

			/**
			 * Add another logging function
			 * @param  {...any} args the arguments passed to the log function
			 */
			debug: (...args) => {
				if ( config.logLevel > LL_ALL ) {
					return;
				}

				if ( config.timestamps ) {
					args = [
						'[' + new Date().toLocaleString() + ']',
						...args,
					];
				}

				return orig.log(...args);
			},

			/**
			 * Enhance the default log function
			 * @param  {...any} args the arguments passed to the log function
			 */
			log: (...args) => {
				if ( config.logLevel > LL_LOG ) {
					return;
				}

				if ( config.timestamps ) {
					args = [
						'[' + new Date().toLocaleString() + ']',
						...args,
					];
				}

				return orig.log(...args);
			},

			/**
			 * Enhance the info function
			 * @param  {...any} args the arguments passed to the log function
			 */
			info: (...args) => {
				if ( config.logLevel > LL_INFO ) {
					return;
				}

				if ( config.timestamps ) {
					args = [
						'[' + new Date().toLocaleString() + ']',
						...args,
					];
				}

				return orig.info(...args);
			},

			/**
			 * Enhance the warn function
			 * @param  {...any} args the arguments passed to the warn function
			 */
			warn: (...args) => {
				if ( config.logLevel > LL_WARN ) {
					return;
				}

				if ( config.timestamps ) {
					args = [
						'[' + new Date().toLocaleString() + ']',
						...args,
					];
				}

				return orig.warn(...args);
			},

			/**
			 * Enhance the error function
			 * @param  {...any} args the arguments passed to the error function
			 */
			error: (...args) => {
				if ( config.logLevel > LL_ERROR ) {
					return;
				}

				if ( config.timestamps ) {
					args = [
						'[' + new Date().toLocaleString() + ']',
						...args,
					];
				}

				return orig.error(...args);
			},
		}

		// Overwrite the console object with our updates
		for ( let k in augmentedConsole ) {
			console[k] = augmentedConsole[k];
		}
	}
}());
