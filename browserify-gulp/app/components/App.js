import {Marionette} from '../../vendor/vendor';
import ItemView from './ItemView';

export default Marionette.Application.extend({
  region: '#app',

  initialize() {
    this.on('start', () => {
      this.showView(new ItemView());
    })
  }
});
