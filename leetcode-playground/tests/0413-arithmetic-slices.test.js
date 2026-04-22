import { numberOfArithmeticSlices } from '../0413-arithmetic-slices.js';

describe('0413-arithmetic-slices', () => {
  it("numberOfArithmeticSlices([1, 2, 3, 4, 5])", () => {
    const result = numberOfArithmeticSlices([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
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
    expect(result).toEqual(0);
  });

  it("numberOfArithmeticSlices([-1, 0, 1])", () => {
    const result = numberOfArithmeticSlices([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
