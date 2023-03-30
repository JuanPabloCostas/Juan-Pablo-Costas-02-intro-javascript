// Funciones en JS
// const saludar = function( nombre ){
//     return `Hola, ${nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;





// console.log(saludar('Eevee'))

console.log(saludar2('Jolteon'))
console.log(saludar3('Flareon'))
console.log(saludar4())


const getUser = () => 
    ({
        usi: 'ABC123',
        username: 'El_Papi1205',
    })


console.log(getUser())

const user = getUser();
console.log(user);

//Tarea
//1. Transformen en una funcion de Flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas


const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
    });


const usuarioActivo = {...getUsuarioActivo('Fernando')};
console.log(usuarioActivo);