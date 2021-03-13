const outer = function inner() {
    console.log(`${outer.name}: ${typeof outer}`);
    console.log(`${inner.name}: ${typeof inner}`);
}

outer();