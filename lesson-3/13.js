let obj = {
    method: function(){
        return 'method';
    },
    method2: function(){
        return 'method';
    }
};

Object.defineProperty(obj, 'method', {
    enumerable: false
});

let n = 0;

for (let key in obj) {
    n = 1;
}

console.log(n);