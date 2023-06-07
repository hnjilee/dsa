class Stack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    this.stack.push(el);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);
stack.peek(); // 3
stack.print(); // [ 1, 2, 3 ]

console.log(stack.pop()); // 3
stack.size(); // [ 1, 2 ]
