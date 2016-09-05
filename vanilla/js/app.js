(function() {

  const View = Mn.View.extend({
    template: '#template-layout'
  });

  const App = Mn.Application.extend({
    region: '#app',

    initialize() {
      this.on('start', () => {
        this.showView(new View());
      })
    }
  });

  const app = new App();

  app.start();

})();