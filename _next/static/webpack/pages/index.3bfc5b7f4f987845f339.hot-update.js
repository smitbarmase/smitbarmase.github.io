webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");


var _jsxFileName = "/home/smitbarmase/smitbarmase/components/Card.tsx",
    _this = undefined;







var Card = function Card(props) {
  var title = props.title,
      img = props.img,
      live = props.live,
      visit = props.visit,
      createdAt = props.createdAt,
      info = props.info,
      tags = props.tags,
      isPlayStore = props.isPlayStore;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-white rounded shadow overflow-hidden transition-shadow hover:shadow-md",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-3 space-y-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex space-x-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-28 w-28 rounded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
          src: img,
          alt: title,
          layout: "fill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-1 flex flex-col justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "font-medium text-sm",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-xs text-gray-600",
              children: info
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-end space-x-2",
            children: [live && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              link: live,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsPlayFill"], {
                fontSize: 20,
                className: "mr-1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, _this), "Live"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, _this), isPlayStore ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              link: visit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoLogoGooglePlaystore"], {
                fontSize: 16,
                className: "m-1 mr-2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, _this), "Play Store"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              link: visit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_di__WEBPACK_IMPORTED_MODULE_3__["DiGithubBadge"], {
                fontSize: 22,
                className: "mr-1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this), "GitHub"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex gap-2 flex-wrap",
        children: tags.map(function (tag, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inline-block text-xs text-gray-600 bg-gray-50 border border-gray-200 py-1 px-3 rounded-full cursor-default hover:bg-gray-100",
            children: tag
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLnRzeCJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJ0aXRsZSIsImltZyIsImxpdmUiLCJ2aXNpdCIsImNyZWF0ZWRBdCIsImluZm8iLCJ0YWdzIiwiaXNQbGF5U3RvcmUiLCJtYXAiLCJ0YWciLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBUUEsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbkNDLEtBRG1DLEdBQzZCRCxLQUQ3QixDQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsR0FENEIsR0FDNkJGLEtBRDdCLENBQzVCRSxHQUQ0QjtBQUFBLE1BQ3ZCQyxJQUR1QixHQUM2QkgsS0FEN0IsQ0FDdkJHLElBRHVCO0FBQUEsTUFDakJDLEtBRGlCLEdBQzZCSixLQUQ3QixDQUNqQkksS0FEaUI7QUFBQSxNQUNWQyxTQURVLEdBQzZCTCxLQUQ3QixDQUNWSyxTQURVO0FBQUEsTUFDQ0MsSUFERCxHQUM2Qk4sS0FEN0IsQ0FDQ00sSUFERDtBQUFBLE1BQ09DLElBRFAsR0FDNkJQLEtBRDdCLENBQ09PLElBRFA7QUFBQSxNQUNhQyxXQURiLEdBQzZCUixLQUQ3QixDQUNhUSxXQURiO0FBRTNDLHNCQUNFO0FBQUssYUFBUyxFQUFDLDJFQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBRU4sR0FBWjtBQUFpQixhQUFHLEVBQUVELEtBQXRCO0FBQTZCLGdCQUFNLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUssbUJBQVMsRUFBQyxzQ0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0JBQXNDQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsd0JBQXdDSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBQyw0QkFBZjtBQUFBLHVCQUNHSCxJQUFJLGlCQUNILHFFQUFDLCtDQUFEO0FBQVEsa0JBQUksRUFBRUEsSUFBZDtBQUFBLHNDQUNFLHFFQUFDLHlEQUFEO0FBQVksd0JBQVEsRUFBRSxFQUF0QjtBQUEwQix5QkFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBT0dLLFdBQVcsZ0JBQ1YscUVBQUMsK0NBQUQ7QUFBUSxrQkFBSSxFQUFFSixLQUFkO0FBQUEsc0NBQ0UscUVBQUMscUVBQUQ7QUFBdUIsd0JBQVEsRUFBRSxFQUFqQztBQUFxQyx5QkFBUyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVLGdCQU1WLHFFQUFDLCtDQUFEO0FBQVEsa0JBQUksRUFBRUEsS0FBZDtBQUFBLHNDQUNFLHFFQUFDLDREQUFEO0FBQWUsd0JBQVEsRUFBRSxFQUF6QjtBQUE2Qix5QkFBUyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUErQkU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0JBQ0dHLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDhCQUNSO0FBRUUscUJBQVMsRUFBQyw4SEFGWjtBQUFBLHNCQUlHRDtBQUpILGFBQ09DLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQWhERDs7S0FBTVosSTtBQWtEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2JmYzViN2Y0Zjk4Nzg0NWYzMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5pbXBvcnQgeyBEaUdpdGh1YkJhZGdlIH0gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XG5pbXBvcnQgeyBJb0xvZ29Hb29nbGVQbGF5c3RvcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cbmltcG9ydCB7IEJzUGxheUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuaW1wb3J0IENhcmRJbnRlcmZhY2UgZnJvbSBcIi4uL2ludGVyZmFjZS9DYXJkSW50ZXJmYWNlXCI7XG5cbmludGVyZmFjZSBDYXJkUHJvcHMgZXh0ZW5kcyBDYXJkSW50ZXJmYWNlIHtcbiAgaXNQbGF5U3RvcmU/OiBib29sZWFuO1xufVxuXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGltZywgbGl2ZSwgdmlzaXQsIGNyZWF0ZWRBdCwgaW5mbywgdGFncywgaXNQbGF5U3RvcmUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tc2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgc3BhY2UteS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjggdy0yOCByb3VuZGVkXCI+PC9kaXY+XG5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGFsdD17dGl0bGV9IGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc21cIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwXCI+e2luZm99PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAge2xpdmUgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17bGl2ZX0+XG4gICAgICAgICAgICAgICAgICA8QnNQbGF5RmlsbCBmb250U2l6ZT17MjB9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgTGl2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7aXNQbGF5U3RvcmUgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsaW5rPXt2aXNpdH0+XG4gICAgICAgICAgICAgICAgICA8SW9Mb2dvR29vZ2xlUGxheXN0b3JlIGZvbnRTaXplPXsxNn0gY2xhc3NOYW1lPVwibS0xIG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgUGxheSBTdG9yZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gbGluaz17dmlzaXR9PlxuICAgICAgICAgICAgICAgICAgPERpR2l0aHViQmFkZ2UgZm9udFNpemU9ezIyfSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgZmxleC13cmFwXCI+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTYwMCBiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMSBweC0zIHJvdW5kZWQtZnVsbCBjdXJzb3ItZGVmYXVsdCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9