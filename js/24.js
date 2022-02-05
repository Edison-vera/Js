// For loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


for (let i = 0; i < 100; i++) {
    if (i % 2 === 0)
        console.log(`Numero ${i} es par`);
    else {
        console.log(`Numero ${i} es impar`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].precio);

}
// While loop




//Do while