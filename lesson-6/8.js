const user1 = {name: 'Walter'};
const user2 = {name: 'Monica'};

function sayName() {
    console.log(`Hi: ${this.name}`);
};

sayName.call(user1);
sayName.call(user2);