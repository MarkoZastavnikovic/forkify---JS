import 'core-js/stable';
import 'regenerator-runtime';

import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _message = 'No bookmarks. Find a nice recipe and bookmark it!';

  addHandlerBookmarksRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
