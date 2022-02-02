"use strict"; //Comando modo estricto

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //No permite modificar propiedades 
Object.seal(producto); // Permite modificar propiedades

//producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));


console.log(producto)