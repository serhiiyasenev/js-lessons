const user = {
    name: 'Oliver',
    job: 'developer',
    country: 'Denmark'
};

const entries = Object.entries(user);

entries.push(['capital', 'Copenhagen']);
entries.push(['1', '2']);

const updatedUser = Object.fromEntries(entries);

console.log(user);
console.log(entries);
console.log(Array.isArray(entries));
console.log(updatedUser);
