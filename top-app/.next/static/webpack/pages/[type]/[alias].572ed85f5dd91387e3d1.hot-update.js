webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./components/Product/Product.tsx":
/*!****************************************!*\
  !*** ./components/Product/Product.tsx ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.module.css */ "./components/Product/Product.module.css");
/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./components/index.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./helpers/helpers.tsx");



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\components\\Product\\Product.tsx",
    _this = undefined;





var Product = function Product(_ref) {
  var _product$reviewAvg;

  var product = _ref.product,
      className = _ref.className,
      props = Object(C_Users_ccccc_Desktop_home_projects_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["product", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.product,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://courses-top.ru" + product.image,
        alt: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: product.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.price,
      children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.credit,
      children: Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__["priceRu"])(product.credit)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raiting,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Raiting"], {
        raiting: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRaiting
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tags,
      children: product.categories.map(function (c) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Tag"], {
          color: "ghost",
          children: c
        }, c, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.priceTitle,
      children: "\u0446\u0435\u043D\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.creditTitle,
      children: "\u043A\u0440\u0435\u0434\u0438\u0442"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.rateTitle,
      children: [product.reviewCount, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.feature,
      children: "\u0444\u0438\u0447\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.advantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.advantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.disadvantages,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: product.disadvantages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hr,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Product_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "primary",
        children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_4__["Button"], {
        appearance: "ghost",
        arrow: 'right',
        children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};
_c = Product;

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJzdHlsZXMiLCJsb2dvIiwicHJvY2VzcyIsImltYWdlIiwidGl0bGUiLCJwcmljZSIsInByaWNlUnUiLCJjcmVkaXQiLCJyYWl0aW5nIiwicmV2aWV3QXZnIiwiaW5pdGlhbFJhaXRpbmciLCJ0YWdzIiwiY2F0ZWdvcmllcyIsIm1hcCIsImMiLCJwcmljZVRpdGxlIiwiY3JlZGl0VGl0bGUiLCJyYXRlVGl0bGUiLCJyZXZpZXdDb3VudCIsImhyIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiYWR2QmxvY2siLCJhZHZhbnRhZ2VzIiwiZGlzYWR2YW50YWdlcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUU7QUFBQTs7QUFBQSxNQUE5REMsT0FBOEQsUUFBOURBLE9BQThEO0FBQUEsTUFBckRDLFNBQXFELFFBQXJEQSxTQUFxRDtBQUFBLE1BQXZDQyxLQUF1Qzs7QUFDdkYsc0JBQ0MscUVBQUMsc0NBQUQ7QUFBTSxhQUFTLEVBQUVDLDBEQUFNLENBQUNILE9BQXhCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVHLDBEQUFNLENBQUNDLElBQXZCO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUVDLHdCQUFBLEdBQWlDTCxPQUFPLENBQUNNLEtBQW5EO0FBQTBELFdBQUcsRUFBRU4sT0FBTyxDQUFDTztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBSUM7QUFBSyxlQUFTLEVBQUVKLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsZ0JBQ0VQLE9BQU8sQ0FBQ087QUFEVjtBQUFBO0FBQUE7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QUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLHdDQUFEO0FBQVEsa0JBQVUsRUFBQyxPQUFuQjtBQUEyQixhQUFLLEVBQUUsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF5REEsQ0ExRE07S0FBTTdCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3R5cGVdL1thbGlhc10uNTcyZWQ4NWY1ZGQ5MTM4N2UzZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RQcm9wcyB9IGZyb20gXCIuL1Byb2R1Y3QucHJvcHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSYWl0aW5nLCBUYWcgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgcHJpY2VSdSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBQcm9kdWN0UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG5cdFx0XHRcdDxpbWcgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ET01BSU4gKyBwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuXHRcdFx0XHR7cHJvZHVjdC50aXRsZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlxyXG5cdFx0XHRcdHtwcmljZVJ1KHByb2R1Y3QucHJpY2UpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXR9PlxyXG5cdFx0XHRcdHtwcmljZVJ1KHByb2R1Y3QuY3JlZGl0KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFpdGluZ30+XHJcblx0XHRcdFx0PFJhaXRpbmcgcmFpdGluZz17cHJvZHVjdC5yZXZpZXdBdmcgPz8gcHJvZHVjdC5pbml0aWFsUmFpdGluZ30+PC9SYWl0aW5nPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5jYXRlZ29yaWVzLm1hcCggYyA9PiA8VGFnIGtleT17Y30gY29sb3I9XCJnaG9zdFwiPntjfTwvVGFnPil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlVGl0bGV9PlxyXG5cdFx0XHRcdNGG0LXQvdCwXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdFRpdGxlfT5cclxuXHRcdFx0XHTQutGA0LXQtNC40YJcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0ZVRpdGxlfT5cclxuXHRcdFx0XHR7cHJvZHVjdC5yZXZpZXdDb3VudH0g0L7RgtC30YvQstC+0LJcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmV9PlxyXG5cdFx0XHRcdNGE0LjRh9C4XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdkJsb2NrfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFudGFnZXN9PlxyXG5cdFx0XHRcdFx0PGRpdj7Qn9GA0LXQuNC80YPRidC10YHRgtCy0LA8L2Rpdj5cdFxyXG5cdFx0XHRcdFx0PGRpdj57cHJvZHVjdC5hZHZhbnRhZ2VzfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWR2YW50YWdlc30+XHJcblx0XHRcdFx0XHQ8ZGl2PtCd0LXQtNC+0YHRgtCw0YLQutC4PC9kaXY+XHRcclxuXHRcdFx0XHRcdDxkaXY+e3Byb2R1Y3QuZGlzYWR2YW50YWdlc308L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaHJ9PlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cclxuXHRcdFx0XHQ8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCI+0KPQt9C90LDRgtGMINC/0L7QtNGA0L7QsdC90LXQtTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gYXBwZWFyYW5jZT1cImdob3N0XCIgYXJyb3c9eydyaWdodCd9PtCn0LjRgtCw0YLRjCDQvtGC0LfRi9Cy0Ys8L0J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0NhcmQ+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==