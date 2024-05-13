export default class Card {
  constructor(title, link, templateSelector, cardAreaSelector) {
    this.title = title;
    this.link = link;
    this.templateCard = document.querySelector(templateSelector);
    this.cardArea = document.querySelector(cardAreaSelector);
    this.initialCards = [
      {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
      },
      {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
      },
      {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
      },
      {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
      },
      {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
      },
      {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
      },
    ];
  }

  generateCard() {
    const card = this.templateCard.content
      .querySelector(".element")
      .cloneNode(true);
    const cardImage = card.querySelector(".element__image");
    const cardTitle = card.querySelector(".element__title");
    const likeButton = card.querySelector(".element__like");
    const trashButton = card.querySelector(".element__trash");

    cardImage.src = this.link;
    cardImage.alt = this.title;
    cardTitle.textContent = this.title;

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__like-black");
    });
    trashButton.addEventListener("click", () => {
      card.remove();
    });

    return card;
  }

  initializeCards() {
    this.initialCards.forEach((element) => {
      const newCard = this.generateCard(element.name, element.link);
      this.cardArea.append(newCard);
    });
  }

  addCardSubmit(event) {
    event.preventDefault();
    const titleInput = document.querySelector("#addcard-title");
    const urlInput = document.querySelector("#addcard-url");
    this.title = titleInput.value;
    this.link = urlInput.value;

    const newCard = this.generateCard();
    this.cardArea.prepend(newCard);
    document.querySelector("#addcard-form").reset();
  }
}
