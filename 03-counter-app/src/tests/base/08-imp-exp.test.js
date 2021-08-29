import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('tests in importing and exporting', () => {

    test('must return an heroe by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('must return undefined if id doesnt exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    });

    test('must return an array with DC heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesByOwnerArr = heroes.filter((heroe) => heroe.owner === owner);
        
        expect(heroes).toEqual(heroesByOwnerArr);
    });

    test('must return length of array with Marvel heroes', () => {
        const owner = 'Marvel';
        const heroesLength = getHeroesByOwner(owner).length;
        const heroesByOwnerArrLength = heroes.filter((heroe) => heroe.owner === owner).length;

        expect(heroesLength).toBe(heroesByOwnerArrLength);
    });

})