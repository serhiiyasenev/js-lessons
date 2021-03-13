someLabel: for (let i = 0; i < 10; i++) {
    if (i === 6) {
        console.log('break');
        continue someLabel;
    }

    console.log(i);
}