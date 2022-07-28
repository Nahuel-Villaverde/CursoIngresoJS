/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 7 parcial 2018
*/
function mostrar()
{
	let notas;
	let sexo;
	let alumnos = 1;
	let acumulador = 0;
	let promedio;
	let numeroMinimo = 0;
	let sexoMinimo;
	let banderaDelPrimero = 0;
	let contadorC = 0;


	while(alumnos <= 5){
		notas = prompt("ingrese la nota del alumno ")
		notas = parseInt(notas);

		while (notas < 0 || notas > 10 || isNaN(notas)){
			notas = parseInt(notas);
			notas = prompt("Error, reingrese su nota");
		}
			
		sexo = prompt("ingrese su sexo");

 		while  (sexo != "M" && sexo != "F") {
 			notas = parseInt(notas);
 			sexo = prompt("Error, reingrese su sexo");
 		}

 		if(banderaDelPrimero == 0 || notas < numeroMinimo){
			numeroMinimo = notas;
			sexoMinimo = sexo;
			banderaDelPrimero = 1;
		}

 		if (sexo == "M" && notas >= 6){
 			contadorC = contadorC + 1;
 		}

 		acumulador = acumulador + notas;
 		alumnos = alumnos + 1;
	}

	promedio = acumulador/5;

	alert("El promedio de notas es: "+ promedio);
	alert("la nota mas baja fue: "+ numeroMinimo + " y el sexo era " + sexoMinimo);
	alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorC);
	

}
