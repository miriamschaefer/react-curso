const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5];
const doubles = arr2.map((item) => (item * 2));

console.log(arr);
console.log(arr2);
console.log(doubles);