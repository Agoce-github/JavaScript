/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

/////// CÓDIGO 1 ////////////////////////////////////////////////////////////////////////

document.write('<h2> Bucle FOR </h2>');

document.write('<h3> ☞ Facer algo cinco veces </h3>');

for (var i=7; i>=5; i--){
	document.write('<p> Había una vez un barquito chiquitito... </p>');
}

/// Que pasa se en troques de 5 pos 27 ?
/// El bucle se repetirá 27 veces.

/// E se non repites o signo máis e pos dous signos menos inicializando a variable a 7 ?
/// El bucle se repetirá 3 veces (desde 7 irá restando 1 hasta que se cumpla i>=5).
/// [[DEBEMOS ACORDARNOS DE CAMBIAR "i<=5" por "i>=5" PARA QUE FUNCIONE SI "i--"]]
/// [[YA QUE ESTAMOS DANDOLE LA VUELTA A TODO POR DECIRLO DE ALGUNA MANERA.     ]]

/////////////////////////////////////////////////////////////////////////////////////////

/////// CÓDIGO 2 ////////////////////////////////////////////////////////////////////////

document.write('<h3> ☞ Outra canción infantil </h3>');
for (var i=13; i>= 10; i--) {
	document.write(i +' 🐘 se balanceaban sobre la tela... ');
}

/// Que pasa se en troques de 2 pos 0 ?
/// El bucle comenzará en 0 y sumará 1 hasta que se cumpla i>=10, es decir, se repetirá 11 veces.

/// E se non repites o signo máis e pos dous menos inicializando a variable a 13 ?
/// El bucle comenzará en 13 e irá restando 1 hasta que se cumpla i>=10.
/// [[DEBEMOS ACORDARNOS DE CAMBIAR "i<=10" por "i>=10" PARA QUE FUNCIONE SI "i--"]]
/// [[YA QUE ESTAMOS DANDOLE LA VUELTA A TODO POR DECIRLO DE ALGUNA MANERA.       ]]

/////////////////////////////////////////////////////////////////////////////////////////

/////// CÓDIGO 3 ////////////////////////////////////////////////////////////////////////

document.write('<h3> ☞ Aprender a contar ata 10 </h3>');
for (var i=0; i<= 10; i++) {
	document.write(i + ', ');
}

///modifica todo para que conte de 22 ata 33

document.write('<h3> ☞ DESDE 22 A 33 </h3>');
for (var i=22; i<= 33; i++) {
	document.write(i + ', ');
}

///modifica todo para que conte para atrás de 88 ata 77

document.write('<h3> ☞ DE 88 A 77 </h3>');
for (var i=88; i>= 77; i--) {
	document.write(i + ', ');
}

/////////////////////////////////////////////////////////////////////////////////////////

/////// CÓDIGO 4 ////////////////////////////////////////////////////////////////////////

document.write('<h3> ☞ Aprender a contar ata 44 de cinco en cinco comezando en 10 </h3>');
for (var i=10; i<= 44; i=i+5) {
	document.write(i +', ');
}

/// modifica todo para que nos dea a lista de números pares

document.write('<h3> ☞ LISTA DE NÚMEROS PARES </h3>');
for (var i=10; i<= 44; i=i+2) {
	document.write(i +', ');
}