function shallowEqual(objA, objB) {
    
    if (objA === objB) {
        return true;
    }

    if (!objA || !objB) {
        return null;
    }

    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);

    for (const key of aKeys) {
        if (objA[key] !== objB[key]) {
            return false;
        }
    }

    return true;
}


const user1 = {name: 'Oliver', country: 'Denmark', age: 30};
const user2 = {name: 'Oliver', country: 'Denmark', age: 30};

console.log(user1 === user2);
console.log(shallowEqual(user1, user2));