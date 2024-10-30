import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import Utils from "./scripts/Utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import "./styles/index.css";
import { api } from "./scripts/Api.js";

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

function handleCardClick(link, title) {
  popupWithImage.open(link, title); // Abre el popup de imagen con el link y título
}

function handleDeleteCard(cardId, callback){

  //con popup
  /*popupWithConfirmation().open(() => {
    return api.deleteCard(cardId).then(() => {
      callback()
    })
    })
    */
   //directo sin popup
 /* return api.deleteCard(cardId).then(() => {
    callback()
  })
    */
}

const popupWithImage = new PopupWithImage("#popup__image");
popupWithImage.setEventListeners();

let cardList = null;
let currentUser = null;

// Instancia para editar perfil
const userInfo = new UserInfo({
  profile__name: ".profile__name",
  profile__about: ".profile__about",
});

api.getUserInfo().then((user) => {
  userInfo.setUserInfo(user);
  currentUser = user;
  api.getCards().then((cards) => {
    cardList = new Section(
      {
        items: cards,
        renderer: (element) => {
          const newCard = new Card(
            element.name,
            element.link,
            element,
            currentUser,
            handleCardClick,
            handleDeleteCard
          );
          const cardElement = newCard.generateCard();
          cardList.addItem(cardElement);
        },
      },
      ".elements"
    );

    cardList.renderItems();
  });
});

function addCardSubmit(formData) {
  // Crear la tarjeta utilizando los datos del formulario
  api.saveCard(formData.title, formData.link).then((card) => {
    const newCard = new Card(card.name, card.link,card, currentUser, handleCardClick);
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  });

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
