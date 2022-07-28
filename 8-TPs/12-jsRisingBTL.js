/*
	Nahuel Villaverde Guzman
	Div E
	TP 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
 	let sexo;
 	let estadoCivil;
 	let sueldoBruto;
 	let legajo;
 	let nacionalidad;
 	
 	edad = prompt("ingrese su edad");
 	while (edad < 18 || edad > 90) {
 		edad = prompt("Error, reingrese su edad");
 	}
 	sexo = prompt("ingrese su sexo");
 	while (sexo != "M" && sexo != "F") {
 		sexo = prompt("Error, reingrese su sexo");
 	}
 	estadoCivil = prompt("ingrese su estadoCivil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
 	while (estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4) {
 		estadoCivil = prompt("Error, reingrese el estado civil");
 	}
 	sueldoBruto = prompt("ingrese su sueldoBruto");
 	while (sueldoBruto <= 8000) {
 		sueldoBruto = prompt("Error, reingrese el sueldo bruto");
 	}
 	legajo = prompt("ingrese su legajo");
 	while (legajo < 1000 || legajo >9999) {
 		legajo = prompt("Error, reingrese el legajo");
 	}
 	nacionalidad = prompt("ingrese su nacionalidad");
 	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
 		nacionalidad = prompt("Error, reingrese la nacionalidad");
 	}
 	document.getElementById("txtIdEdad").value = edad;
 	document.getElementById("txtIdSexo").value = sexo;
 	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
 	document.getElementById("txtIdSueldo").value = sueldoBruto;
 	document.getElementById("txtIdLegajo").value = legajo;
 	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
