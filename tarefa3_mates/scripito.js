/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var moito = 9 ; /* Creamos la variable */
var raiz = Math.sqrt(moito); /* Math.sqrt(x) hace la raíz cuadrada de "x" */
alert(raiz); /* Muestra el resultado de la variable "raiz" */

/* Ejercicio */
var v1=16;

/* Raíz cuadrada */
var r1=Math.sqrt(v1);
alert("Raíz cuadrada=" + r1);

/* Número elevado al cuadrado */
var r2=Math.pow(5,2);
alert("Número elevado al cuadrado=" + r2);

/* Número PI sin decimales */
var r3=Math.PI;
var r4=Math.round(r3);
alert("Número PI sin decimales=" + r4);

/* Número mínimo */
var r5=53;
var r6=82;
alert("Número mínimo=" + Math.min(r5,r6));

/* Función de número aleatorio entre 0 y 3 */
alert("Número aleatorio=" + Math.random(0,3));
