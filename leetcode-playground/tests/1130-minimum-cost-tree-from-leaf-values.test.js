import { mctFromLeafValues } from '../1130-minimum-cost-tree-from-leaf-values.js';

describe('1130-minimum-cost-tree-from-leaf-values', () => {
  it("mctFromLeafValues([1, 2, 3, 4, 5])", () => {
    const result = mctFromLeafValues([1, 2, 3, 4, 5]);
    expect(result).toEqual(40);
  });

  it("mctFromLeafValues([])", () => {
    const result = mctFromLeafValues([]);
    expect(result).toEqual(0);
  });

  it("mctFromLeafValues([1])", () => {
    const result = mctFromLeafValues([1]);
    expect(result).toEqual(0);
  });

  it("mctFromLeafValues([1, 1])", () => {
    const result = mctFromLeafValues([1, 1]);
    expect(result).toEqual(1);
  });

  it("mctFromLeafValues([3, 1, 4, 1, 5])", () => {
    const result = mctFromLeafValues([3, 1, 4, 1, 5]);
    expect(result).toEqual(39);
  });

  it("mctFromLeafValues([-1, 0, 1])", () => {
    const result = mctFromLeafValues([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
