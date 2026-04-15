/*Ejercicio 3: if anidado
Declara una variable usuario y password. Si el usuario es "admin" y el password es "1234", muestra "Acceso concedido", si no, muestra "Acceso denegado".*/

let usuario =prompt('Ingrese su nombre de usuario: ');
if (usuario == "admin"){
    let password= prompt('Ingrese su contraseña: ');
    if(password=="1234"){
        console.log('Acceso concedido');
    }else{
        console.log('Password incorrecto');
    }
}else{
    console.log('Usuario incorrecto')
}