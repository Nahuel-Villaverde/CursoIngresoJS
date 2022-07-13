/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 10 if
*/
function mostrar()
{
	let aleatorio;

	aleatorio = parseInt(aleatorio);

	aleatorio = Math.floor(Math.random() * 11);


	alert("Numero aleatorio entre 1 y 10: " + aleatorio );

	if (aleatorio == 9 || aleatorio == 10) {
		alert("Excelente")
	}

	else if (aleatorio >= 4 && aleatorio <= 8) {
		alert("Aprobó")

	}

	else  {
		alert("Vamos que la proxima se puede")

	}

}//FIN DE LA FUNCIÓN