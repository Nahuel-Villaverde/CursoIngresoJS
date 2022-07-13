/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 5 if
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad <13 || edad >17) {
		alert("no es adolecente");
	}

	/*else if (edad) {
		alert("no es adolecente");
	}
	*/

}//FIN DE LA FUNCIÓN