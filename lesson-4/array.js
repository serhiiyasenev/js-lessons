const array = [1, 2, 3, 4, 5];
const arrayLenhth = array.length;

console.log(array);
console.log(Object.keys(array));
console.log(Object.values(array));
console.log(arrayLenhth);
console.log(Array.isArray(array));
console.log(Object.getOwnPropertyDescriptor(array, 0));

const array1 = [5, 4, 3, 2, 1];

const array2 = [...array, ...array1];
console.log(array2);