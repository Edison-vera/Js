const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve("Usuario autenticado"); //Se cumple el promise
    } else {
        reject("Usuario no autenticado"); // No se cumple el promise
    }

});

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))

// Tres valores posibles 
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado no se pudo cumplir