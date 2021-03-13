const myModule = (function() {
    let privateValue = 'Walter White';

    return {
        setPrivateValue(newPrivateValue) {
            privateValue = newPrivateValue;
        },
        getPrivateValue() {
            return privateValue;
        }
    };
})();

console.log(myModule.getPrivateValue());
myModule.setPrivateValue('Jesse Pinkman');
console.log(myModule.getPrivateValue());