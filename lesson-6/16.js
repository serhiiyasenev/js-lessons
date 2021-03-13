function createLogger() {
    return function(message) {
        console.log(message);
    };
};

console.log(createLogger());
createLogger()('Good afternoon');