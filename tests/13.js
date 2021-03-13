const user = {
    name: 'Jon',
    age: 21
};
let name, age;

({name, age} = user);

console.log(name);
console.log(user);