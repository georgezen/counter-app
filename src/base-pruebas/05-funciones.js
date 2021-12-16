
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

/* const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`; */

// console.log( saludar('Goku') )




/* const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});
 */

//const user = getUser();


// Tarea
const getUsuarioActivo = ( ) =>({
    uid: 'ABC567',
    username: 'juan'
})

const getUsuarioActivo2 = ( nombre) =>({
    uid: 'ABC567',
    username: nombre
})



export {getUsuarioActivo,getUsuarioActivo2}



