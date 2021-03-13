const array1 = [-Infinity, -1, 0, 1, 2, NaN, 4, 5, Infinity];

const json = JSON.stringify(array1, (_, value) => {
    if (value !== value) {
        return 'NaN';
    }

    if (value === Infinity) {
        return 'Infinity';
    }

    if (value === -Infinity) {
        return '-Infinity';
    }

    return value;
});

const array2 = JSON.parse(json, (_, value) => {
    if (value === 'NaN') {
        return NaN;
    }

    if (value === 'Infinity') {
        return Infinity;
    }

    if (value === '-Infinity') {
        return -Infinity;
    }

    return value;
});

console.log(array1);
console.log(json);
console.log(array2);