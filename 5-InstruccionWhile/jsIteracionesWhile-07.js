/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	let numeroIngresado;
	let contador=0;
	let acumulador=0;
	let respuesta="si";

	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		//modifico la variable de control
		respuesta = prompt("¿desea continuar? si / no ")
	}

	suma = acumulador;

	promedio = suma/contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN