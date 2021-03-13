function printMessage(message) {
    if (typeof message === 'string') {
        console.log(message);
    } else {
        throw new Error('message is not a string type');
    }
}

printMessage('Доброе утро! 🌻');
printMessage('Привет! 🖖🏼');
printMessage(111);
