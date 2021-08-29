webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Raiting\", function() { return Raiting; });\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raiting.module.css */ \"./components/Raiting/Raiting.module.css\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.svg */ \"./components/Raiting/star.svg\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/konstantinalekseev/Desktop/home__projects/top-app/components/Raiting/Raiting.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Raiting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__[\"forwardRef\"])(_c = _s(function (_ref, ref) {\n  _s();\n\n  var _ref$isEditable = _ref.isEditable,\n      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,\n      raiting = _ref.raiting,\n      setRaiting = _ref.setRaiting,\n      error = _ref.error,\n      props = Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"isEditable\", \"raiting\", \"setRaiting\", \"error\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {}, void 0, false))),\n      raitingArray = _useState[0],\n      setRaitingArray = _useState[1];\n\n  var raitingArrayRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    constructRaiting(raiting);\n  }, [raiting]);\n\n  var computeFocus = function computeFocus(r, i) {\n    if (!isEditable) {\n      return -1;\n    }\n\n    if (!raiting && i == 0) {\n      return 0;\n    }\n\n    if (r == i + 1) {\n      return 0;\n    }\n\n    return -1;\n  };\n\n  var constructRaiting = function constructRaiting(currentRaiting) {\n    var updatedArray = raitingArray.map(function (el, index) {\n      var _cn;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.star, (_cn = {}, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filled, index < currentRaiting), Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editable, isEditable), _cn)),\n        onMouseEnter: function onMouseEnter() {\n          return changeDisplay(index + 1);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return changeDisplay(raiting);\n        },\n        onClick: function onClick() {\n          return _onClick(index + 1);\n        },\n        tabIndex: computeFocus(raiting, index),\n        onKeyDown: handelKey,\n        ref: function ref(r) {\n          var _raitingArrayRef$curr;\n\n          return (_raitingArrayRef$curr = raitingArrayRef.current) === null || _raitingArrayRef$curr === void 0 ? void 0 : _raitingArrayRef$curr.push(r);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 6\n      }, _this);\n    });\n    setRaitingArray(updatedArray);\n  };\n\n  var changeDisplay = function changeDisplay(index) {\n    if (!isEditable) {\n      return;\n    }\n\n    constructRaiting(index);\n  };\n\n  var _onClick = function _onClick(index) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    setRaiting(index);\n  };\n\n  var handelKey = function handelKey(e) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    if (e.code == \"ArrowRight\" || e.code == \"ArrowUp\") {\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting < 5 ? raiting + 1 : 5);\n      }\n\n      raitingArrayRef;\n    }\n\n    if (e.code == \"ArrowLeft\" || e.code == \"ArrowDown\") {\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting > 1 ? raiting - 1 : 1);\n      }\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, props), {}, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raitingWrapper, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.error, error)),\n    children: [raitingArray.map(function (el, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        children: el\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }, _this);\n    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 15\n    }, _this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 4\n  }, _this);\n}, \"h/CyiD+/e1bGeRi4Txv9+bmq4Uo=\"));\n_c2 = Raiting;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Raiting$forwardRef\");\n$RefreshReg$(_c2, \"Raiting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4P2UwOTEiXSwibmFtZXMiOlsiUmFpdGluZyIsImZvcndhcmRSZWYiLCJyZWYiLCJpc0VkaXRhYmxlIiwicmFpdGluZyIsInNldFJhaXRpbmciLCJlcnJvciIsInByb3BzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJyYWl0aW5nQXJyYXkiLCJzZXRSYWl0aW5nQXJyYXkiLCJyYWl0aW5nQXJyYXlSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYWl0aW5nIiwiY29tcHV0ZUZvY3VzIiwiciIsImkiLCJjdXJyZW50UmFpdGluZyIsInVwZGF0ZWRBcnJheSIsIm1hcCIsImVsIiwiaW5kZXgiLCJjbiIsInN0eWxlcyIsInN0YXIiLCJmaWxsZWQiLCJlZGl0YWJsZSIsImNoYW5nZURpc3BsYXkiLCJvbkNsaWNrIiwiaGFuZGVsS2V5IiwiY3VycmVudCIsInB1c2giLCJlIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwicmFpdGluZ1dyYXBwZXIiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxnQkFBR0Msd0RBQVUsU0FDaEMsZ0JBRUNDLEdBRkQsRUFHa0I7QUFBQTs7QUFBQSw2QkFGZkMsVUFFZTtBQUFBLE1BRmZBLFVBRWUsZ0NBRkYsS0FFRTtBQUFBLE1BRktDLE9BRUwsUUFGS0EsT0FFTDtBQUFBLE1BRmNDLFVBRWQsUUFGY0EsVUFFZDtBQUFBLE1BRjBCQyxLQUUxQixRQUYwQkEsS0FFMUI7QUFBQSxNQUZvQ0MsS0FFcEM7O0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFnQixJQUFJQyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLGVBQWtCLHVKQUFsQixDQUFoQixDQUQvQjtBQUFBLE1BQ1ZDLFlBRFU7QUFBQSxNQUNJ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LE9BQU8sR0FBRyxDQUFWLEdBQWNBLE9BQU8sR0FBRyxDQUF4QixHQUE0QixDQUE3QixDQUFWO0FBQ0E7O0FBQ0RTLHFCQUFlO0FBQ2Y7O0FBQ0QsUUFBSXNCLENBQUMsQ0FBQ0MsSUFBRixJQUFVLFdBQVYsSUFBeUJELENBQUMsQ0FBQ0MsSUFBRixJQUFVLFdBQXZDLEVBQW9EO0FBQ25ELFVBQUksQ0FBQ2hDLE9BQUwsRUFBYztBQUNiQyxrQkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNBLE9BRkQsTUFFTztBQUNOOEIsU0FBQyxDQUFDRSxjQUFGO0FBQ0FoQyxrQkFBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBVixHQUFjQSxPQUFPLEdBQUcsQ0FBeEIsR0FBNEIsQ0FBN0IsQ0FBVjtBQUNBO0FBQ0Q7QUFDRCxHQXJCRDs7QUF1QkEsc0JBQ0MsNEdBQ0tHLEtBREw7QUFFQyxPQUFHLEVBQUVMLEdBRk47QUFHQyxhQUFTLEVBQUV1QixpREFBRSxDQUFDQywwREFBTSxDQUFDWSxjQUFSLG9LQUNYWiwwREFBTSxDQUFDcEIsS0FESSxFQUNJQSxLQURKLEVBSGQ7QUFBQSxlQU9FSyxZQUFZLENBQUNXLEdBQWIsQ0FBaUIsVUFBQ0MsRUFBRCxFQUFrQkMsS0FBbEIsRUFBb0M7QUFDckQsMEJBQU87QUFBQSxrQkFBbUJEO0FBQW5CLFNBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsS0FGQSxDQVBGLEVBVUVsQixLQUFLLGlCQUFJO0FBQU0sZUFBUyxFQUFFb0IsMERBQU0sQ0FBQ2EsWUFBeEI7QUFBQSxnQkFBdUNqQyxLQUFLLENBQUNrQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFjQSxDQWxHK0Isa0NBQTFCO01BQU14QyxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpdGluZ1Byb3BzIH0gZnJvbSBcIi4vUmFpdGluZy5wcm9wc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYWl0aW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCwgZm9yd2FyZFJlZiwgRm9yd2FyZGVkUmVmLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgUmFpdGluZyA9IGZvcndhcmRSZWYoXG5cdChcblx0XHR7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmFpdGluZywgc2V0UmFpdGluZywgZXJyb3IsIC4uLnByb3BzIH06IFJhaXRpbmdQcm9wcyxcblx0XHRyZWY6IEZvcndhcmRlZFJlZjxIVE1MRGl2RWxlbWVudD4sXG5cdCk6IEpTWC5FbGVtZW50ID0+IHtcblx0XHRjb25zdCBbcmFpdGluZ0FycmF5LCBzZXRSYWl0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKTtcblx0XHRjb25zdCByYWl0aW5nQXJyYXlSZWYgPSB1c2VSZWY8KEhUTUxTcGFuRWxlbWVudCB8IG51bGwpW10+KFtdKTtcblxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHRjb25zdHJ1Y3RSYWl0aW5nKHJhaXRpbmcpO1xuXHRcdH0sIFtyYWl0aW5nXSk7XG5cblx0XHRjb25zdCBjb21wdXRlRm9jdXMgPSAocjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRcdFx0aWYgKCFpc0VkaXRhYmxlKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmICghcmFpdGluZyAmJiBpID09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAociA9PSBpICsgMSkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAtMTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY29uc3RydWN0UmFpdGluZyA9IChjdXJyZW50UmFpdGluZzogbnVtYmVyKSA9PiB7XG5cdFx0XHRjb25zdCB1cGRhdGVkQXJyYXkgPSByYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc3Rhciwge1xuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLmZpbGxlZF06IGluZGV4IDwgY3VycmVudFJhaXRpbmcsXG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMuZWRpdGFibGVdOiBpc0VkaXRhYmxlLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGNoYW5nZURpc3BsYXkoaW5kZXggKyAxKX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gY2hhbmdlRGlzcGxheShyYWl0aW5nKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggKyAxKX1cblx0XHRcdFx0XHRcdHRhYkluZGV4PXtjb21wdXRlRm9jdXMocmFpdGluZywgaW5kZXgpfVxuXHRcdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kZWxLZXl9XG5cdFx0XHRcdFx0XHRyZWY9eyhyKSA9PiByYWl0aW5nQXJyYXlSZWYuY3VycmVudD8ucHVzaChyKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U3Rhckljb24+PC9TdGFySWNvbj5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRcdHNldFJhaXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpO1xuXHRcdH07XG5cblx0XHRjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmICghaXNFZGl0YWJsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdHJ1Y3RSYWl0aW5nKGluZGV4KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2V0UmFpdGluZyhpbmRleCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGhhbmRlbEtleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoIWlzRWRpdGFibGUgfHwgIXNldFJhaXRpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUuY29kZSA9PSBcIkFycm93UmlnaHRcIiB8fCBlLmNvZGUgPT0gXCJBcnJvd1VwXCIpIHtcblx0XHRcdFx0aWYgKCFyYWl0aW5nKSB7XG5cdFx0XHRcdFx0c2V0UmFpdGluZygxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nIDwgNSA/IHJhaXRpbmcgKyAxIDogNSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmFpdGluZ0FycmF5UmVmXG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dEb3duXCIpIHtcblx0XHRcdFx0aWYgKCFyYWl0aW5nKSB7XG5cdFx0XHRcdFx0c2V0UmFpdGluZygxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nID4gMSA/IHJhaXRpbmcgLSAxIDogMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0ey4uLnByb3BzfVxuXHRcdFx0XHRyZWY9e3JlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMucmFpdGluZ1dyYXBwZXIsIHtcblx0XHRcdFx0XHRbc3R5bGVzLmVycm9yXTogZXJyb3IsXG5cdFx0XHRcdH0pfVxuXHRcdFx0PlxuXHRcdFx0XHR7cmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aW5kZXh9PntlbH08L3NwYW4+O1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0e2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yLm1lc3NhZ2V9PC9zcGFuPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Raiting/Raiting.tsx\n");

/***/ })

})