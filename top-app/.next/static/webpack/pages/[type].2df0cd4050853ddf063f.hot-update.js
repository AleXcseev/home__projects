webpackHotUpdate_N_E("pages/[type]",{

/***/ "./components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./components/Search/Search.tsx ***!
  \**************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.tsx");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search.module.css */ "./components/Search/Search.module.css");
/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _glass_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glass.svg */ "./components/Search/glass.svg");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Search\\Search.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Search = function Search(_ref) {
  _s();

  var children = _ref.children,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var goToSearch = function goToSearch() {
    router.push({
      pathname: "/search",
      query: {
        q: q
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input_Input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      appearance: "primary",
      className: _Search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      onClick: function onClick() {},
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_glass_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, _this);
};

_s(Search, "N9tP0MPL4qItVfAzW5Hg4coRsTs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnb1RvU2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJxIiwiY24iLCJzdHlsZXMiLCJpbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrRTtBQUFBOztBQUFBLE1BQTlEQyxRQUE4RCxRQUE5REEsUUFBOEQ7QUFBQSxNQUFwREMsU0FBb0QsUUFBcERBLFNBQW9EO0FBQUEsTUFBdENDLEtBQXNDOztBQUFBLGtCQUUzREMsc0RBQVEsQ0FBUyxFQUFULENBRm1EO0FBQUEsTUFFaEZDLE1BRmdGO0FBQUEsTUFFeEVDLFNBRndFOztBQUd2RixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZO0FBQ1hDLGNBQVEsRUFBRSxTQURDO0FBRVhDLFdBQUssRUFBRTtBQUNOQyxTQUFDLEVBQURBO0FBRE07QUFGSSxLQUFaO0FBTUEsR0FQRDs7QUFTQSxzQkFDQztBQUFLLGFBQVMsRUFBRUMsaURBQUUsQ0FBRVosU0FBRixFQUFhYSx5REFBTSxDQUFDVixNQUFwQixDQUFsQjtBQUFBLDRCQUNDLHFFQUFDLGtEQUFEO0FBQ0MsZUFBUyxFQUFFVSx5REFBTSxDQUFDQyxLQURuQjtBQUVDLGlCQUFXLEVBQUMsbUNBRmI7QUFHQyxXQUFLLEVBQUVYLE1BSFI7QUFJQyxjQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxlQUFPWCxTQUFTLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFPQyxxRUFBQyxxREFBRDtBQUNDLGdCQUFVLEVBQUMsU0FEWjtBQUVDLGVBQVMsRUFBRUoseURBQU0sQ0FBQ0ssTUFGbkI7QUFHQyxhQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUhsQjtBQUFBLDZCQUtDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0EvQk07O0dBQU1wQixNO1VBR0dRLHFEOzs7S0FISFIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bdHlwZV0uMmRmMGNkNDA1MDg1M2RkZjA2M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFByb3BzIH0gZnJvbSBcIi4vU2VhcmNoLnByb3BzXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgR2xhc3NJY29uIGZyb20gXCIuL2dsYXNzLnN2Z1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaCA9ICh7ICBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBTZWFyY2hQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHJcblx0Y29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0Y29uc3QgZ29Ub1NlYXJjaCA9ICgpID0+IHtcclxuXHRcdHJvdXRlci5wdXNoKHtcclxuXHRcdFx0cGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG5cdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdHFcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oIGNsYXNzTmFtZSwgc3R5bGVzLnNlYXJjaCl9PlxyXG5cdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxyXG5cdFx0XHRcdHZhbHVlPXtzZWFyY2h9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHQ+PC9JbnB1dD5cclxuXHRcdFx0PEJ1dHRvbiBcclxuXHRcdFx0XHRhcHBlYXJhbmNlPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHt9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdsYXNzSWNvbj48L0dsYXNzSWNvbj5cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=