var generators = require('yeoman-generator');
var Helpers = require('./helpers');
var boilerplates = [
  "webpack",
  "browserify",
  "browserify-gulp",
  "browserify-grunt",
  "brunch",
  "casperjs",
  "cypress",
  "jasmine",
  "mocha",
  "webpack",
  "vanilla"
];

var MnIntegrations = generators.Base.extend(Helpers);

module.exports = MnIntegrations.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    for (var i in boilerplates) {
      var boilerplate = boilerplates[i];
      this.option(boilerplate, {desc: 'Generate boilerplate for ' + boilerplate});
    }
  },

  exec: function () {
    this.generateApp(boilerplates, this.options);
  }
});
