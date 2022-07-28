function mostrar()
{
	let letra;
	let numero;
	let respuesta = "si";
	let contadorPar = 0;
	let contadorImpar = 0;
	let contadorCeros = 0;
	let cantidadTotalPositivos = 0;
	let promedioPositivos;
	let cantidadTotalNegativos = 0;
	let banderaDelPrimero = 0;
	let numeroMinimo = 0;
	let numeroMaximo = 0;
	let letraMinima;
	let letraMaxima;
	let contador = 0;

	 {
		numero = parseInt(prompt("ingrese un numero"));

		while(numero < -100 || numero > 100){
			numero = prompt("Ingrese un numero valido")
			numero = parseInt(numero);
		}

		letra = prompt("ingrese una letra");

		if (numero == 0) {
			contadorCeros = contadorCeros + 1;
			contadorCeros = parseInt(contadorCeros);
		}
		else if (numero % 2 == 0) {
			contadorPar = contadorPar + 1;
			contadorPar = parseInt(contadorPar);
		}
		else {
			contadorImpar = contadorImpar +1;
			contadorImpar = parseInt(contadorImpar);
		}
		

		if (numero > 0) {
			cantidadTotalPositivos = cantidadTotalPositivos + numero;
			cantidadTotalPositivos = parseInt(cantidadTotalPositivos);
		}
		else {
			cantidadTotalNegativos = cantidadTotalNegativos + numero;
			cantidadTotalNegativos = parseInt(cantidadTotalNegativos);
		}

		if (banderaDelPrimero == 0) {
			numeroMaximo = numero ;
			numeroMinimo = numero;
			letraMinima = letra;
			letraMaxima = letra;
			banderaDelPrimero = 1
		}
		else if (numero > numeroMaximo){
			numeroMaximo = numero;
			letraMaxima = letra;
		}
		else if (numero < numeroMinimo) {
			numeroMinimo = numero;
			letraMinima = letra;
		}


		contador = contador + 1;
		respuesta = prompt("¿Desea seguir agregando datos?")
	}

	promedioPositivos = cantidadTotalPositivos/contador;

	document.write("La cantidad de números pares es "+ contadorPar);
	document.write("<br> La cantidad de números impares es "+ contadorImpar);
	document.write("<br> La cantidad de ceros es "+ contadorCeros);
	document.write("<br> El promedio de todos los números positivos ingresados es "+ promedioPositivos);
	document.write("<br> La suma de todos los números negativos es "+ cantidadTotalNegativos);
	document.write("<br> El número y la letra del máximo: "+ numeroMaximo + " y " + letraMaxima);
	document.write("<br> El número y la letra del minimo: "+ numeroMinimo + " y " + letraMinima);
}
