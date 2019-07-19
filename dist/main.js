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
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./src/person.js");
/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./house */ "./src/house.js");



class Render {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new _house__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
    for(let i = 0; i < 100; i++) {
      this.personArr.push(new _person__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx));
    }
  }


  registerEvents() {
    // this.house.draw();
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    this.animate();
    this.animate();
    this.animate();
    // this.house.grow();
    // this.house.draw();
  }

  animate() {
    // this.frame = requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 10)
    // this.house.draw();
    this.house.grow();
    this.personArr.forEach(person => setTimeout(() => person.animate(), Math.random() * 2500))
  }
}


/***/ }),

/***/ "./src/house.js":
/*!**********************!*\
  !*** ./src/house.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return House; });
class House {
  constructor(ctx) {
    this.ctx = ctx;
    this.house = new Image();
    this.house.src = "../assets/images/house.png"
    this.pos = { x: 430, y: 450 };
    this.size = 100;
    this.grow = this.grow.bind(this);
    this.draw = this.draw.bind(this);
  }

  grow() {
    this.frame = requestAnimationFrame(this.grow);
    if (this.size < 400) {
      this.size += 1;
      this.pos.x -= .5;
      this.pos.y -= .95;
      // this.size += .1;
      // this.pos.x -= .05;
      // this.pos.y -= .08;
    }
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
  }

  draw() {
    this.frame = requestAnimationFrame(this.draw);
    this.ctx.drawImage(this.house, this.pos.x, this.pos.y, this.size, this.size);
  }
}

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
class Person {
  constructor(ctx) {
    this.ctx = ctx;
    this.person = new Image();
    this.person.src = "../assets/images/person-icon.png"
    this.startY = 490;
    this.startX = 446;
    this.endX = Math.random() * 800;
    this.endY = Math.random() * 800;
    while (this.endX > this.startX - 100 && this.endX < this.startX + 100 ) this.endX = Math.random() * 800;
    this.animate = this.animate.bind(this);
  }

  animate() {
    // const speed = 2;
    const speed = .55;
    this.frame = requestAnimationFrame(this.animate);
    this.ctx.drawImage(this.person, this.startX, this.startY, 70, 70);
    let slope = (this.endY - this.startY) / (this.endX - this.startX);
    if (this.startX < this.endX && this.startY > this.endY) {
      this.startX += speed;
      this.startY += slope * speed;
    } else if (this.startX > this.endX && this.startY > this.endY) {
      this.startX -= speed;
      this.startY -= slope * speed;
    } else if (this.startX > this.endX && this.startY < this.endY) {
      this.startX -= speed;
      this.startY -= slope * speed;
    } else if (this.startX < this.endX && this.startY < this.endY) {
      this.startX += speed;
      this.startY += slope * speed;
    }
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBLE1BQU0sZ0RBQU87QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDRjs7QUFFYjtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0IsOEJBQThCLCtDQUFNO0FBQ3BDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGNvbnNvbGUubG9nKGNhbnZhcyk7XG5cbiAgbmV3IERpc3BsYXkoY2FudmFzKVxufSlcblxuICBcblxuIiwiaW1wb3J0IFBlcnNvbiBmcm9tICcuL3BlcnNvbic7XG5pbXBvcnQgSG91c2UgZnJvbSAnLi9ob3VzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmhvdXNlID0gbmV3IEhvdXNlKHRoaXMuY3R4KTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5wZXJzb25BcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIHRoaXMucGVyc29uQXJyLnB1c2gobmV3IFBlcnNvbih0aGlzLmN0eCkpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgLy8gdGhpcy5ob3VzZS5kcmF3KCk7XG4gICAgdGhpcy5ib3VuZENsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIGNsaWNrKGUpIHtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB0aGlzLmhvdXNlLmdyb3coKTtcbiAgICAvLyB0aGlzLmhvdXNlLmRyYXcoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgLy8gdGhpcy5mcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIGlmICh0cnVlKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9LCAxMClcbiAgICAvLyB0aGlzLmhvdXNlLmRyYXcoKTtcbiAgICB0aGlzLmhvdXNlLmdyb3coKTtcbiAgICB0aGlzLnBlcnNvbkFyci5mb3JFYWNoKHBlcnNvbiA9PiBzZXRUaW1lb3V0KCgpID0+IHBlcnNvbi5hbmltYXRlKCksIE1hdGgucmFuZG9tKCkgKiAyNTAwKSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91c2Uge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmhvdXNlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ob3VzZS5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvaG91c2UucG5nXCJcbiAgICB0aGlzLnBvcyA9IHsgeDogNDMwLCB5OiA0NTAgfTtcbiAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgdGhpcy5ncm93ID0gdGhpcy5ncm93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBncm93KCkge1xuICAgIHRoaXMuZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ncm93KTtcbiAgICBpZiAodGhpcy5zaXplIDwgNDAwKSB7XG4gICAgICB0aGlzLnNpemUgKz0gMTtcbiAgICAgIHRoaXMucG9zLnggLT0gLjU7XG4gICAgICB0aGlzLnBvcy55IC09IC45NTtcbiAgICAgIC8vIHRoaXMuc2l6ZSArPSAuMTtcbiAgICAgIC8vIHRoaXMucG9zLnggLT0gLjA1O1xuICAgICAgLy8gdGhpcy5wb3MueSAtPSAuMDg7XG4gICAgfVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhvdXNlLCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3KTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ob3VzZSwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wZXJzb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBlcnNvbi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uLWljb24ucG5nXCJcbiAgICB0aGlzLnN0YXJ0WSA9IDQ5MDtcbiAgICB0aGlzLnN0YXJ0WCA9IDQ0NjtcbiAgICB0aGlzLmVuZFggPSBNYXRoLnJhbmRvbSgpICogODAwO1xuICAgIHRoaXMuZW5kWSA9IE1hdGgucmFuZG9tKCkgKiA4MDA7XG4gICAgd2hpbGUgKHRoaXMuZW5kWCA+IHRoaXMuc3RhcnRYIC0gMTAwICYmIHRoaXMuZW5kWCA8IHRoaXMuc3RhcnRYICsgMTAwICkgdGhpcy5lbmRYID0gTWF0aC5yYW5kb20oKSAqIDgwMDtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgLy8gY29uc3Qgc3BlZWQgPSAyO1xuICAgIGNvbnN0IHNwZWVkID0gLjU1O1xuICAgIHRoaXMuZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wZXJzb24sIHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgNzAsIDcwKTtcbiAgICBsZXQgc2xvcGUgPSAodGhpcy5lbmRZIC0gdGhpcy5zdGFydFkpIC8gKHRoaXMuZW5kWCAtIHRoaXMuc3RhcnRYKTtcbiAgICBpZiAodGhpcy5zdGFydFggPCB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPiB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYICs9IHNwZWVkO1xuICAgICAgdGhpcy5zdGFydFkgKz0gc2xvcGUgKiBzcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRYID4gdGhpcy5lbmRYICYmIHRoaXMuc3RhcnRZID4gdGhpcy5lbmRZKSB7XG4gICAgICB0aGlzLnN0YXJ0WCAtPSBzcGVlZDtcbiAgICAgIHRoaXMuc3RhcnRZIC09IHNsb3BlICogc3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0WCA+IHRoaXMuZW5kWCAmJiB0aGlzLnN0YXJ0WSA8IHRoaXMuZW5kWSkge1xuICAgICAgdGhpcy5zdGFydFggLT0gc3BlZWQ7XG4gICAgICB0aGlzLnN0YXJ0WSAtPSBzbG9wZSAqIHNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydFggPCB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPCB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYICs9IHNwZWVkO1xuICAgICAgdGhpcy5zdGFydFkgKz0gc2xvcGUgKiBzcGVlZDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=