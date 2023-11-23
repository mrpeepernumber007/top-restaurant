/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nconst indexTab = document.getElementById('home')\nconst menuTab = document.getElementById('menu')\n\nindexTab.addEventListener('click', _page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\nmenuTab.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setTable)\n/* harmony export */ });\nconst contentDiv = document.getElementById('content')\n\nconst menuDiv = document.createElement('div')\nconst menuUl = document.createElement('ul')\n\nconst dish1 = document.createElement('li')\nconst dish2 = document.createElement('li')\nconst dish3 = document.createElement('li')\n\nconst d1Title = document.createElement('h1')\nconst d2Title = document.createElement('h1')\nconst d3Title = document.createElement('h1')\n\nconst d1Desc = document.createElement('p')\nconst d2Desc = document.createElement('p')\nconst d3Desc = document.createElement('p')\n\nd1Title.textContent = 'Irresistible kibble'\nd2Title.textContent = 'Classic steak'\nd3Title.textContent = 'Bone calzone'\n\nd1Desc.textContent = 'Small roundish breaded bits of fish, chicken or potatoe. You can never guess what you will get, because even WE dont know!'\nd2Desc.textContent = 'Simple yet effective. The classic steak comes with a side of salad or fried or mashed potatoes.'\nd3Desc.textContent = 'Calzone in the shape of a bone! The greatest food for the Italian hound to munch on! Vegan version available soon.'\n\n\nfunction setTable() {\n    contentDiv.innerHTML = ''\n    dish1.appendChild(d1Title)\n    dish1.appendChild(d1Desc)\n    \n    dish2.appendChild(d2Title)\n    dish2.appendChild(d2Desc)\n    \n    dish3.appendChild(d3Title)\n    dish3.appendChild(d3Desc)\n    \n    menuUl.appendChild(dish1)\n    menuUl.appendChild(dish2)\n    menuUl.appendChild(dish3)\n    \n    menuDiv.appendChild(menuUl)\n    contentDiv.appendChild(menuDiv)\n}\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendContent)\n/* harmony export */ });\n/* harmony import */ var _dog_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog-logo.jpg */ \"./src/dog-logo.jpg\");\n\n\nconst img = new Image()\nimg.src = _dog_logo_jpg__WEBPACK_IMPORTED_MODULE_0__\n\nconst headLine = document.createElement('h1')\nheadLine.innerHTML = 'Dog restaurant! Feast like a hound!'\n    \nconst copyPar = document.createElement('p')\ncopyPar.innerHTML = 'The best restaurant in the neighborhood. We serve BIG meals in BIG ROUND plates. You cannot get enough of our food. Like a Dog! PS: we do NOT cook dog meat'\n\n\nconst contentDiv = document.getElementById('content')\n\n\nfunction appendContent() {\n    contentDiv.innerHTML = ''\n    contentDiv.appendChild(img)\n    contentDiv.appendChild(headLine)\n    contentDiv.appendChild(copyPar)\n}\n\n//# sourceURL=webpack://top-restaurant/./src/page-load.js?");

/***/ }),

/***/ "./src/dog-logo.jpg":
/*!**************************!*\
  !*** ./src/dog-logo.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d0f5be1e51331f2337d.jpg\";\n\n//# sourceURL=webpack://top-restaurant/./src/dog-logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;