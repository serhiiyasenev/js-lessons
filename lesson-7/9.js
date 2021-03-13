const user = {
    name: 'Walter',
    city: 'Berlin',
};

let name = 'Jane';
let city = 'Bergen';

console.log(name);
console.log(city);

({ name, city } = user);

console.log(name);
console.log(city);