'use strict';

const person = {
    obj: {
        name: 'propetry'
    }
};

Object.preventExtensions(person);

person.obj.age = 21;
console.log(person.obj.age);