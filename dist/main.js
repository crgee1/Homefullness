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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  console.log(canvas);

  new _display__WEBPACK_IMPORTED_MODULE_0__["default"](canvas)
})

  



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Render; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");


class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new Image();
    this.house.src = "../assets/images/house.png";
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
    for(let i = 0; i < 5; i++) {
      this.personArr.push(new _sprite__WEBPACK_IMPORTED_MODULE_0__["default"](canvas));
    }
    
  }

  drawHouse() {
    this.ctx.drawImage(this.house, 430, 450, 100, 100);
  }

  registerEvents() {
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // this.frame = requestAnimationFrame(this.animate);
    console.log("rendering");
    this.personArr.forEach(person => setTimeout(() => person.animate(), 2))
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawHouse();
    }, 10)
  }
}


/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
const sprite = new Image();
sprite.src = "../assets/images/person-icon.png";

class Person {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.startY = 490;
    this.startX = 446;
    // this.x = Math.random() * 800;
    // this.y = Math.random() * 800;
    this.endX = 600;
    this.endY = 600;
    // while (this.endX > this.endX - 70 && this.endX < this.endX + 70 ) this.endX = Math.random() * 480;
    console.log(this.endX, this.endY)
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.ctx.drawImage(this.person, this.startX, this.startY, 70, 70);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    console.log(slope);
    // if (this.endX > this.startX && this.endY < this.startY) {
    //   this.endX -= 1.2;
    //   this.endY -= slope * 1.2;
    // } else if (this.endX < this.startX && this.endY < this.startY) {
    //   this.endX += 1.2;
    //   this.endY += slope * 1.2;
    // } else if (this.endX < this.startX && this.endY > this.startY) {
    //   this.endX += 1.2;
    //   this.endY += slope * 1.2;
    // } else {
    //   this.endX -= 1.2;
    //   this.endY -= slope * 1.2;
    // }
    if (this.startX < this.endX && this.startY > this.endY) {
      this.startX += 1.2;
      this.startY += slope * 1.2;
    } else if (this.startX > this.endX && this.startY > this.endY) {
      this.startX -= 1.2;
      this.startY -= slope * 1.2;
    } else if (this.startX > this.endX && this.startY < this.endY) {
      this.startX -= 1.2;
      this.startY -= slope * 1.2;
    } else {
      this.startX += 1.2;
      this.startY += slope * 1.2;
    }
    if (true) requestAnimationFrame(this.animate);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUEsTUFBTSxnREFBTztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBOEI7O0FBRWY7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLDhCQUE4QiwrQ0FBTTtBQUNwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjb25zb2xlLmxvZyhjYW52YXMpO1xuXG4gIG5ldyBEaXNwbGF5KGNhbnZhcylcbn0pXG5cbiAgXG5cbiIsImltcG9ydCBQZXJzb24gZnJvbSAnLi9zcHJpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaG91c2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL2hvdXNlLnBuZ1wiO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB0aGlzLnBlcnNvbkFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHRoaXMucGVyc29uQXJyLnB1c2gobmV3IFBlcnNvbihjYW52YXMpKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3SG91c2UoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaG91c2UsIDQzMCwgNDUwLCAxMDAsIDEwMCk7XG4gIH1cblxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuYm91bmRDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgY2xpY2soZSkge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB0aGlzLmZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmdcIik7XG4gICAgdGhpcy5wZXJzb25BcnIuZm9yRWFjaChwZXJzb24gPT4gc2V0VGltZW91dCgoKSA9PiBwZXJzb24uYW5pbWF0ZSgpLCAyKSlcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBpZiAodHJ1ZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLmRyYXdIb3VzZSgpO1xuICAgIH0sIDEwKVxuICB9XG59XG4iLCJjb25zdCBzcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbnNwcml0ZS5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uLWljb24ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbiB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLnBlcnNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGVyc29uLnNyYyA9IFwiLi4vYXNzZXRzL2ltYWdlcy9wZXJzb24taWNvbi5wbmdcIlxuICAgIHRoaXMuc3RhcnRZID0gNDkwO1xuICAgIHRoaXMuc3RhcnRYID0gNDQ2O1xuICAgIC8vIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiA4MDA7XG4gICAgLy8gdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIDgwMDtcbiAgICB0aGlzLmVuZFggPSA2MDA7XG4gICAgdGhpcy5lbmRZID0gNjAwO1xuICAgIC8vIHdoaWxlICh0aGlzLmVuZFggPiB0aGlzLmVuZFggLSA3MCAmJiB0aGlzLmVuZFggPCB0aGlzLmVuZFggKyA3MCApIHRoaXMuZW5kWCA9IE1hdGgucmFuZG9tKCkgKiA0ODA7XG4gICAgY29uc29sZS5sb2codGhpcy5lbmRYLCB0aGlzLmVuZFkpXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBlcnNvbiwgdGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCA3MCwgNzApO1xuICAgIGxldCBzbG9wZSA9ICh0aGlzLmVuZFkgLSB0aGlzLnN0YXJ0WSkgLyAodGhpcy5lbmRYIC0gdGhpcy5zdGFydFgpO1xuICAgIGNvbnNvbGUubG9nKHNsb3BlKTtcbiAgICAvLyBpZiAodGhpcy5lbmRYID4gdGhpcy5zdGFydFggJiYgdGhpcy5lbmRZIDwgdGhpcy5zdGFydFkpIHtcbiAgICAvLyAgIHRoaXMuZW5kWCAtPSAxLjI7XG4gICAgLy8gICB0aGlzLmVuZFkgLT0gc2xvcGUgKiAxLjI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmVuZFggPCB0aGlzLnN0YXJ0WCAmJiB0aGlzLmVuZFkgPCB0aGlzLnN0YXJ0WSkge1xuICAgIC8vICAgdGhpcy5lbmRYICs9IDEuMjtcbiAgICAvLyAgIHRoaXMuZW5kWSArPSBzbG9wZSAqIDEuMjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuZW5kWCA8IHRoaXMuc3RhcnRYICYmIHRoaXMuZW5kWSA+IHRoaXMuc3RhcnRZKSB7XG4gICAgLy8gICB0aGlzLmVuZFggKz0gMS4yO1xuICAgIC8vICAgdGhpcy5lbmRZICs9IHNsb3BlICogMS4yO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmVuZFggLT0gMS4yO1xuICAgIC8vICAgdGhpcy5lbmRZIC09IHNsb3BlICogMS4yO1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5zdGFydFggPCB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPiB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYICs9IDEuMjtcbiAgICAgIHRoaXMuc3RhcnRZICs9IHNsb3BlICogMS4yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydFggPiB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPiB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYIC09IDEuMjtcbiAgICAgIHRoaXMuc3RhcnRZIC09IHNsb3BlICogMS4yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydFggPiB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPCB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYIC09IDEuMjtcbiAgICAgIHRoaXMuc3RhcnRZIC09IHNsb3BlICogMS4yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0WCArPSAxLjI7XG4gICAgICB0aGlzLnN0YXJ0WSArPSBzbG9wZSAqIDEuMjtcbiAgICB9XG4gICAgaWYgKHRydWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9