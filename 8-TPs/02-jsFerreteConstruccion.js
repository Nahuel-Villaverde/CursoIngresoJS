/*2.
	Nahuel Villaverde Guzman
	Div E
	TP 2 E/S

	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	let alambrado;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = (largo + ancho) * 2;
	alambrado = perimetro * 3;

	alert("La cantidad de alambrado a comprar es " + alambrado + "mts.");
}
function Circulo () 
{
	let radio;
	let area;
	let alambrado2;

	radio = document.getElementById("txtIdRadio").value;

	radio = parseInt(radio);
	area = parseInt(area);
	alambrado2 = parseInt(alambrado2);

	area = 3.14 * (radio * radio);
	alambrado2 = area * 3;

	alert("La cantidad de alambrado a comprar es " + alambrado2 + "mts.")
}
function Materiales () 
{
	let largo;
	let ancho;
	let perimetro;
	let bolsasCemento;
	let bolsasCal;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = (largo + ancho) * 2;


	bolsasCemento = perimetro * 2;
	bolsasCal = perimetro * 3;

	alert("La cantidad de bolsas de Cemento a comprar es " + bolsasCemento + " y la cantidad de bolsas de Cal a comprar es " + bolsasCal);
}