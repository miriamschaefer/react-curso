import { getImagen } from "../../base/11-async-await";

describe('testing async-await and fetch', () => {

    test('must return image url', async() => {

        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });

    test('must return true', async() => {

        const url = await getImagen();
        expect(typeof url).toBe('string');
    });

});