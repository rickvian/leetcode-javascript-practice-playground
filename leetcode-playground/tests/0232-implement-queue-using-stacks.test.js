import { MyQueue } from '../0232-implement-queue-using-stacks.js';

describe('0232-implement-queue-using-stacks', () => {
  it("sequence 1", () => {
    const obj = new MyQueue();
    obj.push(1);
    obj.push(2);
    expect(obj.peek()).toEqual(1);
    expect(obj.pop()).toEqual(1);
    expect(obj.empty()).toEqual(false);
  });

  it("sequence 2", () => {
    const obj = new MyQueue();
    obj.push(3);
    expect(obj.peek()).toEqual(3);
    expect(obj.pop()).toEqual(3);
    expect(obj.empty()).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new MyQueue();
    obj.push(1);
    obj.push(2);
    expect(obj.pop()).toEqual(1);
    expect(obj.peek()).toEqual(2);
  });
});
