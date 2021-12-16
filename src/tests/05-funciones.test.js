import {getUsuarioActivo,getUsuarioActivo2} from '../base-pruebas/05-funciones';

//La palabra describe indica que es una suite de pruebas
describe('pruebas sobre retorno de objetos en funciones', () => {
    
    test('getUsuarioActivo retornara un objeto sin parametro', () => {
        //let nombre = '';
        const usuarioActiv = {
            uid: 'ABC567',
            username: 'juan'
        }
        const usuario = getUsuarioActivo();
        
        //el operador toEqual es una comparacion donde se compara el objeto deseado con el objeto real
        expect(usuario).toEqual(usuarioActiv);
    });

    test('getUsuarioActivo retornara un objeto con parametro', () => {
        let nombre = 'ABC567';
        const usuarioActiv = {
            uid: 'ABC567',
            username: nombre
        }
        const usuario = getUsuarioActivo2(nombre);
        
        expect(usuario).toEqual(usuarioActiv);
    });
    
});
//fin de suite pruebas de funciones.test.js


