var Noix = function() {

    var _Event = function(sender){
        this._sender = sender;
        this._listeners = [];
    };

    _Event.prototype = {
        attach: function(listener){
            this._listeners.push(listener);
        },
        notify: function(args){
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

    var _View = function(model, elements) {
        var _self = this;
        _self._model = model;
        _self._elements = elements;

        _self._listModified = new _Event(_self);
        _self._addButtonClicked = new _Event(_self);

        _this._model._itemAdded.attach(function(){
            console.log("item added!");
        });

    };

    _View.prototype = {
        render: function(){
            console.log("Rendering " + this._model + " in this " + this._elements);
        }
    };

    return {
        model : _Model,
        view : _View
    };
};