import { prefixesDivBy5 } from '../1018-binary-prefix-divisible-by-5.js';

describe('1018-binary-prefix-divisible-by-5', () => {
  it("prefixesDivBy5([1, 2, 3, 4, 5])", () => {
    const result = prefixesDivBy5([1, 2, 3, 4, 5]);
    expect(result).toEqual([false, false, false, false, false]);
  });

  it("prefixesDivBy5([])", () => {
    const result = prefixesDivBy5([]);
    expect(result).toEqual([]);
  });

  it("prefixesDivBy5([1])", () => {
    const result = prefixesDivBy5([1]);
    expect(result).toEqual([false]);
  });

  it("prefixesDivBy5([1, 1])", () => {
    const result = prefixesDivBy5([1, 1]);
    expect(result).toEqual([false, false]);
  });

  it("prefixesDivBy5([3, 1, 4, 1, 5])", () => {
    const result = prefixesDivBy5([3, 1, 4, 1, 5]);
    expect(result).toEqual([false, false, false, false, false]);
  });

  it("prefixesDivBy5([-1, 0, 1])", () => {
    const result = prefixesDivBy5([-1, 0, 1]);
    expect(result).toEqual([false, false, false]);
  });
});
