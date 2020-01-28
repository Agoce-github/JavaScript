/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var fr1;
fr1 = prompt("¿Cuál es el producto?");

var fr2;
fr2 = prompt("¿Qué valor tiene "+ fr1 +"?");

var fr3;
fr3 = prompt("¿En qué moneda has pagado la cantidad de "+ fr2 +"?");

switch(fr3)
{
	case 'euro':
	case 'euros':
	case 'Euro':
	case 'Euros':
	case '€':
		var pre1;
		pre1 = parseInt(fr2)*120.29;
		document.write("Los "+fr2+"€ que has pagado por "+fr1+" equivalen a "+pre1+" Yens(¥).");
	break;
	case 'yen':
	case 'yens':
	case 'Yen':
	case 'Yens':
	case '¥':
		var pre2;
		pre2 = parseInt(fr2)/120.29;
		document.write("Los "+fr2+"¥ que has pagado por "+fr1+" equivalen a "+pre2+" Euros(€).");
	break;

	default:
		document.write('Lo siento solo trabajamos con Euros (€) o Yens (¥), por favor, inténtelo de nuevo.');
	break;
};

document.write("<br/><br/>El valor de "+fr1+" es de:");
document.write("<br/>Euros(€)= ");
document.write("<br/>Yens(¥)= ");


///ANOTACIONES
document.write("<br/><br/><br/>PROFE, no he podido completar el ejercico al completo.");
document.write("<br/>No termino de comprender los bucles y las funciones. He echo lo que he podido.");
document.write("<br/>Espero poder asimilar el conocimiento de JavaScript pronto para acabar esta práctica.");
document.write("<br/><br/>Me voy a dormir.");

