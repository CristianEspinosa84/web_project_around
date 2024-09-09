export default class Utils {
  constructor(settings) {
    this.formSection = settings.formSection;
    this.overlay = settings.overlay;
    this.inputName = settings.inputName;
    this.inputAbout = settings.inputAbout;
    this.profileNameElement = settings.profileNameElement;
    this.profileAboutElement = settings.profileAboutElement;
    // this.profileEditButton = settings.profileEditButton;
    // this.closeButton = settings.closeButton;
    // this.formButton = settings.formButton;
    // this.addCardButton = settings.addCardButton;
    // this.closeButtonAddCard = settings.closeButtonAddCard;
    // this.popudAddCard = settings.popudAddCard;
    // this.addCardForm = settings.addCardForm;
    // this.formSection.classList.add("popup__opened");
  }

  // handleCloseEsc = (evt) => {
  //   if (evt.key === "Escape") {
  //     this.closeForm();
  //   }
  // };

  // handleCloseEscCard = (evt) => {
  //   if (evt.key === "Escape") {
  //     this.closeAddCard();
  //   }
  // };

  // handleClick = (evt) => {
  //   if (evt.target.classList.contains("form")) {
  //     this.closeForm();
  //   }
  // };

  // handleClickCard = (evt) => {
  //   if (evt.target.id === "addcard-popud") {
  //     this.closeAddCard();
  //   }
  // };

  // openPopup = () => {
  //   // this.formSection.classList.add("popup__opened");
  //   // this.overlay.classList.add("overlay__visible");
  //   // this.formSection.addEventListener("click", this.handleClick);
  //   // document.addEventListener("keydown", this.handleCloseEsc);
  //   // this.inputName.value = this.profileNameElement.textContent;
  //   // this.inputAbout.value = this.profileAboutElement.textContent;
  // };

  // closeForm = () => {
  //   this.formSection.classList.remove("popup__opened");

  //   this.overlay.classList.remove("overlay__visible");
  // };

  // openAddCard = () => {
  //   this.popudAddCard.classList.add("popup__opened");
  //   this.overlay.classList.add("overlay__visible");
  //   this.popudAddCard.addEventListener("click", this.handleClickCard);
  //   document.addEventListener("keydown", this.handleCloseEscCard);
  //   this.inputName.value = this.profileNameElement.textContent;
  //   this.inputAbout.value = this.profileAboutElement.textContent;
  // };

  // closeAddCard = () => {
  //   this.popudAddCard.classList.remove("popup__opened");
  //   this.overlay.classList.remove("overlay__visible");
  // };

  completeFormElement = (evt) => {
    evt.preventDefault();
    if (
      this.inputName.value.trim() === "" ||
      this.inputAbout.value.trim() === ""
    ) {
      return;
    }
    this.profileNameElement.textContent = this.inputName.value;
    this.profileAboutElement.textContent = this.inputAbout.value;

    this.closeForm();
  };

  setEventListeners() {
    // this.profileEditButton.addEventListener("click", this.openPopup);
    // this.closeButton.addEventListener("click", this.closeForm);
    // this.formButton.addEventListener("click", this.completeFormElement);
    this.formSection.addEventListener(
      "submit",
      this.completeFormElement.bind(this)
    );
    // this.addCardButton.addEventListener("click", this.openAddCard);
    // this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
  }
  setPopupCloseMethod(closeForm) {
    this.closeForm = closeForm;
  }

  setPopupCloseMethodCard(closeAddCard) {
    this.closeAddCard = closeAddCard;
  }
}

// export default class Utils {
// constructor(settings) {
//   this.formSection = settings.formSection;
//   // this.overlay = settings.overlay;
//   this.inputName = settings.inputName;
//   this.inputAbout = settings.inputAbout;
//   this.profileNameElement = settings.profileNameElement;
//   this.profileAboutElement = settings.profileAboutElement;
//   this.profileEditButton = settings.profileEditButton;
//   // this.closeButton = settings.closeButton;
//   this.formButton = settings.formButton;
//   this.addCardButton = settings.addCardButton;
//   this.closeButtonAddCard = settings.closeButtonAddCard;
// this.popudAddCard = settings.popudAddCard;
// this.addCardForm = settings.addCardForm;

// this.profilePopup = settings.profilePopup;
// this.addCardPopup = settings.addCardPopup;
//}

// handleCloseEsc = (evt) => {
//   if (evt.key === "Escape") {
//     this.closeForm();
//   }
// };

// handleCloseEscCard = (evt) => {
//   if (evt.key === "Escape") {
//     this.closeAddCard();
//   }
// };

// handleClick = (evt) => {
//   if (evt.target.classList.contains("form")) {
//     this.closeForm();
//   }
// };

// handleClickCard = (evt) => {
//   if (evt.target.id === "addcard-popud") {
//     this.closeAddCard();
//   }
// };

// openPopup() {
// this.formSection.classList.add("popup__opened");
// this.overlay.classList.add("overlay__visible");
// this.formSection.addEventListener("click", this.handleClick);
// document.addEventListener("keydown", this.handleCloseEsc);
//   this.inputName.value = this.profileNameElement.textContent;
//   this.inputAbout.value = this.profileAboutElement.textContent;
// }

// closeForm = () => {
//   this.formSection.classList.remove("popup__opened");

//   this.overlay.classList.remove("overlay__visible");
// };

// openAddCard = () => {
//   this.popudAddCard.classList.add("popup__opened");
//   this.overlay.classList.add("overlay__visible");
//   this.popudAddCard.addEventListener("click", this.handleClickCard);
//   document.addEventListener("keydown", this.handleCloseEscCard);
// };

// closeAddCard = () => {
//   this.popudAddCard.classList.remove("popup__opened");
//   this.overlay.classList.remove("overlay__visible");
// };

//   completeFormElement = (evt) => {
//     evt.preventDefault();
//     if (
//       this.inputName.value.trim() === "" ||
//       this.inputAbout.value.trim() === ""
//     ) {
//       return;
//     }
//     this.profileNameElement.textContent = this.inputName.value;
//     this.profileAboutElement.textContent = this.inputAbout.value;
//     this.closeForm();
//   };

//   setEventListeners() {
//     // this.profileEditButton.addEventListener("click", this.open);
//     // this.closeButton.addEventListener("click", this.closeForm);
//     this.formButton.addEventListener("click", this.completeFormElement);
//     this.addCardButton.addEventListener("click", this.openAddCard);
//     this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
//   }
// }

// export default class Utils {
//   constructor({ profilePopup, addCardPopup }) {
//     this.profilePopup = profilePopup;
//     this.addCardPopup = addCardPopup;
//     this.profileEditButton = document.querySelector(".profile__edit");
//     this.addCardButton = document.querySelector(".profile__button");
//     this.profileNameElement = document.querySelector(".profile__name");
//     this.profileAboutElement = document.querySelector(".profile__about");
//     this.inputName = document.querySelector(".form__name");
//     this.inputAbout = document.querySelector(".form__about");
//   }

//   setEventListeners() {
//     this.profileEditButton.addEventListener("click", () =>
//       this.openProfilePopup()
//     );
//     this.addCardButton.addEventListener("click", () => this.openAddCardPopup());
//   }

//   openProfilePopup() {
//     this.inputName.value = this.profileNameElement.textContent;
//     this.inputAbout.value = this.profileAboutElement.textContent;
//     this.profilePopup.open();
//   }

//   openAddCardPopup() {
//     this.addCardPopup.open();
//   }
// }

// export default class Utils {
//   constructor(settings) {
//     this.inputName = document.querySelector("#name");
//     this.inputAbout = document.querySelector("#about");
//     this.profileNameElement = document.querySelector(".profile__name");
//     this.profileAboutElement = document.querySelector(".profile__about");
//     this.profileEditButton = document.querySelector(".profile__edit");
//     this.formButton = document.querySelector(".form__button");
//     this.addCardButton = document.querySelector(".profile__button");
//     this.closeButtonAddCard = document.querySelector("#addcard-close");

//     this.profilePopup = settings.profilePopup;
//     this.addCardPopup = settings.addCardPopup;

//     if (!this.profilePopup || !this.addCardPopup) {
//       console.error("Popup instances not provided to Utils");
//     }
//   }

//   openProfilePopup = () => {
//     this.inputName.value = this.profileNameElement.textContent;
//     this.inputAbout.value = this.profileAboutElement.textContent;
//     this.profilePopup.open();
//   };

//   openAddCardPopup = () => {
//     this.addCardPopup.open();
//   };

//   completeFormElement = (evt) => {
//     evt.preventDefault();
//     if (
//       this.inputName.value.trim() === "" ||
//       this.inputAbout.value.trim() === ""
//     ) {
//       return;
//     }
//     this.profileNameElement.textContent = this.inputName.value;
//     this.profileAboutElement.textContent = this.inputAbout.value;
//     this.profilePopup.close();
//   };

//   setEventListeners() {
//     this.profileEditButton.addEventListener("click", this.openProfilePopup);
//     this.formButton.addEventListener("click", this.completeFormElement);
//     this.addCardButton.addEventListener("click", this.openAddCardPopup);
//     this.closeButtonAddCard.addEventListener("click", () =>
//       this.addCardPopup.close()
//     );
//   }
// }

// export default class Utils {
//   constructor(settings) {
//     this.profileNameElement = document.querySelector(".profile__name");
//     this.profileAboutElement = document.querySelector(".profile__about");
//     this.profileEditButton = document.querySelector(".profile__edit");
//     this.addCardButton = document.querySelector(".profile__button");

//     this.profilePopup = settings.profilePopup;
//     this.addCardPopup = settings.addCardPopup;

//     this.inputName = document.querySelector("#name");
//     this.inputAbout = document.querySelector("#about");
//   }

//   setEventListeners() {
//     this.profileEditButton.addEventListener("click", () =>
//       this.openProfilePopup()
//     );
//     this.addCardButton.addEventListener("click", () => this.openAddCardPopup());
//   }

//   openProfilePopup() {
//     this.inputName.value = this.profileNameElement.textContent;
//     this.inputAbout.value = this.profileAboutElement.textContent;
//     this.profilePopup.open();
//   }

//   openAddCardPopup() {
//     this.addCardPopup.open();
//   }
// }

// export default class Utils {
//   constructor(settings) {
//     this.formSection = settings.formSection;
//     // this.overlay = settings.overlay;
//     this.inputName = settings.inputName;
//     this.inputAbout = settings.inputAbout;
//     this.profileNameElement = settings.profileNameElement;
//     this.profileAboutElement = settings.profileAboutElement;
//     this.profileEditButton = settings.profileEditButton;
//     // this.closeButton = settings.closeButton;
//     this.formButton = settings.formButton;
//     this.addCardButton = settings.addCardButton;
//     this.closeButtonAddCard = settings.closeButtonAddCard;
//     // this.popudAddCard = settings.popudAddCard;
//     // this.addCardForm = settings.addCardForm;

//     this.profilePopup = settings.profilePopup;
//     this.addCardPopup = settings.addCardPopup;
//   }

//   // handleCloseEsc = (evt) => {
//   //   if (evt.key === "Escape") {
//   //     this.closeForm();
//   //   }
//   // };

//   // handleCloseEscCard = (evt) => {
//   //   if (evt.key === "Escape") {
//   //     this.closeAddCard();
//   //   }
//   // };

//   // handleClick = (evt) => {
//   //   if (evt.target.classList.contains("form")) {
//   //     this.closeForm();
//   //   }
//   // };

//   // handleClickCard = (evt) => {
//   //   if (evt.target.id === "addcard-popud") {
//   //     this.closeAddCard();
//   //   }
//   // };

//   openPopup() {
//     // this.formSection.classList.add("popup__opened");
//     // this.overlay.classList.add("overlay__visible");
//     // this.formSection.addEventListener("click", this.handleClick);
//     // document.addEventListener("keydown", this.handleCloseEsc);
//     this.inputName.value = this.profileNameElement.textContent;
//     this.inputAbout.value = this.profileAboutElement.textContent;
//   }

//   // closeForm = () => {
//   //   this.formSection.classList.remove("popup__opened");

//   //   this.overlay.classList.remove("overlay__visible");
//   // };

//   // openAddCard = () => {
//   //   this.popudAddCard.classList.add("popup__opened");
//   //   this.overlay.classList.add("overlay__visible");
//   //   this.popudAddCard.addEventListener("click", this.handleClickCard);
//   //   document.addEventListener("keydown", this.handleCloseEscCard);
//   // };

//   // closeAddCard = () => {
//   //   this.popudAddCard.classList.remove("popup__opened");
//   //   this.overlay.classList.remove("overlay__visible");
//   // };

//   completeFormElement = (evt) => {
//     evt.preventDefault();
//     if (
//       this.inputName.value.trim() === "" ||
//       this.inputAbout.value.trim() === ""
//     ) {
//       return;
//     }
//     this.profileNameElement.textContent = this.inputName.value;
//     this.profileAboutElement.textContent = this.inputAbout.value;
//     this.closeForm();
//   };

//   setEventListeners() {
//     this.profileEditButton.addEventListener("click", this.openPopup);
//     // this.closeButton.addEventListener("click", this.closeForm);
//     this.formButton.addEventListener("click", this.completeFormElement);
//     this.addCardButton.addEventListener("click", this.openAddCard);
//     this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
//   }
// }
