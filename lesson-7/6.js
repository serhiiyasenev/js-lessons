const user = {
    name: 'Walter',
    city: 'Berlin',
    profession: 'profession',
};

const { job: profession = 'developer', profession : job } = user;

console.log(typeof job);
console.log(profession);
console.log(job);