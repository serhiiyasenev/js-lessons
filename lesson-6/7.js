'use strict'

function getName() {
    return this.name;
};

const user1 = {name: 'Oliver', getName};
const user2 = {name: 'Jack',   getName};


console.log(user1.getName());
console.log(user2.getName());
