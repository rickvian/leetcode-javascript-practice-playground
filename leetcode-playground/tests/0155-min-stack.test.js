import { MinStack } from '../0155-min-stack.js';

describe('0155-min-stack', () => {
  it("sequence 1", () => {
    const obj = new MinStack();
    obj.push(-2);
    obj.push(0);
    obj.push(-3);
    expect(obj.getMin()).toEqual(-3);
    obj.pop();
    expect(obj.top()).toEqual(0);
    expect(obj.getMin()).toEqual(-2);
  });

  it("sequence 2", () => {
    const obj = new MinStack();
    obj.push(1);
    obj.push(2);
    expect(obj.top()).toEqual(2);
    expect(obj.getMin()).toEqual(1);
    obj.pop();
  });

  it("sequence 3", () => {
    const obj = new MinStack();
    obj.push(0);
  });
});
