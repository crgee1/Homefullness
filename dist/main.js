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
    this.house = new _house__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.animate = this.animate.bind(this);
    this.registerEvents();
    this.personArr = [];
    for(let i = 0; i < 100; i++) {
      this.personArr.push(new _person__WEBPACK_IMPORTED_MODULE_0__["default"](canvas));
    }
  }


  registerEvents() {
    this.house.draw();
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
  }

  click(e) {
    // this.animate();
    this.house.grow();
    // this.house.draw();
  }

  animate() {
    // this.frame = requestAnimationFrame(this.animate);
    // this.personArr.forEach(person => setTimeout(() => person.animate(), Math.random() * 2500))
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if (true) requestAnimationFrame(this.animate);
    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // this.house.draw();
    }, 10)
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
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.house = new Image();
    this.house.src = "../assets/images/house.png"
    this.size = 100;
    this.grow = this.grow.bind(this);
    this.draw = this.draw.bind(this);
  }

  grow() {
    // if (true) this.frame = requestAnimationFrame(this.grow);
    // this.ctx.save();
    this.ctx.translate(430, 450);
    // console.log(this.house.width)
    // let halfW = this.house.width/2;
    // let halfH = this.house.height/2;
    // this.ctx.translate(halfW, halfH);
    // this.ctx.scale(1,1);
    // this.ctx.drawImage(this.house, -halfW, -halfH);
    this.ctx.drawImage(this.house, 430, 450, this.size, this.size);
    // this.ctx.restore();
  }

  draw() {
    this.ctx.drawImage(this.house, 430, 450, this.size, this.size);
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
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
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
    if (true) this.frame = requestAnimationFrame(this.animate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBLE1BQU0sZ0RBQU87QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDRjs7QUFFYjtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0IsOEJBQThCLCtDQUFNO0FBQ3BDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBEaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY29uc29sZS5sb2coY2FudmFzKTtcblxuICBuZXcgRGlzcGxheShjYW52YXMpXG59KVxuXG4gIFxuXG4iLCJpbXBvcnQgUGVyc29uIGZyb20gJy4vcGVyc29uJztcbmltcG9ydCBIb3VzZSBmcm9tICcuL2hvdXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuaG91c2UgPSBuZXcgSG91c2UoY2FudmFzKTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdGhpcy5wZXJzb25BcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIHRoaXMucGVyc29uQXJyLnB1c2gobmV3IFBlcnNvbihjYW52YXMpKTtcbiAgICB9XG4gIH1cblxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuaG91c2UuZHJhdygpO1xuICAgIHRoaXMuYm91bmRDbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5ib3VuZENsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjbGljayhlKSB7XG4gICAgLy8gdGhpcy5hbmltYXRlKCk7XG4gICAgdGhpcy5ob3VzZS5ncm93KCk7XG4gICAgLy8gdGhpcy5ob3VzZS5kcmF3KCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIC8vIHRoaXMuZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAvLyB0aGlzLnBlcnNvbkFyci5mb3JFYWNoKHBlcnNvbiA9PiBzZXRUaW1lb3V0KCgpID0+IHBlcnNvbi5hbmltYXRlKCksIE1hdGgucmFuZG9tKCkgKiAyNTAwKSlcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBpZiAodHJ1ZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAvLyB0aGlzLmhvdXNlLmRyYXcoKTtcbiAgICB9LCAxMClcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91c2Uge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5ob3VzZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaG91c2Uuc3JjID0gXCIuLi9hc3NldHMvaW1hZ2VzL2hvdXNlLnBuZ1wiXG4gICAgdGhpcy5zaXplID0gMTAwO1xuICAgIHRoaXMuZ3JvdyA9IHRoaXMuZ3Jvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ3JvdygpIHtcbiAgICAvLyBpZiAodHJ1ZSkgdGhpcy5mcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdyb3cpO1xuICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC50cmFuc2xhdGUoNDMwLCA0NTApO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaG91c2Uud2lkdGgpXG4gICAgLy8gbGV0IGhhbGZXID0gdGhpcy5ob3VzZS53aWR0aC8yO1xuICAgIC8vIGxldCBoYWxmSCA9IHRoaXMuaG91c2UuaGVpZ2h0LzI7XG4gICAgLy8gdGhpcy5jdHgudHJhbnNsYXRlKGhhbGZXLCBoYWxmSCk7XG4gICAgLy8gdGhpcy5jdHguc2NhbGUoMSwxKTtcbiAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ob3VzZSwgLWhhbGZXLCAtaGFsZkgpO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhvdXNlLCA0MzAsIDQ1MCwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaG91c2UsIDQzMCwgNDUwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5wZXJzb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBlcnNvbi5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uLWljb24ucG5nXCJcbiAgICB0aGlzLnN0YXJ0WSA9IDQ5MDtcbiAgICB0aGlzLnN0YXJ0WCA9IDQ0NjtcbiAgICB0aGlzLmVuZFggPSBNYXRoLnJhbmRvbSgpICogODAwO1xuICAgIHRoaXMuZW5kWSA9IE1hdGgucmFuZG9tKCkgKiA4MDA7XG4gICAgd2hpbGUgKHRoaXMuZW5kWCA+IHRoaXMuc3RhcnRYIC0gMTAwICYmIHRoaXMuZW5kWCA8IHRoaXMuc3RhcnRYICsgMTAwICkgdGhpcy5lbmRYID0gTWF0aC5yYW5kb20oKSAqIDgwMDtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgLy8gY29uc3Qgc3BlZWQgPSAyO1xuICAgIGNvbnN0IHNwZWVkID0gLjU1O1xuICAgIGlmICh0cnVlKSB0aGlzLmZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucGVyc29uLCB0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIDcwLCA3MCk7XG4gICAgbGV0IHNsb3BlID0gKHRoaXMuZW5kWSAtIHRoaXMuc3RhcnRZKSAvICh0aGlzLmVuZFggLSB0aGlzLnN0YXJ0WCk7XG4gICAgaWYgKHRoaXMuc3RhcnRYIDwgdGhpcy5lbmRYICYmIHRoaXMuc3RhcnRZID4gdGhpcy5lbmRZKSB7XG4gICAgICB0aGlzLnN0YXJ0WCArPSBzcGVlZDtcbiAgICAgIHRoaXMuc3RhcnRZICs9IHNsb3BlICogc3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0WCA+IHRoaXMuZW5kWCAmJiB0aGlzLnN0YXJ0WSA+IHRoaXMuZW5kWSkge1xuICAgICAgdGhpcy5zdGFydFggLT0gc3BlZWQ7XG4gICAgICB0aGlzLnN0YXJ0WSAtPSBzbG9wZSAqIHNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydFggPiB0aGlzLmVuZFggJiYgdGhpcy5zdGFydFkgPCB0aGlzLmVuZFkpIHtcbiAgICAgIHRoaXMuc3RhcnRYIC09IHNwZWVkO1xuICAgICAgdGhpcy5zdGFydFkgLT0gc2xvcGUgKiBzcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRYIDwgdGhpcy5lbmRYICYmIHRoaXMuc3RhcnRZIDwgdGhpcy5lbmRZKSB7XG4gICAgICB0aGlzLnN0YXJ0WCArPSBzcGVlZDtcbiAgICAgIHRoaXMuc3RhcnRZICs9IHNsb3BlICogc3BlZWQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9