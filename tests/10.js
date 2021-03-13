const person1 = {};
person1['full name'] = 'Pitter Collins';

console.log(person1['full name']);

const person2 = {};
person2[(() => 'name')()] = 'Pitter';

console.log(person2.name);

const person3 = {};

const full = 'full';
const name = 'name';

person3[`${full} ${name}`] = 'Pitter Collins';

console.log(person3['full name']);