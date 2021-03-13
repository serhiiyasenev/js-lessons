'use strict'

function getThis() {
    return this;
};

const user = {name: 'Oliver'};

user.getThis = function getThisUser(){
    return this;
};

console.log(this);
console.log(getThis());
console.log(user.getThis());
