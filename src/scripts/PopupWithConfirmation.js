import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup{
    constructor(selector){
        super(selector);
    }

    open(callback){
        super.open();
        this.callback = callback;
    }

    setEventListeners() {
        super.setEventListeners();
        button = this._popup.querySelector('.button');
        button.addEventListener('click', () => {
            this.callback();
        })
    }
}