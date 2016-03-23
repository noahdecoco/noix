var Noix = function(_init) {
    try {
        // this.init = _init;
    } catch (err) {
        // console.log(err);
    }
};

Noix.prototype = function() {

    var _Event = function(sender){
        this._sender = sender;
        this._listeners = [];
    };

    _Event.prototype = {
        attachListener: function(listener){
            this._listeners.push(listener);
        },
        notifyListener: function(args){
            for(var i = 0; i < this._listeners.length; i++){
                this._listeners[i](this._sender, args);
            }
        }
    };

    var _Model = function(data) {
        var _self = this;
        _self._data = data;
        _self._itemAdded = new _Event(_self);
    };

    _Model.prototype = {
        getData: function(){
            return [].concat(this._data);
        },
        addData: function(data){
            this._data.push(data);
            this._itemAdded.notify({
                data: data
            });
        }
    };

    var _View = function(model, view) {
        var _self = this;
        _self._model = model;
        _self._view = view;

        _self._listModified = new _Event(_self);
        _self._addButtonClicked = new _Event(_self);

        _self._model._itemAdded.attachListener(function(){
            console.log("item added!");
        });
    };

    _View.prototype = {
        render: function(){
            this._view.innerHTML = "";
            for (var i = 0; i < this._model._data.length; i++){
                var li = document.createElement("li");
                li.innerHTML = this._model._data[i];
                this._view.appendChild(li);
            }
        }
    };

    var _Controller = function(){

    };

    return {
        model      : _Model,
        view       : _View,
        controller : _Controller
    };
};