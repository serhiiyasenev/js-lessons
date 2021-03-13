/**
 * Задача 5.
 * Создайте функцию createFibonacciGenerator().
 * Вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// РЕШЕНИЕ

function createFibonacciGenerator() {
    let fn1 = 1;
    let fn2 = 0;
    this.print = function() {
        let current = fn2;
        fn2 = fn1;
        fn1 = fn1 + current;
        return current;
    }
    this.reset = function() {
        fn1 = 1;
        fn2 = 0;
        console.log('-----RESET-----');
    }
    return this;
};

const generator1 = createFibonacciGenerator();
console.log('generator1');
console.log(generator1.print()); // 0
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.print()); // 5
generator1.reset();
console.log(generator1.print()); // 0
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.print()); // 5

const generator2 = createFibonacciGenerator();
console.log('generator2');
console.log(generator2.print()); // 0
console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2
console.log(generator2.print()); // 3
console.log(generator2.print()); // 5
generator2.reset();
console.log(generator2.print()); // 0
console.log(generator2.print()); // 1