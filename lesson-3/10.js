const user = {
    age: 25,
    name: 'Peter',
    sayName(){
        return this.name;
    }
};

Object.defineProperties(user, {
    sayName: {
      value: 42,
      writable: false,
      configurable: false
    },
    name: {
      value: 'value',
      enumerable: true
    }
  });

console.log(user)
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
