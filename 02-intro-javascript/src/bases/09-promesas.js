import { getHeroeById } from "./bases/08-imp-exp";
// import getHeroesByOwner from "./bases/08-imp-exp";


// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe);
//    })
// }, 2000);

// promise.then((heroe) => {
//    console.log(heroe)
// }).catch( err => console.warn(err));


const getHeroeByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const heroe = getHeroeById(id);
         heroe ? resolve(heroe) : reject('No hay héroe');
      })
   }, 2000)
};

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);