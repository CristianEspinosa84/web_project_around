class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: this._token,
      },
    }).then((response) => response.json());
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization: this._token,
      },
    }).then((response) => response.json());
  }

  saveCard(name, link){
    return fetch(`${this._url}/cards`, {
        headers: {
          Authorization: this._token,
          'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify({
            name, link
        })
      }).then((response) => response.json());
  }

  deleteCard(cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
        headers: {
          Authorization: this._token,
          'Content-Type': 'application/json'
        },
        method: 'DELETE',        
      }).then((response) => response.json());
  }
}

const api = new Api("https://around.nomoreparties.co/v1/web_es_10", "92699bb5-75ce-4d70-95e1-51dbc7b5449b")

export {api};