const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5539043,
        lat: 14.2132,
        lng: 34.2121,
    }
};

console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)