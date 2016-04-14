import {_, $, Backbone, Marionette} from '../vendor/vendor';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  app.start();
});
