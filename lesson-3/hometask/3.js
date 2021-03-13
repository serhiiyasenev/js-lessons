'use strict';
/**
 * Задача 3.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Необходимо проверить длину строки в переменной string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * В консоль должна вывестись (при необходимости) усечённая строка.
 *
 * Условия:
 * - Переменная string должна обладать типом string;
 * - Переменная maxLength должна обладать типом number.
 */

function truncate(string, maxLength) {
    // РЕШЕНИЕ НАЧАЛО
    if (typeof string !== 'string' && typeof maxLength !== 'number') {
        return 'Проверьте аргументы: превый должен быть string, второй - number';
    } else {
        return string.length > maxLength ? string.slice(0, maxLength - 1) + '…' : string;
    }
    // РЕШЕНИЕ КОНЕЦ
}

console.log(truncate('Вот, что мне LONGLONGLONGLONGLONG', 21));
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
console.log(truncate('Вот, что мне хотел-21', 21)); // 'Вот, что мне хотел-21'
console.log(truncate('Вот, что мне хотел-21', 'a')); // 'Проверьте аргументы: ...'