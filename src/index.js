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
      link: data.link,
      cardId: data.cardId,
      id: data._id,
    });

    //Cargar las tarjetas iniciales desde el servidor
    api
      .getInitialCards()
      .then((cards) => {
        const cardList = new Section(
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
        newCardData.currentUser,
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

const settingsUtils = new Utils(utilsSettings);
settingsUtils.setEventListeners();
settingsUtils.setPopupCloseMethod(
  editProfilePopup.close.bind(editProfilePopup)
);
settingsUtils.setPopupCloseMethodCard(addCardPopup.close.bind(addCardPopup));

const formValidator = new FormValidator(validationSettings);
formValidator.enableValidation();

// const settingsUtils = new Utils(utilsSettings);
// settingsUtils.setEventListeners();
// settingsUtils.setPopupCloseMethod(
//   editProfilePopup.close.bind(editProfilePopup)
// );
// settingsUtils.setPopupCloseMethodCard(addCardPopup.close.bind(addCardPopup));

// import Card from "./scripts/Card.js";
// import FormValidator from "./scripts/FormValidator.js";
// import Section from "./scripts/Section.js";
// import Utils from "./scripts/Utils.js";
// import PopupWithForm from "./scripts/PopupWithForm.js";
// import PopupWithImage from "./scripts/PopupWithImage.js";
// import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";
// import UserInfo from "./scripts/UserInfo.js";
// import "./styles/index.css";
// import Api from "./scripts/Api.js";

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

// // Instancia de la clase Api
// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
//   headers: {
//     authorization: "59345b04-1bcb-477b-9fd0-29c1af9b7647",
//     "Content-Type": "application/json",
//   },
// });

// // Función para manejar los "me gusta" en las tarjetas
// function handleLikeClick(card) {
//   const isLiked = card.likes.some((like) => like._id === userInfo.getUserId());

//   if (isLiked) {
//     api
//       .dislikeCard(card.cardId)
//       .then((updatedCardData) => {
//         card.updateLikes(updatedCardData.likes);
//       })
//       .catch((err) => console.log(`Error al quitar "me gusta": ${err}`));
//   } else {
//     api
//       .likeCard(card.cardId)
//       .then((updatedCardData) => {
//         card.updateLikes(updatedCardData.likes);
//       })
//       .catch((err) => console.log(`Error al dar "me gusta": ${err}`));
//   }
// }

// // Función para manejar la confirmación de eliminación de tarjeta
// function handleDeleteClick(card) {
//   popupWithConfirmation.open(() => {
//     api
//       .deleteCard(card.cardId)
//       .then(() => {
//         card.remove();
//         popupWithConfirmation.close();
//       })
//       .catch((err) => console.log(`Error al eliminar la tarjeta: ${err}`));
//   });
// }

// // Obtener y renderizar la información del usuario desde el servidor
// api
//   .getUserInfo()
//   .then((data) => {
//     userInfo.setUserInfo({
//       name: data.name,
//       about: data.about,
//       avatar: data.avatar,
//       id: data._id,
//     });
//   })
//   .catch((err) =>
//     console.log(`Error al obtener la información del usuario: ${err}`)
//   );

// function handleCardClick(link, title) {
//   popupWithImage.open(link, title); // Abre el popup de imagen con el link y título
// }

// // function handleLikeClick(card) {
// //   // Verifica si el usuario ya ha dado "me gusta"
// //   const isLiked = card.likes.some((like) => like._id === "userId"); // Reemplaza 'userId' con el ID del usuario autenticado

// //   if (isLiked) {
// //     // Si ya tiene "me gusta", elimina el "me gusta"
// //     api
// //       .dislikeCard(card.cardId)
// //       .then((updatedCardData) => {
// //         card.updateLikes(updatedCardData.likes); // Actualiza los "me gusta" en la interfaz
// //       })
// //       .catch((err) => console.log(`Error al quitar "me gusta": ${err}`));
// //   } else {
// //     // Si no tiene "me gusta", añade el "me gusta"
// //     api
// //       .likeCard(card.cardId)
// //       .then((updatedCardData) => {
// //         card.updateLikes(updatedCardData.likes); // Actualiza los "me gusta" en la interfaz
// //       })
// //       .catch((err) => console.log(`Error al dar "me gusta": ${err}`));
// //   }
// // }

// // function handleDeleteClick(card) {
// //   api
// //     .deleteCard(card.cardId)
// //     .then(() => {
// //       card.card.remove(); // Elimina la tarjeta del DOM
// //     })
// //     .catch((err) => console.log(`Error al eliminar la tarjeta: ${err}`));
// // }

// // Instancia del popup de confirmación
// const popupWithConfirmation = new PopupWithConfirmation("#popup__confirmation");
// popupWithConfirmation.setEventListeners();

// // Ejemplo de cómo establecer la acción de confirmación cuando quieres eliminar una tarjeta:
// popupWithConfirmation.setSubmitAction(() => {
//   api
//     .deleteCard(cardId) // Aquí usa el ID de la tarjeta que deseas eliminar
//     .then(() => {
//       card.remove(); // Remueve la tarjeta del DOM después de la confirmación
//       popupWithConfirmation.close(); // Cierra el popup de confirmación
//     })
//     .catch((err) => console.log(`Error al eliminar la tarjeta: ${err}`));
// });

// const popupWithImage = new PopupWithImage("#popup__image");
// popupWithImage.setEventListeners();

// const cardList = new Section(
//   {
//     items: [],
//     renderer: (element) => {
//       const newCard = new Card(
//         element.name, // Nombre de la tarjeta
//         element.link, // Enlace de la imagen
//         element.likes, // "Me gusta" iniciales
//         element._id, // ID único de la tarjeta
//         handleLikeClick, // Función para manejar el "me gusta"
//         handleCardClick, // Función para manejar el click en la imagen
//         handleDeleteClick // Agrega la función de eliminar tarjeta
//       );
//       const cardElement = newCard.generateCard();
//       cardList.addItem(cardElement);
//     },
//   },
//   ".elements"
// );

// cardList.renderItems();

// function addCardSubmit({ title, link }) {
//   addCardPopup.renderLoading(true); // Cambia el botón a "Guardando..."

//   api
//     .addNewCard(title, link) // Envía la tarjeta al servidor
//     .then((newCardData) => {
//       const cardElement = new Card(
//         newCardData.name,
//         newCardData.link,
//         newCardData.likes,
//         newCardData._id,
//         handleLikeClick,
//         handleCardClick,
//         handleDeleteClick
//       ).generateCard();
//       cardList.addItem(cardElement); // Añade la tarjeta confirmada al DOM
//       addCardPopup.close(); // Cierra el popup
//     })
//     .catch((err) => console.log(`Error al añadir la tarjeta: ${err}`))
//     .finally(() => {
//       addCardPopup.renderLoading(false); // Restaura el texto del botón
//     });
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

// // Instancia para editar perfil
// const userInfo = new UserInfo({
//   profile__name: ".profile__name",
//   profile__about: ".profile__about",
// });

// // Obtener y renderizar la información del usuario desde el servidor
// api
//   .getUserInfo()
//   .then((data) => {
//     userInfo.setUserInfo({
//       name: data.name,
//       about: data.about,
//       avatar: data.avatar,
//       id: data._id,
//     });
//   })
//   .catch((err) =>
//     console.log(`Error al obtener la información del usuario: ${err}`)
//   );

// function handleProfileFormSubmit({ name, about }) {
//   editProfilePopup.renderLoading(true); // Cambia el botón a "Guardando..."
//   api
//     .updateUserProfile(name, about) // Llama a la API para actualizar el perfil
//     .then((updatedData) => {
//       userInfo.setUserInfo({
//         // Actualiza el DOM con los datos del servidor
//         name: updatedData.name,
//         about: updatedData.about,
//       });
//       editProfilePopup.close(); // Cierra el formulario una vez actualizado
//     })
//     .catch((err) => console.log(`Error al actualizar el perfil: ${err}`))
//     .finally(() => {
//       editProfilePopup.renderLoading(false); // Restaura el texto del botón
//     });
// }

// // Instancia del popup de edición de perfil

// const editProfilePopup = new PopupWithForm(
//   "#popup__edit-photo",
//   handleAvatarFormSubmit
// );
// editProfilePopup.setEventListeners();

// profileEditButton.addEventListener("click", () => {
//   editProfilePopup.open();
// });

// document
//   .querySelector(".profile__avatar-container")
//   .addEventListener("click", () => {
//     editPhotoPopup.open();
//   });

// // Instancia para cambiar la foto de perfil
// function handleAvatarFormSubmit({ avatar }) {
//   editPhotoPopup.renderLoading(true);
//   api
//     .updateUserAvatar(avatar)
//     .then((updatedData) => {
//       userInfo.setUserInfo({ avatar: updatedData.avatar });
//       editPhotoPopup.close();
//     })
//     .catch((err) => console.log(`Error al actualizar el avatar: ${err}`))
//     .finally(() => {
//       editPhotoPopup.renderLoading(false);
//     });
// }

// // Evento para abrir el popup de edición de perfil
// profileEditButton.addEventListener("click", () => {
//   const { name, about } = userInfo.getUserInfo();
//   inputName.value = name;
//   inputAbout.value = about;
//   editProfilePopup.open();
// });

// // Instancia para añadir tarjeta
// const addCardPopup = new PopupWithForm("#addcard-popud", addCardSubmit);
// addCardPopup.setEventListeners();

// addCardButton.addEventListener("click", () => {
//   addCardPopup.open();
// });

// profileEditButton.addEventListener("click", () => {
//   const { name, about } = userInfo.getUserInfo();
//   document.querySelector("#name").value = name;
//   document.querySelector("#about").value = about;
//   editProfilePopup.open();
// });

// const settingsUtils = new Utils(utilsSettings);
// settingsUtils.setEventListeners();
// settingsUtils.setPopupCloseMethod(
//   editProfilePopup.close.bind(editProfilePopup)
// );
// settingsUtils.setPopupCloseMethodCard(addCardPopup.close.bind(addCardPopup));
