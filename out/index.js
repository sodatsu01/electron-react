/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello.js */ \"./src/hello.js\");\n/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/user/dev/electron-react/src/hello.js: Unexpected token (7:6)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m          test\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:6983:17)\\n    at Parser.unexpected (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:8376:16)\\n    at Parser.parseExprAtom (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9637:20)\\n    at Parser.parseExprSubscripts (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9213:23)\\n    at Parser.parseMaybeUnary (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9193:21)\\n    at Parser.parseExprOps (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9059:23)\\n    at Parser.parseMaybeConditional (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9032:23)\\n    at Parser.parseMaybeAssign (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:8978:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9775:28)\\n    at Parser.parseExprAtom (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9558:21)\\n    at Parser.parseExprSubscripts (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9213:23)\\n    at Parser.parseMaybeUnary (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9193:21)\\n    at Parser.parseExprOps (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9059:23)\\n    at Parser.parseMaybeConditional (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:9032:23)\\n    at Parser.parseMaybeAssign (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:8978:21)\\n    at Parser.parseExpression (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:8928:23)\\n    at Parser.parseReturnStatement (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11035:28)\\n    at Parser.parseStatementContent (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10714:21)\\n    at Parser.parseStatement (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10666:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11242:25)\\n    at Parser.parseBlockBody (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11229:10)\\n    at Parser.parseBlock (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11213:10)\\n    at Parser.parseFunctionBody (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10232:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10202:10)\\n    at Parser.parseMethod (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10156:10)\\n    at Parser.pushClassMethod (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11647:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11566:12)\\n    at Parser.parseClassMember (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11508:10)\\n    at /Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:11463:14\\n    at Parser.withTopicForbiddingContext (/Users/user/dev/electron-react/node_modules/@babel/parser/lib/index.js:10541:14)\");\n\n//# sourceURL=webpack:///./src/hello.js?");

/***/ })

/******/ });