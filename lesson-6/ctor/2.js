// 2 вида наследования:
// 1. функциональное
// 2. прототипное

function Human(name, job) {
    this.name = name;
    this.job = job.toLowerCase();
    };

    class User {
        constructor(firstName, job) {
          this.firstName = firstName;
          this.job = job;
        }
    }

const jesse = new Human('Jesse', 'developer');
const serhii = new User('Serhii', 'qa');
const ivan = {name:'Ivan', job: 'student'};

console.log(jesse);
console.log(serhii);
console.log(ivan);
console.log('----------------------');
console.log(jesse instanceof Human);
console.log(serhii instanceof User);
console.log(ivan instanceof Human);