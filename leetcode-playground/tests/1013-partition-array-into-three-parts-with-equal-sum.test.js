import { canThreePartsEqualSum } from '../1013-partition-array-into-three-parts-with-equal-sum.js';

describe('1013-partition-array-into-three-parts-with-equal-sum', () => {
  it("canThreePartsEqualSum([1, 2, 3, 4, 5])", () => {
    const result = canThreePartsEqualSum([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("canThreePartsEqualSum([])", () => {
    const result = canThreePartsEqualSum([]);
    expect(result).toEqual(false);
  });

  it("canThreePartsEqualSum([1])", () => {
    const result = canThreePartsEqualSum([1]);
    expect(result).toEqual(false);
  });

  it("canThreePartsEqualSum([1, 1])", () => {
    const result = canThreePartsEqualSum([1, 1]);
    expect(result).toEqual(false);
  });

  it("canThreePartsEqualSum([3, 1, 4, 1, 5])", () => {
    const result = canThreePartsEqualSum([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("canThreePartsEqualSum([-1, 0, 1])", () => {
    const result = canThreePartsEqualSum([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
