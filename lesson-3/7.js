const user = {
    name: 'Peter'
};

Object.defineProperty(user, 'country', {
    value: 'Ukraine',
    writable: false,
    enumerable: false
});

console.log(user);
console.log(`isExtensible: ${Object.isExtensible(user)}`);
console.log(`isFrozen: ${Object.isFrozen(user)}`);
console.log(`isSealed: ${Object.isSealed(user)}`);


Object.freeze(user);
Object.seal(user);
Object.preventExtensions(user);

console.log(user);
console.log(`isExtensible: ${Object.isExtensible(user)}`);
console.log(`isFrozen: ${Object.isFrozen(user)}`);
console.log(`isSealed: ${Object.isSealed(user)}`);