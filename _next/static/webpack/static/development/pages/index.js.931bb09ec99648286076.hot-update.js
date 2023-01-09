webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardContent */ "./src/components/CardContent.js");
/* harmony import */ var _actions_SetCardHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/SetCardHeight */ "./src/actions/SetCardHeight.js");
/* harmony import */ var _css_Card_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/Card.css */ "./src/components/css/Card.css");
/* harmony import */ var _css_Card_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Card_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Documents\\Websites\\resume\\dnah_resume\\src\\components\\Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Card extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateHeight", () => {
      const top = this.ref1 ? parseInt(getComputedStyle(this.ref1).top, 10) + parseInt(getComputedStyle(this.ref1).marginBottom, 10) : 0;
      const height = document.getElementById("card").clientHeight;
      this.props.SetCardHeight(top + height);
    });

    this.ref1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  render() {
    return __jsx("div", {
      className: "Card",
      id: "card",
      ref: r => this.ref1 = r,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, this.renderHeader(), Object(_CardContent__WEBPACK_IMPORTED_MODULE_3__["CardContent"])());
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener("resize", this.updateHeight);
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  componentWillUnmount() {
    this.updateHeight();
  }

  renderHeader() {
    return __jsx("div", {
      className: "Card-Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "Card-Header Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "Card-Header-Description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "Card-Header-Content ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, "Daniel Nahle"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    }, "Software Engineer"), __jsx("div", {
      style: {
        marginTop: '1em',
        marginLeft: '.1em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "Left-Icon-Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, __jsx("img", {
      width: "20px",
      height: "20px",
      alt: "mail",
      src: "https://i.imgur.com/xeKQNul.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 41
      }
    }), __jsx("a", {
      href: "mailto:danielnahle6@live.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 41
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 44
      }
    }, "danielnahle6@live.com"))), __jsx("div", {
      className: "Left-Icon-Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx("img", {
      width: "20px",
      height: "20px",
      alt: "phone",
      src: "https://i.imgur.com/16w84Ew.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    }), __jsx("a", {
      target: "_blank",
      href: "https://www.google.com/maps/place/Los+Angeles,+CA/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 41
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 44
      }
    }, "Los Angeles, CA"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  SetCardHeight: _actions_SetCardHeight__WEBPACK_IMPORTED_MODULE_4__["SetCardHeight"]
})(Card));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidG9wIiwicmVmMSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGllbnRIZWlnaHQiLCJTZXRDYXJkSGVpZ2h0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZW5kZXIiLCJyIiwicmVuZGVySGVhZGVyIiwiQ2FyZENvbnRlbnQiLCJjb21wb25lbnREaWRNb3VudCIsInVwZGF0ZUhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQyxNQUFNQSxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNkI7QUFHMUJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2QsVUFBTUEsS0FBTjs7QUFEYyxvSEFjSCxNQUFLO0FBQ2hCLFlBQU1DLEdBQUcsR0FBRyxLQUFLQyxJQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsS0FBS0YsSUFBTixDQUFoQixDQUE0QkQsR0FBN0IsRUFBa0MsRUFBbEMsQ0FBUixHQUFnREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLRixJQUFOLENBQWhCLENBQTRCRyxZQUE3QixFQUEyQyxFQUEzQyxDQUFyRSxHQUF1SCxDQUFuSTtBQUNBLFlBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxZQUEvQztBQUNBLFdBQUtULEtBQUwsQ0FBV1UsYUFBWCxDQUF5QlQsR0FBRyxHQUFDSyxNQUE3QjtBQUNILEtBbEJpQjs7QUFFZCxTQUFLSixJQUFMLEdBQVlTLDRDQUFLLENBQUNDLFNBQU4sRUFBWjtBQUNIOztBQUVEQyxRQUFNLEdBQUc7QUFDTCxXQUNJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsUUFBRSxFQUFDLE1BQXpCO0FBQWdDLFNBQUcsRUFBR0MsQ0FBRCxJQUFPLEtBQUtaLElBQUwsR0FBWVksQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLLEtBQUtDLFlBQUwsRUFETCxFQUVLQyxnRUFBVyxFQUZoQixDQURKO0FBTUg7O0FBUURDLG1CQUFpQixHQUFHO0FBQ2hCLFNBQUtDLFlBQUw7QUFDQUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLRixZQUF2QztBQUNIOztBQUVERyxvQkFBa0IsR0FBRztBQUNqQixTQUFLSCxZQUFMO0FBQ0g7O0FBRURJLHNCQUFvQixHQUFFO0FBQ2xCLFNBQUtKLFlBQUw7QUFDSDs7QUFFREgsY0FBWSxHQUFHO0FBQ1gsV0FDUTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixFQUdJO0FBQUssV0FBSyxFQUFFO0FBQUNRLGlCQUFTLEVBQUMsS0FBWDtBQUFrQkMsa0JBQVUsRUFBQztBQUE3QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUMsTUFBWDtBQUFrQixZQUFNLEVBQUMsTUFBekI7QUFBaUMsU0FBRyxFQUFDLE1BQXJDO0FBQTRDLFNBQUcsRUFBQyxpQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBRyxVQUFJLEVBQUMsOEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREgsQ0FGSixDQURKLEVBT0k7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssV0FBSyxFQUFDLE1BQVg7QUFBa0IsWUFBTSxFQUFDLE1BQXpCO0FBQWdDLFNBQUcsRUFBQyxPQUFwQztBQUE0QyxTQUFHLEVBQUMsaUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBbUIsVUFBSSxFQUFDLG9EQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESCxDQUZKLENBUEosQ0FISixDQURKLENBREosQ0FESixDQURSO0FBMEJIOztBQS9EeUI7O0FBb0VmQywwSEFBTyxDQUFDLElBQUQsRUFBTztBQUFDZixxRkFBYUE7QUFBZCxDQUFQLENBQVAsQ0FBK0JiLElBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjkzMWJiMDllYzk5NjQ4Mjg2MDc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Q2FyZENvbnRlbnR9IGZyb20gJy4vQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQge1NldENhcmRIZWlnaHR9IGZyb20gJy4uL2FjdGlvbnMvU2V0Q2FyZEhlaWdodCc7XHJcbmltcG9ydCAnLi9jc3MvQ2FyZC5jc3MnO1xyXG5cclxuXHJcbiBjbGFzcyBDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnJlZjEgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkXCIgaWQ9XCJjYXJkXCIgcmVmPXsocikgPT4gdGhpcy5yZWYxID0gcn0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXIoKX1cclxuICAgICAgICAgICAgICAgIHtDYXJkQ29udGVudCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhlaWdodCA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMucmVmMSAgPyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMucmVmMSkudG9wLCAxMCkgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMucmVmMSkubWFyZ2luQm90dG9tLCAxMCkgIDogMDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIikuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucHJvcHMuU2V0Q2FyZEhlaWdodCh0b3AraGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlSGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhlYWRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkLUhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZC1IZWFkZXIgQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZC1IZWFkZXItRGVzY3JpcHRpb25cIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmQtSGVhZGVyLUNvbnRlbnQgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5EYW5pZWwgTmFobGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Tb2Z0d2FyZSBFbmdpbmVlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonMWVtJywgbWFyZ2luTGVmdDonLjFlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWZ0LUljb24tVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyAgYWx0PVwibWFpbFwiIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20veGVLUU51bC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpkYW5pZWxuYWhsZTZAbGl2ZS5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5kYW5pZWxuYWhsZTZAbGl2ZS5jb208L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWZ0LUljb24tVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyBhbHQ9XCJwaG9uZVwiIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vMTZ3ODRFdy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9Mb3MrQW5nZWxlcywrQ0EvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9zIEFuZ2VsZXMsIENBPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwge1NldENhcmRIZWlnaHR9KShDYXJkKTsiXSwic291cmNlUm9vdCI6IiJ9