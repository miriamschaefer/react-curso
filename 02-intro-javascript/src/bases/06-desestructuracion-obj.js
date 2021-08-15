
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    rank: 'Captain'
}

const getAvenger = ({ key, name, age, rank = 'Captain'}) => {
    return {
        keyName: key,
        years: age
    }
}

const { keyName, years } = getAvenger(person);
console.log(keyName, years);