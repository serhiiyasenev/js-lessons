function shallowClone(object) {
    return Object.create(
        Object.getPrototypeOf(object),
        Object.getOwnPropertyDescriptors(object)
    );
};

const user = {name: 'Oliver', job: 'QA'};

Object.defineProperties(user, {name: {writable: false}, job: {writable: true}});

const userClone = shallowClone(user);

console.log('------user------');
console.log(user);
console.log('------Descriptors1------');
console.log(Object.getOwnPropertyDescriptors(user, 'name', 'job'));
console.log('------Descriptors2------');
console.log(Object.getOwnPropertyDescriptors(userClone, 'name', 'job'));
console.log('------userClone------')
console.log(userClone);