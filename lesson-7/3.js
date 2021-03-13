console.log('Start')

try {
    setTimeout(() => {
        throw new Error('Error');
    }, 1000)
} catch (error) {
    console.log('Caught!')
};

console.log('End')
