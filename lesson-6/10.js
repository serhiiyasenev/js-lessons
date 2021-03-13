function f(n = 10) {
    console.log(n);
    return n;
};

const test1 = f();
const test2 = f(11);

console.log(`tets1 = ${test1}`);
console.log(`tets2 = ${test2}`);