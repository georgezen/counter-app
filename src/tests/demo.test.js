//La palabra describe indica que es una suite de pruebas
describe('pruebas sobre demo.test.js', () => {
    test('hola pinche putita', () => {

        let message = 'hola pinche putita';
        let message2 = 'hola pinche putita';
            
        expect(message).toBe(message2);
        /* el metodo expect pones el valor que esperas que sea
        igual a lo que esta dentro de toBe */
    });

    test('2 numeros', () => {

        let message = 3;
        let message2 = 1;
            
        expect(message).toBe(message2);
        
    });

});
//fin de suite pruebas de demo.test.js


