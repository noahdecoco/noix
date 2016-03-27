var todoList = document.getElementById("todo-list");
var data = ["Make a todo list", "Learn the MVC pattern"];


var model = new Noix.Model(data);
var view = new Noix.View(model, todoList);

view.registerControl({
	control: document.getElementById("add-item"), //this should be the element
	eventName: "addButtonClicked",
	eventCallback: function(){
		console.log("The add button was clicked");
	}
});

view.registerControl({
	control: document.getElementById("del-item"), //this should be the element
	eventName: "addButtonClicked",
	eventCallback: function(){
		console.log("The delete button was clicked");
	}
});

var controller = Noix.Controller(model, view);
controller.renderView();

console.log(model.getData());
