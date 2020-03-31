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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DomNodeCollection = __webpack_require__(1);

window.$l = function(arg){
  let nodeListArray = [];

  if (arg instanceof HTMLElement) {
    nodeListArray.push(arg);
    let dom = new DomNodeCollection(nodeListArray);

    return dom;
  }
  let nodeList = document.querySelectorAll(arg);

  nodeList.forEach(e => {
    nodeListArray.push(e);
  });

  let dom = new DomNodeCollection(nodeListArray);

  return dom;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DomNodeCollection {
  constructor(HTMLElements) {
    this.htmlElements = HTMLElements;
    this.length = this.htmlElements.length;
  }

  empty() {
    this.html("");
  }
  append(input) {
    if (input instanceof DomNodeCollection) {
      this.forEach(node => {
        for (var i = 0; i < input.length; i++) {
          node.innerHTML += input.htmlElements[i].outerHTML;
        }
      });
    } else if (input instanceof HTMLElement) {
      this.forEach(node => {
        node.innerHTML += input.outerHTML;
      });
    } else if (typeof input === "string") {
      this.forEach(node => {
        node.innerHTML += input;
      });
    }

    return this;
  }

  remove() {}

  attr(attributeName, value) {
    let firstElement = this.htmlElements[0];
    if (value === undefined) {
      return firstElement.getAttribute(attributeName);
    } else {
      firstElement.setAttribute(attributeName, value);
      return this;
    }
  }

  addClass(newClass) {
    this.htmlElements.forEach(element => {
      if (element.className === "") {
        element.className = newClass;
      } else {
        element.className += (" " + newClass);
      }
    });
  }

  removeClass(className) {
    this.forEach(element => {
      let splitted = element.className.split(' ');
      let indexToDelete = splitted.indexOf(className);
      splitted.splice(indexToDelete, 1);
      element.className = splitted.join(' ');
    });
    return this;
  }

  html(str) {
    if (str !== undefined) {
      this.htmlElements.forEach(node => {
        node.innerHTML = str;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  find() {}

  children() {
    //
    let children = [];

    this.forEach(node => {
      for (var i = 0; i < node.children.length; i++) {
        children.push(node.children[i]);
      }
    });

    let domCollection = new DomNodeCollection(children);
    return domCollection;
  }

  parent() {
    let parents = [];

    this.forEach(node => {
      if (!parents.includes(node.parentNode)) {
        parents.push(node.parentNode);
      }
    });

    let domCollection = new DomNodeCollection(parents);
    return domCollection;
  }

  forEach(cb) {
    this.htmlElements.forEach(element => {
      cb(element);
    });
  }

  on(eventString, cb) {
    this.forEach(e => {
      e.addEventListener(eventString, cb);
    });
  }
}

module.exports = DomNodeCollection;


/***/ })
/******/ ]);