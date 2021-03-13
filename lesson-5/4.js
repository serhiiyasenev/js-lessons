const message = function(message){
    console.log(`message: ${message}`);
    return message;
};

const result1 = message('1');
const result2 = message('2');

console.log(result1);
console.log(result2);