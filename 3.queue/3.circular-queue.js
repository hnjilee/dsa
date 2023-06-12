class Queue {
  constructor(max) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.max = max;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full!');
      return;
    }
    this.queue[this.rear++] = value;
    this.rear = this.rear % this.max;
    this.size += 1;
  }

  dequeue() {
    const deqeued = this.queue[this.front];
    if (deqeued == null) {
      return;
    }
    delete this.queue[this.front++];
    this.front = this.front % this.max;
    this.size -= 1;
    return deqeued;
  }

  peek() {
    return this.queue[this.front];
  }

  isFull() {
    return this.size === this.max;
  }
}

const queue = new Queue(7);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8); // Queue is full!
console.log(queue);
// Queue {
//   queue: [
//     1, 2, 3, 4,
//     5, 6, 7
//   ],
//   front: 0,
//   rear: 0,
//   max: 7,
//   size: 7
// }
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue);
// Queue {
//   queue: [ <3 empty items>, 4, 5, 6, 7 ],
//   front: 3,
//   rear: 0,
//   max: 7,
//   size: 4
// }
queue.enqueue(8);
console.log(queue);
// Queue {
//   queue: [ 8, <2 empty items>, 4, 5, 6, 7 ],
//   front: 3,
//   rear: 1,
//   max: 7,
//   size: 5
// }
console.log(queue.peek()); // 4
