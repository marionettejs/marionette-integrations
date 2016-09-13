import {Marionette} from '../../vendor/vendor';
import ItemView from './ItemView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new ItemView());
  }
});
