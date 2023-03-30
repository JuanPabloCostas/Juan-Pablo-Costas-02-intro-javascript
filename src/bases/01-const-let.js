// Variables y constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )

if(true) {
    // Variable local, si se declara de nuevo, no afecta la original
    const nombre = 'Peter';

    console.log(nombre)
}

console.log(nombre);