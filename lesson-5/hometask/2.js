/**
 * Задача 2.
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// РЕШЕНИЕ

const sum = function(){
    const array = Array.from(arguments);
    if (array.some(element => typeof element != 'number')) {
        throw new Error('Type of arguments should be numbers');
    }

    const result = array.reduce((a, b) => a + b);

    return result;
}

console.log(sum(1, 1, 1, 2, 1, 1, 1, 1)); // 9
console.log(sum(1, 1, 1, -2, 1, 1, 1, 1)); // 5
console.log(sum(1, 1, 1, 'x', 1, 1, 1, 1)); // error