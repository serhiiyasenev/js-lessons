var x = 2;
function outer() {
    var y = 3;
    function inner() {
        var z = 4;
        return x * y * z;
    }
    return inner;
}

var f = outer();
console.log(f());