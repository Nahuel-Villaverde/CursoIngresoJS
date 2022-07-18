/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 4 Switch
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días.";
			break;

		default:
			mensaje = "Este mes tiene 31 días";
			break;

	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN