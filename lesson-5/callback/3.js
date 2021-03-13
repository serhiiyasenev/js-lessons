function invoke(item, callback) {
    if (typeof callback === 'function') {
        callback(item);
    } else {
        console.log(item);
    }
};

invoke ('Pitter', function(element) {
    console.log(element + '!');
});

invoke ('Alex', function(element) {
    console.log(element + '@');
});

invoke ('Alex', function(element) {
    console.log('&' + element);
});

invoke ('Russel', function(name) {
    console.log(name.toUpperCase());
});

invoke('item');