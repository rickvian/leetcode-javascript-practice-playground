class Queue {
  constructor() {
    // Double stack implementation
    this.stackA = []; // <- new item always go here
    this.stackB = [];
  }
  enqueue(elem) {
    this.stackA.push(elem);
  }
  dequeue() {
    if (!this.stackB.length) { // if empty
      if (!this.stackA.length) { // if A is also empty
        return null;
      }
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop());
      }
    }

    return this.stackB.pop();
  }
}

// A: []
// B: [4,3,2]

class Queue {
  constructor() {
    this.stackA = []
    this.stackB = []
  }

  enqueue(elem) {
    this.stackA.push(elem);
  }

  dequeue() {
    if (!this.stackA.length) {
      if (!this.stackB.length) {
        return null
      }

      // move A items to B
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
    }

    return this.stackB.pop();
  }
}