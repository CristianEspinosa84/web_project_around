export default class UserInfo {
  constructor({ profile__name, profile__about }) {
    this.profile__name = document.querySelector(profile__name); // Selecciona el elemento del nombre
    this.profile__about = document.querySelector(profile__about); // Selecciona el elemento de la ocupación
    this._id = null; // Inicializa la propiedad userId
  }

  getUserInfo() {
    return {
      name: this.profile__name.textContent, // Devuelve el texto del elemento de nombre
      about: this.profile__about.textContent, // Devuelve el texto del elemento de ocupación
      id: this._id, // Devuelve el ID del usuario
    };
  }

  setUserInfo({ name, about }) {
    this.profile__name.textContent = name; // Actualiza el nombre del usuario
    this.profile__about.textContent = about; // Actualiza la ocupación del usuario
    this._id = id; // Guarda el ID del usuario
  }

  getUserId() {
    console.log("ID del usuario actual:", UserInfo.getUserId());

    return this._id; // Devuelve el ID del usuario
  }
}
