import { CustomStack } from '../1381-design-a-stack-with-increment-operation.js';

describe('1381-design-a-stack-with-increment-operation', () => {
  it("sequence 1", () => {
    const obj = new CustomStack();
    obj.push(1);
    expect(obj.pop()).toEqual(-1);
    obj.increment(1, 1);
  });
});
