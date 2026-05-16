/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We smash the two heaviest stones each turn; if equal both are destroyed, otherwise the
 * difference remains. Return the weight of the last stone, or 0 if none remain.
 *
 * https://leetcode.com/problems/last-stone-weight/description/
 *
 * @param {number[]} stones - Array of stone weights
 * @return {number}
 *
 * @constraints
 * - 1 <= stones.length <= 30
 * - 1 <= stones[i] <= 1000
 */

class MaxHeap {
    constructor() { this.heap = []; }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._sinkDown(0);
        }
        return top;
    }

    size() { return this.heap.length; }

    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    _sinkDown(i) {
        const n = this.heap.length;
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this.heap[l] > this.heap[largest]) largest = l;
            if (r < n && this.heap[r] > this.heap[largest]) largest = r;
            if (largest === i) break;
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
            i = largest;
        }
    }
}

var lastStoneWeight = function (stones) {
    const heap = new MaxHeap();
    for (const s of stones) heap.push(s);

    while (heap.size() > 1) {
        const stone1 = heap.pop();
        const stone2 = heap.pop();
        const diff = stone1 - stone2;
        if (diff > 0) heap.push(diff);
    }

    return heap.size() === 1 ? heap.pop() : 0;
};

export { lastStoneWeight };
