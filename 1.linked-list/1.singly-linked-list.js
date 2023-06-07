class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);

    if (node == null) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = node.next;
    node.next = newNode;

    if (newNode.next == null) {
      this.tail = newNode;
    }

    return this;
  }

  prepend(newValue) {
    const newNode = new Node(newValue);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  remove(value) {
    if (this.head == null) {
      return;
    }

    if (this.head.value === value) {
      const removed = this.head;
      this.head = this.head.next;
      return removed;
    }

    let previousNode = this.head;
    while (previousNode.next.value !== value) {
      previousNode = previousNode.next;
    }
    const removed = previousNode.next;
    previousNode.next = previousNode.next.next;

    if (removed === this.tail) {
      this.tail = previousNode;
    }

    return removed;
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(4);

const node = list.find(2);
list.insert(node, 3);

list.prepend(0);

list.remove(0);
list.remove(2);
list.remove(4);

console.log(list);
