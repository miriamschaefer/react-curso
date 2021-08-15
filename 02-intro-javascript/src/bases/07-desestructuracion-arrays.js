const getState = (value) => {
   return [value, () => {console.log('Hola Mundo')}]
}

const [ name, setName] = getState('RuPaul');

console.log(name);
setName();