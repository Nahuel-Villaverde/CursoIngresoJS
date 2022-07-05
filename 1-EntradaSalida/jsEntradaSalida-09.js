/*
Nahuel Villaverde Guzman
Div E
Ejercicio 9 E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoAumentado;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo)

	aumento = (10/100) * sueldo;

	sueldoAumentado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = sueldoAumentado;

}
