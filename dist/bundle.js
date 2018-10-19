(function () {
  'use strict';

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var _toInteger$1 = /*#__PURE__*/Object.freeze({
    default: _toInteger,
    __moduleExports: _toInteger
  });

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _defined$1 = /*#__PURE__*/Object.freeze({
    default: _defined,
    __moduleExports: _defined
  });

  var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

  var defined = ( _defined$1 && _defined ) || _defined$1;

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _stringAt$1 = /*#__PURE__*/Object.freeze({
    default: _stringAt,
    __moduleExports: _stringAt
  });

  var _library = false;

  var _library$1 = /*#__PURE__*/Object.freeze({
    default: _library,
    __moduleExports: _library
  });

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _global$1 = /*#__PURE__*/Object.freeze({
    default: _global,
    __moduleExports: _global
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.7' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _core$1 = /*#__PURE__*/Object.freeze({
    default: _core,
    __moduleExports: _core,
    version: _core_1
  });

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _isObject$1 = /*#__PURE__*/Object.freeze({
    default: _isObject,
    __moduleExports: _isObject
  });

  var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

  var _anObject = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _anObject$1 = /*#__PURE__*/Object.freeze({
    default: _anObject,
    __moduleExports: _anObject
  });

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _fails$1 = /*#__PURE__*/Object.freeze({
    default: _fails,
    __moduleExports: _fails
  });

  var require$$1 = ( _fails$1 && _fails ) || _fails$1;

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !require$$1(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var _descriptors$1 = /*#__PURE__*/Object.freeze({
    default: _descriptors,
    __moduleExports: _descriptors
  });

  var require$$0 = ( _global$1 && _global ) || _global$1;

  var document = require$$0.document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document) && isObject(document.createElement);
  var _domCreate = function (it) {
    return is ? document.createElement(it) : {};
  };

  var _domCreate$1 = /*#__PURE__*/Object.freeze({
    default: _domCreate,
    __moduleExports: _domCreate
  });

  var require$$0$1 = ( _descriptors$1 && _descriptors ) || _descriptors$1;

  var require$$2 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

  var _ie8DomDefine = !require$$0$1 && !require$$1(function () {
    return Object.defineProperty(require$$2('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
    default: _ie8DomDefine,
    __moduleExports: _ie8DomDefine
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
    default: _toPrimitive,
    __moduleExports: _toPrimitive
  });

  var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

  var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

  var toPrimitive = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

  var dP = Object.defineProperty;

  var f = require$$0$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _objectDp$1 = /*#__PURE__*/Object.freeze({
    default: _objectDp,
    __moduleExports: _objectDp,
    f: f
  });

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
    default: _propertyDesc,
    __moduleExports: _propertyDesc
  });

  var dP$1 = ( _objectDp$1 && _objectDp ) || _objectDp$1;

  var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

  var _hide = require$$0$1 ? function (object, key, value) {
    return dP$1.f(object, key, descriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _hide$1 = /*#__PURE__*/Object.freeze({
    default: _hide,
    __moduleExports: _hide
  });

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _has$1 = /*#__PURE__*/Object.freeze({
    default: _has,
    __moduleExports: _has
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _uid$1 = /*#__PURE__*/Object.freeze({
    default: _uid,
    __moduleExports: _uid
  });

  var require$$0$2 = ( _hide$1 && _hide ) || _hide$1;

  var has = ( _has$1 && _has ) || _has$1;

  var uid = ( _uid$1 && _uid ) || _uid$1;

  var core = ( _core$1 && _core ) || _core$1;

  var _redefine = createCommonjsModule(function (module) {
  var SRC = uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || require$$0$2(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || require$$0$2(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === require$$0) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      require$$0$2(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      require$$0$2(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  });

  var _redefine$1 = /*#__PURE__*/Object.freeze({
    default: _redefine,
    __moduleExports: _redefine
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _aFunction$1 = /*#__PURE__*/Object.freeze({
    default: _aFunction,
    __moduleExports: _aFunction
  });

  var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _ctx$1 = /*#__PURE__*/Object.freeze({
    default: _ctx,
    __moduleExports: _ctx
  });

  var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

  var ctx = ( _ctx$1 && _ctx ) || _ctx$1;

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? require$$0 : IS_STATIC ? require$$0[name] || (require$$0[name] = {}) : (require$$0[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, require$$0) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) require$$0$2(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  require$$0.core = core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _export$1 = /*#__PURE__*/Object.freeze({
    default: _export,
    __moduleExports: _export
  });

  var _iterators = {};

  var _iterators$1 = /*#__PURE__*/Object.freeze({
    default: _iterators,
    __moduleExports: _iterators
  });

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var _cof$1 = /*#__PURE__*/Object.freeze({
    default: _cof,
    __moduleExports: _cof
  });

  var cof = ( _cof$1 && _cof ) || _cof$1;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

  var _iobject$1 = /*#__PURE__*/Object.freeze({
    default: _iobject,
    __moduleExports: _iobject
  });

  var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return IObject(defined(it));
  };

  var _toIobject$1 = /*#__PURE__*/Object.freeze({
    default: _toIobject,
    __moduleExports: _toIobject
  });

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _toLength$1 = /*#__PURE__*/Object.freeze({
    default: _toLength,
    __moduleExports: _toLength
  });

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
    default: _toAbsoluteIndex,
    __moduleExports: _toAbsoluteIndex
  });

  var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

  var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

  var toAbsoluteIndex = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
    default: _arrayIncludes,
    __moduleExports: _arrayIncludes
  });

  var require$$0$3 = ( _library$1 && _library ) || _library$1;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = require$$0[SHARED] || (require$$0[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: require$$0$3 ? 'pure' : 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _shared$1 = /*#__PURE__*/Object.freeze({
    default: _shared,
    __moduleExports: _shared
  });

  var require$$0$4 = ( _shared$1 && _shared ) || _shared$1;

  var shared = require$$0$4('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };

  var _sharedKey$1 = /*#__PURE__*/Object.freeze({
    default: _sharedKey,
    __moduleExports: _sharedKey
  });

  var require$$0$5 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

  var require$$1$1 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

  var arrayIndexOf = require$$0$5(false);
  var IE_PROTO = require$$1$1('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
    default: _objectKeysInternal,
    __moduleExports: _objectKeysInternal
  });

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
    default: _enumBugKeys,
    __moduleExports: _enumBugKeys
  });

  var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

  var require$$0$6 = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, require$$0$6);
  };

  var _objectKeys$1 = /*#__PURE__*/Object.freeze({
    default: _objectKeys,
    __moduleExports: _objectKeys
  });

  var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

  var _objectDps = require$$0$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) dP$1.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var _objectDps$1 = /*#__PURE__*/Object.freeze({
    default: _objectDps,
    __moduleExports: _objectDps
  });

  var document$1 = require$$0.document;
  var _html = document$1 && document$1.documentElement;

  var _html$1 = /*#__PURE__*/Object.freeze({
    default: _html,
    __moduleExports: _html
  });

  var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

  var require$$2$1 = ( _html$1 && _html ) || _html$1;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = require$$1$1('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require$$2('iframe');
    var i = require$$0$6.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    require$$2$1.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][require$$0$6[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _objectCreate$1 = /*#__PURE__*/Object.freeze({
    default: _objectCreate,
    __moduleExports: _objectCreate
  });

  var _wks = createCommonjsModule(function (module) {
  var store = require$$0$4('wks');

  var Symbol = require$$0.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var _wks$1 = /*#__PURE__*/Object.freeze({
    default: _wks,
    __moduleExports: _wks
  });

  var require$$0$7 = ( _wks$1 && _wks ) || _wks$1;

  var def = dP$1.f;

  var TAG = require$$0$7('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
    default: _setToStringTag,
    __moduleExports: _setToStringTag
  });

  var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

  var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  require$$0$2(IteratorPrototype, require$$0$7('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };

  var _iterCreate$1 = /*#__PURE__*/Object.freeze({
    default: _iterCreate,
    __moduleExports: _iterCreate
  });

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(defined(it));
  };

  var _toObject$1 = /*#__PURE__*/Object.freeze({
    default: _toObject,
    __moduleExports: _toObject
  });

  var toObject = ( _toObject$1 && _toObject ) || _toObject$1;

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = require$$1$1('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var _objectGpo$1 = /*#__PURE__*/Object.freeze({
    default: _objectGpo,
    __moduleExports: _objectGpo
  });

  var $export$1 = ( _export$1 && _export ) || _export$1;

  var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

  var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

  var getPrototypeOf = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

  var ITERATOR = require$$0$7('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!require$$0$3 && typeof IteratorPrototype[ITERATOR] != 'function') require$$0$2(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!require$$0$3 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      require$$0$2(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var _iterDefine$1 = /*#__PURE__*/Object.freeze({
    default: _iterDefine,
    __moduleExports: _iterDefine
  });

  var require$$0$8 = ( _stringAt$1 && _stringAt ) || _stringAt$1;

  var require$$0$9 = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

  var $at = require$$0$8(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  require$$0$9(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterCall$1 = /*#__PURE__*/Object.freeze({
    default: _iterCall,
    __moduleExports: _iterCall
  });

  // check on default Array iterator

  var ITERATOR$1 = require$$0$7('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
    default: _isArrayIter,
    __moduleExports: _isArrayIter
  });

  var _createProperty = function (object, index, value) {
    if (index in object) dP$1.f(object, index, descriptor(0, value));
    else object[index] = value;
  };

  var _createProperty$1 = /*#__PURE__*/Object.freeze({
    default: _createProperty,
    __moduleExports: _createProperty
  });

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = require$$0$7('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _classof$1 = /*#__PURE__*/Object.freeze({
    default: _classof,
    __moduleExports: _classof
  });

  var classof = ( _classof$1 && _classof ) || _classof$1;

  var ITERATOR$2 = require$$0$7('iterator');

  var core_getIteratorMethod = core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

  var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
    default: core_getIteratorMethod,
    __moduleExports: core_getIteratorMethod
  });

  var ITERATOR$3 = require$$0$7('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  var _iterDetect$1 = /*#__PURE__*/Object.freeze({
    default: _iterDetect,
    __moduleExports: _iterDetect
  });

  var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

  var isArrayIter = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

  var createProperty = ( _createProperty$1 && _createProperty ) || _createProperty$1;

  var getIterFn = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

  var require$$0$a = ( _iterDetect$1 && _iterDetect ) || _iterDetect$1;

  $export$1($export$1.S + $export$1.F * !require$$0$a(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = getIterFn(O);
      var length, result, step, iterator;
      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var _flags$1 = /*#__PURE__*/Object.freeze({
    default: _flags,
    __moduleExports: _flags
  });

  var require$$2$2 = ( _flags$1 && _flags ) || _flags$1;

  // 21.2.5.3 get RegExp.prototype.flags()
  if (require$$0$1 && /./g.flags != 'g') dP$1.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: require$$2$2
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (require$$1(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !require$$0$1 && R instanceof RegExp ? require$$2$2.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export$1($export$1.S + $export$1.F * require$$1(function () { fn(1); }), 'Object', exp);
  };

  var _objectSap$1 = /*#__PURE__*/Object.freeze({
    default: _objectSap,
    __moduleExports: _objectSap
  });

  var require$$0$b = ( _objectSap$1 && _objectSap ) || _objectSap$1;

  // 19.1.2.14 Object.keys(O)



  require$$0$b('keys', function () {
    return function keys(it) {
      return getKeys(toObject(it));
    };
  });

  var f$1 = require$$0$7;

  var _wksExt = {
  	f: f$1
  };

  var _wksExt$1 = /*#__PURE__*/Object.freeze({
    default: _wksExt,
    __moduleExports: _wksExt,
    f: f$1
  });

  var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

  var defineProperty = dP$1.f;
  var _wksDefine = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = require$$0$3 ? {} : require$$0.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };

  var _wksDefine$1 = /*#__PURE__*/Object.freeze({
    default: _wksDefine,
    __moduleExports: _wksDefine
  });

  var wksDefine = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

  wksDefine('asyncIterator');

  var _meta = createCommonjsModule(function (module) {
  var META = uid('meta');


  var setDesc = dP$1.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !require$$1(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _meta$1 = /*#__PURE__*/Object.freeze({
    default: _meta,
    __moduleExports: _meta,
    KEY: _meta_1,
    NEED: _meta_2,
    fastKey: _meta_3,
    getWeak: _meta_4,
    onFreeze: _meta_5
  });

  var f$2 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$2
  };

  var _objectGops$1 = /*#__PURE__*/Object.freeze({
    default: _objectGops,
    __moduleExports: _objectGops,
    f: f$2
  });

  var f$3 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$3
  };

  var _objectPie$1 = /*#__PURE__*/Object.freeze({
    default: _objectPie,
    __moduleExports: _objectPie,
    f: f$3
  });

  var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

  var require$$0$c = ( _objectPie$1 && _objectPie ) || _objectPie$1;

  // all enumerable object keys, includes symbols



  var _enumKeys = function (it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = require$$0$c.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  var _enumKeys$1 = /*#__PURE__*/Object.freeze({
    default: _enumKeys,
    __moduleExports: _enumKeys
  });

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };

  var _isArray$1 = /*#__PURE__*/Object.freeze({
    default: _isArray,
    __moduleExports: _isArray
  });

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = require$$0$6.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$4
  };

  var _objectGopn$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopn,
    __moduleExports: _objectGopn,
    f: f$4
  });

  var require$$0$d = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = require$$0$d.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };

  var _objectGopnExt = {
  	f: f$5
  };

  var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopnExt,
    __moduleExports: _objectGopnExt,
    f: f$5
  });

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$6 = require$$0$1 ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (has(O, P)) return descriptor(!require$$0$c.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$6
  };

  var _objectGopd$1 = /*#__PURE__*/Object.freeze({
    default: _objectGopd,
    __moduleExports: _objectGopd,
    f: f$6
  });

  var require$$0$e = ( _meta$1 && _meta ) || _meta$1;

  var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

  var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

  var gOPNExt = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

  var $GOPD = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

  // ECMAScript 6 symbols shim





  var META = require$$0$e.KEY;



















  var gOPD$1 = $GOPD.f;
  var dP$2 = dP$1.f;
  var gOPN$1 = gOPNExt.f;
  var $Symbol = require$$0.Symbol;
  var $JSON = require$$0.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = require$$0$7('_hidden');
  var TO_PRIMITIVE = require$$0$7('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = require$$0$4('symbol-registry');
  var AllSymbols = require$$0$4('symbols');
  var OPSymbols = require$$0$4('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function';
  var QObject = require$$0.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = require$$0$1 && require$$1(function () {
    return create(dP$2({}, 'a', {
      get: function () { return dP$2(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$2(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
  } : dP$2;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP$2(it, HIDDEN, descriptor(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = create(D, { enumerable: descriptor(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$2(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create$$1(it, P) {
    return P === undefined ? create(it) : $defineProperties(create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$1(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, descriptor(1, value));
      };
      if (require$$0$1 && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor;
    dP$1.f = $defineProperty;
    require$$0$d.f = gOPNExt.f = $getOwnPropertyNames;
    require$$0$c.f = $propertyIsEnumerable;
    gOPS.f = $getOwnPropertySymbols;

    if (require$$0$1 && !require$$0$3) {
      redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(require$$0$7(name));
    };
  }

  $export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)require$$0$7(es6Symbols[j++]);

  for (var wellKnownSymbols = getKeys(require$$0$7.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

  $export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  $export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE || require$$1(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || require$$0$2($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(require$$0.JSON, 'JSON', true);

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = require$$0$7('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) require$$0$2(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
    default: _addToUnscopables,
    __moduleExports: _addToUnscopables
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var _iterStep$1 = /*#__PURE__*/Object.freeze({
    default: _iterStep,
    __moduleExports: _iterStep
  });

  var require$$1$2 = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

  var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = require$$0$9(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  require$$1$2('keys');
  require$$1$2('values');
  require$$1$2('entries');

  var es6_array_iterator$1 = /*#__PURE__*/Object.freeze({
    default: es6_array_iterator,
    __moduleExports: es6_array_iterator
  });

  var $iterators = ( es6_array_iterator$1 && es6_array_iterator ) || es6_array_iterator$1;

  var ITERATOR$4 = require$$0$7('iterator');
  var TO_STRING_TAG = require$$0$7('toStringTag');
  var ArrayValues = Iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = require$$0[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$4]) require$$0$2(proto, ITERATOR$4, ArrayValues);
      if (!proto[TO_STRING_TAG]) require$$0$2(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }

  var isEnum$1 = require$$0$c.f;
  var _objectToArray = function (isEntries) {
    return function (it) {
      var O = toIObject(it);
      var keys = getKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) if (isEnum$1.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      } return result;
    };
  };

  var _objectToArray$1 = /*#__PURE__*/Object.freeze({
    default: _objectToArray,
    __moduleExports: _objectToArray
  });

  var require$$0$f = ( _objectToArray$1 && _objectToArray ) || _objectToArray$1;

  // https://github.com/tc39/proposal-object-values-entries

  var $values = require$$0$f(false);

  $export$1($export$1.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  // https://github.com/tc39/Array.prototype.includes

  var $includes = require$$0$5(true);

  $export$1($export$1.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  require$$1$2('includes');

  // 7.2.8 IsRegExp(argument)


  var MATCH = require$$0$7('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };

  var _isRegexp$1 = /*#__PURE__*/Object.freeze({
    default: _isRegexp,
    __moduleExports: _isRegexp
  });

  var isRegExp = ( _isRegexp$1 && _isRegexp ) || _isRegexp$1;

  // helper for String#{startsWith, endsWith, includes}



  var _stringContext = function (that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };

  var _stringContext$1 = /*#__PURE__*/Object.freeze({
    default: _stringContext,
    __moduleExports: _stringContext
  });

  var MATCH$1 = require$$0$7('match');
  var _failsIsRegexp = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) { /* empty */ }
    } return true;
  };

  var _failsIsRegexp$1 = /*#__PURE__*/Object.freeze({
    default: _failsIsRegexp,
    __moduleExports: _failsIsRegexp
  });

  var context = ( _stringContext$1 && _stringContext ) || _stringContext$1;

  var require$$0$g = ( _failsIsRegexp$1 && _failsIsRegexp ) || _failsIsRegexp$1;

  var INCLUDES = 'includes';

  $export$1($export$1.P + $export$1.F * require$$0$g(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~context(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  (function () {

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

}());
//# sourceMappingURL=bundle.js.map
