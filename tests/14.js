const user = {
    name: 'Jon'
};

const {
    cars: [ , car = 'Ford'] = ['Audi']
} = user;

console.log(car);
console.log(user);