/*
	Nahuel Villaverde Guzman
	Div E
	Tp 4 

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparitas;
 	let descuento;
 	let marca;
 	let precio;
 	let precioConDescuento;
 	let iva;
 	let precioConIva;

	cantidadLamparitas = parseInt(cantidadLamparitas);
	descuento = parseInt(descuento);
	iva = parseInt(iva);
 	cantidadLamparitas = document.getElementById("txtIdCantidad").value;
 	marca = document.getElementById("Marca").value;
 	document.getElementById("txtIdprecioDescuento").value = descuento;
	
	precio = (cantidadLamparitas * 35);


	if (cantidadLamparitas >= 6 ){
		descuento = (50/100) * (precio);
		precioConDescuento = precio - descuento;
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 5 && marca == "ArgentinaLuz"){
		descuento = (40/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 5 && marca !== "ArgentinaLuz"){
		descuento = (30/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
		descuento = (25/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 4 && marca !== "ArgentinaLuz" && marca !== "FelipeLamparas"){
		descuento = (20/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 3 && marca == "ArgentinaLuz") {
		descuento = (15/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 3 && marca == "FelipeLamparas") {
		descuento = (10/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
	else if (cantidadLamparitas == 3 && marca !== "ArgentinaLuz" && marca !== "FelipeLamparas") {
		descuento = (5/100) * (precio);
		precioConDescuento = precio - descuento
		//document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
		//alert("su descuento es de " + descuento + " y se registró correctamente");
	}
		if (precioConDescuento > 120){
			iva = (precioConDescuento) * (10/100);
			precioConIva = precioConDescuento + iva;
			alert("IIBB Usted pago " +  precioConIva +  " siendo " + iva + " el impuesto que se pagó.");
		}
alert("su descuento es de " + descuento + " y se registró correctamente");
document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}
