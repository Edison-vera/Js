// This

const reservacion = {
    nombre: "Edison",
    apellido: "Vera",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());