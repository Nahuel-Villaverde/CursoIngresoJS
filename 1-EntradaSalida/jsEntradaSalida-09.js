/*
Nahuel Villaverde Guzman
Div E
Ejercicio 9 E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
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
*/

function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoAumentado;
	let numeroUsuario;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	numeroUsuario = prompt("¿Cuál es su procentaje de aumento?");

	aumento = (numeroUsuario/100) * sueldo;

	sueldoAumentado = sueldo + aumento;

	alert("el valor del porcentaje del aumento es " + aumento);

	document.getElementById("txtIdResultado").value = sueldoAumentado;


}
