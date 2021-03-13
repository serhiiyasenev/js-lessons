const user = {
    name: 'Walter',
    city: 'Berlin',
};

const getUser = param => {
    console.log('→ param', param);
    console.log('→ param === user', param === user);
};

let name = 'Jane';
let city = 'Bergen';

console.log(name);
console.log(city);

({ name, city } = user);
getUser(user);

console.log(name);
console.log(city);