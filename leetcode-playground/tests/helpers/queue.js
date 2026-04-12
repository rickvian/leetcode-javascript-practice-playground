class Queue {
  constructor() {
    this.items = {}
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    // put the item to tail
    this.items[this.tailIndex] = item;
    this.tailIndex++
  }

  dequeue() { // always take the first in first out

    // validate ensure queue have item by checking if content pointer has range?
    if (this.length === 0) return undefined;

    // 1. Capture the value first
    const item = this.items[this.headIndex];


    delete this.items[this.headIndex]; // remove item we dequeued, this frees up the memory
    this.headIndex++ // move the head index


    // check if we can reset the index to reduce memory usage;
    if (this.tailIndex - this.headIndex === 0) {
      // Reset pointers when the queue is truly empty
      this.headIndex = 0;
      this.tailIndex = 0;
    }

    return item;
  }

  // peak basically get head
  peek() {
    return this.items[this.headIndex]; // get head
  }

  // length is basically get the range from tail to head.
  get length() {
    return this.tailIndex - this.headIndex;
  }
}