const overlay = document.querySelector(".overlay");
const profilSelection = document.querySelector(".profile");
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit");
const formSection = document.querySelector(".form");
const formPopup = document.querySelector(".form__popup");
const inputName = document.querySelector(".form__name");
const inputAbout = document.querySelector(".form__about");
const closeButton = formSection.querySelector(".form__close");
const formButton = document.querySelector(".form__button");

function openPopup() {
  formSection.classList.add("popup__opened");
  overlay.classList.add("overlay__visible");

  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
}

function closeForm() {
  formSection.classList.toggle("popup__opened");
  overlay.classList.toggle("overlay__visible");
}

function formElement(evt) {
  evt.preventDefault();

  if (inputName.value.trim() === "" || inputAbout.value.trim() === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
  closeForm();
}

profileEditButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closeForm);
formButton.addEventListener("click", formElement);
