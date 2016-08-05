import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

export default Marionette.Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
      this.showView(new ItemView());
    })
  }
});
