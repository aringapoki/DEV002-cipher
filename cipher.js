const cipher = {
  //encontrar posición de letras en array alphabet aplicando función indexOf
  //el resultado de esa función debe ser declarado como una variable
//función para convertir a mayúsculas

encode (displacement, originalText) {
    
  let texto = originalText.toUpperCase()//en index.js podría ser keyup?
  //lista de cracteres permitidos
  // string . dolver el indice de un caracter buscado (string)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //este es el índice de referencia
  let textoCifrado ="" //la declaro fuera de la función del if para poder llamarla fuera de esta
        if (texto){
        for (let i=0; i<texto.length; i++){ 

        const letraActual = texto[i]
        const indiceLetraActual = alphabet.indexOf(letraActual) 
          
          if (indiceLetraActual !=-1){
            let letraCifrada = ((indiceLetraActual) + (displacement)%26 +26)%26;
            textoCifrado += alphabet[letraCifrada]; //acá se unen los números para mostrar el string cifrado
            }
          else{
            textoCifrado += letraActual;
            }
    }
  }  
  console.log('textoCifrado >>', textoCifrado)
  return textoCifrado;
}, 


decode (displacement, originalText) {
  let texto = originalText.toUpperCase()
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let textoDescifrado ="";
     if (texto){
      for (let i=0; i<texto.length; i++){ 

      const letraActual = texto[i]
      const indiceLetraActual = alphabet.indexOf(letraActual) 
      
        if (indiceLetraActual !=-1){
          let letraDescifrada = ((indiceLetraActual) - (displacement)%26 +26)%26;
          console.log(letraDescifrada, displacement);
          textoDescifrado += alphabet[letraDescifrada]; //acá se unen los números para mostrar el string cifrado
          }
          else{
          textoDescifrado += letraActual;
          }
}
}  
    console.log('textoDescifrado >>', textoDescifrado)
    return textoDescifrado;

}
};

export default cipher;




