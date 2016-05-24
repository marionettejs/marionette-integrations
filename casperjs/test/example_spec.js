casper.options.page = '../public/index.html';

casper.test.begin('Toggle sources content', 2, function suite(test) {
  casper.start("http://127.0.0.1:8080");

  casper.then(function() {
    this.click('.js-toggle-sources-btn');
  });

  casper.then(function() {
    this.test.assertDoesntExist('.js-sources-container.hide');
  });

  casper.then(function() {
    this.click('.js-toggle-sources-btn');
  });

  casper.then(function() {
    this.test.assertExists('.js-sources-container.hide');
  });

  casper.run(function() {
    test.done();
  });
});