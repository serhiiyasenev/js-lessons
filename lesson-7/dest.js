const user = {
    name: 'Walter',
    adress: {
        city: 'Berlin',
        street: 'Jagdfeldring',
        building: 81
    }
};

const { adress: {city: home = 'Kyiv', building = 1} } = user;
const { adress = null } = user;
const { adress1 = null} = user;
const { adress2       } = user;

console.log(typeof city);
console.log(typeof street);

console.log(home);
console.log(building);

console.log(adress);
console.log(adress1);
console.log(adress2);

