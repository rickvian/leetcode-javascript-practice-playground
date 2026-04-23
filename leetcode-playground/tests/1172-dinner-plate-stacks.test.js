import { DinnerPlates } from '../1172-dinner-plate-stacks.js';

describe('1172-dinner-plate-stacks', () => {
  it("sequence 1", () => {
    const obj = new DinnerPlates();
    obj.push(1);
    expect(obj.pop()).toEqual(1);
    expect(obj.popAtStack(1)).toEqual(-1);
  });
});
