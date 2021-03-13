const arr = [1, 2, 3]; // { '0': 1, '1': 2, '2': 3 }

for (const index in arr) {
    console.log(`index: ${index}`);
    console.log(`item: ${arr[index]}`);
}