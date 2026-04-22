import { FreqStack } from '../0895-maximum-frequency-stack.js';

describe('0895-maximum-frequency-stack', () => {
  it("sequence 1", () => {
    const obj = new FreqStack();
    obj.push(1);
    expect(obj.pop()).toEqual(1);
  });
});
