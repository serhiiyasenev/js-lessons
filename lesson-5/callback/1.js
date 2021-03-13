function invoke(callback) {
    callback();
}

invoke(function() {
    console.log('Morning!');
});

invoke(function() {
    console.log('Evening!');
});

invoke(function() {
    console.log('Hello!');
});
