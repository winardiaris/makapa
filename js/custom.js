
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(setPosition);
	    } 
	    else { 
	       alert("Geolocation is not supported by this browser.");
	    }
	}
	function getLocation2() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(setPosition2);
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
			var tempc = Math.round(data.main.temp-(273.15));
			$("#temp").html(tempc);	
			setAddress();
			getMenu(setLat,setLon,tempc);
			distance(setLat, setLon, "-6.310486976553708", "106.81328701481937")
		});
		
	}	
		
	function setPosition(position) {
	    var lat =	position.coords.latitude,
			lon = 	position.coords.longitude;	
			
			getWeather(lat,lon);
			$('#maps').locationpicker({
				location: {latitude: lat, longitude: lon},
				radius: 500,
				inputBinding: {
					locationNameInput: $('#location')
				},
				enableAutocomplete: true,
				onchanged: function(currentLocation, radius, isMarkerDropped) {
					getWeather(currentLocation.latitude,currentLocation.longitude);
				}
			});
	}
	function setPosition2(position) {
	    var lat =	position.coords.latitude,
			lon = 	position.coords.longitude;	
			
			showLatLonModal('#showLatLon',lat,lon);
						
			$('#us6').locationpicker({
				location: {latitude: lat, longitude: lon},
				radius: 100,
				inputBinding: {
					locationNameInput: $('#us6-address')
				},
				enableAutocomplete: true,
				onchanged: function(currentLocation, radius, isMarkerDropped) {
					showLatLonModal('#showLatLon',currentLocation.latitude,currentLocation.longitude);
				}
			});						
	}
	function showLatLonModal(id,lat,lon){
		$(id).html(lat+" (lat)<br>"+lon+" (lon)");
	};
	
	
	function getMenu(lat,lon,temp){
		$.getJSON("server.php?lat="+lat+"&lon="+lon+"&temp="+temp, function (data) {
			alert(data.makanan[1]);
		});
	}
	
	function distance(lat1, lon1, lat2, lon2) {
		var R = 6371;
		var a =	0.5 - Math.cos((lat2 - lat1) * Math.PI / 180)/2 + 
				Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
				(1 - Math.cos((lon2 - lon1) * Math.PI / 180))/2;
		
		aa=R * 2 * Math.asin(Math.sqrt(a));
		m =aa*1000;
		alert(m);
	}
	
