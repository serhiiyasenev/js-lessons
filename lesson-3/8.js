const obj = {
    x: 123,
    data: {
        type: [false, null, '']
    }
};

const serialized = JSON.stringify(obj, null, 8);
const parsed = JSON.parse(serialized);

console.log(`serialized : ${serialized}`);
console.log(`parsed : ${parsed.x}`);
console.table(`table parsed: ${parsed}`);
console.dir(`dir parsed: ${parsed}`);
