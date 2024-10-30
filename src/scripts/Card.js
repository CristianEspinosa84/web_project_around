export default class Card {
  constructor(title, link,{_id, likes, owner}, currentUser, 
    handleCardClick, 
    handleDeleteCard,
    selector = ".template-card") {
    this.title = title;
    this.link = link;
    this.likes = likes;
    this.owner = owner;
    this._id = _id;
    this.currentUser = currentUser;
    this.handleCardClick = handleCardClick;
    this.handleDeleteCard = handleDeleteCard;
    this.templateCard = document.querySelector(selector);
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

    //el usuario es igual al dueño??
    if(this.owner._id !== this.currentUser._id){
      trashButton.style.display = 'none'
    }

    // el usaurio actual le dio like??
    if(this.likes.some(like => like._id === this.currentUser._id)){
      likebutton.classList.add("element__like-black");
    }
  }

  _setEventListenders() {
    this.likebutton.addEventListener("click", () => {
      this.likebutton.classList.toggle("element__like-black");
    });

    this.trashButton.addEventListener("click", () => {
      this.handleDeleteCard(this._id, () => {
        this.card.remove();
      })
    });

    this.cardImage.addEventListener("click", () => {
      this.handleCardClick(this.link, this.title);
    });
  }

  generateCard() {
    this._getCardClone();
    this._setProperties();
    this._setEventListenders();
    return this.card;
  }
}
