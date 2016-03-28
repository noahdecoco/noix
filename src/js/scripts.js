(function(){

	var element = document.getElementById("todo-list");
	var data = ["Make a todo list", "Learn the MVC pattern"];


	var model = new Noix.Model(data);
	var view = new Noix.View(model, element);

	var addButtonClicked = function(){
		console.log("The add button was clicked");
	};

	view.registerControl({
		control: document.getElementById("add-item"),
		eventName: "addButtonClicked",
		eventCallback: addButtonClicked
	});


	/*

	var view = new Noix.View(model, todoList);


	var controller = Noix.Controller(model, view);

	controller.renderView();*/

})();