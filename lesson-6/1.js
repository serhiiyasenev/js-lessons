const user1 = {name: 'Oliver'};
const user2 = user1;

console.log(user1);
console.log(user2);

user2.name = 'Walter';

console.log(user1);
console.log(user2);