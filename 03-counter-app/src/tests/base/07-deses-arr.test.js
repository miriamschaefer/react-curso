import { retornaArreglo } from '../../base/07-deses-arr';


describe('Test in array destructuring', () => {

    test('must return an string and a number', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    })
})