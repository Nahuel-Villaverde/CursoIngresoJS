/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 3 if
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {

		alert("es mayor de edad");

	}

	else if (edad < 18) {
		alert("es menor de edad")
	}

}//FIN DE LA FUNCIÓN