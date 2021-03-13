'use strict';
const user = {
    name: 'Peter'
};

console.log(user);
user.lang = 'en';

Object.preventExtensions(user);

user.name = 'Walter';
console.log(user);

delete user.name;
console.log(user);
