module.exports =  {

  getOption: function (boilerplates, options) {
    var option;

    for (var i in boilerplates) {
      var type = boilerplates[i];

      if (options[type]) {
        option = type;
        break;
      }
    }

    if (option) {
      return option;
    } else {
      throw new Error('Wrong boilerplate type was set');
    }
  },

  getSourcePath: function (sourceRoot, boilerplateType) {
    return sourceRoot.replace(/app\/templates/gi, boilerplateType);
  },

  generateApp: function (boilerplates) {
    var option = this.getOption(boilerplates, this.options);
    var sourceRoot = this.sourceRoot();
    var source = this.getSourcePath(sourceRoot, option);
    var destination = this.destinationRoot(option);
    
    this.fs.copy(source, destination, { globOptions: { dot: true } });
  }
};
