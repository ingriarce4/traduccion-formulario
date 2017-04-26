   function translate(){
     var title = document.getElementById("form-signin-heading");
     var email = document.getElementById("inputEmail");
     var password = document.getElementById("inputPassword");
     var remember = document.getElementsByTagName("span")[0];
     var button = document.getElementsByClassName("btn")[0];

     title.innerHTML= "Por favor inicia sesión";
     email.placeholder = "Correo Electrónico";
     password.placeholder = "Contraseña";
     remember.innerHTML = "Recordar datos";
     button.innerHTML = "Iniciar Sesión";
   }
translate();
 var boton = document.getElementById("botoncito");
 boton.addEventListener("click", function(evento){
 evento.preventDefault();
 var usuario = document.getElementById("imprimir");
 var clave = document.getElementById("clave");
 usuario.innerHTML = "El usuario registrado es " + document.getElementById("inputEmail").value;
 clave.innerHTML = "La clave ingresada es " + document.getElementById("inputPassword").value;
});
