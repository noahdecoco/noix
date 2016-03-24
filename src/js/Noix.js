var Noix =  { version : 1 };

// Event - attach & notify listeners

Noix.Event = function(sender){
    var _this = this;
    _this.sender = sender;
    _this.listeners = [];

    var _attachListener = function(listener){
        _this.listeners.push(listener);
    };

    var _notifyListener = function(args){
        for(var i = 0; i < _this.listeners.length; i++){
            _this.listeners[i](_this.sender, args);
        }
    };

    return {
        attachListener : _attachListener,
        notifyListener : _notifyListener
    };
};


// Model - the data

Noix.Model = function(data) {
    var _this = this;
    _this.data = data;
    _this.itemAdded = new Noix.Event(_this);

    var _getData = function() {
        return [].concat(_this.data);
    };

    var _addData = function() {
        _this.data.push(data);
        _this.itemAdded.notify({
            data: data
        });
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

    _this.listModified = new Noix.Event(_this);
    _this.addButtonClicked = new Noix.Event(_this);
    _this.delButtonClicked = new Noix.Event(_this);

    // _this.model.itemAdded.attachListener(function(){
        // console.log("item added");
    // });
    
    var _render = function() {
        _this.elements.innerHTML = "";
        for (var i = 0; i < _this.model.getData().length; i++){
            var li = document.createElement("li");
            li.innerHTML = _this.model.getData()[i];
            _this.elements.appendChild(li);
        }
    };

    return {
        render : _render
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