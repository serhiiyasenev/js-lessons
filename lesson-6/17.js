function Human(name, job) {
    this.name = name;
    this.job = job;
};

const jesse = new Human('Jesse', 'developer');
const alex = new Human('Alex', 'QA');

console.log(jesse);
console.log(alex);