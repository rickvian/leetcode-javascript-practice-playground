import { MyStack } from '../0225-implement-stack-using-queues.js';

describe('0225-implement-stack-using-queues', () => {
  it("sequence 1", () => {
    const obj = new MyStack();
    obj.push(1);
    obj.push(2);
    expect(obj.top()).toEqual(2);
    expect(obj.pop()).toEqual(2);
    expect(obj.empty()).toEqual(false);
  });

  it("sequence 2", () => {
    const obj = new MyStack();
    obj.push(3);
    expect(obj.top()).toEqual(3);
    expect(obj.pop()).toEqual(3);
    expect(obj.empty()).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new MyStack();
    obj.push(1);
    obj.push(2);
    expect(obj.pop()).toEqual(2);
    expect(obj.top()).toEqual(1);
  });
});
