import {Marionette} from '../../vendor/vendor';
import template from '../templates/item.jst';

export default Marionette.View.extend({
  template: template,
  ui: {
    toggleSrcBtn: '.js-toggle-sources-btn',
    toggleSrcContent: '.js-sources-container'
  },
  events: {
    'click @ui.toggleSrcBtn': 'toggleSrc'
  },

  toggleSrc() {
    this.ui.toggleSrcContent.toggleClass('hide');
  }
});
