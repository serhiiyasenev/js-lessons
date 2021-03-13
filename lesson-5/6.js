const calculate = function (){
    for (const item of arguments) {
        console.log(item);
    }
    console.log(Array.from(arguments));

    console.log('-----------------');
    console.log(calculate.arguments);
    console.log('-----------------');
}

calculate(1, 2, 3);
calculate(4, 5, 6);
