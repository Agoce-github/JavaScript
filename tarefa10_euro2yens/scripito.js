/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var newpro = "¿Has comprado algo más?";
var rnew;
rnew = true;
while (rnew == true) {

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
				pre1 = parseFloat(fr2)*120.29;
				pre11 = pre1.toFixed(2);
				document.write("<br/><br/>Los "+fr2+"€ que has pagado por "+fr1+" equivalen a "+pre11+" Yens(¥).");
					document.write("<br/><br/>El valor de "+fr1+" es de:");
					document.write("<br/>Euros(€)= "+pre11);
					document.write("<br/>Yens(¥)= "+pre1);
			break;
			case 'yen':
			case 'yens':
			case 'Yen':
			case 'Yens':
			case '¥':
				var pre2;
				pre2 = parseFloat(fr2)/120.29;
					pre22 = pre2.toFixed(2);
				document.write("<br/><br/>Los "+fr2+"¥ que has pagado por "+fr1+" equivalen a "+pre22+" Euros(€).");
					document.write("<br/><br/>El valor de "+fr1+" es de:");
					document.write("<br/>Euros(€)= "+pre22);
					document.write("<br/>Yens(¥)= "+pre2);
			break;

			default:
				document.write('<br/><br/>Lo siento solo trabajamos con Euros (€) o Yens (¥), por favor, inténtelo de nuevo.');
			break;
		}
	rnew = confirm(newpro);
}

