function Human(name, job) {
    this.name = name;
    this.job = job.toLowerCase();
    this.sayName = function() {
        console.log(`My name is ${this.name}.`);
    };
    // стрелочные и обычные функции по разному работаю с 'this'
    this.sayJob = () => {
        let activity = this.job;

        if (this.job === 'developer') {
            activity = 'I do programming.';
        } else if (this.job === 'qa') {
            activity = 'I do testing.'
        }
        else {
            activity = 'I\'m a student.'
        }

        console.log(activity);
    };
};

const jesse = new Human('Jesse', 'developer');
const serhii = new Human('Serhii', 'qa');
const ivan = new Human('Ivan', 'student');

jesse.sayName();
jesse.sayJob();

serhii.sayName();
serhii.sayJob();

ivan.sayName();
ivan.sayJob();