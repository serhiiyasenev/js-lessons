const numbers = [1, 14, 84, 53, -2, 7];

const result1 = Math.max(...numbers);
const result2 = Math.max.apply(Math, numbers);

console.log(result1);
console.log(result2);