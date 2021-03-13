function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
};

repeat(3, console.log);