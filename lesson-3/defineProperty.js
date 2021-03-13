const user = {
    firstName: 'Питер',
    lastName: 'Пен',
};

Object.defineProperty(user, 'fullName', {
    set(fullName) {
        const splitted = fullName.split(' ');

        this.firstName = splitted[0];
        this.lastName = splitted[1];
    },
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
});

console.log(user.fullName);

user.fullName = 'Уолтер Уайт';

console.log(user.fullName);