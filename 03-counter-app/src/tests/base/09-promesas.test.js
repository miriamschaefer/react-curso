import { getHeroeById } from '../../base/08-imp-exp';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('testing promises', () => {

    test('function must return an async heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('should return error if heroe id doesnt exist', (done) => {
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    })

})