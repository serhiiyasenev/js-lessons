function f(n, cb1) {
    var transformed = cb1(n);

    return function(l, cb2, cb3) {
        var result = cb2(l, transformed);
        return cb3(result);
    }
}

console.log(f(9, function(l) {
    return l*2;
})(1, function(p, m){
    return p + m;
}, function(s) {
    return s + 10;
}));