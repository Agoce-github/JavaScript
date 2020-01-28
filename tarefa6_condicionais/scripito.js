/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/


	var posicion;
	posicion = prompt("¿En qué posición has quedado?")

		if(posicion == 1) {
		alert("Medalla de oro");
			} else {
				if(posicion == 2) {
					alert("Medalla de plata")
				} else {
					if(posicion == 3) {
						alert("Medalla de bronce")
					} else {
						alert("No éstás en el podium")
					}
				}
		}