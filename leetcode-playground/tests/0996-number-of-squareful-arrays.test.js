import { numSquarefulPerms } from '../0996-number-of-squareful-arrays.js';

describe('0996-number-of-squareful-arrays', () => {
  it("numSquarefulPerms([1, 2, 3, 4, 5])", () => {
    const result = numSquarefulPerms([1, 2, 3, 4, 5]);
    expect(result).toEqual(0);
  });

  it("numSquarefulPerms([])", () => {
    const result = numSquarefulPerms([]);
    expect(result).toEqual(1);
  });

  it("numSquarefulPerms([1])", () => {
    const result = numSquarefulPerms([1]);
    expect(result).toEqual(1);
  });

  it("numSquarefulPerms([1, 1])", () => {
    const result = numSquarefulPerms([1, 1]);
    expect(result).toEqual(0);
  });

  it("numSquarefulPerms([3, 1, 4, 1, 5])", () => {
    const result = numSquarefulPerms([3, 1, 4, 1, 5]);
    expect(result).toEqual(0);
  });

  it("numSquarefulPerms([-1, 0, 1])", () => {
    const result = numSquarefulPerms([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
