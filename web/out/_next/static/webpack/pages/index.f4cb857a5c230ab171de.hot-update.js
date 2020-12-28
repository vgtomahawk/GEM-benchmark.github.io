webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/components/navbar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// Module that contains the navigation bar.\n\n\n\n\n\n\n\nvar Navbar = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar, _React$Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    _this = _super.call(this, props);\n    _this.handleMobileClick = _this.handleMobileClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"handleMobileClick\",\n    value: function handleMobileClick() {\n      var currentState = this.state.active;\n      this.setState({\n        active: !currentState\n      });\n    }\n  }, {\n    key: \"render\",\n    // export function handleNavbar() {\n    //   //    $(\".nav\").handleMobileClick(\"mobilenav\");\n    // }\n    value: function render() {\n      return __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navwrapper,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.gradbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }\n      }), __jsx(\"nav\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }, __jsx(\"span\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingLg + \" \" + _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.accent,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 15\n        }\n      }, \"GEM Benchmark\"))), __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.menutoggle,\n        id: \"mobile-menu\",\n        onClick: this.handleMobileClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }\n      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__[\"FontAwesomeIcon\"], {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.bar,\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faBars\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      })), __jsx(\"ul\", {\n        className: this.state.active ? _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobilenav : _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      }, __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.pushright,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/tasks/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      }, \"Tasks\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/get_started\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }, \"How To\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 44\n        }\n      }, \"Results\")), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 44\n        }\n      }, \"Paper\")), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/team\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      }, \"Team\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 44\n        }\n      }, \"Workshop\")))));\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar); // export function handleNavbar() {\n//   //    $(\".nav\").handleMobileClick(\"mobilenav\");\n//   //    $(#mobile-menu).handleMobileClick(\"is-active\");\n//   }\n//   export default function Nav() {\n//     return (\n//       <div className={styles.navwrapper}>\n//         <div className={styles.gradbar}></div>\n//         <nav className={styles.navbar}>\n//           <span className={utilStyles.headingLg + \" \" + utilStyles.accent}>\n//             <Link href=\"/\">\n//               <a>GEM Benchmark</a>\n//             </Link>\n//           </span>\n//           <div className={styles.menutoggle}\n//             id=\"mobile-menu\"\n//             onClick={handleNavbar}>\n//             <FontAwesomeIcon className={styles.bar} icon={faBars} />\n//           </div>\n//           <ul className={styles.nav}>\n//             <li className={styles.navitem + \" \" + styles.pushright}>\n//               <Link href=\"/tasks/\">\n//                 <a >Tasks</a>\n//               </Link></li>\n//             <li className={styles.navitem}>\n//               <Link href=\"/get_started\">\n//                 <a >How To</a>\n//               </Link></li>\n//             <li className={styles.navitem}><a href=\"#\">Results</a></li>\n//             <li className={styles.navitem}><a href=\"#\">Paper</a></li>\n//             <li className={styles.navitem}>\n//               <Link href=\"/team\">\n//                 <a >Team</a>\n//               </Link></li>\n//             <li className={styles.navitem}><a href=\"#\">Workshop</a></li>\n//           </ul>\n//         </nav>\n//       </div>\n//     )\n//   }\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsImhhbmRsZU1vYmlsZUNsaWNrIiwiYmluZCIsInN0YXRlIiwiYWN0aXZlIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJuYXZ3cmFwcGVyIiwiZ3JhZGJhciIsIm5hdmJhciIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJhY2NlbnQiLCJtZW51dG9nZ2xlIiwiYmFyIiwiZmFCYXJzIiwibmF2IiwibW9iaWxlbmF2IiwibmF2aXRlbSIsInB1c2hyaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2Qix5R0FBekI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUhpQjtBQU1sQjs7Ozt3Q0FDbUI7QUFDbEIsVUFBTUMsWUFBWSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0MsTUFBaEM7QUFDQSxXQUFLRSxRQUFMLENBQWM7QUFBRUYsY0FBTSxFQUFFLENBQUNDO0FBQVgsT0FBZDtBQUNEOzs7QUFFRDtBQUNBO0FBRUE7NkJBRVM7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBRUUseURBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRUQseURBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBSyxpQkFBUyxF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REY7QUFtQ0Q7Ozs7RUF0RGtCRSw0Q0FBSyxDQUFDQyxTOztBQXVEMUI7QUFFY3ZCLHFFQUFmLEUsQ0FLRTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlIHRoYXQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyLlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVNb2JpbGVDbGljayA9IHRoaXMuaGFuZGxlTW9iaWxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGhhbmRsZU1vYmlsZUNsaWNrKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUuYWN0aXZlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICFjdXJyZW50U3RhdGUgfSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5hdmJhcigpIHtcbiAgLy8gICAvLyAgICAkKFwiLm5hdlwiKS5oYW5kbGVNb2JpbGVDbGljayhcIm1vYmlsZW5hdlwiKTtcblxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYWRiYXJ9PjwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZyArIFwiIFwiICsgdXRpbFN0eWxlcy5hY2NlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+R0VNIEJlbmNobWFyazwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV0b2dnbGV9XG4gICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9iaWxlQ2xpY2t9PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9IGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZT8gc3R5bGVzLm5hdiArIFwiIFwiICsgc3R5bGVzLm1vYmlsZW5hdiA6IHN0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW0gKyBcIiBcIiArIHN0eWxlcy5wdXNocmlnaHR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rhc2tzL1wiPlxuICAgICAgICAgICAgICAgIDxhID5UYXNrczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2V0X3N0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICA8YSA+SG93IFRvPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPlJlc3VsdHM8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPlBhcGVyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhbVwiPlxuICAgICAgICAgICAgICAgIDxhID5UZWFtPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPldvcmtzaG9wPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuICAvLyBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTmF2YmFyKCkge1xuICAvLyAgIC8vICAgICQoXCIubmF2XCIpLmhhbmRsZU1vYmlsZUNsaWNrKFwibW9iaWxlbmF2XCIpO1xuICAvLyAgIC8vICAgICQoI21vYmlsZS1tZW51KS5oYW5kbGVNb2JpbGVDbGljayhcImlzLWFjdGl2ZVwiKTtcblxuICAvLyAgIH1cblxuXG5cbiAgLy8gICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdndyYXBwZXJ9PlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JhZGJhcn0+PC9kaXY+XG4gIC8vICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZyArIFwiIFwiICsgdXRpbFN0eWxlcy5hY2NlbnR9PlxuICAvLyAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAvLyAgICAgICAgICAgICAgIDxhPkdFTSBCZW5jaG1hcms8L2E+XG4gIC8vICAgICAgICAgICAgIDwvTGluaz5cbiAgLy8gICAgICAgICAgIDwvc3Bhbj5cblxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51dG9nZ2xlfVxuICAvLyAgICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51XCJcbiAgLy8gICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmF2YmFyfT5cbiAgLy8gICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9IGljb249e2ZhQmFyc30gLz5cbiAgLy8gICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gIC8vICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtICsgXCIgXCIgKyBzdHlsZXMucHVzaHJpZ2h0fT5cbiAgLy8gICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rhc2tzL1wiPlxuICAvLyAgICAgICAgICAgICAgICAgPGEgPlRhc2tzPC9hPlxuICAvLyAgICAgICAgICAgICAgIDwvTGluaz48L2xpPlxuICAvLyAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gIC8vICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nZXRfc3RhcnRlZFwiPlxuICAvLyAgICAgICAgICAgICAgICAgPGEgPkhvdyBUbzwvYT5cbiAgLy8gICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgLy8gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PjxhIGhyZWY9XCIjXCI+UmVzdWx0czwvYT48L2xpPlxuICAvLyAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+PGEgaHJlZj1cIiNcIj5QYXBlcjwvYT48L2xpPlxuICAvLyAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gIC8vICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCI+XG4gIC8vICAgICAgICAgICAgICAgICA8YSA+VGVhbTwvYT5cbiAgLy8gICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgLy8gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PjxhIGhyZWY9XCIjXCI+V29ya3Nob3A8L2E+PC9saT5cbiAgLy8gICAgICAgICAgIDwvdWw+XG4gIC8vICAgICAgICAgPC9uYXY+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKVxuICAvLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})