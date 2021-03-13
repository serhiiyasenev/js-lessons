const user = {
    name: 'Walter',
    getName1() {
        return () => {
            return this.name;
        };
    },
    getName2() {
        return function() {
            return this.name;
        };
    },
    getName3() {
        return this.name
    }
};

console.log(user.getName1()());
console.log('Контекст утерян');
console.log(user.getName2()());
console.log('Контекст утерян');
console.log(user.getName3());