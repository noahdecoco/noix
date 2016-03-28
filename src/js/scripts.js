(function(){

	/*var element = document.getElementById("todo-list");
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
	});*/

	var Event = function(sender){
		this.sender = sender;
		this.listeners = [];
	};

	Event.prototype = {
		attach: function(){

		},
		notify: function(){
			
		}
	};

	var Model = function(data){
		this.data = data;

		this.itemAdded = new Event(this);
	};

	var View = function(element){
		this.element = element;

		this.AddClicked = new Event(this); 
	};

	var Controller = function(model, view) {
		this.model = model.data;
		this.view = view.element;
		this.sayHello = function(){
			this.view.innerHTML = this.model;
		};
	};

	var m = new Model("Hello World");
	var v = new View(document.body);
	var c = new Controller(m, v);

	c.sayHello();

})();