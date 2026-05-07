class Queue {
  constructor() {
    this.item = {}
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    // put the item to tail
    this.items[this.tailIndex] = item;
    this.tailIndex++
  }

  dequeue(item) {
    if (this.tailIndex - this.headIndex === 0) {
      return undefined;
    }


    const item = this.items[this.headIndex];
    delete this.items[this.headIndex]; // remove item we dequeued
    this.headIndex++

    if (this.tailIndex - this.headIndex === 0) {
      // Reset pointers when the queue is truly empty
      this.headIndex = 0;
      this.tailIndex = 0;
      return undefined;
    }

    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}