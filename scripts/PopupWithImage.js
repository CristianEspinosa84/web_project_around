import Popup from "./Popup";

class PopupWhithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupOpenImage = this.popupElement.querySelector("#popup__image");
    this.popupCaption = this.popupElement.querySelector(".popup__title");
  }

  openPopupImage(link, title) {
    popupOpenImage.classList.add("popup__opened");
    popupOpenImage.classList.remove("popup-closed");
    const cardTitle = popupOpenImage.querySelector(".popup__title");
    const cardPicture = popupOpenImage.querySelector(".popup__picture");
    cardPicture.src = link;
    cardTitle.textContent = title;
    cardPicture.alt = title;
    overlay.classList.add("overlay__visible");
  }

  closePopupImage() {
    popupOpenImage.classList.remove("popup__opened");
    popupOpenImage.classList.add("popup-closed");
    overlay.classList.remove("overlay__visible");
  }
}
