function checkArguments(arr, func){
    if (!Array.isArray(arr)) {
        throw new Error('В качестве первого следует передавать массив!');
    }
    if (typeof func != typeof(Function)) {
        throw new Error('В качестве второго аргумента следует передавать функцию!')
    }  
};
/**
 * Задача 2.
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же, как и у встроенного метода.
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */
const numbers = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;
function reducer(sum, current){ return sum + current; }

// Решение
function reduce(array, func, initialValue) {
    checkArguments(array, func);

    let result;

    if (typeof initialValue != 'undefined') {
        result = initialValue;
        for (let index = 0; index < array.length; index++) {
            result = func(result, array[index]);
        }
    } else {
        result = array[0];
        for (let index = 1; index < array.length; index++) {
            result = func(result, array[index]);
        }
    }

    return result; 
};

console.log('-----REDUCER RESULTS-----')
console.log(`result 21: ${reduce(numbers, reducer, INITIAL_ACCUMULATOR)}`); // 21
console.log(`result 15: ${reduce(numbers, reducer)}`); // 15
console.log('-----Checking results-----')
console.log(`Проверка 15: ${numbers.reduce(reducer)}`);
console.log(`Проверка 21: ${numbers.reduce(reducer, INITIAL_ACCUMULATOR)}`);
