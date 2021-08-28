
describe('Testing in demo.test.js file', () => {
    test('strings must be equal', () => {

        const msg = 'CounterApp';
        const msg2 = `CounterApp`;
    
        expect(msg).toBe(msg2);
    })
})

