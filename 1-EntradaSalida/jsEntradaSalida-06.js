/*
Nahuel Villaverde Guzman
Div E
Ejercicio 6 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1 = document.getElementById("txtIdNumeroUno").value;

	let numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let resultado = numero1 + numero2;

	alert("La suma es " + resultado);

	
}

