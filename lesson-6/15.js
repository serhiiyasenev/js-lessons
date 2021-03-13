const print = (param1 = param2, param2 = 3) => {
    console.log(param1, param2);
};

print(1);
print(2);
print(3, 5);

const prt = (...rest) => console.log(rest);

prt(1, 2, 3, 4, 5);