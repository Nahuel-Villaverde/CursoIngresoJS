/*	
	Nahuel Villaverde Guzman
	Div E
	Ejercicio 1 Parcial
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let turnos = 0;

	let apellido;
	let obraSocial;
	let tratamiento;
	let edad;

	let edadTotalBrackets = 0;
	let genteBrackets = 0;
	let banderaDelPrimero = 0;
	let obraSocialMasAtendida;
	let personaJovenCaries = 0;
	let apellidoPersonaCaries;

	let iomaCantidad = 0;
	let osdeCantidad = 0;
	let omintCantidad = 0;
	let edadPromedioBrackets = 0;


	while(turnos < 5){
		apellido = prompt("Cual es su apellido?");
		obraSocial = prompt("Cual es su obra social?");

		while (obraSocial != "Ioma" && obraSocial != "Osde" && obraSocial != "Omint"){
			obraSocial = prompt("Su obra social es invalida, intentelo nuevamente");
		}
		tratamiento = prompt("Cual es su tratamiento?");
		while(tratamiento !="Extraccion" && tratamiento != "Caries" && tratamiento != "Brackets"){
			tratamiento = prompt("Su tratamiento es incorrecto, intentelo nuevamente");
		}
		edad = prompt("Ingrese su edad");
		while(edad < 0 || edad > 150){
			edad = prompt("Su edad es invalida, intentelo nuevamente");
			edad = parseInt(edad);
		}
		if (tratamiento == "Brackets"){
			edadTotalBrackets = edadTotalBrackets + edad;
			genteBrackets = genteBrackets + 1;
			edadTotalBrackets = parseInt(edadTotalBrackets);
		}

		if (obraSocial == "Ioma") {
			iomaCantidad = iomaCantidad + 1;
		}
		else if (obraSocial == "Osde") {
			osdeCantidad = osdeCantidad + 1;
		}
		else if (obraSocial == "Omint") {
			omintCantidad = omintCantidad + 1;
		}

		if (iomaCantidad > osdeCantidad && iomaCantidad > omintCantidad) {
			obraSocialMasAtendida = "Ioma"
		}
		else if (osdeCantidad > iomaCantidad && osdeCantidad > omintCantidad) {
			obraSocialMasAtendida = "Osde"
		}
		else {
			obraSocialMasAtendida = "Omint"
		}

		if (banderaDelPrimero == 0 && tratamiento == "Caries") {
			personaJovenCaries = edad;
			apellidoPersonaCaries = apellido;
			banderaDelPrimero = 1;
		}
		else if (edad < personaJovenCaries && tratamiento == "Caries") {
			personaJovenCaries = edad;
			apellidoPersonaCaries = apellido;
		}

		turnos = turnos + 1;
	}

	edadPromedioBrackets = edadTotalBrackets/genteBrackets;

	document.write(" El promedio de edad de las personas que usan Brackets es: " + edadPromedioBrackets);
	document.write(" <br> La obra social mas atendida es: " + obraSocialMasAtendida);
	document.write(" <br> El apellido dee la persona mas joven con caries es: " + apellidoPersonaCaries);
}

