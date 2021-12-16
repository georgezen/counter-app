import {getSaludo} from '../base-pruebas/02-template-string';

//La palabra describe indica que es una suite de pruebas
describe('pruebas sobre template string', () => {
    
    test('getSaludo retornara un nombre', () => {
        //let nombre = '';
        const saludo = getSaludo();
        console.log(saludo);
        expect(saludo).toBe('Hola ' + 'Carlos');
    });
    
});
//fin de suite pruebas de demo.test.js


