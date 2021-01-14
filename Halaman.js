

function SendWa(){
	var message = document.getElementById("message").value
	// alert(message)
	location.href = "https://wa.me/6281331255119?text=" + message
}

function Maps(w, g){
	var latlng = new google.maps.LatLng(-6.21, 106.85),
	options +{
		center : latlng,
		zoom: 12
	},
	map = new google.maps.Map(document.getElementById('map'), options);
}(window, google);
