var name = 'Oliver';

function print() {
    console.log(1, name);

    name = 'Walter';

    console.log(2, name);

    var name;
}

print();