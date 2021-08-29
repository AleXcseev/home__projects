webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sort/Sort.tsx":
/*!**********************************!*\
  !*** ./components/Sort/Sort.tsx ***!
  \**********************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sort\", function() { return Sort; });\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Sort_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sort.props */ \"./components/Sort/Sort.props.ts\");\n/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sort.module.css */ \"./components/Sort/Sort.module.css\");\n/* harmony import */ var _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sort_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.svg */ \"./components/Sort/sort.svg\");\n\n\n\n\nvar _jsxFileName = \"/Users/konstantinalekseev/Desktop/home__projects/top-app/components/Sort/Sort.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Sort = function Sort(_ref) {\n  var sort = _ref.sort,\n      setSort = _ref.setSort,\n      className = _ref.className,\n      props = Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"sort\", \"setSort\", \"className\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({\n    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sort, className)\n  }, props), {}, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sortName,\n      id: \"sort\",\n      children: \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      id: \"rating\",\n      onClick: function onClick() {\n        return setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Rating);\n      },\n      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active, sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Rating)),\n      \"aria-selected\": sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Rating,\n      \"aria-labelledby\": \"sort rating\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_sort_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sortIcon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, _this), \"\\u041F\\u043E \\u0440\\u0435\\u0439\\u0442\\u0438\\u043D\\u0433\\u0443\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      id: \"\",\n      onClick: function onClick() {\n        return setSort(_Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Price);\n      },\n      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active, sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Price)),\n      \"aria-selected\": sort == _Sort_props__WEBPACK_IMPORTED_MODULE_3__[\"SortEnum\"].Price,\n      \"aria-labelledby\": \"sort price\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_sort_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: _Sort_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sortIcon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, _this), \"\\u041F\\u043E \\u0446\\u0435\\u043D\\u0435\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, _this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n_c = Sort;\n\nvar _c;\n\n$RefreshReg$(_c, \"Sort\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb3J0L1NvcnQudHN4P2Q5YjciXSwibmFtZXMiOlsiU29ydCIsInNvcnQiLCJzZXRTb3J0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjbiIsInN0eWxlcyIsInNvcnROYW1lIiwiU29ydEVudW0iLCJSYXRpbmciLCJhY3RpdmUiLCJzb3J0SWNvbiIsIlByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBb0U7QUFBQSxNQUFqRUMsSUFBaUUsUUFBakVBLElBQWlFO0FBQUEsTUFBM0RDLE9BQTJELFFBQTNEQSxPQUEyRDtBQUFBLE1BQWxEQyxTQUFrRCxRQUFsREEsU0FBa0Q7QUFBQSxNQUFwQ0MsS0FBb0M7O0FBQ3ZGLHNCQUNDO0FBQUssYUFBUyxFQUFFQyxpREFBRSxDQUFDQyx1REFBTSxDQUFDTCxJQUFSLEVBQWNFLFNBQWQ7QUFBbEIsS0FBZ0RDLEtBQWhEO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVFLHVEQUFNLENBQUNDLFFBQXZCO0FBQWlDLFFBQUUsRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFDQyxRQUFFLEVBQUMsUUFESjtBQUVDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLE9BQU8sQ0FBQ00sb0RBQVEsQ0FBQ0MsTUFBVixDQUFiO0FBQUEsT0FGVjtBQUdDLGVBQVMsRUFBRUosaURBQUUsQ0FBQyxrS0FDWkMsdURBQU0sQ0FBQ0ksTUFESSxFQUNLVCxJQUFJLElBQUlPLG9EQUFRLENBQUNDLE1BRHRCLEVBSGQ7QUFNQyx1QkFBZVIsSUFBSSxJQUFJTyxvREFBUSxDQUFDQyxNQU5qQztBQU9DLHlCQUFnQixhQVBqQjtBQUFBLDhCQVNDLHFFQUFDLGlEQUFEO0FBQVUsaUJBQVMsRUFBRUgsdURBQU0sQ0FBQ0s7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBZ0JDO0FBQ0MsUUFBRSxFQUFDLEVBREo7QUFFQyxhQUFPLEVBQUU7QUFBQSxlQUFNVCxPQUFPLENBQUNNLG9EQUFRLENBQUNJLEtBQVYsQ0FBYjtBQUFBLE9BRlY7QUFHQyxlQUFTLEVBQUVQLGlEQUFFLENBQUMsa0tBQ1pDLHVEQUFNLENBQUNJLE1BREksRUFDS1QsSUFBSSxJQUFJTyxvREFBUSxDQUFDSSxLQUR0QixFQUhkO0FBTUMsdUJBQWVYLElBQUksSUFBSU8sb0RBQVEsQ0FBQ0ksS0FOakM7QUFPQyx5QkFBZ0IsWUFQakI7QUFBQSw4QkFTQyxxRUFBQyxpREFBRDtBQUFVLGlCQUFTLEVBQUVOLHVEQUFNLENBQUNLO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUErQkEsQ0FoQ007S0FBTVgsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU29ydC9Tb3J0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRFbnVtLCBTb3J0UHJvcHMgfSBmcm9tIFwiLi9Tb3J0LnByb3BzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NvcnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgU29ydEljb24gZnJvbSBcIi4vc29ydC5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IFNvcnQgPSAoeyBzb3J0LCBzZXRTb3J0LCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFNvcnRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNvcnQsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvcnROYW1lfSBpZD1cInNvcnRcIj5cblx0XHRcdFx00KHQvtGA0YLQuNGA0L7QstC60LBcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRpZD1cInJhdGluZ1wiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNvcnQoU29ydEVudW0uUmF0aW5nKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XG5cdFx0XHRcdFx0W3N0eWxlcy5hY3RpdmVdOiBzb3J0ID09IFNvcnRFbnVtLlJhdGluZyxcblx0XHRcdFx0fSl9XG5cdFx0XHRcdGFyaWEtc2VsZWN0ZWQ9e3NvcnQgPT0gU29ydEVudW0uUmF0aW5nfVxuXHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJzb3J0IHJhdGluZ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdDxTb3J0SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0SWNvbn0+PC9Tb3J0SWNvbj5cblx0XHRcdFx00J/QviDRgNC10LnRgtC40L3Qs9GDXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0aWQ9XCJcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KFNvcnRFbnVtLlByaWNlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbih7XG5cdFx0XHRcdFx0W3N0eWxlcy5hY3RpdmVdOiBzb3J0ID09IFNvcnRFbnVtLlByaWNlLFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0YXJpYS1zZWxlY3RlZD17c29ydCA9PSBTb3J0RW51bS5QcmljZX1cblx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwic29ydCBwcmljZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxTb3J0SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zb3J0SWNvbn0+PC9Tb3J0SWNvbj5cblx0XHRcdFx00J/QviDRhtC10L3QtVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sort/Sort.tsx\n");

/***/ })

})