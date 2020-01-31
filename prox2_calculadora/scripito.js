/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var num1;
	num1 = prompt("Dame un número");
	num11 = parseFloat(num1);

var num2;
	num2 = prompt("Dame otro número");
	num22 = parseFloat(num2);

document.write("Tus números son "+num1+" y "+num2+".");
document.write("<br/>Se aproximará a dos decimales.");


function suma1(a, b){
    	var suma = Math.round((a+b)*100)/100 ;
        document.write("<br/> Si los sumamos = " + suma);

    }
    suma1(num11,num22);


function resta1(a, b){
    	var resta = Math.round((a-b)*100)/100 ;
        document.write("<br/> Si los restamos = " + resta);

    }
    resta1(num11,num22);


function multi1(a, b){
    	var multi = Math.round((a*b)*100)/100 ;
        document.write("<br/> Si los multiplicamos = " + multi);

    }
    multi1(num11,num22);


function divi1(a, b){
    	var divi = Math.round((a/b)*100)/100 ;
        document.write("<br/> Si los dividimos = " + divi);

    }
    divi1(num11,num22);