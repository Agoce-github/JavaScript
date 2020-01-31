/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

document.write("<h1>Tu compra:</h1>");

	var fr11;
	fr11 = prompt("¿Cuál es tu primer producto?");
	var fr12;
	fr12 = prompt("¿Qué valor tiene "+ fr11 +"?");
	var fr13;
	fr13 = parseFloat(fr12);
	document.write("<br/>"+fr11+" = "+fr12+"€");


	var fr21;
	fr21 = prompt("¿Cuál es tu segundo producto?");
	var fr22;
	fr22 = prompt("¿Qué valor tiene "+ fr21 +"?");
	var fr23;
	fr23 = parseFloat(fr22);
	document.write("<br/>"+fr21+" = "+fr22+"€");


	var fr31;
	fr31 = prompt("¿Cuál es tu tercer producto?");
	var fr32;
	fr32 = prompt("¿Qué valor tiene "+ fr31 +"?");
	var fr33;
	fr33 = parseFloat(fr32);
	document.write("<br/>"+fr31+" = "+fr32+"€");

    function sumita(a, b, c){
    	var total = Math.round((a+b+c)*100)/100 ;
        document.write("<br/> TOTAL = " + total + "€");

    }
    
    sumita(fr13,fr23,fr33);
