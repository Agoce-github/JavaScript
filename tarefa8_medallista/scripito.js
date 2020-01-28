/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

function premio(posicion){

	if(posicion == 1) {
	document.write("la Medalla de oro.");
		} else {
			if(posicion == 2) {
				document.write("la Medalla de plata.")
			} else {
				if(posicion == 3) {
					document.write("la Medalla de bronce.")
				} else {
					document.write("un sabor de boca amargo.")
				}
			}
	}
}


var posi = prompt("¿En qué posición has quedado?");
var nposi = parseFloat(posi);
var end = document.write("Tu posición es "+posi+" por lo que obtienes ");
premio(nposi);