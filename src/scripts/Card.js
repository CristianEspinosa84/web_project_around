export default class Card {
  constructor(
    title,
    link,
    { likes, owner, _id },
    currentUser,
    handleLikeClick,
    handleCardClick,
    handleDeleteClick, // Agregamos handleDeleteClick para manejar la eliminación
    selector = ".template-card"
  ) {
    this.title = title;
    this.link = link;
    this.likes = likes; // Número de "me gusta" iniciales
    // this.cardId = cardId; // ID de la tarjeta en el servidor
    this._id = _id;
    this.owner = owner;
    this.currentUser = currentUser;
    this.handleLikeClick = handleLikeClick;
    this.handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick; // Asignamos handleDeleteClick

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
    const likeButton = this.card.querySelector(".element__like");
    const trashButton = this.card.querySelector(".element__trash");
    const likeCounter = this.card.querySelector(".element__like-counter"); // Contador de "me gusta"

    cardImage.src = this.link;
    cardImage.alt = this.title;
    cardTitle.textContent = this.title;
    likeCounter.textContent = this.likes.length; // Muestra el número inicial de "me gusta"

    this.likeButton = likeButton;
    this.trashButton = trashButton;
    this.cardImage = cardImage;
    this.likeCounter = likeCounter;

    // Muestra el icono de eliminación solo si el usuario es el dueño de la tarjeta
    if (this.owner._id !== this.currentUser._id) {
      trashButton.style.display = "none";
    }

    // Marca "me gusta" si el usuario actual ya ha dado "me gusta"
    if (this.likes.some((like) => like._id === this.currentUser._id)) {
      likeButton.classList.add("element__like-black");
    }
  }

  _setEventListeners() {
    // Evento para el botón de "me gusta"
    this.likeButton.addEventListener("click", () => {
      this.handleLikeClick(this); // Llama a la función de "me gusta" al hacer clic
    });

    this.trashButton.addEventListener("click", () => {
      this.handleDeleteClick(this); // Llama a la función de eliminación al hacer clic
    });

    this.cardImage.addEventListener("click", () => {
      this.handleCardClick(this.link, this.title);
    });
  }

  updateLikes(likes) {
    this.likes = likes;
    this.likeCounter.textContent = this.likes.length;
    this.likeButton.classList.toggle(
      "element__like-black",
      this.likes.some((like) => like._id === "userId")
    ); // Añade o quita el color según el estado del "me gusta"
  }

  generateCard() {
    this._getCardClone();
    this._setProperties();
    this._setEventListeners();
    return this.card;
  }
}
