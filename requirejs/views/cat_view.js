define(function(require) {
    var _ = require('underscore'),
        Marionette = require('marionette');

    return Marionette.ItemView.extend({
        template: _.template("<h2>i am the cat man</h2>")      
    });
});