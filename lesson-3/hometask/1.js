'use strict';
/**
 * Задача 1.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Необходимо преобразовать первый символ переданной строки в заглавный.
 *
 * Условия:
 * - Необходимо проверить что параметр str является строкой
 */

function upperCaseFirst(str) {
    // str ← строка которая в нашем случае равна 'pitter' или ''
    // РЕШЕНИЕ НАЧАЛО
    if (typeof str === 'string' && str.length > 0) {
        return str[0].toUpperCase() + str.substring(1, str.length);
    } else {
        return str;
    }
    
    // РЕШЕНИЕ КОНЕЦ
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('p')); // P
console.log(upperCaseFirst(`Empty: ${''}`)); // ''
console.log(upperCaseFirst(null)); // null
console.log(upperCaseFirst(0)); // 0
console.log(upperCaseFirst(undefined)); // undefined
console.log(upperCaseFirst(NaN)); // NaN
console.log(upperCaseFirst(Infinity)); // Infinity