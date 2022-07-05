/*
Nahuel Villaverde Guzman
Div E
Ejercicio 7 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*
let numero1;
let numero2;

numero1 = document.getElementById("txtIdNumeroUno").value;
numero2 = document.getElementById("txtIdNumeroDos").value;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

ACLARACION PARA ESTEBAN Y/O PEDRO:
Queria poner todos los datos fuera de las funciones para no tener que escribirlas 4 veces, pero no me funcionaba el parseInt
*/

function sumar()
{	
	let numero1;
	let numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2); 

	let resultadoSuma = numero1 + numero2;

	alert("La suma es " + resultadoSuma);	
}

function restar()
{	
	let numero1;
	let numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let resultadoResta = numero1 - numero2;

	alert("La resta es " + resultadoResta);
}

function multiplicar()
{ 	
	let numero1;
	let numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let resultadoMultiplicacion = numero1 * numero2;

	alert("La multiplicacion es " + resultadoMultiplicacion);
}

function dividir()
{	
	let numero1;
	let numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2); 

	let resultadoDiv = numero1 / numero2;

	alert("La division es " + resultadoDiv);
}

