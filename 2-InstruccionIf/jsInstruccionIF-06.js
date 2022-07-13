/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 6 if
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

	else if (edad >=13 && edad <=17) {
		alert("es adolecente");
	}

	else /*if (edad < 13)*/ {
		alert("es un niño");
	}

}//FIN DE LA FUNCIÓN