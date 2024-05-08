export default class Utils {
  constructor(settings) {
    this.settings = settings;
    this.formSection = document.querySelector(this.settings.formPopupSelector);
    this.overlay = document.querySelector(this.settings.overlaySelector);
    this.assignEventHandlers();
  }

  assignEventHandlers() {
    document
      .querySelector(this.settings.profileEditButtonSelector)
      .addEventListener("click", () => this.openPopup());
    document
      .querySelector(this.settings.closeButtonSelector)
      .addEventListener("click", () => this.closeForm());
    document
      .querySelector(this.settings.addCardButtonSelector)
      .addEventListener("click", () => this.openAddCard());
    document
      .querySelector(this.settings.closeButtonAddCardSelector)
      .addEventListener("click", () => this.closeAddCard());
    document
      .querySelector(this.settings.popupCloseImageSelector)
      .addEventListener("click", () => this.closePopupImage());
    document.addEventListener("keydown", (evt) => this.handleKeyDown(evt));
    this.formSection.addEventListener("click", (evt) =>
      this.handleClickOutside(evt)
    );
  }

  openPopup() {
    this.formSection.classList.add("popup__opened");
    this.overlay.classList.add("overlay__visible");
  }

  closeForm() {
    this.formSection.classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  }

  openAddCard() {
    document
      .querySelector(this.settings.addCardPopupSelector)
      .classList.add("popup__opened");
    this.overlay.classList.add("overlay__visible");
  }

  closeAddCard() {
    document
      .querySelector(this.settings.addCardPopupSelector)
      .classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  }

  closePopupImage() {
    document
      .querySelector(this.settings.popupImageSelector)
      .classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  }

  handleKeyDown(evt) {
    if (evt.key === "Escape") {
      if (this.formSection.classList.contains("popup__opened")) {
        this.closeForm();
      }
      if (
        document
          .querySelector(this.settings.addCardPopupSelector)
          .classList.contains("popup__opened")
      ) {
        this.closeAddCard();
      }
      if (
        document
          .querySelector(this.settings.popupImageSelector)
          .classList.contains("popup__opened")
      ) {
        this.closePopupImage();
      }
    }
  }

  handleClickOutside(evt) {
    if (evt.target === this.overlay) {
      this.closeForm();
      this.closeAddCard();
      this.closePopupImage();
    }
  }
}
