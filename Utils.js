export default class Utils {
  constructor(settings) {
    this.formSection = settings.formSection;
    this.overlay = settings.overlay;
    this.inputName = settings.inputName;
    this.inputAbout = settings.inputAbout;
    this.profileNameElement = settings.profileNameElement;
    this.profileAboutElement = settings.profileAboutElement;
    this.profileEditButton = settings.profileEditButton;
    this.closeButton = settings.closeButton;
    this.formButton = settings.formButton;
    this.addCardButton = settings.addCardButton;
    this.closeButtonAddCard = settings.closeButtonAddCard;
  }

  handleCloseEsc = (evt) => {
    if (evt.key === "Escape") {
      this.closeForm();
    }
  };

  handleCloseEscCard = (evt) => {
    if (evt.key === "Escape") {
      this.closeAddCard();
    }
  };

  handleClick = (evt) => {
    if (evt.target.classList.contains("form")) {
      this.closeForm();
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
    console.log(this.openPopup);
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
  };

  closeAddCard = () => {
    this.popudAddCard.classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  };

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
    this.profileEditButton.addEventListener("click", this.openPopup);
    this.closeButton.addEventListener("click", this.closeForm);
    this.formButton.addEventListener("click", this.completeFormElement);
    this.addCardButton.addEventListener("click", this.openAddCard);
    this.closeButtonAddCard.addEventListener("click", this.closeAddCard);
    console.log(this.setEventListeners);
  }
}
