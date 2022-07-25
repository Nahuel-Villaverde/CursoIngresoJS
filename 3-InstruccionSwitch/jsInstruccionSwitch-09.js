/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 9 Switch
*/
function mostrar()
{
	
	let estacionIngresada;
	let destino;

	let precioBase = 15000;
	let aumento;
	let descuento;
	let precioTotal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

		switch(estacionIngresada)
		{	

			case "Invierno":
				switch(destino)
				{
					case "Bariloche":
						aumento = (20/100) * (precioBase); 
						break;
					case "Cataratas":
						descuento = (10/100) * (precioBase);
						break;
					case "Mar del plata":
						descuento = (10/100) * (precioBase);
						break;
					case "Cordoba":
						descuento = (20/100) * (precioBase);
						break;

				}
				break;
			case "Verano":
				switch(destino)
				{
					case "Bariloche":
						descuento = (20/100) * (precioBase); 
						break;
					case "Cataratas":
						aumento = (10/100) * (precioBase);
						break;
					case "Mar del plata":
						aumento = (10/100) * (precioBase);
						break;
					case "Cordoba":
						aumento = (20/100) * (precioBase);
						break;

				}
				break;
			default:
				switch(destino)
				{
					case "Bariloche":
						aumento = (10/100) * (precioBase);
						break;
					case "Cataratas":
						aumento = (10/100) * (precioBase); 
						break;
					case "Mar del plata":
						aumento = (10/100) * (precioBase);
						break;
					case "Cordoba":
						descuento = 0; 
						break;
			
				}
				break;

		}

	if (aumento > 0) {
		precioTotal = precioBase + aumento;
	}
	else {
		precioTotal = precioBase - descuento;
	}
	
	alert("el precio es de " + precioTotal);



}//FIN DE LA FUNCIÓN