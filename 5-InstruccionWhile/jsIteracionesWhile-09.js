/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 9 While
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let autos = 0;
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	banderaDelPrimero="0";
	respuesta="si";

	while(respuesta=="si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));

		if(banderaDelPrimero == 0){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		else {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			}
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
		}

		autos = autos + 1;
		respuesta = prompt("Queres seguir ingresando numeros?");	
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN