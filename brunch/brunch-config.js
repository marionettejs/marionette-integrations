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
  plugins: {
    babel: {presets: ['es2015']}
  }
};
