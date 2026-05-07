/**
 * 373. Find K Pairs with Smallest Sums
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 * Difficulty: Medium
 *
 * You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
 *
 * Define a pair (u, v) which consists of one element from the first array and one element from the
 * second array.
 *
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
 */

class PriorityQueue {
    constructor(compareFn) {
        this.heap = [];
        this.compareFn = compareFn;
    }

    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._sinkDown(0);
        }
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compareFn(element, parent) >= 0) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    _sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let swapIndex = null;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;

            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (this.compareFn(leftChild, element) < 0) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && this.compareFn(rightChild, element) < 0) ||
                    (swapIndex !== null && this.compareFn(rightChild, this.heap[leftChildIndex]) < 0)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }
        this.heap[index] = element;
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = [];
  const visited = new Set();

  minHeap.enqueue([nums1[0] + nums2[0], 0, 0]);
  visited.add('0,0');

  for (let count = 0; count < k && !minHeap.isEmpty(); count++) {
    const [currentSum, index1, index2] = minHeap.dequeue();
    result.push([nums1[index1], nums2[index2]]);

    if (index1 + 1 < nums1.length && !visited.has(`${index1 + 1},${index2}`)) {
      minHeap.enqueue([nums1[index1 + 1] + nums2[index2], index1 + 1, index2]);
      visited.add(`${index1 + 1},${index2}`);
    }

    if (index2 + 1 < nums2.length && !visited.has(`${index1},${index2 + 1}`)) {
      minHeap.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
      visited.add(`${index1},${index2 + 1}`);
    }
  }

  return result;
};
