/**
 * Задача 1.
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 * Из объектов в обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */
// Решение

function shallowMerge(first, second) {
  let result = {};  

  for (let property in first){
    result[property] = first[property];
    Object.defineProperty(result, property, {writable : Object.getOwnPropertyDescriptor(first, property).writable});
    Object.defineProperty(result, property, {configurable : Object.getOwnPropertyDescriptor(first, property).configurable});
    Object.defineProperty(result, property, {enumerable : Object.getOwnPropertyDescriptor(first, property).enumerable});
  }

  for (let property in second){
    result[property] = second[property];
    Object.defineProperty(result, property, {writable : Object.getOwnPropertyDescriptor(second, property).writable});
    Object.defineProperty(result, property, {configurable : Object.getOwnPropertyDescriptor(second, property).configurable});
    Object.defineProperty(result, property, {enumerable : Object.getOwnPropertyDescriptor(second, property).enumerable});
  }

    return result;
  }

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false
