const numbers = [1, 2, 3, 4, 5];
const reducer = (sum, current) => sum + current;
const INITIAL_ACCUMULATOR = 6;

// reduce

const result1 = numbers.reduce(reducer, INITIAL_ACCUMULATOR);
console.log(`after reduce numbers: ${result1}`);

const result0 = numbers.reduce(reducer);
console.log(`after reduce numbers: ${result0}`);

