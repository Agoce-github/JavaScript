/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var ducias;
ducias = prompt("¿Cuántas ducias de huevos lleva una tortilla?")
var numero;
numero = parseInt(ducias);
alert("Has dicho " + numero);

var huevos;
huevos = (numero + " ducias son " + numero*12 + " huevos.");
alert(huevos);

// Con "ducias = prompt(Respuesta)" se le da el valor de "Respuesta" a "ducias".

// Con "parseInt(ducias)" conviertes "Respuesta" de texto a un valor numérico.