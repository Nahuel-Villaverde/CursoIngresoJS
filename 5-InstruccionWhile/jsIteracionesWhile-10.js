/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 10 While
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let respuesta;
	let sumaPositivos = 0;
	let sumaNegativos = 0;
	let contadorCeros = 0;
	let contadorPar = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	respuesta="si";

	while(respuesta == "si"){
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}
		else if(numeroIngresado == 0){
			contadorCeros = contadorCeros + 1;
		}
		else {
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}
		if (numeroIngresado % 2 == 0) {
			contadorPar = contadorPar + 1;
		}

		//modifico la variable de control
		respuesta = prompt("¿desea continuar? si / no ")

	}
		promedioPositivos = sumaPositivos/contadorPositivos;
		promedioNegativos = sumaPositivos/contadorNegativos;

		diferencia = sumaPositivos - sumaNegativos ;

	document.write("la suma de positivos da " + sumaPositivos + "<br>");
	document.write("las suma de negativos da " + sumaNegativos + "<br>");
	document.write("la cantidad de positivos es " + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es " + contadorNegativos + "<br>");
	document.write("la cantidad de ceros " + contadorCeros + "<br>");
	document.write("la cantidad de pares " + contadorPar + "<br>");
	document.write("el promedio de positivos es " + promedioPositivos + "<br>");
	document.write("el promedio de negativos es " + promedioNegativos + "<br>");
	document.write("la diferencia entre positivos y negativos es " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN