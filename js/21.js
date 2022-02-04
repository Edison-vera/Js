// Arrow Functions

// const sumar2 = function(n1, n2) {
//     console.log(n1 + n2);

// }

// sumar2(1, 2);

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(1, 2);

const aprendiendo = (Tecnologia) => console.log(`Aprendiendo ${Tecnologia}`);


aprendiendo("JavaScript");

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

meses.forEach((mes) => {
    if (mes == "Marzo")
        console.log("Marzo si existe");
});

//Includes


//Some ideal para arreglos de objetos


let resultado;

resultado = carrito.some(producto => producto.Nombre == "Celular");


//Reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);



//Filter

resultado = carrito.filter((producto) => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter((producto) => producto.Nombre == "Celular");
console.log(resultado);