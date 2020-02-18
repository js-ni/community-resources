(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".color {\n    color: rgba(0, 0, 0, 0.9)\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Jose AGustin\",\"age\":21},{\"name\":\" AGustin\",\"age\":22},{\"name\":\"Jose \",\"age\":23},{\"name\":\"J. AGustin\",\"age\":24},{\"name\":\"Jose-AGustin\",\"age\":25}]");

/***/ }),

/***/ "./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/images/accessory-buttons-console-control-275033.jpg":
/*!*****************************************************************!*\
  !*** ./src/images/accessory-buttons-console-control-275033.jpg ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e6c4236c073e96ccde86b92577ed75c.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_accessory_buttons_console_control_275033_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/accessory-buttons-console-control-275033.jpg */ "./src/images/accessory-buttons-console-control-275033.jpg");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.xml */ "./src/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/data.json", 1);





// import printMe from './print'

function component() {
    const element = document.createElement('div')

    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'Engeneer'])
    // element.click = printMe.bind(null, 'Hello Webpack!')

    return element;
}

// function component() {
//     return import('lodash')
//         .then(({ default: _ }) => {
//             const element = document.createElement('div');

//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             element.classList.add('color');

//             return element;
//         })
//         .catch(err => 'An error occurred while loading the component')
// }

function componentImage() {
    const imageBox = document.createElement('img');
    imageBox.setAttribute('src', _images_accessory_buttons_console_control_275033_jpg__WEBPACK_IMPORTED_MODULE_2__["default"])
    
    return imageBox;
}

function Imprimir() {
    console.log(_data_xml__WEBPACK_IMPORTED_MODULE_3___default.a);
    console.log(_data_json__WEBPACK_IMPORTED_MODULE_4__);
}


document.body.appendChild(component());
// document.body.appendChild(componentImage())

// Imprimir()
// printMe()

// component().then(component => (
//     document.body.appendChild(component)
// ))

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hY2Nlc3NvcnktYnV0dG9ucy1jb25zb2xlLWNvbnRyb2wtMjc1MDMzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFdBQVcsa0NBQWtDO0FBQ3BFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsa0JBQWtCLFFBQVEsdUY7Ozs7Ozs7Ozs7OztBQ0ExQjtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCO0FBQ0Q7QUFDb0Q7QUFDM0M7QUFDSTtBQUNsQzs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qiw2Q0FBQztBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw0RkFBSzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixnREFBSTtBQUNwQixnQkFBZ0IsdUNBQVE7QUFDeEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7QUNsREEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRXpGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6Im1haW4uNzA3MDE1NWMwYjcyMzMzYjE3ZDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbG9yIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWU2YzQyMzZjMDczZTk2Y2NkZTg2YjkyNTc3ZWQ3NWMuanBnXCI7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZXMvYWNjZXNzb3J5LWJ1dHRvbnMtY29uc29sZS1jb250cm9sLTI3NTAzMy5qcGcnXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEueG1sJztcbmltcG9ydCBkYXRhSnNvbiBmcm9tICcuL2RhdGEuanNvbidcbi8vIGltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnRW5nZW5lZXInXSlcbiAgICAvLyBlbGVtZW50LmNsaWNrID0gcHJpbnRNZS5iaW5kKG51bGwsICdIZWxsbyBXZWJwYWNrIScpXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIHJldHVybiBpbXBvcnQoJ2xvZGFzaCcpXG4vLyAgICAgICAgIC50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbi8vICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sb3InKTtcblxuLy8gICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT4gJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCcpXG4vLyB9XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEltYWdlKCkge1xuICAgIGNvbnN0IGltYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VCb3guc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZSlcbiAgICBcbiAgICByZXR1cm4gaW1hZ2VCb3g7XG59XG5cbmZ1bmN0aW9uIEltcHJpbWlyKCkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGFKc29uKTtcbn1cblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50SW1hZ2UoKSlcblxuLy8gSW1wcmltaXIoKVxuLy8gcHJpbnRNZSgpXG5cbi8vIGNvbXBvbmVudCgpLnRoZW4oY29tcG9uZW50ID0+IChcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudClcbi8vICkpIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==