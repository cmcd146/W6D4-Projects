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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.elements = arr;\n  }\n  \n  html(str){\n    if(str !== undefined){\n      this.elements.forEach((el)=>{\n        el.innerHTML = str;\n      });\n    }else{\n      return this.elements[0].innerHTML;\n    }\n  }\n  \n  empty(){\n    this.elements.forEach((el)=>{\n      el.innerHTML = \"\";\n    });\n  }\n  \n  append(args) {\n    if (args instanceof DOMNodeCollection) {\n      args.elements.forEach(arg => {\n        this.elements.forEach(el => {\n          el.innerHTML += arg.outerHTML;\n        });\n      });\n    } else {\n      this.elements.forEach(el => {\n        el.innerHTML += args;\n      });\n    }\n  }\n  \n  attr(name, value){\n    let att;\n    this.elements.forEach((el)=>{\n      if(value !== undefined){  \n        el.setAttribute(name,value);\n      }else{\n        if(el.hasAttribute(name)){\n          att = el.getAttribute(name);\n        }\n      }\n    });\n    \n    return att;\n  }\n  \n  addClass(value) {\n    this.attr('class', value);\n  }\n  \n  removeClass() {\n    this.elements.forEach(el => {\n      el.removeAttribute('class');\n    });\n  }\n  \n  children(){\n    const result = [];\n    \n    this.elements.forEach((el)=>{\n      result.push(...el.children);\n    });\n    \n    return new DOMNodeCollection(result);\n  }\n  \n  parent(){\n    const result = [];\n    \n    this.elements.forEach((el)=>{\n      result.push(el.parentNode);\n    });\n    \n    return new DOMNodeCollection(result);\n  }\n  \n  find(selector){\n    let result = [];\n    \n    this.elements.forEach((el)=>{\n      result = result.concat(Array.from(document.querySelectorAll(selector)));  \n    });\n    return new DOMNodeCollection(result);\n  }\n  \n  remove() {\n    this.empty();\n    this.elements = [];\n  }\n  \n  on(eve, cb) {\n    this.cb = cb;\n    this.elements.forEach(el => {\n      el.addEventListener(eve, cb);\n    });\n  }\n  \n  off(eve) {\n    this.elements.forEach(el => {\n      el.removeEventListener(eve, this.cb);\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n$l = function $l(selector){\n  if (typeof selector === 'string') {\n    let collection = Array.from(document.querySelectorAll(selector));\n    return new DOMNodeCollection(collection);\n  } else if (selector instanceof HTMLElement) {\n    return new DOMNodeCollection([selector]);\n  }\n  \n};\n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });