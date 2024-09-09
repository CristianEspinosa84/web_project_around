// import Popup from "./Popup.js";

// export default class PopupWithForm extends Popup {
//   constructor(popupSelector, submitCallback) {
//     super(popupSelector);
//     this._submitCallback = submitCallback;
//     this._form = document.querySelector(".form");
//   }

//   _getInputValues() {
//     const formValues = {};
//     this._inputList.forEach((input) => {
//       formValues[input.name] = input.value;
//     });
//     return formValues;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//       this._submitCallback(this._getInputValues());
//     });
//   }

//   open() {
//     super.open();
//     this._form = this._popup.querySelector(".form__popup");
//     this._inputList = this._form.querySelectorAll(".form__input");
//     this._submitButton = this._form.querySelector(".form__button");
//   }

//   close() {
//     super.close();
//     this._form.reset();
//   }
// }
