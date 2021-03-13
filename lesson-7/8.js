const user = {
    name: 'Walter',
    city: 'Berlin',
    skills: {
        driving: true,
    },
};

const {
    skills: {
        driving : job
    },
} = user;

console.log(job);
console.log('Be careful!');