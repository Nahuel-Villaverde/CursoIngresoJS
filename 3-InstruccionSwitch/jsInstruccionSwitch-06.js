/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 6 Switch
*/
function mostrar()
{
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	if (hora <= 24 && hora >=0) {
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde.";
			break;

		default:
			mensaje = "Es de noche.";
			break;

	}
	}
	else {
		mensaje = "la hora no existe."; 
	}	
alert(mensaje);



}//FIN DE LA FUNCIÓN