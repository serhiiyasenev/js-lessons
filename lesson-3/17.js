let str = 'Text';

let length = str.length;
console.log(`length: ${length}`);

let size = str.size;
console.log(`size: ${size}`);

let last = str[str.length-1];
console.log(`last: ${last}`);

let first = str.charAt(0);
console.log(`first: ${first}`);

let letter = str.slice(1,3);
if (str.slice(1,3) === str.substring(1,3)) {
    console.log(true);
} else {
    console.log(false);
}


console.log(`letter: ${letter}`);
