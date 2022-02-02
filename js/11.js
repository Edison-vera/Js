const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Forma anterior de realizar
const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring

//const { precio } = producto;
//const { nombreProducto } = producto;

const { nombreProducto, precio } = producto;
console.log(precio);
console.log(nombreProducto);