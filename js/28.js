// Clases 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

}

const producto2 = new Producto("Monitor curvo de 49 pulgadas", 800);
const producto3 = new Producto("Monitor curvo de 40 pulgadas", 900);



//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }

}

const libro = new Libro("javaScript la revolucion", 120, "100210022");
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());