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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL21haW4uY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcz9iNWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/main.css\n");

/***/ }),

/***/ "./src/images/about-bg.jpg":
/*!*********************************!*\
  !*** ./src/images/about-bg.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/about-bg.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1hZ2VzL2Fib3V0LWJnLmpwZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYWJvdXQtYmcuanBnPzllNWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Fib3V0LWJnLmpwZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/images/about-bg.jpg\n");

/***/ }),

/***/ "./src/images/home-dish.png":
/*!**********************************!*\
  !*** ./src/images/home-dish.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/home-dish.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1hZ2VzL2hvbWUtZGlzaC5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUtZGlzaC5wbmc/Mjk0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS1kaXNoLnBuZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/images/home-dish.png\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_about_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/about-bg.jpg */ \"./src/images/about-bg.jpg\");\n/* harmony import */ var _images_about_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_about_bg_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_home_dish_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/home-dish.png */ \"./src/images/home-dish.png\");\n/* harmony import */ var _images_home_dish_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_home_dish_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/home */ \"./src/js/tabs/home.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/menu */ \"./src/js/tabs/menu.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/contact */ \"./src/js/tabs/contact.js\");\n\n\n\n\n\n\n\n\n\nconst TabSwitcher = (() => {\n  const tabs = document.querySelectorAll('.tab');\n\n  const setDefaultTab = () => {\n    tabs[0].classList.add('active-tab');\n    _tabs_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n  };\n\n  const renderTab = (tab) => {\n    switch (tab.id) {\n      case 'home':\n        _tabs_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n        break;\n      case 'menu':\n        _tabs_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render();\n        break;\n      default:\n        _tabs_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render();\n    }\n  };\n\n  const resetActiveTab = () => {\n    tabs.forEach((tab) => {\n      tab.classList.remove('active-tab');\n    });\n  };\n\n  const bindListeners = () => {\n    tabs.forEach((tab) => {\n      tab.addEventListener('click', () => {\n        resetActiveTab();\n        tab.classList.add('active-tab');\n        renderTab(tab);\n      });\n    });\n    document.addEventListener('click', (event) => {\n      if (event.target && event.target.id === 'menu-btn') {\n        resetActiveTab();\n        tabs[1].classList.add('active-tab');\n        _tabs_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render();\n      }\n    });\n  };\n\n  return { setDefaultTab, bindListeners };\n})();\n\nTabSwitcher.setDefaultTab();\nTabSwitcher.bindListeners();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4uL2ltYWdlcy9hYm91dC1iZy5qcGcnO1xuaW1wb3J0ICcuLi9pbWFnZXMvaG9tZS1kaXNoLnBuZyc7XG5cbmltcG9ydCBIb21lVGFiIGZyb20gJy4vdGFicy9ob21lJztcbmltcG9ydCBNZW51VGFiIGZyb20gJy4vdGFicy9tZW51JztcbmltcG9ydCBDb250YWN0VGFiIGZyb20gJy4vdGFicy9jb250YWN0JztcblxuXG5jb25zdCBUYWJTd2l0Y2hlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFRhYiA9ICgpID0+IHtcbiAgICB0YWJzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICBIb21lVGFiLnJlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhYiA9ICh0YWIpID0+IHtcbiAgICBzd2l0Y2ggKHRhYi5pZCkge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIEhvbWVUYWIucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgIE1lbnVUYWIucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgQ29udGFjdFRhYi5yZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXRBY3RpdmVUYWIgPSAoKSA9PiB7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYmluZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXNldEFjdGl2ZVRhYigpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgICAgICByZW5kZXJUYWIodGFiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5pZCA9PT0gJ21lbnUtYnRuJykge1xuICAgICAgICByZXNldEFjdGl2ZVRhYigpO1xuICAgICAgICB0YWJzWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICAgICAgTWVudVRhYi5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBzZXREZWZhdWx0VGFiLCBiaW5kTGlzdGVuZXJzIH07XG59KSgpO1xuXG5UYWJTd2l0Y2hlci5zZXREZWZhdWx0VGFiKCk7XG5UYWJTd2l0Y2hlci5iaW5kTGlzdGVuZXJzKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/tabs/contact.js":
/*!********************************!*\
  !*** ./src/js/tabs/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ContactTab = (() => {\n  const tabContent = `\n  <div class=\"flex w-8/12 justify-center items-center mx-auto\">\n    <div class=\"max-w-sm w-full lg:max-w-full lg:flex\">\n      <div id=\"about-bg\"\n        class=\"h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden\"\n        title=\"Woman holding a mug\">\n      </div>\n      <div\n        class=\"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal\">\n        <div class=\"mb-8\">\n          <h2 class=\"text-5xl text-yellow-700 font-vibes\">Our Story</h2>\n          <div class=\"text-gray-900 font-bold text-xl mb-2\">Our Search for magical food experiences</div>\n          <p class=\"text-gray-700 text-base\">Inspired by the traditional way of cooking Egyptian cuisine,\n            Om-Ali Restaurant is a recollection of Cairo's past and its surrounding provinces, a homey yet\n            elegant feeling that everyone can experience right in the heart of the Old Quarter.\n\n            Situated in one of the oldest locations in Cairo's history where the Pyramids just a few blocks away,\n            Om-Ali Restaurant is the ideal introduction for both local and foreign visitors who are seeking\n            authentic exposure to Egyptian culture.</p>\n        </div>\n        <button\n          class=\"mt-5 px-3 py-2 rounded-full bg-transparent text-yellow-700 font-bold uppercase border-solid border-2 border-yellow-700\">Book\n          Now!</button>\n      </div>\n    </div>\n  </div>\n  `;\n\n  const render = () => {\n    const root = document.getElementById('content');\n    root.innerHTML = tabContent;\n  };\n\n  return { render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactTab);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFicy9jb250YWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYnMvY29udGFjdC5qcz84MTkyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnRhY3RUYWIgPSAoKCkgPT4ge1xuICBjb25zdCB0YWJDb250ZW50ID0gYFxuICA8ZGl2IGNsYXNzPVwiZmxleCB3LTgvMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwibWF4LXctc20gdy1mdWxsIGxnOm1heC13LWZ1bGwgbGc6ZmxleFwiPlxuICAgICAgPGRpdiBpZD1cImFib3V0LWJnXCJcbiAgICAgICAgY2xhc3M9XCJoLTY0IGxnOmgtYXV0byBsZzp3LTY0IGZsZXgtbm9uZSBiZy1jb3ZlciByb3VuZGVkLXQgbGc6cm91bmRlZC10LW5vbmUgbGc6cm91bmRlZC1sIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgIHRpdGxlPVwiV29tYW4gaG9sZGluZyBhIG11Z1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYm9yZGVyLXIgYm9yZGVyLWIgYm9yZGVyLWwgYm9yZGVyLWdyYXktNDAwIGxnOmJvcmRlci1sLTAgbGc6Ym9yZGVyLXQgbGc6Ym9yZGVyLWdyYXktNDAwIGJnLXdoaXRlIHJvdW5kZWQtYiBsZzpyb3VuZGVkLWItbm9uZSBsZzpyb3VuZGVkLXIgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC01eGwgdGV4dC15ZWxsb3ctNzAwIGZvbnQtdmliZXNcIj5PdXIgU3Rvcnk8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj5PdXIgU2VhcmNoIGZvciBtYWdpY2FsIGZvb2QgZXhwZXJpZW5jZXM8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+SW5zcGlyZWQgYnkgdGhlIHRyYWRpdGlvbmFsIHdheSBvZiBjb29raW5nIEVneXB0aWFuIGN1aXNpbmUsXG4gICAgICAgICAgICBPbS1BbGkgUmVzdGF1cmFudCBpcyBhIHJlY29sbGVjdGlvbiBvZiBDYWlybydzIHBhc3QgYW5kIGl0cyBzdXJyb3VuZGluZyBwcm92aW5jZXMsIGEgaG9tZXkgeWV0XG4gICAgICAgICAgICBlbGVnYW50IGZlZWxpbmcgdGhhdCBldmVyeW9uZSBjYW4gZXhwZXJpZW5jZSByaWdodCBpbiB0aGUgaGVhcnQgb2YgdGhlIE9sZCBRdWFydGVyLlxuXG4gICAgICAgICAgICBTaXR1YXRlZCBpbiBvbmUgb2YgdGhlIG9sZGVzdCBsb2NhdGlvbnMgaW4gQ2Fpcm8ncyBoaXN0b3J5IHdoZXJlIHRoZSBQeXJhbWlkcyBqdXN0IGEgZmV3IGJsb2NrcyBhd2F5LFxuICAgICAgICAgICAgT20tQWxpIFJlc3RhdXJhbnQgaXMgdGhlIGlkZWFsIGludHJvZHVjdGlvbiBmb3IgYm90aCBsb2NhbCBhbmQgZm9yZWlnbiB2aXNpdG9ycyB3aG8gYXJlIHNlZWtpbmdcbiAgICAgICAgICAgIGF1dGhlbnRpYyBleHBvc3VyZSB0byBFZ3lwdGlhbiBjdWx0dXJlLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cIm10LTUgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCBiZy10cmFuc3BhcmVudCB0ZXh0LXllbGxvdy03MDAgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLXllbGxvdy03MDBcIj5Cb29rXG4gICAgICAgICAgTm93ITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICByb290LmlubmVySFRNTCA9IHRhYkNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VGFiO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/tabs/contact.js\n");

/***/ }),

/***/ "./src/js/tabs/home.js":
/*!*****************************!*\
  !*** ./src/js/tabs/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst HomeTab = (() => {\n  const tabContent = `\n    <div class=\"flex w-10/12 justify-around items-center mx-auto\">\n      <section>\n        <h2 class=\"text-4xl text-gray-200 italic\">Are you hungry?</h2>\n        <h1 class=\"text-6xl text-yellow-700 font-bold\">Don't Wait !</h1>\n        <h3 class=\"text-2xl text-gray-200 italic\">Let's start to order food now</h3>\n        <button class=\"mt-5 px-3 py-2 rounded-full bg-transparent text-yellow-700 font-bold uppercase border-solid border-2 border-yellow-700\" id=\"menu-btn\">Check Menu</button>\n      </section>\n      <section>\n        <img src=\"images/home-dish.png\" alt=\"dish\" class=\"h-112 p-4 border-4 border-gray-200 rounded-full\">\n      </section>\n    </div>\n  `;\n\n  const render = () => {\n    const root = document.getElementById('content');\n    root.innerHTML = tabContent;\n  };\n\n  return { render };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeTab);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFicy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYnMvaG9tZS5qcz84MWIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhvbWVUYWIgPSAoKCkgPT4ge1xuICBjb25zdCB0YWJDb250ZW50ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctMTAvMTIganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTR4bCB0ZXh0LWdyYXktMjAwIGl0YWxpY1wiPkFyZSB5b3UgaHVuZ3J5PzwvaDI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtNnhsIHRleHQteWVsbG93LTcwMCBmb250LWJvbGRcIj5Eb24ndCBXYWl0ICE8L2gxPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktMjAwIGl0YWxpY1wiPkxldCdzIHN0YXJ0IHRvIG9yZGVyIGZvb2Qgbm93PC9oMz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm10LTUgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCBiZy10cmFuc3BhcmVudCB0ZXh0LXllbGxvdy03MDAgZm9udC1ib2xkIHVwcGVyY2FzZSBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLXllbGxvdy03MDBcIiBpZD1cIm1lbnUtYnRuXCI+Q2hlY2sgTWVudTwvYnV0dG9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2hvbWUtZGlzaC5wbmdcIiBhbHQ9XCJkaXNoXCIgY2xhc3M9XCJoLTExMiBwLTQgYm9yZGVyLTQgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICByb290LmlubmVySFRNTCA9IHRhYkNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lVGFiO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/tabs/home.js\n");

/***/ }),

/***/ "./src/js/tabs/menu.js":
/*!*****************************!*\
  !*** ./src/js/tabs/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MenuTab = (() => {\n  const tabContent = `\n  <div class=\"flex flex-col w-10/12 justify-around items-center mx-auto text-gray-200 overflow-scroll h-full\">\n    <div class=\"dish flex items-center\" style=\"margin-top: 1450px;\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex justify-end\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"dish flex items-center flex-row-reverse\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"dish flex items-center\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex justify-end\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"dish flex items-center flex-row-reverse\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"dish flex items-center\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex justify-end\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"dish flex items-center flex-row-reverse\">\n        <section class=\"w-1/2\">\n          <h3 class=\"font-vibes text-5xl text-yellow-700\">Greek Chicken</h3>\n          <h5 class=\"text-xl\">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>\n        </section>\n        <section class=\"w-1/2 flex\">\n          <img src=\"images/dish4-croped.png\" alt=\"dish\" class=\"h-88 p-4 rounded-full\">\n        </section>\n      </div>\n\n      <div class=\"gradientback\">\n      </div>\n    </div>\n  `;\n\n  const render = () => {\n    const root = document.getElementById('content');\n    root.innerHTML = tabContent;\n  };\n\n  return {\n    render,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuTab);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGFicy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RhYnMvbWVudS5qcz9hZjlkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1lbnVUYWIgPSAoKCkgPT4ge1xuICBjb25zdCB0YWJDb250ZW50ID0gYFxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LTEwLzEyIGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBteC1hdXRvIHRleHQtZ3JheS0yMDAgb3ZlcmZsb3ctc2Nyb2xsIGgtZnVsbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkaXNoIGZsZXggaXRlbXMtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNDUwcHg7XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidy0xLzJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJmb250LXZpYmVzIHRleHQtNXhsIHRleHQteWVsbG93LTcwMFwiPkdyZWVrIENoaWNrZW48L2gzPlxuICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQteGxcIj5GcmVzaCwgY3J1bmNoeSBjdWN1bWJlciBzYWxhZCwgY2hpY2tlbiBicmVhc2sgd2l0aCBHcmVlbi1pbnNwaXJlZCBmbGF2b3I8L2g1PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidy0xLzIgZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Rpc2g0LWNyb3BlZC5wbmdcIiBhbHQ9XCJkaXNoXCIgY2xhc3M9XCJoLTg4IHAtNCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXNoIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtcm93LXJldmVyc2VcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTEvMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImZvbnQtdmliZXMgdGV4dC01eGwgdGV4dC15ZWxsb3ctNzAwXCI+R3JlZWsgQ2hpY2tlbjwvaDM+XG4gICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC14bFwiPkZyZXNoLCBjcnVuY2h5IGN1Y3VtYmVyIHNhbGFkLCBjaGlja2VuIGJyZWFzayB3aXRoIEdyZWVuLWluc3BpcmVkIGZsYXZvcjwvaDU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTEvMiBmbGV4XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZGlzaDQtY3JvcGVkLnBuZ1wiIGFsdD1cImRpc2hcIiBjbGFzcz1cImgtODggcC00IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRpc2ggZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTEvMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImZvbnQtdmliZXMgdGV4dC01eGwgdGV4dC15ZWxsb3ctNzAwXCI+R3JlZWsgQ2hpY2tlbjwvaDM+XG4gICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC14bFwiPkZyZXNoLCBjcnVuY2h5IGN1Y3VtYmVyIHNhbGFkLCBjaGlja2VuIGJyZWFzayB3aXRoIEdyZWVuLWluc3BpcmVkIGZsYXZvcjwvaDU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ3LTEvMiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZGlzaDQtY3JvcGVkLnBuZ1wiIGFsdD1cImRpc2hcIiBjbGFzcz1cImgtODggcC00IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRpc2ggZmxleCBpdGVtcy1jZW50ZXIgZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctMS8yXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiZm9udC12aWJlcyB0ZXh0LTV4bCB0ZXh0LXllbGxvdy03MDBcIj5HcmVlayBDaGlja2VuPC9oMz5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXhsXCI+RnJlc2gsIGNydW5jaHkgY3VjdW1iZXIgc2FsYWQsIGNoaWNrZW4gYnJlYXNrIHdpdGggR3JlZW4taW5zcGlyZWQgZmxhdm9yPC9oNT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctMS8yIGZsZXhcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kaXNoNC1jcm9wZWQucG5nXCIgYWx0PVwiZGlzaFwiIGNsYXNzPVwiaC04OCBwLTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzaCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctMS8yXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiZm9udC12aWJlcyB0ZXh0LTV4bCB0ZXh0LXllbGxvdy03MDBcIj5HcmVlayBDaGlja2VuPC9oMz5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXhsXCI+RnJlc2gsIGNydW5jaHkgY3VjdW1iZXIgc2FsYWQsIGNoaWNrZW4gYnJlYXNrIHdpdGggR3JlZW4taW5zcGlyZWQgZmxhdm9yPC9oNT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctMS8yIGZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kaXNoNC1jcm9wZWQucG5nXCIgYWx0PVwiZGlzaFwiIGNsYXNzPVwiaC04OCBwLTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzaCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXJvdy1yZXZlcnNlXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidy0xLzJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJmb250LXZpYmVzIHRleHQtNXhsIHRleHQteWVsbG93LTcwMFwiPkdyZWVrIENoaWNrZW48L2gzPlxuICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQteGxcIj5GcmVzaCwgY3J1bmNoeSBjdWN1bWJlciBzYWxhZCwgY2hpY2tlbiBicmVhc2sgd2l0aCBHcmVlbi1pbnNwaXJlZCBmbGF2b3I8L2g1PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidy0xLzIgZmxleFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Rpc2g0LWNyb3BlZC5wbmdcIiBhbHQ9XCJkaXNoXCIgY2xhc3M9XCJoLTg4IHAtNCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudGJhY2tcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICByb290LmlubmVySFRNTCA9IHRhYkNvbnRlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51VGFiO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/tabs/menu.js\n");

/***/ })

/******/ });