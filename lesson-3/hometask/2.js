'use strict';
/**
 * Задача 2.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Необходимо присвоить переменной result значение true, 
 * если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Необходимо выполнить проверку что source и spam являются типом string.
 * - Строки должны быть не чувствительными к регистру
 */

function checkSpam(source, spam) {
    // РЕШЕНИЕ НАЧАЛО
    return source.toLowerCase().includes(spam.toLowerCase());
    // РЕШЕНИЕ КОНЕЦ
}

console.log(checkSpam('pitterXXX@gmail.com', 'xXx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'sss')); // false