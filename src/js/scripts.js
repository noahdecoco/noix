(function(){

	console.log("Noix.js (v1.0.0)", new Date());	

	var transitionSpeed = 500;

	var mainContent = document.getElementById('content');
	var http = new XMLHttpRequest();

	var sendReq = function(req) {
	    http.open('get', "views/" + req + ".html");
	    http.onreadystatechange = handleResponse;
	    http.send(null);
	};

	var handleResponse = function() {
		if(http.status !== 404) {
		    if (http.readyState == 4) {
		        var response = http.responseText;
		        mainContent.innerHTML=response;
		    }
		} else {
			mainContent.innerHTML = "404";
		}
	};

	var routes = {
		'/:req': sendReq
	};

  	var router = Router(routes);

	router.init('/about');


	var Noix = function(settings) {

		this.config = {
			greetMessage: "Whats up"
		};

		return this;
	};

	Noix.prototype.sayHello = function() {
		console.log(this.config.greetMessage);
	};

	Noix.prototype.sayByebye = function() {
		console.log("Bye");
	};

	var noix = new Noix();
	console.log(noix);
	noix.sayHello();


})(window.app = window.app || {});