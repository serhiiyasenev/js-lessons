let currentCount = 1;

function createCounter() {

    return () => {
        return currentCount++;
    };

};

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log('----------------');
console.log(counter2());
console.log(counter2());