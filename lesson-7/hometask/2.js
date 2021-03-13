/**
 * Доработайте функцию что бы она возвращала объект из переданного вложенного массива
 * 
 * Фукнция принимает 1 аргумент
 * 1. Массив из массивов который содержит 2 элемента — [ [ element1, element2 ] ]
 * 
 * ЗАПРЕЩЕНО ИСПОЛЬЗОВАТЬ ВСТРОЕННЫЙ МЕТОД Object.fromEntries
 * 
 * Обратите внимание!
 * 1. Генерировать ошибку если второй элемент вложенного массива не число, не строка или не null
 * 2. Обязательно использовать деструктуризацию при извлечении элементов массива
 * 3. Если в качестве второго аргумента был передан массив вида [ [ element1, element2 ] ], то его так же нужно преобразовать в объект
 * 4. Для перебора массива можно воспользоваться циклом for..of.
*/

function checkArguments(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`В качестве аргумента следует передавать массив: ${arr}`);
    }
    if (arr.length > 1) {
    const secondElement = arr[1];
    const isSuitable = typeof(secondElement) == 'number' || typeof(secondElement) == 'string' || typeof(secondElement) == null || Array.isArray(secondElement);
    if (!isSuitable)
        throw new Error(`Второй элемент вложенного массива не число, не строка, не массив и не null: ${arr}`);
    }
};

const fromEntries = (entries) => {
    checkArguments(entries);
    const obj = { };

    for (let [ key, value] of Object.values(entries)) {
        if (Array.isArray(value)) {
            obj[key] = fromEntries(value);
        }
        else {
            obj[key] = value;
        }
    }

    return obj;
};

console.log(fromEntries([['name', 'John'], ['age', 35]])); // { name: 'John', age: 35 }
console.log(fromEntries([['name', 'John'], ['address', [['city', 'New  York']]]])); // { name: 'John', address: { city: 'New  York' } }

//console.log(fromEntries({name: 1})); // check array  - error
//console.log(fromEntries([['name', 'John'], {name: 2}])); // check second array element - error