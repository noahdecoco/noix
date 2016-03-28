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
};

Noix.Event.prototype.notifyListeners = function(args){
    for(var i = 0; i < _this.listeners.length; i++){
        this.listeners[i](_this.sender, args);
    }
};


// Model - the data

Noix.Model = function(data) {
    var _this = this;
    _this.data = data;
    _this.itemAdded = new Noix.Event(_this);

    var _getData = function() {
        return [].concat(_this.data);
    };

    var _addData = function(d) {
        
    };

    return {
        getData : _getData,
        addData : _addData
    };
};


// View - the user interface

Noix.View = function(model, elements) {
    var _this = this;
    _this.model = model;
    _this.elements = elements;
    
    var _render = function() {
        _this.elements.innerHTML = "";
        for (var i = 0; i < _this.model.getData().length; i++){
            var li = document.createElement("li");
            li.innerHTML = _this.model.getData()[i];
            _this.elements.appendChild(li);
        }
    };

    var _registerControl = function(options) {
        // console.log("Register button", options);
        _this[options.eventName] = new Event(_this);
        console.log(_this[options.eventName]);
        // options.control.addEventListener("click", _this[options.eventName].notifyListener);
    };

    return {
        render : _render,
        registerControl : _registerControl
    };
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