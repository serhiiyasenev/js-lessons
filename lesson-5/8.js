//module's code

const module1 = (function() {
    let name = 'Pitter';

    return {
        setName(val) {
            name = val;
        },
        getName() {
            return name;
        }
    };
})();

module1.setName('Pitter 2');
console.log(module1.getName());