var result = [];
for (var i = 0; i < 3; i++){
    result[i] = (function inner(x) {
        return function() {
            console.log(x);
        }
    })(i);
}

result[2]();
console.log(result);