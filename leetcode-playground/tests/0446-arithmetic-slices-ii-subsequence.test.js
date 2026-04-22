import { numberOfArithmeticSlices } from '../0446-arithmetic-slices-ii-subsequence.js';

describe('0446-arithmetic-slices-ii-subsequence', () => {
  it("numberOfArithmeticSlices([1, 2, 3, 4, 5])", () => {
    const result = numberOfArithmeticSlices([1, 2, 3, 4, 5]);
    expect(result).toEqual(7);
  });

  it("numberOfArithmeticSlices([])", () => {
    const result = numberOfArithmeticSlices([]);
    expect(result).toEqual(0);
  });

  it("numberOfArithmeticSlices([1])", () => {
    const result = numberOfArithmeticSlices([1]);
    expect(result).toEqual(0);
  });

  it("numberOfArithmeticSlices([1, 1])", () => {
    const result = numberOfArithmeticSlices([1, 1]);
    expect(result).toEqual(0);
  });

  it("numberOfArithmeticSlices([3, 1, 4, 1, 5])", () => {
    const result = numberOfArithmeticSlices([3, 1, 4, 1, 5]);
    expect(result).toEqual(1);
  });

  it("numberOfArithmeticSlices([-1, 0, 1])", () => {
    const result = numberOfArithmeticSlices([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
