webpackHotUpdate_N_E("pages/index",{

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/*! exports provided: withLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withLayout\", function() { return withLayout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/Header */ \"./layout/Header/Header.tsx\");\n/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar/Sidebar */ \"./layout/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer/Footer */ \"./layout/Footer/Footer.tsx\");\n/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/app.context */ \"./context/app.context.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _jsxFileName = \"/Users/konstantinalekseev/Desktop/home__projects/top-app/layout/Layout.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      props = Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSkipLinkDisplayed = _useState[0],\n      setIsSkipLinkDisplayed = _useState[1];\n\n  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var skipContentAction = function skipContentAction(key) {\n    if (key.code == \"Space\" || key.code == \"Enter\") {\n      var _bodyRef$current;\n\n      key.preventDefault();\n      (_bodyRef$current = bodyRef.current) === null || _bodyRef$current === void 0 ? void 0 : _bodyRef$current.focus();\n    }\n\n    setIsSkipLinkDisplayed(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      tabIndex: 1,\n      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.skipLink, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.displayed, isSkipLinkDisplayed)),\n      onFocus: function onFocus() {\n        return setIsSkipLinkDisplayed(true);\n      },\n      onKeyDown: skipContentAction,\n      children: \"\\u0421\\u0440\\u0430\\u0437\\u0443 \\u043A \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u043D\\u0438\\u044E\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header_Header__WEBPACK_IMPORTED_MODULE_5__[\"Header\"], {\n      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"Sidebar\"], {\n      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebar\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,\n      ref: bodyRef,\n      tabIndex: 0,\n      role: \"main\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"Footer\"], {\n      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_9__[\"Up\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Layout, \"TF1Jfq3MrcCD/TpGfMxZeicV9Dg=\");\n\n_c = Layout;\nvar withLayout = function withLayout(Component) {\n  return function withLayoutnComponent(props) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_app_context__WEBPACK_IMPORTED_MODULE_8__[\"AppContextProvider\"], {\n      menu: props.menu,\n      firstCategory: props.firstCategory,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Layout, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, props), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this);\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC50c3g/OTIxZSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInByb3BzIiwidXNlU3RhdGUiLCJpc1NraXBMaW5rRGlzcGxheWVkIiwic2V0SXNTa2lwTGlua0Rpc3BsYXllZCIsImJvZHlSZWYiLCJ1c2VSZWYiLCJza2lwQ29udGVudEFjdGlvbiIsImtleSIsImNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJmb2N1cyIsInN0eWxlcyIsIndyYXBwZXIiLCJjbiIsInNraXBMaW5rIiwiZGlzcGxheWVkIiwiaGVhZGVyIiwic2lkZWJhciIsImJvZHkiLCJmb290ZXIiLCJ3aXRoTGF5b3V0IiwiQ29tcG9uZW50Iiwid2l0aExheW91dG5Db21wb25lbnQiLCJtZW51IiwiZmlyc3RDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNEO0FBQUE7O0FBQUEsTUFBbkRDLFFBQW1ELFFBQW5EQSxRQUFtRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBVSxLQUFWLENBRE07QUFBQSxNQUM3REMsbUJBRDZEO0FBQUEsTUFDeENDLHNCQUR3Qzs7QUFFcEUsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBdUI7QUFDaEQsUUFBSUEsR0FBRyxDQUFDQyxJQUFKLElBQVksT0FBWixJQUF1QkQsR0FBRyxDQUFDQyxJQUFKLElBQVksT0FBdkMsRUFBZ0Q7QUFBQTs7QUFDL0NELFNBQUcsQ0FBQ0UsY0FBSjtBQUNBLDBCQUFBTCxPQUFPLENBQUNNLE9BQVIsc0VBQWlCQyxLQUFqQjtBQUNBOztBQUNEUiwwQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQ0EsR0FORDs7QUFRQSxzQkFDQztBQUFLLGFBQVMsRUFBRVMseURBQU0sQ0FBQ0MsT0FBdkI7QUFBQSw0QkFDQztBQUNDLGNBQVEsRUFBRSxDQURYO0FBRUMsZUFBUyxFQUFFQyxrREFBRSxDQUFDRix5REFBTSxDQUFDRyxRQUFSLG9LQUNYSCx5REFBTSxDQUFDSSxTQURJLEVBQ1FkLG1CQURSLEVBRmQ7QUFLQyxhQUFPLEVBQUU7QUFBQSxlQUFNQyxzQkFBc0IsQ0FBQyxJQUFELENBQTVCO0FBQUEsT0FMVjtBQU1DLGVBQVMsRUFBRUcsaUJBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVdDLHFFQUFDLHFEQUFEO0FBQVEsZUFBUyxFQUFFTSx5REFBTSxDQUFDSztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEQsZUFZQyxxRUFBQyx3REFBRDtBQUFTLGVBQVMsRUFBRUwseURBQU0sQ0FBQ007QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpELGVBYUM7QUFBTSxlQUFTLEVBQUVOLHlEQUFNLENBQUNPLElBQXhCO0FBQThCLFNBQUcsRUFBRWYsT0FBbkM7QUFBNEMsY0FBUSxFQUFFLENBQXREO0FBQXlELFVBQUksRUFBQyxNQUE5RDtBQUFBLGdCQUFzRUw7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJELGVBY0MscUVBQUMscURBQUQ7QUFBUSxlQUFTLEVBQUVhLHlEQUFNLENBQUNRO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRCxlQWVDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1CQSxDQS9CRDs7R0FBTXRCLE07O0tBQUFBLE07QUFpQ0MsSUFBTXVCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQWtEQyxTQUFsRCxFQUFzRjtBQUMvRyxTQUFPLFNBQVNDLG9CQUFULENBQThCdkIsS0FBOUIsRUFBcUQ7QUFDM0Qsd0JBQ0MscUVBQUMsdUVBQUQ7QUFBb0IsVUFBSSxFQUFFQSxLQUFLLENBQUN3QixJQUFoQztBQUFzQyxtQkFBYSxFQUFFeEIsS0FBSyxDQUFDeUIsYUFBM0Q7QUFBQSw2QkFDQyxxRUFBQyxNQUFEO0FBQUEsK0JBQ0MscUVBQUMsU0FBRCxvQkFBZXpCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFPQSxHQVJEO0FBU0EsQ0FWTSIsImZpbGUiOiIuL2xheW91dC9MYXlvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwiLi9MYXlvdXQucHJvcHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL1NpZGViYXIvU2lkZWJhclwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dFByb3ZpZGVyLCBJQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2FwcC5jb250ZXh0XCI7XG5pbXBvcnQgeyBVcCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IExheW91dFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCBbaXNTa2lwTGlua0Rpc3BsYXllZCwgc2V0SXNTa2lwTGlua0Rpc3BsYXllZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSkgXG5cdGNvbnN0IGJvZHlSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG5cdGNvbnN0IHNraXBDb250ZW50QWN0aW9uID0gKGtleTpLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0aWYgKGtleS5jb2RlID09IFwiU3BhY2VcIiB8fCBrZXkuY29kZSA9PSBcIkVudGVyXCIpIHtcblx0XHRcdGtleS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRib2R5UmVmLmN1cnJlbnQ/LmZvY3VzKClcblx0XHR9XG5cdFx0c2V0SXNTa2lwTGlua0Rpc3BsYXllZChmYWxzZSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cblx0XHRcdDxhIFxuXHRcdFx0XHR0YWJJbmRleD17MX0gXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnNraXBMaW5rLCB7XG5cdFx0XHRcdFx0W3N0eWxlcy5kaXNwbGF5ZWRdOiBpc1NraXBMaW5rRGlzcGxheWVkXG5cdFx0XHR9KX1cblx0XHRcdFx0b25Gb2N1cz17KCkgPT4gc2V0SXNTa2lwTGlua0Rpc3BsYXllZCh0cnVlKX1cblx0XHRcdFx0b25LZXlEb3duPXtza2lwQ29udGVudEFjdGlvbn1cblx0XHRcdD5cblx0XHRcdFx00KHRgNCw0LfRgyDQuiDRgdC+0LTQtdGA0LbQsNC90LjRjlxuXHRcdFx0PC9hPlxuXHRcdFx0PEhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PjwvSGVhZGVyPlxuXHRcdFx0PFNpZGViYXIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+PC9TaWRlYmFyPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gcmVmPXtib2R5UmVmfSB0YWJJbmRleD17MH0gcm9sZT1cIm1haW5cIj57Y2hpbGRyZW59PC9tYWluPlxuXHRcdFx0PEZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvRm9vdGVyPlxuXHRcdFx0PFVwPjwvVXA+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aExheW91dCA9IDxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gJiBJQXBwQ29udGV4dD4oQ29tcG9uZW50OiBGdW5jdGlvbkNvbXBvbmVudDxUPikgPT4ge1xuXHRyZXR1cm4gZnVuY3Rpb24gd2l0aExheW91dG5Db21wb25lbnQocHJvcHM6IFQpOiBKU1guRWxlbWVudCB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHBDb250ZXh0UHJvdmlkZXIgbWVudT17cHJvcHMubWVudX0gZmlyc3RDYXRlZ29yeT17cHJvcHMuZmlyc3RDYXRlZ29yeX0+XG5cdFx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucHJvcHN9PjwvQ29tcG9uZW50PlxuXHRcdFx0XHQ8L0xheW91dD5cblx0XHRcdDwvQXBwQ29udGV4dFByb3ZpZGVyPlxuXHRcdCk7XG5cdH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Layout.tsx\n");

/***/ })

})