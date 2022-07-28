/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos = 0;
let aleatorio;
let numeroElegido;

function comenzar()
{
	aleatorio = parseInt(aleatorio);
	aleatorio = Math.floor(Math.random() * 101);
	

}

function verificar()
{
	contadorIntentos = parseInt(contadorIntentos);
	contadorIntentos= contadorIntentos + 1;
	if (numeroElegido == aleatorio) {
		alert("Usted es un Ganador y en solo " + contadorIntentos)
	}
	else if (numeroElegido < aleatorio) {
		alert("Falta para llegar al número aleatorio")
	}
	else {
		alert("Se pasó del numero aleatorio")
	}
	numeroElegido = document.getElementById("txtIdNumero").value;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	
}
