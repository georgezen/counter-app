import { getHeroeByIdAsync } from "../base-pruebas/09-promesas.js";
//import heroes from "./heroes.js";

describe("pruebas sobre promesas", () => {
    test("getHeroeByIdAsync retorna un nombre en base a id", (done) => {
        getHeroeByIdAsync(1).then((heroe) => {
            expect(heroe.nombre).toBe("Batman");
            done();
        });
    });

    test("getHeroeByIdAsync regresa mensaje de no hay heroe", (done) => {

        getHeroeByIdAsync(90)
        .catch(error => {
            
            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toBe("No se pudo encontrar el héroe");
            done();
        });
    });
});
