//Declaracion de funcion

function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);

}

sumar(10);
sumar(100, 10);
sumar(12, 10);
sumar(144, 10);
sumar(10, 44);

//Expresion de la funcion

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);

}

sumar2(100, 100);