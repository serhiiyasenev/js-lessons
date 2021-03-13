const func = function (a){
    return a + 100;
  }

let funcArrow = (a, b) => a + 100 + b;

function test(a){
    console.log(`a: ${a}`);
}

let testArrow = (a, b) => console.log(`a: ${a}, b: ${b}`);



let b = func('x');
let c = funcArrow('y', 'z');
let n = test('xxx');
let m = testArrow('yyy', 'zzz');

console.log(b);
console.log(c);
console.log(n);
console.log(m);



