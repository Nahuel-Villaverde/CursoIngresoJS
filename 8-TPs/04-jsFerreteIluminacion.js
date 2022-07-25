/*
	Nahuel Villaverde Guzman
	Div E
	Tp 4 Switch IF

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
 	let precioBase;
 	let iva;
 	let precioConIva;
 	let porcentaje;

	cantidadLamparitas = parseInt(cantidadLamparitas);
 	cantidadLamparitas = document.getElementById("txtIdCantidad").value;
 	marca = document.getElementById("Marca").value;
	
	precioBase = (cantidadLamparitas * 35);


	switch(cantidadLamparitas)
    {
        case "5":
            if (marca == "ArgentinaLuz")
            {
                    porcentaje = 40;	
    		}
    		else {
               		porcentaje = 30;
    		}
    		break;
    	case "4":
            if (marca == "ArgentinaLuz" || "FelipeLamparas")
            {
                    porcentaje = 25;
    		}
    		else{
    			porcentaje = 20;
    		}
    		break;
    	case "3":
            if (marca == "ArgentinaLuz")
            {
                    porcentaje = 15;
    		}
    		else if(marca == "FelipeLamparas"){
    			porcentaje = 10;
    		}
            else{
            	porcentaje = 5;
            }
    		break;
    	case "2":
    	case "1":
    		porcentaje = 0;
    		break;
    	default:
    		porcentaje = 50;
    		break;
    		
    }
	


    descuento = (porcentaje/100 * precioBase);
    precioFinal = precioBase - descuento;
    alert("su descuento es de " + descuento + " y se registró correctamente");
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    

    if (precioFinal > 120){
			iva = (precioFinal) * (10/100);
			precioConIva = precioFinal + iva;
			alert("IIBB Usted pago " +  precioConIva +  " siendo " + iva + " el impuesto que se pagó.");
		}

    
	/*if (precioFinal < precioConIva) {
		document.getElementById("txtIdprecioDescuento").value = precioConIva;
	}	
	else {
		document.getElementById("txtIdprecioDescuento").value = precioFinal;
	}	
	*/
}
