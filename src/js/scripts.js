(function(){

	console.log("Hello Coco (v1.0.0)");	

	var buttons = document.getElementsByClassName('button');
	var mainContent = document.getElementById('content');
	var http;

	var createRequestObject = function() {
	    var obj;
	    var browser = navigator.appName;
	    if (browser == "Microsoft Internet Explorer") {
	        obj = new ActiveXObject("Microsoft.XMLHTTP");
	    } else {
	        obj = new XMLHttpRequest();
	    }
	    return obj;
	};

	var sendReq = function(req) {   
	    http = createRequestObject();
	    http.open('get', req);
	    http.onreadystatechange = handleResponse;
	    http.send(null);
	};

	var handleResponse = function() { 
	    if (http.readyState == 4) {
	        var response = http.responseText;
	        mainContent.innerHTML=response;
	    }
	};

	var buttonClicked = function(evt){
		evt.preventDefault();
		console.log(evt.target.href);
		sendReq(evt.target.href);
	};

	var init = function(){
		for (var i = buttons.length - 1; i >= 0; i--) {
			buttons[i].addEventListener("click", buttonClicked);
		}
	};

	init();


})(window.app = window.app || {});