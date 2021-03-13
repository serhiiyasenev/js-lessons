// Перепишите `if..else` с использованием нескольких операторов `?`. 
// Для читаемости — оформляйте код в несколько строк.
////////////////// Задание //////////////////
// let message;
// if (login === 'Pitter') {
//   message = 'Hi';
// } else if (login === 'Owner') {
//   message = 'Hello';
// } else if (login === '') {
//   message = 'unknown';
// } else {
//   message = '';
// }
////////////////// Решение //////////////////
let login = 'Owner';

let message = login === 'Pitter' ? 'Hi Pitter'   : 
              login === 'Owner'  ? 'Hello Owner' : 
              login === ''       ? 'unknown'     :  'end';

console.log('message: ' + message);