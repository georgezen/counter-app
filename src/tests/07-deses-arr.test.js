import {retornaArreglo} from '../base-pruebas/07-deses-arr';


describe('Pruebas de retorno de arreglo', () => {
    test('debe retornar un arreglo', () => {
        const [letra,numero] = retornaArreglo();

        expect( letra).toBe("ABC");
        expect(typeof letra).toBe("string");

        expect( numero).toBe(123);
        expect(typeof numero).toBe("number");
    });
});