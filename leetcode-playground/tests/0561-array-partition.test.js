import { arrayPairSum } from '../0561-array-partition.js';

describe('0561-array-partition', () => {
  it("arrayPairSum([])", () => {
    const result = arrayPairSum([]);
    expect(result).toEqual(0);
  });

  it("arrayPairSum([1, 1])", () => {
    const result = arrayPairSum([1, 1]);
    expect(result).toEqual(1);
  });
});
