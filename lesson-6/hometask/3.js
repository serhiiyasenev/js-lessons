/**
 * Задача 3.
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

const checkForFunctions = function() {
    for (let index = 0; index < arguments.length; index++) {
        if (typeof arguments[index] != typeof(Function)) {
            throw new Error(`Argument '${index}' is not a function`);
        }
    }
}

// Решение
const compose = (...funcs) => {
    checkForFunctions(...funcs)  
 
    const result = 
    initialArg => funcs.reduceRight((previousResult, func) => func(previousResult) 
    ? func(previousResult) 
    : new Error ('One of the functions did not return any value'), initialArg);
 
    return result;
 };

const result1 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
)('h');
const result2 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'