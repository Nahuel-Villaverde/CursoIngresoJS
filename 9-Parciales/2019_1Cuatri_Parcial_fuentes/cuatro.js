/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 11 if (practica parcial)
*/
function mostrar()
{	
	let numero1;
	let numero2;
	let cuenta;

	numero1 = prompt("Elija un numero")
	numero2 = prompt("Elija otro numero")

	/*numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	*/

	if (numero1 == numero2){
		alert(numero1 + numero2);
	}
	else if (numero1 > numero2){

		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);

		alert(numero1 - numero2);

	}
	else if  ((numero1 - numero2) > 10) {
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);
		cuenta = (numero1 - numero2);
		numero2 = parseInt(numero2);
		alert("la resta es "  + cuenta + " y superó el 10");
	
	}
	else if (numero1 < numero2){

		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);

		alert(numero1 + numero2);
	}




	
}
