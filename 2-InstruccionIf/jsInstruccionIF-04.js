/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 4 if
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >=13 && edad <=17) {

		alert("es adolecente");
	}

	/*else if (edad) {
		alert("no es adolecente");
	}
	*/
}