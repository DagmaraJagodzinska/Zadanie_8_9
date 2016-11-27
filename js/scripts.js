// plik scripts.js

function rysujChoinkę(draw) {
	for (var i = 1 ; i <= draw; i++) {
			var star ='';
		
		for ( var n = 1; n <= i*2 - 1; n++) {
			star += '*';
		}
	console.log(star)
	}
}

rysujChoinkę(10)



