const wallet = {
    currency: 'USD',
    amount: 100,
    valueOf() {
        return this.amount;
    },
    toString() {
        console.log(this);
        return this.currency;
    }
};

console.log(wallet + 150);
console.log(`The user balance is: ${+wallet} ${wallet}`);
console.log('------- Date ----------');
console.log(`Today is: ${new Date()}`);
console.log(`Today is: ${new Date().toUTCString()}`);
console.log(`Today is: ${new Date().toISOString()}`);
console.log(`Today is: ${new Date().valueOf()}`);
console.log(`From 1th January 1970: ${+new Date()}`);