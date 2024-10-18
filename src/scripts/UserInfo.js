export default class UserInfo {
  constructor({ profile__name, profile__about }) {
    this.profile__name = document.querySelector(profile__name); // Selecciona el elemento del nombre
    this.profile__about = document.querySelector(profile__about); // Selecciona el elemento de la ocupación
  }

  getUserInfo() {
    return {
      name: this.profile__name.textContent, // Devuelve el texto del elemento de nombre
      about: this.profile__about.textContent, // Devuelve el texto del elemento de ocupación
    };
  }

  setUserInfo({ name, about }) {
    this.profile__name.textContent = name; // Actualiza el nombre del usuario
    this.profile__about.textContent = about; // Actualiza la ocupación del usuario
  }
}
