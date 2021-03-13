const arr = ['x', 1, 2, 3, 0.2, '?'];

for(let i in arr){
    console.log(i);
}

for(let i of arr){
    console.log(i);
}