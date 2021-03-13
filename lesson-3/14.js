const user = {
    firstName: null,
    lastName: null,
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        let split = value.split(' ');
        this.firstName = split[0];
        this.lastName = split[1]; 
    }
};

user.fullName = 'Alex Lion';
console.log(user.fullName);