import 'core-js/stable';
import 'regenerator-runtime';

import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';
}
export default new ResultsView();
