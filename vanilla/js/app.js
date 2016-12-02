(function() {

  const View = Mn.View.extend({
    template: '#template-layout'
  });

  const App = Mn.Application.extend({
    region: '#app',

    onStart() {
      this.showView(new View());
    }
  });

  const app = new App();

  app.start();

})();