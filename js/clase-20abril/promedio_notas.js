/*
albarracin, 10, 10f
amado, 1, 9f
andrada, 8, 8f
banegas, 2, 7f
bascari, 9, 6f
bravo, 3,5f
calderon 7, 4f
carrizo, 4, 3f
chazarreta, 6, 2f
diarte,8, 1f
diaz, 9, 10f
diez,10, 9f

agregar apellido avellaneda con nota 7 y 2 faltas
agregar apellido briceño con nota 9 y 9 faltas
agregar apellido cordoba con nota 6 y 3 faltas
agregar apellido geronimo con nota 2 y 9 faltas

se quiere saber el promedio de todas las notas, saber si cada alumno aprrueba con 7 o mas y queda libre y si tiene mas 6 faltas
ingresar los datos de cada alumno con promt*/

//TP HECHO POR UNCOS SEBASTIAN Y JUAN LOBO

const comision =[];
let cantidad_de_alumnos = parseInt(prompt('Ingrese la candidad de alumnos de la comision: '))

let i =1;
while(i<=cantidad_de_alumnos){
    let apellido = prompt('Ingrese el apellido del alumno: ');
    let nota = parseInt(prompt(`Ingrese la nota de ${apellido}: `));
    let faltas = parseInt(prompt(`Ingrese la cantidad de faltas de ${apellido}: `));
    const nuevo_alumno ={ 
        apellido: apellido, 
        nota: nota, 
        faltas: faltas 
    };        
    comision.push(nuevo_alumno);
    i++;
}
console.log('===========');
console.log(`La cantidad de Alumnos de la comisión es: ${cantidad_de_alumnos}`);
console.log('Y son los siguientes:');
console.table(comision);
console.log('===========');


let suma_notas=0;
let promedio = 0;
for(n=0; n<comision.length; n++){
    suma_notas= suma_notas + comision[n].nota;
};


promedio = suma_notas / comision.length;
console.log(`El promedio de notas de la comision es: ${promedio}`)

console.log('===========');
const aprobados = comision.filter(n=> n.nota>=7);
console.log('Los alumnos aprobados son:');
console.table(aprobados);

console.log('===========');
const libres = comision.filter(l=> l.faltas>=6);
console.log('Los alumnos libres son:');
console.table(libres);