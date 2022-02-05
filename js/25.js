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


//ForEach
carrito.forEach(producto => console.log(producto.Nombre));


//Map
const arreglo2 = carrito.map(producto => console.log(producto.precio));