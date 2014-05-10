define(function(require) {
    var CatView = require("views/cat_view");

    var catView = new CatView({
      el: "body"
    });

    catView.render();
});

