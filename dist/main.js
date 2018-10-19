import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es7.object.values";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  "use strict";

  var LL_0 = 0;
  var LL_1 = 1;
  var LL_2 = 2;
  var LL_3 = 3;
  var LL_4 = 4;
  var LL_5 = 5;
  var logLevels = {
    LL_ALL: LL_0,
    LL_LOG: LL_1,
    LL_INFO: LL_2,
    LL_WARN: LL_3,
    LL_ERROR: LL_4,
    LL_NONE: LL_5
  };
  var config = {
    timestamps: false,
    logLevel: logLevels.LL_ALL
  };
  var orig = null;

  if (console && (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object') {
    orig = _objectSpread({}, console);

    var augmentedConsole = _objectSpread({}, logLevels, {
      /**
       * Configure the console functions
       * @param {Object} configObj Object with the new configuration
       */
      configure: function configure(configObj) {
        if (_typeof(configObj) !== 'object') {
          return;
        }

        if (configObj.logLevel) {
          console.logLevel(level);
        }

        if (configObj.timestamp) {
          console.timestamp(configObj.timestamp);
        }
      },

      /**
       * Set the log level of the function log, info, warn, error
       * @param {Number} level the new log level. Can be one of
       * console.LL_ALL, console.LL_WARN, console.LL_ERROR, or console.LL_NONE
       */
      logLevel: function logLevel(level) {
        if (!Object.values(logLevels).includes(level)) {
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
      addTimestamps: function addTimestamps(set) {
        if (set !== !!set) {
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
      whiteline: function whiteline(n) {
        if (typeof n !== 'number' || parseInt(n) !== n) {
          n = 1;
        }

        for (var i = 0; i < n; i++) {
          orig.log('');
        }
      },

      /**
       * Enhance the debug function
       * @param  {...any} args the arguments passed to the log function
       */
      debug: function debug() {
        var _orig, _orig2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (config.logLevel > logLevels.LL_ALL) {
          return;
        }

        if (config.timestamps) {
          args = ['[' + new Date().toLocaleString() + ']'].concat(_toConsumableArray(args));
        }

        return orig.debug ? (_orig = orig).debug.apply(_orig, _toConsumableArray(args)) : (_orig2 = orig).log.apply(_orig2, _toConsumableArray(args));
      },

      /**
       * Enhance the default log function
       * @param  {...any} args the arguments passed to the log function
       */
      log: function log() {
        var _orig3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (config.logLevel > logLevels.LL_LOG) {
          return;
        }

        if (config.timestamps) {
          args = ['[' + new Date().toLocaleString() + ']'].concat(_toConsumableArray(args));
        }

        return (_orig3 = orig).log.apply(_orig3, _toConsumableArray(args));
      },

      /**
       * Enhance the info function
       * @param  {...any} args the arguments passed to the log function
       */
      info: function info() {
        var _orig4;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        if (config.logLevel > logLevels.LL_INFO) {
          return;
        }

        if (config.timestamps) {
          args = ['[' + new Date().toLocaleString() + ']'].concat(_toConsumableArray(args));
        }

        return (_orig4 = orig).info.apply(_orig4, _toConsumableArray(args));
      },

      /**
       * Enhance the warn function
       * @param  {...any} args the arguments passed to the warn function
       */
      warn: function warn() {
        var _orig5;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        if (config.logLevel > logLevels.LL_WARN) {
          return;
        }

        if (config.timestamps) {
          args = ['[' + new Date().toLocaleString() + ']'].concat(_toConsumableArray(args));
        }

        return (_orig5 = orig).warn.apply(_orig5, _toConsumableArray(args));
      },

      /**
       * Enhance the error function
       * @param  {...any} args the arguments passed to the error function
       */
      error: function error() {
        var _orig6;

        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        if (config.logLevel > logLevels.LL_ERROR) {
          return;
        }

        if (config.timestamps) {
          args = ['[' + new Date().toLocaleString() + ']'].concat(_toConsumableArray(args));
        }

        return (_orig6 = orig).error.apply(_orig6, _toConsumableArray(args));
      } // Overwrite the console object with our updates

    });

    for (var k in augmentedConsole) {
      console[k] = augmentedConsole[k];
    }
  }
})();
//# sourceMappingURL=main.js.map