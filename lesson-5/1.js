const f = function() {
    console.log('Hello from fuction');
    return function() {
        console.log('Hello from inner fuction');
    };
};

f()();

(function() {
    const name = 'Pitter';
    console.log(name);
})();