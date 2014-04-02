_ = require('underscore')
Marionette = require('backbone.marionette')

module.exports = Marionette.ItemView.extend({
  template: _.template("<h2>i am the cat man</h2>")
});

