function globalFunction() {
    const localFunction = () => {
        const localVariable = 'Good evening.';
        return localVariable;
    };

    const localVariable = localFunction();

    return localVariable;
}

console.log(globalFunction());