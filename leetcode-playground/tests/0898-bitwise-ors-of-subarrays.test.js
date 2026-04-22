import { subarrayBitwiseORs } from '../0898-bitwise-ors-of-subarrays.js';

describe('0898-bitwise-ors-of-subarrays', () => {
  it("subarrayBitwiseORs([1, 2, 3, 4, 5])", () => {
    const result = subarrayBitwiseORs([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("subarrayBitwiseORs([])", () => {
    const result = subarrayBitwiseORs([]);
    expect(result).toEqual(0);
  });

  it("subarrayBitwiseORs([1])", () => {
    const result = subarrayBitwiseORs([1]);
    expect(result).toEqual(1);
  });

  it("subarrayBitwiseORs([1, 1])", () => {
    const result = subarrayBitwiseORs([1, 1]);
    expect(result).toEqual(1);
  });

  it("subarrayBitwiseORs([3, 1, 4, 1, 5])", () => {
    const result = subarrayBitwiseORs([3, 1, 4, 1, 5]);
    expect(result).toEqual(5);
  });

  it("subarrayBitwiseORs([-1, 0, 1])", () => {
    const result = subarrayBitwiseORs([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
