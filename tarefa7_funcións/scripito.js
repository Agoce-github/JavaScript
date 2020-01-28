/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

//	CÓDIGO 1
    //	function sumita(a, b){
    //     alert(a+b);
    //	}
    //	sumita(11,22);

/*  Fabrica unha función como a do código 1 que se chame multiplicar() e
    que reciba tres parámetros. Chama a esa función con multiplicar(1,1,5);*/

	function multiplicar(a,b,c){
		alert("multiplicar= " + (a*b*c));
	}
	multiplicar(1,1,5);


//	CÓDIGO 2
    //	function dividir(x,y){
    // 		return x/y;
    //	}
    //	var resultado = dividir(6,3);
    //	alert(resultado);

/* Fabrica unha función coma no código 2 que se chame encadear(); que reciba
dous parámetros que sexan cadeas de caracteres. Chama a esa función con
encadear("Boas","tardes"); para que mostre na alerta o resultado de encadenar
esas palabras (debidamente escrito: con espazo intermedio).*/

	function encadear(a,b){
		return a+" "+b;
	}
	var resultado = encadear("Boas","tardes");
	alert("encadear= "+resultado);


//	CÓDIGO 3
	//  function mediaNotas(trim1, trim2, trim3){
	//		return (trim1 + trim2 + trim3)/3;
	//  }
	//  alert(mediaNotas(8,8,7));

/*	¿Cal é a diferencia entre o código 2 e o código 3?*/

/*	La única diferencia es la propia cuenta que se hace (en el código 2 se hace
	una división, mientras que en el código 3 se hace la media), la estructura es
	igual en los dos códigos.*/