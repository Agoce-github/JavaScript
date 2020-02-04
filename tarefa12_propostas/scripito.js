/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

document.write("Retoma o proxecto matemático da Tarefa 3 e que xenere na páxina cadros de texto para que o usuario introduza neles dous números e mostre as operacións feitas na mesma páxina web.<br/><br/>");

function resultado() {
	var b1;
	b1 = document.getElementById("numero1").value;
	var b2;
	b2 = document.getElementById("numero2").value;

		var r1=Math.sqrt(b1);
		var r12=r1.toFixed(2);
		document.write("<br/>La raíz cuadrada de "+b1+" es "+r12+" .");
		var r11=Math.sqrt(b2);
		var r13=r11.toFixed(2);
		document.write("<br/>La raíz cuadrada de "+b2+" es "+r13+" .");

		var r2=Math.pow(b1,2);
		var r22=Math.pow(b2,2);
		document.write("<br/><br/>"+b1+" elevado al cuadrado es "+r2.toFixed(2)+" .");
		document.write("<br/>"+b2+" elevado al cuadrado es "+r22.toFixed(2)+" .");

		var r3=Math.PI;
		var r4=Math.round(r3);
		document.write("<br/><br/>El número PI sin decimales es "+r4+" , o lo dudabas?");
		document.write("<br/>Con solo 2 decimales es "+r3.toFixed(2)+" .");
		document.write("<br/>Con solo 6 decimales es "+r3.toFixed(6)+" .");
		document.write("<br/>Y con 20 decimales es "+r3.toFixed(20)+" . Vaya tela.");
		document.write("<br/>Y si probamos con 80 decimales es "+r3.toFixed(80)+" . <br/>Vaya, a tanto no llega, pero no es culpa de PI.");

		document.write("<br/><br/>El número más pequeño entre "+b1+" y "+b2+" es claramente "+Math.min(b1,b2)+" .");

		var we=Math.random(b1,b2);
		var wewe= we*10;
		document.write("<br/><br/>Un número aleatorio entre "+b1+" y "+b2+" es "+we+" , o no, porque Math.random funciona así... muy random.");
		document.write("<br/>Pero si hacemos Math.random("+b1+" + "+b2+")*10 lo arreglamos? Nos daría "+wewe.toFixed(3)+" .");
		document.write("<br/>Tengo que buscar una función para esto.");
	}