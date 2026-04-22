import { MyCircularQueue } from '../0622-design-circular-queue.js';

describe('0622-design-circular-queue', () => {
  it("sequence 1", () => {
    const obj = new MyCircularQueue();
    expect(obj.enQueue(1)).toEqual(true);
    expect(obj.deQueue()).toEqual(true);
    expect(obj.Front()).toEqual(1);
    expect(obj.Rear()).toEqual(1);
  });
});
