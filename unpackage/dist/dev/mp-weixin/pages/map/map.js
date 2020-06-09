(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/map/map"],{

/***/ 49:
/*!*********************************************************************************!*\
  !*** D:/wechatapp/develop/animal_crossing/main.js?{"page":"pages%2Fmap%2Fmap"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _map = _interopRequireDefault(__webpack_require__(/*! ./pages/map/map.vue */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_map.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 50:
/*!**************************************************************!*\
  !*** D:/wechatapp/develop/animal_crossing/pages/map/map.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=21586aa0&scoped=true& */ 51);
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ 53);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.vue?vue&type=style&index=0&id=21586aa0&scoped=true&lang=scss& */ 55);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21586aa0",
  null,
  false,
  _map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "wechatapp/develop/animal_crossing/pages/map/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/*!*********************************************************************************************************!*\
  !*** D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=template&id=21586aa0&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=template&id=21586aa0&scoped=true& */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_21586aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 52:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=template&id=21586aa0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uTabs: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-tabs/u-tabs */ "node-modules/uview-ui/components/u-tabs/u-tabs").then(__webpack_require__.bind(null, /*! uview-ui/components/u-tabs/u-tabs.vue */ 218))
  },
  uSearch: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-search/u-search */ "node-modules/uview-ui/components/u-search/u-search").then(__webpack_require__.bind(null, /*! uview-ui/components/u-search/u-search.vue */ 225))
  },
  uCellGroup: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-cell-group/u-cell-group */ "node-modules/uview-ui/components/u-cell-group/u-cell-group").then(__webpack_require__.bind(null, /*! uview-ui/components/u-cell-group/u-cell-group.vue */ 232))
  },
  uCellItem: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-cell-item/u-cell-item */ "node-modules/uview-ui/components/u-cell-item/u-cell-item").then(__webpack_require__.bind(null, /*! uview-ui/components/u-cell-item/u-cell-item.vue */ 239))
  },
  uButton: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-button/u-button */ "node-modules/uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 246))
  },
  uSwitch: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-switch/u-switch */ "node-modules/uview-ui/components/u-switch/u-switch").then(__webpack_require__.bind(null, /*! uview-ui/components/u-switch/u-switch.vue */ 253))
  },
  uDivider: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-divider/u-divider */ "node-modules/uview-ui/components/u-divider/u-divider").then(__webpack_require__.bind(null, /*! uview-ui/components/u-divider/u-divider.vue */ 260))
  },
  uNumberBox: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-number-box/u-number-box */ "node-modules/uview-ui/components/u-number-box/u-number-box").then(__webpack_require__.bind(null, /*! uview-ui/components/u-number-box/u-number-box.vue */ 267))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 53:
/*!***************************************************************************************!*\
  !*** D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=script&lang=js& */ 54);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o) {if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      //tab标签当前选中的值
      current: 0,
      // 搜索框的值
      keyword: '',
      //图鉴类型
      dexType: "fish",
      //详情item
      detailItem: [],
      //鱼类已收集
      fish_checked: [],
      // 虫类已收集
      insect_checked: [],
      // 化石已收集（数量）
      fossil_number: [],
      // 艺术品已收集(数量)
      artwork_number: [],
      // 村民已入住
      villager_checked: [],
      // 家具已收集
      furniture_checked: [],
      // diy已收集
      diy_checked: [],
      // 服装已收集
      dress_checked: [],
      // 唱片已收集
      albums_checked: [],
      //tabs列表
      list: [{
        name: '鱼类' },

      {
        name: '昆虫' },

      {
        name: '化石' },

      {
        name: '艺术品' },

      {
        name: '村民' },

      {
        name: '家具' },

      {
        name: 'diy' },

      {
        name: '服装' },

      {
        name: '唱片' }],


      //鱼类信息
      fish: [],
      //鱼类页数
      fishPageNum: 1,
      //虫类信息
      insect: [],
      //虫类页数
      insectPageNum: 1,
      //化石信息
      fossil: [],
      //化石页数
      fossilPageNum: 1,
      //艺术品信息
      artWork: [],
      //艺术品页数
      artWorkPageNum: 1,
      //村民
      villagers: [],
      //村民页数
      villagerPageNum: 1,
      //家具
      furniture: [],
      //家具页数
      furniturePageNum: 1,
      //diy
      diy: [],
      //diy页数
      diyPageNum: 1,
      //服装
      dress: [],
      //服装页数
      dressPageNum: 1,
      //唱片
      albums: [],
      //唱片页数
      albumsPageNum: 1 };

  },
  computed: {
    //鱼类已收集数组
    fishChecked: function fishChecked() {
      var fish_checked_list = [];
      for (var i = 0; i < 80; i++) {
        // 如果有该标记,则压入true
        if (this.fish_checked.includes(i + 1)) {
          fish_checked_list.push(true);
        } else {
          fish_checked_list.push(false);
        }
      }
      return fish_checked_list;
    },
    //虫类已收集数组
    insectChecked: function insectChecked() {
      var insect_checked_list = [];
      for (var i = 0; i < 80; i++) {
        // 如果有该标记,则压入true
        if (this.insect_checked.includes(i + 1)) {
          insect_checked_list.push(true);
        } else {
          insect_checked_list.push(false);
        }
      }
      return insect_checked_list;
    },
    // 化石已收集数量数组
    fossilNumber: function fossilNumber() {
      return this.fossil_number;
    },
    // 艺术品已收集数量数组
    artworkNumber: function artworkNumber() {
      return this.artwork_number;
    },
    //村民已入住数组
    villagerChecked: function villagerChecked() {
      var villager_checked_list = [];
      for (var i = 0; i < 391; i++) {
        // 如果有该标记,则压入true
        if (this.villager_checked.includes(i + 1)) {
          villager_checked_list.push(true);
        } else {
          villager_checked_list.push(false);
        }
      }
      return villager_checked_list;
    },
    //家具已收集数组
    furnitureChecked: function furnitureChecked() {
      var furniture_checked_list = [];
      for (var i = 0; i < 3303; i++) {
        // 如果有该标记,则压入true
        if (this.furniture_checked.includes(i + 1)) {
          furniture_checked_list.push(true);
        } else {
          furniture_checked_list.push(false);
        }
      }
      return furniture_checked_list;
    },
    //diy已收集数组
    diyChecked: function diyChecked() {
      var diy_checked_list = [];
      for (var i = 0; i < 593; i++) {
        // 如果有该标记,则压入true
        if (this.diy_checked.includes(i + 1)) {
          diy_checked_list.push(true);
        } else {
          diy_checked_list.push(false);
        }
      }
      return diy_checked_list;
    },
    //服装已收集数组
    dressChecked: function dressChecked() {
      var dress_checked_list = [];
      for (var i = 0; i < 4646; i++) {
        // 如果有该标记,则压入true
        if (this.dress_checked.includes(i + 1)) {
          dress_checked_list.push(true);
        } else {
          dress_checked_list.push(false);
        }
      }
      return dress_checked_list;
    },
    //唱片已收集数组
    albumsChecked: function albumsChecked() {
      var albums_checked_list = [];
      for (var i = 0; i < 95; i++) {
        // 如果有该标记,则压入true
        if (this.albums_checked.includes(i + 1)) {
          albums_checked_list.push(true);
        } else {
          albums_checked_list.push(false);
        }
      }
      return albums_checked_list;
    } },


  methods: {
    //标签页tabs切换事件监听
    changeMap: function changeMap(index) {
      this.current = index;
      //根据current判断处于哪个标签页，且数组为空（从未请求过数据），并请求相应数据,
      if (this.current === 0 && this.fish.length === 0 && this.fishPageNum <= 8) {
        this.getFishInfo();
      } else if (this.current === 1 && this.insect.length === 0 && this.insectPageNum <= 8) {
        this.getInsectInfo();
      } else if (this.current === 2 && this.fossil.length === 0 && this.fossilPageNum <= 8) {
        this.getFossilInfo();
      } else if (this.current === 3 && this.artWork.length === 0 && this.artWorkPageNum <= 5) {
        this.getArtWorkInfo();
      } else if (this.current === 4 && this.villagers.length === 0 && this.villagerPageNum <= 40) {
        this.getVillagerInfo();
      } else if (this.current === 5 && this.furniture.length === 0 && this.furniturePageNum <= 331) {
        this.getFurnitureInfo();
      } else if (this.current === 6 && this.diy.length === 0 && this.diyPageNum <= 60) {
        this.getDiyInfo();
      } else if (this.current === 7 && this.dress.length === 0 && this.dressPageNum <= 465) {
        this.getDressInfo();
      } else if (this.current === 8 && this.albums.length === 0 && this.albumsPageNum <= 10) {
        this.getalbumsInfo();
      }
    },
    // 搜索事件
    clickToSearch: function clickToSearch() {
      // 对输入keyword进行url编码
      var encode_url = encodeURI(this.keyword);
      // console.log(encode_url);
      // 根据current判断当前处于哪个标签页
      if (this.current === 0) {//鱼类
        this.serchFishInfo(encode_url);
      } else if (this.current === 1) {//虫类
        this.serchInsectInfo(encode_url);
      } else if (this.current === 2) {//化石
        this.serchFossilInfo(encode_url);
      } else if (this.current === 3) {//艺术品
        this.serchArtWorkInfo(encode_url);
      } else if (this.current === 4) {//村民
        this.serchVillagerInfo(encode_url);
      } else if (this.current === 5) {//家具
        this.serchFurnitureInfo(encode_url);
      } else if (this.current === 6) {//diy
        this.serchDiyInfo(encode_url);
      } else if (this.current === 7) {//服装
        this.serchDressInfo(encode_url);
      } else if (this.current === 8) {//唱片
        this.serchAlbumsInfo(encode_url);
      }
    },

    //化石number变化监听
    // 化石 number plus事件监听
    fossilNumberAdd: function fossilNumberAdd(id) {
      //如果尚未收集过，即 number === 0，则进行create
      // 反之如果number 不为0 ,则说明原有number>=1,则进行update
      if (this.fossil_number[id - 1] === 0) {
        this.createUserFossilCollectedInfo(id);
      } else {
        //update操作,由于是add，并且每次+1
        // 同步前端数组
        var tmp = this.fossil_number[id - 1] + 1;
        // 使数组变化,这样计算属性artworkNumber才能监听
        // 传入id 和变化后的数量
        this.updateUserFossilCollectedInfo(id, tmp);
        this.fossil_number.splice(id - 1, 1, tmp);
      }
    },
    // 化石number minus 事件监听
    fossilNumberMinus: function fossilNumberMinus(id) {
      // 如果能减少,一定是 >= 1，如果减之前=1，则调用delete
      //如果减之前>1，则调用update
      if (this.fossil_number[id - 1] === 1) {
        // 调用delete
        var tmp = 0;
        // 本地数组同步
        this.fossil_number.splice(id - 1, 1, tmp);
        this.deleteUserFossilCollectedInfo(id);
      } else {
        // 调用update
        var _tmp = this.fossil_number[id - 1] - 1;
        //传入id 和 最新的数量
        this.updateUserFossilCollectedInfo(id, _tmp);
        //本地数组同步
        this.fossil_number.splice(id - 1, 1, _tmp);
      }
    },

    // 艺术品number变化监听
    //艺术品 number plus事件监听
    artworkNumberAdd: function artworkNumberAdd(id) {
      //如果尚未收集过，即 number === 0，则进行create
      // 反之如果number 不为0 ,则说明原有number>=1,则进行update
      if (this.artwork_number[id - 1] === 0) {
        this.createUserArtworkCollectedInfo(id);
      } else {
        //update操作,由于是add，并且每次+1
        // 同步前端数组
        var tmp = this.artwork_number[id - 1] + 1;
        // 使数组变化,这样计算属性artworkNumber才能监听
        // 传入id 和变化后的数量
        this.updateUserArtworkCollectedInfo(id, tmp);
        this.artwork_number.splice(id - 1, 1, tmp);
        // this.artwork_number[id-1] = this.artwork_number[id-1]+1;
      }
    },
    // 艺术品number minus事件监听
    artworkNumberMinus: function artworkNumberMinus(id) {
      // 如果能减少,一定是 >= 1，如果减之前=1，则调用delete
      //如果减之前>1，则调用update
      if (this.artwork_number[id - 1] === 1) {
        // 调用delete
        var tmp = 0;
        // 本地数组同步
        this.artwork_number.splice(id - 1, 1, tmp);
        this.deleteUserArtworkCollectedInfo(id);
      } else {
        // 调用update
        var _tmp2 = this.artwork_number[id - 1] - 1;
        //传入id 和 最新的数量
        this.updateUserArtworkCollectedInfo(id, _tmp2);
        //本地数组同步
        this.artwork_number.splice(id - 1, 1, _tmp2);
      }
    },
    // u-switch控件变化监听

    //鱼类checked变化监听
    fishCheckedChange: function fishCheckedChange(id) {
      //判断是否登录，若已经登录则执行以下操作
      var jwt = uni.getStorageSync("skey");
      if (jwt !== '') {
        // 传入改变的fishid,改变fish_checked数组
        // 如果已经存在,则从中删除
        if (this.fish_checked.includes(id)) {
          var index = this.fish_checked.indexOf(id);
          this.fish_checked.splice(index, 1);
          this.deleteUserFishCollectedInfo(id);
        } else {//如果不存在，则压入
          // this.fish_checked.push(id);
          this.createUserFishCollectedInfo(id);
        }
        console.log("fish_checked: " + this.fish_checked);
      } else {//未登录：弹出未登录提示
        uni.showModal({
          title: "功能受限",
          content: "需要授权登录！\n点击确认授权",
          success: function success(res) {
            if (res.confirm) {
              // console.log("confirm")
              uni.switchTab({
                url: '/pages/setting/setting' });

            } else if (res.cancel) {
              uni.showToast({
                title: "取消了授权",
                icon: "none" });

            }
          } });

      }

    },
    //虫类checked变化监听
    insectCheckedChange: function insectCheckedChange(id) {
      // 传入改变的insectid,改变insect_checked数组
      // 如果已经存在,则从中删除
      if (this.insect_checked.includes(id)) {
        var index = this.insect_checked.indexOf(id);
        this.insect_checked.splice(index, 1);
        this.deleteUserInsectCollectedInfo(id);
      } else {//如果不存在，则压入
        // this.insect_checked.push(id);
        this.createUserInsectCollectedInfo(id);
      }
      console.log("insect_checked: " + this.insect_checked);
    },
    //村民checked变化监听
    villagerCheckedChange: function villagerCheckedChange(id) {
      // 传入改变的villagerid,改变villager_checked数组
      // 如果已经存在,则从中删除
      if (this.villager_checked.includes(id)) {
        var index = this.villager_checked.indexOf(id);
        this.villager_checked.splice(index, 1);
        this.deleteUserVillagerCollectedInfo(id);

      } else {//如果不存在，且村民数量未到10人，则压入
        // this.villager_checked.push(id);
        if (this.villager_checked.length < 10) {
          this.createUserVillagerCollectedInfo(id);
        } else {
          return uni.showToast({
            title: "居民不能超过10人哦",
            icon: "none" });

        }
      }
      console.log("villager_checked: " + this.villager_checked);
    },
    //家具checked变化监听
    furnitureCheckedChange: function furnitureCheckedChange(id) {
      // 传入改变的furnitureid,改变furniture_checked数组
      // 如果已经存在,则从中删除
      if (this.furniture_checked.includes(id)) {
        var index = this.furniture_checked.indexOf(id);
        this.furniture_checked.splice(index, 1);
        this.deleteUserFurnitureCollectedInfo(id);
      } else {//如果不存在，则压入
        // this.furniture_checked.push(id);
        this.createUserFurnitureCollectedInfo(id);
      }
      console.log("furniture_checked: " + this.furniture_checked);
    },
    //diy checked变化监听
    diyCheckedChange: function diyCheckedChange(id) {
      // 传入改变的diy id,改变diy_checked数组
      // 如果已经存在,则从中删除
      if (this.diy_checked.includes(id)) {
        var index = this.diy_checked.indexOf(id);
        this.diy_checked.splice(index, 1);
        this.deleteUserDiyCollectedInfo(id);
      } else {//如果不存在，则压入
        // this.diy_checked.push(id);
        this.createUserDiyCollectedInfo(id);
      }
      console.log("diy_checked: " + this.diy_checked);
    },
    //dress checked变化监听
    dressCheckedChange: function dressCheckedChange(id) {
      // 传入改变的dress id,改变dress_checked数组
      // 如果已经存在,则从中删除
      if (this.dress_checked.includes(id)) {
        var index = this.dress_checked.indexOf(id);
        this.dress_checked.splice(index, 1);
        this.deleteUserDressCollectedInfo(id);
      } else {//如果不存在，则压入
        // this.dress_checked.push(id);
        this.createUserDressCollectedInfo(id);
      }
      console.log("dress_checked: " + this.dress_checked);
    },
    //albums checked变化监听
    albumsCheckedChange: function albumsCheckedChange(id) {
      // 传入改变的albums id,改变albums_checked数组
      // 如果已经存在,则从中删除
      if (this.albums_checked.includes(id)) {
        var index = this.albums_checked.indexOf(id);
        this.albums_checked.splice(index, 1);
        this.deleteUserAlbumsCollectedInfo(id);
      } else {//如果不存在，则压入
        // this.albums_checked.push(id);
        this.createUserAlbumsCollectedInfo(id);
      }
      console.log("albums_checked: " + this.albums_checked);
    },

    // 点击查看图鉴详情
    onClickMoreInfo: function onClickMoreInfo(dex_type, item) {
      this.dexType = dex_type;
      this.detailItem = item;
      // console.log(this.detailItem);
      // console.log(name)
      if (dex_type === "fish") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/mapDetail?dexType=fish&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "insect") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/mapDetail?dexType=insect&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "fossil") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/fossilDetail?dexType=fossil&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "artwork") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/artworkDetail?dexType=artwork&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "villager") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/villagerDetail?dexType=villager&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "furniture") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/furniture-dressDetail?dexType=furniture&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "dress") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/furniture-dressDetail?dexType=dress&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      } else if (dex_type === "diy") {
        uni.navigateTo({
          url: '/pages/map/mapDetail/diyDetail?dexType=diy&item=' + encodeURIComponent(JSON.stringify(this.detailItem)) });

      }
      // console.log("点击了鱼类");

    },
    // 搜索鱼类信息
    serchFishInfo: function serchFishInfo(url) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this.$myRequest({
                    method: 'GET',
                    url: '/fishes/?search=' + url }));case 2:result = _context.sent;

                _this.fish = result.data.results;case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    //获取鱼类信息
    getFishInfo: function getFishInfo() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _this2.$myRequest({
                    method: 'GET',
                    url: '/fishes/?pagenum=' + _this2.fishPageNum }));case 2:result = _context2.sent;

                _this2.fish = [].concat(_toConsumableArray(_this2.fish), _toConsumableArray(result.data.results));
                // this.fish = result.data.results;
              case 4:case "end":return _context2.stop();}}}, _callee2);}))();},
    // 获取鱼类剩余信息
    getRemainFishInfo: function getRemainFishInfo() {
      //总共有8页
      if (this.fishPageNum <= 7) {
        this.fishPageNum++;
        this.getFishInfo();
        // console.log("fish" + this.fishPageNum);
      }
    },
    // 搜索虫类信息
    serchInsectInfo: function serchInsectInfo(url) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var result;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  _this3.$myRequest({
                    method: 'GET',
                    url: '/insects/?search=' + url }));case 2:result = _context3.sent;

                _this3.insect = result.data.results;case 4:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    //获取虫类信息
    getInsectInfo: function getInsectInfo() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  _this4.$myRequest({
                    method: 'GET',
                    url: '/insects/?pagenum=' + _this4.insectPageNum }));case 2:result = _context4.sent;

                _this4.insect = [].concat(_toConsumableArray(_this4.insect), _toConsumableArray(result.data.results));
                // this.insect = result.data.results;
              case 4:case "end":return _context4.stop();}}}, _callee4);}))();},
    //获取虫类剩余信息
    getRemainInsectInfo: function getRemainInsectInfo() {
      //总共有8页
      if (this.insectPageNum <= 7) {
        this.insectPageNum++;
        this.getInsectInfo();
        // console.log("insect" + this.insectPageNum)
      }
    },
    // 搜索化石信息
    serchFossilInfo: function serchFossilInfo(url) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _this5.$myRequest({
                    method: 'GET',
                    url: '/fossils/?search=' + url }));case 2:result = _context5.sent;

                _this5.fossil = result.data.results;case 4:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    //获取化石信息
    getFossilInfo: function getFossilInfo() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var result;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                  _this6.$myRequest({
                    method: 'GET',
                    url: '/fossils/?pagenum=' + _this6.fossilPageNum }));case 2:result = _context6.sent;

                _this6.fossil = [].concat(_toConsumableArray(_this6.fossil), _toConsumableArray(result.data.results));
                // this.insect = result.data.results;
              case 4:case "end":return _context6.stop();}}}, _callee6);}))();},
    //获取化石剩余信息
    getRemainFossilInfo: function getRemainFossilInfo() {
      //总共有8页
      if (this.fossilPageNum <= 7) {
        this.fossilPageNum++;
        this.getFossilInfo();
        // console.log("fossil" + this.fossilPageNum);
      }
    },
    // 搜索艺术品信息
    serchArtWorkInfo: function serchArtWorkInfo(url) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var result;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                  _this7.$myRequest({
                    method: 'GET',
                    url: '/artworks/?search=' + url }));case 2:result = _context7.sent;

                _this7.artWork = result.data.results;case 4:case "end":return _context7.stop();}}}, _callee7);}))();
    },
    //获取艺术品信息
    getArtWorkInfo: function getArtWorkInfo() {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var result;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                  _this8.$myRequest({
                    method: 'GET',
                    url: '/artworks/?pagenum=' + _this8.artWorkPageNum }));case 2:result = _context8.sent;

                // console.log("artwork"+this.artWorkPageNum)
                _this8.artWork = [].concat(_toConsumableArray(_this8.artWork), _toConsumableArray(result.data.results));
                // this.insect = result.data.results;
              case 4:case "end":return _context8.stop();}}}, _callee8);}))();},
    //获取艺术品剩余信息
    getRemainArtWorkInfo: function getRemainArtWorkInfo() {
      //总共有5页
      if (this.artWorkPageNum <= 4) {
        this.artWorkPageNum++;
        this.getArtWorkInfo();
        // console.log("artwork" + this.artWorkPageNum);
      }
    },
    // 搜索村民信息
    serchVillagerInfo: function serchVillagerInfo(url) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var result;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return (
                  _this9.$myRequest({
                    method: 'GET',
                    url: '/dwellers/?search=' + url }));case 2:result = _context9.sent;

                _this9.villagers = result.data.results;case 4:case "end":return _context9.stop();}}}, _callee9);}))();
    },
    //获取村民信息
    getVillagerInfo: function getVillagerInfo() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var result;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return (
                  _this10.$myRequest({
                    method: 'GET',
                    url: '/dwellers/?pagenum=' + _this10.villagerPageNum }));case 2:result = _context10.sent;

                _this10.villagers = [].concat(_toConsumableArray(_this10.villagers), _toConsumableArray(result.data.results));
                // this.villagers = result.data.results;
                // console.log("村民"+this.villagers[1].id)
              case 4:case "end":return _context10.stop();}}}, _callee10);}))();},
    //获取村民剩余信息
    getRemainVillagerInfo: function getRemainVillagerInfo() {
      //总共有40页
      if (this.villagerPageNum <= 39) {
        this.villagerPageNum++;
        this.getVillagerInfo();
        // console.log("villager" + this.villagerPageNum);
      }
    },
    // 搜索家具信息
    serchFurnitureInfo: function serchFurnitureInfo(url) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var result;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return (
                  _this11.$myRequest({
                    method: 'GET',
                    url: '/furnitures/?search=' + url }));case 2:result = _context11.sent;

                _this11.furniture = result.data.results;case 4:case "end":return _context11.stop();}}}, _callee11);}))();
    },
    //获取家具信息
    getFurnitureInfo: function getFurnitureInfo() {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var result;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return (
                  _this12.$myRequest({
                    method: 'GET',
                    url: '/furnitures/?pagenum=' + _this12.furniturePageNum }));case 2:result = _context12.sent;

                _this12.furniture = [].concat(_toConsumableArray(_this12.furniture), _toConsumableArray(result.data.results));case 4:case "end":return _context12.stop();}}}, _callee12);}))();
    },
    //获取家具剩余信息
    getRemainFurnitureInfo: function getRemainFurnitureInfo() {
      //总共有331页
      if (this.furniturePageNum <= 330) {
        this.furniturePageNum++;
        this.getFurnitureInfo();
        // console.log("furniture" + this.furniturePageNum);
      }
    },
    // 搜索diy信息
    serchDiyInfo: function serchDiyInfo(url) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var result;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:_context13.next = 2;return (
                  _this13.$myRequest({
                    method: 'GET',
                    url: '/diys/?search=' + url }));case 2:result = _context13.sent;

                _this13.diy = result.data.results;case 4:case "end":return _context13.stop();}}}, _callee13);}))();
    },
    //获取diy信息
    getDiyInfo: function getDiyInfo() {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var result;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return (
                  _this14.$myRequest({
                    method: 'GET',
                    url: '/diys/?pagenum=' + _this14.diyPageNum }));case 2:result = _context14.sent;

                _this14.diy = [].concat(_toConsumableArray(_this14.diy), _toConsumableArray(result.data.results));case 4:case "end":return _context14.stop();}}}, _callee14);}))();
    },
    //获取diy剩余信息
    getRemainDiyInfo: function getRemainDiyInfo() {
      //总共有60页
      if (this.diyPageNum <= 59) {
        this.diyPageNum++;
        this.getDiyInfo();
        // console.log("diy" + this.diyPageNum);
      }
    },
    // 搜索服装信息
    serchDressInfo: function serchDressInfo(url) {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var result;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:_context15.next = 2;return (
                  _this15.$myRequest({
                    method: 'GET',
                    url: '/dresses/?search=' + url }));case 2:result = _context15.sent;

                _this15.dress = result.data.results;case 4:case "end":return _context15.stop();}}}, _callee15);}))();
    },
    //获取服装信息
    getDressInfo: function getDressInfo() {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var result;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:_context16.next = 2;return (
                  _this16.$myRequest({
                    method: 'GET',
                    url: '/dresses/?pagenum=' + _this16.dressPageNum }));case 2:result = _context16.sent;

                _this16.dress = [].concat(_toConsumableArray(_this16.dress), _toConsumableArray(result.data.results));case 4:case "end":return _context16.stop();}}}, _callee16);}))();
    },
    //获取服装剩余信息
    getRemainDressInfo: function getRemainDressInfo() {
      //总共有465页
      if (this.albumsPageNum <= 464) {
        this.dressPageNum++;
        this.getDressInfo();
        // console.log("dress" + this.dressPageNum);
      }
    },
    // 搜索唱片信息
    serchAlbumsInfo: function serchAlbumsInfo(url) {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17() {var result;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:_context17.next = 2;return (
                  _this17.$myRequest({
                    method: 'GET',
                    url: '/albums/?search=' + url }));case 2:result = _context17.sent;

                _this17.albums = result.data.results;case 4:case "end":return _context17.stop();}}}, _callee17);}))();
    },
    //获取唱片信息
    getalbumsInfo: function getalbumsInfo() {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {var result;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:_context18.next = 2;return (
                  _this18.$myRequest({
                    method: 'GET',
                    url: '/albums/?pagenum=' + _this18.albumsPageNum }));case 2:result = _context18.sent;

                _this18.albums = [].concat(_toConsumableArray(_this18.albums), _toConsumableArray(result.data.results));case 4:case "end":return _context18.stop();}}}, _callee18);}))();
    },
    //获取唱片剩余信息
    getRemainalbumsInfo: function getRemainalbumsInfo() {
      //总共有10页
      if (this.albumsPageNum <= 9) {
        this.albumsPageNum++;
        this.getalbumsInfo();
        // console.log("albums" + this.albumsPageNum);
      }
    },

    //获取user的图鉴收集信息

    //u-numberbox:

    // 获取user fossil 收集信息
    getUserFossilCollectedInfo: function getUserFossilCollectedInfo() {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19() {var jwt, head, result, tmp_fossil, _iterator, _step, _step$value, fossil, amount, index;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context19.next = 4;return (
                  _this19.$myRequest({
                    method: 'GET',
                    url: '/user_fossil/',
                    header: head }));case 4:result = _context19.sent;

                // console.log(result)
                //创建一个长度73 值全为0的数组
                //用artworkid做索引，将对于位置替换成amount数值
                tmp_fossil = new Array(73).fill(0);_iterator = _createForOfIteratorHelper(
                result.data);try {for (_iterator.s(); !(_step = _iterator.n()).done;) {_step$value = _step.value, fossil = _step$value.fossil, amount = _step$value.amount;
                    // console.log("artworkid:"+artwork+" amount:"+amount);
                    // 获取索引值: id-1 在索引处0替换成对应的amount
                    index = fossil - 1;
                    tmp_fossil.splice(index, 1, amount);
                  }
                  // 前端数组与后端同步
                } catch (err) {_iterator.e(err);} finally {_iterator.f();}_this19.fossil_number = tmp_fossil;
                console.log("tmp_fossil" + tmp_fossil);case 10:case "end":return _context19.stop();}}}, _callee19);}))();
    },
    // 第一次收集 向后端create user fossil 收集信息
    createUserFossilCollectedInfo: function createUserFossilCollectedInfo(id) {var _this20 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {var jwt, head, result;return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context20.next = 4;return (
                  _this20.$myRequest({
                    method: 'POST',
                    url: '/user_fossil/',
                    header: head,
                    data: { fossil: id } }));case 4:result = _context20.sent;

                // console.log(result)
                //将对应处的值替换成1（0->1)
                _this20.fossil_number.splice(id - 1, 1, 1);case 6:case "end":return _context20.stop();}}}, _callee20);}))();
    },
    // 向后端 update user fossil 收集信息
    updateUserFossilCollectedInfo: function updateUserFossilCollectedInfo(id, num) {var _this21 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21() {var jwt, head, result;return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context21.next = 4;return (
                  _this21.$myRequest({
                    method: 'PUT',
                    url: '/user_fossil/' + id + '/',
                    header: head,
                    data: { amount: num, fossil: id } }));case 4:result = _context21.sent;case 5:case "end":return _context21.stop();}}}, _callee21);}))();

    },
    // 向后端delete user fossil 收集信息
    deleteUserFossilCollectedInfo: function deleteUserFossilCollectedInfo(id) {var _this22 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22() {var jwt, head, result;return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context22.next = 4;return (
                  _this22.$myRequest({
                    method: 'DELETE',
                    url: '/user_fossil/' + id + '/',
                    header: head }));case 4:result = _context22.sent;case 5:case "end":return _context22.stop();}}}, _callee22);}))();

    },

    // 获取 user artwork 收集信息
    getUserArtworkCollectedInfo: function getUserArtworkCollectedInfo() {var _this23 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var jwt, head, result, tmp_artwork, _iterator2, _step2, _step2$value, artwork, amount, index;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context23.next = 4;return (
                  _this23.$myRequest({
                    method: 'GET',
                    url: '/user_artwork/',
                    header: head }));case 4:result = _context23.sent;

                // console.log("artwork_result")
                // console.log(result)
                //创建一个长度43 值全为0的数组
                //用artworkid做索引，将对于位置替换成amount数值
                tmp_artwork = new Array(43).fill(0);
                // console.log("tmp_artwork"+tmp_artwork);
                _iterator2 = _createForOfIteratorHelper(result.data);try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {_step2$value = _step2.value, artwork = _step2$value.artwork, amount = _step2$value.amount;
                    // console.log("artworkid:"+artwork+" amount:"+amount);
                    index = artwork - 1;
                    tmp_artwork.splice(index, 1, amount);
                  }
                  // 前端数组与后端同步
                } catch (err) {_iterator2.e(err);} finally {_iterator2.f();}_this23.artwork_number = tmp_artwork;
                console.log("tmp_artwork" + tmp_artwork);
                // console.log("artwork_number"+this.artwork_number)
              case 10:case "end":return _context23.stop();}}}, _callee23);}))();},
    // 第一次收集 向后端create user artwork 收集信息
    createUserArtworkCollectedInfo: function createUserArtworkCollectedInfo(id) {var _this24 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24() {var jwt, head, result;return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context24.next = 4;return (
                  _this24.$myRequest({
                    method: 'POST',
                    url: '/user_artwork/',
                    header: head,
                    data: { artwork: id } }));case 4:result = _context24.sent;

                // console.log(result)
                //将对应处的值替换成1（0->1)
                _this24.artwork_number.splice(id - 1, 1, 1);case 6:case "end":return _context24.stop();}}}, _callee24);}))();
    },
    // 向后端 update user artwork 收集信息
    updateUserArtworkCollectedInfo: function updateUserArtworkCollectedInfo(id, num) {var _this25 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25() {var jwt, head, result;return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context25.next = 4;return (
                  _this25.$myRequest({
                    method: 'PUT',
                    url: '/user_artwork/' + id + '/',
                    header: head,
                    data: { amount: num, artwork: id } }));case 4:result = _context25.sent;case 5:case "end":return _context25.stop();}}}, _callee25);}))();

    },
    // 向后端delete user artwork 收集信息
    deleteUserArtworkCollectedInfo: function deleteUserArtworkCollectedInfo(id) {var _this26 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {var jwt, head, result;return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context26.next = 4;return (
                  _this26.$myRequest({
                    method: 'DELETE',
                    url: '/user_artwork/' + id + '/',
                    header: head }));case 4:result = _context26.sent;case 5:case "end":return _context26.stop();}}}, _callee26);}))();

    },

    //u-switch：
    //获取user fish 图鉴收集信息
    getUserFishCollectedInfo: function getUserFishCollectedInfo() {var _this27 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27() {var jwt, head, result, tmp_fish, _iterator3, _step3, _step3$value, id, fish;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context27.next = 4;return (
                  _this27.$myRequest({
                    method: 'GET',
                    url: '/user_fish/',
                    header: head }));case 4:result = _context27.sent;

                tmp_fish = [];_iterator3 = _createForOfIteratorHelper(
                result.data);try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {_step3$value = _step3.value, id = _step3$value.id, fish = _step3$value.fish;
                    tmp_fish.push(fish);
                  }
                  //后端数据赋予前端，保证数据一致性
                } catch (err) {_iterator3.e(err);} finally {_iterator3.f();}_this27.fish_checked = tmp_fish;case 9:case "end":return _context27.stop();}}}, _callee27);}))();
    },
    //向后端create user fish 收集信息
    createUserFishCollectedInfo: function createUserFishCollectedInfo(id) {var _this28 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28() {var jwt, head, result;return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context28.next = 4;return (
                  _this28.$myRequest({
                    method: 'POST',
                    url: '/user_fish/',
                    header: head,
                    data: { fish: id } }));case 4:result = _context28.sent;

                // 本地数组同步
                _this28.fish_checked.push(id);
                // console.log(result);
              case 6:case "end":return _context28.stop();}}}, _callee28);}))();},
    //向后端delete user fish 收集信息
    deleteUserFishCollectedInfo: function deleteUserFishCollectedInfo(id) {var _this29 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29() {var jwt, head, result;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context29.next = 4;return (
                  _this29.$myRequest({
                    method: 'DELETE',
                    url: '/user_fish/' + id + '/',
                    header: head }));case 4:result = _context29.sent;case 5:case "end":return _context29.stop();}}}, _callee29);}))();

    },
    //获取 get user insect 图鉴收集信息
    getUserInsectCollectedInfo: function getUserInsectCollectedInfo() {var _this30 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30() {var jwt, head, result, tmp_insect, _iterator4, _step4, _step4$value, id, insect;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context30.next = 4;return (
                  _this30.$myRequest({
                    method: 'GET',
                    url: '/user_insect/',
                    header: head }));case 4:result = _context30.sent;

                tmp_insect = [];
                // let fish_collected = result.data.results;
                _iterator4 = _createForOfIteratorHelper(result.data);try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {_step4$value = _step4.value, id = _step4$value.id, insect = _step4$value.insect;
                    tmp_insect.push(insect);
                    // console.log("id:"+id+" insect_id: "+insect);
                  }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
                console.log("tmp_insect" + tmp_insect);
                //后端数据赋予前端，保证数据一致性
                _this30.insect_checked = tmp_insect;case 10:case "end":return _context30.stop();}}}, _callee30);}))();
    },
    //向后端create user insect 收集信息
    createUserInsectCollectedInfo: function createUserInsectCollectedInfo(id) {var _this31 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31() {var jwt, head, result;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context31.next = 4;return (
                  _this31.$myRequest({
                    method: 'POST',
                    url: '/user_insect/',
                    header: head,
                    data: { insect: id } }));case 4:result = _context31.sent;

                //本地数组同步
                _this31.insect_checked.push(id);
                console.log(result);case 7:case "end":return _context31.stop();}}}, _callee31);}))();
    },
    //向后端delete  user insect  收集信息
    deleteUserInsectCollectedInfo: function deleteUserInsectCollectedInfo(id) {var _this32 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32() {var jwt, head, result;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context32.next = 4;return (
                  _this32.$myRequest({
                    method: 'DELETE',
                    url: '/user_insect/' + id + '/',
                    header: head }));case 4:result = _context32.sent;case 5:case "end":return _context32.stop();}}}, _callee32);}))();

    },
    //获取 get user villager 图鉴收集信息
    getUserVillagerCollectedInfo: function getUserVillagerCollectedInfo() {var _this33 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee33() {var jwt, head, result, tmp_villager, _iterator5, _step5, _step5$value, id, dweller;return _regenerator.default.wrap(function _callee33$(_context33) {while (1) {switch (_context33.prev = _context33.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context33.next = 4;return (
                  _this33.$myRequest({
                    method: 'GET',
                    url: '/user_dweller/',
                    header: head }));case 4:result = _context33.sent;

                tmp_villager = [];_iterator5 = _createForOfIteratorHelper(
                result.data);try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {_step5$value = _step5.value, id = _step5$value.id, dweller = _step5$value.dweller;
                    tmp_villager.push(dweller);
                  }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
                console.log("tmp_villager" + tmp_villager);
                //后端数据赋予前端，保证数据一致性
                _this33.villager_checked = tmp_villager;case 10:case "end":return _context33.stop();}}}, _callee33);}))();
    },
    //向后端create user villager 收集信息
    createUserVillagerCollectedInfo: function createUserVillagerCollectedInfo(id) {var _this34 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee34() {var jwt, head, result;return _regenerator.default.wrap(function _callee34$(_context34) {while (1) {switch (_context34.prev = _context34.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context34.next = 4;return (
                  _this34.$myRequest({
                    method: 'POST',
                    url: '/user_dweller/',
                    header: head,
                    data: { dweller: id } }));case 4:result = _context34.sent;

                //本地数组同步
                _this34.villager_checked.push(id);
                // console.log(result);
              case 6:case "end":return _context34.stop();}}}, _callee34);}))();},
    //向后端delete  user villager  收集信息
    deleteUserVillagerCollectedInfo: function deleteUserVillagerCollectedInfo(id) {var _this35 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee35() {var jwt, head, result;return _regenerator.default.wrap(function _callee35$(_context35) {while (1) {switch (_context35.prev = _context35.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context35.next = 4;return (
                  _this35.$myRequest({
                    method: 'DELETE',
                    url: '/user_dweller/' + id + '/',
                    header: head }));case 4:result = _context35.sent;case 5:case "end":return _context35.stop();}}}, _callee35);}))();

    },
    //获取 get user furniture 图鉴收集信息
    getUserFurnitureCollectedInfo: function getUserFurnitureCollectedInfo() {var _this36 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee36() {var jwt, head, result, tmp_furniture, _iterator6, _step6, _step6$value, id, furniture;return _regenerator.default.wrap(function _callee36$(_context36) {while (1) {switch (_context36.prev = _context36.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context36.next = 4;return (
                  _this36.$myRequest({
                    method: 'GET',
                    url: '/user_furniture/',
                    header: head }));case 4:result = _context36.sent;

                tmp_furniture = [];
                console.log(result);
                // let fish_collected = result.data.results;
                _iterator6 = _createForOfIteratorHelper(result.data);try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {_step6$value = _step6.value, id = _step6$value.id, furniture = _step6$value.furniture;
                    tmp_furniture.push(furniture);
                    // console.log("id:"+id+" insect_id: "+furniture);
                  }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
                console.log("tmp_furniture" + tmp_furniture);
                //后端数据赋予前端，保证数据一致性
                _this36.furniture_checked = tmp_furniture;case 11:case "end":return _context36.stop();}}}, _callee36);}))();
    },
    //向后端create user furniture 收集信息
    createUserFurnitureCollectedInfo: function createUserFurnitureCollectedInfo(id) {var _this37 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee37() {var jwt, head, result;return _regenerator.default.wrap(function _callee37$(_context37) {while (1) {switch (_context37.prev = _context37.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context37.next = 4;return (
                  _this37.$myRequest({
                    method: 'POST',
                    url: '/user_furniture/',
                    header: head,
                    data: { furniture: id } }));case 4:result = _context37.sent;

                //本地数组同步
                _this37.furniture_checked.push(id);
                console.log(result);case 7:case "end":return _context37.stop();}}}, _callee37);}))();
    },
    //向后端delete user furniture收集信息
    deleteUserFurnitureCollectedInfo: function deleteUserFurnitureCollectedInfo(id) {var _this38 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee38() {var jwt, head, result;return _regenerator.default.wrap(function _callee38$(_context38) {while (1) {switch (_context38.prev = _context38.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context38.next = 4;return (
                  _this38.$myRequest({
                    method: 'DELETE',
                    url: '/user_furniture/' + id + '/',
                    header: head }));case 4:result = _context38.sent;case 5:case "end":return _context38.stop();}}}, _callee38);}))();

    },
    //获取 get user diy 图鉴收集信息
    getUserDiyCollectedInfo: function getUserDiyCollectedInfo() {var _this39 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee39() {var jwt, head, result, tmp_diy, _iterator7, _step7, _step7$value, id, diy;return _regenerator.default.wrap(function _callee39$(_context39) {while (1) {switch (_context39.prev = _context39.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context39.next = 4;return (
                  _this39.$myRequest({
                    method: 'GET',
                    url: '/user_diy/',
                    header: head }));case 4:result = _context39.sent;

                tmp_diy = [];
                console.log(result);
                // let fish_collected = result.data.results;
                _iterator7 = _createForOfIteratorHelper(result.data);try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {_step7$value = _step7.value, id = _step7$value.id, diy = _step7$value.diy;
                    tmp_diy.push(diy);
                    // console.log("id:"+id+" insect_id: "+furniture);
                  }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}
                console.log("tmp_diy" + tmp_diy);
                //后端数据赋予前端，保证数据一致性
                _this39.diy_checked = tmp_diy;case 11:case "end":return _context39.stop();}}}, _callee39);}))();
    },
    //向后端create user diy 收集信息
    createUserDiyCollectedInfo: function createUserDiyCollectedInfo(id) {var _this40 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee40() {var jwt, head, result;return _regenerator.default.wrap(function _callee40$(_context40) {while (1) {switch (_context40.prev = _context40.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context40.next = 4;return (
                  _this40.$myRequest({
                    method: 'POST',
                    url: '/user_diy/',
                    header: head,
                    data: { diy: id } }));case 4:result = _context40.sent;

                //本地数组同步
                _this40.diy_checked.push(id);
                console.log(result);case 7:case "end":return _context40.stop();}}}, _callee40);}))();
    },
    //向后端delete user diy收集信息
    deleteUserDiyCollectedInfo: function deleteUserDiyCollectedInfo(id) {var _this41 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee41() {var jwt, head, result;return _regenerator.default.wrap(function _callee41$(_context41) {while (1) {switch (_context41.prev = _context41.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context41.next = 4;return (
                  _this41.$myRequest({
                    method: 'DELETE',
                    url: '/user_diy/' + id + '/',
                    header: head }));case 4:result = _context41.sent;case 5:case "end":return _context41.stop();}}}, _callee41);}))();

    },
    //获取 get user dress 图鉴收集信息
    getUserDressCollectedInfo: function getUserDressCollectedInfo() {var _this42 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee42() {var jwt, head, result, tmp_dress, _iterator8, _step8, _step8$value, id, dress;return _regenerator.default.wrap(function _callee42$(_context42) {while (1) {switch (_context42.prev = _context42.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context42.next = 4;return (
                  _this42.$myRequest({
                    method: 'GET',
                    url: '/user_dress/',
                    header: head }));case 4:result = _context42.sent;

                tmp_dress = [];
                console.log(result);
                // let fish_collected = result.data.results;
                _iterator8 = _createForOfIteratorHelper(result.data);try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {_step8$value = _step8.value, id = _step8$value.id, dress = _step8$value.dress;
                    tmp_dress.push(dress);
                    // console.log("id:"+id+" insect_id: "+furniture);
                  }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}
                console.log("tmp_dress" + tmp_dress);
                //后端数据赋予前端，保证数据一致性
                _this42.dress_checked = tmp_dress;case 11:case "end":return _context42.stop();}}}, _callee42);}))();
    },
    //向后端create user dress 收集信息
    createUserDressCollectedInfo: function createUserDressCollectedInfo(id) {var _this43 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee43() {var jwt, head, result;return _regenerator.default.wrap(function _callee43$(_context43) {while (1) {switch (_context43.prev = _context43.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context43.next = 4;return (
                  _this43.$myRequest({
                    method: 'POST',
                    url: '/user_dress/',
                    header: head,
                    data: { dress: id } }));case 4:result = _context43.sent;

                //本地数组同步
                _this43.dress_checked.push(id);
                console.log(result);case 7:case "end":return _context43.stop();}}}, _callee43);}))();
    },
    //向后端delete user dress收集信息
    deleteUserDressCollectedInfo: function deleteUserDressCollectedInfo(id) {var _this44 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee44() {var jwt, head, result;return _regenerator.default.wrap(function _callee44$(_context44) {while (1) {switch (_context44.prev = _context44.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context44.next = 4;return (
                  _this44.$myRequest({
                    method: 'DELETE',
                    url: '/user_dress/' + id + '/',
                    header: head }));case 4:result = _context44.sent;case 5:case "end":return _context44.stop();}}}, _callee44);}))();

    },
    //获取 get user albums 图鉴收集信息
    getUserAlbumsCollectedInfo: function getUserAlbumsCollectedInfo() {var _this45 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee45() {var jwt, head, result, tmp_album, _iterator9, _step9, _step9$value, id, album;return _regenerator.default.wrap(function _callee45$(_context45) {while (1) {switch (_context45.prev = _context45.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context45.next = 4;return (
                  _this45.$myRequest({
                    method: 'GET',
                    url: '/user_album/',
                    header: head }));case 4:result = _context45.sent;

                tmp_album = [];
                console.log(result);
                // let fish_collected = result.data.results;
                _iterator9 = _createForOfIteratorHelper(result.data);try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {_step9$value = _step9.value, id = _step9$value.id, album = _step9$value.album;
                    tmp_album.push(album);
                    // console.log("id:"+id+" insect_id: "+furniture);
                  }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
                console.log("tmp_album" + tmp_album);
                //后端数据赋予前端，保证数据一致性
                _this45.albums_checked = tmp_album;case 11:case "end":return _context45.stop();}}}, _callee45);}))();
    },
    //向后端create user albums 收集信息
    createUserAlbumsCollectedInfo: function createUserAlbumsCollectedInfo(id) {var _this46 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee46() {var jwt, head, result;return _regenerator.default.wrap(function _callee46$(_context46) {while (1) {switch (_context46.prev = _context46.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context46.next = 4;return (
                  _this46.$myRequest({
                    method: 'POST',
                    url: '/user_album/',
                    header: head,
                    data: { album: id } }));case 4:result = _context46.sent;

                //本地数组同步
                _this46.albums_checked.push(id);
                console.log(result);case 7:case "end":return _context46.stop();}}}, _callee46);}))();
    },
    //向后端delete user albums收集信息
    deleteUserAlbumsCollectedInfo: function deleteUserAlbumsCollectedInfo(id) {var _this47 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee47() {var jwt, head, result;return _regenerator.default.wrap(function _callee47$(_context47) {while (1) {switch (_context47.prev = _context47.next) {case 0:
                jwt = uni.getStorageSync("skey");
                head = { 'Authorization': "Bearer " + jwt };_context47.next = 4;return (
                  _this47.$myRequest({
                    method: 'DELETE',
                    url: '/user_album/' + id + '/',
                    header: head }));case 4:result = _context47.sent;case 5:case "end":return _context47.stop();}}}, _callee47);}))();

    } },



  onLoad: function onLoad() {
    this.getFishInfo();
  },
  onShow: function onShow() {
    //判断是否登录，若已登录，则获取用户收集数据
    var jwt = uni.getStorageSync("skey");
    if (jwt !== '') {
      this.getUserArtworkCollectedInfo();
      this.getUserFossilCollectedInfo();
      this.getUserFishCollectedInfo();
      this.getUserInsectCollectedInfo();
      this.getUserVillagerCollectedInfo();
      this.getUserFurnitureCollectedInfo();
      this.getUserDiyCollectedInfo();
      this.getUserDressCollectedInfo();
      this.getUserAlbumsCollectedInfo();
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 55:
/*!************************************************************************************************************************!*\
  !*** D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=style&index=0&id=21586aa0&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../software/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=style&index=0&id=21586aa0&scoped=true&lang=scss& */ 56);
/* harmony import */ var _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_software_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_21586aa0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/wechatapp/develop/animal_crossing/pages/map/map.vue?vue&type=style&index=0&id=21586aa0&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[49,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/map/map.js.map