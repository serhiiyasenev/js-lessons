let obj = {
    method: function(){
        return 'method';
    },
    method2: function(){
        return 'method';
    }
};

Object.defineProperty(obj, 'method', {
    enumerable: true
});


for (const key in obj) {
    if (key === 'method') {
        console.log(true)
    } else {
        console.log(false)
    }
    console.log(key);
}