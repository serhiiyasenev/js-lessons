const array = [1, 2, 1, 15, 4, 5, 3, 3, 30];

function compare(prev, next) {
    if (prev > next)  { return 1;  }
    if (prev == next) { return 0;  }
    if (prev < next)  { return -1; }
};

array.sort(compare);

console.log(array);