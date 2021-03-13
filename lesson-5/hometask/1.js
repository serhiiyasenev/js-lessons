/**
 * Задача 1.
 * Создайте функцию `cubeOfNumber`, которая возвращает куб числа, переданного в качестве аргумента.
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// РЕШЕНИЕ

const cubeOfNumber = function(number) {
    if (typeof number != 'number') {
        throw new Error('Type of argument should be number');
    }

    return number**3;
}


console.log(cubeOfNumber(2)); // 8
console.log(cubeOfNumber(3)); // 27
console.log(cubeOfNumber('NAN')); // error