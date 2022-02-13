import 'core-js/stable';
import 'regenerator-runtime';

import View from './View.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded!';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  closeWindow() {
    this._overlay.classList.add('hidden');
    this._window.classList.add('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  closeWindowESC(e) {
    if (e.key === 'Escape') {
      this.toggleWindow();
    }
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    document.addEventListener('keydown', this.closeWindowESC.bind(this));
  }

  addHandlerUpload(handler) {
    try {
      this._parentElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const dataArray = [...new FormData(this)];
        const data = Object.fromEntries(dataArray);

        const ingredients = Object.entries(data)
          .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
          .map(ing => ing[1].split(',').map(el => el.trim()));
        console.log(ingredients);
        if (!ingredients.every(el => el.length === 3))
          return alert('Wrong ingredient entry format!');

        handler(data);
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AddRecipeView();
