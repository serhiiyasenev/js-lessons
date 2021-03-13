var test = function() {
    throw new Error('Some errror');
}

setTimeout(function() {
    try {
        test();
    } catch (err) {
        console.log(err.message);
    }
}, 0);