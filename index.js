import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Utils from "./Utils.js";
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

// function handlecloseEsc(evt) {
//   if (evt.key === "Escape") {
//     closeForm();
//   }
// }

// function handlecloseEscCard(evt) {
//   if (evt.key === "Escape") {
//     closeAddCard();
//   }
// }

// function handleClick(evt) {
//   if (evt.target.classList.contains("form")) closeForm();
// }

// function handleClickCard(evt) {
//   if (evt.target.id === "addcard-popud") closeAddCard();
// }

// function openPopup() {
//   formSection.classList.add("popup__opened");
//   overlay.classList.add("overlay__visible");
//   formSection.addEventListener("click", handleClick);
//   document.addEventListener("keydown", handlecloseEsc);

//   inputName.value = profileNameElement.textContent;
//   inputAbout.value = profileAboutElement.textContent;
// }

// function closeForm() {
//   formSection.classList.remove("popup__opened");
//   overlay.classList.remove("overlay__visible");
// }

// function openAddCard() {
//   popudAddCard.classList.add("popup__opened");
//   overlay.classList.add("overlay__visible");
//   popudAddCard.addEventListener("click", handleClickCard);
//   document.addEventListener("keydown", handlecloseEscCard);
// }

// function closeAddCard() {
//   popudAddCard.classList.remove("popup__opened");
//   overlay.classList.remove("overlay__visible");
// }

function openPopupImage(link, title) {
  popupOpenImage.classList.add("popup__opened");
  popupOpenImage.classList.remove("popup-closed");
  const cardTitle = popupOpenImage.querySelector(".popup__title");
  const cardPicture = popupOpenImage.querySelector(".popup__picture");
  cardPicture.src = link;
  cardTitle.textContent = title;
  cardPicture.alt = title;
  overlay.classList.add("overlay__visible");
}
function closePopupImage() {
  popupOpenImage.classList.remove("popup__opened");
  popupOpenImage.classList.add("popup-closed");
  overlay.classList.remove("overlay__visible");
}

function completeFormElement(evt) {
  evt.preventDefault();

  if (inputName.value.trim() === "" || inputAbout.value.trim() === "") {
    return;
  }

  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
  closeForm();
}

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link);
  const cardElement = newCard.generateCard(openPopupImage);
  cardArea.append(cardElement);
});

function addCardSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(addInpuntTitle.value, addInpuntUrl.value);
  const cardElement = newCard.generateCard(openPopupImage);
  cardArea.prepend(cardElement);
  closeAddCard();
  addCardForm.reset();
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

const settings = {
  formPopupSelector: ".form__popup",
  overlaySelector: ".overlay",
  profileEditButtonSelector: ".profile__edit",
  closeButtonSelector: ".form__close",
  formButtonSelector: ".form__button",
  addCardButtonSelector: ".profile__button",
  closeButtonAddCardSelector: "#addcard-close",
  popupCloseImageSelector: ".popup__close",
  addCardFormSelector: "#addcard-form",
  addCardPopupSelector: "#addcard-popud",
  popupImageSelector: "#popup__image",
};

const popupManager = new Utils(settings);

// profileEditButton.addEventListener("click", openPopup);
// closeButton.addEventListener("click", closeForm);
// formButton.addEventListener("click", completeFormElement);
// addCardButton.addEventListener("click", openAddCard);
// closeButtonAddCard.addEventListener("click", closeAddCard);
popupCloseImge.addEventListener("click", closePopupImage);
addCardForm.addEventListener("submit", addCardSubmit);
