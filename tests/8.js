const person = {};

Object.assign(person, {
    name: 'Pitter',
    read() {
        console.log(this.name)
    }
});

console.log(person);
console.log(person.name);
person.read();