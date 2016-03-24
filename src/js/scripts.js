var todoList = document.getElementById("todo-list");
var data = ["Make a todo list", "Learn the MVC pattern"];


var model = new Noix.Model(data);
var view = new Noix.View(model, todoList);
var controller = Noix.Controller(model, view);
controller.renderView();

console.log(model.getData());

/*
var view = new noix.view(model, todoList);

view.render();*/