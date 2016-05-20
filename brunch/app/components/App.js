import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

export default Marionette.Application.extend({
  regions: {
    app: '#app'
  },
  initialize() {
    this.on('start', () => {
      this.getRegion('app').show(new ItemView());
    })
  }
});
