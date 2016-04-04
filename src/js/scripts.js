(function(){

	/*
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
	*/

	
	var Event = function(trigger, listener) {
		var _this = this;
		_this.trigger = trigger;
		_this.listner = listener;

		/*_this.listeners = [];

		return {
			attachListener : function(listener){
				console.log("listener attached");
				_this.listeners.push(listener);
			},
			notifyListener : function(listener){
				console.log("notifying specific listener");
				for(var i = 0; i < _this.listeners.length; i++){
					if(listener === _this.listeners[i]){
						_this.listeners[i].notify();
					}
				}
			},
			notifyListeners : function(){
				console.log("notifying listener");
				for(var i = 0; i < _this.listeners.length; i++){
					_this.listeners[i].notify();
				}
			}
		};*/
	};

	var Listener = function(){
		return {
			shot : function(){
				console.log("listener shot");
			}
		};
	};

	var Trigger = function(){
		return {
			pull : function(){
				console.log("trigger pulled");
			}
		};
	};

	var t = new Trigger();
	var l = new Listener();

	var e = new Event(t.pull, l.shot);

	t.pull();
	// e.attachListener(l1);
	// e.notifyListener(l1);

	

	/*var m = new Noix.Model();
	var v = new Noix.View(m);

	var e = new Noix.Event();

	e.setSender(m.addData);
	e.attachListener(v.render);

	e.notifyListener(v.render);*/


})();






function Event(sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach: function (listener) {
        this._listeners.push(listener);
    },
    pullTrigger: function (args) {
        console.log("trigger pulled");
    }
};

/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var Model = function() {
    
    this.eventName = new Event(this);
    this.eventTrigger = function (args) {
        this.eventName.pullTrigger();
    };
};


var View = function(){
    
    this.eventName = new Event(this);
    this.eventTrigger = function (args) {
        this.eventName.pullTrigger();
    };
};

