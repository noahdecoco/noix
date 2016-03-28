var Noix = function(options) {
    this.config = {};

    if(options) {
        for(var key in options){
            if(options.hasOwnProperty(key)){
                this.config[key] = options[key];
            }
        }
    }
};


// Event - attach & notify listeners

Noix.Event = function(sender) {
    this.sender = sender;
    this.listeners = [];
};

Noix.Event.prototype.setSender = function(sender){
    this.sender = sender;
};

Noix.Event.prototype.getSender = function(){
    return this.sender;
};

Noix.Event.prototype.attachListener = function(){
    this.listeners.push(listener);
};

Noix.Event.prototype.removeListener = function(){
    // todo: remove a listener
};

Noix.Event.prototype.notifyListener = function(){
    // todo: notify a particular listener
    console.log("notifying a listener");
};

Noix.Event.prototype.notifyListeners = function(args){
    for(var i = 0; i < _this.listeners.length; i++){
        this.listeners[i](_this.sender, args);
    }
};


// Model - the data

Noix.Model = function(data) {
    this.data = data;
};

Noix.Model.prototype.setData = function(data) {
    this.data = data;
};

Noix.Model.prototype.getData = function() {
    return [].concat(this.data);
};

Noix.Model.prototype.addData = function(data) {
    this.data.concat(data);
};

Noix.Model.prototype.removeData = function(data) {
    // todo: remove data
};

Noix.Model.prototype.clearData = function(data) {
    this.data = [];
};

Noix.Model.prototype.addEventListener = function(){
    this[eventName] = new Noix.Event(this);
};


// View - the user interface

Noix.View = function(model, element) {
    this.model = model;
    this.element = element;
};

Noix.View.prototype.render = function(model, element){
    element.innerHTML = "";
    for (var i = 0; i < this.model.data.length; i++){
        var li = document.createElement("li");
        li.innerHTML = this.model.data[i];
        element.appendChild(li);
    }
};

Noix.View.prototype.registerControl = function(options) {
    this[options.eventName] = new Noix.Event(this);
    console.log(this[options.eventName]);
    options.control.addEventListener("click", this[options.eventName].notifyListener);
};

    


// Controller - handles the events

Noix.Controller = function(model, view) {
    var _this = this;
    _this.model = model;
    _this.view = view;

    var _renderView = function(){
        _this.view.render();
    };


    return {
        renderView : _renderView
    };
};