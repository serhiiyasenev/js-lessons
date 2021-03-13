/**
 * Задача 5.
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */
// Решение
function checkArguments(value, count){
    value = typeof value;
    if (value != 'number' && value != 'string' && value != 'object' && !Array.isArray(value)) {
        throw 'В качестве первого аргумента следует передавать число, строку, объект или массив';
    }
    if (typeof count != 'number') {
        throw 'Вo втором аргументе должно быть число';
    }
};

function createArray(value, count){
    try {
        checkArguments(value, count);
    } catch (error) {
        console.log(error);
    }

    const array = new Array(count).fill(value);

    return array;
};

const result = createArray('x', 5);
const result1 = createArray({name: 'Ivan'}, 3);
const result2 = createArray(2, 6);
const result3 = createArray(undefined, 4);

console.log(result); // [ x, x, x, x, x ]
console.log(result1); 
console.log(result2); 
console.log(result3); // log error: В качестве первого аргумента следует передавать число, строку, объект или массив 