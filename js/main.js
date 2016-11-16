$(document).ready(function(){
    $('button').click(function(){
        $('.erase').remove();
	var name=$('#name').val();
	var lastName=$('#lastname').val();
	var mail=$('#input-email').val();
	var password=$('#input-password').val();
	var biciTypes= $('select').val();

	if( name == null || name.length <=2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false) {
		$('.name-container').append('<span class='erase' >Ingresa un nombre válido</span>');
	}else if (name.substring(0,1) == name.substring(0,1).toUpperCase() == false){
		$('.name-container').append('<span class='erase' >Primera letra en mayúscula</span>');
	

    if( lastName == null || lastName.length <=2 || /^\s+$/.test(lastName) || /^[a-zA-Z]*$/.test(lastName)==false){
		  $('.lastname-container').append('<span class="erase" >Ingresa un apellido válido</span>');
	}else if (lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false){
	      $('.lastname-container').append('<span class="erase" >Primera letra en mayúscula</span>');
      

    if (mail == null || mail.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail) != true){
		$('email-container').append('<span class="erase" >Ingresa una dirección de correo electronico válida</span>');

        if (password.length == 0 ){
          $('.form-group:first').append('<span class="borrar" >Por favor escribe una contraseña</span>');      
        } else if (password.length < 6){
          $('.form-group:first').append('<span class="borrar" >Contraseña muy corta, minimo 6 caracteres</span>');  
        } else if(password== 123456 || password== 098754){
          $('.form-group:first').append('<span class="borrar" >Esta contraeña no es segura</span>');
     
    if( biciTypes== null || biciTypes== 0 ){
          $('.form-group:eq(1)').append('<span class="borrar" >Escoge tu tipo de bici!</span>')};  
    