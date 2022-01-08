class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop(){
        if(this.items.length === 0) {
            console.error("Stack is empty");
            return this.items;
        }

        return this.items.pop();
    }

    peak() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        let str = "Stack ";
        for (let i = 0; i < this.items.length; i++) {
            let separator = this.items.length - 1 === i ? ";" : ", ";
            str += this.items[i] + separator;
        }
        return str;
    }
}


const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.warn(`Peack: '${stack.peak()}'`);
console.warn(`Is Empty: '${stack.isEmpty()}'`);
console.log(stack.print());
console.warn(`Pop: '${stack.pop()}'`);
stack.pop();
stack.pop();
console.log(stack.print());

