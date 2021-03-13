/**
 * Задача 3.
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// РЕШЕНИЕ

const isEven = function(number){
    if (typeof number != 'number') {
        throw new Error('Type of argument should be number');
    }

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true