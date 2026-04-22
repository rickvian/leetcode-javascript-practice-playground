import { MyCircularDeque } from '../0641-design-circular-deque.js';

describe('0641-design-circular-deque', () => {
  it("sequence 1", () => {
    const obj = new MyCircularDeque();
    expect(obj.insertFront(1)).toEqual(true);
    expect(obj.insertLast(1)).toEqual(true);
    expect(obj.deleteFront()).toEqual(true);
    expect(obj.deleteLast()).toEqual(true);
  });
});
