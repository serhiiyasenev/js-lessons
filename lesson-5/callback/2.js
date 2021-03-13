function invoke (callback) {
    callback();
};

function printMessage() {
    console.log(`Hello!`);
};

invoke(printMessage);