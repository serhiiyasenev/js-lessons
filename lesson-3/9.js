// Методы объекта

const user = {
    age: 25,
    lang: 'en, ru',
    getName: () => {
        console.log(this);
        return 'Peter'
    },
    getJob() {
        console.log(this);
        return 'Developer';
    },
    getSurname: function() {
        console.log(this);
        return 'Peterson';
    }
};

console.log(user)