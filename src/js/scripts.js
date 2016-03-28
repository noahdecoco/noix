(function(){

	var todoList = document.getElementById("todo-list");
	var data = ["Make a todo list", "Learn the MVC pattern"];


	var evt = new Noix.Event("a sender");
	console.log(evt.getSender());
	evt.setSender("another one");
	console.log(evt.getSender());

	/*var model = new Noix.Model(data);

	var view = new Noix.View(model, todoList);

	view.registerControl({
		control: document.getElementById("add-item"), //this should be the element
		eventName: "addButtonClicked",
		eventCallback: function(){
			console.log("The add button was clicked");
		}
	});

	var controller = Noix.Controller(model, view);

	controller.renderView();*/

})();