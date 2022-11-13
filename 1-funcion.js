//* 1.- Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado `1 funcion.js` (1 Punto)

//? Declaración de función
/* function example(a, b, c){
    return a+b+c
} */

//! Función de expresión
console.log('Ejercicio número 1');
const example = function (a, b , c) {
    let result = console.log(a + b + c);
    return result;
}

example(20, 30, 50);

/* ----------------------------------------------- */

