// Desustruracion
// Asignacion Destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ clave, edad }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1213,
            lng: -12.3432
        }
    }
        

};

const {nombreClave, anios, latlng: {lat, lng}} = useContext( persona );



console.log(nombreClave, anios);
console.log( lat, lng );