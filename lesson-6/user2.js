const user2 = Object.create(null, {
    name: {
        value: 'Oliver',
        writable: false,
        enumerable: true
    },
    job: {
        value: 'developer',
        configurable: false,
        enumerable: true
    }
});

console.log(user2);