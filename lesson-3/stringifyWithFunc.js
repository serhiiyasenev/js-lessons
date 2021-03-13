const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const serialized = JSON.stringify(obj, (_, value) => {
    if (value < 2) {
        return;
    }

    return value;
});

console.log(serialized);