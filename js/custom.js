	$(document).ready(function(){
		//$(".weather").hide();
		
		//$.getJSON("http://jsonip.com?callback=?", function (data) {
			//$("#ip").html(data.ip);
		//});
		
		
	});
	
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(setPosition);
	    } 
	    else { 
	       alert("Geolocation is not supported by this browser.");
	    }
	}
		
	function setAddress(){
		var address = $("#location").val().split(",");				
			$("#address").html(address[0]);
	}
	function getWeather(setLat,setLon){
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+setLat+"&lon="+setLon, function (data) {
			var tempc = data.main.temp-(273.15);	
			$("#temp").html(Math.round(tempc));	
			setAddress();
			getMenu();
		});
		
	}	
		
	function setPosition(position) {
	    var lat =	position.coords.latitude,
			lon = 	position.coords.longitude;	
			
			getWeather(lat,lon);
			$('#maps').locationpicker({
				location: {latitude: lat, longitude: lon},
				radius: 200,
				inputBinding: {
					locationNameInput: $('#location')
				},
				enableAutocomplete: true,
				onchanged: function(currentLocation, radius, isMarkerDropped) {
					getWeather(currentLocation.latitude,currentLocation.longitude);
				}
			});
	}
	function getMenu(){
		var temp = $("#temp").html();
		$.getJSON("server.php?temp="+temp, function (data) {
			alert(data.makanan[1]);
		});
	}
	
