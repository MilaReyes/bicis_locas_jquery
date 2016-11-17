
function validateForm(){
    var name=$('#name').val();
	   if( name == null || name.length <=2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false) {
       $('#name').parent().append('<span>Ingresa un nombre válido</span>');
	}else if (name.substring(0,1) == name.substring(0,1).toUpperCase() == false){   
		$('#name').parent()append('<span>Primera letra en mayúscula</span>');
	}

    var lastName=$('#lastname').val();
    if( lastName == null || lastName.length <=2 || /^\s+$/.test(lastName) || /^[a-zA-Z]*$/.test(lastName)==false){
		  $('#name').parent().append('<span>Ingresa un apellido válido</span>');
	}else if (lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false){
	      $('#lastname').parent().append('<span>Primera letra en mayúscula</span>');
    }
    var mail=$('#input-email').val();
    if (mail == null || mail.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail) != true){
		$('#input-email').parent().append('<span>Ingresa una dirección de correo electronico válida</span>');
    }
    var mail=$('#input-password').val();
    if (password.length == 0 ){
         $('#input-password').parent().append('<span>Por favor escribe una contraseña</span>');      
        }else if (password.length < 6){
          $('#input-password').parent().append('<span>Contraseña muy corta, minimo 6 caracteres</span>');  
        }else if(password== 123456 || password== 098754){
          $('#input-password').parent().append('<span>Esta contraeña no es segura</span>');
    } 
    var biciTypes= $('select').val();
    if( biciTypes== null || biciTypes== 0 ){
          $('select').parent().append('<span>Escoge tu tipo de bici!</span>')};  
      }
    