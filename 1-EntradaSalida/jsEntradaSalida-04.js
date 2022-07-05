/* 
Nahuel Villaverde Guzman
Div E
Ejercicio 4 E/S

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre = prompt("¿Cuál es su nombre?");
	document.getElementById("txtIdNombre").value = nombre;
	

}

