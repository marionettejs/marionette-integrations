require.config({
    baseUrl: '.',

    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
        marionette: 'bower_components/marionette/lib/core/amd/backbone.marionette'
    }
});

require(['app'], function(App) {
    // LOADED
});