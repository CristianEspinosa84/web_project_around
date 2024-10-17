export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._overlay = document.querySelector(".overlay"); // Asume que hay un overlay global
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup__opened");
    this._popup.classList.remove("closed-window", "popup-closed");
    this._overlay.classList.add("popup__opened"); // Muestra el overlay
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup__opened");
    this._popup.classList.add("closed-window", "popup-closed");
    this._overlay.classList.remove("popup__opened"); // Oculta el overlay
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton =
      this._popup.querySelector(".popup__close") ||
      this._popup.querySelector(".form__close");
    closeButton.addEventListener("click", () => this.close());

    // Cierra el popup al hacer clic fuera del formulario (en el área sombreada del popup o en el overlay)
    this._popup.addEventListener("click", (event) => {
      if (event.target === this._popup || event.target === this._overlay) {
        this.close();
      }
    });
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
