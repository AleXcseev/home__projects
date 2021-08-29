webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Raiting/Raiting.tsx":
/*!****************************************!*\
  !*** ./components/Raiting/Raiting.tsx ***!
  \****************************************/
/*! exports provided: Raiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Raiting\", function() { return Raiting; });\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raiting.module.css */ \"./components/Raiting/Raiting.module.css\");\n/* harmony import */ var _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.svg */ \"./components/Raiting/star.svg\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/konstantinalekseev/Desktop/home__projects/top-app/components/Raiting/Raiting.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Raiting = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__[\"forwardRef\"])(_c = _s(function (_ref, ref) {\n  _s();\n\n  var _ref$isEditable = _ref.isEditable,\n      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,\n      raiting = _ref.raiting,\n      setRaiting = _ref.setRaiting,\n      error = _ref.error,\n      tabIndex = _ref.tabIndex,\n      props = Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"isEditable\", \"raiting\", \"setRaiting\", \"error\", \"tabIndex\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(new Array(5).fill( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {}, void 0, false))),\n      raitingArray = _useState[0],\n      setRaitingArray = _useState[1];\n\n  var raitingArrayRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    constructRaiting(raiting);\n  }, [raiting]);\n\n  var computeFocus = function computeFocus(r, i) {\n    if (!isEditable) {\n      return -1;\n    }\n\n    if (!raiting && i == 0) {\n      return 0;\n    }\n\n    if (r == i + 1) {\n      return 0;\n    }\n\n    return -1;\n  };\n\n  var constructRaiting = function constructRaiting(currentRaiting) {\n    var updatedArray = raitingArray.map(function (el, index) {\n      var _cn;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.star, (_cn = {}, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filled, index < currentRaiting), Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_cn, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editable, isEditable), _cn)),\n        onMouseEnter: function onMouseEnter() {\n          return changeDisplay(index + 1);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return changeDisplay(raiting);\n        },\n        onClick: function onClick() {\n          return _onClick(index + 1);\n        },\n        tabIndex: computeFocus(raiting, index),\n        onKeyDown: handelKey,\n        ref: function ref(r) {\n          var _raitingArrayRef$curr;\n\n          return (_raitingArrayRef$curr = raitingArrayRef.current) === null || _raitingArrayRef$curr === void 0 ? void 0 : _raitingArrayRef$curr.push(r);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_star_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 6\n      }, _this);\n    });\n    setRaitingArray(updatedArray);\n  };\n\n  var changeDisplay = function changeDisplay(index) {\n    if (!isEditable) {\n      return;\n    }\n\n    constructRaiting(index);\n  };\n\n  var _onClick = function _onClick(index) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    setRaiting(index);\n  };\n\n  var handelKey = function handelKey(e) {\n    if (!isEditable || !setRaiting) {\n      return;\n    }\n\n    if (e.code == \"ArrowRight\" || e.code == \"ArrowUp\") {\n      var _raitingArrayRef$curr2;\n\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting < 5 ? raiting + 1 : 5);\n      }\n\n      (_raitingArrayRef$curr2 = raitingArrayRef.current[raiting]) === null || _raitingArrayRef$curr2 === void 0 ? void 0 : _raitingArrayRef$curr2.focus();\n    }\n\n    if (e.code == \"ArrowLeft\" || e.code == \"ArrowDown\") {\n      var _raitingArrayRef$curr3;\n\n      if (!raiting) {\n        setRaiting(1);\n      } else {\n        e.preventDefault();\n        setRaiting(raiting > 1 ? raiting - 1 : 1);\n      }\n\n      (_raitingArrayRef$curr3 = raitingArrayRef.current[raiting - 2]) === null || _raitingArrayRef$curr3 === void 0 ? void 0 : _raitingArrayRef$curr3.focus();\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, props), {}, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raitingWrapper, Object(_Users_konstantinalekseev_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.error, error)),\n    children: [raitingArray.map(function (el, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        children: el\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, _this);\n    }), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n      className: _Raiting_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errorMessage,\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }, _this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 4\n  }, _this);\n}, \"h/CyiD+/e1bGeRi4Txv9+bmq4Uo=\"));\n_c2 = Raiting;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Raiting$forwardRef\");\n$RefreshReg$(_c2, \"Raiting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4P2UwOTEiXSwibmFtZXMiOlsiUmFpdGluZyIsImZvcndhcmRSZWYiLCJyZWYiLCJpc0VkaXRhYmxlIiwicmFpdGluZyIsInNldFJhaXRpbmciLCJlcnJvciIsInRhYkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsInJhaXRpbmdBcnJheSIsInNldFJhaXRpbmdBcnJheSIsInJhaXRpbmdBcnJheVJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvbnN0cnVjdFJhaXRpbmciLCJjb21wdXRlRm9jdXMiLCJyIiwiaSIsImN1cnJlbnRSYWl0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiZWwiLCJpbmRleCIsImNuIiwic3R5bGVzIiwic3RhciIsImZpbGxlZCIsImVkaXRhYmxlIiwiY2hhbmdlRGlzcGxheSIsIm9uQ2xpY2siLCJoYW5kZWxLZXkiLCJjdXJyZW50IiwicHVzaCIsImUiLCJjb2RlIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsInJhaXRpbmdXcmFwcGVyIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sZ0JBQUdDLHdEQUFVLFNBQ2hDLGdCQUVDQyxHQUZELEVBR2tCO0FBQUE7O0FBQUEsNkJBRmZDLFVBRWU7QUFBQSxNQUZmQSxVQUVlLGdDQUZGLEtBRUU7QUFBQSxNQUZLQyxPQUVMLFFBRktBLE9BRUw7QUFBQSxNQUZjQyxVQUVkLFFBRmNBLFVBRWQ7QUFBQSxNQUYwQkMsS0FFMUIsUUFGMEJBLEtBRTFCO0FBQUEsTUFGaUNDLFFBRWpDLFFBRmlDQSxRQUVqQztBQUFBLE1BRjhDQyxLQUU5Qzs7QUFBQSxrQkFDdUJDLHNEQUFRLENBQWdCLElBQUlDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLElBQWIs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QTtBQUFBLGFBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFjQSxDQW5HK0Isa0NBQTFCO01BQU0xQyxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SYWl0aW5nL1JhaXRpbmcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpdGluZ1Byb3BzIH0gZnJvbSBcIi4vUmFpdGluZy5wcm9wc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SYWl0aW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCwgZm9yd2FyZFJlZiwgRm9yd2FyZGVkUmVmLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi9zdGFyLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgUmFpdGluZyA9IGZvcndhcmRSZWYoXG5cdChcblx0XHR7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmFpdGluZywgc2V0UmFpdGluZywgZXJyb3IsIHRhYkluZGV4LCAuLi5wcm9wcyB9OiBSYWl0aW5nUHJvcHMsXG5cdFx0cmVmOiBGb3J3YXJkZWRSZWY8SFRNTERpdkVsZW1lbnQ+LFxuXHQpOiBKU1guRWxlbWVudCA9PiB7XG5cdFx0Y29uc3QgW3JhaXRpbmdBcnJheSwgc2V0UmFpdGluZ0FycmF5XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KG5ldyBBcnJheSg1KS5maWxsKDw+PC8+KSk7XG5cdFx0Y29uc3QgcmFpdGluZ0FycmF5UmVmID0gdXNlUmVmPChIVE1MU3BhbkVsZW1lbnQgfCBudWxsKVtdPihbXSk7XG5cblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0Y29uc3RydWN0UmFpdGluZyhyYWl0aW5nKTtcblx0XHR9LCBbcmFpdGluZ10pO1xuXG5cdFx0Y29uc3QgY29tcHV0ZUZvY3VzID0gKHI6IG51bWJlciwgaTogbnVtYmVyKTogbnVtYmVyID0+IHtcblx0XHRcdGlmICghaXNFZGl0YWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJhaXRpbmcgJiYgaSA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHIgPT0gaSArIDEpIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNvbnN0cnVjdFJhaXRpbmcgPSAoY3VycmVudFJhaXRpbmc6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmFpdGluZ0FycmF5Lm1hcCgoZWw6IEpTWC5FbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcblx0XHRcdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpbmRleCA8IGN1cnJlbnRSYWl0aW5nLFxuXHRcdFx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTogaXNFZGl0YWJsZSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBjaGFuZ2VEaXNwbGF5KGluZGV4ICsgMSl9XG5cdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGNoYW5nZURpc3BsYXkocmFpdGluZyl9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGluZGV4ICsgMSl9XG5cdFx0XHRcdFx0XHR0YWJJbmRleD17Y29tcHV0ZUZvY3VzKHJhaXRpbmcsIGluZGV4KX1cblx0XHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGVsS2V5fVxuXHRcdFx0XHRcdFx0cmVmPXsocikgPT4gcmFpdGluZ0FycmF5UmVmLmN1cnJlbnQ/LnB1c2gocil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFN0YXJJY29uPjwvU3Rhckljb24+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXRSYWl0aW5nQXJyYXkodXBkYXRlZEFycmF5KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRpZiAoIWlzRWRpdGFibGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3RydWN0UmFpdGluZyhpbmRleCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNldFJhaXRpbmcoaW5kZXgpO1xuXHRcdH07XG5cblx0XHRjb25zdCBoYW5kZWxLZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0aWYgKCFpc0VkaXRhYmxlIHx8ICFzZXRSYWl0aW5nKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlLmNvZGUgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dVcFwiKSB7XG5cdFx0XHRcdGlmICghcmFpdGluZykge1xuXHRcdFx0XHRcdHNldFJhaXRpbmcoMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldFJhaXRpbmcocmFpdGluZyA8IDUgPyByYWl0aW5nICsgMSA6IDUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJhaXRpbmdBcnJheVJlZi5jdXJyZW50W3JhaXRpbmddPy5mb2N1cygpXG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5jb2RlID09IFwiQXJyb3dMZWZ0XCIgfHwgZS5jb2RlID09IFwiQXJyb3dEb3duXCIpIHtcblx0XHRcdFx0aWYgKCFyYWl0aW5nKSB7XG5cdFx0XHRcdFx0c2V0UmFpdGluZygxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0UmFpdGluZyhyYWl0aW5nID4gMSA/IHJhaXRpbmcgLSAxIDogMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmFpdGluZ0FycmF5UmVmLmN1cnJlbnRbcmFpdGluZyAtIDJdPy5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRcdHJlZj17cmVmfVxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5yYWl0aW5nV3JhcHBlciwge1xuXHRcdFx0XHRcdFtzdHlsZXMuZXJyb3JdOiBlcnJvcixcblx0XHRcdFx0fSl9XG5cdFx0XHQ+XG5cdFx0XHRcdHtyYWl0aW5nQXJyYXkubWFwKChlbDogSlNYLkVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e2VsfTwvc3Bhbj47XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHR7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3IubWVzc2FnZX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Raiting/Raiting.tsx\n");

/***/ })

})