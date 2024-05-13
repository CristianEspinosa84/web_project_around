// const showInputError = (formPopup, inputElement, errorMessage, settings) => {
//   const errorElement = formPopup.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// const hideInputError = (formPopup, inputElement, settings) => {
//   const errorElement = formPopup.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formPopup, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(
//       formPopup,
//       inputElement,
//       inputElement.validationMessage,
//       settings
//     );
//   } else {
//     hideInputError(formPopup, inputElement, settings);
//   }
//   buttonDisable(formPopup, settings);
// };

// const buttonDisable = (formPopup, settings) => {
//   const submitButton = formPopup.querySelector(settings.submitButtonSelector);
//   const inputList = formPopup.querySelectorAll(settings.inputSelector);
//   const allValid = Array.from(inputList).every((input) => input.validity.valid);

//   if (allValid) {
//     submitButton.classList.remove(settings.inactiveButtonClass);
//     submitButton.removeAttribute("disabled");
//   } else {
//     submitButton.classList.add(settings.inactiveButtonClass);
//     submitButton.setAttribute("disabled", true);
//   }
// };

// const setEventListeners = (formPopup, settings) => {
//   const inputList = Array.from(
//     formPopup.querySelectorAll(settings.inputSelector)
//   );
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formPopup, inputElement, settings);
//     });
//   });
//   buttonDisable(formPopup, settings);
// };

// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formPopup) => {
//     formPopup.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     setEventListeners(formPopup, settings);
//   });
// };

// enableValidation({
//   formSelector: ".form__popup",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "form__error_visible",
// });
