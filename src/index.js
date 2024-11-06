import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import Utils from "./scripts/Utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";
import UserInfo from "./scripts/UserInfo.js";
import "./styles/index.css";
import Api from "./scripts/Api.js";

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
const closeButtonConfirmatio = document.querySelector(".confirmation__close");
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
let cardList = null;

// Instancia de la clase Api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
  headers: {
    authorization: "59345b04-1bcb-477b-9fd0-29c1af9b7647",
    "Content-Type": "application/json",
  },
});

// Instancia para manejar la información del usuario
const userInfo = new UserInfo({
  profile__name: ".profile__name",
  profile__about: ".profile__about",
  profile__image: ".profile__image",
});

// Obtener y renderizar la información del usuario desde el servidor
api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      avatar: data.avatar,
      likes: data.likes,
      cardId: data.cardId,
      id: data._id,
    });

    //Cargar las tarjetas iniciales desde el servidor
    api
      .getInitialCards()
      .then((cards) => {
        cardList = new Section(
          {
            items: cards,
            renderer: (element) => {
              const newCard = new Card(
                element.name,
                element.link,

                {
                  likes: element.likes,
                  _id: element._id,
                  owner: element.owner,
                },
                userInfo.getUserId(), // ID del usuario actual
                handleLikeClick,
                handleCardClick,
                handleDeleteClick
              );
              const cardElement = newCard.generateCard();
              cardList.addItem(cardElement);
            },
          },
          ".elements"
        );

        // cardList.setItems(cards); // Asigna las tarjetas obtenidas
        cardList.renderItems(); // Renderiza todas las tarjetas en el DOM
      })
      .catch((err) =>
        console.log(`Error al cargar las tarjetas iniciales: ${err}`)
      );
  })
  .catch((err) =>
    console.log(`Error al obtener la información del usuario: ${err}`)
  );

// Instancia del popup para ver imágenes
const popupWithImage = new PopupWithImage("#popup__image");
popupWithImage.setEventListeners();

function handleCardClick(link, title) {
  popupWithImage.open(link, title);
}

// Función para manejar los "me gusta" en las tarjetas
function handleLikeClick(card) {
  const isLiked = card.likes.some((like) => like._id === userInfo.getUserId());
  if (isLiked) {
    api
      .dislikeCard(card._id)
      .then((updatedCardData) => {
        card.updateLikes(updatedCardData.likes);
      })
      .catch((err) => console.log(`Error al quitar "me gusta": ${err}`));
  } else {
    api
      .likeCard(card._id)
      .then((updatedCardData) => {
        card.updateLikes(updatedCardData.likes);
      })
      .catch((err) => console.log(`Error al dar "me gusta": ${err}`));
  }
}

// Instancia del popup de confirmación para eliminar tarjetas
const popupWithConfirmation = new PopupWithConfirmation("#popup__confirmation");
popupWithConfirmation.setEventListeners();

function handleDeleteClick(card) {
  popupWithConfirmation.open();
  popupWithConfirmation.setSubmitAction(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.remove();
        popupWithConfirmation.close();
      })
      .catch((err) => console.log(`Error al eliminar la tarjeta: ${err}`));
  });
}

// Función para añadir una nueva tarjeta
function addCardSubmit({ title, link }) {
  addCardPopup.renderLoading(true);

  api
    .addNewCard(title, link)
    .then((newCardData) => {
      const cardElement = new Card(
        newCardData.name,
        newCardData.link,
        {
          likes: newCardData.likes,
          _id: newCardData._id,
          owner: newCardData.owner,
        },
        userInfo.getUserId(),
        handleLikeClick,
        handleCardClick,
        handleDeleteClick
      ).generateCard();

      cardList.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => console.log(`Error al añadir la tarjeta: ${err}`))
    .finally(() => {
      addCardPopup.renderLoading(false);
    });
}

// Instancia del popup para añadir tarjeta
const addCardPopup = new PopupWithForm("#addcard-popud", addCardSubmit);
addCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addCardPopup.open();
});

// Función para manejar la edición de perfil
function handleProfileFormSubmit({ name, about }) {
  editProfilePopup.renderLoading(true);
  api
    .updateUserProfile(name, about)
    .then((updatedData) => {
      userInfo.setUserInfo({
        name: updatedData.name,
        about: updatedData.about,
      });
      editProfilePopup.close();
    })
    .catch((err) => console.log(`Error al actualizar el perfil: ${err}`))
    .finally(() => {
      editProfilePopup.renderLoading(false);
    });
}

// Instancia del popup de edición de perfil
const editProfilePopup = new PopupWithForm(
  "#profile__popup",
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  editProfilePopup.open();
});

// Instancia del popup para cambiar la foto de perfil
function handleAvatarFormSubmit({ avatar }) {
  editPhotoPopup.renderLoading(true);
  api
    .updateUserAvatar(avatar)
    .then((updatedData) => {
      // userInfo.setUserInfo({ avatar: updatedData.avatar });
      userInfo.setUserAvatar({ avatar: updatedData.avatar });
      editPhotoPopup.close();
    })
    .catch((err) => console.log(`Error al actualizar el avatar: ${err}`))
    .finally(() => {
      editPhotoPopup.renderLoading(false);
    });
}

const editPhotoPopup = new PopupWithForm(
  "#popup__edit-photo",
  handleAvatarFormSubmit
);
editPhotoPopup.setEventListeners();

document
  .querySelector(".profile__avatar-container")
  .addEventListener("click", () => {
    editPhotoPopup.open();
  });

// Configuración de validación de formularios
const validationSettings = {
  formSelector: ".form__popup",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__error_visible",
};

const utilsSettings = {
  formSection: formSection,
  overlay: overlay,
  inputName: inputName,
  inputAbout: inputAbout,
  profileNameElement: profileNameElement,
  profileAboutElement: profileAboutElement,
  profileEditButton: profileEditButton,
  closeButton: closeButton,
  closeButtonConfirmatio: closeButtonConfirmatio,
  formButton: formButton,
  addCardButton: addCardButton,
  closeButtonAddCard: closeButtonAddCard,
  popudAddCard: popudAddCard,
  cardPopupSelector: "#addcard-popud",
  imagePopupSelector: "#popup__image",
  profilePopupSelector: "#profile__popup",
};

const formValidator = new FormValidator(validationSettings);
formValidator.enableValidation();
