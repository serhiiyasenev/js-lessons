const arr1 = [1, 2];
const arr2 = [3, 4];

const concat = [...arr1, arr2];

console.log(...concat);

const user1 = {name: 'Jon', car: 'Ford'};
const user2 = {name: 'Joe', car: 'Audi'};
const user  = {...user1, ...user2};

console.log(user);