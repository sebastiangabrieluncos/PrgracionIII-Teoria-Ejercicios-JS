/*Ejercicio 5: switch case
Declara una variable dia (número del 1 al 3) y usa switch para mostrar "Lunes", "Martes" o "Miércoles" según corresponda. Si no es ninguno de esos valores, muestra "Otro día".*/

let dia =prompt('Ingrese un número del 1 al 3: ');
switch (dia){
    case "1":
        console.log('Lunes');
        break;
    case "2":
        console.log('Martes');
        break;
    case "3":
        console.log('Miércoles');
        break;
    default:
        console.log('Otro día')
}