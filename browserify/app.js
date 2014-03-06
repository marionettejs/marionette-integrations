// add backbone.marionette into the window
require("./marionette_shim")

CatView   = require("./views/cat_view");

var catView = new CatView({
  el: "body"
});

catView.render();
