function mostrar()
{
	let nota;
	let sexo;
	let alumnos = 0;
	let notaTotal = 0;
	let banderaDelPrimero = 0;
	let notaBaja = 11;
	let sexoBajo;
	let cantidadVaronesAprobados = 0;

	while(alumnos < 5){
		nota = prompt("cual es su nota?");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10){
			nota = prompt("La nota no es valida");
			nota =parseInt(nota);
		}

		sexo = prompt("cual es su sexo?");
		while(sexo != "F" && sexo != "M"){
			sexo = prompt("El sexo no es valido");
		}

		if (banderaDelPrimero == 0 || nota < notaBaja) {
			notaBaja = nota;
			sexoBajo = sexo;
			banderaDelPrimero = 1;
		}

		if (sexo == "M" && nota >= 6) {
			cantidadVaronesAprobados = cantidadVaronesAprobados + 1;
		}

		notaTotal = notaTotal + nota;

		alumnos = alumnos + 1;
	}

	promedio = notaTotal/alumnos;
	document.write("El promedio de las notas totales es: " + promedio);
	document.write("<br> La nota más baja es: "+ notaBaja + "y el sexo de esa persona es: " + sexoBajo);
	document.write("<br> La cantidad de varones aprobadoes es: " + cantidadVaronesAprobados);
}
