/**
 * Напишите функцию для форматирования даты.
 * 
 * Фукнция принимает 3 аргумента
 * 1. Дата которую необходимо отформатировать
 * 2. Строка которая содержит желаемый формат даты
 * 3. Разделитель для отформтированной даты
 * 
 * Обратите внимание!
 * 1. DD день в формате — 01, 02...31
 * 2. MM месяц в формате — 01, 02...12
 * 3. YYYY год в формате — 2020, 2021...
 * 4. Строка которая обозначает формат даты разделена пробелами
 * 5. В качестве разделителя может быть передано только дефис, точка или слеш
 * 6. Генерировать ошибку если в формате даты присутствет что-то другое кроме DD, MM, YYYY
 * 7. 3-й аргумент опциональный, если он передан не был, то в качестве разделителя используется точка
*/

const formatDate = (date, format, delimiter = '.') => {
    const parts = [];

    format.split(/-| |\+/g).forEach(part => {
        switch (part) {
            case 'DD':
                parts.push(date.getDate());
                break;
            case 'MM':
                parts.push(date.getMonth());
                break;
            case 'YYYY':
                parts.push(date.getFullYear());
                break;
            default:
                throw new Exception('Date format should be DD, MM, YYYY');
        }
    })
   
    return parts.join(delimiter);
};

const formatName = (name) => {
    const escapedName = name.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    return escapedName;
};

console.log(formatName('Id~ToRecipientsWithAudience_ReturnsSuccess(Sent)|Id~ToRecipientsWithAudience_ReturnsSuccess(New)|Id~ToRecipientsWithAudience_ReturnsSuccess(All)'));