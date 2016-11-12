



/*function agregarTarea(){

var tarea=document.getElementById("tarea").value;
var boton= document.getElementById("boton");

	if (tarea===null || tarea===""){

		alert("Debe ingresar una tarea");
		return false;
	}


}*/

//crea el div que contiene la tarea
/*var posteo= document.createElement("div");
//crea el div que contiene nuestro post.
//var elementoNombre=document.createElement("strong")
var elementoTarea= document.createElement("p");
//crea el div que contiene nuestro post.
var elementoLinea= document.createElement("hr");

//aca cremos los nodes de text
//var nodoTextoNombre=document.createTextNode(nombre);
var nodoTextoComentario=document.createTextNode(porhacer);
var cajatxt=document.createElement("input");
//aca metemos los  nodos de texto a los elemntos contendeores 
//elementoNombre.appendChild(nodoTextoNombre);
elementoTarea.appendChild(nodoTextoComentario);
cajatxt.appendChild(elementoTarea);


//aca vamos a meter los tres elemetnos al div posteo
//posteo.appendChild(elementoNombre);
posteo.appendChild(elementoTarea);
posteo.appendChild(elementoLinea);

for (var i = 0; i <= porhacer.chidren.length-1; i++) {
	porhacer.chidren[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);


	});
}


//aca tenemos que agregar el atributo class list y el valor 'posteo'

//posteo.setAttribute("class", "posteo");

//aca agreamos el posteo al contenedor de posteos
//contenedorPosteos.appendChild(posteo);

};

  //function eliminarTarea (){
		//this.parentNode.removeChild(this);
	//};
 
 //tareaInput.addEventListener("click", comprobarInput);
	
	//for (var i = 0; i <= tarea.children.length -1; i++) {
		//tarea.children[i].addEventListener("click", eliminarTarea);
//elementos que rescatamos
//var nombre=document.getElementById("nombre").value;	//}*/
//este es el contendeor


/*	
function agregaTarea(){
	var porhacer=document.getElementById("cajaTarea").value;
	var contenedorTareas=document.getElementById("contenedor-tareas");


	var agregaTarea = function(){
		var tarea= cajaTarea.value;	
		var nuevaTarea=document.createElement("input");
		var contenido=document.createTextNode(tarea);

	if (tarea===""){

		cajaTarea.setAttribute("placeholder", "No puede dejar el espacio vacío");
		return false;
	}
	cajaTarea.value="";//  para volver al mensaje del principio añadir tarea

	for (var i = 0; i < contenedor-tareas.children.length-1; i++) {
		contenedor-tareas.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		})
	   }

	 var eliminarTarea=function(){
		this.parentNode.removeChild(this);
	};
}();
*/

(function(){
	var tarea=document.getElementById("contenedor-tareas"),
		nuevoTxt=document.getElementById("cajaTarea"),
		btnAgregar=document.getElementById("boton");

var agregaTarea= function(){

	var entradaTxt = nuevoTxt.value;
	var	contenedor=document.createElement("div"),
		escrito=document.createTextNode(entradaTxt);//es como el ToString,

if(escrito===""){

	contenedor.setAttribute("placeholder", "Escriba una tarea");
	return false;
}
 	
 	contenedor.appendChild(escrito);//
 	tarea.appendChild(contenedor);

 	entradaTxt.value=""; // despues de que haga la funcion anterior
 							// la caja textarea quede sin el texto de lo ingresado	

for (var i = 0; i <= tarea.children.length-1; i++) {
	tarea.children[i].addEventListener("click", function(){
		this.parentNode.removeChild(this);
	});
  }
};	

var comprobarInput=function(){
	
	cajaTarea.setAttribute("placeholder", "Añada una tarea");
};// esta ; es para cerrar la funcion definitivamente, sino seguira en un loop
 
 var quitarTarea = function(){
 	this.parentNode.removeChild(this);
 };

 for (var i = 0; i <= tarea.children.length-1; i++) {
 	tarea.children[i].addEventListener("click", quitarTarea);// las variables no van entre comillas
 }
 //Aqui se agregan los eventos
	btnAgregar.addEventListener("click", agregaTarea);
	cajaTarea.addEventListener("click", comprobarInput);

}())