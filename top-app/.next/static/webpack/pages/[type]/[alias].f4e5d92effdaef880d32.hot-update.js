webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/ReviewForm/ReviewForm.tsx":
/*!**********************************************!*\
  !*** ./components/ReviewForm/ReviewForm.tsx ***!
  \**********************************************/
/*! exports provided: ReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewForm", function() { return ReviewForm; });
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewForm.module.css */ "./components/ReviewForm/ReviewForm.module.css");
/* harmony import */ var _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./close.svg */ "./components/ReviewForm/close.svg");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\User\\Desktop\\home__projects\\top-app\\components\\ReviewForm\\ReviewForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ReviewForm = function ReviewForm(_ref) {
  _s();

  var productId = _ref.productId,
      className = _ref.className,
      props = Object(C_Users_User_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["productId", "className"]);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.reviewForm, className)
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register('name')), {}, {
        placeholder: "\u0418\u043C\u044F"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Input"], _objectSpread(_objectSpread({}, register('title')), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.raiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["Controller"], {
          control: co
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Raiting"], {
          raiting: 0,
          isEditable: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Textarea"], _objectSpread(_objectSpread({}, register("description")), {}, {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.submit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_6__["Button"], {
          appearance: "primary",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.info,
          children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.success,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.successTitle,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
        children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_close_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: _ReviewForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.close
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_s(ReviewForm, "BhdPiQ2UlWUaKCHGAwHFi414IwI=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
});

_c = ReviewForm;

var _c;

$RefreshReg$(_c, "ReviewForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdGb3JtL1Jldmlld0Zvcm0udHN4Il0sIm5hbWVzIjpbIlJldmlld0Zvcm0iLCJwcm9kdWN0SWQiLCJjbGFzc05hbWUiLCJwcm9wcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY24iLCJzdHlsZXMiLCJyZXZpZXdGb3JtIiwidGl0bGUiLCJyYWl0aW5nIiwiY28iLCJkZXNjcmlwdGlvbiIsInN1Ym1pdCIsImluZm8iLCJzdWNjZXNzIiwic3VjY2Vzc1RpdGxlIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFzRTtBQUFBOztBQUFBLE1BQW5FQyxTQUFtRSxRQUFuRUEsU0FBbUU7QUFBQSxNQUF4REMsU0FBd0QsUUFBeERBLFNBQXdEO0FBQUEsTUFBMUNDLEtBQTBDOztBQUFBLGlCQUNwREMsK0RBQU8sRUFENkM7QUFBQSxNQUN2RkMsUUFEdUYsWUFDdkZBLFFBRHVGO0FBQUEsTUFDN0VDLE9BRDZFLFlBQzdFQSxPQUQ2RTtBQUFBLE1BQ3BFQyxZQURvRSxZQUNwRUEsWUFEb0U7O0FBRy9GLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBdUI7QUFDdkNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQztBQUFNLFlBQVEsRUFBRUYsWUFBWSxDQUFDQyxRQUFELENBQTVCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVJLGlEQUFFLENBQUNDLDZEQUFNLENBQUNDLFVBQVIsRUFBb0JaLFNBQXBCO0FBQWxCLE9BQXNEQyxLQUF0RDtBQUFBLDhCQUNDLHFFQUFDLHVDQUFELGtDQUFXRSxRQUFRLENBQUMsTUFBRCxDQUFuQjtBQUE2QixtQkFBVyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLHVDQUFELGtDQUFXQSxRQUFRLENBQUMsT0FBRCxDQUFuQjtBQUE4QixpQkFBUyxFQUFFUSw2REFBTSxDQUFDRSxLQUFoRDtBQUF1RCxtQkFBVyxFQUFDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDO0FBQUssaUJBQVMsRUFBRUYsNkRBQU0sQ0FBQ0csT0FBdkI7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLHFFQUFDLDBEQUFEO0FBQ0MsaUJBQU8sRUFBRUM7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBS0MscUVBQUMseUNBQUQ7QUFBUyxpQkFBTyxFQUFFLENBQWxCO0FBQXFCLG9CQUFVLEVBQUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQVVDLHFFQUFDLDBDQUFELGtDQUFjWixRQUFRLENBQUMsYUFBRCxDQUF0QjtBQUF1QyxpQkFBUyxFQUFFUSw2REFBTSxDQUFDSyxXQUF6RDtBQUFzRSxtQkFBVyxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRCxlQVdDO0FBQUssaUJBQVMsRUFBRUwsNkRBQU0sQ0FBQ00sTUFBdkI7QUFBQSxnQ0FDQyxxRUFBQyx3Q0FBRDtBQUFRLG9CQUFVLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFNLG1CQUFTLEVBQUVOLDZEQUFNLENBQUNPLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBaUJDO0FBQUssZUFBUyxFQUFFUCw2REFBTSxDQUFDUSxPQUF2QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRVIsNkRBQU0sQ0FBQ1MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUssaUJBQVMsRUFBRVQsNkRBQU0sQ0FBQ0ssV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDLHFFQUFDLGtEQUFEO0FBQVcsaUJBQVMsRUFBRUwsNkRBQU0sQ0FBQ1U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXlCQSxDQWhDTTs7R0FBTXZCLFU7VUFDK0JJLHVEOzs7S0FEL0JKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uZjRlNWQ5MmVmZmRhZWY4ODBkMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmlld0Zvcm1Qcm9wcyB9IGZyb20gXCIuL1Jldmlld0Zvcm0ucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SZXZpZXdGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgUmFpdGluZywgVGV4dGFyZWEgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiLi9jbG9zZS5zdmdcIlxyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBJUmV2aWV3Rm9ybSB9IGZyb20gXCIuL1Jldmlld0Zvcm0uaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmV2aWV3Rm9ybSA9ICh7IHByb2R1Y3RJZCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZXZpZXdGb3JtUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgY29udHJvbCwgaGFuZGxlU3VibWl0fSA9IHVzZUZvcm08SVJldmlld0Zvcm0+KClcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSVJldmlld0Zvcm0pID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnJldmlld0Zvcm0sIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcblx0XHRcdFx0PElucHV0IHsuLi5yZWdpc3RlcignbmFtZScpfSBwbGFjZWhvbGRlcj1cItCY0LzRj1wiPjwvSW5wdXQ+XHJcblx0XHRcdFx0PElucHV0IHsuLi5yZWdpc3RlcigndGl0bGUnKX0gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCI+PC9JbnB1dD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaXRpbmd9PlxyXG5cdFx0XHRcdFx0PHNwYW4+0J7RhtC10L3QutCwOjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxSYWl0aW5nIHJhaXRpbmc9ezB9IGlzRWRpdGFibGU9e3RydWV9PjwvUmFpdGluZz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8VGV4dGFyZWEgey4uLnJlZ2lzdGVyKFwiZGVzY3JpcHRpb25cIil9IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L7RgtC30YvQstCwXCI+PC9UZXh0YXJlYT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdH0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT4qINCf0LXRgNC10LQg0L/Rg9Cx0LvQuNC60LDRhtC40LXQuSDQvtGC0LfRi9CyINC/0YDQvtC50LTQtdGCINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90YPRjiDQvNC+0LTQtdGA0LDRhtC40Y4g0Lgg0L/RgNC+0LLQtdGA0LrRgzwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzVGl0bGV9PtCS0LDRiCDQvtGC0LfRi9CyINC+0YLQv9GA0LDQstC70LXQvTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PtCS0LDRiCDQvtGC0LfRi9CyINCx0YPQtNC10YIg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvSDQv9C+0YHQu9C1INC/0YDQvtCy0LXRgNC60Lg8L2Rpdj5cclxuXHRcdFx0XHQ8Q2xvc2VJY29uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfT48L0Nsb3NlSWNvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==