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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n}\\n\\nlabel {\\n  padding: 10px;\\n}\\n\\nform {\\n  position: fixed;\\n  top: 50vh;\\n  left: 50%;\\n  transform: translate(-50%, -100%);\\n  width: 350px;\\n  display: none;\\n  flex-direction: column;\\n  padding: 20px;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  background-color: white;\\n}\\n\\n.tickets {\\n  width: 700px;\\n  min-width: 700px;\\n  margin: 50px auto;\\n}\\n\\n.add-ticket {\\n  width: 150px;\\n  height: 50px;\\n  float: right;\\n  margin-bottom: 15px;\\n  background-color: white;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n}\\n\\n.tickets-list {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.tickets-list-item {\\n  display: flex;\\n  width: 100%;\\n  height: fit-content;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.tickets-list-item-content {\\n  display: flex;\\n  flex-direction: column;\\n  width: 356px;\\n  padding: 16px;\\n}\\n\\n.description {\\n  margin-top: 10px;\\n}\\n\\n.datetime {\\n  width: 139px;\\n}\\n\\n.tickets-list-item-btn {\\n  display: flex;\\n  width: 25px;\\n  height: 25px;\\n  margin: auto 10px auto 10px;\\n  border: 1px solid black;\\n  border-radius: 50%;\\n}\\n\\n.icon {\\n  margin: auto;\\n}\\n\\n.form-title {\\n  align-self: center;\\n  padding: 10px;\\n}\\n\\n.input {\\n  padding: 10px;\\n  box-sizing: border-box;\\n}\\n\\n.btn-container {\\n  display: flex;\\n  justify-content: space-between; \\n  padding-top: 20px;\\n  width: 200px;\\n  margin-left: auto;\\n}\\n\\n.form-btn {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 50px;\\n  border: 1px solid black;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  background-color: white;\\n}\\n\\n.ok-btn {\\n  width: 100px;\\n}\\n\\n.cancel-btn {\\n  width: 75px;\\n}\\n\\n.active {\\n  display: flex;\\n}\\n\\n#name {\\n  height: 30px;\\n  width: 100%;\\n}\\n\\n#description {\\n  width: 100%;\\n  height: 100px;\\n  resize: none; \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/index.js?");

/***/ }),

/***/ "./src/js/API.js":
/*!***********************!*\
  !*** ./src/js/API.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function request(method, data = null) {\n  const BASE_URL = 'http://localhost:8080/';\n  let result;\n\n  if (method === 'allTickets') {\n    const response = await fetch(`${BASE_URL}?method=allTickets`);\n    if (response.ok) {\n      result = response.json();\n    }\n  }\n\n  if (method === 'ticketById') {\n    const response = await fetch(`${BASE_URL}?method=ticketById&id=${data}`, {\n      method: 'GET',\n      mode: 'cors',\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n      },\n    });\n\n    result = response.json();\n  }\n\n  if (method === 'createTicket') {\n    const response = await fetch(`${BASE_URL}?method=createTicket`, {\n      method: 'POST',\n      mode: 'cors',\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n      },\n      body: JSON.stringify({\n        name: data.get('name'),\n        description: data.get('description'),\n      }),\n    });\n\n    result = response;\n  }\n\n  if (method === 'deleteTicket') {\n    const response = await fetch(`${BASE_URL}?method=deleteTicket&id=${data}`, {\n      method: 'DELETE',\n      mode: 'cors',\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      },\n    });\n\n    result = response;\n  }\n\n  if (method === 'changeTicket') {\n    const response = await fetch(`${BASE_URL}?method=changeTicket`, {\n      method: 'PUT',\n      mode: 'cors',\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        id: data.get('id'),\n        name: data.get('name'),\n        description: data.get('description'),\n      }),\n    });\n\n    result = response;\n  }\n\n  return result;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/js/API.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tickets_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-widget */ \"./src/js/tickets-widget.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const ticketsEl = document.querySelector('.tickets');\n  const tickets = new _tickets_widget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ticketsEl);\n  tickets.init();\n});\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/js/app.js?");

/***/ }),

/***/ "./src/js/generateTicket.js":
/*!**********************************!*\
  !*** ./src/js/generateTicket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateTicket(id, name, datetime) {\n  return `\n  <div class=\"tickets-list-item\" ticket_id=${id}>\n    <div class=\"tickets-list-item-btn tick\"></div>\n    <div class=\"tickets-list-item-content\">\n      <span class=\"name\">${name}</span>\n      <span class=\"description\"></span>\n    </div>\n    <div class=\"tickets-list-item-content datetime\">${datetime}</div>\n    <div class=\"tickets-list-item-btn change-ticket\">\n      <div class=\"icon\">&#9998;</div>\n    </div>\n    <div class=\"tickets-list-item-btn remove-ticket\">\n      <div class=\"icon\">&#10006;</div>\n    </div>\n  </div>\n  `;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTicket);\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/js/generateTicket.js?");

/***/ }),

/***/ "./src/js/service.js":
/*!***************************!*\
  !*** ./src/js/service.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"parseDate\": () => (/* binding */ parseDate)\n/* harmony export */ });\nfunction closeModal(element) {\n  element.classList.remove('active');\n  element.reset();\n}\n\nfunction parseDate(datetime) {\n  const date = new Date(datetime);\n  const day = String(date.getDate()).length === 2 ? `${date.getDate()}` : `0${date.getDate()}`;\n  const month = String(date.getMonth()).length === 2 ? `${date.getMonth()}` : `0${date.getMonth()}`;\n\n  return `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;\n}\n\n\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/js/service.js?");

/***/ }),

/***/ "./src/js/tickets-widget.js":
/*!**********************************!*\
  !*** ./src/js/tickets-widget.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/js/API.js\");\n/* harmony import */ var _generateTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTicket */ \"./src/js/generateTicket.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ \"./src/js/service.js\");\n\n\n\n\nclass Tickets {\n  constructor(element) {\n    this.tickets = element;\n    this.addTicketForm = undefined;\n    this.addTicketBtn = undefined;\n    this.changeTicketForm = undefined;\n    this.agreeForm = undefined;\n    this.choosenTicket = undefined;\n\n    this.addTicketSubmit = this.addTicketSubmit.bind(this);\n    this.changeTicketSubmit = this.changeTicketSubmit.bind(this);\n    this.deleteTicketSubmit = this.deleteTicketSubmit.bind(this);\n  }\n\n  init() {\n    this.addTicketBtn = this.tickets.querySelector('.add-ticket');\n    this.addTicketForm = document.querySelector('#add-ticket');\n    this.changeTicketForm = document.querySelector('#change-ticket');\n    this.agreeForm = document.querySelector('.agree');\n\n    this.redrawTickets();\n\n    this.addListeners();\n  }\n\n  addListeners() {\n    const addTicketCancelBtn = this.addTicketForm.querySelector('.cancel-btn');\n    const changeTicketCancelBtn = this.changeTicketForm.querySelector('.cancel-btn');\n    const agreeCancelBtn = this.agreeForm.querySelector('.cancel-btn');\n\n    this.addTicketBtn.addEventListener('click', () => {\n      this.addTicketForm.classList.add('active');\n    });\n\n    addTicketCancelBtn.addEventListener('click', () => {\n      (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.addTicketForm);\n    });\n\n    changeTicketCancelBtn.addEventListener('click', () => {\n      (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.changeTicketForm);\n    });\n\n    agreeCancelBtn.addEventListener('click', () => {\n      (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.agreeForm);\n    });\n\n    this.addTicketForm.addEventListener('submit', this.addTicketSubmit);\n\n    this.changeTicketForm.addEventListener('submit', this.changeTicketSubmit);\n\n    this.agreeForm.addEventListener('submit', this.deleteTicketSubmit);\n  }\n\n  async addTicketSubmit(e) {\n    e.preventDefault();\n    const formData = new FormData(e.target);\n    const response = await (0,_API__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('createTicket', formData);\n\n    if (response.ok) {\n      this.redrawTickets();\n    }\n    (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.addTicketForm);\n  }\n\n  async changeTicketSubmit(e) {\n    e.preventDefault();\n\n    const formData = new FormData(this.changeTicketForm);\n    formData.append('id', this.choosenTicket.getAttribute('ticket_id'));\n\n    const response = await (0,_API__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('changeTicket', formData);\n\n    if (response.ok) {\n      this.redrawTickets();\n    }\n\n    (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.changeTicketForm);\n  }\n\n  async deleteTicketSubmit(e) {\n    e.preventDefault();\n\n    const response = await (0,_API__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('deleteTicket', this.choosenTicket.getAttribute('ticket_id'));\n\n    this.choosenTicket = undefined;\n\n    if (response.ok) {\n      this.redrawTickets();\n    }\n\n    (0,_service__WEBPACK_IMPORTED_MODULE_2__.closeModal)(this.agreeForm);\n  }\n\n  addTicksListeners() {\n    const ticks = this.tickets.querySelectorAll('.tickets-list-item');\n\n    for (let i = 0; i < ticks.length; i += 1) {\n      if (!ticks.item(i).getAttribute('has_event_listeners')) {\n        const tick = ticks.item(i).querySelector('.tick');\n        const changeTicket = ticks.item(i).querySelector('.change-ticket');\n        const removeTicket = ticks.item(i).querySelector('.remove-ticket');\n\n        tick.addEventListener('click', (e) => {\n          e.stopPropagation();\n\n          if (e.currentTarget.firstChild) {\n            e.currentTarget.firstChild.remove();\n            return;\n          }\n          e.currentTarget.innerHTML = '<div class=\"icon\">&#10003</div>';\n        });\n\n        changeTicket.addEventListener('click', (e) => {\n          e.stopPropagation();\n          this.changeTicketForm.classList.add('active');\n          this.choosenTicket = e.target.closest('.tickets-list-item');\n        });\n\n        removeTicket.addEventListener('click', (e) => {\n          e.stopPropagation();\n          this.agreeForm.classList.add('active');\n          this.choosenTicket = e.target.closest('.tickets-list-item');\n        });\n\n        ticks.item(i).addEventListener('click', async (e) => {\n          const ticket = e.currentTarget.closest('.tickets-list-item');\n          const ticketData = await (0,_API__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ticketById', ticket.getAttribute('ticket_id'));\n          const description = ticket.querySelector('.description');\n\n          if (description.textContent.length === 0) {\n            description.textContent = ticketData.description;\n            return;\n          }\n\n          description.textContent = '';\n        });\n\n        ticks.item(i).setAttribute('has_event_listeners', true);\n      }\n    }\n  }\n\n  async redrawTickets() {\n    const ticketsList = this.tickets.querySelector('.tickets-list');\n\n    while (ticketsList.firstChild) {\n      ticketsList.removeChild(ticketsList.firstChild);\n    }\n\n    const ticketsData = await (0,_API__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('allTickets');\n\n    for (let i = 0; i < ticketsData.length; i += 1) {\n      const ticketData = ticketsData[i];\n\n      const ticket = (0,_generateTicket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n        ticketData.id,\n        ticketData.name,\n        (0,_service__WEBPACK_IMPORTED_MODULE_2__.parseDate)(ticketData.created),\n      );\n\n      ticketsList.insertAdjacentHTML('beforeend', ticket);\n\n      this.addTicksListeners();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tickets);\n\n\n//# sourceURL=webpack://ahj-homeworks-http-frontend/./src/js/tickets-widget.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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