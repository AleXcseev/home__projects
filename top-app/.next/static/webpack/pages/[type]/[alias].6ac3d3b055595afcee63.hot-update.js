webpackHotUpdate_N_E("pages/[type]/[alias]",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Product/Product.module.css":
/*!***********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Product/Product.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Product_product__j12ex {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: [start] 70px [logoend] 30px [titlestart] calc(50% - 100px) [middle] 1fr [pricestart] auto [priceend] 40px [creditstart] auto [creditend] 40px [ratestart] auto [end];\r\n\tmargin-bottom: 30px;\r\n\tpadding: 30px;\r\n}\r\n\r\n.Product_logo__3z5y8 {\r\n\tgrid-column: start / logoend;\r\n\tgrid-row: 1 / span 2;\r\n}\r\n\r\n.Product_title__yOJRp, .Product_tags__2oUt0 {\r\n\tgrid-column: titlestart / middle;\r\n}\r\n\r\n\r\n.Product_price__3fvYx, .Product_priceTitle__ZbTfu {\r\n\tgrid-column: pricestart / priceend;\r\n}\r\n\r\n.Product_credit__1z2mo, .Product_creditTitle__-2dg5 {\r\n\tgrid-column: creditstart / creditend;\r\n}\r\n\r\n.Product_raiting__2zddI, .Product_rateTitle__yDk8r {\r\n\tgrid-column: ratestart / end;\r\n}\r\n\r\n.Product_hr__31mKj, .Product_description__5N5oC, .Product_actions__1QRFO {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.Product_feature__1k8VA {\r\n\tgrid-column: start / middle;\r\n}\r\n\r\n.Product_advBlock__3iL2I {\r\n\tgrid-column: middle / end;\r\n}\r\n\r\n.Product_logo__3z5y8 img {\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.Product_title__yOJRp {\r\n\tfont-weight: 600;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\talign-self: flex-end;\r\n}\r\n\r\n.Product_price__3fvYx, .Product_credit__1z2mo {\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\talign-self: flex-end;\r\n}\r\n\r\n.Product_raiting__2zddI {\r\n\talign-self: flex-end;\r\n\r\n}\r\n\r\n.Product_priceTitle__ZbTfu, .Product_creditTitle__-2dg5, .Product_rateTitle__yDk8r {\r\n\tfont-weight: 300;\r\n\tfont-size: 14px;\r\n\tline-height: 19px;\r\n}\r\n\r\n.Product_month__3Em86 {\r\n\tfont-size: 14px;\r\n\tline-height: 19px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/Product/Product.module.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,2LAA2L;CAC3L,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,4BAA4B;CAC5B,oBAAoB;AACrB;;AAEA;CACC,gCAAgC;AACjC;;;AAGA;CACC,kCAAkC;AACnC;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;;AAErB;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB","sourcesContent":[".product {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: [start] 70px [logoend] 30px [titlestart] calc(50% - 100px) [middle] 1fr [pricestart] auto [priceend] 40px [creditstart] auto [creditend] 40px [ratestart] auto [end];\r\n\tmargin-bottom: 30px;\r\n\tpadding: 30px;\r\n}\r\n\r\n.logo {\r\n\tgrid-column: start / logoend;\r\n\tgrid-row: 1 / span 2;\r\n}\r\n\r\n.title, .tags {\r\n\tgrid-column: titlestart / middle;\r\n}\r\n\r\n\r\n.price, .priceTitle {\r\n\tgrid-column: pricestart / priceend;\r\n}\r\n\r\n.credit, .creditTitle {\r\n\tgrid-column: creditstart / creditend;\r\n}\r\n\r\n.raiting, .rateTitle {\r\n\tgrid-column: ratestart / end;\r\n}\r\n\r\n.hr, .description, .actions {\r\n\tgrid-column: start / end;\r\n}\r\n\r\n.feature {\r\n\tgrid-column: start / middle;\r\n}\r\n\r\n.advBlock {\r\n\tgrid-column: middle / end;\r\n}\r\n\r\n.logo img {\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.title {\r\n\tfont-weight: 600;\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\talign-self: flex-end;\r\n}\r\n\r\n.price, .credit {\r\n\tfont-size: 20px;\r\n\tline-height: 27px;\r\n\talign-self: flex-end;\r\n}\r\n\r\n.raiting {\r\n\talign-self: flex-end;\r\n\r\n}\r\n\r\n.priceTitle, .creditTitle, .rateTitle {\r\n\tfont-weight: 300;\r\n\tfont-size: 14px;\r\n\tline-height: 19px;\r\n}\r\n\r\n.month {\r\n\tfont-size: 14px;\r\n\tline-height: 19px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"product": "Product_product__j12ex",
	"logo": "Product_logo__3z5y8",
	"title": "Product_title__yOJRp",
	"tags": "Product_tags__2oUt0",
	"price": "Product_price__3fvYx",
	"priceTitle": "Product_priceTitle__ZbTfu",
	"credit": "Product_credit__1z2mo",
	"creditTitle": "Product_creditTitle__-2dg5",
	"raiting": "Product_raiting__2zddI",
	"rateTitle": "Product_rateTitle__yDk8r",
	"hr": "Product_hr__31mKj",
	"description": "Product_description__5N5oC",
	"actions": "Product_actions__1QRFO",
	"feature": "Product_feature__1k8VA",
	"advBlock": "Product_advBlock__3iL2I",
	"month": "Product_month__3Em86"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLG9CQUFvQixrTUFBa00sMEJBQTBCLG9CQUFvQixLQUFLLDhCQUE4QixtQ0FBbUMsMkJBQTJCLEtBQUsscURBQXFELHVDQUF1QyxLQUFLLCtEQUErRCx5Q0FBeUMsS0FBSyw2REFBNkQsMkNBQTJDLEtBQUssNERBQTRELG1DQUFtQyxLQUFLLGtGQUFrRiwrQkFBK0IsS0FBSyxpQ0FBaUMsa0NBQWtDLEtBQUssa0NBQWtDLGdDQUFnQyxLQUFLLGtDQUFrQyx5QkFBeUIsS0FBSywrQkFBK0IsdUJBQXVCLHNCQUFzQix3QkFBd0IsMkJBQTJCLEtBQUssdURBQXVELHNCQUFzQix3QkFBd0IsMkJBQTJCLEtBQUssaUNBQWlDLDJCQUEyQixTQUFTLDRGQUE0Rix1QkFBdUIsc0JBQXNCLHdCQUF3QixLQUFLLCtCQUErQixzQkFBc0Isd0JBQXdCLEtBQUssZUFBZSxzR0FBc0csVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxvQ0FBb0Msb0JBQW9CLGtNQUFrTSwwQkFBMEIsb0JBQW9CLEtBQUssZUFBZSxtQ0FBbUMsMkJBQTJCLEtBQUssdUJBQXVCLHVDQUF1QyxLQUFLLGlDQUFpQyx5Q0FBeUMsS0FBSywrQkFBK0IsMkNBQTJDLEtBQUssOEJBQThCLG1DQUFtQyxLQUFLLHFDQUFxQywrQkFBK0IsS0FBSyxrQkFBa0Isa0NBQWtDLEtBQUssbUJBQW1CLGdDQUFnQyxLQUFLLG1CQUFtQix5QkFBeUIsS0FBSyxnQkFBZ0IsdUJBQXVCLHNCQUFzQix3QkFBd0IsMkJBQTJCLEtBQUsseUJBQXlCLHNCQUFzQix3QkFBd0IsMkJBQTJCLEtBQUssa0JBQWtCLDJCQUEyQixTQUFTLCtDQUErQyx1QkFBdUIsc0JBQXNCLHdCQUF3QixLQUFLLGdCQUFnQixzQkFBc0Isd0JBQXdCLEtBQUssMkJBQTJCO0FBQzlxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1t0eXBlXS9bYWxpYXNdLjZhYzNkM2IwNTU1OTVhZmNlZTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUHJvZHVjdF9wcm9kdWN0X19qMTJleCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtzdGFydF0gNzBweCBbbG9nb2VuZF0gMzBweCBbdGl0bGVzdGFydF0gY2FsYyg1MCUgLSAxMDBweCkgW21pZGRsZV0gMWZyIFtwcmljZXN0YXJ0XSBhdXRvIFtwcmljZWVuZF0gNDBweCBbY3JlZGl0c3RhcnRdIGF1dG8gW2NyZWRpdGVuZF0gNDBweCBbcmF0ZXN0YXJ0XSBhdXRvIFtlbmRdO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuXFx0cGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RfbG9nb19fM3o1eTgge1xcclxcblxcdGdyaWQtY29sdW1uOiBzdGFydCAvIGxvZ29lbmQ7XFxyXFxuXFx0Z3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0X3RpdGxlX195T0pScCwgLlByb2R1Y3RfdGFnc19fMm9VdDAge1xcclxcblxcdGdyaWQtY29sdW1uOiB0aXRsZXN0YXJ0IC8gbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uUHJvZHVjdF9wcmljZV9fM2Z2WXgsIC5Qcm9kdWN0X3ByaWNlVGl0bGVfX1piVGZ1IHtcXHJcXG5cXHRncmlkLWNvbHVtbjogcHJpY2VzdGFydCAvIHByaWNlZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF9jcmVkaXRfXzF6Mm1vLCAuUHJvZHVjdF9jcmVkaXRUaXRsZV9fLTJkZzUge1xcclxcblxcdGdyaWQtY29sdW1uOiBjcmVkaXRzdGFydCAvIGNyZWRpdGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RfcmFpdGluZ19fMnpkZEksIC5Qcm9kdWN0X3JhdGVUaXRsZV9feURrOHIge1xcclxcblxcdGdyaWQtY29sdW1uOiByYXRlc3RhcnQgLyBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0X2hyX18zMW1LaiwgLlByb2R1Y3RfZGVzY3JpcHRpb25fXzVONW9DLCAuUHJvZHVjdF9hY3Rpb25zX18xUVJGTyB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF9mZWF0dXJlX18xazhWQSB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IHN0YXJ0IC8gbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF9hZHZCbG9ja19fM2lMMkkge1xcclxcblxcdGdyaWQtY29sdW1uOiBtaWRkbGUgLyBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0X2xvZ29fXzN6NXk4IGltZyB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF90aXRsZV9feU9KUnAge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF9wcmljZV9fM2Z2WXgsIC5Qcm9kdWN0X2NyZWRpdF9fMXoybW8ge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjdweDtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RfcmFpdGluZ19fMnpkZEkge1xcclxcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdF9wcmljZVRpdGxlX19aYlRmdSwgLlByb2R1Y3RfY3JlZGl0VGl0bGVfXy0yZGc1LCAuUHJvZHVjdF9yYXRlVGl0bGVfX3lEazhyIHtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RfbW9udGhfXzNFbTg2IHtcXHJcXG5cXHRmb250LXNpemU6IDE0cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDJMQUEyTDtDQUMzTCxtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7O0FBR0E7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLG9CQUFvQjs7QUFFckI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2R1Y3Qge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdIDcwcHggW2xvZ29lbmRdIDMwcHggW3RpdGxlc3RhcnRdIGNhbGMoNTAlIC0gMTAwcHgpIFttaWRkbGVdIDFmciBbcHJpY2VzdGFydF0gYXV0byBbcHJpY2VlbmRdIDQwcHggW2NyZWRpdHN0YXJ0XSBhdXRvIFtjcmVkaXRlbmRdIDQwcHggW3JhdGVzdGFydF0gYXV0byBbZW5kXTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogc3RhcnQgLyBsb2dvZW5kO1xcclxcblxcdGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUsIC50YWdzIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogdGl0bGVzdGFydCAvIG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaWNlLCAucHJpY2VUaXRsZSB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IHByaWNlc3RhcnQgLyBwcmljZWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWRpdCwgLmNyZWRpdFRpdGxlIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogY3JlZGl0c3RhcnQgLyBjcmVkaXRlbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYWl0aW5nLCAucmF0ZVRpdGxlIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogcmF0ZXN0YXJ0IC8gZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaHIsIC5kZXNjcmlwdGlvbiwgLmFjdGlvbnMge1xcclxcblxcdGdyaWQtY29sdW1uOiBzdGFydCAvIGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmUge1xcclxcblxcdGdyaWQtY29sdW1uOiBzdGFydCAvIG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkdkJsb2NrIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogbWlkZGxlIC8gZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjdweDtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlLCAuY3JlZGl0IHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYWl0aW5nIHtcXHJcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlVGl0bGUsIC5jcmVkaXRUaXRsZSwgLnJhdGVUaXRsZSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRmb250LXNpemU6IDE0cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5tb250aCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwcm9kdWN0XCI6IFwiUHJvZHVjdF9wcm9kdWN0X19qMTJleFwiLFxuXHRcImxvZ29cIjogXCJQcm9kdWN0X2xvZ29fXzN6NXk4XCIsXG5cdFwidGl0bGVcIjogXCJQcm9kdWN0X3RpdGxlX195T0pScFwiLFxuXHRcInRhZ3NcIjogXCJQcm9kdWN0X3RhZ3NfXzJvVXQwXCIsXG5cdFwicHJpY2VcIjogXCJQcm9kdWN0X3ByaWNlX18zZnZZeFwiLFxuXHRcInByaWNlVGl0bGVcIjogXCJQcm9kdWN0X3ByaWNlVGl0bGVfX1piVGZ1XCIsXG5cdFwiY3JlZGl0XCI6IFwiUHJvZHVjdF9jcmVkaXRfXzF6Mm1vXCIsXG5cdFwiY3JlZGl0VGl0bGVcIjogXCJQcm9kdWN0X2NyZWRpdFRpdGxlX18tMmRnNVwiLFxuXHRcInJhaXRpbmdcIjogXCJQcm9kdWN0X3JhaXRpbmdfXzJ6ZGRJXCIsXG5cdFwicmF0ZVRpdGxlXCI6IFwiUHJvZHVjdF9yYXRlVGl0bGVfX3lEazhyXCIsXG5cdFwiaHJcIjogXCJQcm9kdWN0X2hyX18zMW1LalwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdF9kZXNjcmlwdGlvbl9fNU41b0NcIixcblx0XCJhY3Rpb25zXCI6IFwiUHJvZHVjdF9hY3Rpb25zX18xUVJGT1wiLFxuXHRcImZlYXR1cmVcIjogXCJQcm9kdWN0X2ZlYXR1cmVfXzFrOFZBXCIsXG5cdFwiYWR2QmxvY2tcIjogXCJQcm9kdWN0X2FkdkJsb2NrX18zaUwySVwiLFxuXHRcIm1vbnRoXCI6IFwiUHJvZHVjdF9tb250aF9fM0VtODZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9