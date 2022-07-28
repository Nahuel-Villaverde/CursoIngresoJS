
function mostrar()
{
	let producto;
	let precio;
	let cantidadDeUnidades;
	let marca;
	let fabricante;

	while(bucle <= 5){
		producto = prompt("Ingrese su producto");
		while(producto != barbijo || producto != jabon || producto != alcohol){
			producto = prompt("su producto es invaildo, ingreselo nuevamente");
		}

		precio = prompt("ingrese el precio");
		while(precio < 100 || precio > 300){
			precio = prompt("su precio es invaildo, ingreselo nuevamente");
		}

		cantidadDeUnidades = prompt("ingrese la cantidad");
		while(cantidadDeUnidades < 0 || cantidadDeUnidades > 1000){
			cantidadDeUnidades = prompt("su cantidad de unidades es invaildo, ingreselo nuevamente");
		}
		


	}


}
