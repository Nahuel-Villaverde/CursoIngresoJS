/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 5 While

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m" ){

		sexoIngresado = prompt("Error, reingrese el dato");
		
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN