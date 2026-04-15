/*Ejercicio 4: Operador ternario
Declara una variable numero y usa el operador ternario para mostrar "Par" si es par o "Impar" si es impar.*/

let numero = prompt('Ingrese un número: ');
let resultado =(numero %2 ==0) ? 'El número ingresado es PAR' : 'El número ingresado es IMPAR';
console.log(resultado);