const numbers = [3, 2, 3];
const chars = ['a', 'b', 'c'];

// every 
const every = numbers.every(elment => { return elment > 0});
console.log(`after numbers: ${every}`);
const everyChars = numbers.every(elment => { return elment > 0});
console.log(`after everyChars: ${everyChars}`);

// some 
const some = chars.some(elment => { return elment > 'a'});
console.log(`after some: ${some}`);
const someChars = chars.some(elment => { return elment > 'a'});
console.log(`after someChars: ${someChars}`);