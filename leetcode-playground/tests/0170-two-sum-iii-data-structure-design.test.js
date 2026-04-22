import { TwoSum } from '../0170-two-sum-iii-data-structure-design.js';

describe('0170-two-sum-iii-data-structure-design', () => {
  it("sequence 1", () => {
    const obj = new TwoSum();
    obj.add(1);
    expect(obj.find(1)).toEqual(false);
  });
});
