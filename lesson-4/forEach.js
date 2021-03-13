const array = ['Oscar', 'Walter'];

const thisArg = {
    value: 'this!'
};

console.log('forEach - 1');
array.forEach((element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef, this);
}, thisArg);

console.log('--------------------');

console.log('forEach - 2');
array.forEach((element, index) => {
    console.log(`${index}:`, element);
});

console.log('--------------------');

console.log('forEach - 3');
array.forEach(element => console.log(element));
