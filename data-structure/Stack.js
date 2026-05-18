/**
 * Stack — LIFO (Last In, First Out)
 *
 * Backed by a JS array. `push`/`pop` on the tail are amortized O(1) because
 * V8 grows the underlying buffer geometrically (doubles when full), so the
 * average copy cost per push is constant.
 *
 *   top →  [ d ]   ← push/pop here
 *          [ c ]
 *          [ b ]
 *   bot →  [ a ]
 *
 * Why NOT shift/unshift at the head? Both are O(n) — every element re-indexes.
 * Stacks always grow at the tail.
 *
 * Common uses:
 *   - parentheses matching, expression evaluation
 *   - DFS without recursion (avoid call-stack overflow)
 *   - undo/redo history
 *   - call frame simulation
 *
 * Space: O(n)
 *
 * push      O(1) amortized
 * pop       O(1)
 * peek      O(1)
 * size      O(1)
 * isEmpty   O(1)
 */
class Stack {
  #data = [];

  push(val) {
    this.#data.push(val);
  }

  pop() {
    // returns undefined on empty — matches Array.prototype.pop semantics
    return this.#data.pop();
  }

  peek() {
    return this.#data[this.#data.length - 1];
  }

  size() {
    return this.#data.length;
  }

  isEmpty() {
    return this.#data.length === 0;
  }
}

export { Stack };
