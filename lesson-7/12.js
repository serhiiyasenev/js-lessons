const user = {
    name: {
        first: 'Walter',
        last: 'White',
    },
    city: 'Berlin',
    cars: ['Audi', {name: 'BWM'}],
};

const {
    name: { first: firstName },
    cars: [, {name}],
} = user;

console.log(`My name is ${firstName}, and my favorite car is ${name}.`);