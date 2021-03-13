function Human(name, job) {
    this.id = String(Math.floor(Math.random() * 1000000));
    this.name = name;
    this.job = job;
};

const jesse = new Human('Jesse', 'developer');
const oliver = new Human('Oliver', 'qa');
const walter = new Human('Walter', 'manager');

console.log(jesse);
console.log(oliver);
console.log(walter);
console.log(new Human());
