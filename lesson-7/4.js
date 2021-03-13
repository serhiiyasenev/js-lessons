const user = {
    name: 'Walter',
    city: 'Berlin'
};

const {name, city, job = 'developer', city: home = 'Kyiv'} = user;

console.log(name);
console.log(city);
console.log(job);
console.log(home);
console.log(user);