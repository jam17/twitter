



/*function agregarTarea(){

var tarea=document.getElementById("tarea").value;
var boton= document.getElementById("boton");

	if (tarea===null || tarea===""){

		alert("Debe ingresar una tarea");
		return false;
	}


}*/


function agregaTarea(){
//elementos que rescatamos
var nombre=document.getElementById("nombre").value;
var porhacer=document.getElementById("cajatarea").value;
//este es el contendeor
var contenedorPosteos=document.getElementById("contenedor-tareas");
//crea el div que contiene la tarea
var posteo= document.createElement("div");
//crea el div que contiene nuestro post.
var elementoNombre=document.createElement("strong")
var elementoComentario= document.createElement("p");
//crea el div que contiene nuestro post.
var elementoLinea= document.createElement("hr");

//aca cremos los nodes de text
var nodoTextoNombre=document.createTextNode(nombre);
var nodoTextoComentario=document.createTextNode(porhacer);

//aca metemos los  nodos de texto a los elemntos contendeores 
elementoNombre.appendChild(nodoTextoNombre);
elementoComentario.appendChild(nodoTextoComentario);

//aca vamos a meter los tres elemetnos al div posteo
posteo.appendChild(elementoNombre);
posteo.appendChild(elementoComentario);
posteo.appendChild(elementoLinea);

//aca tenemos que agregar el atributo class list y el valor 'posteo'

posteo.setAttribute("class", "posteo");

//aca agreamos el posteo al contenedor de posteos
contenedorPosteos.appendChild(posteo);

}

  function eliminarTarea (){
		this.parentNode.removeChild(this);
	};
 
 tareaInput.addEventListener("click", comprobarInput);
	
	for (var i = 0; i <= tarea.children.length -1; i++) {
		tarea.children[i].addEventListener("click", eliminarTarea);
	}