/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

/* Ejercicio */
var v1=16.2345;
var v2=8.0001;
var v3=0.0932;
var v4=2.1005;

/* Raíz cuadrada */
var r1=Math.sqrt(v1);
alert("Raíz cuadrada=" + r1);

/* Número elevado al cuadrado */
var r2=Math.pow(v2,2);
alert("Número elevado al cuadrado=" + r2);

/* Número PI sin decimales */
var r3=Math.PI;
var r4=Math.round(r3);
alert("Número PI sin decimales=" + r4);

/* Número mínimo */
alert("Número mínimo=" + Math.min(v3,v4));

/* Función de número aleatorio entre 0 y 3 */
alert("Número aleatorio=" + Math.random(0,3));
