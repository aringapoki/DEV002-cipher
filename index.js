import cipher from './cipher.js';

//capturar valor del input de nombre 

// let playerName = document.getElementById("playerName").value;
// llamar funciones

//crear eventos click para cifrar y descifrar

let cifrar = document.getElementById("cipher"); //id cipher es el botón

cifrar.addEventListener("click", function(){ //acá tengo que nombrar la función para llamarla
    let playerName = document.getElementById("playerName").value;
    let displacement = document.getElementById("displacement").value;
    let originalText = document.getElementById("originalText").value;
    let mensajeCifrado = cipher.encode(displacement, originalText)
    document.getElementById("playerName2").innerHTML = playerName
    //capturar valor texto original y número de desplazamientos
    document.getElementById("textoFinal").innerHTML = mensajeCifrado;
   });

   

let decipher = document.getElementById("decipher"); //boton que llama funcion descifrar
 decipher.addEventListener("click",function(){
    let playerName = document.getElementById("playerName").value;
    let displacement = document.getElementById("displacement").value; 
    let originalText = document.getElementById("originalText").value;
    let mensajeDescifrado = cipher.decode(displacement, originalText)
    document.getElementById("playerName2").innerHTML = playerName
    document.getElementById("textoFinal").innerHTML = mensajeDescifrado;
});

    
 

// me falta que guarde el valor del resultado de la función en alguna parte, para poder mostrarlo 





