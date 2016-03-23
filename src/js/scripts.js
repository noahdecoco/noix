var todoList = document.getElementById("todo-list");
var data = ["Make a todo list", "Learn the MVC pattern"];

var noix = new Noix();
var model = new noix.model(data);
var view = new noix.view(model, todoList);

view.render();