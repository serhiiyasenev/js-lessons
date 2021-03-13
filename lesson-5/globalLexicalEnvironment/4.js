const getFullName0 = (a, b, c) => {
    var name    = a;
    const mName = b;
    let surname = c;

    return `${name} ${mName} ${surname}`;
}

let getFullName1 = (a, b, c) => {
    var name    = a;
    const mName = b;
    let surname = c;

    return `${name} ${mName} ${surname}`;
}

var getFullName2 = (a, b, c) => {
    var name    = a;
    const mName = b;
    let surname = c;

    return `${name} ${mName} ${surname}`;
}

console.log(getFullName0('Oliver', 'Jr.', 'Blank'));
console.log(getFullName0('Ivan', 'Petrovich', 'Popov'));
console.log(getFullName0('X', 'Y', 'Z'));
console.log('----------------------------------------');
console.log(getFullName1('X1', 'Y1', 'Z1'));
console.log(getFullName2('A', 'B', 'C'));