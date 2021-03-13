const user1 = {name: 'Oliver', job: 'developer'};

const userClone = Object.assign(
    {},
    user1,
    {job: 'developer', country: 'Denmark'},
    {capital: 'Copenhagen'},
    {job: 'QA'}
);

console.log(user1);
console.log(userClone);