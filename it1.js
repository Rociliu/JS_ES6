//Arrows
"use strict";
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

//1.1 Ejecuta esta función sin pasar ningún parametro:
let sum1 = () => {
    let a = 10;
    let b = 5;
     
    return a + b;
}
console.log("Primera opción :" +sum1()); 

//1.2 Ejecuta esta función pasando un solo parametro:
let sum2 = a => {
    let b = 5;
    return a + b;
}
console.log("Segunda opción :"+ sum2(10));


//1.3 Ejecuta esta función pasando dos parametros:
let sum3 = (a, b) => a + b;
let total = sum3(10, 5);
console.log("Tercera opción :"+ total);


