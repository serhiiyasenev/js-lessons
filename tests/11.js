'use strict'

this.n = 0;

var object = {
    n: 1,
    arrowFunction:() => {
        this.n = 2;
        console.log(this.n);
    }
}

object.arrowFunction();
