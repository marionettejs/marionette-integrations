module.exports = {
  paths: {
    watched: ['app', 'specs']
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app|specs)/,
        'app.js': /^app/,
        'specs.js': /^specs/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {
      joinTo: {'app.js': /^app\/templates/}
    }
  },
  npm: {
    globals: {
      $: 'jquery'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015']
    }
  },
  overrides: {
    test: {
      modules: {
        autoRequire: {
          'specs.js': ['specs/initialize']
        }
      },
      plugins: {
        karma: {
          browsers: ['PhantomJS'],
          frameworks: ['jasmine'],
          files: [
            'public/vendor.js',
            'public/app.js',
            'public/specs.js'
          ],
          singleRun: true
        }
      }
    }
  }
};
