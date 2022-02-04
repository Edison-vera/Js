const puntaje = 1001;

if (puntaje == 1000) {
    console.log("Si el puntaje es 1000");
} else {
    console.log("Puntaje diferente de 1000");
};

const efectivo = 100;
const carrito = 800;

if (efectivo > carrito) {
    console.log("El usuario puede pagar");
} else {
    console.log("El uuario no puede pagar");
}

const rol = "Administrador"

if (rol == "Administrador") {
    console.log("Acceso a todo el sistema");
} else if (rol == "Editor") {
    console.log("Acceso medio ")
} else { console.log("No tienes acceso a todo el sistema") }