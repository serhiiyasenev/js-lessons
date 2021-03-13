const message = 'Good morning!';
const splittedMessage = message.split('');

// reduce
console.log(`splittedMessage: ${splittedMessage}`);

const result = splittedMessage.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
});

console.log(`after reduce: ${result}`);

// reduceRight
console.log(`splittedMessage reverse: ${splittedMessage.reverse()}`);

const resultRight = splittedMessage.reduceRight((previous, current) => {
    console.log(previous, current);
    return previous + current;
});

console.log(`after reduce: ${resultRight}`);