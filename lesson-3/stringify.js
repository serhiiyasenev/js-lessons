const obj = {
    x: 1,
    data: {
        type: [false, '©', '😍'],
    },
};

const serialized = JSON.stringify(obj);
const parsed = JSON.parse(serialized);

console.log('serialized:');
console.log(serialized);
console.log('parsed:');
console.log(parsed);

const objWithProps = {
    prop1: NaN,
    prop2: Infinity,
    prop3: -Infinity,
    prop4: function(a, b) {
        return a + b;
    },
};

console.log(objWithProps);
const serialized2 = JSON.stringify(objWithProps);
console.log(serialized2);