var globalVariable1   = 'Good';
const globalVariable2 = 'morning';
let globalVariable3 = '!';

function globalfunction(){
    return `${globalVariable1} ${globalVariable2}${globalVariable3}`;
};

console.log(globalfunction());
console.log(global.globalVariable1);
console.log(global.globalVariable2);
console.log(global.globalVariable3);