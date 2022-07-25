/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 6 While
*/

	function mostrar()
{
	let numeroIngresado;
	let suma;
	let promedio;
	let contador = 0;
	let acumulador = 0;

	while (contador < 5){
		
		numeroIngresado = prompt("Elija otro numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	suma = acumulador;

	promedio = suma/contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN


/*
let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador = parseInt(acumulador);

	while ( contador + 1 <= 5){

		contador = numeroIngresado - numeroIngresado + 1;
		acumulador = contador + 1 - contador
		acumulador = prompt("Elija otro numero");
	}
	

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
	*/