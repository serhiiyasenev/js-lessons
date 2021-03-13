const getMessage = message => {
    const prefix1 = '→';
    const prefix2 = '√';
    const prefix = message === 'morning' ? prefix1 : prefix2;
    
    return `${prefix} Good ${message}`;
};

const result1 = getMessage('morning');
const result2 = getMessage('evening');

console.log(result1);
console.log(result2);
