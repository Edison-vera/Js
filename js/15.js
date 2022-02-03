//Array methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    { Nombre: "Monitor 20 pulgadas", precio: 500 },
    { Nombre: "Monitor 50 pulgadas", precio: 700 },
    { Nombre: "Table", precio: 300 },
    { Nombre: "Audifonos", precio: 200 },
    { Nombre: "Teclado", precio: 50 },
    { Nombre: "Celular", precio: 500 },
    { Nombre: "Bocinas", precio: 300 },
    { Nombre: "Laptop", precio: 800 },
];

// ForEach

meses.forEach(function(mes) {
    if (mes == "Marzo")
        console.log("Marzo si existe");
});

//Includes
let resultado = meses.includes("Marzo");
console.log(resultado);

//Some ideal para arreglos de objetos

resultado = carrito.some(function(producto) {
    return producto.Nombre == "Celular"
});

//Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);



//Filter

resultado = carrito.filter(function(producto) { return producto.precio > 400 });

resultado = carrito.filter(function(producto) { return producto.Nombre == "Celular" });

console.log(resultado);