// traemos los elementos
var name = $("input #name").val();
var lastname = $("input #lastname").val();
var email = $("input #input-email").val();
var password = $("input #input-password").val();
var select = $('select')[0];

var div_checkbox = document.getElementsByClassName('checkbox')[0];
var checkbox = div_checkbox.getElementsByTagName('input')[0];
var span_checkbox = div_checkbox.getElementsByTagName('span')[0];



// viculo los eventos
name.onblur = validarNombre;
lastname.onblur = validarApellido;
email.onblur = validarEmail;
password.onblur = validarPassword;
select.onblur = validarSelect;
checkbox.onclick = tachar;

// funciones
function tachar() {
	span_checkbox.classList.toggle('tachado');
}

function escribir(str) {
	document.getElementById('form-signup-heading').innerHTML = str;
}

function limpiarSpans(clase) {
	var div = document.getElementsByClassName(clase)[0];
	var hijos_spans = div.getElementsByTagName('span');
	for (var i=0 ; i<hijos_spans.length ; ++i) {
		div.removeChild(hijos_spans[i]);
	}
}

function validarNombre() {
	limpiarSpans('name-container');
	var inpName = document.getElementById("name").value;  //valor de nombre
	if(inpName == null || inpName.length == 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(inpName)){ //valida que no tenga espacio vacíos, ni que se llene con espacios en blanco, que la primera letra sea mayúscula y no contenga números
		var divName = document.getElementsByClassName("name-container")[0];
		var spName = document.createElement("span");
		var msgName = document.createTextNode("El nombre que ingresaste no es correcto");
		spName.appendChild(msgName);
		divName.appendChild(spName);
		return false;
	}
}

function validarApellido() {
	limpiarSpans('lastname-container');
	var inpLastName = document.getElementById("lastname").value; //valor de apellido
	if(inpLastName == null || inpLastName.length == 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(inpLastName)){ //valida que no tenga espacio vacíos, ni que se llene con espacios en blanco, que la primera letra sea mayúscula y no contenga números
		var divLastName = document.getElementsByClassName("lastname-container")[0];
		var spLastName = document.createElement("span");
		var msgLastName = document.createTextNode("El apellido que ingresaste no es correcto");
		spLastName.appendChild(msgLastName);
		divLastName.appendChild(spLastName);
		return false;
	}
}
function validarEmail() {
	limpiarSpans('email-container');
	var inpEmail = document.getElementById("input-email").value;  //valor de email
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inpEmail))){ //valida que contenga letras o números, mayúsculas o minúsculas y que la última parte es  
		var divEmail = document.getElementsByClassName("email-container")[0];
		var spEmail = document.createElement("span");
		var msgEmail = document.createTextNode("El correo electrónico que ingresaste no es correcto");
		spEmail.appendChild(msgEmail);
		divEmail.appendChild(spEmail);
		return false;
	}
}
function validarPassword() {
	var inpPassword = document.getElementById("input-password").value; //valor de contraseña
	// limpiar los spans
	var div = document.getElementsByClassName('form-group')[0];
	var spans = div.getElementsByTagName('span');
	for(var i=0 ; i < spans.length ; i++){
		div.removeChild(spans[i]);
	}

	if (inpPassword.length < 6 || inpPassword == "password" || inpPassword == "123456" || inpPassword == "098754") { // valida que el password tenga al menos 6 dígitos y que tenga al menos una letra mayúscula y una minúscula y no sea alguna de las claves que el ejercicio ponía como prohibidas
		var divPassword = document.getElementsByClassName("form-group")[0];
		var spPassword = document.createElement("span");
		var msgPassword = document.createTextNode("Debe contener al menos 6 caracteres");
		spPassword.appendChild(msgPassword);
		divPassword.appendChild(spPassword);
		return false;
	}
}
function validarSelect() {
	var inpOpciones = document.getElementsByTagName("select")[0].selectedIndex; //valor del select
	// limpiar los spans
	var div = document.getElementsByClassName('form-group')[1];
	var spans = div.getElementsByTagName('span');
	for(var i=0 ; i < spans.length ; i++){
		div.removeChild(spans[i]);
	}

	if(inpOpciones == null || inpOpciones == 0) { //valida que el select tenga al menos una opción seleccionada
		var divSelect = document.getElementsByClassName("form-group")[1];
		var spSelect = document.createElement("span");
		var msgSelect = document.createTextNode("No has seleccionado ninguna opción");
		spSelect.appendChild(msgSelect);
		divSelect.appendChild(spSelect);
		return false;
	}
}

function validateForm(){
	validarNombre();
	validarApellido();
	validarEmail();
	validarPassword();
	validarSelect();
}