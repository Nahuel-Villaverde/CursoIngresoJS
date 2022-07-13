/*1.
	Nahuel Villaverde Guzman
	Div E
	Tp 1 E/S

	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = precio1 + precio2 + precio3;

	alert(suma);

}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	promedio = (precio1 + precio2 + precio3) / 3;

	alert(promedio);

}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let aumentoPorIva;
	let precioFinal;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	aumentoPorIva = parseInt(aumentoPorIva);

	suma = precio1 + precio2 + precio3;

	aumentoPorIva = (21/100) * suma;

	precioFinal = suma + aumentoPorIva;

	alert(precioFinal);
}