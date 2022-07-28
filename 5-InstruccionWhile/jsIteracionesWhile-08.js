/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 8 While
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		contador = contador + 1;

		//modifico la variable de control
		respuesta = prompt("¿desea continuar? si / no ")

	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN