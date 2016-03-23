var noix = new Noix();
var model = new noix.model(["item1", "item2"]);
var view = new noix.view(model, "document");
view.render();