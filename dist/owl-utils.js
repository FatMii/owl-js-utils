(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["owlUtils"] = factory();
	else
		root["owlUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Array/index.js":
/*!****************************!*\
  !*** ./src/Array/index.js ***!
  \****************************/
/*! exports provided: isSameArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSameArray\", function() { return isSameArray; });\n/**\r\n * @function 判断两个数组是否相等\r\n * @param {Array} a\r\n * @param {Array} b\r\n * @returns {Boolean} result \r\n * @author 🦉OwlLai🦉 2022/06/03 \r\n */\r\nfunction isSameArray(a, b) {\r\n  if (a === b) return true;\r\n  if (a instanceof Date && b instanceof Date)\r\n    return a.getTime() === b.getTime();\r\n  if (!a || !b || (typeof a !== \"object\" && typeof b !== \"object\"))\r\n    return a === b;\r\n  if (a.prototype !== b.prototype) return false;\r\n  let keys = Object.keys(a);\r\n  if (keys.length !== Object.keys(b).length) return false;\r\n  return keys.every((k) => isSameArray(a[k], b[k]));\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Array/index.js?");

/***/ }),

/***/ "./src/Date/index.js":
/*!***************************!*\
  !*** ./src/Date/index.js ***!
  \***************************/
/*! exports provided: nowTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nowTime\", function() { return nowTime; });\n\r\nconst nowTime = () => {\r\n  const now = new Date();\r\n  const year = now.getFullYear();\r\n  const month = now.getMonth();\r\n  const date = now.getDate() >= 10 ? now.getDate() : \"0\" + now.getDate();\r\n  const hour = now.getHours() >= 10 ? now.getHours() : \"0\" + now.getHours();\r\n  const miu =\r\n    now.getMinutes() >= 10 ? now.getMinutes() : \"0\" + now.getMinutes();\r\n  const sec =\r\n    now.getSeconds() >= 10 ? now.getSeconds() : \"0\" + now.getSeconds();\r\n  return (\r\n    +year +\r\n    \"年\" +\r\n    (month + 1) +\r\n    \"月\" +\r\n    date +\r\n    \"日 \" +\r\n    hour +\r\n    \":\" +\r\n    miu +\r\n    \":\" +\r\n    sec\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Date/index.js?");

/***/ }),

/***/ "./src/Function/index.js":
/*!*******************************!*\
  !*** ./src/Function/index.js ***!
  \*******************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/**\r\n * @function 防抖函数\r\n * @param {Function} fn\r\n * @param {number}  wait 等待时间\r\n * @returns {Function}\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction debounce(fn, wait) {\r\n  let timer = null;\r\n\r\n  return function () {\r\n    let context = this,\r\n      args = arguments;\r\n\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n      timer = null;\r\n    }\r\n\r\n    timer = setTimeout(() => {\r\n      fn.apply(context, args);\r\n    }, wait);\r\n  };\r\n}\r\n\r\n/**\r\n * @function 节流函数\r\n * @param {Function} fn\r\n * @param {number}  delay 等待时间\r\n * @returns {Function}\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction throttle(fn, delay) {\r\n  let curTime = Date.now();\r\n\r\n  return function () {\r\n    let context = this,\r\n      args = arguments,\r\n      nowTime = Date.now();\r\n\r\n    if (nowTime - curTime >= delay) {\r\n      curTime = Date.now();\r\n      return fn.apply(context, args);\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Function/index.js?");

/***/ }),

/***/ "./src/Number/index.js":
/*!*****************************!*\
  !*** ./src/Number/index.js ***!
  \*****************************/
/*! exports provided: getRandom, formatThousandth, digitUppercase, intToChinese */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatThousandth\", function() { return formatThousandth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"digitUppercase\", function() { return digitUppercase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"intToChinese\", function() { return intToChinese; });\n/**\r\n * @function 获取指定范围内的随机数\r\n * @param {number} min 最小范围\r\n * @param {number} max 最大范围\r\n * @returns {number} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction getRandom(min, max) {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\r\n\r\n/**\r\n * @function 将数字装换为千分位\r\n * @param {number} n\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction formatThousandth(n) {\r\n  let num = n.toString();\r\n  let len = num.length;\r\n  if (len <= 3) {\r\n    return num;\r\n  } else {\r\n    let temp = \"\";\r\n    let remainder = len % 3;\r\n    if (remainder > 0) {\r\n      // 不是3的整数倍\r\n      return (\r\n        num.slice(0, remainder) +\r\n        \",\" +\r\n        num.slice(remainder, len).match(/\\d{3}/g).join(\",\") +\r\n        temp\r\n      );\r\n    } else {\r\n      // 3的整数倍\r\n      return num.slice(0, len).match(/\\d{3}/g).join(\",\") + temp;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * @function 数字转化为大写金额\r\n * @param {number} n\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction digitUppercase(n) {\r\n  const fraction = [\"角\", \"分\"];\r\n  const digit = [\"零\", \"壹\", \"贰\", \"叁\", \"肆\", \"伍\", \"陆\", \"柒\", \"捌\", \"玖\"];\r\n  const unit = [\r\n    [\"元\", \"万\", \"亿\"],\r\n    [\"\", \"拾\", \"佰\", \"仟\"],\r\n  ];\r\n  n = Math.abs(n);\r\n  let s = \"\";\r\n  for (let i = 0; i < fraction.length; i++) {\r\n    s += (\r\n      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]\r\n    ).replace(/零./, \"\");\r\n  }\r\n  s = s || \"整\";\r\n  n = Math.floor(n);\r\n  for (let i = 0; i < unit[0].length && n > 0; i++) {\r\n    let p = \"\";\r\n    for (let j = 0; j < unit[1].length && n > 0; j++) {\r\n      p = digit[n % 10] + unit[1][j] + p;\r\n      n = Math.floor(n / 10);\r\n    }\r\n    s = p.replace(/(零.)*零$/, \"\").replace(/^$/, \"零\") + unit[0][i] + s;\r\n  }\r\n  return s\r\n    .replace(/(零.)*零元/, \"元\")\r\n    .replace(/(零.)+/g, \"零\")\r\n    .replace(/^整$/, \"零元整\");\r\n}\r\n\r\n/**\r\n * @function 数字转化为中文数字\r\n * @param {number} value\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction intToChinese(value) {\r\n  const str = String(value);\r\n  const len = str.length - 1;\r\n  const idxs = [\r\n    \"\",\r\n    \"十\",\r\n    \"百\",\r\n    \"千\",\r\n    \"万\",\r\n    \"十\",\r\n    \"百\",\r\n    \"千\",\r\n    \"亿\",\r\n    \"十\",\r\n    \"百\",\r\n    \"千\",\r\n    \"万\",\r\n    \"十\",\r\n    \"百\",\r\n    \"千\",\r\n    \"亿\",\r\n  ];\r\n  const num = [\"零\", \"一\", \"二\", \"三\", \"四\", \"五\", \"六\", \"七\", \"八\", \"九\"];\r\n  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {\r\n    let pos = 0;\r\n    if ($1[0] !== \"0\") {\r\n      pos = len - idx;\r\n      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == \"十\") {\r\n        return idxs[len - idx];\r\n      }\r\n      return num[$1[0]] + idxs[len - idx];\r\n    } else {\r\n      let left = len - idx;\r\n      let right = len - idx + $1.length;\r\n      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {\r\n        pos = left - (left % 4);\r\n      }\r\n      if (pos) {\r\n        return idxs[pos] + num[$1[0]];\r\n      } else if (idx + $1.length >= len) {\r\n        return \"\";\r\n      } else {\r\n        return num[$1[0]];\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Number/index.js?");

/***/ }),

/***/ "./src/Object/index.js":
/*!*****************************!*\
  !*** ./src/Object/index.js ***!
  \*****************************/
/*! exports provided: getType, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getType\", function() { return getType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return deepClone; });\n/**\r\n * @function 获取数据类型\r\n * @param {Object} target\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction getType(target) {\r\n  return Object.prototype.toString.call(target).slice(8, -1);\r\n}\r\n\r\n/**\r\n * @function 对象深度克隆\r\n * @param {Object} target\r\n * @returns {WeakMap} hash\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction deepClone(obj, hash = new WeakMap()) {\r\n  // 日期对象直接返回一个新的日期对象\r\n  if (obj instanceof Date) {\r\n    return new Date(obj);\r\n  }\r\n  //正则对象直接返回一个新的正则对象\r\n  if (obj instanceof RegExp) {\r\n    return new RegExp(obj);\r\n  }\r\n  //如果循环引用,就用 weakMap 来解决\r\n  if (hash.has(obj)) {\r\n    return hash.get(obj);\r\n  }\r\n  // 获取对象所有自身属性的描述\r\n  let allDesc = Object.getOwnPropertyDescriptors(obj);\r\n  // 遍历传入参数所有键的特性\r\n  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);\r\n\r\n  hash.set(obj, cloneObj);\r\n  for (let key of Reflect.ownKeys(obj)) {\r\n    if (typeof obj[key] === \"object\" && obj[key] !== null) {\r\n      cloneObj[key] = deepClone(obj[key], hash);\r\n    } else {\r\n      cloneObj[key] = obj[key];\r\n    }\r\n  }\r\n  return cloneObj;\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Object/index.js?");

/***/ }),

/***/ "./src/Reg/index.js":
/*!**************************!*\
  !*** ./src/Reg/index.js ***!
  \**************************/
/*! exports provided: isEmail, isIdCard, isPhone, isEmoji, isMobile, isAppleMobileDevice, getBroswerInfo, getExplorerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return isEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIdCard\", function() { return isIdCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return isPhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmoji\", function() { return isEmoji; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAppleMobileDevice\", function() { return isAppleMobileDevice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBroswerInfo\", function() { return getBroswerInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExplorerInfo\", function() { return getExplorerInfo; });\n/**\r\n * @function 判断邮箱是否正确\r\n * @param  {String} str\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isEmail(string) {\r\n  let reg = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\r\n  return reg.test(string);\r\n}\r\n\r\n/**\r\n * @function 判断身份证是否正确\r\n * @param {String} idCard\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isIdCard(idCard) {\r\n  let reg =\r\n    /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;\r\n  return reg.test(idCard);\r\n}\r\n\r\n/**\r\n * @function 判断手机号码是否正确\r\n * @param {String} phoneNumber\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isPhone(phoneNumber) {\r\n  let reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;\r\n  return reg.test(phoneNumber);\r\n}\r\n\r\n/**\r\n * @function 校验是否包含emoji表情\r\n * @param {String} value\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isEmoji(value) {\r\n  value = String(value);\r\n  for (let i = 0; i < value.length; i++) {\r\n    const hs = value.charCodeAt(i);\r\n    if (0xd800 <= hs && hs <= 0xdbff) {\r\n      if (value.length > 1) {\r\n        const ls = value.charCodeAt(i + 1);\r\n        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;\r\n        if (0x1d000 <= uc && uc <= 0x1f77f) {\r\n          return true;\r\n        }\r\n      }\r\n    } else if (value.length > 1) {\r\n      const ls = value.charCodeAt(i + 1);\r\n      if (ls == 0x20e3) {\r\n        return true;\r\n      }\r\n    } else {\r\n      if (0x2100 <= hs && hs <= 0x27ff) {\r\n        return true;\r\n      } else if (0x2b05 <= hs && hs <= 0x2b07) {\r\n        return true;\r\n      } else if (0x2934 <= hs && hs <= 0x2935) {\r\n        return true;\r\n      } else if (0x3297 <= hs && hs <= 0x3299) {\r\n        return true;\r\n      } else if (\r\n        hs == 0xa9 ||\r\n        hs == 0xae ||\r\n        hs == 0x303d ||\r\n        hs == 0x3030 ||\r\n        hs == 0x2b55 ||\r\n        hs == 0x2b1c ||\r\n        hs == 0x2b1b ||\r\n        hs == 0x2b50\r\n      ) {\r\n        return true;\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\r\n/**\r\n * @function 判断是移动还是PC设备\r\n * @returns {String} 'mobile' || 'desktop'\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isMobile() {\r\n  if (\r\n    navigator.userAgent.match(\r\n      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i\r\n    )\r\n  ) {\r\n    return \"mobile\";\r\n  }\r\n  return \"desktop\";\r\n}\r\n\r\n/**\r\n * @function 判断是否是苹果还是安卓移动设备\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction isAppleMobileDevice() {\r\n  let reg = /iphone|ipod|ipad|Macintosh/i;\r\n  return reg.test(navigator.userAgent.toLowerCase());\r\n}\r\n\r\n/**\r\n * @function 判断是否是微信/QQ内置浏览器\r\n * @returns {Boolean} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction getBroswerInfo() {\r\n  const ua = navigator.userAgent.toLowerCase();\r\n  if (ua.match(/MicroMessenger/i) == \"micromessenger\") {\r\n    return \"weixin\";\r\n  } else if (ua.match(/QQ/i) == \"qq\") {\r\n    return \"QQ\";\r\n  }\r\n  return false;\r\n}\r\n\r\n/**\r\n * @function 获取浏览器型号和版本\r\n * @returns {Object} result {type:\"IE\",version:9}\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction getExplorerInfo() {\r\n  let t = navigator.userAgent.toLowerCase();\r\n  return 0 <= t.indexOf(\"msie\")\r\n    ? {\r\n        //ie < 11\r\n        type: \"IE\",\r\n        version: Number(t.match(/msie ([\\d]+)/)[1]),\r\n      }\r\n    : !!t.match(/trident\\/.+?rv:(([\\d.]+))/)\r\n    ? {\r\n        // ie 11\r\n        type: \"IE\",\r\n        version: 11,\r\n      }\r\n    : 0 <= t.indexOf(\"edge\")\r\n    ? {\r\n        type: \"Edge\",\r\n        version: Number(t.match(/edge\\/([\\d]+)/)[1]),\r\n      }\r\n    : 0 <= t.indexOf(\"firefox\")\r\n    ? {\r\n        type: \"Firefox\",\r\n        version: Number(t.match(/firefox\\/([\\d]+)/)[1]),\r\n      }\r\n    : 0 <= t.indexOf(\"chrome\")\r\n    ? {\r\n        type: \"Chrome\",\r\n        version: Number(t.match(/chrome\\/([\\d]+)/)[1]),\r\n      }\r\n    : 0 <= t.indexOf(\"opera\")\r\n    ? {\r\n        type: \"Opera\",\r\n        version: Number(t.match(/opera.([\\d]+)/)[1]),\r\n      }\r\n    : 0 <= t.indexOf(\"Safari\")\r\n    ? {\r\n        type: \"Safari\",\r\n        version: Number(t.match(/version\\/([\\d]+)/)[1]),\r\n      }\r\n    : {\r\n        type: t,\r\n        version: -1,\r\n      };\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Reg/index.js?");

/***/ }),

/***/ "./src/String/index.js":
/*!*****************************!*\
  !*** ./src/String/index.js ***!
  \*****************************/
/*! exports provided: trim, getRandomString, fistLetterUpper, formatTel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trim\", function() { return trim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomString\", function() { return getRandomString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fistLetterUpper\", function() { return fistLetterUpper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTel\", function() { return formatTel; });\n/**\r\n * @function 字符串前后置空\r\n * @param {String} str\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction trim(str) {\r\n  let reg = /^\\s+|\\s+$/g;\r\n  return str.replace(reg, \"\");\r\n}\r\n\r\n/**\r\n * @function 获取随机字符串\r\n * @param {number} length\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction getRandomString(length) {\r\n  let chars = \"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789\";\r\n  let strLen = chars.length;\r\n  let randomStr = \"\";\r\n  for (let i = 0; i < length; i++) {\r\n    randomStr += chars.charAt(Math.floor(Math.random() * strLen));\r\n  }\r\n  return randomStr;\r\n}\r\n\r\n/**\r\n * @function 首字母大写\r\n * @param {str} str\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction fistLetterUpper(str) {\r\n  return str.charAt(0).toUpperCase() + str.slice(1);\r\n}\r\n\r\n/**\r\n * @function 电话号码隐藏中间四位为****\r\n * @param {number} tel\r\n * @returns {String} result\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction formatTel(tel) {\r\n  tel = String(tel);\r\n  return tel.substr(0, 3) + \"****\" + tel.substr(7);\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/String/index.js?");

/***/ }),

/***/ "./src/Url/index.js":
/*!**************************!*\
  !*** ./src/Url/index.js ***!
  \**************************/
/*! exports provided: formatUrlObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatUrlObject\", function() { return formatUrlObject; });\n/**\r\n * @function 获取URL参数列表\r\n * @param {String} url\r\n * @returns {Object} paramsObj\r\n * @author 🦉OwlLai🦉 2022/06/03\r\n */\r\nfunction formatUrlObject(url) {\r\n  const paramsStr = /.+\\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来\r\n  const paramsArr = paramsStr.split(\"&\"); // 将字符串以 & 分割后存到数组中\r\n  let paramsObj = {};\r\n  // 将 params 存到对象中\r\n  paramsArr.forEach((param) => {\r\n    if (/=/.test(param)) {\r\n      // 处理有 value 的参数\r\n      let [key, val] = param.split(\"=\"); // 分割 key 和 value\r\n      val = decodeURIComponent(val); // 解码\r\n      val = /^\\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字\r\n      if (paramsObj.hasOwnProperty(key)) {\r\n        // 如果对象有 key，则添加一个值\r\n        paramsObj[key] = [].concat(paramsObj[key], val);\r\n      } else {\r\n        // 如果对象没有这个 key，创建 key 并设置值\r\n        paramsObj[key] = val;\r\n      }\r\n    } else {\r\n      // 处理没有 value 的参数\r\n      paramsObj[param] = true;\r\n    }\r\n  });\r\n  return paramsObj;\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/Url/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isSameArray, nowTime, debounce, throttle, getRandom, formatThousandth, digitUppercase, intToChinese, getType, deepClone, isEmail, isIdCard, isPhone, isEmoji, isMobile, isAppleMobileDevice, getBroswerInfo, getExplorerInfo, trim, getRandomString, fistLetterUpper, formatTel, formatUrlObject, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony import */ var _Array_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array/index.js */ \"./src/Array/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSameArray\", function() { return _Array_index_js__WEBPACK_IMPORTED_MODULE_0__[\"isSameArray\"]; });\n\n/* harmony import */ var _Date_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Date/index.js */ \"./src/Date/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nowTime\", function() { return _Date_index_js__WEBPACK_IMPORTED_MODULE_1__[\"nowTime\"]; });\n\n/* harmony import */ var _Function_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Function/index.js */ \"./src/Function/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _Function_index_js__WEBPACK_IMPORTED_MODULE_2__[\"debounce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _Function_index_js__WEBPACK_IMPORTED_MODULE_2__[\"throttle\"]; });\n\n/* harmony import */ var _Number_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Number/index */ \"./src/Number/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return _Number_index__WEBPACK_IMPORTED_MODULE_3__[\"getRandom\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatThousandth\", function() { return _Number_index__WEBPACK_IMPORTED_MODULE_3__[\"formatThousandth\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"digitUppercase\", function() { return _Number_index__WEBPACK_IMPORTED_MODULE_3__[\"digitUppercase\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"intToChinese\", function() { return _Number_index__WEBPACK_IMPORTED_MODULE_3__[\"intToChinese\"]; });\n\n/* harmony import */ var _Object_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object/index.js */ \"./src/Object/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getType\", function() { return _Object_index_js__WEBPACK_IMPORTED_MODULE_4__[\"getType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return _Object_index_js__WEBPACK_IMPORTED_MODULE_4__[\"deepClone\"]; });\n\n/* harmony import */ var _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reg/index.js */ \"./src/Reg/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isEmail\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isIdCard\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isIdCard\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isPhone\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmoji\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isEmoji\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isMobile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isAppleMobileDevice\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"isAppleMobileDevice\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getBroswerInfo\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"getBroswerInfo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getExplorerInfo\", function() { return _Reg_index_js__WEBPACK_IMPORTED_MODULE_5__[\"getExplorerInfo\"]; });\n\n/* harmony import */ var _String_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./String/index.js */ \"./src/String/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"trim\", function() { return _String_index_js__WEBPACK_IMPORTED_MODULE_6__[\"trim\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRandomString\", function() { return _String_index_js__WEBPACK_IMPORTED_MODULE_6__[\"getRandomString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fistLetterUpper\", function() { return _String_index_js__WEBPACK_IMPORTED_MODULE_6__[\"fistLetterUpper\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatTel\", function() { return _String_index_js__WEBPACK_IMPORTED_MODULE_6__[\"formatTel\"]; });\n\n/* harmony import */ var _Url_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Url/index.js */ \"./src/Url/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatUrlObject\", function() { return _Url_index_js__WEBPACK_IMPORTED_MODULE_7__[\"formatUrlObject\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction test() {\r\n  document.write(\"测试自定义包\");\r\n  console.log(\"test()\");\r\n}\r\n\n\n//# sourceURL=webpack://owlUtils/./src/index.js?");

/***/ })

/******/ });
});