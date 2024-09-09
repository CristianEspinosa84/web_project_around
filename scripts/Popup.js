export default class Popup {
  constructor(popupSelector) {
    this.formSection = popupSelector.formSection;
    this.overlay = popupSelector.overlay;
    this.profileEditButton = popupSelector.profileEditButton;
    this.closeButton = popupSelector.closeButton;
    this.inputName = popupSelector.inputName;
    this.inputAbout = popupSelector.inputAbout;
    this.profileNameElement = popupSelector.profileNameElement;
    this.profileAboutElement = popupSelector.profileAboutElement;
    this.addCardButton = popupSelector.addCardButton;
    this.closeButtonAddCard = popupSelector.closeButtonAddCard;
    this.popudAddCard = popupSelector.popudAddCard;
    this.addCardForm = popupSelector.addCardForm;
  }

  handleCloseEsc = (evt) => {
    if (evt.key === "Escape") {
      this.closeForm();
    }
  };

  handleClick = (evt) => {
    if (evt.target.classList.contains("form")) {
      this.closeForm();
    }
  };

  handleCloseEscCard = (evt) => {
    if (evt.key === "Escape") {
      this.closeAddCard();
    }
  };

  handleClickCard = (evt) => {
    if (evt.target.id === "addcard-popud") {
      this.closeAddCard();
    }
  };

  openPopup = () => {
    this.formSection.classList.add("popup__opened");
    this.overlay.classList.add("overlay__visible");
    this.formSection.addEventListener("click", this.handleClick);
    document.addEventListener("keydown", this.handleCloseEsc);
    this.inputName.value = this.profileNameElement.textContent;
    this.inputAbout.value = this.profileAboutElement.textContent;
  };

  closeForm = () => {
    this.formSection.classList.remove("popup__opened");

    this.overlay.classList.remove("overlay__visible");
  };

  openAddCard = () => {
    this.popudAddCard.classList.add("popup__opened");
    this.overlay.classList.add("overlay__visible");
    this.popudAddCard.addEventListener("click", this.handleClickCard);
    document.addEventListener("keydown", this.handleCloseEscCard);
    this.inputName.value = this.profileNameElement.textContent;
    this.inputAbout.value = this.profileAboutElement.textContent;
  };

  closeAddCard = () => {
    this.popudAddCard.classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  };

  setEventListeners() {
    this.profileEditButton.addEventListener("click", this.openPopup);
    this.closeButton.addEventListener("click", this.closeForm);
    this.addCardButton.addEventListener("click", this.openAddCard);
    this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
    // this.formButton.addEventListener("click", this.completeFormElement);
    // this.addCardButton.addEventListener("click", this.openAddCard);
    // this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
  }
}

// export default class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//     this._handleEscClose = this._handleEscClose.bind(this);
//     // this.formSection = document.querySelector(".form");
//     this.formSection = popupSelector.formSection;
//     this.overlay = popupSelector.overlay;
//     this.profileEditButton = popupSelector.profileEditButton;
//   }

//   open() {
//     this.formSection.classList.add("popup__opened");
//     this.overlay.classList.add("overlay__visible");
//     document.addEventListener("keydown", this._handleEscClose);
//     this.formSection.addEventListener("click", this.handleClick);
//     this.inputName.value = this.profileNameElement.textContent;
//     this.inputAbout.value = this.profileAboutElement.textContent;
//   }

//   close() {
//     this._popup.classList.add("closed-window");
//     document.removeEventListener("keydown", this._handleEscClose);
//   }

//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//   setEventListeners() {
//     this._popup
//       .querySelector(".form__close")
//       .addEventListener("click", () => this.close());
//     this.profileEditButton.addEventListener("click", this.open);
//   }
// }

// export default class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//     this._closeButton = this._popup.querySelector(".form__close");
//     this._handleEscClose = this._handleEscClose.bind(this);
//     // this._formSection = this._formSection.querySelector(".form");
//   }

//   open() {
//     this._popup.classList.add("popup__opened");
//     this._overlay.classList.add("overlay__visible");
//     document.addEventListener("keydown", this._handleEscClose);
//   }

//   close() {
//     this._popup.classList.remove("popup__opened");
//     this._overlay.classList.remove("overlay__visible");
//     document.removeEventListener("keydown", this._handleEscClose);
//   }

//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//   setEventListeners() {
//     this._closeButton.addEventListener("click", () => this.close());
//     this._popup.addEventListener("mousedown", (evt) => {
//       if (evt.target === this._popup) {
//         this.close();
//       }
//     });
//   }
// }
