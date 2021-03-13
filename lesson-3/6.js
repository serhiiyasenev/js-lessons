const user = {
    firstName: 'Peter',
    lastName: 'Debugger',
    set fullName(fullName){
        const splitted = fullName.split(' ');
        this.firstName = splitted[0];
        this.lastName = splitted[1];
        this.age = splitted[2];
    },
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(user.fullName);
user.fullName = 'Walter White 23';
console.log(user.fullName);
console.log(user.age);