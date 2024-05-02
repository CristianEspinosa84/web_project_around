export default class Card {
  constructor(title, link, template) {
    this.title = title;
    this.link = link;
    this.template = template;
    this.templateCard = document.querySelector(".template-card");
  }

  _getCardClone() {
    this.card = this.templateCard.content
      .querySelector(".element")
      .cloneNode(true);
  }

  _setProperties() {
    const cardImage = this.card.querySelector(".element__image");
    const cardTitle = this.card.querySelector(".element__title");
    const likebutton = this.card.querySelector(".element__like");
    const trashButton = this.card.querySelector(".element__trash");
    cardImage.src = this.link;
    cardImage.alt = this.title;
    cardTitle.textContent = this.title;

    this.likebutton = likebutton;
    this.trashButton = trashButton;
    this.cardImage = cardImage;
  }

  _setEvenListenders() {
    this.likebutton.addEventListener("click", () => {
      this.likebutton.classList.toggle("element__like-black");
    });
    this.trashButton.addEventListener("click", () => {
      this.card.remove();
    });
    this.cardImage.addEventListener("click", () => {
      this._openPopupImage(this.link, this.title);
    });
  }

  generateCard() {
    this._getCardClone();
    this._setProperties();
    this._setEvenListenders();
    return this.card;
  }
}
