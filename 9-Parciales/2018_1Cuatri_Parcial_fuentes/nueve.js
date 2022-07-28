function mostrar()
{
	let marca;
	let peso;
	let respuesta = "si";
	let temperaturaAlmacenamiento;
	let temperaturasPares = 0;
	let	banderaDelPrimero = 0;
	let pesoMaximo;
	let pesoMinimo;
	let marcaMaxima;
	let cantidadProductosFrios = 0;
	let pesoTotal = 0;
	let productos = 0;

	while(respuesta == "si"){
		marca = prompt("Cual es la marca de su producto?")

		peso = parseInt(prompt("Cual es el peso de su producto?"));
		while(peso < 1 || peso > 100){
			peso = prompt("El peso es invalido, ingrese un peso correcto")
		}

		temperaturaAlmacenamiento = prompt("Cual es la temperatura de su producto?")
		while(temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30){
			temperaturaAlmacenamiento = prompt("La temperatura de Almacenamiento es invalida, ingrese una correcta")
		}

		if (temperaturaAlmacenamiento % 2 == 0) {
			temperaturasPares = temperaturasPares + 1
		}

		if (banderaDelPrimero == 0) {
			pesoMaximo = peso;
			pesoMinimo = peso;
			marcaMaxima = marca;
			banderaDelPrimero = 1;
		}

		if (peso > pesoMaximo) {
			pesoMaximo = peso;
			marcaMaxima = marca;
		}

		if (peso < pesoMinimo) {
			pesoMinimo = peso;
		}

		if (temperaturaAlmacenamiento < 0) {
			cantidadProductosFrios = cantidadProductosFrios + 1;
		}

		pesoTotal = pesoTotal + peso;
		productos = productos + 1; 

		respuesta = prompt("Quiere seguir cargando productos?")
	}

	promedio = pesoTotal/productos;

	document.write("La cantidad de temperaturas pares es: " + temperaturasPares);
	document.write("<br> La marca del producto más pesado es: " + marcaMaxima);
	document.write("<br> La cantidad de productos que se conservan a menos de 0 grados es: " + cantidadProductosFrios);
	document.write("<br> La cantidad de temperaturas pares es: " + temperaturasPares);
	document.write("<br> El promedio del peso de todos los productos es: " + promedio);
	document.write("<br> El peso máximo es: " + pesoMaximo + " y el mínimo es: " + pesoMinimo);
}
