/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


class Calculator {
    constructor() {
        this.activeResult = false;
    }

    init() {
        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_NUMBERS.forEach(buttonEl => {
            buttonEl.addEventListener("click", () => {
                this.appendNumber(buttonEl);
            });
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_OPERATORS.forEach((operatorEl) => {
            operatorEl.addEventListener("click", () => {
                this.appendOperator(operatorEl);
            });
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_ZERO.addEventListener("click", () => {
            this.appendZero();
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_DOT.addEventListener("click", () => {
            this.appendDot();
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_EQUAL.addEventListener("click", () => {
            this.showResult();
        });

        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_REMOVE.addEventListener("click", () => {
            this.clear();
        });
    }

    appendNumber(button) {
        if (this.activeResult) {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value = button.value;
            this.activeResult = false;
        } else {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value += button.value;
        }
    }

    appendZero() {
        if (_elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value !== "0") {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value += _elements__WEBPACK_IMPORTED_MODULE_0__.EL_ZERO.value;
        }
    }

    appendDot() {
        if (_elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value === "") {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value = "0.";
        } else {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value += ".";
        }
    }

    appendOperator(operator) {
        if (_elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value !== "") {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value += operator.value;
        }
    }

    showResult () {
        if (_elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value !== "") {
            _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value = eval(_elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value);
            this.activeResult = true;
        }
    }

    clear () {
        this.activeResult = false;
        _elements__WEBPACK_IMPORTED_MODULE_0__.EL_RESULT.value = "";
    }

}


/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EL_NUMBERS": () => (/* binding */ EL_NUMBERS),
/* harmony export */   "EL_OPERATORS": () => (/* binding */ EL_OPERATORS),
/* harmony export */   "EL_EQUAL": () => (/* binding */ EL_EQUAL),
/* harmony export */   "EL_ZERO": () => (/* binding */ EL_ZERO),
/* harmony export */   "EL_DOT": () => (/* binding */ EL_DOT),
/* harmony export */   "EL_RESULT": () => (/* binding */ EL_RESULT),
/* harmony export */   "EL_REMOVE": () => (/* binding */ EL_REMOVE)
/* harmony export */ });
const EL_NUMBERS = document.querySelectorAll(".num");
const EL_OPERATORS = document.querySelectorAll(".operator");
const EL_EQUAL = document.querySelector(".equal");
const EL_ZERO = document.querySelector(".zero");
const EL_DOT = document.querySelector(".dot");
const EL_RESULT = document.querySelector("#result");
const EL_REMOVE = document.querySelector("#delete");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ "./src/calculator.js");


window.onload = () => {
    const calculator = new _calculator__WEBPACK_IMPORTED_MODULE_0__.default();
    calculator.init();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczZwcm9qZWN0Ly4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZXM2cHJvamVjdC8uL3NyYy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9lczZwcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzNnByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzNnByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lczZwcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXM2cHJvamVjdC8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlEQUEyQjtBQUNuQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQsUUFBUSwyREFBNkI7QUFDckM7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVULFFBQVEsK0RBQWlDO0FBQ3pDO0FBQ0EsU0FBUzs7QUFFVCxRQUFRLDhEQUFnQztBQUN4QztBQUNBLFNBQVM7O0FBRVQsUUFBUSxnRUFBa0M7QUFDMUM7QUFDQSxTQUFTOztBQUVULFFBQVEsaUVBQW1DO0FBQzNDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHNEQUF3QjtBQUNwQztBQUNBLFNBQVM7QUFDVCxZQUFZLHNEQUF3QjtBQUNwQztBQUNBOztBQUVBO0FBQ0EsWUFBWSxzREFBd0I7QUFDcEMsWUFBWSxzREFBd0IsSUFBSSxvREFBc0I7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQXdCO0FBQ3BDLFlBQVksc0RBQXdCO0FBQ3BDLFNBQVM7QUFDVCxZQUFZLHNEQUF3QjtBQUNwQztBQUNBOztBQUVBO0FBQ0EsWUFBWSxzREFBd0I7QUFDcEMsWUFBWSxzREFBd0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQXdCO0FBQ3BDLFlBQVksc0RBQXdCLFFBQVEsc0RBQXdCO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxzREFBd0I7QUFDaEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ05QO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQSwyQkFBMkIsZ0RBQVU7QUFDckM7QUFDQSIsImZpbGUiOiIuL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZWxlbWVudHMuRUxfTlVNQkVSUy5mb3JFYWNoKGJ1dHRvbkVsID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kTnVtYmVyKGJ1dHRvbkVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLkVMX09QRVJBVE9SUy5mb3JFYWNoKChvcGVyYXRvckVsKSA9PiB7XHJcbiAgICAgICAgICAgIG9wZXJhdG9yRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3BlcmF0b3Iob3BlcmF0b3JFbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50cy5FTF9aRVJPLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kWmVybygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50cy5FTF9ET1QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmREb3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuRUxfRVFVQUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLkVMX1JFTU9WRS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kTnVtYmVyKGJ1dHRvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5FTF9SRVNVTFQudmFsdWUgPSBidXR0b24udmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuRUxfUkVTVUxULnZhbHVlICs9IGJ1dHRvbi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kWmVybygpIHtcclxuICAgICAgICBpZiAoZWxlbWVudHMuRUxfUkVTVUxULnZhbHVlICE9PSBcIjBcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5FTF9SRVNVTFQudmFsdWUgKz0gZWxlbWVudHMuRUxfWkVSTy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kRG90KCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5FTF9SRVNVTFQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuRUxfUkVTVUxULnZhbHVlID0gXCIwLlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLkVMX1JFU1VMVC52YWx1ZSArPSBcIi5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kT3BlcmF0b3Iob3BlcmF0b3IpIHtcclxuICAgICAgICBpZiAoZWxlbWVudHMuRUxfUkVTVUxULnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLkVMX1JFU1VMVC52YWx1ZSArPSBvcGVyYXRvci52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Jlc3VsdCAoKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLkVMX1JFU1VMVC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5FTF9SRVNVTFQudmFsdWUgPSBldmFsKGVsZW1lbnRzLkVMX1JFU1VMVC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgZWxlbWVudHMuRUxfUkVTVUxULnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVMX05VTUJFUlMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bVwiKTtcclxuZXhwb3J0IGNvbnN0IEVMX09QRVJBVE9SUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlcmF0b3JcIik7XHJcbmV4cG9ydCBjb25zdCBFTF9FUVVBTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXF1YWxcIik7XHJcbmV4cG9ydCBjb25zdCBFTF9aRVJPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi56ZXJvXCIpO1xyXG5leHBvcnQgY29uc3QgRUxfRE9UID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3RcIik7XHJcbmV4cG9ydCBjb25zdCBFTF9SRVNVTFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcclxuZXhwb3J0IGNvbnN0IEVMX1JFTU9WRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlXCIpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKCk7XHJcbiAgICBjYWxjdWxhdG9yLmluaXQoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9