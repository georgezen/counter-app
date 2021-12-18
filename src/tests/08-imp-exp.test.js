import { getHeroeById, getHeroesByOwner } from "../base-pruebas//08-imp-exp";
import heroes from "./heroes.js";

describe("pruebas sobre import y export", () => {
    test("pruebas sobre heroes array de objetos", () => {
        let id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((hero) => hero.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test("el array heroes retorna undefined si no hay un id de heroe", () => {
        let id = "x";
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test("la funcion getHeroesByOwner retornara heroes de DC", () => {
        const owner = "DC";
        const owne = getHeroesByOwner(owner);
        const heroeOwner = heroes.filter((hero) => hero.owner === owner);
        
        expect(owne).toEqual(heroeOwner);
    });

    test("la funcion getHeroesByOwner retornara 2 heroes de Marvel", () => {
        let owner = "Marvel";
        const owne = getHeroesByOwner(owner);
        
        expect(owne.length).toBe(2);
    });
});
/* en el expect se recibe de manera real en una prueba, en el .toBe o toEqual se recibe lo que tu esperas que reciba es decir lo imaginario */
