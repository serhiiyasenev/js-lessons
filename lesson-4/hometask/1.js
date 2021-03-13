'use strict'
/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */
function checkArguments(arr, func){
    if (!Array.isArray(arr)) {
        throw new Error('В качестве первого следует передавать массив!');
    }
    if (typeof func != typeof(Function)) {
        throw new Error('В качестве второго аргумента следует передавать функцию!')
    }  
};

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!', 'Добрый вечер!'];
// Решение
const filter = function(arr, func) {
    checkArguments(arr, func);

    const newArray = [];

    arr.forEach( element => {
        if (func(element)) {
            newArray.push(element);
        }
    }); 
    
    return newArray; 
};
// Решение

const result = filter(array, (value => {return value === 'Добрый вечер!'}));
const result0 = filter(array, (value => {return value < 'Добрый вечер!'}));
const result1 = filter(array, (value => {return value >= 'Добрый вечер!'}));
console.log(result);
console.log(result0);
console.log(result1);

// Проверка через filter
console.log('filter -------------------------------------------------');
const check = array.filter(value => {return value === 'Добрый вечер!'});
const check0 = array.filter(value => {return value < 'Добрый вечер!'});
const check1 = array.filter(value => {return value >= 'Добрый вечер!'});
console.log(check);
console.log(check0);
console.log(check1);

// Генерация ошибок
filter(array, 2);

