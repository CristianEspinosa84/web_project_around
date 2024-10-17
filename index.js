// import Card from "./scripts/Card.js";
// import FormValidator from "./scripts/FormValidator.js";
// import Section from "./scripts/Section.js";
// import Popup from "./scripts/Popup.js";
// import Utils from "./scripts/utils.js";
// import PopupWithForm from "./scripts/PopupWithForm.js";
// import PopupWithImage from "./scripts/PopupWithImage.js"; // Importa PopupWithImage
// import UserInfo from "./scripts/UserInfo.js";

// const overlay = document.querySelector(".overlay");
// const profilSelection = document.querySelector(".profile");
// const profileNameElement = document.querySelector(".profile__name");
// const profileAboutElement = document.querySelector(".profile__about");
// const profileEditButton = document.querySelector(".profile__edit");
// const formSection = document.querySelector(".form");
// const formPopup = document.querySelector(".form__popup");
// const inputName = document.querySelector(".form__name");
// const inputAbout = document.querySelector(".form__about");
// const inputElement = document.querySelector(".form__input");
// const closeButton = formSection.querySelector(".form__close");
// const formButton = document.querySelector(".form__button");
// const addCardButton = document.querySelector(".profile__button");
// const popudAddCard = document.querySelector("#addcard-popud");
// const closeButtonAddCard = document.querySelector("#addcard-close");
// const templateCard = document.querySelector(".template-card");
// const cardArea = document.querySelector(".elements");
// const addInpuntTitle = document.querySelector("#addcard-title");
// const addInpuntUrl = document.querySelector("#addcard-url");
// const addCardForm = document.querySelector("#addcard-form");
// const popupOpenImage = document.querySelector("#popup__image");
// const popupCloseImge = document.querySelector(".popup__close");
// const closedAll = document.querySelector(".page");

// const initialCards = [
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//   },
//   {
//     name: "Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//   },
// ];

// // Crear la instancia de PopupWithImage
// const popupWithImage = new PopupWithImage("#popup__image");

// // Define la función que abrirá el popup con la imagen
// function handleCardClick(link, name) {
//   popupWithImage.open(link, name); // Abre el popup con link y name
// }

// // Configurar event listeners para el popup de imagen
// popupWithImage.setEventListeners();

// // Crea la lista de tarjetas usando Section y renderiza
// const cardList = new Section({
//   items: initialCards,
//   renderer: (element) => {
//     const newCard = new Card(element.name, element.link, handleCardClick); // Usa element.link
//     const cardElement = newCard.generateCard();
//     cardList.addItem(cardElement);
//   },
// });

// cardList.renderItems();

// function addCardSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card(
//     addInpuntTitle.value,
//     addInpuntUrl.value,
//     handleCardClick
//   ); // Usa handleCardClick
//   const cardElement = newCard.generateCard();
//   cardList.addItem(cardElement);
//   settingsUtils.closeAddCard();
//   addCardForm.reset();
// }

// const validationSettings = {
//   formSelector: ".form__popup",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "form__error_visible",
// };

// const formValidator = new FormValidator(validationSettings);
// formValidator.enableValidation();

// const utilsSettings = {
//   formSection: formSection,
//   overlay: overlay,
//   inputName: inputName,
//   inputAbout: inputAbout,
//   profileNameElement: profileNameElement,
//   profileAboutElement: profileAboutElement,
//   profileEditButton: profileEditButton,
//   closeButton: closeButton,
//   formButton: formButton,
//   addCardButton: addCardButton,
//   closeButtonAddCard: closeButtonAddCard,
//   popudAddCard: popudAddCard,
//   cardPopupSelector: "#addcard-popud",
//   imagePopupSelector: "#popup__image",
//   profilePopupSelector: "#profile-popup",
// };

// const selectorPopup = new PopupWithForm(utilsSettings.cardPopupSelector);
// selectorPopup.setEventListeners();

// const settingsUtils = new Utils(utilsSettings);
// settingsUtils.setEventListeners();
// settingsUtils.setPopupCloseMethod(selectorPopup.closeForm.bind(selectorPopup));
// settingsUtils.setPopupCloseMethodCard(
//   selectorPopup.closeAddCard.bind(selectorPopup)
// );

// addCardForm.addEventListener("submit", addCardSubmit);

import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
// import Popup from "./scripts/Popup.js";
import Utils from "./scripts/utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";

const overlay = document.querySelector(".overlay");
const profilSelection = document.querySelector(".profile");
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit");
const formSection = document.querySelector(".form");
const formPopup = document.querySelector(".form__popup");
const inputName = document.querySelector(".form__name");
const inputAbout = document.querySelector(".form__about");
const inputElement = document.querySelector(".form__input");
const closeButton = formSection.querySelector(".form__close");
const formButton = document.querySelector(".form__button");
const addCardButton = document.querySelector(".profile__button");
const popudAddCard = document.querySelector("#addcard-popud");
const closeButtonAddCard = document.querySelector("#addcard-close");
const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const addInpuntTitle = document.querySelector("#addcard-title");
const addInpuntUrl = document.querySelector("#addcard-url");
const addCardForm = document.querySelector("#addcard-form");
const popupOpenImage = document.querySelector("#popup__image");
const popupCloseImge = document.querySelector(".popup__close");
const closedAll = document.querySelector(".page");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },

  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },

  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },

  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// function openPopupImage(link, title) {
//   popupOpenImage.classList.add("popup__opened");
//   popupOpenImage.classList.remove("popup-closed");
//   const cardTitle = popupOpenImage.querySelector(".popup__title");
//   const cardPicture = popupOpenImage.querySelector(".popup__picture");
//   cardPicture.src = link;
//   cardTitle.textContent = title;
//   cardPicture.alt = title;
//   overlay.classList.add("overlay__visible");
// }

// function closePopupImage() {
//   popupOpenImage.classList.remove("popup__opened");
//   popupOpenImage.classList.add("popup-closed");
//   overlay.classList.remove("overlay__visible");
// }

function handleCardClick(link, title) {
  popupWithImage.open(link, title); // Abre el popup de imagen con el link y título
}

const popupWithImage = new PopupWithImage("#popup__image");
popupWithImage.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const newCard = new Card(element.name, element.link, handleCardClick);
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderItems();

// document.addEventListener("DOMContentLoaded", () => {
//   const profilePopup = new Popup(".form:not(#addcard-popud)");
//   const addCardPopup = new Popup("#addcard-popud");

//   profilePopup.setEventListeners();
//   addCardPopup.setEventListeners();
// }
//   const utils = new Utils({
//     profilePopup: profilePopup,
//     addCardPopup: addCardPopup,
//   });

//   utils.setEventListeners();
// );

// const profilePopup = new Popup(".form");
// const addCardPopup = new Popup("#addcard-popud");

// profilePopup.setEventListeners();
// addCardPopup.setEventListeners();

// initialCards.forEach(function (element) {
//   const newCard = new Card(element.name, element.link);
//   const cardElement = newCard.generateCard(openPopupImage);
//   cardArea.append(cardElement);
// });

// function addCardSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card(addInpuntTitle.value, addInpuntUrl.value);
//   const cardElement = newCard.generateCard(openPopupImage);
//   cardList.addItem(cardElement);
//   settingsUtils.closeAddCard();
//   addCardForm.reset();
// }

function addCardSubmit(formData) {
  // Crear la tarjeta utilizando los datos del formulario
  console.log("Datos del formulario recibidos:", formData);
  const newCard = new Card(formData.title, formData.link, handleCardClick);
  const cardElement = newCard.generateCard();
  cardList.addItem(cardElement);

  // Cierra el popup y reinicia el formulario
  addCardPopup.close(); // Cambiado a cerrar el popup de añadir tarjeta directamente
}

const validationSettings = {
  formSelector: ".form__popup",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__error_visible",
};

const formValidator = new FormValidator(validationSettings);
formValidator.enableValidation();
const utilsSettings = {
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
  profilePopupSelector: "#profile-popup",
};

// const selectorPopup = new PopupWithForm(utilsSettings.cardPopupSelector);
// selectorPopup.open();

// const selectorPopup = new PopupWithForm(utilsSettings.cardPopupSelector);
// selectorPopup.open();
// const selectorPopup = new Popup(utilsSettings.cardPopupSelector);
// selectorPopup.setEventListeners();

// Instancia para editar perfil
const userInfo = new UserInfo({
  profile__name: ".profile__name",
  profile__about: ".profile__about",
});

function handleProfileFormSubmit({ name, about }) {
  userInfo.setUserInfo({ name, about });
}

const editProfilePopup = new PopupWithForm(
  "#profile__popup",
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  editProfilePopup.open();
});

// Instancia para añadir tarjeta
const addCardPopup = new PopupWithForm("#addcard-popud", addCardSubmit);
addCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addCardPopup.open();
});

profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  document.querySelector("#name").value = name;
  document.querySelector("#about").value = about;
  editProfilePopup.open();
});

const settingsUtils = new Utils(utilsSettings);
settingsUtils.setEventListeners();
settingsUtils.setPopupCloseMethod(
  editProfilePopup.close.bind(editProfilePopup)
);
settingsUtils.setPopupCloseMethodCard(addCardPopup.close.bind(addCardPopup));
// popupCloseImge.addEventListener("click", closePopupImage);
// addCardForm.addEventListener("submit", addCardSubmit);
