/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 3 While

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada !== "utn750"){

		claveIngresada = prompt("Error, reingrese la clave");
		
	}

	console.log("Adelante, contraseña correcta");
	
}//FIN DE LA FUNCIÓN
