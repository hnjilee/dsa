class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const deqeued = this.queue[this.front];
    if (deqeued == null) {
      return;
    }
    delete this.queue[this.front];
    this.front += 1;
    return deqeued;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue); // Queue { queue: [ 1, 2, 3 ], front: 0, rear: 3 }
console.log(queue.dequeue()); // 1
console.log(queue); // Queue { queue: [ <1 empty item>, 2, 3 ], front: 1, rear: 3 }
console.log(queue.peek()); // 2
console.log(queue.size()); // 2
