/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ProtestRiot-Regular.ttf */ "./src/fonts/ProtestRiot-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 16px;
  }
  
  @font-face {
    font-family: "myFont";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: normal;
    font-style: normal;
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    font-family: "myFont", "Times New Roman", sans-serif;
    background-image: linear-gradient(to right, #77a1d3, #79cbca, #e684ae);
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  /* current day section */
  
  #location_input{
    padding: 4px 10px;
    border-radius: 5px;
    border: 2px solid #77a1d3;
    outline: none;
  }
  
  ::placeholder {
    font-family: "Courier New", Courier, monospace;
  }
  
  button.search {
    padding: 3px 7px;
    border-radius: 3px;
    border: none;
    outline: 0;
    cursor: pointer;
    font-family: "myFont", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  
  main > section.current_day {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    padding: 30px;
  }
  
  .main_info > .header > .location,
  .temp_info {
    font-size: 3rem;
  }
  
  span.date,
  span.time {
    font-size: 1.5rem;
  }
  
  .temp_details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .temp_details > .text_container {
    display: flex;
    align-items: center;
  }
  
  .temp_details > .text,
  .date_info > .date,
  .time_info > .time {
    font-size: 1.3rem;
  }
  
  .temp_details > .temp {
    text-align: center;
  }
  
  .main_info {
    display: flex;
    flex-direction: column;
  }
  
  .current_day > .weather_data span {
    display: block;
  }
  .weather_details {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .weather_details > .icon {
    width: 1.1rem;
  }
  
  .weather_details > .data > .header {
    font-size: 1rem;
  }
  
  .weather_details > .data {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
  }
  
  .weather_data {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .time_info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
  
  .date_info {
    text-align: center;
  }
  
  .toggleContainer {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    border: 3px solid #2a52be;
    border-radius: 20px;
    background: #2a52be;
    font-weight: bold;
    color: #2a52be;
    cursor: pointer;
  }
  .toggleContainer::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0%;
    border-radius: 20px;
    background: white;
    transition: all 0.3s;
  }
  .toggleCheckbox:checked + .toggleContainer::before {
    left: 50%;
  }
  .toggleContainer div {
    padding: 6px;
    text-align: center;
    z-index: 1;
  }
  .toggleCheckbox {
    display: none;
  }
  .toggleCheckbox:checked + .toggleContainer div:first-child {
    color: white;
    transition: color 0.3s;
  }
  .toggleCheckbox:checked + .toggleContainer div:last-child {
    color: #2a52be;
    transition: color 0.3s;
  }
  .toggleCheckbox + .toggleContainer div:first-child {
    color: #2a52be;
    transition: color 0.3s;
  }
  .toggleCheckbox + .toggleContainer div:last-child {
    color: white;
    transition: color 0.3s;
  }
  
  .form_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
  }
  
  /* current day section */
  
  /* forecast setion */
  
  .forecast {
    background-color: rgba(0, 0, 0, 0.4);
    color: rgb(255, 255, 255);
  }
  
  .forecast > .main_content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 30px;
    color: rgb(255, 255, 255);
    gap: 15px;
  }
  
  .day_card {
    display: flex;
    flex-direction: column;
    gap: 3px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 7px;
    text-align: center;
    padding: 3px;
    box-shadow: 0 0 5px 2px rgb(255, 255, 255);
  }
  
  .day_card h3 {
    margin-bottom: 12px;
  }
  
  .forecast > .header {
    text-align: center;
    font-size: 2rem;
  }
  
  .condition_wrapper {
    display: flex;
    align-items: center;
  }
  
  /* forecast setion */
  `, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,4CAA0C;IAC1C,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;;IAEE,YAAY;EACd;;EAEA;IACE,oDAAoD;IACpD,sEAAsE;IACtE,sBAAsB;IACtB,4BAA4B;EAC9B;;EAEA,wBAAwB;;EAExB;IACE,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;EACf;;EAEA;IACE,8CAA8C;EAChD;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,eAAe;IACf;gBACY;EACd;;EAEA;IACE,aAAa;IACb,2BAA2B;IAC3B,6BAA6B;IAC7B,aAAa;EACf;;EAEA;;IAEE,eAAe;EACjB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;;;IAGE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;EACV;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,eAAe;EACjB;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,QAAQ;IACR,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;EACtB;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;IACZ,kBAAkB;IAClB,UAAU;EACZ;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;EACA;IACE,cAAc;IACd,sBAAsB;EACxB;EACA;IACE,cAAc;IACd,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,SAAS;EACX;;EAEA,wBAAwB;;EAExB,oBAAoB;;EAEpB;IACE,oCAAoC;IACpC,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,2DAA2D;IAC3D,aAAa;IACb,yBAAyB;IACzB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,0CAA0C;EAC5C;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA,oBAAoB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  :root {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"myFont\";\r\n    src: url(../fonts/ProtestRiot-Regular.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n  }\r\n  \r\n  html,\r\n  body {\r\n    height: 100%;\r\n  }\r\n  \r\n  body {\r\n    font-family: \"myFont\", \"Times New Roman\", sans-serif;\r\n    background-image: linear-gradient(to right, #77a1d3, #79cbca, #e684ae);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  }\r\n  \r\n  /* current day section */\r\n  \r\n  #location_input{\r\n    padding: 4px 10px;\r\n    border-radius: 5px;\r\n    border: 2px solid #77a1d3;\r\n    outline: none;\r\n  }\r\n  \r\n  ::placeholder {\r\n    font-family: \"Courier New\", Courier, monospace;\r\n  }\r\n  \r\n  button.search {\r\n    padding: 3px 7px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    font-family: \"myFont\", \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r\n      sans-serif;\r\n  }\r\n  \r\n  main > section.current_day {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-evenly;\r\n    padding: 30px;\r\n  }\r\n  \r\n  .main_info > .header > .location,\r\n  .temp_info {\r\n    font-size: 3rem;\r\n  }\r\n  \r\n  span.date,\r\n  span.time {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .temp_details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n  \r\n  .temp_details > .text_container {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .temp_details > .text,\r\n  .date_info > .date,\r\n  .time_info > .time {\r\n    font-size: 1.3rem;\r\n  }\r\n  \r\n  .temp_details > .temp {\r\n    text-align: center;\r\n  }\r\n  \r\n  .main_info {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .current_day > .weather_data span {\r\n    display: block;\r\n  }\r\n  .weather_details {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n  }\r\n  \r\n  .weather_details > .icon {\r\n    width: 1.1rem;\r\n  }\r\n  \r\n  .weather_details > .data > .header {\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .weather_details > .data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 2px;\r\n  }\r\n  \r\n  .weather_data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n  \r\n  .time_info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    gap: 6px;\r\n  }\r\n  \r\n  .date_info {\r\n    text-align: center;\r\n  }\r\n  \r\n  .toggleContainer {\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: fit-content;\r\n    border: 3px solid #2a52be;\r\n    border-radius: 20px;\r\n    background: #2a52be;\r\n    font-weight: bold;\r\n    color: #2a52be;\r\n    cursor: pointer;\r\n  }\r\n  .toggleContainer::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 50%;\r\n    height: 100%;\r\n    left: 0%;\r\n    border-radius: 20px;\r\n    background: white;\r\n    transition: all 0.3s;\r\n  }\r\n  .toggleCheckbox:checked + .toggleContainer::before {\r\n    left: 50%;\r\n  }\r\n  .toggleContainer div {\r\n    padding: 6px;\r\n    text-align: center;\r\n    z-index: 1;\r\n  }\r\n  .toggleCheckbox {\r\n    display: none;\r\n  }\r\n  .toggleCheckbox:checked + .toggleContainer div:first-child {\r\n    color: white;\r\n    transition: color 0.3s;\r\n  }\r\n  .toggleCheckbox:checked + .toggleContainer div:last-child {\r\n    color: #2a52be;\r\n    transition: color 0.3s;\r\n  }\r\n  .toggleCheckbox + .toggleContainer div:first-child {\r\n    color: #2a52be;\r\n    transition: color 0.3s;\r\n  }\r\n  .toggleCheckbox + .toggleContainer div:last-child {\r\n    color: white;\r\n    transition: color 0.3s;\r\n  }\r\n  \r\n  .form_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    gap: 15px;\r\n  }\r\n  \r\n  /* current day section */\r\n  \r\n  /* forecast setion */\r\n  \r\n  .forecast {\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    color: rgb(255, 255, 255);\r\n  }\r\n  \r\n  .forecast > .main_content {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    padding: 30px;\r\n    color: rgb(255, 255, 255);\r\n    gap: 15px;\r\n  }\r\n  \r\n  .day_card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3px;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    padding: 3px;\r\n    box-shadow: 0 0 5px 2px rgb(255, 255, 255);\r\n  }\r\n  \r\n  .day_card h3 {\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n  .forecast > .header {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .condition_wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  /* forecast setion */\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/APIs/geolocation.js":
/*!*****************************************!*\
  !*** ./src/modules/APIs/geolocation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUserLocation),
/* harmony export */   getLocationName: () => (/* binding */ getLocationName)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/APIs/weather.js");
/* harmony import */ var _DOM_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/today */ "./src/modules/DOM/today.js");
/* harmony import */ var _DOM_forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM/forecast */ "./src/modules/DOM/forecast.js");
/* harmony import */ var _giphy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./giphy */ "./src/modules/APIs/giphy.js");





const succesCallBack = (position) => {
  getLocationName(position.coords.latitide, position.coords.longitude).then(
    function (response) {
      (0,_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(response.city, "forecast.json").then(function (
        response
      ) {
        const dataObject = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.processWeatherData)(response);
        const dailyForecastArray = dataObject.dailyForecast;
        (0,_DOM_today__WEBPACK_IMPORTED_MODULE_1__["default"])(dataObject);
        (0,_DOM_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dailyForecastArray);
        (0,_giphy__WEBPACK_IMPORTED_MODULE_3__["default"])(dataObject.today.condition.text).then(
          function (response) {
            const backgroundImageUrl = (0,_giphy__WEBPACK_IMPORTED_MODULE_3__.processGiphyData)(response);
            (0,_DOM_today__WEBPACK_IMPORTED_MODULE_1__.displayBackgroundImage)(backgroundImageUrl);
          }
        );
      });
    }
  );
};

const errorCallBack = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      (0,_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)("Accra", "forecast.json").then(function (response) {
        const dataObject = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.processWeatherData)(response);
        const dailyForecastArray = dataObject.dailyForecast;
        (0,_DOM_today__WEBPACK_IMPORTED_MODULE_1__["default"])(dataObject);
        (0,_DOM_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dailyForecastArray);
        (0,_giphy__WEBPACK_IMPORTED_MODULE_3__["default"])(dataObject.today.condition.text).then(
          function (response) {
            const backgroundImageUrl = (0,_giphy__WEBPACK_IMPORTED_MODULE_3__.processGiphyData)(response);
            (0,_DOM_today__WEBPACK_IMPORTED_MODULE_1__.displayBackgroundImage)(backgroundImageUrl);
          }
        );
      });
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location is unvailable");
      break;
    case error.TIMEOUT:
      console.log("Request took too long");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occured");
  }
};

function getUserLocation() {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      succesCallBack,
      errorCallBack,
      options
    );
  }
}
const getLocationName = (lat, long) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        resolve(jsonResponse);
      })
      .catch((err) => {
        console.log("Error fetching location name:", err);
        reject(err);
      });
  });
};



/***/ }),

/***/ "./src/modules/APIs/giphy.js":
/*!***********************************!*\
  !*** ./src/modules/APIs/giphy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   processGiphyData: () => (/* binding */ processGiphyData)
/* harmony export */ });
const apiKey = "IK89N5HPAdMrfUfsp19BstayAMc8vpgJ";
const baseUrl = "https://api.giphy.com/v1/gifs/translate?api_key=";
const fetchWeatherConditionGif = (condition) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${apiKey}&s=${condition}`, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        resolve(jsonResponse);
      })
      .catch(function (err) {
        console.log("An error occured:", err);
        reject(err);
      });
  });
};

const processGiphyData = (jsonResponse) => {
  return jsonResponse.data.images.original.url;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherConditionGif);


/***/ }),

/***/ "./src/modules/APIs/weather.js":
/*!*************************************!*\
  !*** ./src/modules/APIs/weather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)
/* harmony export */ });
const apiKey = "d0bffd9cbc5a434b94a85650241605";
const baseUrl = "https://api.weatherapi.com/v1/";

function fetchWeatherData(location, apiMethod) {
  return fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${location}&days=7`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      return response.json();
    })
    .catch(function (err) {
      console.log("An error occured:", err);
    });
}

function processWeatherData(data) {
  const location = {
    city: data.location.name,
    country: data.location.country,
    localTime: data.location.localtime,
  };

  const today = {
    condition: {
      text: data.current.condition.text,
      url: `https://${data.current.condition.icon.split("//")[1]}`,
    },
    date: data.forecast.forecastday[0].date,
    temp: data.current.temp_c,
    feelslike: data.current.feelslike_c,
    humidity: data.current.humidity,
    lastUpdated: data.current.last_updated,
    windspeed: data.current.wind_kph,
  };

  const dailyForecast = data.forecast.forecastday;

  return { location, today, dailyForecast };
}


/***/ }),

/***/ "./src/modules/DOM/clearContent.js":
/*!*****************************************!*\
  !*** ./src/modules/DOM/clearContent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeContent)
/* harmony export */ });
function removeContent(element) {
    element.innerHTML = "";
}

/***/ }),

/***/ "./src/modules/DOM/eventHandlers.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/eventHandlers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEvents)
/* harmony export */ });
/* harmony import */ var _APIs_giphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APIs/giphy */ "./src/modules/APIs/giphy.js");
/* harmony import */ var _APIs_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../APIs/weather */ "./src/modules/APIs/weather.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ "./src/modules/DOM/today.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ "./src/modules/DOM/forecast.js");




const form = document.querySelector("form");

const handleUserInput = (userInput) => {
  (0,_APIs_weather__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(userInput, "forecast.json").then(function (response) {
    const dataObject = (0,_APIs_weather__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(response);
    const dailyForecastArray = dataObject.dailyForecast;
    (0,_today__WEBPACK_IMPORTED_MODULE_2__["default"])(dataObject);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_3__["default"])(dailyForecastArray);
    (0,_APIs_giphy__WEBPACK_IMPORTED_MODULE_0__["default"])(dataObject.today.condition.text).then(
      function (response) {
        const backgroundImageUrl = (0,_APIs_giphy__WEBPACK_IMPORTED_MODULE_0__.processGiphyData)(response);
        (0,_today__WEBPACK_IMPORTED_MODULE_2__.displayBackgroundImage)(backgroundImageUrl);
      }
    );
  });
}

function handleEvents() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputValue = getUserInput();
    handleUserInput(inputValue)
  })
}

const getUserInput = () => {
  const input = document.querySelector("#location_input");
  const userInput = input.value.trim();
  if (userInput !== "") return userInput;
}

/***/ }),

/***/ "./src/modules/DOM/fahrenheit.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/fahrenheit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEvents)
/* harmony export */ });
/* harmony import */ var _APIs_giphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APIs/giphy */ "./src/modules/APIs/giphy.js");
/* harmony import */ var _APIs_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../APIs/weather */ "./src/modules/APIs/weather.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ "./src/modules/DOM/today.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ "./src/modules/DOM/forecast.js");




const form = document.querySelector("form");

const handleUserInput = (userInput) => {
  (0,_APIs_weather__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(userInput, "forecast.json").then(function (response) {
    const dataObject = (0,_APIs_weather__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(response);
    const dailyForecastArray = dataObject.dailyForecast;
    (0,_today__WEBPACK_IMPORTED_MODULE_2__["default"])(dataObject);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_3__["default"])(dailyForecastArray);
    (0,_APIs_giphy__WEBPACK_IMPORTED_MODULE_0__["default"])(dataObject.today.condition.text).then(
      function (response) {
        const backgroundImageUrl = (0,_APIs_giphy__WEBPACK_IMPORTED_MODULE_0__.processGiphyData)(response);
        (0,_today__WEBPACK_IMPORTED_MODULE_2__.displayBackgroundImage)(backgroundImageUrl);
      }
    );
  });
}

function handleEvents() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputValue = getUserInput();
    handleUserInput(inputValue)
  })
}

const getUserInput = () => {
  const input = document.querySelector("#location_input");
  const userInput = input.value.trim();
  if (userInput !== "") return userInput;
}

/***/ }),

/***/ "./src/modules/DOM/forecast.js":
/*!*************************************!*\
  !*** ./src/modules/DOM/forecast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getDay.mjs");
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ "./src/modules/DOM/clearContent.js");


const createDayCard = (day, temp, humidity, rainChance, text, imgSrc, date) => {
  const dayCardElement = document.createElement("div");
  const dayDateInfo = document.createElement("div");
  const dayDateElement = document.createElement("span");
  const dayElement = document.createElement("h3");
  const tempElement = document.createElement("span");
  const humidityElement = document.createElement("span");
  const rainElement = document.createElement("span");
  const textElement = document.createElement("p");
  const conditionContainer = document.createElement("div");
  const img = new Image();

  dayElement.textContent = day
  tempElement.innerHTML = temp + "&degC";
  humidityElement.textContent = `Humidity: ${humidity}%`;
  rainElement.textContent = `Chance of rain: ${rainChance}%`;
  textElement.textContent = text;
  img.src = imgSrc;
  dayDateElement.textContent = date;
  dayCardElement.classList.add("day_card");
  conditionContainer.classList.add("condition_wrapper");
  dayElement.classList.add("day");
  tempElement.classList.add("forecast_temp");
  tempElement.classList.add("celcius");
  humidityElement.classList.add("forecast_humidity");
  rainElement.classList.add("forecast_rain");
  textElement.classList.add("forecast_text");
  img.classList.add("forecast_img");
  
  conditionContainer.appendChild(img)
  conditionContainer.appendChild(textElement)
  dayDateInfo.appendChild(dayElement);
  dayDateInfo.appendChild(dayDateElement);
  dayCardElement.appendChild(dayDateInfo);
  dayCardElement.appendChild(tempElement);
  dayCardElement.appendChild(humidityElement);
  dayCardElement.appendChild(conditionContainer);
  dayCardElement.appendChild(rainElement);

  return dayCardElement;
};

const appendDayCard = (dayCard) => {
  const forecastContent = document.querySelector(".main_content");
  forecastContent.appendChild(dayCard);
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const forecastMainContainer = document.querySelector(".main_content");
const displayDailyForecast = (forecastData) => {
  (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__["default"])(forecastMainContainer);
    for (const data of forecastData) {
      const daytemp = data.day.avgtemp_c
      const dayhumidity = data.day.avghumidity;
      const daytext = data.day.condition.text;
      const dayrainChance = data.day.daily_chance_of_rain;
      const dayimgSrc = `https://${data.day.condition.icon.split("//")[1]}`;
      const date = data.date;
      const dayName = daysOfWeek[(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.getDay)(date)];
      const dayCard = createDayCard(dayName, daytemp, dayhumidity, dayrainChance, daytext, dayimgSrc, date);
      appendDayCard(dayCard)
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayDailyForecast);

/***/ }),

/***/ "./src/modules/DOM/today.js":
/*!**********************************!*\
  !*** ./src/modules/DOM/today.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTodaysInformation),
/* harmony export */   displayBackgroundImage: () => (/* binding */ displayBackgroundImage)
/* harmony export */ });
/* harmony import */ var _APIs_giphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../APIs/giphy */ "./src/modules/APIs/giphy.js");

const currentDaySection = document.querySelector(".current_day");
const currentDaySpanElements = currentDaySection.querySelectorAll("span");
const bodyElement = document.querySelector("body");
const weatherImage = document.querySelector("#weather_image");
const displayBackgroundImage = (imageUrl) => {
  bodyElement.style.backgroundImage = `url(${imageUrl})`;
};
function displayTodaysInformation(data) {
  currentDaySpanElements.forEach((span) => {
    switch (true) {
      case span.classList.contains("city"):
        span.textContent = data.location.city + ", ";
        break;
      case span.classList.contains("country"):
        span.textContent = data.location.country;
        break;
      case span.classList.contains("temp"):
        span.innerHTML = data.today.temp + "&degC";
        break;
      case span.classList.contains("text"):
        span.textContent = data.today.condition.text;
        break;
      case span.classList.contains("lastupdated"):
        span.textContent = ` Last updated: ${data.today.lastUpdated}`;
        break;
      case span.classList.contains("feelslike"):
        span.innerHTML = data.today.feelslike + "&degC";
        break;
      case span.classList.contains("humidity"):
        span.textContent = data.today.humidity + "%";
        break;
      case span.classList.contains("windspeed"):
        span.textContent = data.today.windspeed + "kph";
        break;
      case span.classList.contains("time"):
        span.textContent = `Local Time: ${data.location.localTime}`;
        break;
      case span.classList.contains("date"):
        span.textContent = data.today.date;
    }
  });
  weatherImage.src = data.today.condition.url;
  (0,_APIs_giphy__WEBPACK_IMPORTED_MODULE_0__["default"])(data.today.condition.text);
}



/***/ }),

/***/ "./src/fonts/ProtestRiot-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/ProtestRiot-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de441de7974346171db.ttf";

/***/ }),

/***/ "./node_modules/date-fns/getDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const day = _date.getDay();
  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM_eventHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM/eventHandlers */ "./src/modules/DOM/eventHandlers.js");
/* harmony import */ var _modules_APIs_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/APIs/geolocation */ "./src/modules/APIs/geolocation.js");
/* harmony import */ var _modules_DOM_fahrenheit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM/fahrenheit */ "./src/modules/DOM/fahrenheit.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");




(0,_modules_DOM_eventHandlers__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_APIs_geolocation__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDRJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVEO0FBQ0U7QUFDdkI7QUFDVDtBQUN6QixzRUFBWTtBQUNaLHFFQUFlLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL0FQSXMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9BUElzL2dpcGh5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvQVBJcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvRE9NL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL0RPTS9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvRE9NL2ZhaHJlbmhlaXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ET00vZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ET00vdG9kYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1Byb3Rlc3RSaW90LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICA6cm9vdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibXlGb250XCI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwsXHJcbiAgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibXlGb250XCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3N2ExZDMsICM3OWNiY2EsICNlNjg0YWUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGN1cnJlbnQgZGF5IHNlY3Rpb24gKi9cclxuICBcclxuICAjbG9jYXRpb25faW5wdXR7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3N2ExZDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLnNlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm15Rm9udFwiLCBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLFxyXG4gICAgICBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBtYWluID4gc2VjdGlvbi5jdXJyZW50X2RheSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbl9pbmZvID4gLmhlYWRlciA+IC5sb2NhdGlvbixcclxuICAudGVtcF9pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgc3Bhbi5kYXRlLFxyXG4gIHNwYW4udGltZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXBfZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wX2RldGFpbHMgPiAudGV4dF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wX2RldGFpbHMgPiAudGV4dCxcclxuICAuZGF0ZV9pbmZvID4gLmRhdGUsXHJcbiAgLnRpbWVfaW5mbyA+IC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBcclxuICAudGVtcF9kZXRhaWxzID4gLnRlbXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWFpbl9pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuY3VycmVudF9kYXkgPiAud2VhdGhlcl9kYXRhIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC53ZWF0aGVyX2RldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWF0aGVyX2RldGFpbHMgPiAuaWNvbiB7XHJcbiAgICB3aWR0aDogMS4xcmVtO1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlcl9kZXRhaWxzID4gLmRhdGEgPiAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLndlYXRoZXJfZGV0YWlscyA+IC5kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogMnB4O1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlcl9kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAudGltZV9pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlX2luZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlQ29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJhNTJiZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmE1MmJlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzJhNTJiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRvZ2dsZUNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgLnRvZ2dsZUNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlQ29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICAudG9nZ2xlQ29udGFpbmVyIGRpdiB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAudG9nZ2xlQ2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvZ2dsZUNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlQ29udGFpbmVyIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gIH1cclxuICAudG9nZ2xlQ2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGVDb250YWluZXIgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgY29sb3I6ICMyYTUyYmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gIH1cclxuICAudG9nZ2xlQ2hlY2tib3ggKyAudG9nZ2xlQ29udGFpbmVyIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBjb2xvcjogIzJhNTJiZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC50b2dnbGVDaGVja2JveCArIC50b2dnbGVDb250YWluZXIgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1fd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogY3VycmVudCBkYXkgc2VjdGlvbiAqL1xyXG4gIFxyXG4gIC8qIGZvcmVjYXN0IHNldGlvbiAqL1xyXG4gIFxyXG4gIC5mb3JlY2FzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICBcclxuICAuZm9yZWNhc3QgPiAubWFpbl9jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGF5X2NhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgXHJcbiAgLmRheV9jYXJkIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JlY2FzdCA+IC5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY29uZGl0aW9uX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGZvcmVjYXN0IHNldGlvbiAqL1xyXG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsNENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELHNFQUFzRTtJQUN0RSxzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCOztFQUVBLHdCQUF3Qjs7RUFFeEI7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmO2dCQUNZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFNBQVM7RUFDWDs7RUFFQSx3QkFBd0I7O0VBRXhCLG9CQUFvQjs7RUFFcEI7SUFDRSxvQ0FBb0M7SUFDcEMseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUEsb0JBQW9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJteUZvbnRcXFwiO1xcclxcbiAgICBzcmM6IHVybCguLi9mb250cy9Qcm90ZXN0UmlvdC1SZWd1bGFyLnR0Zik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaHRtbCxcXHJcXG4gIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm15Rm9udFxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3N2ExZDMsICM3OWNiY2EsICNlNjg0YWUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBjdXJyZW50IGRheSBzZWN0aW9uICovXFxyXFxuICBcXHJcXG4gICNsb2NhdGlvbl9pbnB1dHtcXHJcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc3YTFkMztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJ1dHRvbi5zZWFyY2gge1xcclxcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIm15Rm9udFxcXCIsIFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsXFxyXFxuICAgICAgc2Fucy1zZXJpZjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgbWFpbiA+IHNlY3Rpb24uY3VycmVudF9kYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWFpbl9pbmZvID4gLmhlYWRlciA+IC5sb2NhdGlvbixcXHJcXG4gIC50ZW1wX2luZm8ge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHNwYW4uZGF0ZSxcXHJcXG4gIHNwYW4udGltZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGVtcF9kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGVtcF9kZXRhaWxzID4gLnRleHRfY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRlbXBfZGV0YWlscyA+IC50ZXh0LFxcclxcbiAgLmRhdGVfaW5mbyA+IC5kYXRlLFxcclxcbiAgLnRpbWVfaW5mbyA+IC50aW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50ZW1wX2RldGFpbHMgPiAudGVtcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1haW5faW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jdXJyZW50X2RheSA+IC53ZWF0aGVyX2RhdGEgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgLndlYXRoZXJfZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlYXRoZXJfZGV0YWlscyA+IC5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlYXRoZXJfZGV0YWlscyA+IC5kYXRhID4gLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlYXRoZXJfZGV0YWlscyA+IC5kYXRhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcm93LWdhcDogMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAud2VhdGhlcl9kYXRhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGltZV9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRhdGVfaW5mbyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvZ2dsZUNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmE1MmJlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmE1MmJlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6ICMyYTUyYmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC50b2dnbGVDb250YWluZXI6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC50b2dnbGVDaGVja2JveDpjaGVja2VkICsgLnRvZ2dsZUNvbnRhaW5lcjo6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgfVxcclxcbiAgLnRvZ2dsZUNvbnRhaW5lciBkaXYge1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG4gIC50b2dnbGVDaGVja2JveCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudG9nZ2xlQ2hlY2tib3g6Y2hlY2tlZCArIC50b2dnbGVDb250YWluZXIgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcclxcbiAgfVxcclxcbiAgLnRvZ2dsZUNoZWNrYm94OmNoZWNrZWQgKyAudG9nZ2xlQ29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgY29sb3I6ICMyYTUyYmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxyXFxuICB9XFxyXFxuICAudG9nZ2xlQ2hlY2tib3ggKyAudG9nZ2xlQ29udGFpbmVyIGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGNvbG9yOiAjMmE1MmJlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcclxcbiAgfVxcclxcbiAgLnRvZ2dsZUNoZWNrYm94ICsgLnRvZ2dsZUNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm1fd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBjdXJyZW50IGRheSBzZWN0aW9uICovXFxyXFxuICBcXHJcXG4gIC8qIGZvcmVjYXN0IHNldGlvbiAqL1xcclxcbiAgXFxyXFxuICAuZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JlY2FzdCA+IC5tYWluX2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGF5X2NhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kYXlfY2FyZCBoMyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JlY2FzdCA+IC5oZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbmRpdGlvbl93cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogZm9yZWNhc3Qgc2V0aW9uICovXFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCBkaXNwbGF5VG9kYXlzSW5mb3JtYXRpb24sIHsgZGlzcGxheUJhY2tncm91bmRJbWFnZSB9IGZyb20gXCIuLi9ET00vdG9kYXlcIjtcclxuaW1wb3J0IGRpc3BsYXlEYWlseUZvcmVjYXN0IGZyb20gXCIuLi9ET00vZm9yZWNhc3RcIjtcclxuaW1wb3J0IGZldGNoV2VhdGhlckNvbmRpdGlvbkdpZiwgeyBwcm9jZXNzR2lwaHlEYXRhIH0gZnJvbSBcIi4vZ2lwaHlcIjtcclxuXHJcbmNvbnN0IHN1Y2Nlc0NhbGxCYWNrID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgZ2V0TG9jYXRpb25OYW1lKHBvc2l0aW9uLmNvb3Jkcy5sYXRpdGlkZSwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSkudGhlbihcclxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBmZXRjaFdlYXRoZXJEYXRhKHJlc3BvbnNlLmNpdHksIFwiZm9yZWNhc3QuanNvblwiKS50aGVuKGZ1bmN0aW9uIChcclxuICAgICAgICByZXNwb25zZVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBkYXRhT2JqZWN0ID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCBkYWlseUZvcmVjYXN0QXJyYXkgPSBkYXRhT2JqZWN0LmRhaWx5Rm9yZWNhc3Q7XHJcbiAgICAgICAgZGlzcGxheVRvZGF5c0luZm9ybWF0aW9uKGRhdGFPYmplY3QpO1xyXG4gICAgICAgIGRpc3BsYXlEYWlseUZvcmVjYXN0KGRhaWx5Rm9yZWNhc3RBcnJheSk7XHJcbiAgICAgICAgZmV0Y2hXZWF0aGVyQ29uZGl0aW9uR2lmKGRhdGFPYmplY3QudG9kYXkuY29uZGl0aW9uLnRleHQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlVXJsID0gcHJvY2Vzc0dpcGh5RGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlCYWNrZ3JvdW5kSW1hZ2UoYmFja2dyb3VuZEltYWdlVXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZXJyb3JDYWxsQmFjayA9IChlcnJvcikgPT4ge1xyXG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xyXG4gICAgY2FzZSBlcnJvci5QRVJNSVNTSU9OX0RFTklFRDpcclxuICAgICAgZmV0Y2hXZWF0aGVyRGF0YShcIkFjY3JhXCIsIFwiZm9yZWNhc3QuanNvblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFPYmplY3QgPSBwcm9jZXNzV2VhdGhlckRhdGEocmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RBcnJheSA9IGRhdGFPYmplY3QuZGFpbHlGb3JlY2FzdDtcclxuICAgICAgICBkaXNwbGF5VG9kYXlzSW5mb3JtYXRpb24oZGF0YU9iamVjdCk7XHJcbiAgICAgICAgZGlzcGxheURhaWx5Rm9yZWNhc3QoZGFpbHlGb3JlY2FzdEFycmF5KTtcclxuICAgICAgICBmZXRjaFdlYXRoZXJDb25kaXRpb25HaWYoZGF0YU9iamVjdC50b2RheS5jb25kaXRpb24udGV4dCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBwcm9jZXNzR2lwaHlEYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgZGlzcGxheUJhY2tncm91bmRJbWFnZShiYWNrZ3JvdW5kSW1hZ2VVcmwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgZXJyb3IuUE9TSVRJT05fVU5BVkFJTEFCTEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gaXMgdW52YWlsYWJsZVwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGVycm9yLlRJTUVPVVQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCB0b29rIHRvbyBsb25nXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgZXJyb3IuVU5LTk9XTl9FUlJPUjpcclxuICAgICAgY29uc29sZS5sb2coXCJBbiB1bmtub3duIGVycm9yIG9jY3VyZWRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VXNlckxvY2F0aW9uKCkge1xyXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgbWF4aW11bUFnZTogMCxcclxuICAgIH07XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBzdWNjZXNDYWxsQmFjayxcclxuICAgICAgZXJyb3JDYWxsQmFjayxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuY29uc3QgZ2V0TG9jYXRpb25OYW1lID0gKGxhdCwgbG9uZykgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLmJpZ2RhdGFjbG91ZC5uZXQvZGF0YS9yZXZlcnNlLWdlb2NvZGUtY2xpZW50P2xhdGl0dWRlPSR7bGF0fSZsb25naXR1ZGU9JHtsb25nfWBcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uUmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBsb2NhdGlvbiBuYW1lOlwiLCBlcnIpO1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IHsgZ2V0TG9jYXRpb25OYW1lIH07XHJcbiIsImNvbnN0IGFwaUtleSA9IFwiSUs4OU41SFBBZE1yZlVmc3AxOUJzdGF5QU1jOHZwZ0pcIjtcclxuY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9XCI7XHJcbmNvbnN0IGZldGNoV2VhdGhlckNvbmRpdGlvbkdpZiA9IChjb25kaXRpb24pID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7YmFzZVVybH0ke2FwaUtleX0mcz0ke2NvbmRpdGlvbn1gLCB7XHJcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uUmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cmVkOlwiLCBlcnIpO1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2Nlc3NHaXBoeURhdGEgPSAoanNvblJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIGpzb25SZXNwb25zZS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXJDb25kaXRpb25HaWY7XHJcbmV4cG9ydCB7IHByb2Nlc3NHaXBoeURhdGEgfTsiLCJjb25zdCBhcGlLZXkgPSBcImQwYmZmZDljYmM1YTQzNGI5NGE4NTY1MDI0MTYwNVwiO1xyXG5jb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBhcGlNZXRob2QpIHtcclxuICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0ke2FwaU1ldGhvZH0/a2V5PSR7YXBpS2V5fSZxPSR7bG9jYXRpb259JmRheXM9N2ApXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cmVkOlwiLCBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0ge1xyXG4gICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgbG9jYWxUaW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2RheSA9IHtcclxuICAgIGNvbmRpdGlvbjoge1xyXG4gICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgIHVybDogYGh0dHBzOi8vJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24uc3BsaXQoXCIvL1wiKVsxXX1gLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZSxcclxuICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICBmZWVsc2xpa2U6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXHJcbiAgICBsYXN0VXBkYXRlZDogZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZCxcclxuICAgIHdpbmRzcGVlZDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3QgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuICByZXR1cm4geyBsb2NhdGlvbiwgdG9kYXksIGRhaWx5Rm9yZWNhc3QgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDb250ZW50KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxufSIsImltcG9ydCBmZXRjaFdlYXRoZXJDb25kaXRpb25HaWYsIHsgcHJvY2Vzc0dpcGh5RGF0YSB9IGZyb20gXCIuLi9BUElzL2dpcGh5XCI7XHJcbmltcG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIHByb2Nlc3NXZWF0aGVyRGF0YSB9IGZyb20gXCIuLi9BUElzL3dlYXRoZXJcIjtcclxuaW1wb3J0IGRpc3BsYXlUb2RheXNJbmZvcm1hdGlvbiwgeyBkaXNwbGF5QmFja2dyb3VuZEltYWdlIH0gZnJvbSBcIi4vdG9kYXlcIjtcclxuaW1wb3J0IGRpc3BsYXlEYWlseUZvcmVjYXN0IGZyb20gXCIuL2ZvcmVjYXN0XCI7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuXHJcbmNvbnN0IGhhbmRsZVVzZXJJbnB1dCA9ICh1c2VySW5wdXQpID0+IHtcclxuICBmZXRjaFdlYXRoZXJEYXRhKHVzZXJJbnB1dCwgXCJmb3JlY2FzdC5qc29uXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBkYXRhT2JqZWN0ID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHJlc3BvbnNlKTtcclxuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RBcnJheSA9IGRhdGFPYmplY3QuZGFpbHlGb3JlY2FzdDtcclxuICAgIGRpc3BsYXlUb2RheXNJbmZvcm1hdGlvbihkYXRhT2JqZWN0KTtcclxuICAgIGRpc3BsYXlEYWlseUZvcmVjYXN0KGRhaWx5Rm9yZWNhc3RBcnJheSk7XHJcbiAgICBmZXRjaFdlYXRoZXJDb25kaXRpb25HaWYoZGF0YU9iamVjdC50b2RheS5jb25kaXRpb24udGV4dCkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlVXJsID0gcHJvY2Vzc0dpcGh5RGF0YShyZXNwb25zZSk7XHJcbiAgICAgICAgZGlzcGxheUJhY2tncm91bmRJbWFnZShiYWNrZ3JvdW5kSW1hZ2VVcmwpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVFdmVudHMoKSB7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBnZXRVc2VySW5wdXQoKTtcclxuICAgIGhhbmRsZVVzZXJJbnB1dChpbnB1dFZhbHVlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGdldFVzZXJJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25faW5wdXRcIik7XHJcbiAgY29uc3QgdXNlcklucHV0ID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIGlmICh1c2VySW5wdXQgIT09IFwiXCIpIHJldHVybiB1c2VySW5wdXQ7XHJcbn0iLCJpbXBvcnQgZmV0Y2hXZWF0aGVyQ29uZGl0aW9uR2lmLCB7IHByb2Nlc3NHaXBoeURhdGEgfSBmcm9tIFwiLi4vQVBJcy9naXBoeVwiO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfSBmcm9tIFwiLi4vQVBJcy93ZWF0aGVyXCI7XHJcbmltcG9ydCBkaXNwbGF5VG9kYXlzSW5mb3JtYXRpb24sIHsgZGlzcGxheUJhY2tncm91bmRJbWFnZSB9IGZyb20gXCIuL3RvZGF5XCI7XHJcbmltcG9ydCBkaXNwbGF5RGFpbHlGb3JlY2FzdCBmcm9tIFwiLi9mb3JlY2FzdFwiO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5jb25zdCBoYW5kbGVVc2VySW5wdXQgPSAodXNlcklucHV0KSA9PiB7XHJcbiAgZmV0Y2hXZWF0aGVyRGF0YSh1c2VySW5wdXQsIFwiZm9yZWNhc3QuanNvblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHByb2Nlc3NXZWF0aGVyRGF0YShyZXNwb25zZSk7XHJcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0QXJyYXkgPSBkYXRhT2JqZWN0LmRhaWx5Rm9yZWNhc3Q7XHJcbiAgICBkaXNwbGF5VG9kYXlzSW5mb3JtYXRpb24oZGF0YU9iamVjdCk7XHJcbiAgICBkaXNwbGF5RGFpbHlGb3JlY2FzdChkYWlseUZvcmVjYXN0QXJyYXkpO1xyXG4gICAgZmV0Y2hXZWF0aGVyQ29uZGl0aW9uR2lmKGRhdGFPYmplY3QudG9kYXkuY29uZGl0aW9uLnRleHQpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZVVybCA9IHByb2Nlc3NHaXBoeURhdGEocmVzcG9uc2UpO1xyXG4gICAgICAgIGRpc3BsYXlCYWNrZ3JvdW5kSW1hZ2UoYmFja2dyb3VuZEltYWdlVXJsKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRXZlbnRzKCkge1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZ2V0VXNlcklucHV0KCk7XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoaW5wdXRWYWx1ZSlcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRVc2VySW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uX2lucHV0XCIpO1xyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuICBpZiAodXNlcklucHV0ICE9PSBcIlwiKSByZXR1cm4gdXNlcklucHV0O1xyXG59IiwiaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCByZW1vdmVDb250ZW50IGZyb20gXCIuL2NsZWFyQ29udGVudFwiO1xyXG5jb25zdCBjcmVhdGVEYXlDYXJkID0gKGRheSwgdGVtcCwgaHVtaWRpdHksIHJhaW5DaGFuY2UsIHRleHQsIGltZ1NyYywgZGF0ZSkgPT4ge1xyXG4gIGNvbnN0IGRheUNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkYXlEYXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGF5RGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgaHVtaWRpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgcmFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGNvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gIGRheUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXlcclxuICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSB0ZW1wICsgXCImZGVnQ1wiO1xyXG4gIGh1bWlkaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX0lYDtcclxuICByYWluRWxlbWVudC50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgcmFpbjogJHtyYWluQ2hhbmNlfSVgO1xyXG4gIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuICBpbWcuc3JjID0gaW1nU3JjO1xyXG4gIGRheURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZTtcclxuICBkYXlDYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGF5X2NhcmRcIik7XHJcbiAgY29uZGl0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25fd3JhcHBlclwiKTtcclxuICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XHJcbiAgdGVtcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0X3RlbXBcIik7XHJcbiAgdGVtcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNlbGNpdXNcIik7XHJcbiAgaHVtaWRpdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdF9odW1pZGl0eVwiKTtcclxuICByYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfcmFpblwiKTtcclxuICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RfdGV4dFwiKTtcclxuICBpbWcuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0X2ltZ1wiKTtcclxuICBcclxuICBjb25kaXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudClcclxuICBkYXlEYXRlSW5mby5hcHBlbmRDaGlsZChkYXlFbGVtZW50KTtcclxuICBkYXlEYXRlSW5mby5hcHBlbmRDaGlsZChkYXlEYXRlRWxlbWVudCk7XHJcbiAgZGF5Q2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF5RGF0ZUluZm8pO1xyXG4gIGRheUNhcmRFbGVtZW50LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcclxuICBkYXlDYXJkRWxlbWVudC5hcHBlbmRDaGlsZChodW1pZGl0eUVsZW1lbnQpO1xyXG4gIGRheUNhcmRFbGVtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvbkNvbnRhaW5lcik7XHJcbiAgZGF5Q2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFpbkVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gZGF5Q2FyZEVsZW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCBhcHBlbmREYXlDYXJkID0gKGRheUNhcmQpID0+IHtcclxuICBjb25zdCBmb3JlY2FzdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fY29udGVudFwiKTtcclxuICBmb3JlY2FzdENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF5Q2FyZCk7XHJcbn07XHJcblxyXG5jb25zdCBkYXlzT2ZXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XHJcbmNvbnN0IGZvcmVjYXN0TWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250ZW50XCIpO1xyXG5jb25zdCBkaXNwbGF5RGFpbHlGb3JlY2FzdCA9IChmb3JlY2FzdERhdGEpID0+IHtcclxuICByZW1vdmVDb250ZW50KGZvcmVjYXN0TWFpbkNvbnRhaW5lcik7XHJcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgZm9yZWNhc3REYXRhKSB7XHJcbiAgICAgIGNvbnN0IGRheXRlbXAgPSBkYXRhLmRheS5hdmd0ZW1wX2NcclxuICAgICAgY29uc3QgZGF5aHVtaWRpdHkgPSBkYXRhLmRheS5hdmdodW1pZGl0eTtcclxuICAgICAgY29uc3QgZGF5dGV4dCA9IGRhdGEuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgICBjb25zdCBkYXlyYWluQ2hhbmNlID0gZGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XHJcbiAgICAgIGNvbnN0IGRheWltZ1NyYyA9IGBodHRwczovLyR7ZGF0YS5kYXkuY29uZGl0aW9uLmljb24uc3BsaXQoXCIvL1wiKVsxXX1gO1xyXG4gICAgICBjb25zdCBkYXRlID0gZGF0YS5kYXRlO1xyXG4gICAgICBjb25zdCBkYXlOYW1lID0gZGF5c09mV2Vla1tnZXREYXkoZGF0ZSldO1xyXG4gICAgICBjb25zdCBkYXlDYXJkID0gY3JlYXRlRGF5Q2FyZChkYXlOYW1lLCBkYXl0ZW1wLCBkYXlodW1pZGl0eSwgZGF5cmFpbkNoYW5jZSwgZGF5dGV4dCwgZGF5aW1nU3JjLCBkYXRlKTtcclxuICAgICAgYXBwZW5kRGF5Q2FyZChkYXlDYXJkKVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5RGFpbHlGb3JlY2FzdCIsImltcG9ydCBmZXRjaFdlYXRoZXJDb25kaXRpb25HaWYgZnJvbSBcIi4uL0FQSXMvZ2lwaHlcIjtcclxuY29uc3QgY3VycmVudERheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRfZGF5XCIpO1xyXG5jb25zdCBjdXJyZW50RGF5U3BhbkVsZW1lbnRzID0gY3VycmVudERheVNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XHJcbmNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IHdlYXRoZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlcl9pbWFnZVwiKTtcclxuY29uc3QgZGlzcGxheUJhY2tncm91bmRJbWFnZSA9IChpbWFnZVVybCkgPT4ge1xyXG4gIGJvZHlFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZVVybH0pYDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRvZGF5c0luZm9ybWF0aW9uKGRhdGEpIHtcclxuICBjdXJyZW50RGF5U3BhbkVsZW1lbnRzLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2l0eVwiKTpcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5jaXR5ICsgXCIsIFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY291bnRyeVwiKTpcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGVtcFwiKTpcclxuICAgICAgICBzcGFuLmlubmVySFRNTCA9IGRhdGEudG9kYXkudGVtcCArIFwiJmRlZ0NcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBzcGFuLmNsYXNzTGlzdC5jb250YWlucyhcInRleHRcIik6XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGRhdGEudG9kYXkuY29uZGl0aW9uLnRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXN0dXBkYXRlZFwiKTpcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYCBMYXN0IHVwZGF0ZWQ6ICR7ZGF0YS50b2RheS5sYXN0VXBkYXRlZH1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmVlbHNsaWtlXCIpOlxyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZGF0YS50b2RheS5mZWVsc2xpa2UgKyBcIiZkZWdDXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoXCJodW1pZGl0eVwiKTpcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZGF0YS50b2RheS5odW1pZGl0eSArIFwiJVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZHNwZWVkXCIpOlxyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBkYXRhLnRvZGF5LndpbmRzcGVlZCArIFwia3BoXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3Bhbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aW1lXCIpOlxyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBgTG9jYWwgVGltZTogJHtkYXRhLmxvY2F0aW9uLmxvY2FsVGltZX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZVwiKTpcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZGF0YS50b2RheS5kYXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHdlYXRoZXJJbWFnZS5zcmMgPSBkYXRhLnRvZGF5LmNvbmRpdGlvbi51cmw7XHJcbiAgZmV0Y2hXZWF0aGVyQ29uZGl0aW9uR2lmKGRhdGEudG9kYXkuY29uZGl0aW9uLnRleHQpO1xyXG59XHJcbmV4cG9ydCB7IGRpc3BsYXlCYWNrZ3JvdW5kSW1hZ2UgfTtcclxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhhbmRsZUV2ZW50cyBmcm9tIFwiLi9tb2R1bGVzL0RPTS9ldmVudEhhbmRsZXJzXCI7XHJcbmltcG9ydCBnZXRVc2VyTG9jYXRpb24gZnJvbSBcIi4vbW9kdWxlcy9BUElzL2dlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9ET00vZmFocmVuaGVpdFwiO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaGFuZGxlRXZlbnRzKCk7XHJcbmdldFVzZXJMb2NhdGlvbigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9