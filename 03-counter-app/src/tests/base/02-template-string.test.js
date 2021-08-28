import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('tests in 02-template-string.js file', () => {

    test('getSaludo must return hola miriam', () => {
        const name = 'Miriam';
        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola ' + name);
    });

    test('should return Hola Ana if there is not a name argument', () => {
        const greeting = getSaludo();
        expect(greeting).toBe('Hola Ana');
    })

})