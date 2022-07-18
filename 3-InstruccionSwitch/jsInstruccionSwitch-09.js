/*
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 9 Switch
*/
function mostrar()
{
	
	let estacionIngresada;
	let destino;
	let precioBase;
	let mensaje;
	let aumento;
	let descuento;
	let precioTotal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioBase = parseInt(precioBase);
	descuento = parseInt(descuento);
	aumento = parseInt(aumento);
	precioTotal = parseInt(precioTotal);

	precioBase = 15000;

		switch(estacionIngresada)
		{	

			case "Invierno":
				switch(destino)
				{
					case "Bariloche":
						aumento = (20/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cataratas":
						descuento = (10/100) * (precioBase);
						precioTotal = precioBase - descuento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Mar del plata":
						descuento = (10/100) * (precioBase);
						precioTotal = precioBase - descuento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cordoba":
						descuento = (20/100) * (precioBase);
						precioTotal = precioBase - descuento;
						mensaje = "el precio es de " + precioTotal; 
						break;

				}
				break;
			case "Verano":
				switch(destino)
				{
					case "Bariloche":
						descuento = (20/100) * (precioBase);
						precioTotal = precioBase - descuento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cataratas":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Mar del plata":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cordoba":
						aumento = (20/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;

				}
				break;
				
			case "Otoño":
				 switch(destino)
				{
					case "Bariloche":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cataratas":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Mar del plata":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cordoba":
						precioTotal = precioBase;
						mensaje = "el precio es de " + precioTotal; 
						break;

				}
				break;
			case "Primavera":
				switch(destino)
				{
					case "Bariloche":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cataratas":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Mar del plata":
						aumento = (10/100) * (precioBase);
						precioTotal = precioBase + aumento;
						mensaje = "el precio es de " + precioTotal; 
						break;
					case "Cordoba":
						precioTotal = precioBase;
						mensaje = "el precio es de " + precioTotal; 
						break;
			
				}
				break;

		}

		
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN