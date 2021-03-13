function makeCounter() {
    var currentCount = 1;

    return function() {
        return ++currentCount;
    };
}

var counter = makeCounter();
counter();
var counter2 = makeCounter();
counter2();
console.log(counter());
console.log(counter2());