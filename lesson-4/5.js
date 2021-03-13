const array = ['Good morning.', 'Good evening.', 'Good bye.', 'Hello.'];

const includes = function(array, targetElement) {
    const index = array.findIndex(element => {
        return element === targetElement;
    });
    return index === -1 ? false : true;
};

const result = includes(array, 'Good bye!');
const result1 = includes(array, 'Good bye.');

console.log(result);
console.log(result1);
console.log(array.includes('Good bye!'));
console.log(array.includes('Good bye.'));