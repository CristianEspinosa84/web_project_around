import Card from "./Card.js";

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
    this.popudAddCard = settings.popudAddCard;

    this.popupOpenImage = settings.popupOpenImage;
    this.cardArea = settings.cardArea;
    // this.addCardForm = settings.addCardForm;
    // this.addInpuntTitle = settings.addInpuntTitle;
    // this.addInpuntUrl = settings.addInpuntUrl;
    this.popupCloseImge = settings.popupCloseImge;
    // this.initialCards = [
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
  };

  openPopupImage = (link, title) => {
    this.popupOpenImage.classList.add("popup__opened");
    const cardTitle = this.popupOpenImage.querySelector(".popup__title");
    const cardPicture = this.popupOpenImage.querySelector(".popup__picture");
    cardPicture.src = link;
    cardTitle.textContent = title;
    cardPicture.alt = title;
    this.overlay.classList.add("overlay__visible");
  };

  closePopupImage = () => {
    this.popupOpenImage.classList.remove("popup__opened");
    this.overlay.classList.remove("overlay__visible");
  };

  //   initializeCards() {
  //     initialCards.forEach((element) => {
  //       const newCard = new Card(element.name, element.link);
  //       const cardElement = newCard.generateCard(this.openPopupImage);
  //       this.cardArea.append(cardElement);
  //     });
  //   }

  //   addCardSubmit = (evt) => {
  //     evt.preventDefault();
  //     const newCard = new Card(
  //       this.addInpuntTitle.value,
  //       this.addInpuntUrl.value
  //     );
  //     const cardElement = newCard.generateCard(this.openPopupImage);
  //     this.cardArea.prepend(cardElement);
  //     this.closeAddCard();
  //     this.addCardForm.reset();
  //   };

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
    this.popupCloseImge.addEventListener("click", this.closePopupImage);
    // this.addCardForm.addEventListener("submit", this.addCardSubmit);
  }
  setupCards() {
    Card.initializeCards(this.initialCards, this.cardArea, this.openPopupImage);
  }
}
