webpackHotUpdate_N_E("pages/courses/[alias]",{

/***/ "./layout/Menu/Menu.tsx":
/*!******************************!*\
  !*** ./layout/Menu/Menu.tsx ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/app.context */ "./context/app.context.tsx");
/* harmony import */ var _icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/courses.svg */ "./layout/Menu/icons/courses.svg");
/* harmony import */ var _icons_services_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/services.svg */ "./layout/Menu/icons/services.svg");
/* harmony import */ var _icons_books_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/books.svg */ "./layout/Menu/icons/books.svg");
/* harmony import */ var _icons_products_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/products.svg */ "./layout/Menu/icons/products.svg");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.module.css */ "./layout/Menu/Menu.module.css");
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interfaces/toppage.interface */ "./interfaces/toppage.interface.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\ccccc\\Desktop\\home__projects\\top-app\\layout\\Menu\\Menu.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var firstLevelMenu = [{
  route: "courses",
  name: "Курсы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_courses_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 46
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Courses
}, {
  route: "services",
  name: "Сервисы",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_services_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 49
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Services
}, {
  route: "books",
  name: "Книги",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_books_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 44
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Books
}, {
  route: "products",
  name: "Продукты",
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_products_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 50
  }, undefined),
  id: _interfaces_toppage_interface__WEBPACK_IMPORTED_MODULE_8__["TopLevelCategory"].Products
}];
var Menu = function Menu() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      menu = _useContext.menu,
      setMenu = _useContext.setMenu,
      firstCategory = _useContext.firstCategory;

  var buildFirstLevel = function buildFirstLevel() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: firstLevelMenu.map(function (menu) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/".concat(menu.route),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.fi),
              children: [menu.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: menu.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this)
        }, menu.route, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false);
  };

  var buildSecondLevel = function buildSecondLevel() {};

  var buildThirdLevel = function buildThirdLevel() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.menu,
    children: buildFirstLevel()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_s(Menu, "dpiMx+OJnXwQH5PEJrOxOYkvptM=");

_c = Menu;

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L01lbnUvTWVudS50c3giXSwibmFtZXMiOlsiZmlyc3RMZXZlbE1lbnUiLCJyb3V0ZSIsIm5hbWUiLCJpY29uIiwiaWQiLCJUb3BMZXZlbENhdGVnb3J5IiwiQ291cnNlcyIsIlNlcnZpY2VzIiwiQm9va3MiLCJQcm9kdWN0cyIsIk1lbnUiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm1lbnUiLCJzZXRNZW51IiwiZmlyc3RDYXRlZ29yeSIsImJ1aWxkRmlyc3RMZXZlbCIsIm1hcCIsImNuIiwic3R5bGVzIiwiZmkiLCJidWlsZFNlY29uZExldmVsIiwiYnVpbGRUaGlyZExldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFvQyxHQUFHLENBQ3pDO0FBQUVDLE9BQUssRUFBRSxTQUFUO0FBQW9CQyxNQUFJLEVBQUUsT0FBMUI7QUFBbUNDLE1BQUksZUFBRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpDO0FBQXNFQyxJQUFFLEVBQUVDLDhFQUFnQixDQUFDQztBQUEzRixDQUR5QyxFQUV6QztBQUFFTCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFLFNBQTNCO0FBQXNDQyxNQUFJLGVBQUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1QztBQUEyRUMsSUFBRSxFQUFFQyw4RUFBZ0IsQ0FBQ0U7QUFBaEcsQ0FGeUMsRUFHekM7QUFBRU4sT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUksRUFBRSxPQUF4QjtBQUFpQ0MsTUFBSSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkM7QUFBZ0VDLElBQUUsRUFBRUMsOEVBQWdCLENBQUNHO0FBQXJGLENBSHlDLEVBSXpDO0FBQUVQLE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUUsVUFBM0I7QUFBdUNDLE1BQUksZUFBRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTdDO0FBQTRFQyxJQUFFLEVBQUVDLDhFQUFnQixDQUFDSTtBQUFqRyxDQUp5QyxDQUE3QztBQU9PLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQW1CO0FBQUE7O0FBQUEsb0JBRU1DLHdEQUFVLENBQUNDLCtEQUFELENBRmhCO0FBQUEsTUFFM0JDLElBRjJCLGVBRTNCQSxJQUYyQjtBQUFBLE1BRXJCQyxPQUZxQixlQUVyQkEsT0FGcUI7QUFBQSxNQUVaQyxhQUZZLGVBRVpBLGFBRlk7O0FBSW5DLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQix3QkFDSTtBQUFBLGdCQUNNaEIsY0FBYyxDQUFDaUIsR0FBZixDQUFvQixVQUFBSixJQUFJO0FBQUEsNEJBQ3RCO0FBQUEsaUNBQ0k7QUFBRyxnQkFBSSxhQUFNQSxJQUFJLENBQUNaLEtBQVgsQ0FBUDtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBRWlCLGlEQUFFLENBQ2RDLHVEQUFNLENBQUNDLEVBRE8sQ0FBbEI7QUFBQSx5QkFHTVAsSUFBSSxDQUFDVixJQUhYLGVBSUk7QUFBQSwwQkFBUVUsSUFBSSxDQUFDWDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVVXLElBQUksQ0FBQ1osS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURzQjtBQUFBLE9BQXhCO0FBRE4scUJBREo7QUFnQkgsR0FqQkQ7O0FBbUJBLE1BQU1vQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU0sQ0FFOUIsQ0FGRDs7QUFJQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU0sQ0FFN0IsQ0FGRDs7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUgsdURBQU0sQ0FBQ04sSUFBdkI7QUFBQSxjQUNLRyxlQUFlO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBckNNOztHQUFNTixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdXJzZXMvW2FsaWFzXS5lMjhmMWJlOTk4YzljZWU5YzJiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hcHAuY29udGV4dFwiXHJcbmltcG9ydCB7IEZpcnN0TGV2ZWxNZW51SXRlbSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL21lbnUuaW50ZWZhY2VcIlxyXG5pbXBvcnQgQ291cnNlc0ljb24gZnJvbSBcIi4vaWNvbnMvY291cnNlcy5zdmdcIlxyXG5pbXBvcnQgU2VydmljZXNJY29uIGZyb20gXCIuL2ljb25zL3NlcnZpY2VzLnN2Z1wiXHJcbmltcG9ydCBCb29rc0ljb24gZnJvbSBcIi4vaWNvbnMvYm9va3Muc3ZnXCJcclxuaW1wb3J0IFByb2R1Y3RzSWNvbiBmcm9tIFwiLi9pY29ucy9wcm9kdWN0cy5zdmdcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IFRvcExldmVsQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90b3BwYWdlLmludGVyZmFjZVwiXHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcblxyXG5jb25zdCBmaXJzdExldmVsTWVudTogRmlyc3RMZXZlbE1lbnVJdGVtW10gPSBbXHJcbiAgICB7IHJvdXRlOiBcImNvdXJzZXNcIiwgbmFtZTogXCLQmtGD0YDRgdGLXCIsIGljb246IDxDb3Vyc2VzSWNvbj48L0NvdXJzZXNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyB9LFxyXG4gICAgeyByb3V0ZTogXCJzZXJ2aWNlc1wiLCBuYW1lOiBcItCh0LXRgNCy0LjRgdGLXCIsIGljb246IDxTZXJ2aWNlc0ljb24+PC9TZXJ2aWNlc0ljb24+LCBpZDogVG9wTGV2ZWxDYXRlZ29yeS5TZXJ2aWNlcyB9LFxyXG4gICAgeyByb3V0ZTogXCJib29rc1wiLCBuYW1lOiBcItCa0L3QuNCz0LhcIiwgaWNvbjogPEJvb2tzSWNvbj48L0Jvb2tzSWNvbj4sIGlkOiBUb3BMZXZlbENhdGVnb3J5LkJvb2tzIH0sXHJcbiAgICB7IHJvdXRlOiBcInByb2R1Y3RzXCIsIG5hbWU6IFwi0J/RgNC+0LTRg9C60YLRi1wiLCBpY29uOiA8UHJvZHVjdHNJY29uPjwvUHJvZHVjdHNJY29uPiwgaWQ6IFRvcExldmVsQ2F0ZWdvcnkuUHJvZHVjdHMgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWVudSwgc2V0TWVudSwgZmlyc3RDYXRlZ29yeSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkRmlyc3RMZXZlbCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdExldmVsTWVudS5tYXAoIG1lbnUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW51LnJvdXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke21lbnUucm91dGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmZpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1lbnUuaWNvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBtZW51Lm5hbWUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1aWxkU2Vjb25kTGV2ZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVpbGRUaGlyZExldmVsID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge2J1aWxkRmlyc3RMZXZlbCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==