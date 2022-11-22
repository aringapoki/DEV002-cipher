# Código Rol

### ¿Qué es y para qué sirve?
Interfaz para encriptar o desencriptar mensajes de texto, a partir del método de cifrado César, el cual consiste en aplicar un número determinado de desplazamientos a un mensaje a cifrar o descifrar, siguiendo el orden alfabético.

Está diseñada para ser utilizada por jugadores de juegos de rol, o de juegos en los que sea útil y/o necesario encriptar mensajes, por ejemplo, dinámicas de scout, juegos para niños, búsquedas del tesoro, u otros en los que sea necesario cifrar misiones secretas, habilidades ocultas, etc.

### ¿Cómo funciona?

Se ingresa el texto a cifrar o descifrar en la caja izquierda, luego hay que seleccionar la clave o número de desplazamientos y, finalmente, darle click al botón cifrar o descifrar, según la función que se requiera.

### Diseño
El diseño es simple y de solo una vista, incluye un botón para cifrar y otro para descifrar, la opción de elegir el número de desplazamientos entre 1 y 100, y el resultado se muestra en la misma pantalla. La paleta de colores también es sencilla y resaltan en el centro las áreas de texto donde se muestran los mensajes. 

Inicialmente, el proyecto incluía dos vistas, la primera pedía el mensaje a cifrar o descifrar y la segunda mostraba los resultados. Para seguir la premisa de mantenerlo simple, decidí usar solo una vista para ambos textos, y darle estilos dentro de ella para que resaltaran al centro, intentando que eso sea el elemento principal de la página. 