// Arreglos o arrays


const numeros = [10, 20, 30, 40, 50]

console.table(numeros);
console.log(numeros);



// console.log(meses);
// console.table(meses);

// //Acceder a los valores de un arreglo
// console.log(numeros[2]);

// //Conocer la extension de un arreglo
// //console.log(meses.length);
// //console.log(numeros.length);

// numeros.forEach(function(numeros) { console.log(numeros); })


// Arreglos

numeros.push(60); //Al final del arreglo del arreglo
numeros.unshift(-20); //Al inicio del arreglo 

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// meses.pop(); // Elimina al final del arreglo
// meses.shift(); // Elimina al inicio del arreglo 

// meses.splice(2, 1);
// console.table(meses);

//Rest Operator o Spread Operator

const nuevoArrelo = [...meses, "Junio"]
console.table(nuevoArrelo);