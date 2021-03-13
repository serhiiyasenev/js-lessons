const now = new Date();
console.log(now.toISOString());
console.log(now.toString());

const newNow = new Date();
const options = {
    era: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: ' UTC'
};
console.log(newNow.toLocaleString('uk-UK', options));

console.log(new Date(Date.now()));