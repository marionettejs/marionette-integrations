module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {
      defaultExtension: 'jst',
      joinTo: {'app.js': /^app\/templates/}
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      Marionette: 'backbone.marionette',
      Backbone: 'backbone.marionette/node_modules/backbone'
    }
  },
  plugins: {
    babel: {presets: ['es2015']}
  }
};
