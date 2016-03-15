(function(){

	console.log("Noix.js (v1.0.0)", new Date());	

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


})(window.app = window.app || {});