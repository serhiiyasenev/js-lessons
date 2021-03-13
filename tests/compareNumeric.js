const arr = [11, 1, 15, 2, 3];
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

console.log([1, 2].find(item => item > 1));

function f(...n) {
    console.log(typeof n);
}

f(1, 2, 3);
console.log(typeof(1, 2, 3))