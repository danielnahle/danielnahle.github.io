webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardContent */ "./src/components/CardContent.js");
/* harmony import */ var _actions_SetCardHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/SetCardHeight */ "./src/actions/SetCardHeight.js");
/* harmony import */ var _css_Card_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/Card.css */ "./src/components/css/Card.css");
/* harmony import */ var _css_Card_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Card_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Documents\\Websites\\resume\\dnah_resume\\src\\components\\Card.js";






class Card extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateHeight", () => {
      console.log(document.getElementById("card").getAttribute("style"));
      this.props.SetCardHeight(document.getElementById("card").clientHeight + 160);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card-Header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card-Header Container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card-Header-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: "inherit",
      alt: "profile image",
      src: "https://i.imgur.com/wMG2gAW.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card-Header-Description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Card-Header-Content ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Daniel Nahle"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Software Engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginTop: '1em',
        marginLeft: '.1em'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Left-Icon-Text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: "20px",
      height: "20px",
      alt: "mail",
      src: "https://i.imgur.com/xeKQNul.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "mailto:danielnahle6@live.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "danielnahle6@live.com"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Left-Icon-Text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: "20px",
      height: "20px",
      alt: "phone",
      src: "https://i.imgur.com/x0LkhNl.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "sms:3108506817",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "+1 (310) 850 6817"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Left-Icon-Text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: "20px",
      height: "20px",
      alt: "phone",
      src: "https://i.imgur.com/16w84Ew.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      href: "https://www.google.com/maps/place/Redondo+Beach,+CA/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Redondo Beach, CA"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  SetCardHeight: _actions_SetCardHeight__WEBPACK_IMPORTED_MODULE_4__["SetCardHeight"]
})(Card));

/***/ })

})
//# sourceMappingURL=index.js.9211b2a68ce1413bf9be.hot-update.js.map