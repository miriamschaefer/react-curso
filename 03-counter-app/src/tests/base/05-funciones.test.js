import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Tests in 05-funciones', () => {

    test('Should return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('Should return an object too', () => {

        const name = 'Miriam';
        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    })

})