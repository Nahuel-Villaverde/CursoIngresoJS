/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 7 if
*/
function mostrar()
{
	//tomo la edad  
	let edad;
	//let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	//estadoCivil =	document.getElementById("estadoCivil").value;
	edad = parseInt(edad);

	if (edad < 18 && document.getElementById("estadoCivil").value !== "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN