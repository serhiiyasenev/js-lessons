const user = {
    name: 'Walter',
    city: 'Berlin',
    skills: {
        driving: true,
        programming: {
            languages: {
                javascript: 'advanced',
                python: 'intermediate',
                swift: 'intermediate',
            },
            environments: {
                DOM: 'advanced',
                Node: 'advanced',
            },
        },
    },
};

const {
    city,
    name,
    skills,
    skills : {
        programming
    }
    //skills: {
    //    driving,
    //    programming: {
    //        languages: { javascript },
    //    },
    //},
} = user;

console.log(city);
//console.log(programming);
console.log(skills);
//console.log(driving);
//console.log(javascript);
//console.log(user);