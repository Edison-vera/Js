const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1k",
    medida: "1m",
}

const nuevoProducto = {...producto, ...medidas };

console.log(nuevoProducto);