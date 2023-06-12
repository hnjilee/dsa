class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.head === null) {
      return;
    }
    const deqeued = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return deqeued;
  }

  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
// Queue {
//   head: Node { value: 1, next: Node { value: 2, next: [Node] } },
//   tail: Node { value: 3, next: null },
//   size: 3
// }
console.log(queue.dequeue()); // 1
console.log(queue);
// Queue {
//   head: Node { value: 2, next: Node { value: 3, next: null } },
//   tail: Node { value: 3, next: null },
//   size: 2
// }
console.log(queue.peek()); // 2
