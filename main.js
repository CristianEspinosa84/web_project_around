/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = /*#__PURE__*/function () {
  function Card(title, link, handleCardClick) {
    var selector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".template-card";
    _classCallCheck(this, Card);
    this.title = title;
    this.link = link;
    this.handleCardClick = handleCardClick;
    this.templateCard = document.querySelector(selector);
  }
  return _createClass(Card, [{
    key: "_getCardClone",
    value: function _getCardClone() {
      this.card = this.templateCard.content.querySelector(".element").cloneNode(true);
    }
  }, {
    key: "_setProperties",
    value: function _setProperties() {
      var cardImage = this.card.querySelector(".element__image");
      var cardTitle = this.card.querySelector(".element__title");
      var likebutton = this.card.querySelector(".element__like");
      var trashButton = this.card.querySelector(".element__trash");
      cardImage.src = this.link;
      cardImage.alt = this.title;
      cardTitle.textContent = this.title;
      this.likebutton = likebutton;
      this.trashButton = trashButton;
      this.cardImage = cardImage;
    }
  }, {
    key: "_setEventListenders",
    value: function _setEventListenders() {
      var _this = this;
      this.likebutton.addEventListener("click", function () {
        _this.likebutton.classList.toggle("element__like-black");
      });
      this.trashButton.addEventListener("click", function () {
        _this.card.remove();
      });
      this.cardImage.addEventListener("click", function () {
        _this.handleCardClick(_this.link, _this.title);
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._getCardClone();
      this._setProperties();
      this._setEventListenders();
      return this.card;
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings) {
    _classCallCheck(this, FormValidator);
    this.settings = settings;
  }
  return _createClass(FormValidator, [{
    key: "showInputError",
    value: function showInputError(formPopup, inputElement, errorMessage) {
      var errorElement = formPopup.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.add(this.settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.settings.errorClass);
    }
  }, {
    key: "hideInputError",
    value: function hideInputError(formPopup, inputElement) {
      var errorElement = formPopup.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this.settings.inputErrorClass);
      errorElement.classList.remove(this.settings.errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "checkInputValidity",
    value: function checkInputValidity(formPopup, inputElement) {
      if (!inputElement.validity.valid) {
        this.showInputError(formPopup, inputElement, inputElement.validationMessage);
      } else {
        this.hideInputError(formPopup, inputElement);
      }
      this.buttonDisable(formPopup);
    }
  }, {
    key: "buttonDisable",
    value: function buttonDisable(formPopup) {
      var submitButton = formPopup.querySelector(this.settings.submitButtonSelector);
      var inputList = formPopup.querySelectorAll(this.settings.inputSelector);
      var allValid = Array.from(inputList).every(function (input) {
        return input.validity.valid;
      });
      if (allValid) {
        submitButton.classList.remove(this.settings.inactiveButtonClass);
        submitButton.removeAttribute("disabled");
      } else {
        submitButton.classList.add(this.settings.inactiveButtonClass);
        submitButton.setAttribute("disabled", true);
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners(formPopup) {
      var _this = this;
      var inputList = Array.from(formPopup.querySelectorAll(this.settings.inputSelector));
      inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this.checkInputValidity(formPopup, inputElement);
        });
      });
      this.buttonDisable(formPopup);
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var _this2 = this;
      var formList = Array.from(document.querySelectorAll(this.settings.formSelector));
      formList.forEach(function (formPopup) {
        formPopup.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });
        _this2.setEventListeners(formPopup);
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/Popup.js":
/*!******************************!*\
  !*** ./src/scripts/Popup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._overlay = document.querySelector(".overlay"); // Asume que hay un overlay global
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add("popup__opened");
      this._popup.classList.remove("closed-window", "popup-closed");
      this._overlay.classList.add("popup__opened"); // Muestra el overlay
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("popup__opened");
      this._popup.classList.add("closed-window", "popup-closed");
      this._overlay.classList.remove("popup__opened"); // Oculta el overlay
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      var closeButton = this._popup.querySelector(".popup__close") || this._popup.querySelector(".form__close");
      closeButton.addEventListener("click", function () {
        return _this.close();
      });

      // Cierra el popup al hacer clic fuera del formulario (en el área sombreada del popup o en el overlay)
      this._popup.addEventListener("click", function (event) {
        if (event.target === _this._popup || event.target === _this._overlay) {
          _this.close();
        }
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/PopupWithForm.js":
/*!**************************************!*\
  !*** ./src/scripts/PopupWithForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _callSuper(this, PopupWithForm, [popupSelector]);
    _this._handleFormSubmit = handleFormSubmit; // Callback para manejar el envío del formulario
    _this._form = _this._popup.querySelector(".form__popup"); // Selecciona el formulario dentro del popup
    _this._inputList = _this._form.querySelectorAll("input"); // Selecciona todos los inputs del formulario
    return _this;
  }

  // Recopila los valores de los campos de entrada
  _inherits(PopupWithForm, _Popup);
  return _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};
      this._inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });
      return formValues;
    }

    // Agrega los eventListeners necesarios
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _superPropGet(PopupWithForm, "setEventListeners", this, 3)([]); // Llama al setEventListeners() de Popup para el botón de cerrar

      // Agrega el evento submit al formulario
      this._form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el comportamiento de recarga del formulario
        _this2._handleFormSubmit(_this2._getInputValues()); // Llama al callback con los datos del formulario
        _this2.close();
      });
    }

    // Cierra el popup y reinicia el formulario
  }, {
    key: "close",
    value: function close() {
      _superPropGet(PopupWithForm, "close", this, 3)([]); // Llama al método close() de Popup para cerrar el popup
      this._form.reset(); // Reinicia el formulario, limpiando todos los campos
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/PopupWithImage.js":
/*!***************************************!*\
  !*** ./src/scripts/PopupWithImage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _callSuper(this, PopupWithImage, [popupSelector]);
    _this._image = _this._popup.querySelector(".popup__picture"); // Selecciona el elemento de la imagen
    _this._caption = _this._popup.querySelector(".popup__title"); // Selecciona el elemento de la leyenda
    return _this;
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "open",
    value: function open(imageSrc, imageCaption) {
      this._image.src = imageSrc; // Establece la URL de la imagen
      this._image.alt = imageCaption; // Usa la leyenda como texto alternativo para la accesibilidad
      this._caption.textContent = imageCaption; // Añade el texto de la leyenda
      _superPropGet(PopupWithImage, "open", this, 3)([]); // Llama al método open() de la clase Popup para abrir el popup
    }
  }]);
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/Section.js":
/*!********************************!*\
  !*** ./src/scripts/Section.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref) {
    var items = _ref.items,
      renderer = _ref.renderer;
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".elements";
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }
  return _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/UserInfo.js":
/*!*********************************!*\
  !*** ./src/scripts/UserInfo.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profile__name = _ref.profile__name,
      profile__about = _ref.profile__about;
    _classCallCheck(this, UserInfo);
    this.profile__name = document.querySelector(profile__name); // Selecciona el elemento del nombre
    this.profile__about = document.querySelector(profile__about); // Selecciona el elemento de la ocupación
  }
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this.profile__name.textContent,
        // Devuelve el texto del elemento de nombre
        about: this.profile__about.textContent // Devuelve el texto del elemento de ocupación
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about;
      this.profile__name.textContent = name; // Actualiza el nombre del usuario
      this.profile__about.textContent = about; // Actualiza la ocupación del usuario
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/Utils.js":
/*!******************************!*\
  !*** ./src/scripts/Utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Utils; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Utils = /*#__PURE__*/function () {
  function Utils(settings) {
    var _this = this;
    _classCallCheck(this, Utils);
    _defineProperty(this, "completeFormElement", function (evt) {
      evt.preventDefault();
      if (_this.inputName.value.trim() === "" || _this.inputAbout.value.trim() === "") {
        return;
      }
      _this.profileNameElement.textContent = _this.inputName.value;
      _this.profileAboutElement.textContent = _this.inputAbout.value;
      _this.closeForm();
    });
    this.formSection = settings.formSection;
    this.overlay = settings.overlay;
    this.inputName = settings.inputName;
    this.inputAbout = settings.inputAbout;
    this.profileNameElement = settings.profileNameElement;
    this.profileAboutElement = settings.profileAboutElement;
  }
  return _createClass(Utils, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      this.formSection.addEventListener("submit", this.completeFormElement.bind(this));
    }
  }, {
    key: "setPopupCloseMethod",
    value: function setPopupCloseMethod(closeForm) {
      this.closeForm = closeForm;
    }
  }, {
    key: "setPopupCloseMethodCard",
    value: function setPopupCloseMethodCard(closeAddCard) {
      this.closeAddCard = closeAddCard;
    }
  }]);
}();


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Card.js */ "./src/scripts/Card.js");
/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/FormValidator.js */ "./src/scripts/FormValidator.js");
/* harmony import */ var _scripts_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Section.js */ "./src/scripts/Section.js");
/* harmony import */ var _scripts_Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Utils.js */ "./src/scripts/Utils.js");
/* harmony import */ var _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/PopupWithForm.js */ "./src/scripts/PopupWithForm.js");
/* harmony import */ var _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/PopupWithImage.js */ "./src/scripts/PopupWithImage.js");
/* harmony import */ var _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/UserInfo.js */ "./src/scripts/UserInfo.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");








var overlay = document.querySelector(".overlay");
var profilSelection = document.querySelector(".profile");
var profileNameElement = document.querySelector(".profile__name");
var profileAboutElement = document.querySelector(".profile__about");
var profileEditButton = document.querySelector(".profile__edit");
var formSection = document.querySelector(".form");
var formPopup = document.querySelector(".form__popup");
var inputName = document.querySelector(".form__name");
var inputAbout = document.querySelector(".form__about");
var inputElement = document.querySelector(".form__input");
var closeButton = formSection.querySelector(".form__close");
var formButton = document.querySelector(".form__button");
var addCardButton = document.querySelector(".profile__button");
var popudAddCard = document.querySelector("#addcard-popud");
var closeButtonAddCard = document.querySelector("#addcard-close");
var templateCard = document.querySelector(".template-card");
var cardArea = document.querySelector(".elements");
var addInpuntTitle = document.querySelector("#addcard-title");
var addInpuntUrl = document.querySelector("#addcard-url");
var addCardForm = document.querySelector("#addcard-form");
var popupOpenImage = document.querySelector("#popup__image");
var popupCloseImge = document.querySelector(".popup__close");
var closedAll = document.querySelector(".page");
var initialCards = [{
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
}, {
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
}, {
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
}, {
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}];
function handleCardClick(link, title) {
  popupWithImage.open(link, title); // Abre el popup de imagen con el link y título
}
var popupWithImage = new _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]("#popup__image");
popupWithImage.setEventListeners();
var cardList = new _scripts_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  items: initialCards,
  renderer: function renderer(element) {
    var newCard = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"](element.name, element.link, handleCardClick);
    var cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  }
}, ".elements");
cardList.renderItems();
function addCardSubmit(formData) {
  // Crear la tarjeta utilizando los datos del formulario
  var newCard = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"](formData.title, formData.link, handleCardClick);
  var cardElement = newCard.generateCard();
  cardList.addItem(cardElement);

  // Cierra el popup y reinicia el formulario
  addCardPopup.close(); // Cambiado a cerrar el popup de añadir tarjeta directamente
}
var validationSettings = {
  formSelector: ".form__popup",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__error_visible"
};
var formValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](validationSettings);
formValidator.enableValidation();
var utilsSettings = {
  formSection: formSection,
  overlay: overlay,
  inputName: inputName,
  inputAbout: inputAbout,
  profileNameElement: profileNameElement,
  profileAboutElement: profileAboutElement,
  profileEditButton: profileEditButton,
  closeButton: closeButton,
  formButton: formButton,
  addCardButton: addCardButton,
  closeButtonAddCard: closeButtonAddCard,
  popudAddCard: popudAddCard,
  cardPopupSelector: "#addcard-popud",
  imagePopupSelector: "#popup__image",
  profilePopupSelector: "#profile-popup"
};

// Instancia para editar perfil
var userInfo = new _scripts_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  profile__name: ".profile__name",
  profile__about: ".profile__about"
});
function handleProfileFormSubmit(_ref) {
  var name = _ref.name,
    about = _ref.about;
  userInfo.setUserInfo({
    name: name,
    about: about
  });
}
var editProfilePopup = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]("#profile__popup", handleProfileFormSubmit);
editProfilePopup.setEventListeners();
profileEditButton.addEventListener("click", function () {
  editProfilePopup.open();
});

// Instancia para añadir tarjeta
var addCardPopup = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]("#addcard-popud", addCardSubmit);
addCardPopup.setEventListeners();
addCardButton.addEventListener("click", function () {
  addCardPopup.open();
});
profileEditButton.addEventListener("click", function () {
  var _userInfo$getUserInfo = userInfo.getUserInfo(),
    name = _userInfo$getUserInfo.name,
    about = _userInfo$getUserInfo.about;
  document.querySelector("#name").value = name;
  document.querySelector("#about").value = about;
  editProfilePopup.open();
});
var settingsUtils = new _scripts_Utils_js__WEBPACK_IMPORTED_MODULE_3__["default"](utilsSettings);
settingsUtils.setEventListeners();
settingsUtils.setPopupCloseMethod(editProfilePopup.close.bind(editProfilePopup));
settingsUtils.setPopupCloseMethodCard(addCardPopup.close.bind(addCardPopup));
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDNUN0RixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ0csS0FBSyxHQUFHMkcsS0FBSztFQUM5QzhDLGdCQUFnQixDQUFDdkYsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsSUFBTXlGLGFBQWEsR0FBRyxJQUFJN0MseURBQUssQ0FBQ3FDLGFBQWEsQ0FBQztBQUM5Q1EsYUFBYSxDQUFDdkcsaUJBQWlCLENBQUMsQ0FBQztBQUNqQ3VHLGFBQWEsQ0FBQ2xDLG1CQUFtQixDQUMvQmdDLGdCQUFnQixDQUFDdEYsS0FBSyxDQUFDRixJQUFJLENBQUN3RixnQkFBZ0IsQ0FDOUMsQ0FBQztBQUNERSxhQUFhLENBQUNqQyx1QkFBdUIsQ0FBQ3NCLFlBQVksQ0FBQzdFLEtBQUssQ0FBQ0YsSUFBSSxDQUFDK0UsWUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvc2NyaXB0cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9zY3JpcHRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3NjcmlwdHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3NjcmlwdHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbGluaywgaGFuZGxlQ2FyZENsaWNrLCBzZWxlY3RvciA9IFwiLnRlbXBsYXRlLWNhcmRcIikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgIHRoaXMuaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMudGVtcGxhdGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICBfZ2V0Q2FyZENsb25lKCkge1xuICAgIHRoaXMuY2FyZCA9IHRoaXMudGVtcGxhdGVDYXJkLmNvbnRlbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICBfc2V0UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19pbWFnZVwiKTtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSB0aGlzLmNhcmQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X190aXRsZVwiKTtcbiAgICBjb25zdCBsaWtlYnV0dG9uID0gdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fbGlrZVwiKTtcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IHRoaXMuY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX3RyYXNoXCIpO1xuICAgIGNhcmRJbWFnZS5zcmMgPSB0aGlzLmxpbms7XG4gICAgY2FyZEltYWdlLmFsdCA9IHRoaXMudGl0bGU7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcblxuICAgIHRoaXMubGlrZWJ1dHRvbiA9IGxpa2VidXR0b247XG4gICAgdGhpcy50cmFzaEJ1dHRvbiA9IHRyYXNoQnV0dG9uO1xuICAgIHRoaXMuY2FyZEltYWdlID0gY2FyZEltYWdlO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZGVycygpIHtcbiAgICB0aGlzLmxpa2VidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMubGlrZWJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZWxlbWVudF9fbGlrZS1ibGFja1wiKTtcbiAgICB9KTtcblxuICAgIHRoaXMudHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FyZC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNhcmRDbGljayh0aGlzLmxpbmssIHRoaXMudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2dldENhcmRDbG9uZSgpO1xuICAgIHRoaXMuX3NldFByb3BlcnRpZXMoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmRlcnMoKTtcbiAgICByZXR1cm4gdGhpcy5jYXJkO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBzaG93SW5wdXRFcnJvcihmb3JtUG9wdXAsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybVBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyk7XG4gIH1cblxuICBoaWRlSW5wdXRFcnJvcihmb3JtUG9wdXAsIGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1Qb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtUG9wdXAsIGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dJbnB1dEVycm9yKFxuICAgICAgICBmb3JtUG9wdXAsXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVJbnB1dEVycm9yKGZvcm1Qb3B1cCwgaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5idXR0b25EaXNhYmxlKGZvcm1Qb3B1cCk7XG4gIH1cblxuICBidXR0b25EaXNhYmxlKGZvcm1Qb3B1cCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm1Qb3B1cC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gZm9ybVBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5pbnB1dFNlbGVjdG9yKTtcbiAgICBjb25zdCBhbGxWYWxpZCA9IEFycmF5LmZyb20oaW5wdXRMaXN0KS5ldmVyeShcbiAgICAgIChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWRcbiAgICApO1xuXG4gICAgaWYgKGFsbFZhbGlkKSB7XG4gICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1Qb3B1cCkge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICBmb3JtUG9wdXAucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja0lucHV0VmFsaWRpdHkoZm9ybVBvcHVwLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25EaXNhYmxlKGZvcm1Qb3B1cCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5mb3JtU2VsZWN0b3IpXG4gICAgKTtcbiAgICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtUG9wdXApID0+IHtcbiAgICAgIGZvcm1Qb3B1cC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycyhmb3JtUG9wdXApO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgLy8gQXN1bWUgcXVlIGhheSB1biBvdmVybGF5IGdsb2JhbFxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX19vcGVuZWRcIik7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlZC13aW5kb3dcIiwgXCJwb3B1cC1jbG9zZWRcIik7XG4gICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX29wZW5lZFwiKTsgLy8gTXVlc3RyYSBlbCBvdmVybGF5XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX19vcGVuZWRcIik7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcImNsb3NlZC13aW5kb3dcIiwgXCJwb3B1cC1jbG9zZWRcIik7XG4gICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfX29wZW5lZFwiKTsgLy8gT2N1bHRhIGVsIG92ZXJsYXlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPVxuICAgICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIikgfHxcbiAgICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fY2xvc2VcIik7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XG5cbiAgICAvLyBDaWVycmEgZWwgcG9wdXAgYWwgaGFjZXIgY2xpYyBmdWVyYSBkZWwgZm9ybXVsYXJpbyAoZW4gZWwgw6FyZWEgc29tYnJlYWRhIGRlbCBwb3B1cCBvIGVuIGVsIG92ZXJsYXkpXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fcG9wdXAgfHwgZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9vdmVybGF5KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7IC8vIENhbGxiYWNrIHBhcmEgbWFuZWphciBlbCBlbnbDrW8gZGVsIGZvcm11bGFyaW9cbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtX19wb3B1cFwiKTsgLy8gU2VsZWNjaW9uYSBlbCBmb3JtdWxhcmlvIGRlbnRybyBkZWwgcG9wdXBcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTsgLy8gU2VsZWNjaW9uYSB0b2RvcyBsb3MgaW5wdXRzIGRlbCBmb3JtdWxhcmlvXG4gIH1cblxuICAvLyBSZWNvcGlsYSBsb3MgdmFsb3JlcyBkZSBsb3MgY2FtcG9zIGRlIGVudHJhZGFcbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGZvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgfVxuXG4gIC8vIEFncmVnYSBsb3MgZXZlbnRMaXN0ZW5lcnMgbmVjZXNhcmlvc1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpOyAvLyBMbGFtYSBhbCBzZXRFdmVudExpc3RlbmVycygpIGRlIFBvcHVwIHBhcmEgZWwgYm90w7NuIGRlIGNlcnJhclxuXG4gICAgLy8gQWdyZWdhIGVsIGV2ZW50byBzdWJtaXQgYWwgZm9ybXVsYXJpb1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEV2aXRhIGVsIGNvbXBvcnRhbWllbnRvIGRlIHJlY2FyZ2EgZGVsIGZvcm11bGFyaW9cbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7IC8vIExsYW1hIGFsIGNhbGxiYWNrIGNvbiBsb3MgZGF0b3MgZGVsIGZvcm11bGFyaW9cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENpZXJyYSBlbCBwb3B1cCB5IHJlaW5pY2lhIGVsIGZvcm11bGFyaW9cbiAgY2xvc2UoKSB7XG4gICAgc3VwZXIuY2xvc2UoKTsgLy8gTGxhbWEgYWwgbcOpdG9kbyBjbG9zZSgpIGRlIFBvcHVwIHBhcmEgY2VycmFyIGVsIHBvcHVwXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpOyAvLyBSZWluaWNpYSBlbCBmb3JtdWxhcmlvLCBsaW1waWFuZG8gdG9kb3MgbG9zIGNhbXBvc1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19waWN0dXJlXCIpOyAvLyBTZWxlY2Npb25hIGVsIGVsZW1lbnRvIGRlIGxhIGltYWdlblxuICAgIHRoaXMuX2NhcHRpb24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190aXRsZVwiKTsgLy8gU2VsZWNjaW9uYSBlbCBlbGVtZW50byBkZSBsYSBsZXllbmRhXG4gIH1cblxuICBvcGVuKGltYWdlU3JjLCBpbWFnZUNhcHRpb24pIHtcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBpbWFnZVNyYzsgLy8gRXN0YWJsZWNlIGxhIFVSTCBkZSBsYSBpbWFnZW5cbiAgICB0aGlzLl9pbWFnZS5hbHQgPSBpbWFnZUNhcHRpb247IC8vIFVzYSBsYSBsZXllbmRhIGNvbW8gdGV4dG8gYWx0ZXJuYXRpdm8gcGFyYSBsYSBhY2Nlc2liaWxpZGFkXG4gICAgdGhpcy5fY2FwdGlvbi50ZXh0Q29udGVudCA9IGltYWdlQ2FwdGlvbjsgLy8gQcOxYWRlIGVsIHRleHRvIGRlIGxhIGxleWVuZGFcbiAgICBzdXBlci5vcGVuKCk7IC8vIExsYW1hIGFsIG3DqXRvZG8gb3BlbigpIGRlIGxhIGNsYXNlIFBvcHVwIHBhcmEgYWJyaXIgZWwgcG9wdXBcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lciA9IFwiLmVsZW1lbnRzXCIpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVfX25hbWUsIHByb2ZpbGVfX2Fib3V0IH0pIHtcbiAgICB0aGlzLnByb2ZpbGVfX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVfX25hbWUpOyAvLyBTZWxlY2Npb25hIGVsIGVsZW1lbnRvIGRlbCBub21icmVcbiAgICB0aGlzLnByb2ZpbGVfX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlX19hYm91dCk7IC8vIFNlbGVjY2lvbmEgZWwgZWxlbWVudG8gZGUgbGEgb2N1cGFjacOzblxuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMucHJvZmlsZV9fbmFtZS50ZXh0Q29udGVudCwgLy8gRGV2dWVsdmUgZWwgdGV4dG8gZGVsIGVsZW1lbnRvIGRlIG5vbWJyZVxuICAgICAgYWJvdXQ6IHRoaXMucHJvZmlsZV9fYWJvdXQudGV4dENvbnRlbnQsIC8vIERldnVlbHZlIGVsIHRleHRvIGRlbCBlbGVtZW50byBkZSBvY3VwYWNpw7NuXG4gICAgfTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSkge1xuICAgIHRoaXMucHJvZmlsZV9fbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7IC8vIEFjdHVhbGl6YSBlbCBub21icmUgZGVsIHVzdWFyaW9cbiAgICB0aGlzLnByb2ZpbGVfX2Fib3V0LnRleHRDb250ZW50ID0gYWJvdXQ7IC8vIEFjdHVhbGl6YSBsYSBvY3VwYWNpw7NuIGRlbCB1c3VhcmlvXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLmZvcm1TZWN0aW9uID0gc2V0dGluZ3MuZm9ybVNlY3Rpb247XG4gICAgdGhpcy5vdmVybGF5ID0gc2V0dGluZ3Mub3ZlcmxheTtcbiAgICB0aGlzLmlucHV0TmFtZSA9IHNldHRpbmdzLmlucHV0TmFtZTtcbiAgICB0aGlzLmlucHV0QWJvdXQgPSBzZXR0aW5ncy5pbnB1dEFib3V0O1xuICAgIHRoaXMucHJvZmlsZU5hbWVFbGVtZW50ID0gc2V0dGluZ3MucHJvZmlsZU5hbWVFbGVtZW50O1xuICAgIHRoaXMucHJvZmlsZUFib3V0RWxlbWVudCA9IHNldHRpbmdzLnByb2ZpbGVBYm91dEVsZW1lbnQ7XG4gIH1cblxuICBjb21wbGV0ZUZvcm1FbGVtZW50ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuaW5wdXROYW1lLnZhbHVlLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgdGhpcy5pbnB1dEFib3V0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2ZpbGVOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5wdXROYW1lLnZhbHVlO1xuICAgIHRoaXMucHJvZmlsZUFib3V0RWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5wdXRBYm91dC52YWx1ZTtcblxuICAgIHRoaXMuY2xvc2VGb3JtKCk7XG4gIH07XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5mb3JtU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJzdWJtaXRcIixcbiAgICAgIHRoaXMuY29tcGxldGVGb3JtRWxlbWVudC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuICBzZXRQb3B1cENsb3NlTWV0aG9kKGNsb3NlRm9ybSkge1xuICAgIHRoaXMuY2xvc2VGb3JtID0gY2xvc2VGb3JtO1xuICB9XG5cbiAgc2V0UG9wdXBDbG9zZU1ldGhvZENhcmQoY2xvc2VBZGRDYXJkKSB7XG4gICAgdGhpcy5jbG9zZUFkZENhcmQgPSBjbG9zZUFkZENhcmQ7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDYXJkIGZyb20gXCIuL3NjcmlwdHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zY3JpcHRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9zY3JpcHRzL1V0aWxzLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi9zY3JpcHRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vc2NyaXB0cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5jb25zdCBwcm9maWxTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVcIik7XG5jb25zdCBwcm9maWxlTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBwcm9maWxlQWJvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dFwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0XCIpO1xuY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5jb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3BvcHVwXCIpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19uYW1lXCIpO1xuY29uc3QgaW5wdXRBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fYWJvdXRcIik7XG5jb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0XCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBmb3JtU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2Nsb3NlXCIpO1xuY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fYnV0dG9uXCIpO1xuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uXCIpO1xuY29uc3QgcG9wdWRBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRjYXJkLXBvcHVkXCIpO1xuY29uc3QgY2xvc2VCdXR0b25BZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRjYXJkLWNsb3NlXCIpO1xuY29uc3QgdGVtcGxhdGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZS1jYXJkXCIpO1xuY29uc3QgY2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzXCIpO1xuY29uc3QgYWRkSW5wdW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGNhcmQtdGl0bGVcIik7XG5jb25zdCBhZGRJbnB1bnRVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGNhcmQtdXJsXCIpO1xuY29uc3QgYWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGNhcmQtZm9ybVwiKTtcbmNvbnN0IHBvcHVwT3BlbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cF9faW1hZ2VcIik7XG5jb25zdCBwb3B1cENsb3NlSW1nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xuY29uc3QgY2xvc2VkQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlXCIpO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbGxlIGRlIFlvc2VtaXRlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy95b3NlbWl0ZS5qcGdcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJMYWdvIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTW9udGHDsWFzIENhbHZhc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGF0ZW1hci5qcGdcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJQYXJxdWUgTmFjaW9uYWwgZGUgbGEgVmFub2lzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvdmFub2lzZS5qcGdcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljayhsaW5rLCB0aXRsZSkge1xuICBwb3B1cFdpdGhJbWFnZS5vcGVuKGxpbmssIHRpdGxlKTsgLy8gQWJyZSBlbCBwb3B1cCBkZSBpbWFnZW4gY29uIGVsIGxpbmsgeSB0w610dWxvXG59XG5cbmNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiI3BvcHVwX19pbWFnZVwiKTtcbnBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxuICAgIHJlbmRlcmVyOiAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGVsZW1lbnQubmFtZSwgZWxlbWVudC5saW5rLCBoYW5kbGVDYXJkQ2xpY2spO1xuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICAgICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgXCIuZWxlbWVudHNcIlxuKTtcblxuY2FyZExpc3QucmVuZGVySXRlbXMoKTtcblxuZnVuY3Rpb24gYWRkQ2FyZFN1Ym1pdChmb3JtRGF0YSkge1xuICAvLyBDcmVhciBsYSB0YXJqZXRhIHV0aWxpemFuZG8gbG9zIGRhdG9zIGRlbCBmb3JtdWxhcmlvXG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChmb3JtRGF0YS50aXRsZSwgZm9ybURhdGEubGluaywgaGFuZGxlQ2FyZENsaWNrKTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICBjYXJkTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcblxuICAvLyBDaWVycmEgZWwgcG9wdXAgeSByZWluaWNpYSBlbCBmb3JtdWxhcmlvXG4gIGFkZENhcmRQb3B1cC5jbG9zZSgpOyAvLyBDYW1iaWFkbyBhIGNlcnJhciBlbCBwb3B1cCBkZSBhw7FhZGlyIHRhcmpldGEgZGlyZWN0YW1lbnRlXG59XG5cbmNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtX19wb3B1cFwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJmb3JtX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5jb25zdCBmb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzKTtcbmZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuY29uc3QgdXRpbHNTZXR0aW5ncyA9IHtcbiAgZm9ybVNlY3Rpb246IGZvcm1TZWN0aW9uLFxuICBvdmVybGF5OiBvdmVybGF5LFxuICBpbnB1dE5hbWU6IGlucHV0TmFtZSxcbiAgaW5wdXRBYm91dDogaW5wdXRBYm91dCxcbiAgcHJvZmlsZU5hbWVFbGVtZW50OiBwcm9maWxlTmFtZUVsZW1lbnQsXG4gIHByb2ZpbGVBYm91dEVsZW1lbnQ6IHByb2ZpbGVBYm91dEVsZW1lbnQsXG4gIHByb2ZpbGVFZGl0QnV0dG9uOiBwcm9maWxlRWRpdEJ1dHRvbixcbiAgY2xvc2VCdXR0b246IGNsb3NlQnV0dG9uLFxuICBmb3JtQnV0dG9uOiBmb3JtQnV0dG9uLFxuICBhZGRDYXJkQnV0dG9uOiBhZGRDYXJkQnV0dG9uLFxuICBjbG9zZUJ1dHRvbkFkZENhcmQ6IGNsb3NlQnV0dG9uQWRkQ2FyZCxcbiAgcG9wdWRBZGRDYXJkOiBwb3B1ZEFkZENhcmQsXG4gIGNhcmRQb3B1cFNlbGVjdG9yOiBcIiNhZGRjYXJkLXBvcHVkXCIsXG4gIGltYWdlUG9wdXBTZWxlY3RvcjogXCIjcG9wdXBfX2ltYWdlXCIsXG4gIHByb2ZpbGVQb3B1cFNlbGVjdG9yOiBcIiNwcm9maWxlLXBvcHVwXCIsXG59O1xuXG4vLyBJbnN0YW5jaWEgcGFyYSBlZGl0YXIgcGVyZmlsXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHByb2ZpbGVfX25hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgcHJvZmlsZV9fYWJvdXQ6IFwiLnByb2ZpbGVfX2Fib3V0XCIsXG59KTtcblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQoeyBuYW1lLCBhYm91dCB9KSB7XG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZSwgYWJvdXQgfSk7XG59XG5cbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAgXCIjcHJvZmlsZV9fcG9wdXBcIixcbiAgaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXRcbik7XG5lZGl0UHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xufSk7XG5cbi8vIEluc3RhbmNpYSBwYXJhIGHDsWFkaXIgdGFyamV0YVxuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjYWRkY2FyZC1wb3B1ZFwiLCBhZGRDYXJkU3VibWl0KTtcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5hZGRDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XG59KTtcblxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBhYm91dCB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlID0gbmFtZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKS52YWx1ZSA9IGFib3V0O1xuICBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKTtcbn0pO1xuXG5jb25zdCBzZXR0aW5nc1V0aWxzID0gbmV3IFV0aWxzKHV0aWxzU2V0dGluZ3MpO1xuc2V0dGluZ3NVdGlscy5zZXRFdmVudExpc3RlbmVycygpO1xuc2V0dGluZ3NVdGlscy5zZXRQb3B1cENsb3NlTWV0aG9kKFxuICBlZGl0UHJvZmlsZVBvcHVwLmNsb3NlLmJpbmQoZWRpdFByb2ZpbGVQb3B1cClcbik7XG5zZXR0aW5nc1V0aWxzLnNldFBvcHVwQ2xvc2VNZXRob2RDYXJkKGFkZENhcmRQb3B1cC5jbG9zZS5iaW5kKGFkZENhcmRQb3B1cCkpO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJ0aXRsZSIsImxpbmsiLCJoYW5kbGVDYXJkQ2xpY2siLCJzZWxlY3RvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsInRlbXBsYXRlQ2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2dldENhcmRDbG9uZSIsImNhcmQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX3NldFByb3BlcnRpZXMiLCJjYXJkSW1hZ2UiLCJjYXJkVGl0bGUiLCJsaWtlYnV0dG9uIiwidHJhc2hCdXR0b24iLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl9zZXRFdmVudExpc3RlbmRlcnMiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJnZW5lcmF0ZUNhcmQiLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwic2hvd0lucHV0RXJyb3IiLCJmb3JtUG9wdXAiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJjb25jYXQiLCJpZCIsImFkZCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImJ1dHRvbkRpc2FibGUiLCJzdWJtaXRCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiYWxsVmFsaWQiLCJBcnJheSIsImZyb20iLCJldmVyeSIsImlucHV0IiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNldEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImVuYWJsZVZhbGlkYXRpb24iLCJfdGhpczIiLCJmb3JtTGlzdCIsImZvcm1TZWxlY3RvciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX292ZXJsYXkiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xvc2VCdXR0b24iLCJ0YXJnZXQiLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9jYWxsU3VwZXIiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9mb3JtIiwiX2lucHV0TGlzdCIsIl9pbmhlcml0cyIsIl9nZXRJbnB1dFZhbHVlcyIsImZvcm1WYWx1ZXMiLCJuYW1lIiwiX3N1cGVyUHJvcEdldCIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfY2FwdGlvbiIsImltYWdlU3JjIiwiaW1hZ2VDYXB0aW9uIiwiU2VjdGlvbiIsIl9yZWYiLCJpdGVtcyIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwicHJvZmlsZV9fbmFtZSIsInByb2ZpbGVfX2Fib3V0IiwiZ2V0VXNlckluZm8iLCJhYm91dCIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJVdGlscyIsIl9kZWZpbmVQcm9wZXJ0eSIsImlucHV0TmFtZSIsInRyaW0iLCJpbnB1dEFib3V0IiwicHJvZmlsZU5hbWVFbGVtZW50IiwicHJvZmlsZUFib3V0RWxlbWVudCIsImNsb3NlRm9ybSIsImZvcm1TZWN0aW9uIiwib3ZlcmxheSIsImNvbXBsZXRlRm9ybUVsZW1lbnQiLCJzZXRQb3B1cENsb3NlTWV0aG9kIiwic2V0UG9wdXBDbG9zZU1ldGhvZENhcmQiLCJjbG9zZUFkZENhcmQiLCJwcm9maWxTZWxlY3Rpb24iLCJwcm9maWxlRWRpdEJ1dHRvbiIsImZvcm1CdXR0b24iLCJhZGRDYXJkQnV0dG9uIiwicG9wdWRBZGRDYXJkIiwiY2xvc2VCdXR0b25BZGRDYXJkIiwiY2FyZEFyZWEiLCJhZGRJbnB1bnRUaXRsZSIsImFkZElucHVudFVybCIsImFkZENhcmRGb3JtIiwicG9wdXBPcGVuSW1hZ2UiLCJwb3B1cENsb3NlSW1nZSIsImNsb3NlZEFsbCIsImluaXRpYWxDYXJkcyIsInBvcHVwV2l0aEltYWdlIiwiY2FyZExpc3QiLCJuZXdDYXJkIiwiY2FyZEVsZW1lbnQiLCJhZGRDYXJkU3VibWl0IiwiZm9ybURhdGEiLCJhZGRDYXJkUG9wdXAiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtVmFsaWRhdG9yIiwidXRpbHNTZXR0aW5ncyIsImNhcmRQb3B1cFNlbGVjdG9yIiwiaW1hZ2VQb3B1cFNlbGVjdG9yIiwicHJvZmlsZVBvcHVwU2VsZWN0b3IiLCJ1c2VySW5mbyIsImhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IiwiZWRpdFByb2ZpbGVQb3B1cCIsIl91c2VySW5mbyRnZXRVc2VySW5mbyIsInNldHRpbmdzVXRpbHMiXSwic291cmNlUm9vdCI6IiJ9