const user1 = {name: 'Walter'};
const user2 = {name: 'Monica'};

function sayName() {
    console.log(`Hi: ${this.name}`);
};

const say1 = sayName.bind(user1);
const say2 = sayName.bind(user2);

say1();
say2();