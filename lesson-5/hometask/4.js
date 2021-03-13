/**
 * Задача 4.
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// РЕШЕНИЕ

const getDivisors = function(number){
    if (typeof number != 'number') {
        throw new Error('Type of argument should be number');
    }
    if (number < 1) {
        throw new Error('Argument should be number greather than 1');
    }

    const array = Array.from({length: number}, (_, i) => i+1);

    const result = [];

    for (const item of array) {
        if (number % item === 0) {
            result.push(item);
        }
    }

    return result;
}

console.log(getDivisors(5));  // [1, 5]
console.log(getDivisors(8));  // [1, 2, 4, 8]
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
