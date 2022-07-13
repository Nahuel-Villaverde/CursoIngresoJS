/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 8 if
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18 && document.getElementById("estadoCivil").value == "Soltero") {
		alert("Es Soltero y no es menor")
	}
	
}//FIN DE LA FUNCIÓN