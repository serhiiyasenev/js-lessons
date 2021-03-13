let n = 0;

switch(2) {
    case n + 1: {
        n = 1;
        console.log(n)
        break;
    }
    case n + 2:
        console.log(n);
        n = 2;
        console.log(n);
        break;
}