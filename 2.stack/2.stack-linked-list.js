class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    const popped = this.top.value;
    this.top = this.top.next;
    this.size--;
    return popped;
  }

  peek() {
    return this.top.value;
  }
}

const stack = new Stack();

// Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [ 1, 2, 3 ]

// Pop
console.log(stack.pop()); // 3
console.log(stack); // [ 1, 2 ]

// Peek
console.log(stack.peek()); // 2
