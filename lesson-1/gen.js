function* naturalNumbers() {
    let num = 1;
    while(true) {
        yield num;
        num = num + 1;
        if(num > 10) break;
    }
}

const numbers = naturalNumbers();

let timerId = setInterval(() => {
    console.log(numbers.next())
}, 200);

setTimeout(() => { 
    clearInterval(timerId); 
    console.log('stop'); 
}, 2500);