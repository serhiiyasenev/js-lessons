/**
 * Задача 4.
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */
// Решение
function checkArguments(arr) {
    if (!Array.isArray(arr)) {
        throw 'В качестве аргумента следует передавать массив: ';
    }
    const areItemsSuitable = arr.every(element => element === 'number');
    if (areItemsSuitable) {
        throw 'В массиве должно быть число или массив: ';
    }
};

function collect(array) {
    const newArray = array.flat(10);
    try {
        checkArguments(newArray);
    } catch (er) {
        const error = er + `'${array}'`;
        console.log(error);
        return 0;
    }
    checkArguments(newArray);
    const reducer = (sum, current) => sum + current;
    const result = newArray.reduce(reducer);
    return result;
};

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12
const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3
const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6
const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0
const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

