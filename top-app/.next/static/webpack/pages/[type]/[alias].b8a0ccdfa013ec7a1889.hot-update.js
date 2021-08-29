webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Raiting\", function() { return Raiting; });\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raiting.module.css */ \"./components/Raiting/Raiting.module.css\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.svg */ \"./components/Raiting/star.svg\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/konstantinalekseev/Desktop/home__projects/top-app/components/Raiting/Raiting.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Raiting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__[\"forwardRef\"])(_c = _s(function (_ref, ref) {\n  _s();\n\n  var _ref$isEditable = _ref.isEditable,\n      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,\n      raiting = _ref.raiting,\n      setRaiting = _ref.setRaiting,\n      error = _ref.error,\n      props = Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"isEditable\", \"raiting\", \"setRaiting\", \"error\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {}, void 0, false))),\n      raitingArray = _useState[0],\n      setRaitingArray = _useState[1];\n\n  var raitingArrayRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    constructRaiting(raiting);\n  }, [raiting]);\n\n  var computeFocus = function computeFocus(r, i) {\n    if (!isEditable) {\n      return -1;\n    }\n\n    if (!raiting && i == 0) {\n      return 0;\n    }\n\n    if (r == i + 1) {\n      return 0;\n    }\n\n    return -1;\n  };\n\n  var constructRaiting = function constructRaiting(currentRaiting) {\n    var updatedArray = raitingArray.map(function (el, index) {\n      var _cn;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.star, (_cn = {}, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filled, index < currentRaiting), Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editable, isEditable), _cn)),\n        onMouseEnter: function onMouseEnter() {\n          return changeDisplay(index + 1);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return changeDisplay(raiting);\n        },\n        onClick: function onClick() {\n          return _onClick(index + 1);\n        },\n        tabIndex: computeFocus(raiting, index),\n        onKeyDown: handelKey,\n        ref: function ref(r) {\n          var _raitingArrayRef$curr;\n\n          return (_raitingArrayRef$curr = raitingArrayRef.current) === null || _raitingArrayRef$curr === void 0 ? void 0 : _raitingArrayRef$curr.push(r);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 6\n      }, _this);\n    });\n    setRaitingArray(updatedArray);\n  };\n\n  var changeDisplay = function changeDisplay(index) {\n    if (!isEditable) {\n      return;\n    }\n\n    constructRaiting(index);\n  };\n\n  var _onClick = function _onClick(index) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    setRaiting(index);\n  };\n\n  var handelKey = function handelKey(e) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    if (e.code == \"ArrowRight\" || e.code == \"ArrowUp\") {\n      var _raitingArrayRef$curr2;\n\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting < 5 ? raiting + 1 : 5);\n      }\n\n      (_raitingArrayRef$curr2 = raitingArrayRef.current[raiting]) === null || _raitingArrayRef$curr2 === void 0 ? void 0 : _raitingArrayRef$curr2.focus();\n    }\n\n    if (e.code == \"ArrowLeft\" || e.code == \"ArrowDown\") {\n      var _raitingArrayRef$curr3;\n\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting > 1 ? raiting - 1 : 1);\n      }\n\n      (_raitingArrayRef$curr3 = raitingArrayRef.current[raiting - 2]) === null || _raitingArrayRef$curr3 === void 0 ? void 0 : _raitingArrayRef$curr3.focus();\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, props), {}, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raitingWrapper, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.error, error)),\n    children: [raitingArray.map(function (el, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        children: el\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, _this);\n    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }, _this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 4\n  }, _this);\n}, \"h/CyiD+/e1bGeRi4Txv9+bmq4Uo=\"));\n_c2 = Raiting;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Raiting$forwardRef\");\n$RefreshReg$(_c2, \"Raiting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4P2UwOTEiXSwibmFtZXMiOlsiUmFpdGluZyIsImZvcndhcmRSZWYiLCJyZWYiLCJpc0VkaXRhYmxlIiwicmFpdGluZyIsInNldFJhaXRpbmciLCJlcnJvciIsInByb3BzIiwidXNlU3RhdGUiLCJBcnJheSIsImZpbGwiLCJyYWl0aW5nQXJyYXkiLCJzZXRSYWl0aW5nQXJyYXkiLCJyYWl0aW5nQXJyYXlSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjb25zdHJ1Y3RSYWl0aW5nIiwiY29tcHV0ZUZvY3VzIiwiciIsImkiLCJjdXJyZW50UmFpdGluZyIsInVwZGF0ZWRBcnJheSIsIm1hcCIsImVsIiwiaW5kZXgiLCJjbiIsInN0eWxlcyIsInN0YXIiLCJmaWxsZWQiLCJlZGl0YWJsZSIsImNoYW5nZURpc3BsYXkiLCJvbkNsaWNrIiwiaGFuZGVsS2V5IiwiY3VycmVudCIsInB1c2giLCJlIiwiY29kZSIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJyYWl0aW5nV3JhcHBlciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFPLGdCQUFHQyx3REFBVSxTQUNoQyxnQkFFQ0MsR0FGRCxFQUdrQjtBQUFBOztBQUFBLDZCQUZmQyxVQUVlO0FBQUEsTUFGZkEsVUFFZSxnQ0FGRixLQUVFO0FBQUEsTUFGS0MsT0FFTCxRQUZLQSxPQUVMO0FBQUEsTUFGY0MsVUFFZCxRQUZjQSxVQUVkO0FBQUEsTUFGMEJDLEtBRTFCLFFBRjBCQSxLQUUxQjtBQUFBLE1BRm9DQyxLQUVwQzs7QUFBQSxrQkFDdUJDLHNEQUFRLENBQWdCLElBQUlDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLElBQWIsZUFBa0IsdUpBQWxCLENBQWhCLENBRC9CO0FBQUEsTUFDVkMsWUFEVTtB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QWNBLENBbkcrQixrQ0FBMUI7TUFBTXpDLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhaXRpbmcvUmFpdGluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWl0aW5nUHJvcHMgfSBmcm9tIFwiLi9SYWl0aW5nLnByb3BzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1JhaXRpbmcubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCBmb3J3YXJkUmVmLCBGb3J3YXJkZWRSZWYsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0YXJJY29uIGZyb20gXCIuL3N0YXIuc3ZnXCI7XG5cbmV4cG9ydCBjb25zdCBSYWl0aW5nID0gZm9yd2FyZFJlZihcblx0KFxuXHRcdHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYWl0aW5nLCBzZXRSYWl0aW5nLCBlcnJvciwgLi4ucHJvcHMgfTogUmFpdGluZ1Byb3BzLFxuXHRcdHJlZjogRm9yd2FyZGVkUmVmPEhUTUxEaXZFbGVtZW50Pixcblx0KTogSlNYLkVsZW1lbnQgPT4ge1xuXHRcdGNvbnN0IFtyYWl0aW5nQXJyYXksIHNldFJhaXRpbmdBcnJheV0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihuZXcgQXJyYXkoNSkuZmlsbCg8PjwvPikpO1xuXHRcdGNvbnN0IHJhaXRpbmdBcnJheVJlZiA9IHVzZVJlZjwoSFRNTFNwYW5FbGVtZW50IHwgbnVsbClbXT4oW10pO1xuXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdGNvbnN0cnVjdFJhaXRpbmcocmFpdGluZyk7XG5cdFx0fSwgW3JhaXRpbmddKTtcblxuXHRcdGNvbnN0IGNvbXB1dGVGb2N1cyA9IChyOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciA9PiB7XG5cdFx0XHRpZiAoIWlzRWRpdGFibGUpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyYWl0aW5nICYmIGkgPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHRcdGlmIChyID09IGkgKyAxKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH07XG5cblx0XHRjb25zdCBjb25zdHJ1Y3RSYWl0aW5nID0gKGN1cnJlbnRSYWl0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHVwZGF0ZWRBcnJheSA9IHJhaXRpbmdBcnJheS5tYXAoKGVsOiBKU1guRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XG5cdFx0XHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaW5kZXggPCBjdXJyZW50UmFpdGluZyxcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5lZGl0YWJsZV06IGlzRWRpdGFibGUsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gY2hhbmdlRGlzcGxheShpbmRleCArIDEpfVxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KHJhaXRpbmcpfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25DbGljayhpbmRleCArIDEpfVxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9e2NvbXB1dGVGb2N1cyhyYWl0aW5nLCBpbmRleCl9XG5cdFx0XHRcdFx0XHRvbktleURvd249e2hhbmRlbEtleX1cblx0XHRcdFx0XHRcdHJlZj17KHIpID0+IHJhaXRpbmdBcnJheVJlZi5jdXJyZW50Py5wdXNoKHIpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTdGFySWNvbj48L1N0YXJJY29uPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0UmFpdGluZ0FycmF5KHVwZGF0ZWRBcnJheSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKCFpc0VkaXRhYmxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0cnVjdFJhaXRpbmcoaW5kZXgpO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXRSYWl0aW5nKGluZGV4KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaGFuZGVsS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmFpdGluZykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dSaWdodFwiIHx8IGUuY29kZSA9PSBcIkFycm93VXBcIikge1xuXHRcdFx0XHRpZiAoIXJhaXRpbmcpIHtcblx0XHRcdFx0XHRzZXRSYWl0aW5nKDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRzZXRSYWl0aW5nKHJhaXRpbmcgPCA1ID8gcmFpdGluZyArIDEgOiA1KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyYWl0aW5nQXJyYXlSZWYuY3VycmVudFtyYWl0aW5nXT8uZm9jdXMoKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGUuY29kZSA9PSBcIkFycm93TGVmdFwiIHx8IGUuY29kZSA9PSBcIkFycm93RG93blwiKSB7XG5cdFx0XHRcdGlmICghcmFpdGluZykge1xuXHRcdFx0XHRcdHNldFJhaXRpbmcoMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldFJhaXRpbmcocmFpdGluZyA+IDEgPyByYWl0aW5nIC0gMSA6IDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJhaXRpbmdBcnJheVJlZi5jdXJyZW50W3JhaXRpbmcgLTJdPy5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRcdHJlZj17cmVmfVxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5yYWl0aW5nV3JhcHBlciwge1xuXHRcdFx0XHRcdFtzdHlsZXMuZXJyb3JdOiBlcnJvcixcblx0XHRcdFx0fSl9XG5cdFx0XHQ+XG5cdFx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj47XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHR7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3IubWVzc2FnZX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Raiting/Raiting.tsx\n");

/***/ })

})