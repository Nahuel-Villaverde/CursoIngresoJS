/*3.
	Nahuel Villaverde Guzman
	Div E
	TP 3 E/S
	

	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let cuenta;

	fahrenheit = document.getElementById("txtIdTemperatura").value;

	fahrenheit = parseInt(fahrenheit) ;

	cuenta = (fahrenheit - 32) * 5 / 9;

	alert(fahrenheit + " grados Fahrenheit son " + cuenta + " grados centígrados");

}

function CentigradosFahrenheit () 
{
	let centigrados;
	let cuenta;

	centigrados = document.getElementById("txtIdTemperatura").value;

	centigrados = parseInt(centigrados);

	cuenta = (centigrados * 9 / 5) + 32;

	alert(centigrados + " grados Centígrados son " + cuenta + " grados Fahrenheit");

}
