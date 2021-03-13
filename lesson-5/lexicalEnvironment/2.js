const prefix = '-->';

function printName(name) {
    const message = 'Hello! My name is';

    console.log(`${prefix} ${message} ${name}.`);
};

console.log(prefix);
printName('Oliver');