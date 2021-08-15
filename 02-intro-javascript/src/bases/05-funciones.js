// Transformar a arrow function
// Retorno de objeto implícito

// function getActiveUser(name) {
//     return {
//         uid: 'AB9238',
//         username: name
//     }
// }

const getActiveUserArrow = (name) => ({
    uid: 'AB123',
    username: name
})

const activeUser = getActiveUserArrow('Loli');
console.log(activeUser);