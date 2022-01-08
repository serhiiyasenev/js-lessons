function makeCounter() {
    let c = 0;
    return function() {
        return c++;
    }
}

let counter = makeCounter();
console.warn(counter()); //0
console.warn(counter()); //1
console.warn(counter()); //2
console.warn(counter()); //3

function createAccum(initValue) {
    let c = initValue;
    return {
        add: function(a) {
            return c += a;
        },
        min: function(a) {
            return c -= a;
        },
        toZero: function() {
            return c = 0;
        }
    }
}

let c = createAccum(10);
console.warn(c.add(5));  // 15
console.warn(c.min(2));  // 13
console.warn(c.toZero());// 0