const person = {
    name: 'Pitter',
    read() {
        console.log(this.name);
    }
};

person.read();