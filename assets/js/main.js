function datos(){

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direcc = document.getElementById("direccion").value;
  var imprimirTodo = document.getElementsByClassName("imprimir");

	if (imprimirTodo[0].value.length == 0 || imprimirTodo[1].value.length == 0 ||
		imprimirTodo[2].value.length == 0 || imprimirTodo[3].value.length == 0){
	} else{
		document.getElementById("imprimir").innerHTML=  "<ul>" +
                                                    "<li><b>Nombre: </b>" + nombre + "</li>" +
                                                    "<li><b>Apellido: </b>" + apellido + "</li>" +
                                                    "<li><b>DNI: </b>" + dni + "</li>" +
                                                    "<li><b>Dirección: </b>" + direcc + "</li>" +
                                                    "</ul>";
	}
  document.getElementById("mostrar") = "";
}
