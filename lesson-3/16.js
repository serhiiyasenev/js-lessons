'use strict';

const person = {
    name: 'Peter',
    obj: {
        method: function() {}
    }
};

Object.freeze(person);

delete person.obj.method;

console.log(person.name);

const person2 = {
    name: 'Peter',
    age: 21
};

Object.freeze(person2);

console.log(Object.isFrozen(person2));