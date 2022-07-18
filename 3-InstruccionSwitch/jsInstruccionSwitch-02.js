/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 2 Switch
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "junio":
			mensaje = "Falta para el invierno.";
			break
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break
		case "Septiembre":
		case "Octubre":
		case "Noviembre":		
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break
	}
	alert(mensaje);


//septiembre a febrero -> 

}//FIN DE LA FUNCIÓN